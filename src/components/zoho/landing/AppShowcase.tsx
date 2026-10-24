import tx from '@/content/text/components/zoho/landing/AppShowcase.json';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PenLine, Workflow, type LucideIcon } from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { APP_CARDS, ZOHO_LOGOS } from './data';

const PAGE_PATH = '/expertise/zoho-integrations';

const FALLBACK_ICONS: Record<string, LucideIcon> = { 'Zoho Flow': Workflow, 'Zoho Sign': PenLine };

const cardClass =
  'zoho-reveal group flex h-full items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(79,70,229,0.45)] hover:ring-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 motion-reduce:hover:translate-y-0';

/** Zoho applications we implement: logo, name and what it does, each linking to its page or the enquiry form. */
export default function AppShowcase() {
  return (
    <section id="apps" aria-labelledby="apps-heading" className="relative scroll-mt-24 px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="zoho-reveal max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
            {tx.zoho_applications}
          </p>
          <h2 id="apps-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            {tx.what_each_zoho_app_can}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.your_business}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{tx.we_implement_and_customise_each}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APP_CARDS.map((app) => {
            const logo = ZOHO_LOGOS[app.name];
            const Icon = FALLBACK_ICONS[app.name] ?? Workflow;
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200/80">
                  {logo ? (
                    <Image src={logo} alt="" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
                  ) : (
                    <Icon className="h-6 w-6 text-indigo-600" strokeWidth={1.75} aria-hidden />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-slate-900">{app.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-600" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-slate-500">{app.tagline}</span>
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
