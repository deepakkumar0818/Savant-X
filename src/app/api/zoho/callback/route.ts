import { NextRequest } from 'next/server';
import { STATE_COOKIE, isLocalSetupAllowed, oauthSettings, saveEnvLocal, setupPage } from '@/lib/zohoOAuthSetup';

export const dynamic = 'force-dynamic';

const REASONS: Record<string, string> = {
  invalid_client:
    'Zoho says this code belongs to a different client than ZOHO_CLIENT_ID in .env.local. Start again from /api/zoho/connect, which always uses the .env.local client.',
  invalid_client_secret: 'ZOHO_CLIENT_SECRET in .env.local does not belong to ZOHO_CLIENT_ID.',
  invalid_code: 'The code expired (they last about a minute) or was already used. Start again from /api/zoho/connect.',
  invalid_redirect_uri: 'The redirect URI does not match the one registered for this client in the Zoho API Console.',
};

/**
 * Local setup only: Zoho redirects here after you approve access. The code is exchanged
 * at once and the refresh token is saved to .env.local. Neither is ever shown.
 */
export async function GET(request: NextRequest) {
  if (!isLocalSetupAllowed(request)) return new Response('Not found', { status: 404 });

  const params = request.nextUrl.searchParams;
  if (params.get('error')) return setupPage(false, 'Zoho did not grant access', [`Zoho returned: ${params.get('error')}`]);

  const code = params.get('code');
  if (!code) return setupPage(false, 'No code received', ['Open /api/zoho/connect to start.']);

  // Only codes from a flow started at /api/zoho/connect in this browser are accepted.
  const expected = request.cookies.get(STATE_COOKIE)?.value;
  if (!expected || params.get('state') !== expected) {
    return setupPage(false, 'Please start from the connect page', [
      'This link was not started from http://localhost:3000/api/zoho/connect in this browser (or it is more than 10 minutes old).',
      'Open http://localhost:3000/api/zoho/connect and approve again.',
    ]);
  }

  // Credentials only ever go to the configured accounts server, never to one named in the URL.
  const { clientId, clientSecret, accountsUrl, redirectUri } = oauthSettings(request);
  let data: Record<string, unknown> = {};
  try {
    const res = await fetch(`${accountsUrl}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }).toString(),
      cache: 'no-store',
      signal: AbortSignal.timeout(15000),
    });
    data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  } catch {
    return setupPage(false, 'Could not reach Zoho', ['Check your internet connection and try again.']);
  }

  if (typeof data.refresh_token !== 'string') {
    const code = String(data.error ?? 'no refresh token returned');
    return setupPage(false, 'Zoho did not issue a refresh token', [`Zoho error: ${code}`, REASONS[code] ?? 'Start again from /api/zoho/connect.']);
  }

  saveEnvLocal('ZOHO_REFRESH_TOKEN', data.refresh_token);
  const response = setupPage(true, 'Zoho CRM connected', [
    `The refresh token was saved to .env.local (not shown). Scope: ${String(data.scope ?? 'not reported')}.`,
    'New enquiries from the website now create Leads through the Zoho API, with every mapped field.',
    'For production, copy ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET and ZOHO_REFRESH_TOKEN from .env.local into Vercel → Settings → Environment Variables, then redeploy.',
  ]);
  response.headers.append('Set-Cookie', `${STATE_COOKIE}=; Path=/api/zoho; Max-Age=0; HttpOnly; SameSite=Lax`);
  return response;
}
