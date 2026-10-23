import { NextRequest } from 'next/server';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { kindOf, labelFor, prepareChanges, type Change } from '@/lib/cms/content';
import { commitFiles, readFiles, StoreError, storeInfo } from '@/lib/cms/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET ?path=…&path=… — the latest published version of each file (data + version). */
export async function GET(request: NextRequest) {
  try {
    await requireAdmin();
    const paths = request.nextUrl.searchParams.getAll('path');
    if (!paths.length || paths.length > 60 || paths.some((p) => !kindOf(p))) throw new StoreError(400, 'Invalid file list.');
    const files = await readFiles(paths);
    return ok({ mode: storeInfo().mode, files: files.map((f) => ({ path: f.path, sha: f.sha, data: JSON.parse(f.content) })) });
  } catch (error) {
    return apiError(error);
  }
}

/** POST { changes: [{ path, data, baseSha }], message? } — validates and publishes in one commit. */
export async function POST(request: NextRequest) {
  try {
    const email = await requireAdmin();
    const body = (await request.json().catch(() => null)) as { changes?: Change[]; message?: string } | null;
    const files = await prepareChanges(body?.changes ?? []);
    const summary = files.map((f) => labelFor(f.path));
    const message =
      typeof body?.message === 'string' && body.message.trim()
        ? body.message.trim().slice(0, 120)
        : `Update ${summary.slice(0, 3).join(', ')}${summary.length > 3 ? ` and ${summary.length - 3} more` : ''}`;
    const result = await commitFiles(files, `CMS: ${message}`, email);
    const updated = await readFiles(files.map((f) => f.path));
    return ok({ ...result, mode: storeInfo().mode, files: updated.map((f) => ({ path: f.path, sha: f.sha })) });
  } catch (error) {
    return apiError(error);
  }
}
