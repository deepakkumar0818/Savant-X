'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, RefreshCw, Search } from 'lucide-react';
import { adminFetch, AdminApiError, timeAgo } from '@/components/admin/client';
import { Badge, Button, inputClass, Notice, PageHeader, Spinner, useToast } from '@/components/admin/ui';

type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  leadType: string;
  budget: string;
  createdAt: string;
  description: string;
  url: string;
};
type Status = { label: string; value: string };

export default function AdminLeads() {
  const toast = useToast();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [term, setTerm] = useState('');
  const [data, setData] = useState<{ leads: Lead[]; more: boolean; statuses: Status[] } | null>(null);
  const [error, setError] = useState<{ scope: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState('');
  const [saving, setSaving] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setData(await adminFetch(`/api/admin/leads/?page=${page}&search=${encodeURIComponent(term)}`));
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Could not load leads.';
      setError({ scope: e instanceof AdminApiError && message.startsWith('SCOPE:'), message: message.replace(/^SCOPE:\s*/, '') });
    } finally {
      setLoading(false);
    }
  }, [page, term]);
  useEffect(() => void load(), [load]);

  const setStatus = async (lead: Lead, status: string) => {
    setSaving(lead.id);
    try {
      await adminFetch('/api/admin/leads/', { method: 'PATCH', body: JSON.stringify({ id: lead.id, status }) });
      setData((d) => d && { ...d, leads: d.leads.map((l) => (l.id === lead.id ? { ...l, status } : l)) });
      toast('success', `${lead.name || 'Lead'} updated in Zoho CRM.`);
    } catch (e) {
      toast('error', e instanceof Error ? e.message.replace(/^SCOPE:\s*/, '') : 'Update failed.');
    } finally {
      setSaving('');
    }
  };

  return (
    <>
      <PageHeader
        title="Leads"
        description="Enquiries from the website's forms, read live from Zoho CRM. Changing a status here updates the lead in Zoho."
        actions={
          <>
            <Button onClick={() => load()} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} aria-hidden />
              Refresh
            </Button>
            <a href="https://crm.zoho.in/crm/tab/Leads" target="_blank" rel="noreferrer">
              <Button>
                <ExternalLink className="h-4 w-4" aria-hidden />
                Open Zoho CRM
              </Button>
            </a>
          </>
        }
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
          setTerm(search);
        }}
        className="mb-6 flex max-w-xl gap-2"
      >
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, company…" aria-label="Search leads" className={`${inputClass} h-10 pl-9`} />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {error ? (
        error.scope ? (
          <Notice tone="warning" title="Zoho needs one more permission">
            <p>{error.message} Leads are still created by the website forms; only this page is affected.</p>
            <p>
              To fix it, create a new refresh token that includes <code className="rounded bg-amber-100 px-1">ZohoCRM.modules.leads.READ</code> and{' '}
              <code className="rounded bg-amber-100 px-1">ZohoCRM.modules.leads.UPDATE</code> (steps in <code>docs/admin-cms.md</code>), then update <code>ZOHO_REFRESH_TOKEN</code> in Vercel and redeploy. Until then, use the “Open Zoho CRM” button.
            </p>
          </Notice>
        ) : (
          <Notice tone="error">{error.message}</Notice>
        )
      ) : !data ? (
        <Spinner />
      ) : !data.leads.length ? (
        <p className="text-sm text-slate-500">{term ? `No leads match “${term}”.` : 'No leads yet.'}</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Lead</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Type / budget</th>
                  <th className="px-4 py-3">Received</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"><span className="sr-only">Open</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.leads.map((l) => (
                  <Fragment key={l.id}>
                    <tr className="align-top hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <button type="button" onClick={() => setOpen(open === l.id ? '' : l.id)} className="text-left">
                          <span className="block font-semibold text-slate-900 hover:text-indigo-700">{l.name || '—'}</span>
                          <span className="block text-xs text-slate-500">{l.company}</span>
                        </button>
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {l.email && <a href={`mailto:${l.email}`} className="block hover:text-indigo-700">{l.email}</a>}
                        {l.phone && <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="block text-xs hover:text-indigo-700">{l.phone}</a>}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {l.leadType && <Badge tone="indigo">{l.leadType}</Badge>}
                          {l.source && <Badge>{l.source}</Badge>}
                        </div>
                        {l.budget && <p className="mt-1 text-xs text-slate-500">{l.budget}</p>}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500" title={l.createdAt}>{l.createdAt ? timeAgo(l.createdAt) : '—'}</td>
                      <td className="px-4 py-3">
                        <select
                          value={l.status}
                          disabled={saving === l.id}
                          onChange={(e) => setStatus(l, e.target.value)}
                          aria-label={`Status of ${l.name}`}
                          className="h-8 rounded-md border-0 bg-white py-0 pl-2 pr-7 text-xs font-medium ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500"
                        >
                          {!data.statuses.some((s) => s.value === l.status) && <option value={l.status}>{l.status || '—'}</option>}
                          {data.statuses.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <a href={l.url} target="_blank" rel="noreferrer" aria-label={`Open ${l.name} in Zoho CRM`} className="inline-flex rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                          <ExternalLink className="h-4 w-4" aria-hidden />
                        </a>
                      </td>
                    </tr>
                    {open === l.id && (
                      <tr className="bg-slate-50">
                        <td colSpan={6} className="whitespace-pre-wrap px-4 py-3 text-sm text-slate-700">
                          {l.description || 'No message.'}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-slate-500">Click a name to read the message.</p>
            <div className="flex gap-2">
              <Button size="sm" disabled={page === 1 || loading} onClick={() => setPage((p) => p - 1)}>
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Newer
              </Button>
              <Button size="sm" disabled={!data.more || loading} onClick={() => setPage((p) => p + 1)}>
                Older
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
