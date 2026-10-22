import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import {
  ArrowRight,
  BarChart3,
  Check,
  Cog,
  HardDrive,
  Headphones,
  Mail,
  MessageSquare,
  Package,
  PenLine,
  Target,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { APP_CARDS, ZOHO_LOGOS, type AppVisual } from './data';

const handwriting = Caveat({ subsets: ['latin'], weight: ['500'], display: 'swap' });

const PAGE_PATH = '/expertise/zoho-integrations';

/** Accent colour per app: card tint, check icons and link colour. */
const ACCENT: Record<AppVisual, { tint: string; check: string; link: string }> = {
  crm: { tint: 'from-blue-50', check: 'bg-blue-500', link: 'text-blue-700' },
  creator: { tint: 'from-violet-50', check: 'bg-violet-500', link: 'text-violet-700' },
  books: { tint: 'from-emerald-50', check: 'bg-emerald-500', link: 'text-emerald-700' },
  inventory: { tint: 'from-orange-50', check: 'bg-orange-500', link: 'text-orange-700' },
  desk: { tint: 'from-green-50', check: 'bg-green-500', link: 'text-green-700' },
  flow: { tint: 'from-indigo-50', check: 'bg-indigo-500', link: 'text-indigo-700' },
  analytics: { tint: 'from-rose-50', check: 'bg-rose-500', link: 'text-rose-700' },
  sign: { tint: 'from-sky-50', check: 'bg-sky-500', link: 'text-sky-700' },
};

const FALLBACK_ICONS: Record<string, LucideIcon> = { 'Zoho Flow': Workflow, 'Zoho Sign': PenLine };

const line = (w: string, tone = 'bg-slate-200', key?: number) => <span key={key} className={`block h-1 rounded-full ${tone} ${w}`} />;

/** Small illustrative product screens, one per app. Decorative only. */
function AppPreview({ visual }: { visual: AppVisual }) {
  const frame = 'h-28 w-full overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80';

  switch (visual) {
    case 'crm':
      return (
        <div className={`${frame} grid grid-cols-3 gap-1 p-1.5`}>
          {['bg-blue-400', 'bg-rose-400', 'bg-emerald-400'].map((tone, i) => (
            <div key={tone} className="space-y-1">
              <span className={`block h-2.5 rounded-sm ${tone}`} />
              {Array.from({ length: 3 - (i === 2 ? 1 : 0) }, (_, k) => (
                <span key={k} className="block space-y-0.5 rounded-sm border border-slate-100 p-1">
                  {line('w-full')}
                  {line('w-2/3', 'bg-slate-100')}
                </span>
              ))}
            </div>
          ))}
        </div>
      );
    case 'creator':
      return (
        <div className={`${frame} flex`}>
          <div className="w-7 space-y-1.5 bg-[#151a33] p-1.5">
            {Array.from({ length: 6 }, (_, i) => line('w-full', 'bg-white/30', i))}
          </div>
          <div className="flex-1 space-y-1.5 p-2">
            <p className="text-[7px] font-semibold text-slate-700">Project request</p>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} className="block h-3 rounded-sm border border-slate-200" />
            ))}
          </div>
        </div>
      );
    case 'books':
      return (
        <div className={`${frame} space-y-1.5 p-2`}>
          <p className="text-[7px] font-semibold text-slate-700">Invoices</p>
          {['bg-emerald-400', 'bg-amber-400', 'bg-emerald-400'].map((tone, i) => (
            <div key={i} className="flex items-center gap-1.5">
              {line('w-8')}
              {line('flex-1', 'bg-slate-100')}
              <span className={`h-1.5 w-4 rounded-full ${tone}`} />
            </div>
          ))}
          <div className="ml-auto mt-1 w-16 rounded-md bg-emerald-50 p-1 ring-1 ring-emerald-100">
            {line('w-full', 'bg-emerald-400')}
            <span className="mt-1 block h-1 w-2/3 rounded-full bg-emerald-200" />
          </div>
        </div>
      );
    case 'inventory':
      return (
        <div className={`${frame} relative space-y-1.5 p-2 pl-9`}>
          <span className="absolute left-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md bg-amber-100 text-amber-700">
            <Package className="h-4 w-4" />
          </span>
          <p className="text-[7px] font-semibold text-slate-700">Stock levels</p>
          {['bg-emerald-400 w-6', 'bg-amber-400 w-4', 'bg-rose-400 w-2', 'bg-emerald-400 w-5'].map((bar, i) => (
            <div key={i} className="flex items-center gap-1.5">
              {line('flex-1')}
              <span className={`h-1.5 rounded-full ${bar}`} />
            </div>
          ))}
        </div>
      );
    case 'desk':
      return (
        <div className={`${frame} flex`}>
          <div className="w-6 space-y-1.5 bg-[#151a33] p-1.5">
            {Array.from({ length: 5 }, (_, i) => line('w-full', 'bg-white/30', i))}
          </div>
          <div className="flex-1 space-y-1.5 p-2">
            <p className="text-[7px] font-semibold text-slate-700">Tickets</p>
            {['bg-sky-400', 'bg-amber-400', 'bg-rose-400', 'bg-emerald-400'].map((tone, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full border border-slate-300" />
                {line('flex-1')}
                <span className={`h-1.5 w-4 rounded-full ${tone}`} />
              </div>
            ))}
          </div>
        </div>
      );
    case 'flow': {
      const nodes: { logo?: string; icon?: LucideIcon; pos: string }[] = [
        { logo: ZOHO_LOGOS['Zoho CRM'], pos: 'left-2 top-1' },
        { logo: ZOHO_LOGOS['Zoho Creator'], pos: 'right-2 top-0' },
        { icon: Mail, pos: 'left-0 bottom-4' },
        { logo: ZOHO_LOGOS['Zoho Books'], pos: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' },
        { icon: HardDrive, pos: 'right-0 bottom-5' },
        { icon: MessageSquare, pos: 'left-1/2 bottom-0 -translate-x-1/2' },
      ];
      return (
        <div className="relative h-28 w-full">
          {nodes.map(({ logo, icon: Icon, pos }, i) => (
            <span key={i} className={`absolute ${pos} flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md ring-1 ring-slate-200`}>
              {logo ? <Image src={logo} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" /> : Icon && <Icon className="h-4 w-4 text-indigo-600" />}
            </span>
          ))}
        </div>
      );
    }
    case 'analytics':
      return (
        <div className={`${frame} grid grid-cols-[1.3fr_1fr] gap-1.5 p-2`}>
          <div className="flex items-end gap-1 rounded-md bg-slate-50 p-1.5">
            {[35, 55, 45, 80, 65, 95].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-rose-500 to-rose-300" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex items-center justify-center rounded-md bg-slate-50">
            <span className="h-10 w-10 rounded-full border-[6px] border-sky-400 border-r-amber-400 border-t-rose-400" />
          </div>
          <div className="col-span-2 flex gap-1.5">
            {line('flex-1')}
            {line('flex-1', 'bg-slate-100')}
            {line('flex-1')}
          </div>
        </div>
      );
    case 'sign':
      return (
        <div className={`${frame} relative space-y-1.5 p-2`}>
          <p className="text-[7px] font-semibold text-slate-700">Sales agreement</p>
          {line('w-full', 'bg-slate-100')}
          {line('w-5/6', 'bg-slate-100')}
          {line('w-2/3', 'bg-slate-100')}
          <span className="absolute right-2 top-7 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[6px] font-bold text-white">Signed</span>
          <svg viewBox="0 0 80 24" className="absolute bottom-2 left-3 h-7 w-20 text-slate-800">
            <path d="M2 18 C 10 2, 16 2, 14 16 S 26 22, 30 10 S 40 4, 42 14 S 55 20, 62 8 L 78 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-2 left-3 right-3 h-px bg-slate-200" />
        </div>
      );
  }
}

/** Ecosystem sketch beside the heading: a Zoho hub joined to the business areas it serves. */
function EcosystemSketch() {
  const areas: { label: string; icon: LucideIcon; pos: string; tone: string }[] = [
    { label: 'Sales', icon: Target, pos: 'left-36 top-0', tone: 'bg-emerald-50 text-emerald-700 ring-emerald-100' },
    { label: 'Operations', icon: Cog, pos: 'right-0 top-0', tone: 'bg-violet-50 text-violet-700 ring-violet-100' },
    { label: 'Support', icon: Headphones, pos: 'right-0 top-16', tone: 'bg-rose-50 text-rose-700 ring-rose-100' },
    { label: 'Finance', icon: BarChart3, pos: 'right-20 bottom-0', tone: 'bg-sky-50 text-sky-700 ring-sky-100' },
  ];
  return (
    <div aria-hidden className="relative hidden h-40 w-[26rem] shrink-0 lg:block">
      <p className={`${handwriting.className} absolute left-0 top-6 -rotate-12 text-xl leading-tight text-slate-500`}>
        Integrated
        <br />
        Zoho ecosystem
      </p>
      <svg viewBox="0 0 60 30" className="absolute left-16 top-20 h-8 w-16 text-slate-400">
        <path d="M2 4 C 14 28, 40 28, 56 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 12 L57 13 L54 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="absolute left-40 top-12 flex h-20 w-28 flex-col items-center justify-center rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(79,70,229,0.45)] ring-1 ring-slate-200">
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">Zoho</span>
        <span className="text-[10px] font-medium text-slate-500">One connected system</span>
      </span>
      {areas.map(({ label, icon: Icon, pos, tone }) => (
        <span key={label} className={`absolute ${pos} flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ring-1 ${tone}`}>
          <Icon className="h-3.5 w-3.5" />
          {label}
        </span>
      ))}
    </div>
  );
}

