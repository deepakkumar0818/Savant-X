'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useAdminStatus } from '@/components/admin/AdminShell';
import { PublishBar } from '@/components/admin/PublishBar';
import { useContent } from '@/components/admin/useContent';
import { Button, Card, Field, inputClass, Notice, PageHeader, Spinner } from '@/components/admin/ui';

const PATH = 'src/content/site.json';

type Office = {
  id: string;
  city: string;
  name: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  countryCode: string;
  coordinates: [number, number];
  type: 'headquarters' | 'office';
};
type Site = {
  company: { name: string; legalName: string; foundingYear: number; phone: string; email: string; infoEmail: string; zohoEmail: string; logoPath: string };
  metrics: { value: number; suffix: string; label: string; zohoLabel?: string }[];
  offices: Office[];
  social: Record<'x' | 'linkedin' | 'facebook' | 'instagram' | 'threads', string>;
};

const SOCIAL: [keyof Site['social'], string][] = [
  ['linkedin', 'LinkedIn'],
  ['x', 'X (Twitter)'],
  ['facebook', 'Facebook'],
  ['instagram', 'Instagram'],
  ['threads', 'Threads'],
];

function Text({ label, value, onChange, hint, type = 'text' }: { label: string; value: string | number; onChange: (v: string) => void; hint?: string; type?: string }) {
  return <Field label={label} hint={hint}>{(id) => <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />}</Field>;
}

