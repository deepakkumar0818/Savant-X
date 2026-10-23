import { NextRequest } from 'next/server';
import meta from '@/content/text-meta.json';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { StoreError } from '@/lib/cms/store';

export const runtime = 'nodejs';

type FieldMeta = { kind: string; group: string; line: number; count: number };
const META = meta as Record<string, Record<string, FieldMeta>>;

/** GET ?path=src/content/text/… — what each text field is (heading, button…) and where it sits. */
export async function GET(request: NextRequest) {
  try {
    await requireAdmin();
    const paths = request.nextUrl.searchParams.getAll('path');
    if (!paths.length || paths.length > 60) throw new StoreError(400, 'Invalid file list.');
    const out: Record<string, Record<string, FieldMeta>> = {};
    for (const p of paths) {
      const source = p.replace(/^src\/content\/text\//, '').replace(/\.json$/, '');
      out[p] = META[`${source}.tsx`] ?? META[`${source}.ts`] ?? {};
    }
    return ok(out);
  } catch (error) {
    return apiError(error);
  }
}
