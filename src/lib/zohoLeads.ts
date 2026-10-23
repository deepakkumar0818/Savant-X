/**
 * Zoho CRM Leads integration (REST API v8, OAuth refresh-token flow).
 *
 * Server-only. Credentials come from environment variables and never leave the server:
 * they are not returned to the browser and never logged.
 *
 * This file deliberately has no project imports, so its logic can be tested with
 * Node's built-in test runner (see tests/zoho-leads.test.mjs).
 */

export type ZohoConfig = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accountsUrl: string;
  apiDomain: string;
  leadSource: string;
};

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
  budget: string;
  /** Which page or form the lead came from, e.g. "Zoho page". */
  source: string;
  /** Zoho apps the visitor uses or is interested in (strategy form). */
  zohoApps?: string;
  /** A separate mobile number. Only sent to Zoho's Mobile field when a form actually asks for one. */
  mobile?: string;
};

/**
 * Every Leads field and picklist value the website writes, taken from the SavantX CRM
 * (Setup → Developer Hub → APIs → API names, Leads, plus the field's picklist options).
 * `npm run zoho:oauth -- inspect` checks these against the live CRM; update them here
 * if a field or picklist value is renamed in Zoho.
 */
export const LEAD_FIELDS = {
  writable: [
    'First_Name',
    'Last_Name',
    'Email',
    'Phone',
    'Mobile',
    'Company',
    'Description',
    'Lead_Source',
    'Lead_Status',
    'Rating',
    'Lead_Type',
    'IT_Lead_Subcategory1',
    'Electronics_Lead_Subcategory1',
    'Budget',
    'Interest_Zoho_Apps',
    'Contact_Date',
    'Name_Email',
  ],
  // Stored ("actual") values, which the API requires. Some differ from the label shown in CRM.
  picklists: {
    Lead_Source: ['Website', 'Contact Form'],
    Lead_Status: ['Attempted to Contact'], // shown in CRM as "New Lead"
    Rating: ['ShutDown', 'Medium', 'Low'], // shown in CRM as "High", "Medium", "Low"
    Lead_Type: ['IT Services', 'Electronics Hardware', 'Both', 'Request For Demo'],
    IT_Lead_Subcategory1: [
      'Website Development',
      'Zoho Development',
      'Mobile App',
      'AI / ML',
      'Automation',
      'Shopify',
      'ERP',
      // SavantX products, used for demo requests from the Products page.
      'Vidya Setu',
      'Sehat Setu',
      'FleetMint',
      'Student Portal',
      'Food Ordering App',
      'Garage Management',
    ],
    Electronics_Lead_Subcategory1: ['Embedded Systems', 'PCB Design', 'IoT', 'Industrial Hardware', '3D Printing', 'Product Development', 'Automation'],
  },
} as const;

/** Stored Lead Status value for the label "New Lead". */
export const LEAD_STATUS_NEW = 'Attempted to Contact';
/** Priority labels as shown in CRM → stored values. */
export const PRIORITY_VALUE = { High: 'ShutDown', Medium: 'Medium', Low: 'Low' } as const;

export type LeadType = (typeof LEAD_FIELDS.picklists.Lead_Type)[number];
export type Priority = keyof typeof PRIORITY_VALUE;
type ItSubcategory = (typeof LEAD_FIELDS.picklists.IT_Lead_Subcategory1)[number];
type ElectronicsSubcategory = (typeof LEAD_FIELDS.picklists.Electronics_Lead_Subcategory1)[number];

/** API names from the SavantX Zoho CRM Leads module. */
export type ZohoLeadRecord = {
  First_Name?: string;
  Last_Name: string;
  Email?: string;
  Phone?: string;
  Mobile?: string;
  Company: string;
  Description?: string;
  Lead_Source: string; // a LEAD_FIELDS.picklists.Lead_Source value, or ZOHO_LEAD_SOURCE
  Lead_Status?: (typeof LEAD_FIELDS.picklists.Lead_Status)[number];
  /** Shown as "Priority" in CRM; stored values, see PRIORITY_VALUE. */
  Rating?: (typeof PRIORITY_VALUE)[Priority];
  Lead_Type?: LeadType;
  IT_Lead_Subcategory1?: ItSubcategory[];
  Electronics_Lead_Subcategory1?: ElectronicsSubcategory[];
  Budget?: string;
  Interest_Zoho_Apps?: string;
  Contact_Date?: string;
  Name_Email?: string;
};

