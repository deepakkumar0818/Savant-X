import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Calculator,
  Check,
  ClipboardCheck,
  FileCheck2,
  Headphones,
  MessageSquare,
  Package,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { USE_CASES, ZOHO_LOGOS } from './data';

type Visual = 'leads' | 'quote' | 'inventory' | 'support' | 'invoice' | 'dashboard';

/** Per use case, in USE_CASES order: header icon, its tint and the sketch on the right. */
const STYLE: { icon: LucideIcon; tone: string; visual: Visual }[] = [
  { icon: Users, tone: 'bg-indigo-50 text-indigo-600 ring-indigo-100', visual: 'leads' },
  { icon: FileCheck2, tone: 'bg-violet-50 text-violet-600 ring-violet-100', visual: 'quote' },
  { icon: Boxes, tone: 'bg-indigo-50 text-indigo-600 ring-indigo-100', visual: 'inventory' },
  { icon: Headphones, tone: 'bg-sky-50 text-sky-600 ring-sky-100', visual: 'support' },
  { icon: Calculator, tone: 'bg-violet-50 text-violet-600 ring-violet-100', visual: 'invoice' },
  { icon: BarChart3, tone: 'bg-indigo-50 text-indigo-600 ring-indigo-100', visual: 'dashboard' },
];

const bar = (w: string, key?: number) => <span key={key} className={`block h-1 rounded-full bg-slate-200 ${w}`} />;
const paper = 'rounded-lg bg-white shadow-[0_14px_30px_-12px_rgba(30,41,59,0.35)] ring-1 ring-slate-200/80';

