/**
 * Admin sessions: a signed, expiring cookie (HMAC-SHA256 via Web Crypto, so the same code
 * runs in middleware and in route handlers). No session data is stored on the server.
 */

export const SESSION_COOKIE = 'sx_admin';
export const SESSION_TTL_SECONDS = 8 * 60 * 60;

export type AdminConfig = { email: string; password: string; secret: string };

/** Null when the admin login has not been configured (no built-in default password). */
export function adminConfig(env: Record<string, string | undefined> = process.env): AdminConfig | null {
  const email = env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = env.ADMIN_PASSWORD ?? '';
  if (!email || password.length < 8) return null;
  // Sessions are signed with a dedicated secret when provided; otherwise with one derived
  // from the password, so changing the password signs everyone out.
  const secret = env.ADMIN_SESSION_SECRET?.trim() || `savantx-admin:${email}:${password}`;
  return { email, password, secret };
}

const encoder = new TextEncoder();

function base64url(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromBase64url(s: string): Uint8Array {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(data)));
}

/** Compares without leaking where the inputs differ. */
export function safeEqual(a: Uint8Array | string, b: Uint8Array | string): boolean {
  const x = typeof a === 'string' ? encoder.encode(a) : a;
  const y = typeof b === 'string' ? encoder.encode(b) : b;
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export async function createSession(config: AdminConfig, now = Date.now()): Promise<string> {
  const payload = base64url(encoder.encode(JSON.stringify({ sub: config.email, exp: Math.floor(now / 1000) + SESSION_TTL_SECONDS })));
  return `${payload}.${base64url(await hmac(config.secret, payload))}`;
}

/** The signed-in admin's email, or null for a missing, forged or expired session. */
export async function verifySession(token: string | undefined, config: AdminConfig | null, now = Date.now()): Promise<string | null> {
  if (!token || !config) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  try {
    if (!safeEqual(fromBase64url(signature), await hmac(config.secret, payload))) return null;
    const data = JSON.parse(new TextDecoder().decode(fromBase64url(payload))) as { sub?: string; exp?: number };
    if (data.sub !== config.email || typeof data.exp !== 'number' || data.exp * 1000 <= now) return null;
    return data.sub;
  } catch {
    return null;
  }
}

export function sessionCookieOptions(maxAge = SESSION_TTL_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge,
  };
}
