import { NextRequest, NextResponse } from 'next/server';
import { submitZohoLeadToGoogleSheet } from '@/lib/zohoGoogleSheet';
import { submitZohoLeadToCrm, validateZohoLeadPayload } from '@/lib/zohoCrmWebToLead';

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

    const sheetPayload = {
      fullName: payload.lastName,
      companyName: payload.company,
      email: payload.email,
      phone: payload.mobile,
      zohoApps: payload.interestZohoApps,
      requirement: payload.description,
    };

    const [crmResult, sheetResult] = await Promise.allSettled([
      submitZohoLeadToCrm(payload),
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

    if (crm.ok) {
      return NextResponse.json({ message: crm.message });
    }

    if (sheet.ok) {
      return NextResponse.json({
        message: sheet.message || "Thank you! We've received your request and will reach out soon.",
      });
    }

    return NextResponse.json(
      { error: crm.message || sheet.message || 'Submission failed. Please try again.' },
      { status: 500 }
    );
  } catch (err) {
    console.error('Zoho form proxy error:', err);
    return NextResponse.json(
      { error: 'Network error. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
