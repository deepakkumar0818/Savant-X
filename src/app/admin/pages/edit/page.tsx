'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ChevronDown, ExternalLink, History, Search, Undo2 } from 'lucide-react';
import pagesIndex from '@/content/pages.json';
import { useAdminStatus } from '@/components/admin/AdminShell';
import { adminFetch, humanize, sectionLabel } from '@/components/admin/client';
import { HistoryDialog } from '@/components/admin/HistoryDialog';
import { PublishBar } from '@/components/admin/PublishBar';
import { useContent } from '@/components/admin/useContent';
import { AutoTextarea, Badge, Button, inputClass, Notice, PageHeader, Spinner } from '@/components/admin/ui';

type FieldMeta = { kind: string; group: string; line: number; count: number };
type Text = Record<string, string>;

const KIND_LABELS: Record<string, string> = {
  'heading h1': 'Main heading',
  'heading h2': 'Heading',
  'heading h3': 'Sub-heading',
  'heading h4': 'Sub-heading',
  'heading h5': 'Sub-heading',
  'heading h6': 'Sub-heading',
  paragraph: 'Paragraph',
  text: 'Text',
  link: 'Link text',
  button: 'Button',
  'list item': 'List item',
  'form label': 'Form label',
  option: 'Dropdown option',
  'table cell': 'Table cell',
  'image alt text': 'Image description (alt text)',
  placeholder: 'Placeholder',
  'screen-reader label': 'Screen-reader label',
};
function kindLabel(kind: string) {
  if (KIND_LABELS[kind]) return KIND_LABELS[kind];
  const item = kind.endsWith(' item');
  const base = humanize(item ? kind.slice(0, -5) : kind);
  return item ? `${base} (list item)` : base;
}

/** How many pages show each text file. */
const usage = (() => {
  const count = new Map<string, number>();
  for (const p of pagesIndex.pages) for (const t of p.text) count.set(t, (count.get(t) ?? 0) + 1);
  for (const t of pagesIndex.shared) count.set(t, pagesIndex.pages.length);
  return count;
})();

