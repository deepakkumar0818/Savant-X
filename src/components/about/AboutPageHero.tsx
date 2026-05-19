'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import AboutHeroBackdrop from '@/components/about/AboutHeroBackdrop';

const PARTNER_BRANDS = [
  'Legal Palz',
  "St. Paul's School",
  'Sansani Express',
  'RV Logistics',
  'JDN Technologies',
] as const;

const TEAM_AVATARS = ['AK', 'JL', 'PM', 'EC', 'DN', 'KT', 'LB'];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardSurface =
  'rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_40px_-18px_rgba(30,58,138,0.14)] ring-1 ring-slate-100/90';

function StatCard({
  value,
  label,
  className = '',
  children,
}: {
  value: React.ReactNode;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      className={`flex min-h-[7.5rem] flex-col justify-between p-5 sm:min-h-[8rem] sm:p-6 ${cardSurface} ${className}`}
    >
      <div>
        <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-[2.35rem] sm:leading-none">{value}</p>
        <p className="mt-1.5 text-sm leading-snug text-slate-500">{label}</p>
      </div>
      {children}
    </motion.div>
  );
}

function PartnerStrip() {
  return (
    <div className="mt-12 border-t border-slate-100 pt-8 sm:mt-14 sm:pt-10">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        Trusted by industry leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
        {PARTNER_BRANDS.map((name) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-50 text-[10px] font-bold text-slate-500 ring-1 ring-slate-200/80">
              {name.charAt(0)}
            </span>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutPageHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-14">
      <AboutHeroBackdrop />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left — visual grid */}
          <motion.div variants={fadeUp} className="order-2 grid grid-cols-2 gap-3.5 sm:gap-4 lg:order-1">
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.2 }}
              className={`group relative min-h-[11.5rem] overflow-hidden sm:min-h-[13rem] ${cardSurface} !p-0`}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="SavantX team collaborating on digital products"
                fill
                className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 50vw, 380px"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
              <p className="absolute bottom-3.5 left-3.5 right-3.5 text-[13px] font-medium leading-snug text-white/95 sm:bottom-4 sm:left-4 sm:right-4">
                Cross-functional teams, shipped with discipline
              </p>
            </motion.div>

            <div className="mt-6 sm:mt-7">
              <StatCard
                value={<AnimatedCounter end={75} suffix="%" duration={2200} />}
                label="Delivery efficiency with SavantX"
              />
            </div>

            <StatCard
              value={<AnimatedCounter end={9} suffix="+" duration={1800} />}
              label="Projects delivered"
              className="-mt-1 sm:-mt-2"
            />

            <div className="mt-4 sm:mt-5">
              <StatCard
                value={<AnimatedCounter end={25} suffix="+" duration={2000} />}
                label="Technologies mastered"
                className="border-indigo-100/80 bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/30"
              >
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <div className="flex -space-x-2">
                    {TEAM_AVATARS.map((initials, i) => (
                      <span
                        key={initials}
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white shadow-sm ${
                          i % 3 === 0
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
                            : i % 3 === 1
                              ? 'bg-gradient-to-br from-indigo-500 to-violet-600'
                              : 'bg-slate-400'
                        }`}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">Expert delivery network</span>
                </div>
              </StatCard>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div variants={fadeUp} className="order-1 lg:order-2 lg:pl-2 xl:pl-6">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100/80">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" strokeWidth={2} aria-hidden />
              Engineering-led delivery
            </p>

            <h1 className="max-w-xl text-[2.15rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.1rem] xl:text-[3.35rem]">
              Building your{' '}
              <span className="font-serif font-normal italic text-slate-800">digital excellence</span>
              <span className="mt-1 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text font-sans font-bold not-italic text-transparent">
                at every layer.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-[1.05rem] sm:leading-relaxed">
              We craft exceptional digital experiences that transform businesses and drive growth—from web and mobile
              to IoT, firmware, and AI-powered systems.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-800 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md motion-safe:active:scale-[0.98]"
              >
                <Play className="h-4 w-4 fill-slate-600 text-slate-600" aria-hidden />
                View our work
              </Link>
            </div>
          </motion.div>
        </div>

        <PartnerStrip />
      </motion.div>
    </section>
  );
}
