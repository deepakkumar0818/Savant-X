import { randomBytes } from 'node:crypto';
import { NextRequest } from 'next/server';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { imageInfo } from '@/lib/cms/image';
import { commitFiles, StoreError, storeInfo } from '@/lib/cms/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BYTES = 4 * 1024 * 1024;

/** POST multipart { file } — saves an image under /uploads/YYYY/MM/ and returns its path and size. */
export async function POST(request: NextRequest) {
  try {
    const email = await requireAdmin();
    const form = await request.formData().catch(() => null);
    const file = form?.get('file');
    if (!(file instanceof File)) throw new StoreError(400, 'Choose an image to upload.');
    if (file.size > MAX_BYTES) throw new StoreError(413, 'Images must be 4 MB or smaller. Compress it (e.g. save as WebP) and try again.');

    const buf = Buffer.from(await file.arrayBuffer());
    const info = imageInfo(buf);
    if (!info) throw new StoreError(415, 'Only PNG, JPEG, WebP or GIF images can be uploaded.');
    if (info.width < 16 || info.height < 16 || info.width > 10000 || info.height > 10000) throw new StoreError(422, 'That image size is not supported.');

    const now = new Date();
    const base = file.name.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 50) || 'image';
    const rel = `uploads/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}/${base}-${randomBytes(3).toString('hex')}.${info.ext}`;
    const result = await commitFiles([{ path: `public/${rel}`, content: buf.toString('base64'), encoding: 'base64' }], `CMS: upload image ${base}.${info.ext}`, email);

    return ok({ src: `/${rel}`, width: info.width, height: info.height, commit: result.commit, mode: storeInfo().mode });
  } catch (error) {
    return apiError(error);
  }
}
