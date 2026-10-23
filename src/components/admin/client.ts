'use client';

/** Fetch helper for the admin APIs: JSON in/out, readable errors, and a redirect when signed out. */
export class AdminApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function adminFetch<T>(url: string, init: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url, {
      ...init,
      cache: 'no-store',
      headers: init.body && !(init.body instanceof FormData) ? { 'Content-Type': 'application/json', ...init.headers } : init.headers,
    });
  } catch {
    throw new AdminApiError(0, 'Could not reach the server. Check your connection and try again.');
  }
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (res.status === 401) {
    // Session expired: go to the login page once (never from the login page itself).
    if (!window.location.pathname.startsWith('/admin/login')) {
      window.location.href = `/admin/login/?next=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    }
    throw new AdminApiError(401, 'Please sign in again.');
  }
  if (!res.ok) throw new AdminApiError(res.status, data.error || `Request failed (${res.status}).`);
  return data;
}

export const contentUrl = (paths: string[]) => `/api/admin/content/?${paths.map((p) => `path=${encodeURIComponent(p)}`).join('&')}`;

/** "src/content/text/components/home/SolutionsShowcase.json" -> "Solutions showcase" (mirrors the server). */
export function sectionLabel(path: string): string {
  const base = path.replace(/^src\/content\/(text\/)?/, '').replace(/\.json$/, '');
  const parts = base.split('/');
  let name = parts[parts.length - 1];
  if (name === 'page' || name === 'layout') {
    return name === 'layout' ? 'Page title & search engines' : 'Main page content';
  }
  if (name === 'data') name = `${parts[parts.length - 2] ?? ''} data`;
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/\s+(.)/g, (_, c: string) => ` ${c.toLowerCase()}`)
    .replace(/\b(seo|faq|erp|crm|ui|ux|iot|pcb|cms|ai|3d)\b/gi, (w) => w.toUpperCase());
}

/** "websiteTypes" -> "Website types" */
export function humanize(name: string): string {
  if (!name || name === 'content' || name === 'default') return 'Text';
  if (name === 'metadata') return 'Search engine title & description';
  return name
    .replace(/^[A-Z_]+$/, (s) => s.toLowerCase().replace(/_/g, ' '))
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/\s+(.)/g, (_, c: string) => ` ${c.toLowerCase()}`);
}

export function timeAgo(iso: string): string {
  const s = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60) return 'just now';
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);
  return d < 30 ? `${d} day${d === 1 ? '' : 's'} ago` : new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
