import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveContact } from '@/lib/contactStorage';
import { loadEmailEnv } from '@/lib/emailEnv';
import { submitZohoLeadToCrm, type ZohoLeadSubmitResult } from '@/lib/zohoCrmWebToLead';
import {
  clientKey,
  escapeHtml,
  isDuplicateSubmission,
  isRateLimited,
  isValidEmail,
  rememberSubmission,
} from '@/lib/submissionGuard';

/** Internal inbox that receives website notifications. */
const NOTIFY_EMAIL = 'deepakkumr0818@gmail.com';

type Kind = 'enquiry' | 'support' | 'newsletter';

const MAX_LENGTH = { short: 200, message: 5000 } as const;

function clean(value: unknown, max: number = MAX_LENGTH.short): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

async function sendNotificationEmail(subject: string, html: string): Promise<{ ok: boolean; message: string }> {
  loadEmailEnv();
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    return { ok: false, message: 'Email is not configured (EMAIL_USER / EMAIL_PASS missing).' };
  }
  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
    await transporter.sendMail({ from: user, to: NOTIFY_EMAIL, subject, html });
    return { ok: true, message: 'sent' };
  } catch (error) {
    const err = error as Error & { code?: string };
    return {
      ok: false,
      message: err.code === 'EAUTH' ? 'Email login failed (check the Gmail App Password).' : 'Email delivery failed.',
    };
  }
}

function row(label: string, value: string) {
  return `<p style="margin: 5px 0; color: #475569;"><strong>${label}:</strong> ${escapeHtml(value) || 'Not provided'}</p>`;
}

function buildEmailHtml(kind: Kind, f: Record<string, string>) {
  const heading =
    kind === 'support' ? 'New Support Request' : kind === 'newsletter' ? 'New Newsletter Signup' : 'New Enquiry';
  const submitted = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
      <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">${heading}</h1>
        <p style="color: #e0e7ff; margin: 10px 0 0 0;">SavantX website</p>
      </div>
      <div style="background: white; padding: 30px; border-radius: 10px;">
        ${row('Name', f.name)}
        ${row('Email', f.email)}
        ${kind === 'enquiry' ? row('Phone', f.phone) + row('Company', f.company) + row('Service', f.service) + row('Budget', f.budget) : ''}
        ${kind === 'support' ? row('Subject', f.subject) : ''}
        <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 16px;">
          <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(f.message)}</p>
        </div>
        <p style="margin-top: 20px; color: #64748b; font-size: 14px;">Submitted: ${submitted}</p>
      </div>
    </div>`;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const kind: Kind = body.kind === 'support' || body.kind === 'newsletter' ? body.kind : 'enquiry';
  const f = {
    name: clean(body.name),
    email: clean(body.email),
    company: clean(body.company),
    phone: clean(body.phone, 40),
    service: clean(body.service),
    budget: clean(body.budget),
    subject: clean(body.subject),
    message: clean(body.message, MAX_LENGTH.message),
  };

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots learn nothing.
  if (clean(body.website)) {
    return NextResponse.json({ message: 'Thank you.' });
  }

  // Validation per form type.
  if (!f.email || !isValidEmail(f.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (kind !== 'newsletter') {
    if (!f.name) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    if (!f.message) return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 });
  }
  if (kind === 'support' && !f.subject) {
    return NextResponse.json({ error: 'Please enter a subject.' }, { status: 400 });
  }
  if (kind === 'enquiry' && !f.company) {
    return NextResponse.json({ error: 'Please enter your company name.' }, { status: 400 });
  }

  // Counted only for valid submissions, so correcting a typo never locks anyone out.
  if (isRateLimited(clientKey(request.headers))) {
    return NextResponse.json(
      { error: 'Too many submissions. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  const dedupeKey = [kind, f.email, f.subject, f.message];
  if (isDuplicateSubmission(dedupeKey)) {
    return NextResponse.json({ message: 'We already received this message. We will be in touch soon.', duplicate: true });
  }

  const subject =
    kind === 'support'
      ? `[Support] ${f.subject} — ${f.name}`
      : kind === 'newsletter'
        ? 'Newsletter signup'
        : `[Enquiry] ${f.name} (${f.company})`;

  const emailTask = sendNotificationEmail(subject, buildEmailHtml(kind, f));

  // Only sales enquiries become CRM leads; support and newsletter stay out of the Leads module.
  const crmTask: Promise<ZohoLeadSubmitResult | null> =
    kind === 'enquiry'
      ? submitZohoLeadToCrm({
          lastName: f.name,
          company: f.company,
          email: f.email,
          mobile: f.phone,
          service: f.service || undefined,
          description: [
            f.service && `Service: ${f.service}`,
            f.budget && `Budget: ${f.budget}`,
            f.message,
          ]
            .filter(Boolean)
            .join('\n'),
        })
      : Promise.resolve(null);

  const [emailResult, crmResult] = await Promise.allSettled([emailTask, crmTask]);
  const email = emailResult.status === 'fulfilled' ? emailResult.value : { ok: false, message: 'Email delivery failed.' };
  const crm = crmResult.status === 'fulfilled' ? crmResult.value : { ok: false, message: 'Zoho CRM request failed.' };

  // Log outcomes only — never the visitor's personal details.
  if (!email.ok) console.error(`[contact:${kind}] email not delivered: ${email.message}`);
  if (crm && !crm.ok) console.error(`[contact:${kind}] Zoho CRM lead not created: ${crm.message}`);

  const delivered = email.ok || Boolean(crm?.ok);
  if (!delivered) {
    return NextResponse.json(
      { error: 'We could not send your message right now. Please try again, or email or call us directly.' },
      { status: 502 }
    );
  }

  rememberSubmission(dedupeKey);
  try {
    saveContact({
      name: f.name || 'Newsletter subscriber',
      email: f.email,
      company: f.company,
      phone: f.phone,
      service: kind === 'support' ? `Support: ${f.subject}` : kind === 'newsletter' ? 'Newsletter' : f.service,
      message: f.message,
      budget: f.budget,
    });
  } catch {
    // Admin copy is best-effort; the message was already delivered.
  }

  return NextResponse.json({
    message:
      kind === 'newsletter'
        ? "Thanks — you're on the list."
        : 'Thank you! We have received your message and will get back to you soon.',
  });
}
