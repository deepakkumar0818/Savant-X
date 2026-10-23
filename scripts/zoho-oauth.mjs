#!/usr/bin/env node
// Zoho OAuth setup and checks for the website's Zoho CRM Leads integration (India data centre).
// Runs locally only; nothing here is deployed. See docs/zoho-crm-leads.md.
//
//   npm run zoho:oauth -- url               Consent URL for a Server-based app (needs ZOHO_REDIRECT_URI)
//   npm run zoho:oauth -- exchange [code]   Exchange a grant code; saves ZOHO_REFRESH_TOKEN to .env.local
//   npm run zoho:oauth -- check             Verify OAuth works (creates nothing in CRM)
//   npm run zoho:oauth -- inspect           Compare the website's field mapping with the live Leads fields
//
// Secrets, grant codes and tokens are never printed. Every failure exits with status 1.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';

const ENV_FILE = '.env.local';
const LEADS_SCOPE = 'ZohoCRM.modules.leads.CREATE';
/** Only needed for `inspect`. Lead creation works with LEADS_SCOPE alone. */
const FIELDS_SCOPE = 'ZohoCRM.settings.fields.READ';

if (existsSync(ENV_FILE)) process.loadEnvFile(ENV_FILE);

const env = (key, fallback = '') => {
  const value = (process.env[key] ?? '').trim();
  return value && !/^REPLACE_WITH/i.test(value) ? value : fallback;
};
const accounts = env('ZOHO_ACCOUNTS_URL', 'https://accounts.zoho.in').replace(/\/+$/, '');
const apiDomain = env('ZOHO_API_DOMAIN', 'https://www.zohoapis.in').replace(/\/+$/, '');
const clientId = env('ZOHO_CLIENT_ID');
const clientSecret = env('ZOHO_CLIENT_SECRET');
const redirectUri = env('ZOHO_REDIRECT_URI');

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

function requireClient() {
  if (!clientId) fail(`ZOHO_CLIENT_ID is missing in ${ENV_FILE}.`);
  if (!clientSecret) fail(`ZOHO_CLIENT_SECRET is missing (or a placeholder) in ${ENV_FILE}.`);
  if (!/^https:\/\/accounts\.zoho\.in$/.test(accounts)) console.warn(`! ZOHO_ACCOUNTS_URL is ${accounts}; the SavantX CRM is in the India data centre (https://accounts.zoho.in).`);
}

