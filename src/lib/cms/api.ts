import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminConfig, SESSION_COOKIE, verifySession } from './session';
import { StoreError } from './store';

/** The signed-in admin (middleware already blocks everyone else; this is a second check). */
export async function requireAdmin(): Promise<string> {
  const email = await verifySession((await cookies()).get(SESSION_COOKIE)?.value, adminConfig());
  if (!email) throw new StoreError(401, 'Please sign in again.');
  return email;
}

export function apiError(error: unknown) {
  if (error instanceof StoreError) {
    return NextResponse.json({ error: error.message }, { status: error.status, headers: { 'Cache-Control': 'no-store' } });
  }
  console.error('[admin]', error instanceof Error ? error.message : error);
  return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
}

export function ok(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}
