/**
 * Lightweight in-memory protection for public form endpoints.
 * Per server instance only; it reduces accidental double-submits and casual abuse,
 * it is not a substitute for a WAF or CAPTCHA.
 */

const DUPLICATE_WINDOW_MS = 2 * 60 * 1000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 8;

const recentSubmissions = new Map<string, number>();
const requestsByClient = new Map<string, number[]>();

function prune(now: number) {
  for (const [key, at] of recentSubmissions) {
    if (now - at > DUPLICATE_WINDOW_MS) recentSubmissions.delete(key);
  }
  for (const [key, times] of requestsByClient) {
    const fresh = times.filter((t) => now - t < RATE_WINDOW_MS);
    if (fresh.length) requestsByClient.set(key, fresh);
    else requestsByClient.delete(key);
  }
}

function fingerprint(parts: string[]): string {
  // Simple non-cryptographic hash; we only need equality, and avoid keeping raw personal data as keys.
  const input = parts.map((p) => p.trim().toLowerCase()).join('\u0000');
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) | 0;
  }
  return `${input.length}:${hash >>> 0}`;
}

export function clientKey(headers: Headers): string {
  return headers.get('x-forwarded-for')?.split(',')[0]?.trim() || headers.get('x-real-ip') || 'unknown';
}

export function isRateLimited(client: string): boolean {
  const now = Date.now();
  prune(now);
  const times = requestsByClient.get(client) ?? [];
  times.push(now);
  requestsByClient.set(client, times);
  return times.length > RATE_LIMIT;
}

export function isDuplicateSubmission(parts: string[]): boolean {
  const now = Date.now();
  prune(now);
  return recentSubmissions.has(fingerprint(parts));
}

/** Call only after a submission was actually delivered. */
export function rememberSubmission(parts: string[]): void {
  recentSubmissions.set(fingerprint(parts), Date.now());
}

export function escapeHtml(text: unknown): string {
  if (text === undefined || text === null) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}