/**
 * Optional fields. If Zoho rejects one of these (e.g. a picklist value was renamed in CRM),
 * the lead is created without it rather than lost.
 */
const OPTIONAL_FIELDS = new Set<keyof ZohoLeadRecord>([
  'Lead_Status',
  'Rating',
  'Lead_Type',
  'IT_Lead_Subcategory1',
  'Electronics_Lead_Subcategory1',
  'Budget',
  'Interest_Zoho_Apps',
  'Contact_Date',
  'Name_Email',
  'Lead_Source',
  'Mobile',
]);

type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

/** Company is required by Zoho; used when the visitor leaves it blank. */
export const COMPANY_FALLBACK = 'Website Enquiry';
export const MAX_BODY_BYTES = 16 * 1024;
const REQUEST_TIMEOUT_MS = 8000;
/** Refresh a little before Zoho's expiry so a token never dies mid-request. */
const TOKEN_EXPIRY_MARGIN_MS = 60_000;

const LIMITS = { name: 120, email: 254, phone: 40, mobile: 40, company: 200, message: 5000, service: 200, budget: 100, source: 100, zohoApps: 255 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()./-]{7,40}$/;

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

function setting(env: Record<string, string | undefined>, key: string): string {
  const value = env[key]?.trim() ?? '';
  // Treat template placeholders as missing so a half-filled .env.local is never "configured".
  return /^REPLACE_WITH/i.test(value) ? '' : value;
}

/** The Zoho configuration, or null when OAuth credentials are not set up yet. */
export function readZohoConfig(env: Record<string, string | undefined>): ZohoConfig | null {
  const clientId = setting(env, 'ZOHO_CLIENT_ID');
  const clientSecret = setting(env, 'ZOHO_CLIENT_SECRET');
  const refreshToken = setting(env, 'ZOHO_REFRESH_TOKEN');
  if (!clientId || !clientSecret || !refreshToken) return null;
  return {
    clientId,
    clientSecret,
    refreshToken,
    accountsUrl: (setting(env, 'ZOHO_ACCOUNTS_URL') || 'https://accounts.zoho.in').replace(/\/+$/, ''),
    apiDomain: (setting(env, 'ZOHO_API_DOMAIN') || 'https://www.zohoapis.in').replace(/\/+$/, ''),
    leadSource: setting(env, 'ZOHO_LEAD_SOURCE') || 'Website',
  };
}

// ---------------------------------------------------------------------------
// Validation and field mapping
// ---------------------------------------------------------------------------

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export type LeadValidation = { ok: true; lead: LeadInput } | { ok: false; field: keyof LeadInput | 'body'; error: string };

/** Server-side validation. Never trust the browser's checks alone. */
export function validateLead(body: unknown): LeadValidation {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { ok: false, field: 'body', error: 'Invalid request.' };
  const b = body as Record<string, unknown>;
  const lead: LeadInput = {
    name: text(b.name),
    email: text(b.email),
    phone: text(b.phone),
    company: text(b.company),
    message: text(b.message),
    service: text(b.service),
    budget: text(b.budget),
    source: text(b.source),
    zohoApps: text(b.zohoApps),
    mobile: text(b.mobile),
  };

  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if ((lead[key] ?? '').length > LIMITS[key]) return { ok: false, field: key, error: `Please shorten the ${key} field.` };
  }
  if (!lead.name) return { ok: false, field: 'name', error: 'Please enter your name.' };
  if (!EMAIL_PATTERN.test(lead.email)) return { ok: false, field: 'email', error: 'Please enter a valid email address.' };
  if (lead.phone && !PHONE_PATTERN.test(lead.phone)) return { ok: false, field: 'phone', error: 'Please enter a valid phone number, or leave it blank.' };
  if (lead.mobile && !PHONE_PATTERN.test(lead.mobile)) return { ok: false, field: 'mobile', error: 'Please enter a valid mobile number, or leave it blank.' };
  return { ok: true, lead };
}

/** Zoho needs Last_Name. A single word becomes the last name; otherwise the last word is. */
export function splitName(full: string): { First_Name?: string; Last_Name: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return { Last_Name: parts[0] ?? '' };
  return { First_Name: parts.slice(0, -1).join(' '), Last_Name: parts[parts.length - 1] };
}

/**
 * Maps the website form to Zoho Lead fields. API names and picklist values come from the
 * SavantX CRM (Setup → Developer Hub → API names, Leads). Service and budget also stay in
 * Description, so nothing is lost if a field is later renamed.
 */
