import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { crmPicklists } from '@/lib/cms/zohoAdmin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET — live Zoho CRM picklists the website maps to (IT Lead Subcategory, Lead Type). */
export async function GET() {
  try {
    await requireAdmin();
    return ok(await crmPicklists());
  } catch (error) {
    return apiError(error);
  }
}
