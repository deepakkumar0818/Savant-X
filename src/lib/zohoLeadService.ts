import {
  buildLeadRecord,
  createZohoClient,
  readZohoConfig,
  ZohoError,
  zohoAppsFromService,
  type LeadInput,
  type ZohoClient,
} from '@/lib/zohoLeads';
import { submitZohoLeadToCrm } from '@/lib/zohoCrmWebToLead';

/** Server-side wiring for Zoho CRM Leads. Import only from API routes. */

let client: ZohoClient | null = null;
let clientFor = '';

/**
 * The Zoho API client, reused across requests so its access token is cached
 * (Zoho limits how often tokens can be refreshed). Null until OAuth is configured.
 */
export function getZohoClient(): ZohoClient | null {
  const config = readZohoConfig(process.env);
  if (!config) return null;
  const key = [config.clientId, config.clientSecret, config.refreshToken, config.accountsUrl, config.apiDomain, config.leadSource].join('|');
  if (!client || clientFor !== key) {
    client = createZohoClient(config);
    clientFor = key;
  }
  return client;
}

/**
 * Creates a Lead for forms that don't go through /api/leads (support, newsletter, Zoho strategy).
 * Uses the API when OAuth is configured, and Web-to-Lead when it isn't or Zoho rejects the token.
 * `ok` is true only when Zoho accepted the record.
 */
export async function createLeadFromForm(lead: LeadInput, tag: string): Promise<{ ok: boolean; message: string }> {
  const zoho = getZohoClient();
  if (zoho) {
    try {
      await zoho.createLead(buildLeadRecord(lead, zoho.leadSource), (dropped) =>
        console.error(`[${tag}] created without an optional field Zoho rejected: ${dropped}`)
      );
      return { ok: true, message: 'Lead created.' };
    } catch (error) {
      if (!(error instanceof ZohoError && error.kind === 'auth')) {
        return { ok: false, message: error instanceof ZohoError ? `Zoho CRM ${error.kind}: ${error.detail}` : 'Zoho CRM request failed.' };
      }
      console.error(`[${tag}] Zoho API auth failed (${error.detail}); using Web-to-Lead`);
    }
  }
  return (await submitViaWebToLead(lead)) ? { ok: true, message: 'Lead created via Web-to-Lead.' } : { ok: false, message: 'Web-to-Lead failed.' };
}

/** The site's previous Web-to-Lead submission, used only while OAuth is not configured. */
export async function submitViaWebToLead(lead: LeadInput): Promise<boolean> {
  const result = await submitZohoLeadToCrm({
    lastName: lead.name,
    company: lead.company || 'Website Enquiry',
    email: lead.email,
    mobile: lead.phone,
    service: lead.service || undefined,
    interestZohoApps: lead.zohoApps || zohoAppsFromService(lead.service) || undefined,
    description: [
      lead.message,
      [lead.service && `Service: ${lead.service}`, lead.budget && `Budget: ${lead.budget}`, lead.source && `Submitted from: ${lead.source}`]
        .filter(Boolean)
        .join('\n'),
    ]
      .filter(Boolean)
      .join('\n\n'),
  });
  return result.ok;
}
