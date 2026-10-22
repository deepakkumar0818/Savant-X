import nodemailer from 'nodemailer';
import { loadEmailEnv } from '@/lib/emailEnv';
import { escapeHtml } from '@/lib/submissionGuard';

/** Team notification emails for website forms. Server-only. */

/** Internal inbox that receives website notifications. */
const NOTIFY_EMAIL = 'deepakkumr0818@gmail.com';

export type Kind = 'enquiry' | 'support' | 'newsletter';

export async function sendNotificationEmail(subject: string, html: string): Promise<{ ok: boolean; message: string }> {
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

export function buildEmailHtml(kind: Kind, f: Record<string, string>) {
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
