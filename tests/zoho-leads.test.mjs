// Tests for the Zoho CRM Leads integration. No network: Zoho is replaced by a scripted fake.
// Run with: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildLeadRecord,
  LEAD_FIELDS,
  createZohoClient,
  handleLeadRequest,
  readZohoConfig,
  splitName,
  validateLead,
} from '../src/lib/zohoLeads.ts';

const CONFIG = {
  clientId: 'test-client-id',
  clientSecret: 'test-client-secret',
  refreshToken: 'test-refresh-token',
  accountsUrl: 'https://accounts.zoho.in',
  apiDomain: 'https://www.zohoapis.in',
  leadSource: 'Website',
};

const VALID = {
  name: 'Asha Kumari Verma',
  email: 'asha@example.com',
  phone: '+91 98765 43210',
  company: 'Example Traders',
  message: 'We want Zoho CRM follow-ups automated.',
  service: 'Zoho: CRM setup',
  budget: '₹50,000 – ₹1,00,000',
  source: 'Zoho page',
};

const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const TOKEN_OK = () => json(200, { access_token: 'access-1', expires_in: 3600, api_domain: 'https://www.zohoapis.in', token_type: 'Bearer' });
const INSERT_OK = () => json(201, { data: [{ code: 'SUCCESS', details: { id: '1306132000001234567' }, message: 'record added', status: 'success' }] });

/** A fake fetch that answers each call with the next scripted response and records what was sent. */
function fakeFetch(...responses) {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url, init });
    const next = responses.shift();
    if (!next) throw new Error(`unexpected request to ${url}`);
    return typeof next === 'function' ? next() : next;
  };
  return { impl, calls };
}

let ip = 0;
/** A fresh "visitor" per request unless told otherwise, so rate limits do not leak between tests. */
function request(body, headers = {}) {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return {
    headers: new Headers({
      'content-type': 'application/json',
      host: 'www.savantxtechnologies.com',
      origin: 'https://www.savantxtechnologies.com',
      'x-forwarded-for': `203.0.113.${++ip % 250}`,
      ...headers,
    }),
    text: async () => text,
  };
}

/** Handler dependencies with in-memory guards and a captured log. */
function deps(client, extra = {}) {
  const remembered = new Set();
  const hits = new Map();
  const logs = [];
  return {
    logs,
    getClient: () => client,
    isRateLimited: (key) => {
      hits.set(key, (hits.get(key) ?? 0) + 1);
      return hits.get(key) > 8;
    },
    isDuplicate: (parts) => remembered.has(parts.join('|')),
    remember: (parts) => remembered.add(parts.join('|')),
    log: (m) => logs.push(m),
    ...extra,
  };
}

// --- Validation ---------------------------------------------------------------

test('rejects a missing name', async () => {
  const res = await handleLeadRequest(request({ ...VALID, name: '  ' }), deps(null));
  assert.equal(res.status, 400);
  assert.equal(res.body.field, 'name');
});

test('rejects a missing email', async () => {
  const res = await handleLeadRequest(request({ ...VALID, email: '' }), deps(null));
  assert.equal(res.status, 400);
  assert.equal(res.body.field, 'email');
});

test('rejects an invalid email', async () => {
  for (const email of ['asha', 'asha@', 'asha@example', 'a b@example.com']) {
    assert.equal(validateLead({ ...VALID, email }).ok, false, email);
  }
  const res = await handleLeadRequest(request({ ...VALID, email: 'asha@example' }), deps(null));
  assert.equal(res.status, 400);
});

test('rejects over-long fields and oversized bodies', async () => {
  const long = await handleLeadRequest(request({ ...VALID, message: 'x'.repeat(5001) }), deps(null));
  assert.equal(long.status, 400);
  const huge = await handleLeadRequest(request(JSON.stringify({ ...VALID, junk: 'x'.repeat(20000) })), deps(null));
  assert.equal(huge.status, 413);
});

test('rejects cross-origin requests and non-JSON bodies', async () => {
  const cross = await handleLeadRequest(request(VALID, { origin: 'https://evil.example' }), deps(null));
  assert.equal(cross.status, 403);
  const form = await handleLeadRequest(request(VALID, { 'content-type': 'text/plain' }), deps(null));
  assert.equal(form.status, 415);
  const broken = await handleLeadRequest(request('{not json'), deps(null));
  assert.equal(broken.status, 400);
});

