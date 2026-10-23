'use client';

import { ArrowDown, ArrowUp, ExternalLink, Plus, Trash2 } from 'lucide-react';
import { useAdminStatus } from '@/components/admin/AdminShell';
import { CollectionEditor } from '@/components/admin/CollectionEditor';
import { IconSelect, ImageField, StringListField, type ImageValue } from '@/components/admin/fields';
import { PublishBar } from '@/components/admin/PublishBar';
import { useContent } from '@/components/admin/useContent';
import { AutoTextarea, Badge, Button, Field, inputClass, Notice, PageHeader, Spinner, Toggle } from '@/components/admin/ui';

const PATH = 'src/content/collections/projects.json';

type Highlight = { label: string; icon: string; tone: string };
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  duration: string;
  results: string;
  featured: boolean;
  highlights?: Highlight[];
  screenshot?: ImageValue;
  hideFromAll?: boolean;
};
type Data = { items: Project[] };

const CATEGORIES = [
  ['zoho', 'Zoho'],
  ['web-mobile', 'Web & Mobile'],
  ['ui-ux', 'UI/UX'],
  ['hardware', 'Hardware'],
  ['manufacturing', 'Manufacturing'],
  ['healthcare', 'Healthcare'],
  ['education', 'Education'],
  ['data', 'Data Solutions'],
  ['logistics', 'Logistics'],
  ['finance', 'Finance'],
];
const TONES = ['blue', 'orange', 'green', 'rose', 'violet', 'sky'];
const TONE_SWATCH: Record<string, string> = { blue: 'bg-blue-500', orange: 'bg-orange-500', green: 'bg-emerald-500', rose: 'bg-rose-500', violet: 'bg-violet-500', sky: 'bg-sky-500' };

function HighlightsField({ value, onChange }: { value: Highlight[]; onChange: (v: Highlight[]) => void }) {
  const update = (i: number, h: Highlight) => onChange(value.map((x, j) => (j === i ? h : x)));
  const move = (i: number, d: number) => {
    const next = [...value];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    onChange(next);
  };
  return (
    <div className="space-y-2">
      {value.map((h, i) => (
        <div key={i} className="flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
          <input value={h.label} onChange={(e) => update(i, { ...h, label: e.target.value })} placeholder="Feature, e.g. Live Dashboards" aria-label={`Highlight ${i + 1}`} className={`${inputClass} min-w-[12rem] flex-1`} />
          <div className="w-52">
            <IconSelect value={h.icon} onChange={(icon) => update(i, { ...h, icon })} />
          </div>
          <div className="flex gap-1" role="radiogroup" aria-label="Colour">
            {TONES.map((t) => (
              <button key={t} type="button" role="radio" aria-checked={h.tone === t} aria-label={t} onClick={() => update(i, { ...h, tone: t })} className={`h-6 w-6 rounded-full ${TONE_SWATCH[t]} ${h.tone === t ? 'ring-2 ring-slate-900 ring-offset-2' : 'opacity-60 hover:opacity-100'}`} />
            ))}
          </div>
          <span className="ml-auto flex">
            <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up" className="rounded p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20">
              <ArrowUp className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} aria-label="Move down" className="rounded p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20">
              <ArrowDown className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label="Remove" className="rounded p-1 text-slate-400 hover:text-rose-600">
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          </span>
        </div>
      ))}
      <Button size="sm" variant="ghost" onClick={() => onChange([...value, { label: '', icon: 'LayoutDashboard', tone: TONES[value.length % TONES.length] }])}>
        <Plus className="h-3.5 w-3.5" aria-hidden />
        Add highlight
      </Button>
    </div>
  );
}

