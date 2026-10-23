import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { listFiles } from '@/lib/cms/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/i;

/** GET — images that can be used in content: uploads first (newest first), then site images. */
export async function GET() {
  try {
    await requireAdmin();
    const [uploads, images] = await Promise.all([listFiles('public/uploads/'), listFiles('public/images/')]);
    const toSrc = (p: string) => p.replace(/^public/, '');
    return ok({
      uploads: uploads.filter((p) => IMAGE.test(p)).map(toSrc).reverse(),
      images: images.filter((p) => IMAGE.test(p) && !/\/(logos|icons)\//.test(p)).map(toSrc),
    });
  } catch (error) {
    return apiError(error);
  }
}
