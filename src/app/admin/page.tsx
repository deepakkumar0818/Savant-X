'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleAlert, ExternalLink, FileText, FolderKanban, Image as ImageIcon, ListChecks, Package, Settings, Users } from 'lucide-react';
import pagesIndex from '@/content/pages.json';
import { useAdminStatus } from '@/components/admin/AdminShell';
import { timeAgo } from '@/components/admin/client';
import { Card, PageHeader, Spinner } from '@/components/admin/ui';

const SHORTCUTS = [
  { href: '/admin/pages', label: 'Pages', text: `Edit the text on all ${pagesIndex.pages.length} pages, the header and the footer.`, icon: FileText },
  { href: '/admin/projects', label: 'Projects', text: 'Add, remove and reorder work projects and the featured showcase.', icon: FolderKanban },
  { href: '/admin/products', label: 'Products', text: 'Manage the product catalogue and demo requests.', icon: Package },
  { href: '/admin/forms', label: 'Forms', text: 'Service and budget options, with their Zoho CRM mapping.', icon: ListChecks },
  { href: '/admin/leads', label: 'Leads', text: 'Enquiries from every website form, from Zoho CRM.', icon: Users },
  { href: '/admin/media', label: 'Media', text: 'Upload images and copy their paths.', icon: ImageIcon },
  { href: '/admin/settings', label: 'Site settings', text: 'Phone, email, offices, social links and headline numbers.', icon: Settings },
];

function Check({ ok, title, children }: { ok: boolean; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      {ok ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden /> : <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden />}
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-500">{children}</p>
      </div>
    </li>
  );
}

export default function AdminDashboard() {
  const status = useAdminStatus();
  if (!status) return <Spinner />;

  return (
    <>
      <PageHeader title="Dashboard" description="Edit the website's content. Every publish is saved with its history, and the website rebuilds automatically." />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 xl:col-span-2">
          {SHORTCUTS.map(({ href, label, text, icon: Icon }) => (
            <Link key={href} href={href} className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-indigo-300">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                  {label}
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-500" aria-hidden />
                </span>
                <span className="mt-0.5 block text-sm text-slate-500">{text}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          <Card title="Setup">
            <ul className="space-y-4">
              <Check ok title="Admin login">
                Signed in as {status.email}.
              </Check>
              <Check ok={status.store.mode !== 'readonly'} title="Publishing">
                {status.store.mode === 'github'
                  ? `Changes are committed to ${status.store.repo} (${status.store.branch}); Vercel then rebuilds the site.`
                  : status.store.mode === 'local'
                    ? 'Development mode: changes are saved straight into the project files.'
                    : 'Not set up. Add GITHUB_TOKEN and GITHUB_REPO in Vercel, then redeploy.'}
              </Check>
              <Check ok={status.zoho} title="Zoho CRM">
                {status.zoho ? 'Connected. Website forms create leads in Zoho CRM.' : 'Not connected. Forms fall back to the Zoho web form; the Leads page needs the API connection.'}
              </Check>
            </ul>
          </Card>

          <Card title="Recent changes">
            {status.store.mode !== 'github' ? (
              <p className="text-sm text-slate-500">History appears here once publishing to GitHub is set up.</p>
            ) : status.recent.length ? (
              <ul className="divide-y divide-slate-100">
                {status.recent.map((c) => (
                  <li key={c.commit} className="py-2.5 first:pt-0 last:pb-0">
                    <a href={c.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-2">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-slate-800 group-hover:text-indigo-700">{c.message.replace(/^CMS:\s*/, '')}</span>
                        <span className="block text-xs text-slate-500">
                          {c.author} · {timeAgo(c.date)}
                        </span>
                      </span>
                      <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">No changes yet.</p>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