test('honeypot submissions never reach Zoho', async () => {
  const { impl, calls } = fakeFetch();
  const res = await handleLeadRequest(request({ ...VALID, website: 'http://spam.example' }), deps(createZohoClient(CONFIG, impl)));
  assert.equal(res.status, 200);
  assert.equal(calls.length, 0);
});

// --- Field mapping ------------------------------------------------------------

test('splits names: a single name becomes Last_Name', () => {
  assert.deepEqual(splitName('Madonna'), { Last_Name: 'Madonna' });
  assert.deepEqual(splitName('Asha Kumari Verma'), { First_Name: 'Asha Kumari', Last_Name: 'Verma' });
});

test('maps form fields to the SavantX Zoho Lead fields', () => {
  const at = new Date('2026-10-22T13:07:05Z');
  const record = buildLeadRecord({ ...VALID, company: '', service: 'Zoho: Zoho CRM QuickStart' }, 'Website', at);
  assert.equal(record.First_Name, 'Asha Kumari');
  assert.equal(record.Last_Name, 'Verma');
  assert.equal(record.Email, VALID.email);
  assert.equal(record.Phone, VALID.phone);
  assert.equal(record.Mobile, undefined, 'Mobile is only filled when a form provides a separate mobile number');
  assert.equal(record.Company, 'Website Enquiry');
  assert.equal(record.Lead_Source, 'Website');
  assert.equal(record.Lead_Status, 'Attempted to Contact', 'stored value behind the CRM label "New Lead"');
  assert.equal(record.Lead_Type, 'IT Services');
  assert.deepEqual(record.IT_Lead_Subcategory1, ['Zoho Development']);
  assert.equal(record.Budget, VALID.budget);
  assert.equal(record.Rating, 'Medium');
  assert.equal(record.Interest_Zoho_Apps, 'Zoho CRM');
  assert.equal(record.Contact_Date, '2026-10-22T18:37:05+05:30');
  assert.equal(record.Name_Email, 'Asha Kumari Verma (asha@example.com)');
  assert.match(record.Description, /follow-ups automated/);
  assert.match(record.Description, /Submitted from: Zoho page/);
});

test('a separately provided mobile number goes to Mobile, the phone stays in Phone', () => {
  const record = buildLeadRecord({ ...VALID, mobile: '+91 91234 56789' }, 'Website');
  assert.equal(record.Phone, VALID.phone);
  assert.equal(record.Mobile, '+91 91234 56789');
});

test('only verified API names and picklist values are ever sent', () => {
  const services = ['', 'Web Development', 'Mobile Applications', 'AI & Analytics', 'Enterprise Solutions', 'Hardware & Electronics — PCB Design & Circuit Engineering', 'Zoho Integration', 'Consulting', 'Other', 'Zoho / CRM / ERP', 'IoT & Hardware', 'E-commerce', 'ERP: Integration & Automation Program', 'Zoho: Workflow Automation', 'Shopify store'];
  const budgets = ['', 'Under ₹10,000', '₹50,000 – ₹1,00,000', 'Above ₹1,00,000', 'Not sure yet', 'Over ₹1,00,00,000'];
  for (const service of services) {
    for (const budget of budgets) {
      for (const source of ['Zoho page', 'Contact page', 'Home page']) {
        const record = buildLeadRecord({ ...VALID, service, budget, source, mobile: '+91 91234 56789' }, 'Website');
        for (const key of Object.keys(record)) assert.ok(LEAD_FIELDS.writable.includes(key), `unverified field ${key}`);
        for (const [field, allowed] of Object.entries(LEAD_FIELDS.picklists)) {
          const values = [record[field]].flat().filter((v) => v !== undefined);
          for (const v of values) assert.ok(allowed.includes(v), `${field}=${v} for "${service}"`);
        }
      }
    }
  }
});

test('product demo requests become IT Services leads from the website', () => {
  const record = buildLeadRecord(
    { ...VALID, company: '', budget: '', service: 'Product demo: Vidya Setu', source: 'Products page', message: 'Demo requested for: Vidya Setu' },
    'Website'
  );
  assert.equal(record.Lead_Source, 'Website');
  assert.equal(record.Lead_Type, 'IT Services');
  assert.equal(record.Lead_Status, 'Attempted to Contact');
  assert.equal(record.Company, 'Website Enquiry');
  assert.match(record.Description, /Demo requested for: Vidya Setu/);
  assert.match(record.Description, /Service: Product demo: Vidya Setu/);
  assert.match(record.Description, /Submitted from: Products page/);
});

