'use client';

import tx from '@/content/text/components/HomeMegaSectionCTA.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Rocket, Sparkles } from 'lucide-react';

type Props = {
  onScheduleConsultation: () => void;
};

const contentContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.085, delayChildren: 0.06 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomeMegaSectionCTA({ onScheduleConsultation }: Props) {

  return (
    <div className="relative isolate mt-8 overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_28px_88px_-40px_rgba(30,58,138,0.5),0_12px_36px_-24px_rgba(67,56,202,0.35)] sm:mt-10 sm:rounded-[2rem]">
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-70 shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.14),inset_0_1px_0_0_rgb(255_255_255_/_0.22)]" />

      <div className="absolute inset-0 bg-[linear-gradient(132deg,#1d4ed8_0%,#3730a3_34%,#5b21b6_68%,#2563eb_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgb(255_255_255_/_0.14),transparent_55%),linear-gradient(to_bottom,rgb(15_23_42_/_0.12),transparent_38%,rgb(30_27_75_/_0.22)_100%)]" />

      <div className="absolute -right-[16%] -top-[40%] h-[min(70vw,25rem)] w-[min(70vw,25rem)] rounded-full bg-indigo-300/16 blur-2xl" />
      <div className="absolute -bottom-[36%] -left-[10%] h-[min(66vw,23rem)] w-[min(66vw,23rem)] rounded-full bg-violet-400/12 blur-2xl" />

      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent sm:inset-x-12" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 py-11 text-center sm:px-12 sm:py-14"
        variants={contentContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-32px' }}
      >
        <motion.div variants={contentItem} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-50 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-indigo-200" aria-hidden />{tx.start_the_conversation}</motion.div>

        <motion.h3
          variants={contentItem}
          className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(15,23,42,0.25)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
        >{tx.ready_to_transform_your_business}</motion.h3>

        <motion.p variants={contentItem} className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100/95 sm:text-xl">{tx.let_s_discuss_your_project}</motion.p>

        <motion.div variants={contentItem} className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-950 shadow-[0_14px_38px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/90 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-950 hover:shadow-[0_20px_48px_-18px_rgba(49,46,129,0.55)] motion-safe:active:scale-[0.98] sm:text-lg sm:py-4"
          >
            <Rocket className="h-5 w-5 shrink-0 text-indigo-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]" aria-hidden />{tx.start_your_project}<ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>

          <motion.button
            type="button"
            onClick={onScheduleConsultation}
            whileHover={{ scale: 1.02, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }
            }
            whileTap={{ scale: 0.98 }
            }
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/[0.07] px-8 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.12)] backdrop-blur-md transition-colors duration-300 hover:border-white/45 hover:bg-white/[0.14] sm:text-lg sm:py-4"
          >
            <Calendar className="h-5 w-5 shrink-0 text-indigo-100 transition-transform duration-300 group-hover:scale-105" aria-hidden />{tx.schedule_consultation}</motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
