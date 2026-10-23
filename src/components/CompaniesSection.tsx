'use client';

import tx from '@/content/text/components/CompaniesSection.json';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInView } from '@/lib/useInView';
import { usePageVisible } from '@/lib/usePageVisible';

const companyNames = [
  'Legal Palz',
  "St. Paul's Sr. Sec. School",
  'Sansani Express',
  'RV Logistics',
  'JDN Technologies',
  'Anoop Automations',
  'Fleet Logic',
  'The Canophilla',
];

const SLOT_COUNT = 5;

export default function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const pageVisible = usePageVisible();
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!inView || !pageVisible) return;

    let revealTimeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      revealTimeout = setTimeout(() => {
        setOffset((o) => (o + 1) % companyNames.length);
        setIsTransitioning(false);
      }, 320);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(revealTimeout);
    };
  }, [inView, pageVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-50/90 px-6 py-20 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32 [content-visibility:auto] [contain-intrinsic-size:auto_520px]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-200/20 blur-2xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/20 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-6 inline-flex animate-scale-in items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
            <svg className="h-4 w-4 shrink-0 text-blue-600 motion-safe:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>{tx.trusted_partners}</div>
          <h2 className="animate-fade-in-up max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">{tx.we_design_build_and_ship}<span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.world_class_digital_products}</span>
            <span className="mt-2 block text-slate-800">{tx.for_forward_thinking_brands}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {Array.from({ length: SLOT_COUNT }, (_, index) => {
            const companyIndex = (offset + index) % companyNames.length;
            const name = companyNames[companyIndex];

            return (
              <div
                key={`slot-${index}`}
                className="group flex min-h-[6.5rem] flex-col justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_44px_-28px_rgba(15,23,42,0.2)] ring-1 ring-white/80 backdrop-blur-sm transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_22px_50px_-28px_rgba(59,130,246,0.25)] sm:min-h-[7rem]"
              >
                <div
                  className={`text-center motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out motion-reduce:transition-none ${
                    isTransitioning
                      ? 'translate-y-1 opacity-0 motion-safe:duration-[280ms]'
                      : 'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: isTransitioning ? '0ms' : `${index * 45}ms` }}
                >
                  <p className="text-pretty text-sm font-semibold leading-snug text-slate-900 sm:text-base lg:text-sm xl:text-base">
                    {name}
                  </p>
                  <div
                    className={`mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 motion-safe:transition-all motion-safe:duration-500 motion-reduce:transition-none ${
                      isTransitioning ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="delay-600 relative z-20 mt-14 text-center animate-fade-in-up sm:mt-16">
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600">{tx.join_these_industry_leaders_in}</p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 ring-2 ring-white/30 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl motion-safe:hover:scale-[1.02]"
          >{tx.start_your_project}<svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