export default function AdminProjects() {
  const status = useAdminStatus();
  const content = useContent<Data>([PATH]);
  const data = content.get(PATH);
  const original = content.original(PATH);
  const setItems = (items: Project[]) => data && content.set(PATH, { ...data, items });

  return (
    <>
      <PageHeader
        title="Projects"
        description="Work page projects. Featured projects appear in the laptop showcase at the top of the Work page, in this order."
        actions={
          <a href="/work" target="_blank" rel="noreferrer">
            <Button>
              <ExternalLink className="h-4 w-4" aria-hidden />
              View Work page
            </Button>
          </a>
        }
      />
      {content.restored > 0 && <div className="mb-4"><Notice tone="warning" title="Unpublished changes restored">Publish or discard them.</Notice></div>}
      {content.error ? (
        <Notice tone="error">{content.error}</Notice>
      ) : !data ? (
        <Spinner />
      ) : (
        <CollectionEditor<Project>
          items={data.items}
          onChange={setItems}
          itemKey={(p) => p.id}
          itemTitle={(p) => p.title}
          itemMeta={(p) => (
            <>
              <Badge>{CATEGORIES.find(([id]) => id === p.category)?.[1] ?? p.category}</Badge>
              {p.featured && <Badge tone="green">featured</Badge>}
              {p.hideFromAll && <Badge tone="amber">filter only</Badge>}
            </>
          )}
          isEdited={(p) => JSON.stringify(p) !== JSON.stringify(original?.items.find((o) => o.id === p.id))}
          addLabel="Add project"
          create={(items) => ({
            id: Math.max(0, ...items.map((p) => p.id)) + 1,
            title: '',
            category: 'web-mobile',
            image: '💼',
            description: '',
            technologies: [],
            client: '',
            duration: '',
            results: '',
            featured: false,
          })}
          canDelete={(p, items) => (p.featured && items.filter((x) => x.featured).length === 1 ? 'Keep at least one featured project. Feature another project first.' : true)}
          renderForm={(p, update) => (
            <>
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem_6rem]">
                <Field label="Title">{(id) => <input id={id} value={p.title} onChange={(e) => update({ ...p, title: e.target.value })} className={inputClass} />}</Field>
                <Field label="Category">
                  {(id) => (
                    <select id={id} value={p.category} onChange={(e) => update({ ...p, category: e.target.value })} className={inputClass}>
                      {CATEGORIES.map(([v, l]) => (
                        <option key={v} value={v}>
                          {l}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
                <Field label="Emoji" hint="Card icon">{(id) => <input id={id} value={p.image} onChange={(e) => update({ ...p, image: e.target.value })} maxLength={8} className={inputClass} />}</Field>
              </div>
              <Field label="Description">{(id) => <AutoTextarea id={id} value={p.description} onChange={(v) => update({ ...p, description: v })} />}</Field>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Client" hint="Leave empty if not public">{(id) => <input id={id} value={p.client} onChange={(e) => update({ ...p, client: e.target.value })} className={inputClass} />}</Field>
                <Field label="Duration">{(id) => <input id={id} value={p.duration} onChange={(e) => update({ ...p, duration: e.target.value })} className={inputClass} />}</Field>
                <Field label="Result" hint="Only verified numbers">{(id) => <input id={id} value={p.results} onChange={(e) => update({ ...p, results: e.target.value })} className={inputClass} />}</Field>
              </div>
              <div className="grid gap-3 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
                <Toggle checked={p.featured} onChange={(featured) => update({ ...p, featured })} label="Featured" description="Show in the laptop showcase (needs a screenshot)." />
                <Toggle checked={!!p.hideFromAll} onChange={(v) => update({ ...p, hideFromAll: v || undefined })} label="Only under its category" description="Hide from the “All” filter." />
              </div>
              {p.featured && !p.screenshot && <Notice tone="warning">Featured projects need a screenshot for the laptop showcase.</Notice>}
              <Field label="Screenshot">{() => <ImageField value={p.screenshot} onChange={(screenshot) => update({ ...p, screenshot })} />}</Field>
              <Field label="Highlights" hint="Shown as chips next to the laptop for featured projects.">{() => <HighlightsField value={p.highlights ?? []} onChange={(h) => update({ ...p, highlights: h.length ? h : undefined })} />}</Field>
              <Field label="Technologies">{() => <StringListField value={p.technologies} onChange={(technologies) => update({ ...p, technologies })} placeholder="e.g. React" addLabel="Add technology" />}</Field>
            </>
          )}
        />
      )}
      <PublishBar count={content.dirty.length} publishing={content.publishing} readonly={status?.store.mode === 'readonly'} onPublish={(m) => content.publish(m ?? 'Update projects')} onDiscard={() => window.confirm('Discard all unpublished changes to projects?') && content.discard()} />
    </>
  );
}
