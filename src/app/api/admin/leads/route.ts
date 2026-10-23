import { NextRequest } from 'next/server';
import { apiError, ok, requireAdmin } from '@/lib/cms/api';
import { crmLeadUrl, leadStatuses, listLeads, updateLeadStatus } from '@/lib/cms/zohoAdmin';
import { StoreError } from '@/lib/cms/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET ?page=&search= — website leads from Zoho CRM, newest first, with the Lead Status options. */
export async function GET(request: NextRequest) {
  try {
    await requireAdmin();
    const page = Math.max(1, Math.min(200, Number(request.nextUrl.searchParams.get('page')) || 1));
    const search = request.nextUrl.searchParams.get('search') ?? '';
    const [list, statuses] = await Promise.all([listLeads({ page, search }), leadStatuses()]);
    return ok({ ...list, statuses, leads: list.leads.map((l) => ({ ...l, url: crmLeadUrl(l.id) })) });
  } catch (error) {
    return apiError(error);
  }
}

/** PATCH { id, status } — updates a lead's status in Zoho CRM. */
export async function PATCH(request: NextRequest) {
  try {
    await requireAdmin();
    const body = (await request.json().catch(() => null)) as { id?: string; status?: string } | null;
    if (!body?.id || !body.status) throw new StoreError(400, 'Invalid request.');
    await updateLeadStatus(body.id, body.status);
    return ok({ ok: true });
  } catch (error) {
    return apiError(error);
  }
}