test('contact page leads use the "Contact Form" lead source', () => {
  assert.equal(buildLeadRecord({ ...VALID, source: 'Contact page' }, 'Website').Lead_Source, 'Contact Form');
});

test('lead type and IT subcategory follow the chosen service', () => {
  const cases = [
    ['Web Development', 'IT Services', ['Website Development']],
    ['Mobile Applications', 'IT Services', ['Mobile App']],
    ['AI & Analytics', 'IT Services', ['AI / ML']],
    ['ERP: Custom Manufacturing ERP', 'IT Services', ['ERP']],
    ['Zoho / CRM / ERP', 'IT Services', ['Zoho Development', 'ERP']],
    ['Hardware & Electronics — IoT Solutions', 'Electronics Hardware', []],
    ['Consulting', 'IT Services', []],
  ];
  for (const [service, type, subs] of cases) {
    const record = buildLeadRecord({ ...VALID, service, source: 'Contact page' }, 'Website');
    assert.equal(record.Lead_Type, type, service);
    assert.deepEqual(record.IT_Lead_Subcategory1 ?? [], subs, service);
  }
});

test('hardware services fill Electronics Lead Subcategory', () => {
  const cases = [
    ['Hardware & Electronics — IoT Solutions', ['IoT']],
    ['Hardware & Electronics — PCB Design & Circuit Engineering', ['PCB Design']],
    ['Hardware & Electronics — Firmware Development', ['Embedded Systems']],
    ['Hardware & Electronics — 3D Printing and Designing', ['3D Printing']],
    ['Hardware & Electronics — Industrial Automation', ['Industrial Hardware', 'Automation']],
    ['Hardware & Electronics — Complete Product Development', ['Product Development']],
    ['Web Development', undefined],
  ];
  for (const [service, expected] of cases) {
    assert.deepEqual(buildLeadRecord({ ...VALID, service }, 'Website').Electronics_Lead_Subcategory1, expected, service);
  }
});

test('priority follows the budget', () => {
  const cases = [
    ['Under ₹10,000', 'Low'],
    ['₹10,000 – ₹25,000', 'Low'],
    ['₹25,000 – ₹50,000', 'Medium'],
    ['₹50,000 – ₹1,00,000', 'Medium'],
    ['Above ₹1,00,000', 'High'],
    ['Monthly membership (₹14,999/month)', 'High'],
    ['Not sure yet', 'Medium'],
    ['₹10,00,000 - ₹25,00,000', 'High'],
    ['', 'Medium'],
  ];
  const stored = { High: 'ShutDown', Medium: 'Medium', Low: 'Low' };
  for (const [budget, priority] of cases) {
    assert.equal(buildLeadRecord({ ...VALID, budget }, 'Website').Rating, stored[priority], budget);
  }
});

test('a rejected optional field is dropped and the lead is still created', async () => {
  const rejected = () => json(400, { data: [{ code: 'INVALID_DATA', details: { api_name: 'IT_Lead_Subcategory1' }, status: 'error' }] });
  const { impl, calls } = fakeFetch(TOKEN_OK, rejected, INSERT_OK);
  const dropped = [];
  const client = createZohoClient(CONFIG, impl);
  const result = await client.createLead(buildLeadRecord(VALID, 'Website'), (d) => dropped.push(d));
  assert.equal(typeof result.id, 'string');
  const retried = JSON.parse(calls[2].init.body).data[0];
  assert.equal(retried.IT_Lead_Subcategory1, undefined);
  assert.equal(retried.Lead_Type, 'IT Services', 'other fields are kept');
  assert.deepEqual(dropped, ['INVALID_DATA field=IT_Lead_Subcategory1']);
});

test('treats placeholder credentials as not configured', () => {
  assert.equal(
    readZohoConfig({ ZOHO_CLIENT_ID: 'id', ZOHO_CLIENT_SECRET: 'REPLACE_WITH_ROTATED_CLIENT_SECRET', ZOHO_REFRESH_TOKEN: 'r' }),
    null
  );
  const config = readZohoConfig({ ZOHO_CLIENT_ID: 'id', ZOHO_CLIENT_SECRET: 's', ZOHO_REFRESH_TOKEN: 'r' });
  assert.equal(config.accountsUrl, 'https://accounts.zoho.in');
  assert.equal(config.apiDomain, 'https://www.zohoapis.in');
});

// --- Successful submission ----------------------------------------------------

