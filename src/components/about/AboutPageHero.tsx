import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Code2, Layers, Play, Users } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import AboutHeroBackdrop from '@/components/about/AboutHeroBackdrop';
import { COMPANY_METRICS } from '@/lib/company';

const PARTNER_BRANDS = [
  'Legal Palz',
  "St. Paul's School",
  'Sansani Express',
  'RV Logistics',
  'JDN Technologies',
] as const;

const STATS = [
  { icon: Layers, end: COMPANY_METRICS[1].value, suffix: COMPANY_METRICS[1].suffix, label: COMPANY_METRICS[1].label, note: 'Delivered across industries' },
  { icon: Code2, end: 25, suffix: '+', label: 'Technologies mastered', note: 'Modern and scalable solutions' },
  { icon: BarChart3, end: 75, suffix: '%', label: 'Delivery efficiency', note: 'With proven processes' },
];

const floatingCard =
  'absolute z-10 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_20px_45px_-18px_rgba(30,58,138,0.35)] ring-1 ring-slate-200/70 backdrop-blur';

function PartnerStrip() {
  return (
    <div className="mt-14 border-t border-slate-200/70 pt-8 sm:mt-16 sm:pt-10">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted by industry leaders</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-0">
        {PARTNER_BRANDS.map((name, i) => (
          <li
            key={name}
            className={`inline-flex items-center gap-2.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700 sm:px-8 ${
              i > 0 ? 'sm:border-l sm:border-slate-200' : ''
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-600 shadow-sm ring-1 ring-slate-200/80">
              {name.charAt(0)}
            </span>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPageHero() {

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
      <AboutHeroBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className="hero-enter">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
              About SavantX
              <span aria-hidden className="h-0.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
            </p>

            <h1 className="mt-5 max-w-xl text-[2.4rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
              Building your
              <span className="block font-serif font-normal italic text-slate-800">digital excellence</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">at every layer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[1.075rem]">
              We craft exceptional digital experiences that transform businesses and drive growth — from web and mobile solutions to IoT, firmware
              and AI-powered systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110 motion-safe:active:scale-[0.98]"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-900 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md motion-safe:active:scale-[0.98]"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                View Our Work
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, end, suffix, label, note }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_14px_35px_-22px_rgba(30,58,138,0.35)] ring-1 ring-slate-200/80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-2xl font-bold leading-none tracking-tight text-slate-900">
                      <AnimatedCounter end={end} suffix={suffix} duration={2000} />
                    </p>
                    <p className="mt-1.5 text-[13px] font-medium text-slate-700">{label}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="hero-enter relative mx-auto w-full max-w-xl [--hero-delay:0.08s] lg:max-w-none">
            <div aria-hidden className="absolute -left-8 -top-8 h-2/3 w-2/3 rounded-full bg-indigo-200/50 blur-3xl" />
            <div aria-hidden className="absolute -right-4 -top-6 hidden h-24 w-24 bg-[radial-gradient(circle,#c7d2fe_1.5px,transparent_1.5px)] [background-size:14px_14px] sm:block" />

            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-35px_rgba(30,58,138,0.55)] ring-1 ring-slate-900/5">
              <Image
                src="/images/about/savantx-team-collaboration.jpg"
                alt="SavantX team members working together around laptops in the office"
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className={`${floatingCard} -left-3 top-6 sm:-left-8 sm:top-8`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">Cross-functional teams</span>
                <span className="block text-xs text-slate-500">Design · Develop · Deliver</span>
              </span>
            </div>

            <div className={`${floatingCard} -bottom-6 -right-2 sm:-right-6 sm:bottom-10`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BarChart3 className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">Turning ideas into impact</span>
                <span className="block text-xs text-slate-500">With technology and teamwork</span>
              </span>
            </div>
          </div>
        </div>

        <PartnerStrip />
      </div>
    </section>
  );
}