/** POSTs to the token endpoint. Credentials go in the body, never the URL. */
async function token(params) {
  let res;
  try {
    res = await fetch(`${accounts}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, ...params }).toString(),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    fail(`Could not reach ${accounts}. Check your internet connection.`);
  }
  return res.json().catch(() => ({}));
}

/** Plain-language meaning of Zoho's OAuth error codes. */
function explain(code) {
  if (/invalid_client_secret/i.test(code)) return 'Zoho rejected the client secret. It does not match this client ID.';
  if (/invalid_client/i.test(code))
    return 'Zoho does not recognise this client ID in the India data centre. Check the ID, and that the client was created at api-console.zoho.in.';
  if (/invalid_code/i.test(code))
    return 'The grant code or refresh token is invalid, expired, already used, or was issued to a different client ID.';
  if (/invalid_redirect_uri|redirect_uri/i.test(code)) return 'The redirect URI does not exactly match the one registered for this client.';
  if (/access denied|too many/i.test(code)) return 'Zoho is rate-limiting token requests. Wait a few minutes and try again.';
  return 'See https://www.zoho.com/crm/developer/docs/api/v8/oauth-overview.html';
}

/** Saves a value into .env.local without printing it. */
function saveEnv(key, value) {
  const current = existsSync(ENV_FILE) ? readFileSync(ENV_FILE, 'utf8') : '';
  const line = `${key}=${value}`;
  const pattern = new RegExp(`^${key}=.*$`, 'm');
  writeFileSync(ENV_FILE, pattern.test(current) ? current.replace(pattern, line) : `${current.replace(/\n?$/, '\n')}${line}\n`);
}

async function accessToken() {
  const refreshToken = env('ZOHO_REFRESH_TOKEN');
  if (!refreshToken) return null;
  const data = await token({ grant_type: 'refresh_token', refresh_token: refreshToken });
  if (!data.access_token) fail(`Token refresh failed (${data.error ?? 'no error code'}). ${explain(String(data.error ?? ''))}`);
  return data;
}

const [command, arg] = process.argv.slice(2);

if (command === 'url') {
  requireClient();
  if (!redirectUri) fail(`Set ZOHO_REDIRECT_URI in ${ENV_FILE} to the redirect URI registered for your Server-based app.`);
  // Lead creation + the admin's Leads page (read, status updates) + picklist checks.
  const scope = `${LEADS_SCOPE},ZohoCRM.modules.leads.READ,ZohoCRM.modules.leads.UPDATE,${FIELDS_SCOPE}`;
  const url = new URL(`${accounts}/oauth/v2/auth`);
  url.search = new URLSearchParams({
    scope,
    client_id: clientId,
    response_type: 'code',
    access_type: 'offline', // required to receive a refresh token
    prompt: 'consent',
    redirect_uri: redirectUri,
  }).toString();
  console.log('\nOpen this URL while signed in to Zoho CRM as an administrator, and approve access:\n');
  console.log(url.toString());
  console.log('\nZoho redirects to your redirect URI with ?code=… in the address bar. Within a few minutes, run:\n\n  npm run zoho:oauth -- exchange\n\nand paste the code when asked.\n');
} else if (command === 'exchange') {
  requireClient();
  let code = arg;
  if (!code) {
    // Asking here keeps the grant code out of the shell history.
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    code = (await rl.question('Paste the grant code: ')).trim();
    rl.close();
  }
  if (!code) fail('No grant code given.');
  // Self Client codes need no redirect_uri; Server-based apps must send the registered one.
  const data = await token({ grant_type: 'authorization_code', code, ...(redirectUri ? { redirect_uri: redirectUri } : {}) });
  if (!data.refresh_token) {
    const why = data.error ? `${data.error}: ${explain(String(data.error))}` : 'Zoho returned no refresh token.';
    fail(
      `${why}\n  • Grant codes expire after the time you chose (3–10 minutes) and work once.\n` +
        '  • A Self Client code must be exchanged with that Self Client’s own client ID and secret.\n' +
        '  • A refresh token is only issued for offline access (Self Client codes, or the URL from `url`).'
    );
  }
  saveEnv('ZOHO_REFRESH_TOKEN', data.refresh_token);
  console.log(`\n✔ Refresh token saved to ${ENV_FILE} (not shown). Scope granted: ${data.scope ?? 'not reported'}.`);
  console.log('  Next: npm run zoho:oauth -- check\n');
} else if (command === 'check') {
  requireClient();
  const data = await accessToken();
  if (!data) {
    // No refresh token yet: still tell the user whether Zoho accepts the client ID and secret.
    const probe = await token({ grant_type: 'refresh_token', refresh_token: 'not-a-real-token' });
    const code = String(probe.error ?? '');
    if (/invalid_client/i.test(code)) fail(`Client credentials rejected (${code}). ${explain(code)}`);
    fail(
      `ZOHO_REFRESH_TOKEN is not set yet. Zoho answered "${code || 'no error code'}" to a test request, so the client ID and secret were not rejected.\n` +
        '  Generate a grant code and run: npm run zoho:oauth -- exchange'
    );
  }
  console.log(`\n✔ Zoho OAuth works: an access token was issued (valid for ${data.expires_in ?? '?'}s, API domain ${data.api_domain ?? apiDomain}).`);
  console.log('  No CRM record was created or changed.\n');
} else if (command === 'inspect') {
  requireClient();
  const data = await accessToken();
  if (!data) fail('ZOHO_REFRESH_TOKEN is not set. Run `exchange` first.');
  let LEAD_FIELDS;
  try {
    ({ LEAD_FIELDS } = await import('../src/lib/zohoLeads.ts'));
  } catch {
    fail('Could not load src/lib/zohoLeads.ts. Run this through `npm run zoho:oauth -- inspect` (it enables TypeScript support).');
  }
  const res = await fetch(`${apiDomain}/crm/v8/settings/fields?module=Leads`, {
    headers: { Authorization: `Zoho-oauthtoken ${data.access_token}` },
    signal: AbortSignal.timeout(15000),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !Array.isArray(body.fields)) {
    const code = String(body.code ?? `HTTP ${res.status}`);
    fail(
      /SCOPE/i.test(code)
        ? `Reading field settings needs the ${FIELDS_SCOPE} scope (${code}). Generate a new grant code with both scopes:\n  ${LEADS_SCOPE},${FIELDS_SCOPE}\n  then run exchange again. Lead creation itself only needs ${LEADS_SCOPE}.`
        : `Could not read Leads fields (${code}).`
    );
  }

  const byName = new Map(body.fields.map((f) => [f.api_name, f]));
  const problems = [];
  console.log('\nWebsite field mapping vs. live Zoho CRM Leads fields:\n');
  for (const name of LEAD_FIELDS.writable) {
    const field = byName.get(name);
    if (!field) {
      problems.push(name);
      console.log(`  ✖ ${name}: not found in Leads`);
      continue;
    }
    const readOnly = field.read_only || field.field_read_only || ['formula', 'autonumber', 'lookup', 'ownerlookup'].includes(field.data_type);
    if (readOnly) problems.push(name);
    console.log(`  ${readOnly ? '✖' : '✔'} ${name} (${field.data_type}${readOnly ? ', read-only' : ''}) “${field.field_label}”`);
    const allowed = LEAD_FIELDS.picklists[name];
    if (allowed) {
      const live = new Set((field.pick_list_values ?? []).map((v) => v.actual_value));
      for (const value of allowed) {
        const ok = live.has(value);
        if (!ok) problems.push(`${name}=${value}`);
        console.log(`      ${ok ? '✔' : '✖'} "${value}"`);
      }
    }
  }
  const mandatory = body.fields.filter((f) => f.system_mandatory).map((f) => f.api_name);
  const unmapped = mandatory.filter((n) => !LEAD_FIELDS.writable.includes(n));
  console.log(`\n  System-mandatory fields: ${mandatory.join(', ') || 'none reported'}`);
  if (unmapped.length) {
    problems.push(...unmapped.map((n) => `mandatory:${n}`));
    console.log(`  ✖ Mandatory but not sent by the website: ${unmapped.join(', ')}`);
  }
  console.log('  (Layout-level required fields and validation rules are not listed by this API; check them in CRM → Setup → Layouts.)');
  if (problems.length) fail(`${problems.length} problem(s) found. Update LEAD_FIELDS in src/lib/zohoLeads.ts or the CRM.`);
  console.log('\n✔ Every field and picklist value the website sends exists and is writable.\n');
} else {
  console.log(
    'Usage:\n  npm run zoho:oauth -- url [--inspect]\n  npm run zoho:oauth -- exchange [code]\n  npm run zoho:oauth -- check\n  npm run zoho:oauth -- inspect'
  );
  if (command) process.exit(1);
}