function Editor() {
  const params = useSearchParams();
  const route = params.get('route') ?? '';
  const status = useAdminStatus();
  const page = route === 'shared' ? null : pagesIndex.pages.find((p) => p.route === route);
  const files = useMemo(() => (route === 'shared' ? pagesIndex.shared : (page?.text ?? [])), [route, page]);
  const content = useContent<Text>(files);
  const [meta, setMeta] = useState<Record<string, Record<string, FieldMeta>> | null>(null);
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [historyFor, setHistoryFor] = useState('');

  useEffect(() => {
    if (!files.length) return;
    adminFetch<Record<string, Record<string, FieldMeta>>>(`/api/admin/meta/?${files.map((f) => `path=${encodeURIComponent(f)}`).join('&')}`)
      .then(setMeta)
      .catch(() => setMeta({}));
  }, [files]);

  if (route !== 'shared' && !page) {
    return <Notice tone="error" title="Page not found">Go back to the page list and choose a page.</Notice>;
  }
  const title = page ? page.title : 'Header, footer & site-wide text';
  const q = query.trim().toLowerCase();

  return (
    <>
      <Link href="/admin/pages" className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All pages
      </Link>
      <PageHeader
        title={title}
        description={page ? <span className="font-mono">{page.route}</span> : 'Shown on every page of the website.'}
        actions={
          page && (
            <a href={page.route} target="_blank" rel="noreferrer">
              <Button>
                <ExternalLink className="h-4 w-4" aria-hidden />
                View page
              </Button>
            </a>
          )
        }
      />

      {content.restored > 0 && (
        <div className="mb-4">
          <Notice tone="warning" title="Unpublished changes restored">
            You had edited this page without publishing. Your changes are back; publish them or discard them.
          </Notice>
        </div>
      )}

      <div className="sticky top-16 z-10 -mx-4 mb-6 bg-slate-50/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find text on this page…" aria-label="Find text on this page" className={`${inputClass} h-10 pl-9`} />
        </div>
      </div>

      {content.error ? (
        <Notice tone="error" title="Could not load this page">
          {content.error}{' '}
          <button type="button" onClick={() => content.reload()} className="font-semibold underline">
            Try again
          </button>
        </Notice>
      ) : content.loading || !meta ? (
        <Spinner />
      ) : (
        <div className="space-y-6">
          {files.map((file) => {
            const values = content.get(file);
            const original = content.original(file);
            if (!values || !original) return null;
            const fileMeta = meta[file] ?? {};
            const keys = Object.keys(original).filter((k) => !q || values[k].toLowerCase().includes(q) || original[k].toLowerCase().includes(q));
            if (q && !keys.length) return null;
            const groups = new Map<string, string[]>();
            for (const k of keys) {
              const g = fileMeta[k]?.group ?? 'content';
              groups.set(g, [...(groups.get(g) ?? []), k]);
            }
            const shared = (usage.get(file) ?? 1) > 1 && route !== 'shared';
            const changed = Object.keys(original).filter((k) => values[k] !== original[k]).length;
            const isCollapsed = collapsed.has(file) && !q;
            return (
              <section key={file} className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <header className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-5 py-3.5">
                  <button
                    type="button"
                    onClick={() => setCollapsed((s) => (s.has(file) ? new Set([...s].filter((x) => x !== file)) : new Set([...s, file])))}
                    aria-expanded={!isCollapsed}
                    className="flex min-w-0 flex-1 items-center gap-2 text-left"
                  >
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition ${isCollapsed ? '-rotate-90' : ''}`} aria-hidden />
                    <span className="truncate text-[15px] font-semibold text-slate-900">{sectionLabel(file)}</span>
                    <Badge>{Object.keys(original).length} fields</Badge>
                    {shared && <Badge tone="amber">Also on {(usage.get(file) ?? 1) - 1} other page{(usage.get(file) ?? 1) - 1 === 1 ? '' : 's'}</Badge>}
                    {changed > 0 && <Badge tone="indigo">{changed} edited</Badge>}
                  </button>
                  <Button size="sm" variant="ghost" onClick={() => setHistoryFor(file)} disabled={status?.store.mode !== 'github'} title={status?.store.mode !== 'github' ? 'Available once publishing to GitHub is set up' : undefined}>
                    <History className="h-3.5 w-3.5" aria-hidden />
                    History
                  </Button>
                </header>
                {!isCollapsed && (
                  <div className="divide-y divide-slate-100">
                    {[...groups].map(([group, groupKeys]) => (
                      <div key={group} className="px-5 py-4">
                        {groups.size > 1 && <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">{humanize(group)}</h3>}
                        <div className="grid gap-4 lg:grid-cols-2">
                          {groupKeys.map((k) => {
                            const m = fileMeta[k];
                            const edited = values[k] !== original[k];
                            const long = original[k].length > 90;
                            const seo = m?.group === 'metadata' && (m.kind === 'title' || m.kind === 'description');
                            const limit = seo ? (m.kind === 'title' ? 60 : 160) : 0;
                            return (
                              <div key={k} className={long ? 'lg:col-span-2' : ''}>
                                <div className="mb-1 flex items-center gap-2">
                                  <label htmlFor={`${file}:${k}`} className="text-xs font-medium text-slate-500">
                                    {m ? kindLabel(m.kind) : 'Text'}
                                  </label>
                                  {m && m.count > 1 && <Badge tone="blue">used {m.count}×</Badge>}
                                  {edited && (
                                    <button type="button" onClick={() => content.set(file, { ...values, [k]: original[k] })} className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                                      <Undo2 className="h-3 w-3" aria-hidden />
                                      Undo
                                    </button>
                                  )}
                                  {limit > 0 && !edited && <span className="ml-auto text-xs text-slate-400">{values[k].length}/{limit}</span>}
                                  {limit > 0 && edited && <span className={`text-xs ${values[k].length > limit ? 'text-amber-600' : 'text-slate-400'}`}>{values[k].length}/{limit}</span>}
                                </div>
                                <AutoTextarea
                                  id={`${file}:${k}`}
                                  value={values[k]}
                                  onChange={(v) => content.set(file, { ...values, [k]: v })}
                                  className={edited ? 'bg-indigo-50/40 ring-indigo-300' : ''}
                                />
                                {original[k].trim() && !values[k].trim() && <p className="mt-1 text-xs font-medium text-rose-600">This text cannot be empty.</p>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
          {q && files.every((f) => {
            const v = content.get(f);
            return !v || !Object.values(v).some((x) => x.toLowerCase().includes(q));
          }) && <p className="text-sm text-slate-500">No text on this page matches “{query}”.</p>}
        </div>
      )}

      <PublishBar
        count={content.dirty.length}
        publishing={content.publishing}
        readonly={status?.store.mode === 'readonly'}
        onPublish={(message) => content.publish(message ?? `Update ${title}`)}
        onDiscard={() => window.confirm('Discard all unpublished changes on this page?') && content.discard()}
      />
      {historyFor && <HistoryDialog path={historyFor} label={sectionLabel(historyFor)} onClose={() => setHistoryFor('')} onRestored={() => content.reload()} />}
    </>
  );
}

export default function PageEditor() {
  return (
    <Suspense fallback={<Spinner />}>
      <Editor />
    </Suspense>
  );
}
