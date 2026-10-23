import { readZohoConfig } from '@/lib/zohoLeads';
import { getZohoClient } from '@/lib/zohoLeadService';
import { StoreError } from './store';

/**
 * Reading and updating Zoho CRM Leads for the admin. Needs the refresh token to include
 * ZohoCRM.modules.leads.READ and .UPDATE (see docs/admin-cms.md, "Leads").
 */

export type LeadRow = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  leadType: string;
  budget: string;
  createdAt: string;
  description: string;
};

const FIELDS = ['First_Name', 'Last_Name', 'Company', 'Email', 'Phone', 'Mobile', 'Lead_Source', 'Lead_Status', 'Lead_Type', 'Budget', 'Created_Time', 'Description'];

async function zoho<T>(path: string, init: RequestInit = {}): Promise<T> {
  const config = readZohoConfig(process.env);
  const client = getZohoClient();
  if (!config || !client) throw new StoreError(503, 'Zoho CRM is not connected (ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN).');
  const call = async (token: string) =>
    fetch(`${config.apiDomain}/crm/v8${path}`, {
      ...init,
      cache: 'no-store',
      headers: { Authorization: `Zoho-oauthtoken ${token}`, ...(init.body ? { 'Content-Type': 'application/json' } : {}) },
    });
  let res = await call(await client.getAccessToken());
  if (res.status === 401) {
    const body = (await res.clone().json().catch(() => ({}))) as { code?: string };
    if (body.code === 'OAUTH_SCOPE_MISMATCH') {
      throw new StoreError(409, 'SCOPE: Zoho has not given the website permission to read or update leads yet.');
    }
    res = await call(await client.getAccessToken(true));
  }
  if (res.status === 204) return {} as T;
  const data = (await res.json().catch(() => ({}))) as T & { code?: string; message?: string };
  if (!res.ok) {
    if (data.code === 'OAUTH_SCOPE_MISMATCH') throw new StoreError(409, 'SCOPE: Zoho has not given the website permission to read or update leads yet.');
    throw new StoreError(502, `Zoho CRM error: ${data.code ?? res.status}`);
  }
  return data;
}

type ZohoLead = Record<string, unknown> & { id: string };
const text = (v: unknown) => (typeof v === 'string' ? v : '');

function toRow(r: ZohoLead): LeadRow {
  return {
    id: r.id,
    name: [text(r.First_Name), text(r.Last_Name)].filter(Boolean).join(' '),
    company: text(r.Company),
    email: text(r.Email),
    phone: text(r.Phone) || text(r.Mobile),
    source: text(r.Lead_Source),
    status: text(r.Lead_Status),
    leadType: text(r.Lead_Type),
    budget: text(r.Budget),
    createdAt: text(r.Created_Time),
    description: text(r.Description),
  };
}

export async function listLeads({ page = 1, search = '' }: { page?: number; search?: string }) {
  const params = new URLSearchParams({ fields: FIELDS.join(','), per_page: '50', page: String(page) });
  const term = search.trim();
  const path = term
    ? `/Leads/search?${new URLSearchParams({ word: term.slice(0, 100), fields: FIELDS.join(','), per_page: '50', page: String(page) })}`
    : `/Leads?${params}&sort_by=Created_Time&sort_order=desc`;
  const data = await zoho<{ data?: ZohoLead[]; info?: { more_records?: boolean } }>(path);
  return { leads: (data.data ?? []).map(toRow), more: Boolean(data.info?.more_records) };
}

type FieldsResponse = { fields?: { api_name: string; pick_list_values?: { display_value: string; actual_value: string }[] }[] };

/** A Leads picklist exactly as stored in the CRM (display label + stored value). */
async function picklist(apiName: string): Promise<{ label: string; value: string }[]> {
  const data = await zoho<FieldsResponse>('/settings/fields?module=Leads');
  const field = data.fields?.find((f) => f.api_name === apiName);
  return (field?.pick_list_values ?? []).filter((v) => v.actual_value !== '-None-').map((v) => ({ label: v.display_value, value: v.actual_value }));
}

export const leadStatuses = () => picklist('Lead_Status');

/** Values the website's mapping depends on, for checks in the admin editors. */
export async function crmPicklists() {
  const [itSubcategories, leadTypes] = await Promise.all([picklist('IT_Lead_Subcategory1'), picklist('Lead_Type')]);
  return { itSubcategories: itSubcategories.map((v) => v.value), leadTypes: leadTypes.map((v) => v.value) };
}

export async function updateLeadStatus(id: string, status: string) {
  if (!/^\d{5,25}$/.test(id)) throw new StoreError(400, 'Invalid lead.');
  const allowed = await leadStatuses();
  if (!allowed.some((s) => s.value === status)) throw new StoreError(400, 'Choose a status from the list.');
  const data = await zoho<{ data?: { code?: string }[] }>(`/Leads/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data: [{ Lead_Status: status }], trigger: ['workflow'] }),
  });
  if (data.data?.[0]?.code !== 'SUCCESS') throw new StoreError(502, 'Zoho did not confirm the status change.');
}

export function crmLeadUrl(id: string) {
  return `https://crm.zoho.in/crm/tab/Leads/${id}`;
}
