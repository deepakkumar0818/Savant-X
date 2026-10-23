import { NextRequest, NextResponse } from 'next/server';
import { buildEmailHtml, sendNotificationEmail } from '@/lib/notificationEmail';
import { isDuplicateSubmission, isRateLimited, rememberSubmission } from '@/lib/submissionGuard';
import { handleLeadRequest, type LeadInput } from '@/lib/zohoLeads';
import { getZohoClient, submitViaWebToLead } from '@/lib/zohoLeadService';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Team email, sent only after Zoho has confirmed the lead. (The admin reads leads from Zoho CRM.) */
async function afterCreated(lead: LeadInput) {
  const subject = `[Enquiry] ${lead.name}${lead.company ? ` (${lead.company})` : ''}`;
  const service = [lead.service, lead.source && `via ${lead.source}`].filter(Boolean).join(' — ');
  const email = await sendNotificationEmail(subject, buildEmailHtml('enquiry', { ...lead, service }));
  if (!email.ok) console.error(`[leads] notification email not delivered: ${email.message}`);
}

/**
 * Creates a Zoho CRM Lead from the website's enquiry forms.
 * Responds with success only after Zoho confirms the record was created.
 */
export async function POST(request: NextRequest) {
  const result = await handleLeadRequest(request, {
    getClient: getZohoClient,
    fallback: submitViaWebToLead,
    isRateLimited,
    isDuplicate: isDuplicateSubmission,
    remember: rememberSubmission,
    afterCreated,
  });
  return NextResponse.json(result.body, { status: result.status, headers: { 'Cache-Control': 'no-store' } });
}