/** Small decorative sketch for each use case. */
function Sketch({ visual }: { visual: Visual }) {
  switch (visual) {
    case 'leads':
      return (
        <div className={`${paper} w-full p-2.5`}>
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold text-slate-700">Leads</span>
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <svg viewBox="0 0 100 40" className="mt-2 h-12 w-full" preserveAspectRatio="none">
            <path d="M0 36 L18 30 L32 32 L48 22 L62 25 L78 12 L100 4 L100 40 L0 40 Z" className="fill-indigo-100" />
            <path d="M0 36 L18 30 L32 32 L48 22 L62 25 L78 12 L100 4" className="fill-none stroke-indigo-500" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'quote':
      return (
        <div className="relative w-full">
          <div className={`${paper} space-y-1.5 p-2.5 pb-6`}>
            <span className="text-[9px] font-semibold text-slate-700">Quotation</span>
            {bar('w-full', 1)}
            {bar('w-4/5', 2)}
            {bar('w-3/5', 3)}
          </div>
          <span className="absolute -bottom-2 right-1 flex items-center gap-1 rounded-md bg-emerald-500 px-2 py-1 text-[9px] font-bold text-white shadow-md">
            <Check className="h-3 w-3" strokeWidth={3} />
            Approved
          </span>
        </div>
      );
    case 'inventory':
      return (
        <div className="relative h-20 w-full">
          <span className="absolute bottom-0 left-0 flex h-9 w-9 items-center justify-center rounded-md bg-amber-200 text-amber-800 shadow">
            <Package className="h-5 w-5" />
          </span>
          <span className="absolute bottom-0 left-9 flex h-9 w-9 items-center justify-center rounded-md bg-amber-300 text-amber-900 shadow">
            <Package className="h-5 w-5" />
          </span>
          <span className="absolute bottom-9 left-4 flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700 shadow">
            <Package className="h-5 w-5" />
          </span>
          <span className={`${paper} absolute right-0 top-0 flex h-20 w-14 flex-col items-center gap-1.5 p-2`}>
            <ClipboardCheck className="h-4 w-4 text-indigo-600" />
            {[1, 2, 3].map((k) => (
              <span key={k} className="flex w-full items-center gap-1">
                <Check className="h-2.5 w-2.5 text-emerald-500" strokeWidth={3} />
                {bar('flex-1')}
              </span>
            ))}
          </span>
        </div>
      );
    case 'support':
      return (
        <div className="relative h-20 w-full">
          <span className="absolute right-1 top-0 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow">
            <Headphones className="h-6 w-6" />
          </span>
          <span className="absolute bottom-6 left-0 flex h-6 w-16 items-center gap-1 rounded-lg bg-indigo-500 px-2 shadow">
            <MessageSquare className="h-3 w-3 text-white" />
            <span className="h-1 flex-1 rounded-full bg-white/60" />
          </span>
          <span className={`${paper} absolute bottom-0 left-6 flex h-6 w-20 items-center gap-1 px-2`}>
            {bar('flex-1')}
            <span className="h-1.5 w-3 rounded-full bg-emerald-400" />
          </span>
        </div>
      );
    case 'invoice':
      return (
        <div className={`${paper} relative w-full space-y-1.5 p-2.5`}>
          <span className="text-[9px] font-semibold text-indigo-700">Invoice</span>
          {bar('w-full', 1)}
          {bar('w-4/5', 2)}
          {bar('w-2/3', 3)}
          {bar('w-1/2', 4)}
          <span className="absolute right-2 top-2 rounded bg-emerald-500 px-1.5 py-0.5 text-[8px] font-bold text-white">Paid</span>
        </div>
      );
    case 'dashboard':
      return (
        <div className="w-full">
          <div className="rounded-lg bg-slate-800 p-1.5 shadow-[0_14px_30px_-12px_rgba(30,41,59,0.5)]">
            <div className="flex h-14 items-end gap-1 rounded bg-white p-1.5">
              {[30, 45, 40, 65, 80, 95].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600 to-violet-400" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <span className="mx-auto block h-2 w-3 bg-slate-700" />
          <span className="mx-auto block h-1 w-10 rounded-full bg-slate-700" />
        </div>
      );
  }
}

/** Zoho app logos around a hub, beside the heading. Decorative. */
function AppsCluster() {
  const apps: { name: string; label: string; pos: string }[] = [
    { name: 'Zoho CRM', label: 'CRM', pos: 'left-16 top-0' },
    { name: 'Zoho Books', label: 'Books', pos: 'right-6 top-0' },
    { name: 'Zoho Desk', label: 'Desk', pos: 'left-0 top-20' },
    { name: 'Zoho Creator', label: 'Creator', pos: 'right-0 top-24' },
  ];
  return (
    <div aria-hidden className="relative hidden h-44 w-80 shrink-0 lg:block">
      <div className="absolute inset-6 rounded-full bg-indigo-200/40 blur-3xl" />
      <span className="absolute left-1/2 top-1/2 flex h-20 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(79,70,229,0.45)] ring-1 ring-slate-200">
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">Zoho</span>
        <span className="text-[10px] font-medium text-slate-500">Automated workflows</span>
      </span>
      {apps.map(({ name, label, pos }) => (
        <span key={name} className={`absolute ${pos} flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80`}>
          <Image src={ZOHO_LOGOS[name]!} alt="" width={26} height={26} className="h-[26px] w-[26px] object-contain" />
          <span className="text-[10px] font-semibold text-slate-700">{label}</span>
        </span>
      ))}
    </div>
  );
}

/** Practical Zoho automation scenarios with the workflow and apps involved. */
export default function UseCases() {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#f5f3ff_0%,#f8fafc_40%,#f8fafc_100%)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="zoho-reveal flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-indigo-700">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              Business use cases
            </p>
            <h2 id="use-cases-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Practical workflows we automate with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Zoho</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Typical scenarios, the Zoho apps involved and what the automation is designed to achieve.
            </p>
          </div>
          <AppsCluster />
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {USE_CASES.map((uc, i) => {
            const { icon: Icon, tone, visual } = STYLE[i % STYLE.length];
            return (
              <li
                key={uc.title}
                className="zoho-reveal group flex flex-col rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200/80 shadow-[0_20px_50px_-35px_rgba(79,70,229,0.45)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:ring-indigo-200 motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${tone}`}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900">{uc.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  <span className="sr-only">Challenge: </span>
                  {uc.challenge}
                </p>

                <div className="mt-5 grid flex-1 grid-cols-[minmax(0,1fr)_7.5rem] items-center gap-4">
                  <ul className="space-y-2.5" aria-label="Automated workflow">
                    {uc.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-[13px] leading-snug text-slate-700">
                        <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-violet-500 text-violet-600">
                          <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden />
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden className="transition duration-500 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0">
                    <Sketch visual={visual} />
                  </div>
                </div>

                <p className="mt-5 rounded-lg bg-emerald-50 px-3 py-2 text-[13px] text-emerald-800 ring-1 ring-emerald-100">
                  <span className="font-semibold">Intended outcome: </span>
                  {uc.outcome}
                </p>

                <SelectServiceLink
                  service={uc.service}
                  event="use_case_cta_click"
                  className="mt-2 inline-flex items-center gap-1 self-start py-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                >
                  {uc.apps}
                  <span className="sr-only"> – discuss this workflow</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </SelectServiceLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