test('a valid lead is created and confirmed by Zoho', async () => {
  const { impl, calls } = fakeFetch(TOKEN_OK, INSERT_OK);
  const followUps = [];
  const d = deps(createZohoClient(CONFIG, impl), { afterCreated: async (lead) => followUps.push(lead.email) });
  const res = await handleLeadRequest(request(VALID), d);

  assert.equal(res.status, 201);
  assert.equal(calls.length, 2);

  const [token, insert] = calls;
  assert.equal(token.url, 'https://accounts.zoho.in/oauth/v2/token');
  assert.ok(!token.url.includes('client_secret'), 'secret must not be in the URL');
  const form = new URLSearchParams(token.init.body);
  assert.equal(form.get('grant_type'), 'refresh_token');
  assert.equal(form.get('refresh_token'), CONFIG.refreshToken);

  assert.equal(insert.url, 'https://www.zohoapis.in/crm/v8/Leads');
  assert.equal(insert.init.method, 'POST');
  assert.equal(insert.init.headers.Authorization, 'Zoho-oauthtoken access-1');
  const payload = JSON.parse(insert.init.body);
  assert.equal(payload.data.length, 1);
  assert.equal(payload.data[0].Last_Name, 'Verma');

  assert.deepEqual(followUps, [VALID.email], 'team notification runs only after success');
  assert.ok(!JSON.stringify(res.body).includes('1306132000001234567'), 'CRM record id is not exposed');
});

test('reuses a valid access token instead of refreshing every time', async () => {
  const { impl, calls } = fakeFetch(TOKEN_OK, INSERT_OK, INSERT_OK);
  const client = createZohoClient(CONFIG, impl);
  await client.createLead(buildLeadRecord(VALID, 'Website'));
  await client.createLead(buildLeadRecord({ ...VALID, email: 'other@example.com' }, 'Website'));
  assert.equal(calls.filter((c) => c.url.endsWith('/oauth/v2/token')).length, 1);
});

test('refreshes the token once the cached one has expired', async () => {
  let clock = 0;
  const { impl, calls } = fakeFetch(TOKEN_OK, INSERT_OK, TOKEN_OK, INSERT_OK);
  const client = createZohoClient(CONFIG, impl, () => clock);
  await client.createLead(buildLeadRecord(VALID, 'Website'));
  clock += 3600 * 1000;
  await client.createLead(buildLeadRecord(VALID, 'Website'));
  assert.equal(calls.filter((c) => c.url.endsWith('/oauth/v2/token')).length, 2);
});

// --- OAuth failures ----------------------------------------------------------

test('invalid OAuth credentials fail without reporting success or leaking secrets', async () => {
  const { impl } = fakeFetch(() => json(200, { error: 'invalid_client' }));
  const d = deps(createZohoClient(CONFIG, impl));
  const res = await handleLeadRequest(request(VALID), d);

  assert.equal(res.status, 502);
  assert.ok(res.body.error);
  assert.equal(res.body.message, undefined);
  const everything = JSON.stringify(res.body) + d.logs.join('\n');
  for (const secret of [CONFIG.clientSecret, CONFIG.refreshToken, CONFIG.clientId, VALID.email, VALID.phone]) {
    assert.ok(!everything.includes(secret), `must not expose ${secret}`);
  }
  assert.match(d.logs.join('\n'), /invalid_client/);
});

test('rejected OAuth credentials fall back to Web-to-Lead so the enquiry is not lost', async () => {
  const { impl } = fakeFetch(() => json(200, { error: 'invalid_client' }));
  const sent = [];
  const d = deps(createZohoClient(CONFIG, impl), { fallback: async (lead) => (sent.push(lead.email), true) });
  const res = await handleLeadRequest(request(VALID), d);
  assert.equal(res.status, 201);
  assert.deepEqual(sent, [VALID.email]);
  assert.match(d.logs.join('\n'), /Web-to-Lead fallback instead/);
});

test('an expired access token is refreshed and the insert retried once', async () => {
  const expired = () => json(401, { code: 'INVALID_TOKEN', message: 'invalid oauth token', status: 'error' });
  const { impl, calls } = fakeFetch(TOKEN_OK, expired, TOKEN_OK, INSERT_OK);
  const res = await handleLeadRequest(request(VALID), deps(createZohoClient(CONFIG, impl)));
  assert.equal(res.status, 201);
  assert.equal(calls.length, 4);
});

