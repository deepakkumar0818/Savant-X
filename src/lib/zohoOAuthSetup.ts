import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { NextRequest } from 'next/server';

/**
 * Local-only helpers for connecting the website to Zoho (getting the refresh token).
 * Used by /api/zoho/connect and /api/zoho/callback, which refuse to run in production
 * or from anywhere but localhost.
 */

export const LEADS_SCOPES = 'ZohoCRM.modules.leads.CREATE,ZohoCRM.settings.fields.READ';
export const STATE_COOKIE = 'zoho_oauth_state';

/** Only in `next dev`, and only when the browser is on this machine. */
export function isLocalSetupAllowed(request: NextRequest): boolean {
  if (process.env.NODE_ENV === 'production') return false;
  const host = (request.headers.get('host') ?? '').split(':')[0];
  return host === 'localhost' || host === '127.0.0.1';
}

const setting = (key: string) => {
  const value = (process.env[key] ?? '').trim();
  return /^REPLACE_WITH/i.test(value) ? '' : value;
};

export function oauthSettings(request: NextRequest) {
  const origin = request.nextUrl.origin;
  return {
    clientId: setting('ZOHO_CLIENT_ID'),
    clientSecret: setting('ZOHO_CLIENT_SECRET'),
    accountsUrl: (setting('ZOHO_ACCOUNTS_URL') || 'https://accounts.zoho.in').replace(/\/+$/, ''),
    // Must exactly match an Authorized Redirect URI of the client in the Zoho API Console.
    redirectUri: setting('ZOHO_REDIRECT_URI') || `${origin}/api/zoho/callback`,
  };
}

export function newState(): string {
  return randomBytes(24).toString('hex');
}

/** Writes one variable into .env.local and the running process, without printing it. */
export function saveEnvLocal(key: string, value: string): void {
  const file = path.join(process.cwd(), '.env.local');
  const current = existsSync(file) ? readFileSync(file, 'utf8') : '';
  const line = `${key}=${value}`;
  const pattern = new RegExp(`^${key}=.*$`, 'm');
  writeFileSync(file, pattern.test(current) ? current.replace(pattern, line) : `${current.replace(/\n?$/, '\n')}${line}\n`);
  process.env[key] = value;
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** A small self-contained status page. Never include secrets or tokens in `lines`. */
export function setupPage(ok: boolean, title: string, lines: string[]): Response {
  const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(title)}</title>
<body style="font:16px/1.6 system-ui,sans-serif;max-width:640px;margin:10vh auto;padding:0 20px;color:#0f172a">
<p style="font-size:44px;margin:0">${ok ? '✅' : '⚠️'}</p>
<h1 style="font-size:24px;margin:8px 0 16px">${escape(title)}</h1>
${lines.map((l) => `<p style="margin:8px 0;color:#334155">${escape(l)}</p>`).join('')}
</body>`;
  return new Response(html, { status: ok ? 200 : 400, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}