export function buildLeadRecord(lead: LeadInput, leadSource: string, now: Date = new Date()): ZohoLeadRecord {
  const details = [
    lead.service && `Service: ${lead.service}`,
    lead.budget && `Budget: ${lead.budget}`,
    lead.source && `Submitted from: ${lead.source}`,
  ].filter(Boolean);
  const description = [lead.message, details.join('\n')].filter(Boolean).join('\n\n');
  const { leadType, itSubcategories, electronicsSubcategories } = classifyService(lead);
  const zohoApps = lead.zohoApps || zohoAppsFromService(lead.service);

  return {
    ...splitName(lead.name),
    ...(lead.email ? { Email: lead.email } : {}),
    ...(lead.phone ? { Phone: lead.phone } : {}),
    ...(lead.mobile ? { Mobile: lead.mobile } : {}),
    Company: lead.company || COMPANY_FALLBACK,
    ...(description ? { Description: description } : {}),
    Lead_Source: /contact/i.test(lead.source) ? 'Contact Form' : leadSource,
    Lead_Status: LEAD_STATUS_NEW,
    Rating: PRIORITY_VALUE[priorityFromBudget(lead.budget)],
    ...(leadType ? { Lead_Type: leadType } : {}),
    ...(itSubcategories.length ? { IT_Lead_Subcategory1: itSubcategories } : {}),
    ...(electronicsSubcategories.length ? { Electronics_Lead_Subcategory1: electronicsSubcategories } : {}),
    ...(lead.budget ? { Budget: lead.budget.slice(0, 255) } : {}),
    ...(zohoApps ? { Interest_Zoho_Apps: zohoApps.slice(0, 255) } : {}),
    Contact_Date: zohoDateTimeIST(now),
    ...(lead.email ? { Name_Email: `${lead.name} (${lead.email})`.slice(0, 255) } : {}),
  };
}

/** Lead Type and IT Lead Subcategory picklist values, worked out from the service the visitor chose. */
export function classifyService(lead: Pick<LeadInput, 'service' | 'source'>): { leadType?: LeadType; itSubcategories: ItSubcategory[]; electronicsSubcategories: ElectronicsSubcategory[] } {
  const service = lead.service;

  // Demo requests from the Products page: "Product demo: <product name>".
  const demo = service.match(/^Product demo:\s*(.+)$/i);
  if (demo) {
    const product = LEAD_FIELDS.picklists.IT_Lead_Subcategory1.find((v) => v.toLowerCase() === demo[1].trim().toLowerCase());
    return { leadType: 'Request For Demo', itSubcategories: product ? [product] : [], electronicsSubcategories: [] };
  }

  const hardware = /hardware|electronic|\biot\b|embedded|pcb|firmware|3d print|prototyp|industrial automation/i.test(service);
  const it = new Set<ItSubcategory>();
  if (/zoho|\bcrm\b|creator|books|people setup|recruit|membership/i.test(`${service} ${lead.source}`)) it.add('Zoho Development');
  if (/\berp\b/i.test(service)) it.add('ERP');
  if (/website|web development|web application|e-?commerce/i.test(service)) it.add('Website Development');
  if (/mobile/i.test(service)) it.add('Mobile App');
  if (/\bai\b|\bml\b|analytics/i.test(service)) it.add('AI / ML');
  if (/automation|workflow|integration/i.test(service) && !hardware) it.add('Automation');
  if (/shopify/i.test(service)) it.add('Shopify');

  // Services that name nothing specific (consulting, "other") are still IT enquiries.
  const isIt = it.size > 0 || (!hardware && Boolean(service));
  const leadType: LeadType | undefined = hardware && it.size > 0 ? 'Both' : hardware ? 'Electronics Hardware' : isIt ? 'IT Services' : undefined;

  const hw = new Set<ElectronicsSubcategory>();
  if (/\biot\b/i.test(service)) hw.add('IoT');
  if (/embedded|firmware/i.test(service)) hw.add('Embedded Systems');
  if (/pcb|circuit|electronics design/i.test(service)) hw.add('PCB Design');
  if (/3d print/i.test(service)) hw.add('3D Printing');
  if (/prototyp|product development/i.test(service)) hw.add('Product Development');
  if (/industrial automation/i.test(service)) {
    hw.add('Industrial Hardware');
    hw.add('Automation');
  }
  return { leadType, itSubcategories: [...it], electronicsSubcategories: hardware ? [...hw] : [] };
}