/** Zoho applications we implement, each with features, a product sketch and a link. */
export default function AppShowcase() {
  return (
    <section id="apps" aria-labelledby="apps-heading" className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_55%_80%_at_85%_0%,rgba(224,231,255,0.7),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="zoho-reveal flex items-center justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Zoho applications</p>
            <h2 id="apps-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              What each Zoho app can do for{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">your business</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We implement and customise each of these, and connect them so your teams share the same data.
            </p>
          </div>
          <EcosystemSketch />
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {APP_CARDS.map((app) => {
            const accent = ACCENT[app.visual];
            const logo = ZOHO_LOGOS[app.name];
            const Icon = FALLBACK_ICONS[app.name] ?? Workflow;
            const cardClass = `zoho-reveal group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br ${accent.tint} via-white to-white p-5 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,70,229,0.45)] hover:ring-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 motion-reduce:hover:translate-y-0`;
            const body = (
              <>
                <div className="flex items-start gap-3.5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_25px_-12px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/80">
                    {logo ? (
                      <Image src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
                    ) : (
                      <Icon className="h-7 w-7 text-indigo-600" strokeWidth={1.75} aria-hidden />
                    )}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">{app.name}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-slate-600">{app.tagline}</p>
                  </div>
                </div>

                <div className="mt-5 grid flex-1 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center gap-3">
                  <ul className="space-y-2.5">
                    {app.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[12.5px] leading-snug text-slate-700">
                        <span className={`mt-px flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-white ${accent.check}`}>
                          <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden className="transition duration-500 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0">
                    <AppPreview visual={app.visual} />
                  </div>
                </div>

                <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${accent.link}`}>
                  {app.slug ? `${app.name} services` : `Ask about ${app.name}`}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </>
            );
            return (
              <li key={app.name}>
                {app.slug ? (
                  <Link href={`${PAGE_PATH}/${app.slug}`} className={cardClass}>
                    {body}
                  </Link>
                ) : (
                  <SelectServiceLink service={app.service} className={cardClass}>
                    {body}
                  </SelectServiceLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
