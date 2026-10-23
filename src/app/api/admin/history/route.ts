import { NextRequest } from 'next/server';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { kindOf, labelFor, prepareChanges } from '@/lib/cms/content';
import { commitFiles, history, readAt, readFiles, StoreError, storeInfo } from '@/lib/cms/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET ?path=… — published changes to these files (newest first). */
export async function GET(request: NextRequest) {
  try {
    await requireAdmin();
    const paths = request.nextUrl.searchParams.getAll('path');
    if (!paths.length || paths.length > 30 || paths.some((p) => !kindOf(p))) throw new StoreError(400, 'Invalid file list.');
    return ok({ mode: storeInfo().mode, entries: await history(paths, 25) });
  } catch (error) {
    return apiError(error);
  }
}

/** POST { path, commit } — restores a file to how it was at an earlier publish (as a new publish). */
export async function POST(request: NextRequest) {
  try {
    const email = await requireAdmin();
    const body = (await request.json().catch(() => null)) as { path?: string; commit?: string } | null;
    const path = body?.path ?? '';
    const commit = body?.commit ?? '';
    if (!kindOf(path) || !/^[0-9a-f]{40}$/.test(commit)) throw new StoreError(400, 'Invalid restore request.');
    const old = await readAt(path, commit);
    if (old === null) throw new StoreError(404, 'That version could not be found.');
    const [current] = await readFiles([path]);
    // Restored text must still match the fields the code uses today.
    const files = await prepareChanges([{ path, data: JSON.parse(old), baseSha: current?.sha ?? null }]);
    const result = await commitFiles(files, `CMS: restore ${labelFor(path)} to ${commit.slice(0, 7)}`, email);
    return ok(result);
  } catch (error) {
    return apiError(error);
  }
}
