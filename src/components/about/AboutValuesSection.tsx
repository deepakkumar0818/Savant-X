'use client';

import tx from '@/content/text/components/about/AboutValuesSection.json';
import Image from 'next/image';
import { ArrowRight, Award, Handshake, Lightbulb, Target, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** 3D illustration in /public/images/about/values. */
  art: string;
};

const VALUES: Value[] = [
  {
    title: tx.innovation_first,
    description:
      tx.we_embrace_cutting_edge_technologies,
    icon: Lightbulb,
    art: '/images/about/values/innovation.webp',
  },
  {
    title: tx.client_success,
    description:
      tx.your_success_is_our_success,
    icon: Target,
    art: '/images/about/values/client-success.webp',
  },
  {
    title: tx.quality_excellence,
    description:
      tx.we_maintain_the_highest_standards,
    icon: Award,
    art: '/images/about/values/quality.webp',
  },
  {
    title: tx.collaborative_partnership,
    description:
      tx.we_work_closely_with_our,
    icon: Handshake,
    art: '/images/about/values/partnership.webp',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ValueCard({ value, index }: { value: Value; index: number }) {
  const Icon = value.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="group relative grid h-full grid-cols-1 items-center gap-5 overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(79,70,229,0.4)] ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(79,70,229,0.55)] hover:ring-indigo-200 motion-reduce:hover:translate-y-0 sm:grid-cols-[minmax(0,1fr)_10rem] sm:p-7 lg:grid-cols-[minmax(0,1fr)_11.5rem]"
    >
      <div className="relative">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
            <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-indigo-300" aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-0.5 text-xl font-bold tracking-tight text-slate-900">{value.title}</h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:pl-16">{value.description}</p>
        <span
          aria-hidden
          className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white sm:ml-16"
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div
        aria-hidden
        className="relative order-first flex h-40 items-center justify-center rounded-2xl sm:order-none sm:aspect-square sm:h-auto bg-[radial-gradient(circle_at_50%_40%,#eef2ff_0%,#f8fafc_70%)] ring-1 ring-slate-100"
      >
        <span className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-violet-100/70 blur-xl" />
        <Image
          src={value.art}
          alt=""
          width={480}
          height={480}
          sizes="(min-width: 640px) 11.5rem, 8rem"
          className="relative h-32 w-32 object-contain sm:h-[78%] sm:w-[78%] drop-shadow-[0_12px_20px_rgba(79,70,229,0.3)] transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
      </div>
    </motion.article>
  );
}

export default function AboutValuesSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#f8f9ff_0%,#ffffff_100%)] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgb(238_242_255_/_0.6),transparent_65%)]" />
      </div>

      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-4 inline-flex items-center rounded-full border border-indigo-200/90 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">{tx.our_values}</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">{tx.the_principles_that_guide}<span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.everything_we_do}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{tx.these_values_shape_our_decisions}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {VALUES.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
