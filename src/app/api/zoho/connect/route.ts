import { NextRequest, NextResponse } from 'next/server';
import { LEADS_SCOPES, STATE_COOKIE, isLocalSetupAllowed, newState, oauthSettings, setupPage } from '@/lib/zohoOAuthSetup';

export const dynamic = 'force-dynamic';

/**
 * Local setup only: open http://localhost:3000/api/zoho/connect to approve the website in Zoho.
 * Uses the client from .env.local, so the grant code always matches the client that exchanges it.
 */
export async function GET(request: NextRequest) {
  if (!isLocalSetupAllowed(request)) return new NextResponse('Not found', { status: 404 });

  const { clientId, clientSecret, accountsUrl, redirectUri } = oauthSettings(request);
  if (!clientId || !clientSecret) {
    return setupPage(false, 'Zoho client not configured', [
      'Set ZOHO_CLIENT_ID and ZOHO_CLIENT_SECRET in .env.local, restart the dev server, then open this page again.',
    ]);
  }

  const state = newState();
  const authorize = new URL(`${accountsUrl}/oauth/v2/auth`);
  authorize.search = new URLSearchParams({
    scope: LEADS_SCOPES,
    client_id: clientId,
    response_type: 'code',
    access_type: 'offline', // needed for a refresh token
    prompt: 'consent',
    redirect_uri: redirectUri,
    state,
  }).toString();

  const response = NextResponse.redirect(authorize);
  response.cookies.set(STATE_COOKIE, state, { httpOnly: true, sameSite: 'lax', path: '/api/zoho', maxAge: 600 });
  return response;
}
