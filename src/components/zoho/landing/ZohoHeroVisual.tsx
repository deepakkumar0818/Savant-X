import tx from '@/content/text/components/zoho/landing/ZohoHeroVisual.json';
import Image from 'next/image';
import { Check, GitBranch, Mail, Zap } from 'lucide-react';
import { ZOHO_LOGOS } from './data';

const PIPELINE = [
  { stage: tx.qualified, dot: 'bg-sky-500', deals: [['Metro Infra', '2.4L'], ['Apex Foods', '1.1L']] },
  { stage: tx.proposal, dot: 'bg-indigo-500', deals: [['Nova Retail', '5.6L'], ['Bright Labs', '3.2L']] },
  { stage: tx.negotiation, dot: 'bg-violet-500', deals: [['Orbit Hotels', '8.0L']] },
  { stage: tx.won, dot: 'bg-emerald-500', deals: [['Zen Clinics', '6.3L']] },
];

function Logo({ app, className }: { app: string; className: string }) {
  const src = ZOHO_LOGOS[app];
  return src ? <Image src={src} alt="" width={32} height={32} className={`object-contain ${className}`} /> : null;
}

/**
 * Illustrative product UI for the hero: a Zoho CRM pipeline, a Creator app screen and
 * workflow nodes. Names and values are placeholders, so it is hidden from assistive tech.
 */
export default function ZohoHeroVisual() {
  return (
    <div aria-hidden className="pointer-events-none relative mx-auto w-full max-w-xl select-none">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.25),transparent_55%)] blur-2xl" />

      {/* CRM pipeline */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-30px_rgba(30,27,75,0.45)] ring-1 ring-slate-900/10">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
          <Logo app="Zoho CRM" className="h-5 w-5" />
          <span className="text-[11px] font-semibold text-slate-800">{tx.deals_pipeline}</span>
          <span className="ml-auto rounded-md bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-500">{tx.this_quarter}</span>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {PIPELINE.map((col) => (
            <div key={col.stage} className="rounded-lg bg-slate-50 p-1.5">
              <p className="mb-1.5 flex items-center gap-1 truncate text-[9px] font-semibold text-slate-600">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${col.dot}`} />
                {col.stage}
              </p>
              <div className="space-y-1.5">
                {col.deals.map(([name, amount]) => (
                  <div key={name} className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-slate-900/5">
                    <p className="truncate text-[9px] font-medium text-slate-800">{name}</p>
                    <p className="text-[9px] font-semibold tabular-nums text-slate-500">₹ {amount}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator app */}
      <div className="relative -mt-10 ml-auto w-[68%] overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-25px_rgba(30,27,75,0.5)] ring-1 ring-slate-900/10 sm:-mt-14">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
          <Logo app="Zoho Creator" className="h-5 w-5" />
          <span className="text-[11px] font-semibold text-slate-800">{tx.service_request_app}</span>
        </div>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3 p-3">
          <div className="space-y-2">
            {['Customer', 'Site location', 'Request type'].map((f) => (
              <div key={f}>
                <p className="text-[8px] font-medium text-slate-500">{f}</p>
                <div className="mt-0.5 h-4 rounded border border-slate-200 bg-slate-50" />
              </div>
            ))}
            <div className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 py-1 text-center text-[9px] font-semibold text-white">{tx.submit}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">{tx.approval}</p>
            {['Submitted', 'Manager review', 'Approved'].map((step, i) => (
              <p key={step} className="mt-1.5 flex items-center gap-1.5 text-[9px] font-medium text-slate-700">
                <span
                  className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                    i < 2 ? 'bg-emerald-500 text-white' : 'bg-white ring-1 ring-slate-300'
                  }`}
                >
                  {i < 2 && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                </span>
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow nodes */}
      <div className="absolute -left-4 bottom-6 hidden w-44 rounded-xl bg-white/95 p-3 shadow-xl ring-1 ring-slate-900/10 backdrop-blur sm:block lg:-left-10">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-indigo-600">{tx.workflow}</p>
        {[
          { icon: Zap, label: tx.deal_moves_to_won },
          { icon: GitBranch, label: tx.create_invoice_in_books },
          { icon: Mail, label: tx.email_the_customer },
        ].map(({ icon: Icon, label }, i) => (
          <div key={label}>
            {i > 0 && <span className="ml-[11px] block h-2.5 border-l border-dashed border-indigo-300" />}
            <p className="flex items-center gap-2 text-[10px] font-medium text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-3 w-3" />
              </span>
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