/** "Zoho CRM QuickStart" → "Zoho CRM". Only for services that name a specific Zoho app. */
export function zohoAppsFromService(service: string): string {
  const match = service.match(/Zoho (CRM|Creator|Books|People|Recruit|Desk|Inventory|Analytics|Projects|Campaigns|SalesIQ|Flow|Sign)\b/i);
  return match ? `Zoho ${match[1]}` : '';
}

/**
 * Priority from the budget the visitor chose. A starting rule; adjust the thresholds here.
 * High: above ₹1,00,000 (or the monthly membership). Low: up to ₹25,000. Otherwise Medium.
 */
export function priorityFromBudget(budget: string): Priority {
  if (!budget || /not sure/i.test(budget)) return 'Medium';
  if (/membership|above|over/i.test(budget)) return 'High';
  const amounts = [...budget.matchAll(/₹\s?([\d,]+)/g)].map((m) => Number(m[1].replace(/,/g, '')));
  if (!amounts.length) return 'Medium';
  const top = Math.max(...amounts);
  if (top <= 25_000) return 'Low';
  return top > 1_00_000 ? 'High' : 'Medium';
}

/** Zoho DateTime in India time, e.g. 2026-10-22T18:37:05+05:30. */
export function zohoDateTimeIST(date: Date): string {
  const ist = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
  return `${ist.toISOString().slice(0, 19)}+05:30`;
}

// ---------------------------------------------------------------------------
// Zoho API client
// ---------------------------------------------------------------------------

export type ZohoErrorKind = 'auth' | 'rejected' | 'rate_limited' | 'unavailable';

/** A failure talking to Zoho. `detail` is safe to log: it never contains credentials or lead data. */
export class ZohoError extends Error {
  readonly kind: ZohoErrorKind;
  readonly detail: string;
  constructor(kind: ZohoErrorKind, detail: string) {
    super(`Zoho ${kind}: ${detail}`);
    this.name = 'ZohoError';
    this.kind = kind;
    this.detail = detail;
  }
}

