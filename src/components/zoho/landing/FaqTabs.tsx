'use client';

import tx from '@/content/text/components/zoho/landing/FaqTabs.json';
import { useId, useState } from 'react';
import { BriefcaseBusiness, Plus, Settings, type LucideIcon } from 'lucide-react';
import { FAQS } from './data';

type Group = (typeof FAQS)[number]['group'];

const TABS: { id: Group; title: string; subtitle: string; icon: LucideIcon }[] = [
  { id: 'general', title: tx.general_questions, subtitle: tx.about_our_zoho_services_and, icon: BriefcaseBusiness },
  { id: 'technical', title: tx.technical_questions, subtitle: tx.integration_data_migration_and_support, icon: Settings },
];

/** FAQ tabs (general / technical) with a native <details> accordion for each question. */
export default function FaqTabs() {
  const [active, setActive] = useState<Group>('general');
  const id = useId();

  return (
    <div className="rounded-3xl bg-white p-3 shadow-[0_24px_60px_-34px_rgba(79,70,229,0.35)] ring-1 ring-slate-200/80 sm:p-5">
      <div role="tablist" aria-label={tx.faq_topics} className="grid gap-3 sm:grid-cols-2">
        {TABS.map(({ id: tab, title, subtitle, icon: Icon }) => {
          const selected = tab === active;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`${id}-tab-${tab}`}
              aria-selected={selected}
              aria-controls={`${id}-panel-${tab}`}
              onClick={() => setActive(tab)}
              className={`flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-indigo-200'
              }`}
            >
              <Icon className={`h-6 w-6 shrink-0 ${selected ? 'text-white' : 'text-indigo-600'}`} aria-hidden />
              <span>
                <span className="block text-sm font-bold sm:text-base">{title}</span>
                <span className={`block text-xs ${selected ? 'text-indigo-100' : 'text-slate-500'}`}>{subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      {TABS.map(({ id: tab }) => (
        <div
          key={tab}
          role="tabpanel"
          id={`${id}-panel-${tab}`}
          aria-labelledby={`${id}-tab-${tab}`}
          hidden={tab !== active}
          className="mt-4 space-y-2.5"
        >
          {FAQS.filter((faq) => faq.group === tab).map(({ q, a, icon: Icon }) => (
            <details key={q} className="group rounded-2xl bg-white ring-1 ring-slate-200/80 transition open:ring-indigo-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="flex-1 text-sm font-semibold text-slate-900 sm:text-base">{q}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition group-open:rotate-45 group-open:bg-indigo-50 group-open:text-indigo-600">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="pb-5 pl-[4.5rem] pr-6 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}