export default function AdminSettings() {
  const status = useAdminStatus();
  const content = useContent<Site>([PATH]);
  const s = content.get(PATH);
  const set = (next: Site) => content.set(PATH, next);
  const setCompany = (patch: Partial<Site['company']>) => s && set({ ...s, company: { ...s.company, ...patch } });
  const setOffice = (i: number, patch: Partial<Office>) => s && set({ ...s, offices: s.offices.map((o, j) => (j === i ? { ...o, ...patch } : o)) });

  return (
    <>
      <PageHeader title="Site settings" description="Company details used across the website: header, footer, contact page, map, search-engine data and the headline numbers." />
      {content.restored > 0 && <div className="mb-4"><Notice tone="warning" title="Unpublished changes restored">Publish or discard them.</Notice></div>}
      {content.error ? (
        <Notice tone="error">{content.error}</Notice>
      ) : !s ? (
        <Spinner />
      ) : (
        <div className="space-y-6">
          <Card title="Company">
            <div className="grid gap-4 sm:grid-cols-2">
              <Text label="Company name" value={s.company.name} onChange={(name) => setCompany({ name })} />
              <Text label="Legal name" value={s.company.legalName} onChange={(legalName) => setCompany({ legalName })} />
              <Text label="Phone" value={s.company.phone} onChange={(phone) => setCompany({ phone })} hint="International format, e.g. +91 9888244166. Used for the call links too." />
              <Text label="Email" type="email" value={s.company.email} onChange={(email) => setCompany({ email })} hint="Main contact address." />
              <Text label="Info email" type="email" value={s.company.infoEmail} onChange={(infoEmail) => setCompany({ infoEmail })} />
              <Text label="Zoho email" type="email" value={s.company.zohoEmail} onChange={(zohoEmail) => setCompany({ zohoEmail })} hint="Shown only on the Zoho page." />
              <Text label="Founded (year)" type="number" value={s.company.foundingYear} onChange={(v) => setCompany({ foundingYear: Number(v) })} hint="“Years of experience” is worked out from this." />
            </div>
          </Card>

          <Card title="Headline numbers" description="Shown on the Home, About, Work, Products and Contact pages. Only use numbers you can back up.">
            <div className="space-y-4">
              {s.metrics.map((m, i) => (
                <div key={i} className="grid gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-[7rem_5rem_minmax(0,1fr)_minmax(0,1fr)]">
                  <Text label="Number" type="number" value={m.value} onChange={(v) => set({ ...s, metrics: s.metrics.map((x, j) => (j === i ? { ...x, value: Number(v) } : x)) })} />
                  <Text label="Suffix" value={m.suffix} onChange={(suffix) => set({ ...s, metrics: s.metrics.map((x, j) => (j === i ? { ...x, suffix } : x)) })} />
                  <Text label="Label" value={m.label} onChange={(label) => set({ ...s, metrics: s.metrics.map((x, j) => (j === i ? { ...x, label } : x)) })} />
                  <Text
                    label="Label on the Zoho page"
                    value={m.zohoLabel ?? ''}
                    onChange={(zohoLabel) => set({ ...s, metrics: s.metrics.map((x, j) => (j === i ? { ...x, zohoLabel: zohoLabel || undefined } : x)) })}
                    hint="Optional"
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card
            title="Offices"
            description="Shown in the footer, on the Contact page map and in search-engine data. Map position is latitude and longitude (right-click a place in Google Maps to copy it)."
            actions={
              <Button
                size="sm"
                onClick={() =>
                  set({
                    ...s,
                    offices: [...s.offices, { id: `office-${s.offices.length + 1}`, city: '', name: '', streetAddress: '', locality: '', region: '', postalCode: '', country: 'India', countryCode: 'IN', coordinates: [20.5937, 78.9629], type: 'office' }],
                  })
                }
              >
                <Plus className="h-3.5 w-3.5" aria-hidden />
                Add office
              </Button>
            }
          >
            <div className="space-y-5">
              {s.offices.map((o, i) => (
                <div key={i} className="rounded-lg p-4 ring-1 ring-slate-200">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <p className="font-semibold text-slate-900">{o.name || 'New office'}</p>
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="radio" name="hq" checked={o.type === 'headquarters'} onChange={() => set({ ...s, offices: s.offices.map((x, j) => ({ ...x, type: j === i ? 'headquarters' : 'office' })) })} />
                      Headquarters
                    </label>
                    <Button
                      size="sm"
                      variant="danger"
                      className="ml-auto"
                      disabled={s.offices.length === 1}
                      onClick={() => window.confirm(`Remove ${o.name || 'this office'}?`) && set({ ...s, offices: s.offices.filter((_, j) => j !== i) })}
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                      Remove
                    </Button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Text label="Office name" value={o.name} onChange={(name) => setOffice(i, { name })} />
                    <Text label="City" value={o.city} onChange={(city) => setOffice(i, { city })} />
                    <Text label="Short id" value={o.id} onChange={(id) => setOffice(i, { id: id.toLowerCase().replace(/[^a-z0-9-]/g, '') })} hint="Lowercase, e.g. gaya" />
                    <Text label="Street address" value={o.streetAddress} onChange={(streetAddress) => setOffice(i, { streetAddress })} />
                    <Text label="Locality" value={o.locality} onChange={(locality) => setOffice(i, { locality })} />
                    <Text label="State" value={o.region} onChange={(region) => setOffice(i, { region })} />
                    <Text label="PIN code" value={o.postalCode} onChange={(postalCode) => setOffice(i, { postalCode })} />
                    <Text label="Country" value={o.country} onChange={(country) => setOffice(i, { country })} />
                    <Text label="Country code" value={o.countryCode} onChange={(countryCode) => setOffice(i, { countryCode: countryCode.toUpperCase().slice(0, 2) })} hint="2 letters, e.g. IN" />
                    <Text label="Latitude" type="number" value={o.coordinates[0]} onChange={(v) => setOffice(i, { coordinates: [Number(v), o.coordinates[1]] })} />
                    <Text label="Longitude" type="number" value={o.coordinates[1]} onChange={(v) => setOffice(i, { coordinates: [o.coordinates[0], Number(v)] })} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Social links" description="Footer icons. Use the full https:// address.">
            <div className="grid gap-4 sm:grid-cols-2">
              {SOCIAL.map(([key, label]) => (
                <Text key={key} label={label} type="url" value={s.social[key]} onChange={(v) => set({ ...s, social: { ...s.social, [key]: v } })} />
              ))}
            </div>
          </Card>
        </div>
      )}
      <PublishBar count={content.dirty.length} publishing={content.publishing} readonly={status?.store.mode === 'readonly'} onPublish={(m) => content.publish(m ?? 'Update site settings')} onDiscard={() => window.confirm('Discard all unpublished changes to the settings?') && content.discard()} />
    </>
  );
}
