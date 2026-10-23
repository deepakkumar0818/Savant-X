'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Globe, Search } from 'lucide-react';
import pagesIndex from '@/content/pages.json';
import { Badge, inputClass, PageHeader } from '@/components/admin/ui';

function groupOf(route: string) {
  if (route.startsWith('/expertise/zoho-integrations')) return 'Zoho';
  if (route.startsWith('/expertise/')) return 'Expertise';
  if (/privacy|terms|cookie|refund/.test(route)) return 'Legal';
  return 'Main pages';
}
const ORDER = ['Main pages', 'Zoho', 'Expertise', 'Legal'];

export default function AdminPages() {
  const [query, setQuery] = useState('');
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = pagesIndex.pages.filter((p) => !q || p.title.toLowerCase().includes(q) || p.route.toLowerCase().includes(q));
    const map = new Map<string, typeof list>();
    for (const p of list) map.set(groupOf(p.route), [...(map.get(groupOf(p.route)) ?? []), p]);
    return ORDER.filter((g) => map.has(g)).map((g) => [g, map.get(g)!] as const);
  }, [query]);

  return (
    <>
      <PageHeader title="Pages" description="Choose a page to edit its text. Changes to the header and footer apply to every page." />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a page…" aria-label="Find a page" className={`${inputClass} h-10 pl-9`} />
        </div>
      </div>

      <Link
        href="/admin/pages/edit?route=shared"
        className="mb-8 flex items-center gap-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 p-5 text-white shadow-sm transition hover:brightness-110"
      >
        <Globe className="h-6 w-6 shrink-0" aria-hidden />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold">Header, footer & site-wide text</span>
          <span className="block text-sm text-indigo-100">Navigation menu, footer links, newsletter box and the default search-engine description.</span>
        </span>
        <ChevronRight className="h-5 w-5" aria-hidden />
      </Link>

      <div className="space-y-8">
        {groups.map(([group, pages]) => (
          <section key={group}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {group} <span className="font-normal normal-case tracking-normal">({pages.length})</span>
            </h2>
            <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
              {pages.map((p) => (
                <li key={p.route} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50">
                  <Link href={`/admin/pages/edit?route=${encodeURIComponent(p.route)}`} className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-slate-900">{p.title}</span>
                      <span className="block truncate font-mono text-xs text-slate-500">{p.route}</span>
                    </span>
                    <Badge>{p.text.length} {p.text.length === 1 ? 'section' : 'sections'}</Badge>
                  </Link>
                  <a href={p.route} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on the website`} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                  <Link href={`/admin/pages/edit?route=${encodeURIComponent(p.route)}`} aria-hidden tabIndex={-1} className="text-slate-300">
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {!groups.length && <p className="text-sm text-slate-500">No page matches “{query}”.</p>}
      </div>
    </>
  );
}
