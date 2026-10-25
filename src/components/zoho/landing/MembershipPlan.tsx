import tx from '@/content/text/components/zoho/landing/MembershipPlan.json';
import Image from 'next/image';
import { ArrowRight, BarChart3, Check, Clock3, Code2, Settings, Star, X, Zap } from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { MEMBERSHIP, ZOHO_LOGOS } from './data';

const PIPELINE = [
  { stage: tx.new_leads, color: 'bg-blue-500', cards: 3 },
  { stage: tx.qualified, color: 'bg-rose-400', cards: 3 },
  { stage: tx.proposal, color: 'bg-amber-400', cards: 2 },
  { stage: tx.won, color: 'bg-emerald-500', cards: 2 },
];

/** Decorative CRM pipeline and Creator form windows beside the heading. */
function PlanIllustration() {
  return (
    <div aria-hidden className="relative hidden h-52 w-[31rem] shrink-0 lg:block">
      <div className="absolute -right-6 -top-8 h-48 w-72 rounded-full bg-indigo-200/50 blur-3xl" />

      <div className="absolute left-40 top-2 w-60 rotate-[-2deg] rounded-xl bg-white p-3 shadow-[0_24px_50px_-20px_rgba(30,58,138,0.45)] ring-1 ring-slate-200">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
          <Image src={ZOHO_LOGOS['Zoho CRM']!} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />{tx.zoho_crm}</div>
        <p className="mt-2 text-[9px] font-semibold text-slate-500">{tx.deals_pipeline}</p>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5">
          {PIPELINE.map(({ stage, color, cards }) => (
            <div key={stage}>
              <span className={`block truncate rounded px-1 py-0.5 text-[7px] font-semibold text-white ${color}`}>{stage}</span>
              {Array.from({ length: cards }, (_, i) => (
                <span key={i} className="mt-1 block h-4 rounded border border-slate-100 bg-slate-50" />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-20 w-44 rotate-[3deg] overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-20px_rgba(30,58,138,0.5)] ring-1 ring-slate-200">
        <div className="flex items-center gap-1.5 bg-[#0b1024] px-2.5 py-2 text-[10px] font-semibold text-white">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-white">
            <Image src={ZOHO_LOGOS['Zoho Creator']!} alt="" width={12} height={12} className="h-3 w-3 object-contain" />
          </span>{tx.zoho_creator}</div>
        <div className="space-y-1.5 p-2.5">
          <p className="text-[8px] font-semibold text-slate-700">{tx.project_management}</p>
          {['Project name', 'Client', 'Status', 'Start date'].map((field) => (
            <div key={field} className="flex items-center gap-2">
              <span className="w-14 text-[7px] text-slate-500">{field}</span>
              <span className="h-3 flex-1 rounded border border-slate-200" />
            </div>
          ))}
        </div>
      </div>

      <span className="absolute left-[16rem] top-[10.5rem] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/40">
        <Code2 className="h-5 w-5" />
      </span>
      <span className="absolute -top-2 right-6 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-lg shadow-orange-500/40">
        <Settings className="h-4 w-4" />
      </span>
    </div>
  );
}

/** The Zoho Development Membership: price card, included requests, process and terms. */
export default function MembershipPlan() {
  return (
    <section id="plans" className="relative scroll-mt-24 overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div aria-hidden className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_60%_80%_at_85%_0%,rgba(199,210,254,0.55),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="zoho-reveal flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{tx.choose}{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">{tx.how_you_want}</span>{" "}{tx.to_work_with_us}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{tx.an_ongoing_development_membership_fixed}</p>
          </div>
          <PlanIllustration />
        </div>

        <article
          id="membership"
          aria-labelledby="membership-heading"
          className="zoho-reveal mt-12 scroll-mt-24 rounded-3xl bg-white/80 p-3 shadow-[0_30px_70px_-40px_rgba(30,58,138,0.45)] ring-1 ring-slate-200/80 backdrop-blur sm:p-4"
        >
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            {/* Price card */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0b1024] p-7 text-white sm:p-9">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.45),transparent_55%)]"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-indigo-300/30">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden />{tx.recommended}</span>
                <h3 id="membership-heading" className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {MEMBERSHIP.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">{MEMBERSHIP.tagline}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={tx.supported_zoho_applications}>
                  {MEMBERSHIP.apps.map((app) => (
                    <li key={app} className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-900">
                      <Image src={ZOHO_LOGOS[app]!} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                      {app}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight sm:text-6xl">{MEMBERSHIP.monthly}</span>
                  <span className="text-lg text-slate-300">{tx.month}</span>
                </p>
                <p className="mt-6 border-t border-white/10 pt-6 text-xs text-slate-400">{tx.prices_before_applicable_taxes_zoho}</p>
                <SelectServiceLink
                  service="membership"
                  event="membership_cta_click"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/40 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:w-auto"
                >{tx.get_started}<ArrowRight className="h-4 w-4" aria-hidden />
                </SelectServiceLink>
              </div>
            </div>

            {/* What's included and how it works */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 sm:p-8">
              <h4 className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Settings className="h-5 w-5" aria-hidden />
                </span>{tx.development_requests_included}</h4>
              <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {MEMBERSHIP.requestTypes.map(({ title, detail }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                      <Check className="h-4 w-4" strokeWidth={2.75} aria-hidden />
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-slate-900">{title}</span>
                      <span className="block text-slate-500">{detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-9 flex items-center gap-3 text-lg font-semibold text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Zap className="h-5 w-5" aria-hidden />
                </span>{tx.how_requests_work}</h4>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {MEMBERSHIP.process.map((step, i) => (
                  <li key={step.title} className="relative rounded-xl bg-slate-50/80 px-4 pb-4 pt-6 text-center ring-1 ring-slate-200/70">
                    <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-md shadow-indigo-500/30">
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.body}</p>
                    {i < MEMBERSHIP.process.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-slate-400 xl:block" aria-hidden />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="flex gap-4 rounded-2xl bg-rose-50/70 p-6 ring-1 ring-rose-100">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <X className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h4 className="font-semibold text-slate-900">{tx.not_included_quoted_separately}</h4>
                <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {MEMBERSHIP.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" strokeWidth={3} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {[
              { icon: BarChart3, title: tx.development_capacity, body: MEMBERSHIP.capacity, tone: 'bg-blue-50/70 ring-blue-100', iconTone: 'bg-blue-100 text-blue-600' },
              { icon: Clock3, title: tx.response_and_delivery_times, body: MEMBERSHIP.timelines, tone: 'bg-emerald-50/70 ring-emerald-100', iconTone: 'bg-emerald-100 text-emerald-600' },
            ].map(({ icon: Icon, title, body, tone, iconTone }) => (
              <div key={title} className={`flex gap-4 rounded-2xl p-6 ring-1 ${tone}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconTone}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
