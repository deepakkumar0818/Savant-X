import { createZohoClient, readZohoConfig, zohoAppsFromService, type LeadInput, type ZohoClient } from '@/lib/zohoLeads';
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