async function readJson(res: Response): Promise<Record<string, unknown>> {
  try {
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

const short = (value: unknown) => String(value ?? '').replace(/[^\w .:-]/g, '').slice(0, 80);

export function createZohoClient(config: ZohoConfig, fetchImpl: FetchLike = fetch, now: () => number = Date.now) {
  let cached: { token: string; expiresAt: number } | null = null;
  let pending: Promise<string> | null = null;

  async function call(url: string, init: RequestInit): Promise<Response> {
    try {
      return await fetchImpl(url, { ...init, cache: 'no-store', signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
    } catch (error) {
      const timedOut = error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError');
      throw new ZohoError('unavailable', timedOut ? 'request timed out' : 'network error');
    }
  }

  async function refreshAccessToken(): Promise<string> {
    // Credentials go in the POST body, not the URL, so they never appear in access logs.
    const res = await call(`${config.accountsUrl}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        refresh_token: config.refreshToken,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        grant_type: 'refresh_token',
      }).toString(),
    });
    const data = await readJson(res);
    // Zoho reports token errors in the body, sometimes with HTTP 200.
    if (typeof data.access_token !== 'string' || !data.access_token) {
      const code = short(data.error) || `HTTP ${res.status}`;
      if (/too many requests|access denied/i.test(`${data.error} ${data.error_description}`)) {
        throw new ZohoError('rate_limited', `token endpoint: ${code}`);
      }
      throw new ZohoError(res.status >= 500 ? 'unavailable' : 'auth', `token refresh failed: ${code}`);
    }
    const expiresIn = typeof data.expires_in === 'number' ? data.expires_in : 3600;
    cached = { token: data.access_token, expiresAt: now() + expiresIn * 1000 - TOKEN_EXPIRY_MARGIN_MS };
    return data.access_token;
  }

  /** A valid access token, reused until shortly before it expires. Concurrent callers share one refresh. */
  async function getAccessToken(forceRefresh = false): Promise<string> {
    if (!forceRefresh && cached && cached.expiresAt > now()) return cached.token;
    if (forceRefresh) cached = null;
    if (!pending) {
      pending = refreshAccessToken().finally(() => {
        pending = null;
      });
    }
    return pending;
  }

  async function insertLead(record: ZohoLeadRecord, token: string) {
    const res = await call(`${config.apiDomain}/crm/v8/Leads`, {
      method: 'POST',
      headers: { Authorization: `Zoho-oauthtoken ${token}`, 'Content-Type': 'application/json' },
      // Insert Records API (v8). Run the CRM's own automation for website leads too.
      body: JSON.stringify({ data: [record], trigger: ['workflow', 'approval', 'blueprint'] }),
    });
    return { res, data: await readJson(res) };
  }

  /** Creates one Lead. Resolves only when Zoho confirms the record was created. */
  async function createLead(record: ZohoLeadRecord, onFieldDropped?: (field: string) => void): Promise<{ id: string }> {
    let current = { ...record };
    let { res, data } = await insertLead(current, await getAccessToken());
    if (res.status === 401) {
      // Token revoked or expired early: refresh once and retry once.
      ({ res, data } = await insertLead(current, await getAccessToken(true)));
    }

    for (let attempt = 0; ; attempt++) {
      const item = Array.isArray(data.data) ? (data.data[0] as Record<string, unknown> | undefined) : undefined;
      const details = (item?.details ?? data.details ?? {}) as Record<string, unknown>;
      if ((res.status === 201 || res.status === 200) && item?.code === 'SUCCESS' && typeof details.id === 'string') {
        return { id: details.id };
      }

      // An optional field Zoho will not accept (e.g. a renamed picklist value): create the lead without it.
      const field = typeof details.api_name === 'string' ? (details.api_name as keyof ZohoLeadRecord) : undefined;
      if (res.status === 400 && field && OPTIONAL_FIELDS.has(field) && field in current && attempt < OPTIONAL_FIELDS.size) {
        const { [field]: _dropped, ...rest } = current;
        void _dropped;
        current = rest as ZohoLeadRecord;
        onFieldDropped?.(`${short(item?.code ?? data.code)} field=${field}`);
        ({ res, data } = await insertLead(current, await getAccessToken()));
        continue;
      }
      return fail(res, item, data, details);
    }
  }

  function fail(res: Response, item: Record<string, unknown> | undefined, data: Record<string, unknown>, details: Record<string, unknown>): never {
    const code = short(item?.code ?? data.code) || `HTTP ${res.status}`;
    const field = details.api_name ? ` field=${short(details.api_name)}` : '';
    if (res.status === 401) throw new ZohoError('auth', `insert unauthorised: ${code}`);
    if (res.status === 429) throw new ZohoError('rate_limited', `insert: ${code}`);
    if (res.status >= 500) throw new ZohoError('unavailable', `insert: ${code}`);
    throw new ZohoError('rejected', `insert: ${code}${field}`);
  }

  return { getAccessToken, createLead, leadSource: config.leadSource };
}

export type ZohoClient = ReturnType<typeof createZohoClient>;

// ---------------------------------------------------------------------------
// Request handling
// ---------------------------------------------------------------------------

export type LeadRequest = { headers: Headers; text: () => Promise<string> };
export type LeadResponse = { status: number; body: Record<string, unknown> };

export type LeadDependencies = {
  /** The Zoho client, or null when OAuth is not configured. */
  getClient: () => ZohoClient | null;
  /**
   * Used only when OAuth is not configured, so lead capture keeps working while the
   * refresh token is being set up (the site's previous Web-to-Lead path).
   */
  fallback?: (lead: LeadInput) => Promise<boolean>;
  /**
   * Rate-limit integration point. The default is in-memory and per server instance; in
   * production with several instances, back this with a shared store (Redis, Upstash, Vercel KV).
   */
  isRateLimited: (clientKey: string) => boolean;
  isDuplicate: (fingerprint: string[]) => boolean;
  remember: (fingerprint: string[]) => void;
  /** Best-effort follow-ups after a confirmed lead, such as the team notification email. */
  afterCreated?: (lead: LeadInput) => Promise<void>;
  log?: (message: string) => void;
};

const GENERIC_FAILURE = 'We could not send your enquiry right now. Please try again, or email or call us directly.';
const SUCCESS_MESSAGE = 'Thank you! We have received your enquiry and will get back to you soon.';

/** Same-origin check for browser requests. Requests without an Origin header (not sent by browsers on POST) pass. */
function isCrossOrigin(headers: Headers): boolean {
  const origin = headers.get('origin');
  if (!origin) return false;
  const host = headers.get('x-forwarded-host') ?? headers.get('host');
  try {
    return !host || new URL(origin).host !== host;
  } catch {
    return true;
  }
}

function clientKey(headers: Headers): string {
  return headers.get('x-forwarded-for')?.split(',')[0]?.trim() || headers.get('x-real-ip') || 'unknown';
}

/** Submissions currently being sent to Zoho, so a double click cannot create two leads. */
const inFlight = new Set<string>();

export async function handleLeadRequest(req: LeadRequest, deps: LeadDependencies): Promise<LeadResponse> {
  const log = deps.log ?? ((m: string) => console.error(m));

  if (isCrossOrigin(req.headers)) return { status: 403, body: { error: 'Forbidden.' } };
  if (!(req.headers.get('content-type') ?? '').includes('application/json')) {
    return { status: 415, body: { error: 'Invalid request.' } };
  }
  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
    return { status: 413, body: { error: 'Your message is too long.' } };
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return { status: 413, body: { error: 'Your message is too long.' } };
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return { status: 400, body: { error: 'Invalid request.' } };
  }

  // Honeypot: people never fill this hidden field. Bots get a neutral reply and no lead is created.
  if (text((body as Record<string, unknown> | null)?.website)) return { status: 200, body: { message: SUCCESS_MESSAGE } };

  const checked = validateLead(body);
  if (!checked.ok) return { status: 400, body: { error: checked.error, field: checked.field } };
  const lead = checked.lead;

  // Counted only for valid submissions, so correcting a typo never locks anyone out.
  if (deps.isRateLimited(clientKey(req.headers))) {
    return { status: 429, body: { error: 'Too many submissions. Please wait a few minutes and try again.' } };
  }

  const fingerprint = ['lead', lead.email, lead.message, lead.service];
  if (deps.isDuplicate(fingerprint)) {
    // The same enquiry was already confirmed by Zoho a moment ago (e.g. a retry or a second click).
    return { status: 200, body: { message: 'We already received this enquiry. We will be in touch soon.', duplicate: true } };
  }
  const flightKey = fingerprint.join('\u0000').toLowerCase();
  if (inFlight.has(flightKey)) return { status: 409, body: { error: 'Your enquiry is already being sent. Please wait a moment.' } };
  inFlight.add(flightKey);

  try {
    const client = deps.getClient();
    if (client) {
      const created = await client.createLead(buildLeadRecord(lead, client.leadSource), (dropped) => log(`[leads] created without an optional field Zoho rejected: ${dropped}`));
      // The record id only, never the visitor's details, so the server log shows each lead reached the CRM.
      log(`[leads] Zoho CRM lead created: ${created.id} (from ${lead.source || 'website'})`);
    } else if (deps.fallback) {
      log('[leads] Zoho OAuth is not configured; used the Web-to-Lead fallback.');
      if (!(await deps.fallback(lead))) {
        log('[leads] Web-to-Lead fallback did not confirm the lead.');
        return { status: 502, body: { error: GENERIC_FAILURE } };
      }
    } else {
      log('[leads] Zoho OAuth is not configured (ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET / ZOHO_REFRESH_TOKEN).');
      return { status: 503, body: { error: GENERIC_FAILURE } };
    }
  } catch (error) {
    if (error instanceof ZohoError) {
      log(`[leads] Zoho API did not create the lead: ${error.kind} (${error.detail})`);
      // Broken or revoked API credentials must not lose the enquiry: use Web-to-Lead instead.
      if (error.kind === 'auth' && deps.fallback) {
        try {
          if (await deps.fallback(lead)) {
            log('[leads] lead sent through the Web-to-Lead fallback instead. Fix the Zoho OAuth credentials: npm run zoho:oauth -- check');
            deps.remember(fingerprint);
            if (deps.afterCreated) await deps.afterCreated(lead).catch(() => log('[leads] follow-up after lead creation failed.'));
            return { status: 201, body: { message: SUCCESS_MESSAGE } };
          }
        } catch {
          // fall through to the failure response
        }
        log('[leads] Web-to-Lead fallback did not confirm the lead either.');
      }
      return { status: error.kind === 'rate_limited' || error.kind === 'unavailable' ? 503 : 502, body: { error: GENERIC_FAILURE } };
    }
    log(`[leads] lead not created: unexpected ${error instanceof Error ? error.name : 'error'}`);
    return { status: 500, body: { error: GENERIC_FAILURE } };
  } finally {
    inFlight.delete(flightKey);
  }

  deps.remember(fingerprint);
  if (deps.afterCreated) {
    try {
      await deps.afterCreated(lead);
    } catch {
      log('[leads] follow-up after lead creation failed (the lead itself was created).');
    }
  }
  return { status: 201, body: { message: SUCCESS_MESSAGE } };
}

