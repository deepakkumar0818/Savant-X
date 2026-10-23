'use client';

import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useAdminStatus } from '@/components/admin/AdminShell';
import { adminFetch } from '@/components/admin/client';
import { CollectionEditor } from '@/components/admin/CollectionEditor';
import { IconSelect, ImageField, StringListField, type ImageValue } from '@/components/admin/fields';
import { PublishBar } from '@/components/admin/PublishBar';
import { useContent } from '@/components/admin/useContent';
import { AutoTextarea, Badge, Button, Card, Field, inputClass, Notice, PageHeader, Spinner } from '@/components/admin/ui';

const PATH = 'src/content/collections/products.json';

type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  features: string[];
  technology: string[];
  icon: string;
  screenshot?: ImageValue;
};
type Data = { trustedBy: string[]; items: Product[] };

const CATEGORIES = [
  ['education', 'Education'],
  ['healthcare', 'Healthcare'],
  ['logistics', 'Logistics'],
  ['food', 'Food & Hospitality'],
  ['automotive', 'Automotive'],
];

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);

export default function AdminProducts() {
  const status = useAdminStatus();
  const content = useContent<Data>([PATH]);
  const data = content.get(PATH);
  const original = content.original(PATH);
  const [crm, setCrm] = useState<{ itSubcategories: string[] } | null>(null);

  useEffect(() => {
    adminFetch<{ itSubcategories: string[] }>('/api/admin/crm/').then(setCrm).catch(() => setCrm(null));
  }, []);

  const inCrm = (name: string) => !crm || crm.itSubcategories.some((v) => v.toLowerCase() === name.trim().toLowerCase());

  return (
    <>
      <PageHeader
        title="Products"
        description="The product catalogue on the Products page, in this order. Demo requests for a product are sent to Zoho CRM with the product as the IT Lead Subcategory."
        actions={
          <a href="/products" target="_blank" rel="noreferrer">
            <Button>
              <ExternalLink className="h-4 w-4" aria-hidden />
              View Products page
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
        <div className="space-y-6">
          <CollectionEditor<Product>
            items={data.items}
            onChange={(items) => content.set(PATH, { ...data, items })}
            itemKey={(p) => p.id}
            itemTitle={(p) => p.name}
            itemMeta={(p) => (
              <>
                <Badge>{CATEGORIES.find(([id]) => id === p.category)?.[1] ?? p.category}</Badge>
                {crm && p.name.trim() && !inCrm(p.name) && <Badge tone="amber">not in CRM</Badge>}
              </>
            )}
            isEdited={(p) => JSON.stringify(p) !== JSON.stringify(original?.items.find((o) => o.id === p.id))}
            addLabel="Add product"
            create={(items) => {
              let n = items.length + 1;
              while (items.some((p) => p.id === `product-${n}`)) n++;
              return { id: `product-${n}`, name: '', subtitle: '', category: 'education', summary: '', description: '', highlights: [], features: [], technology: [], icon: 'Layers' };
            }}
            canDelete={(_, items) => (items.length > 1 ? true : 'Keep at least one product.')}
            renderForm={(p, update) => {
              const isNew = !original?.items.some((o) => o.id === p.id);
              return (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" hint="Also used for the Zoho CRM subcategory of demo requests.">
                      {(id) => <input id={id} value={p.name} onChange={(e) => update({ ...p, name: e.target.value, ...(isNew ? { id: slugify(e.target.value) || p.id } : {}) })} className={inputClass} />}
                    </Field>
                    <Field label="Subtitle">{(id) => <input id={id} value={p.subtitle} onChange={(e) => update({ ...p, subtitle: e.target.value })} className={inputClass} />}</Field>
                  </div>
                  {crm && p.name.trim() && !inCrm(p.name) && (
                    <Notice tone="warning" title={`“${p.name}” is not in Zoho CRM's IT Lead Subcategory list`}>
                      Demo requests for it will still arrive as leads (Lead Type “Request For Demo”), but without a subcategory. Add “{p.name.trim()}” to the IT Lead Subcategory picklist in Zoho CRM (Setup → Modules → Leads) to fix this.
                    </Notice>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
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
                    <Field label="Icon">{(id) => <IconSelect id={id} value={p.icon} onChange={(icon) => update({ ...p, icon })} />}</Field>
                  </div>
                  <Field label="Short summary" hint="Shown on the product card.">{(id) => <AutoTextarea id={id} value={p.summary} onChange={(v) => update({ ...p, summary: v })} />}</Field>
                  <Field label="Description" hint="Shown in the product details popup.">{(id) => <AutoTextarea id={id} value={p.description} onChange={(v) => update({ ...p, description: v })} />}</Field>
                  <Field label="Screenshot">{() => <ImageField value={p.screenshot} onChange={(screenshot) => update({ ...p, screenshot })} />}</Field>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Field label="Highlights" hint="Card bullet points.">{() => <StringListField value={p.highlights} onChange={(highlights) => update({ ...p, highlights })} addLabel="Add highlight" />}</Field>
                    <Field label="Key features" hint="Details popup.">{() => <StringListField value={p.features} onChange={(features) => update({ ...p, features })} addLabel="Add feature" />}</Field>
                  </div>
                  <Field label="Built with" hint="Leave empty to hide this section.">{() => <StringListField value={p.technology} onChange={(technology) => update({ ...p, technology })} placeholder="e.g. React" addLabel="Add technology" />}</Field>
                </>
              );
            }}
          />
          <Card title="Trusted by" description="Client names shown on the Products page. Only list clients who agreed to be named.">
            <StringListField value={data.trustedBy} onChange={(trustedBy) => content.set(PATH, { ...data, trustedBy })} addLabel="Add client" placeholder="Client name" />
          </Card>
        </div>
      )}
      <PublishBar count={content.dirty.length} publishing={content.publishing} readonly={status?.store.mode === 'readonly'} onPublish={(m) => content.publish(m ?? 'Update products')} onDiscard={() => window.confirm('Discard all unpublished changes to products?') && content.discard()} />
    </>
  );
}
