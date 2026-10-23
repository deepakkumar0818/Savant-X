'use client';

import { useAdminStatus } from '@/components/admin/AdminShell';
import { StringListField } from '@/components/admin/fields';
import { PublishBar } from '@/components/admin/PublishBar';
import { useContent } from '@/components/admin/useContent';
import { Badge, Card, Field, inputClass, Notice, PageHeader, Spinner } from '@/components/admin/ui';
import { classifyService, priorityFromBudget } from '@/lib/zohoLeads';

const PATH = 'src/content/forms.json';

type Forms = {
  budgets: string[];
  consultation: { services: string[] };
  contact: { services: string[]; hardwareService: string; hardwareServices: string[] };
  zoho: { serviceLabels: Record<string, string>; budgets: string[] };
};

/** What Zoho CRM will record for a service, using the same code as the live forms. */
function Mapping({ service, source }: { service: string; source: string }) {
  const { leadType, itSubcategories, electronicsSubcategories } = classifyService({ service, source });
  const sub = [...itSubcategories, ...electronicsSubcategories];
  if (!leadType) return <Badge tone="amber">No Lead Type: reword so it names the service</Badge>;
  return (
    <span className="flex flex-wrap items-center gap-1 text-slate-500">
      CRM: <Badge tone="indigo">{leadType}</Badge>
      {sub.length ? sub.map((s) => <Badge key={s}>{s}</Badge>) : <span className="text-slate-400">no subcategory</span>}
    </span>
  );
}

function Priority({ budget }: { budget: string }) {
  const p = priorityFromBudget(budget);
  return (
    <span className="text-slate-500">
      CRM priority: <Badge tone={p === 'High' ? 'red' : p === 'Low' ? 'slate' : 'amber'}>{p}</Badge>
    </span>
  );
}

export default function AdminForms() {
  const status = useAdminStatus();
  const content = useContent<Forms>([PATH]);
  const f = content.get(PATH);
  const set = (next: Forms) => content.set(PATH, next);

  return (
    <>
      <PageHeader
        title="Forms"
        description="Dropdown options in the website's forms. Each option shows how Zoho CRM will record it, worked out with the same rules the live forms use. Form labels and messages are edited under Pages."
      />
      {content.restored > 0 && <div className="mb-4"><Notice tone="warning" title="Unpublished changes restored">Publish or discard them.</Notice></div>}
      {content.error ? (
        <Notice tone="error">{content.error}</Notice>
      ) : !f ? (
        <Spinner />
      ) : (
        <div className="space-y-6">
          <Card title="Budget ranges" description="Used by the Contact form and the Schedule a Consultation popup. Keep the ₹ amounts: Zoho CRM priority is worked out from them.">
            <StringListField value={f.budgets} onChange={(budgets) => set({ ...f, budgets })} addLabel="Add budget range" describe={(b) => <Priority budget={b} />} />
          </Card>

          <Card title="Schedule a Consultation popup" description="“What do you need help with?” options (Home and About pages).">
            <StringListField
              value={f.consultation.services}
              onChange={(services) => set({ ...f, consultation: { services } })}
              addLabel="Add service"
              describe={(s) => <Mapping service={s} source="Home page" />}
            />
          </Card>

          <Card title="Contact page form" description="“Service Interested” options.">
            <div className="space-y-6">
              <StringListField
                value={f.contact.services}
                onChange={(services) => set({ ...f, contact: { ...f.contact, services } })}
                addLabel="Add service"
                describe={(s) => (s === f.contact.hardwareService ? <span className="text-slate-500">Opens the hardware list below</span> : <Mapping service={s} source="Contact page" />)}
              />
              <Field label="Option that opens the hardware list">
                {(id) => (
                  <select id={id} value={f.contact.hardwareService} onChange={(e) => set({ ...f, contact: { ...f.contact, hardwareService: e.target.value } })} className={`${inputClass} max-w-sm`}>
                    {!f.contact.services.includes(f.contact.hardwareService) && <option value={f.contact.hardwareService}>Choose an option</option>}
                    {f.contact.services.filter(Boolean).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              {!f.contact.services.includes(f.contact.hardwareService) && <Notice tone="error">Choose which service opens the hardware list.</Notice>}
              <Field label="Which hardware service? options">
                {() => (
                  <StringListField
                    value={f.contact.hardwareServices}
                    onChange={(hardwareServices) => set({ ...f, contact: { ...f.contact, hardwareServices } })}
                    addLabel="Add hardware service"
                    describe={(h) => <Mapping service={`${f.contact.hardwareService} — ${h}`} source="Contact page" />}
                  />
                )}
              </Field>
            </div>
          </Card>

          <Card title="Zoho page enquiry form" description="Service names in the Zoho page form and popup. Buttons on the page pre-select these, so services can be renamed but not added or removed here.">
            <div className="space-y-3">
              {Object.entries(f.zoho.serviceLabels).map(([id, label]) => {
                const sent = id.startsWith('erp-') ? label : `Zoho: ${label}`;
                return (
                  <div key={id}>
                    <input
                      value={label}
                      onChange={(e) => set({ ...f, zoho: { ...f.zoho, serviceLabels: { ...f.zoho.serviceLabels, [id]: e.target.value } } })}
                      aria-label={`Zoho service ${id}`}
                      className={inputClass}
                    />
                    <div className="mt-1 pl-1 text-xs">{label.trim() && <Mapping service={sent} source="Zoho page" />}</div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Zoho page budget ranges">
            <StringListField value={f.zoho.budgets} onChange={(budgets) => set({ ...f, zoho: { ...f.zoho, budgets } })} addLabel="Add budget range" describe={(b) => <Priority budget={b} />} />
          </Card>

          <Notice title="Products in the demo request form">The “Request a demo” form lists the products from the Products section, so it updates when you edit products there.</Notice>
        </div>
      )}
      <PublishBar count={content.dirty.length} publishing={content.publishing} readonly={status?.store.mode === 'readonly'} onPublish={(m) => content.publish(m ?? 'Update form options')} onDiscard={() => window.confirm('Discard all unpublished changes to the forms?') && content.discard()} />
    </>
  );
}
