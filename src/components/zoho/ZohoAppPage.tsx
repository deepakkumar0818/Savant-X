'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Layers,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import Footer from '@/components/Footer';
import ZohoStrategyFormModal, { type FormAnchor } from '@/components/zoho/ZohoStrategyFormModal';
import type { ZohoApp } from '@/data/zohoApps';
import { zohoApps } from '@/data/zohoApps';
import { getZohoAppTheme } from '@/data/zohoAppThemes';

const featureIcons = [Layers, Workflow, Zap, Target, Sparkles, CircleDot];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

type Props = {
  app: ZohoApp;
};

export default function ZohoAppPage({ app }: Props) {
  const theme = getZohoAppTheme(app.slug);
  const c = theme.colors;
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const hasAutoOpened = useRef(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formAnchor, setFormAnchor] = useState<FormAnchor | null>(null);
  const [modalPlacement, setModalPlacement] = useState<'anchor' | 'center'>('anchor');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = zohoApps.filter((a) => a.slug !== app.slug).slice(0, 4);

  const setAnchorFromElement = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    setFormAnchor({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    });
  };

  const openForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    hasAutoOpened.current = true;
    setModalPlacement('anchor');
    setAnchorFromElement(e.currentTarget);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormAnchor(null);
  };

  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(() => {
      if (cancelled || hasAutoOpened.current) return;
      hasAutoOpened.current = true;
      setModalPlacement('center');
      setFormAnchor(null);
      setIsFormOpen(true);
    }, 10_000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [app.slug]);

  const themeVars = {
    '--za-primary': c.primary,
    '--za-primary-dark': c.primaryDark,
    '--za-secondary': c.secondary,
    '--za-soft': c.soft,
    '--za-soft-border': c.softBorder,
    '--za-glow': c.glow,
    '--za-from': c.gradientFrom,
    '--za-via': c.gradientVia,
    '--za-to': c.gradientTo,
    '--za-badge': c.badgeText,
    '--za-icon-from': c.iconFrom,
    '--za-icon-to': c.iconTo,
  } as React.CSSProperties;

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 antialiased"
      style={themeVars}
    >
      {/* Product-themed hero — inspired by Zoho product marketing pages */}
      <section
        ref={heroRef}
        className="relative z-10 overflow-hidden px-4 pb-12 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-12 lg:pb-16 lg:pt-10"
        style={{
          background: `linear-gradient(165deg, #ffffff 0%, ${c.soft} 42%, #ffffff 100%)`,
        }}
      >
        {/* Soft brand orbs */}
        <div
          className="pointer-events-none absolute -right-[12%] -top-[20%] h-[28rem] w-[28rem] rounded-full blur-[100px] opacity-70"
          style={{ background: c.glow }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-[18%] -left-[8%] h-[22rem] w-[22rem] rounded-full blur-[90px] opacity-50"
          style={{ background: `color-mix(in srgb, ${c.secondary} 22%, transparent)` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(to right, color-mix(in srgb, ${c.primary} 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, ${c.primary} 6%, transparent) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:opacity-80" style={{ color: 'inherit' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
              </li>
              <li>
                <Link
                  href="/expertise/zoho-integrations/"
                  className="transition-colors hover:opacity-80"
                >
                  Zoho Integrations
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
              </li>
              <li className="font-medium text-slate-800">{app.name}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
            <motion.div
              variants={stagger}
              initial={reduced ? false : 'hidden'}
              whileInView={reduced ? undefined : 'show'}
              viewport={{ once: true, amount: 0.25 }}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/90">
                  <img src={app.iconUrl} alt="" className="h-full w-full object-cover" />
                </div>
                <span
                  className="inline-flex rounded-full border bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] shadow-sm backdrop-blur-md"
                  style={{
                    borderColor: c.softBorder,
                    color: c.badgeText,
                    boxShadow: `0 0 0 1px color-mix(in srgb, ${c.primary} 12%, transparent)`,
                  }}
                >
                  {app.category}
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: c.badgeText }}
              >
                Inspired by {app.name} · Implemented by SavantX
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-[2rem] font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.08] lg:text-[3.15rem]"
              >
                {theme.officialHeadline}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
              >
                {theme.officialSubhead}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start"
              >
                {theme.trustPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                    style={{ borderColor: c.softBorder }}
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all motion-safe:hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientVia}, ${c.gradientTo})`,
                    boxShadow: `0 12px 28px -10px ${c.glow}`,
                  }}
                >
                  {theme.ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50"
                  style={{ borderColor: c.softBorder }}
                >
                  Explore capabilities
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-4 text-xs text-slate-500">
                Official product:{' '}
                <a
                  href={theme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline"
                  style={{ color: c.badgeText }}
                >
                  zoho.com/{app.shortName.toLowerCase()}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </motion.p>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${c.glow}, color-mix(in srgb, ${c.secondary} 18%, transparent))`,
                }}
              />
              <div
                className="relative overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_28px_70px_-32px_rgba(15,23,42,0.35)] ring-1 ring-white/95"
                style={{ borderColor: c.softBorder }}
              >
                {/* Product-colored top bar like Zoho product chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{
                    background: `linear-gradient(90deg, ${c.gradientFrom}, ${c.gradientVia})`,
                  }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="ml-2 text-[11px] font-semibold tracking-wide text-white/95">
                    {app.name}
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={app.heroImage}
                    alt={app.heroImageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-md">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Official Zoho Development Partner
                    </p>
                    <p className="text-xs text-slate-500">
                      Setup · Customization · Automation · Support
                    </p>
                  </div>
                  <div
                    className="hidden h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 ring-1 sm:flex"
                    style={{ boxShadow: `inset 0 0 0 1px ${c.softBorder}` }}
                  >
                    <img src={app.iconUrl} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats strip — Zoho product-site style */}
          <div
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {theme.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-white/90 px-5 py-5 text-center shadow-sm backdrop-blur-md sm:text-left"
                style={{ borderColor: c.softBorder }}
              >
                <p
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <motion.div
            variants={stagger}
            initial={reduced ? false : 'hidden'}
            whileInView={reduced ? undefined : 'show'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: c.badgeText }}
            >
              Overview
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Why businesses choose{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {app.name}
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-slate-600">
              {app.overview}
            </motion.p>
            <div className="mt-6 space-y-4">
              {app.longIntro.map((para) => (
                <motion.p
                  key={para.slice(0, 40)}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-slate-600"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-3xl border bg-white shadow-[0_22px_55px_-28px_rgba(15,23,42,0.2)]"
            style={{ borderColor: c.softBorder }}
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={app.secondaryImage}
                alt={app.secondaryImageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6" style={{ background: c.soft }}>
              <p className="text-sm font-semibold text-slate-900">Who {app.shortName} is for</p>
              <ul className="mt-4 space-y-3">
                {app.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.primary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12" style={{ background: c.soft }}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: c.badgeText }}
            >
              Common challenges
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Problems {app.shortName} solves
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              If these sound familiar, a properly implemented {app.name} system can change how your team
              works.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {app.challenges.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-white/80 bg-white/95 p-6 shadow-sm backdrop-blur-md motion-safe:transition-all motion-safe:hover:-translate-y-1"
                style={{
                  boxShadow: `0 14px 36px -24px ${c.glow}`,
                }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientVia})`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{challenge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: c.badgeText }}
            >
              {theme.capabilitiesEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What {app.shortName} unlocks for your team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Core capabilities we configure, customize, and connect as part of a complete {app.name}{' '}
              rollout — aligned with how Zoho presents the product.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border bg-white/95 p-6 shadow-sm backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-[3px] motion-safe:transition-all motion-safe:hover:-translate-y-1"
                  style={
                    {
                      borderColor: c.softBorder,
                      ['--tw-gradient-from' as string]: c.gradientFrom,
                      boxShadow: `0 18px 40px -28px ${c.glow}`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${c.gradientFrom}, ${c.gradientTo})`,
                    }}
                  />
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg motion-safe:transition-transform group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${c.iconFrom}, ${c.iconTo})`,
                      boxShadow: `0 10px 24px -8px ${c.glow}`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases + integrations */}
      <section
        className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
        style={{
          background: `linear-gradient(180deg, #ffffff 0%, ${c.soft} 55%, #ffffff 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: c.badgeText }}
            >
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for real business scenarios
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {app.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border bg-white p-7 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.18)]"
                style={{ borderColor: c.softBorder }}
              >
                <div
                  className="mb-3 h-1 w-12 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${c.gradientFrom}, ${c.gradientTo})`,
                  }}
                />
                <h3 className="text-lg font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-14 rounded-3xl border bg-white/95 p-8 shadow-sm sm:p-10"
            style={{ borderColor: c.softBorder }}
          >
            <h3 className="text-xl font-semibold text-slate-900">
              How {app.name} connects in your Zoho stack
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Like on Zoho&apos;s own product pages, {app.shortName} is strongest when it shares data across
              the ecosystem — we wire those connections for you.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {app.integrations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm text-slate-700"
                  style={{ borderColor: c.softBorder, background: c.soft }}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.primary }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do + process */}
      <section id="what-we-do" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: c.badgeText }}
              >
                SavantX expertise
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                How we implement {app.name} for you
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We don&apos;t just turn the app on. We design it around your process, automate the busywork,
                train your team, and stay available when you need changes.
              </p>
              <ul className="mt-8 space-y-3">
                {app.whatWeDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                    style={{ borderColor: c.softBorder }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: c.secondary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">Our implementation process</h3>
              <p className="mt-2 text-sm text-slate-600">
                A clear path from discovery to adoption — so {app.shortName} becomes daily habit, not
                shelfware.
              </p>
              <ol className="mt-8 space-y-4">
                {app.processSteps.map((step, i) => (
                  <li
                    key={step.title}
                    className="relative flex gap-4 rounded-2xl border bg-white p-5"
                    style={{ borderColor: c.softBorder }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientVia})`,
                        boxShadow: `0 8px 20px -8px ${c.glow}`,
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                className="mt-8 rounded-2xl border p-6"
                style={{ borderColor: c.softBorder, background: c.soft }}
              >
                <p className="text-sm font-semibold text-slate-900">Results you can expect</p>
                <ul className="mt-4 space-y-2.5">
                  {app.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-sm text-slate-700">
                      <span style={{ color: c.primary }}>→</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openForm}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                    boxShadow: `0 12px 28px -10px ${c.glow}`,
                  }}
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-center text-xs text-slate-500">
                  No commitment · 30-minute Zoho system audit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12" style={{ background: c.soft }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: c.badgeText }}
            >
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions about {app.name}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Straight answers about implementation, customization, and how SavantX helps.
            </p>
          </div>
          <div className="mt-10 space-y-3">
            {app.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                  style={{ borderColor: c.softBorder }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                      style={{ color: c.primary }}
                    />
                  </button>
                  {open && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product-themed CTA */}
      <section className="px-4 py-14 sm:px-8 lg:px-12">
        <div
          className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_28px_88px_-40px_rgba(15,23,42,0.45)] sm:rounded-[2rem]"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(132deg, ${c.gradientFrom} 0%, ${c.gradientVia} 45%, ${c.gradientTo} 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgb(255_255_255_/_0.16),transparent_55%),linear-gradient(to_bottom,rgb(15_23_42_/_0.1),transparent_40%,rgb(15_23_42_/_0.22)_100%)]" />
          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Free Zoho strategy call
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to put {app.name} to work the right way?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Tell us where you are today — new setup, messy configuration, or custom app needs — and
              we&apos;ll map the fastest path forward on a free 30-minute call.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openForm}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold shadow-lg transition-colors hover:bg-slate-50"
                style={{ color: c.primaryDark }}
              >
                {theme.ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                href="/expertise/zoho-integrations/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
              >
                View all Zoho apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 pb-20 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Explore more Zoho apps
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Each page is styled after that product&apos;s official Zoho experience.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((relatedApp) => {
              const rt = getZohoAppTheme(relatedApp.slug);
              return (
                <Link
                  key={relatedApp.slug}
                  href={`/expertise/zoho-integrations/${relatedApp.slug}/`}
                  className="group flex flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm transition-all motion-safe:hover:-translate-y-1"
                  style={{
                    borderColor: rt.colors.softBorder,
                    boxShadow: `0 14px 32px -24px ${rt.colors.glow}`,
                  }}
                >
                  <div
                    className="mb-3 h-1 w-10 rounded-full opacity-80 transition-opacity group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, ${rt.colors.gradientFrom}, ${rt.colors.gradientTo})`,
                    }}
                  />
                  <div className="mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-slate-50 shadow-sm ring-1 ring-slate-200/80">
                    <img
                      src={relatedApp.iconUrl}
                      alt={relatedApp.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:opacity-90">
                    {relatedApp.name}
                  </span>
                  <span
                    className="mt-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: rt.colors.badgeText }}
                  >
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ZohoStrategyFormModal
        open={isFormOpen}
        onClose={closeForm}
        placement={modalPlacement}
        anchor={formAnchor}
        defaultZohoApps={app.name}
        accentFrom={c.gradientFrom}
        accentVia={c.gradientVia}
        accentTo={c.gradientTo}
        accentGlow={c.glow}
        submitStyle={{
          background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
          boxShadow: `0 12px 28px -10px ${c.glow}`,
        }}
      />

      <Footer />
    </div>
  );
}
