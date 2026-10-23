import { NextRequest, NextResponse } from 'next/server';
import { adminConfig, createSession, safeEqual, SESSION_COOKIE, sessionCookieOptions } from '@/lib/cms/session';
import { clientKey } from '@/lib/submissionGuard';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const failures = new Map<string, number[]>();

function recentFailures(key: string, now: number) {
  const list = (failures.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  failures.set(key, list);
  return list;
}

export async function POST(request: NextRequest) {
  const config = adminConfig();
  if (!config) {
    return NextResponse.json(
      { error: 'The admin login is not set up yet. Add ADMIN_EMAIL and ADMIN_PASSWORD (at least 8 characters) to the environment variables.' },
      { status: 503 }
    );
  }

  const key = clientKey(request.headers);
  const now = Date.now();
  if (recentFailures(key, now).length >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many failed attempts. Please wait 15 minutes and try again.' }, { status: 429 });
  }

  let email = '';
  let password = '';
  try {
    const body = (await request.json()) as { email?: unknown; password?: unknown };
    email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    password = typeof body.password === 'string' ? body.password : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Both checks always run, so timing does not reveal which one failed.
  const emailOk = safeEqual(email, config.email);
  const passwordOk = safeEqual(password, config.password);
  if (!emailOk || !passwordOk) {
    recentFailures(key, now).push(now);
    return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 });
  }

  failures.delete(key);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, await createSession(config), sessionCookieOptions());
  return response;
}
