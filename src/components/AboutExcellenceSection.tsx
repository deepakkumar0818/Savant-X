'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Cpu,
  CircuitBoard,
  Eye,
  Handshake,
  Puzzle,
  Smartphone,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const CAPABILITIES = [
  { label: 'ERP & Manufacturing', Icon: Building2 },
  { label: 'Zoho integrations', Icon: Puzzle },
  { label: 'Web & GenAI', Icon: Sparkles },
  { label: 'IoT & Firmware', Icon: Cpu },
  { label: 'PCB & Product', Icon: CircuitBoard },
  { label: 'Mobile apps', Icon: Smartphone },
] as const;

const FEATURES = [
  {
    title: 'Scalable Solutions',
    description:
      'Built to handle growing business demands with secure, future-ready technology and seamless performance.',
    Icon: TrendingUp,
    iconWrap: 'bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-600/25',
    row: 'border-blue-100/90 bg-gradient-to-r from-blue-50/90 via-white to-indigo-50/50',
  },
  {
    title: 'Expert Development Team',
    description:
      'Skilled professionals delivering high-quality software and hardware solutions with industry best practices.',
    Icon: UsersRound,
    iconWrap: 'bg-gradient-to-br from-indigo-600 to-violet-600 shadow-indigo-600/25',
    row: 'border-indigo-100/90 bg-gradient-to-r from-indigo-50/90 via-white to-violet-50/50',
  },
  {
    title: 'Reliable & Transparent Service',
    description:
      'Clear communication, timely delivery, and dependable support to ensure smooth project execution.',
    Icon: Handshake,
    iconWrap: 'bg-gradient-to-br from-violet-600 to-purple-600 shadow-violet-600/25',
    row: 'border-violet-100/90 bg-gradient-to-r from-violet-50/90 via-white to-purple-50/50',
  },
] as const;

const METRICS = [
  { end: 100, suffix: '%', label: 'In-House Team', gradient: 'from-blue-600 to-indigo-600' },
  { end: 5, suffix: '+', label: 'Years Experience', gradient: 'from-indigo-600 to-violet-600' },
  { end: 200, suffix: '+', label: 'Projects Delivered', gradient: 'from-violet-600 to-purple-600' },
] as const;

export default function AboutExcellenceSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl motion-reduce:hidden" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl motion-reduce:hidden" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7 sm:space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-indigo-800 shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 motion-safe:animate-pulse" aria-hidden />
              Trusted Technology Partner
            </p>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.35rem]">
              Building Digital{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                We craft exceptional digital experiences and hardware solutions—from web and mobile to{' '}
                <strong className="font-semibold text-slate-800">ERP manufacturing</strong>, CRM, Zoho
                integrations, IoT, firmware, and PCB design.
              </p>
              <p>
                Our strength is understanding how your teams work first—then shipping systems that fit operations,
                not the other way around.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {CAPABILITIES.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/95 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-indigo-200 motion-safe:hover:shadow-[0_10px_28px_-10px_rgba(79,70,229,0.35)]"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-indigo-500" aria-hidden />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 motion-safe:transition-all motion-safe:duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 motion-safe:active:scale-[0.98]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 motion-safe:transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300/95 bg-white/90 px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 hover:border-indigo-400 hover:text-indigo-800 hover:shadow-md motion-safe:active:scale-[0.98]"
              >
                <Eye className="h-[1.15rem] w-[1.15rem] opacity-80" aria-hidden />
                View Our Work
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3 sm:gap-4">
              {METRICS.map(({ end, suffix, label, gradient }) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_16px_50px_-28px_rgba(30,58,138,0.35)] backdrop-blur-md motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_26px_60px_-24px_rgba(79,70,229,0.35)]"
                >
                  <div
                    className={`bg-gradient-to-r ${gradient} bg-clip-text text-3xl font-bold tabular-nums text-transparent motion-safe:transition-transform group-hover:-translate-y-0.5`}
                  >
                    <AnimatedCounter end={end} suffix={suffix} duration={2500} />
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative motion-safe:animate-hero-card-float-soft lg:justify-self-end">
            <div
              className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-70 blur-xl motion-reduce:hidden"
              style={{
                background:
                  'linear-gradient(120deg, rgba(59,130,246,0.3), rgba(99,102,241,0.22), rgba(147,51,234,0.2))',
              }}
            />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_28px_80px_-32px_rgba(30,64,175,0.4)] ring-1 ring-slate-200/70">
              <div className="flex items-center gap-3 border-b border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-slate-50/90 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/95" />
                </div>
                <span className="flex-1 text-center font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                  savantx-trust
                </span>
                <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
                  Verified
                </span>
              </div>

              <div className="space-y-3 p-4 sm:p-5">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Why Choose SavantX?</h3>
                  <p className="mt-1 text-sm text-slate-600">Proven expertise across software and hardware</p>
                </div>

                {FEATURES.map(({ title, description, Icon, iconWrap, row }) => (
                  <div
                    key={title}
                    className={`group flex gap-3 rounded-xl border p-3.5 motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md ${row}`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white motion-safe:transition-transform group-hover:scale-105 ${iconWrap}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900">{title}</h4>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-3 border-t border-slate-200/90 pt-4">
                  <div className="rounded-xl border border-blue-100/90 bg-blue-50/60 px-3 py-3 text-center">
                    <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold tabular-nums text-transparent">
                      <AnimatedCounter end={98} suffix="%" duration={2200} />
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      Client satisfaction
                    </p>
                  </div>
                  <div className="rounded-xl border border-violet-100/90 bg-violet-50/60 px-3 py-3 text-center">
                    <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-2xl font-bold tabular-nums text-transparent">
                      <AnimatedCounter end={24} suffix="/7" duration={1600} />
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      Expert support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
