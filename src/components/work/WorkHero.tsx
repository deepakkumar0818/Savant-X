import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import { ArrowRight, Box, CalendarDays, ChevronLeft, ChevronRight, FolderOpen, MapPin, Star, Users, type LucideIcon } from 'lucide-react';
import { COMPANY, COMPANY_METRICS, OFFICES } from '@/lib/company';

const handwriting = Caveat({ subsets: ['latin'], weight: ['500'], display: 'swap' });

const yearsInBusiness = new Date().getFullYear() - COMPANY.foundingYear;

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Users, value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
  { icon: Box, value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: `${COMPANY_METRICS[1].label} Delivered` },
  { icon: MapPin, value: String(OFFICES.length), label: 'Offices in India' },
  { icon: Star, value: `${yearsInBusiness}+`, label: 'Years of Experience' },
];

/** Work page hero: headline and calls to action beside an illustration of the services we deliver. */
export default function WorkHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8faff_0%,#eef2ff_55%,#e0e7ff_100%)] px-6 sm:px-8 lg:px-12">
      <div aria-hidden className="absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-indigo-200/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl pb-14 pt-14 sm:pt-16 lg:pb-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur">
              <ChevronLeft className="h-3 w-3" aria-hidden />
              Our work
              <ChevronRight className="h-3 w-3" aria-hidden />
            </p>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-[3.3rem] xl:text-[3.9rem]">
              We build solutions
              <br />
              that run{' '}
              <span className="relative inline-block bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                businesses
                <svg aria-hidden viewBox="0 0 300 12" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-violet-400">
                  <path d="M3 9 C 80 2, 220 2, 297 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From custom manufacturing ERPs to healthcare platforms, we combine strategy, design and engineering to deliver real-world solutions
              that people actually use.
            </p>

            <div className="relative mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110"
              >
                <CalendarDays className="h-4 w-4" aria-hidden />
                Discuss your idea
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-200"
              >
                <FolderOpen className="h-4 w-4 text-slate-500" aria-hidden />
                View our projects
              </a>
            </div>
            <p aria-hidden className={`${handwriting.className} mt-2 hidden items-start gap-1 pl-20 text-xl text-indigo-600 sm:flex`}>
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M8 4 C 4 16, 10 30, 30 32" />
                <path d="M24 27 L 31 32 L 25 37" />
              </svg>
              <span className="mt-4">Schedule a free call now</span>
            </p>
          </div>

          <div className="relative -mx-6 sm:mx-0 lg:-mr-10">
            <Image
              src="/images/work/work-hero-illustration.webp"
              alt="Illustration of a SavantX project dashboard surrounded by our services: ERP solutions, custom software, Zoho integrations, IoT and hardware, and AI solutions"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_95%)]"
            />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-y-6 rounded-3xl bg-white/80 p-6 shadow-[0_24px_60px_-35px_rgba(79,70,229,0.45)] ring-1 ring-white backdrop-blur sm:p-7 lg:mt-12 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
          {STATS.map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-center gap-4 lg:justify-center lg:px-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span>
                <span className="block text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{value}</span>
                <span className="block text-sm text-slate-500">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
