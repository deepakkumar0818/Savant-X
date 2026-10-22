import { NextRequest, NextResponse } from 'next/server';
import { submitZohoLeadToGoogleSheet } from '@/lib/zohoGoogleSheet';
import { submitZohoLeadToCrm, validateZohoLeadPayload, type ZohoLeadPayload } from '@/lib/zohoCrmWebToLead';
import { buildLeadRecord, ZohoError } from '@/lib/zohoLeads';
import { getZohoClient } from '@/lib/zohoLeadService';
import { clientKey, isDuplicateSubmission, isRateLimited, rememberSubmission } from '@/lib/submissionGuard';

/** Creates the CRM lead through the Zoho API when OAuth is configured, otherwise through Web-to-Lead. */
async function createCrmLead(payload: ZohoLeadPayload): Promise<{ ok: boolean; message: string }> {
  const client = getZohoClient();
  if (!client) return submitZohoLeadToCrm(payload);
  try {
    await client.createLead(
      buildLeadRecord(
        {
          name: payload.lastName,
          email: payload.email ?? '',
          phone: payload.mobile ?? '',
          company: payload.company,
          message: payload.description?.trim() ?? '',
          service: payload.service ?? '',
          budget: '',
          source: 'Zoho strategy form',
          zohoApps: payload.interestZohoApps?.trim().slice(0, 255),
        },
        client.leadSource
      ),
      (dropped) => console.error(`[zoho-form] created without an optional field Zoho rejected: ${dropped}`)
    );
    return { ok: true, message: "Thank you! We've received your request and will reach out soon." };
  } catch (error) {
    return { ok: false, message: error instanceof ZohoError ? `Zoho CRM ${error.kind}: ${error.detail}` : 'Zoho CRM request failed.' };
  }
}

/**
 * Proxies Zoho strategy form submissions to Zoho CRM and Google Sheets in parallel.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      zohoApps,
      requirement,
      honeypot,
      service,
    } = body;

    const payload = {
      lastName: String(fullName ?? ''),
      company: String(companyName ?? ''),
      email: String(email ?? ''),
      mobile: String(phone ?? ''),
      description: String(requirement ?? ''),
      interestZohoApps: String(zohoApps ?? ''),
      honeypot: String(honeypot ?? ''),
      service: service ? String(service) : undefined,
    };

    const validationError = validateZohoLeadPayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (isRateLimited(clientKey(request.headers))) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

    const dedupeKey = ['zoho-form', payload.email, payload.mobile, payload.description];
    if (isDuplicateSubmission(dedupeKey)) {
      return NextResponse.json({ message: 'We already received this request. We will be in touch soon.' });
    }

    const sheetPayload = {
      fullName: payload.lastName,
      companyName: payload.company,
      email: payload.email,
      phone: payload.mobile,
      zohoApps: payload.interestZohoApps,
      requirement: payload.description,
    };

    const [crmResult, sheetResult] = await Promise.allSettled([
      createCrmLead(payload),
      submitZohoLeadToGoogleSheet(sheetPayload),
    ]);

    const crm =
      crmResult.status === 'fulfilled'
        ? crmResult.value
        : { ok: false, message: 'Zoho CRM submission failed.' };
    const sheet =
      sheetResult.status === 'fulfilled'
        ? sheetResult.value
        : { ok: false, message: 'Google Sheet submission failed.' };

    if (!crm.ok) {
      console.error('Zoho CRM submission failed:', crm.message);
    }
    if (!sheet.ok) {
      console.error('Google Sheet submission failed:', sheet.message);
    }

    if (crm.ok || sheet.ok) rememberSubmission(dedupeKey);

    if (crm.ok) {
      return NextResponse.json({ message: "Thank you! We've received your request and will reach out soon." });
    }

    if (sheet.ok) {
      return NextResponse.json({
        message: sheet.message || "Thank you! We've received your request and will reach out soon.",
      });
    }

    return NextResponse.json(
      { error: 'Submission failed. Please try again, or email or call us directly.' },
      { status: 500 }
    );
  } catch (err) {
    console.error('Zoho form proxy error:', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json(
      { error: 'Network error. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
