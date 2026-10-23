import { NextRequest } from 'next/server';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { deployStatus, history, StoreError, storeInfo } from '@/lib/cms/store';
import { readZohoConfig } from '@/lib/zohoLeads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET — who is signed in and what is configured.
 * GET ?commit=<sha> — Vercel's deployment state for a publish.
 */
export async function GET(request: NextRequest) {
  try {
    const email = await requireAdmin();
    const commit = request.nextUrl.searchParams.get('commit');
    if (commit) {
      if (!/^([0-9a-f]{40}|local)$/.test(commit)) throw new StoreError(400, 'Invalid commit.');
      return ok(await deployStatus(commit));
    }
    const store = storeInfo();
    const recent = store.mode === 'github' ? await history(['src/content', 'public/uploads'], 8).catch(() => []) : [];
    return ok({
      email,
      store,
      zoho: Boolean(readZohoConfig(process.env)),
      recent,
    });
  } catch (error) {
    return apiError(error);
  }
}