test('a token that is still rejected after refreshing fails', async () => {
  const expired = () => json(401, { code: 'INVALID_TOKEN', status: 'error' });
  const { impl } = fakeFetch(TOKEN_OK, expired, TOKEN_OK, expired);
  const res = await handleLeadRequest(request(VALID), deps(createZohoClient(CONFIG, impl)));
  assert.equal(res.status, 502);
});

// --- Zoho API errors ---------------------------------------------------------

test('Zoho rejecting the record is reported as a failure', async () => {
  const rejected = () => json(400, { data: [{ code: 'MANDATORY_NOT_FOUND', details: { api_name: 'Last_Name' }, message: 'required field not found', status: 'error' }] });
  const { impl } = fakeFetch(TOKEN_OK, rejected);
  const d = deps(createZohoClient(CONFIG, impl));
  const res = await handleLeadRequest(request(VALID), d);
  assert.equal(res.status, 502);
  assert.match(d.logs.join('\n'), /MANDATORY_NOT_FOUND field=Last_Name/);
});

test('a 2xx reply without a SUCCESS record is not treated as success', async () => {
  const odd = () => json(202, { data: [{ code: 'DUPLICATE_DATA', status: 'error', details: {} }] });
  const { impl } = fakeFetch(TOKEN_OK, odd);
  const res = await handleLeadRequest(request(VALID), deps(createZohoClient(CONFIG, impl)));
  assert.notEqual(res.status, 201);
});

test('Zoho rate limiting and outages return 503', async () => {
  for (const reply of [() => json(429, { code: 'TOO_MANY_REQUESTS' }), () => json(500, { code: 'INTERNAL_ERROR' })]) {
    const { impl } = fakeFetch(TOKEN_OK, reply);
    const res = await handleLeadRequest(request(VALID), deps(createZohoClient(CONFIG, impl)));
    assert.equal(res.status, 503);
  }
});

test('network failures and timeouts return a failure, not success', async () => {
  const client = createZohoClient(CONFIG, async () => {
    throw Object.assign(new Error('The operation was aborted due to timeout'), { name: 'TimeoutError' });
  });
  const res = await handleLeadRequest(request(VALID), deps(client));
  assert.equal(res.status, 503);
});

// --- Configuration -----------------------------------------------------------

test('missing configuration fails clearly when there is no fallback', async () => {
  const res = await handleLeadRequest(request(VALID), deps(null));
  assert.equal(res.status, 503);
});

test('missing configuration uses the fallback, and reports its failure honestly', async () => {
  const ok = await handleLeadRequest(request(VALID), deps(null, { fallback: async () => true }));
  assert.equal(ok.status, 201);
  const failed = await handleLeadRequest(request(VALID), deps(null, { fallback: async () => false }));
  assert.equal(failed.status, 502);
});

// --- Duplicates and rate limiting ---------------------------------------------

test('a repeated submission does not create a second lead', async () => {
  const { impl, calls } = fakeFetch(TOKEN_OK, INSERT_OK);
  const d = deps(createZohoClient(CONFIG, impl));
  const first = await handleLeadRequest(request(VALID), d);
  const second = await handleLeadRequest(request(VALID), d);
  assert.equal(first.status, 201);
  assert.equal(second.status, 200);
  assert.equal(second.body.duplicate, true);
  assert.equal(calls.length, 2, 'only one token request and one insert');
});

test('a double click while the first request is in flight is refused', async () => {
  let release;
  const gate = new Promise((r) => (release = r));
  const { impl, calls } = fakeFetch(TOKEN_OK, async () => {
    await gate;
    return INSERT_OK();
  });
  const d = deps(createZohoClient(CONFIG, impl));
  const first = handleLeadRequest(request({ ...VALID, message: 'double click test' }), d);
  await new Promise((r) => setTimeout(r, 10));
  const second = await handleLeadRequest(request({ ...VALID, message: 'double click test' }), d);
  release();
  assert.equal(second.status, 409);
  assert.equal((await first).status, 201);
  assert.equal(calls.filter((c) => c.url.endsWith('/Leads')).length, 1);
});

test('rate limiting kicks in after repeated submissions from one visitor', async () => {
  const d = deps(null, { fallback: async () => true });
  const statuses = [];
  for (let i = 0; i < 10; i++) {
    const res = await handleLeadRequest(request({ ...VALID, message: `enquiry ${i}` }, { 'x-forwarded-for': '198.51.100.7' }), d);
    statuses.push(res.status);
  }
  assert.deepEqual(statuses.slice(0, 8), Array(8).fill(201));
  assert.deepEqual(statuses.slice(8), [429, 429]);
});
