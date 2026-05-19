'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import WorkHeroIsometric from '@/components/work/WorkHeroIsometric';

export default function WorkPageHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: 'radial-gradient(rgb(148 163 184 / 0.35) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-indigo-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(255_255_255_/_0.9)_0%,transparent_55%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/[0.78] shadow-[0_28px_72px_-36px_rgba(59,130,246,0.22)] ring-1 ring-white/90 backdrop-blur-xl sm:rounded-3xl lg:rounded-[2rem]">
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/35 to-indigo-50/50">
            <div className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" aria-hidden />

            <div className="relative grid items-center gap-8 px-6 py-8 sm:gap-10 sm:px-10 sm:py-10 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-10 xl:px-14">
              {/* Left — copy */}
              <div className="relative z-10">
                <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 shadow-sm ring-1 ring-indigo-100/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgb(59_130_246_/_0.2)]" aria-hidden />
                  Our portfolio
                </p>

                <p className="mb-3 text-sm font-medium text-slate-600 sm:text-base">
                  <span className="mr-1.5 text-indigo-500" aria-hidden>
                    →
                  </span>
                  The best partner for shipping digital products
                </p>

                <h1 className="text-[2.15rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.15rem] xl:text-[3.45rem]">
                  Keep your{' '}
                  <span className="relative inline-block align-middle">
                    <Sparkles
                      className="absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 text-indigo-500 sm:h-5 sm:w-5 motion-safe:animate-pulse"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="inline-block rounded-full border border-indigo-200/90 bg-white/70 px-3 py-0.5 shadow-sm backdrop-blur-md ring-1 ring-indigo-100/80 sm:px-4 sm:py-1">
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        work
                      </span>
                    </span>
                  </span>{' '}
                  organized
                  <span
                    className="ml-1.5 inline-block h-2.5 w-2.5 translate-y-0.5 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600 sm:h-3 sm:w-3"
                    aria-hidden
                  />
                </h1>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
                  Convenient, secure delivery of every project in one place — from concept through launch.
                </p>

                <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-5">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]"
                  >
                    Get started
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>

                  <Link
                    href="#showcase"
                    className="group relative inline-flex items-center justify-center px-4 py-3.5 text-base font-semibold text-slate-800 transition-colors hover:text-indigo-700"
                  >
                    <span
                      className="pointer-events-none absolute -left-2 top-1/2 h-10 w-2.5 -translate-y-1/2 rounded-l-full border-l-2 border-t-2 border-b-2 border-indigo-300/90 transition-colors group-hover:border-indigo-500"
                      aria-hidden
                    />
                    <span
                      className="pointer-events-none absolute -right-2 top-1/2 h-10 w-2.5 -translate-y-1/2 rounded-r-full border-r-2 border-t-2 border-b-2 border-indigo-300/90 transition-colors group-hover:border-indigo-500"
                      aria-hidden
                    />
                    View projects
                  </Link>
                </div>
              </div>

              {/* Right — fixed-height illustration (no flex stretch) */}
              <div className="relative h-[280px] sm:h-[320px] lg:h-[340px] xl:h-[360px]">
                <WorkHeroIsometric />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
