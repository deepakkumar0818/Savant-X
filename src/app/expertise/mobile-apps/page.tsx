import tx from '@/content/text/app/expertise/mobile-apps/page.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  Apple,
  ArrowRight,
  Atom,
  Bell,
  Bird,
  Bot,
  Box,
  CalendarDays,
  ChartColumn,
  ChartPie,
  Check,
  CircleDot,
  CirclePlay,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Feather,
  Flag,
  Flame,
  Headphones,
  Hexagon,
  Layers,
  Monitor,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Triangle,
  Wifi,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import SectionHeading, { GRADIENT_TEXT } from '@/components/expertise/SectionHeading';
import { COMPANY, COMPANY_METRICS } from '@/lib/company';

const APP_TYPES: { id: string; title: string; icon: LucideIcon; description: string; platforms: string[]; features: string[]; price: string; timeline: string }[] = [
  {
    id: 'native',
    title: tx.native_mobile_apps,
    icon: Smartphone,
    description: tx.high_performance_native_applications_bui,
    platforms: ['iOS', tx.android],
    features: [tx.kotlin_swift_development, tx.platform_specific_ui_ux, tx.native_performance, tx.app_store_optimization],
    price: '₹25,000',
    timeline: '8-16 weeks',
  },
  {
    id: 'cross',
    title: tx.cross_platform_apps,
    icon: Layers,
    description: tx.single_codebase_applications_that_run,
    platforms: ['iOS', tx.android, tx.web],
    features: [tx.react_native_flutter, tx.faster_development, tx.cost_effective, tx.consistent_ui_ux],
    price: '₹18,000',
    timeline: '6-12 weeks',
  },
  {
    id: 'hybrid',
    title: tx.hybrid_apps,
    icon: Box,
    description: tx.web_based_applications_wrapped_in,
    platforms: ['iOS', tx.android],
    features: [tx.ionic_framework7, tx.easy_maintenance, tx.web_technologies, tx.cost_effective],
    price: '₹12,000',
    timeline: '4-8 weeks',
  },
  {
    id: 'pwa',
    title: tx.progressive_web_apps,
    icon: Monitor,
    description: tx.web_applications_that_provide_a,
    platforms: [tx.web, 'iOS', tx.android],
    features: [tx.offline_functionality, tx.push_notifications, tx.app_like_experience, tx.instant_updates],
    price: '₹8,000',
    timeline: '3-6 weeks',
  },
];

const PLATFORMS: { id: string; name: string; description: string; icon: LucideIcon; tile: string; screen: string; tools: string[] }[] = [
  {
    id: 'ios',
    name: tx.ios_development,
    description: tx.native_ios_applications_for_iphone,
    icon: Apple,
    tile: 'bg-slate-900 text-white',
    screen: 'from-indigo-500 via-violet-600 to-fuchsia-500',
    tools: [tx.swift_swiftui, tx.xcode_ide, tx.ios_sdk, tx.app_store_connect, tx.testflight, tx.core_data],
  },
  {
    id: 'android',
    name: tx.android_development,
    description: tx.native_android_applications_for_phones,
    icon: Bot,
    tile: 'bg-emerald-500 text-white',
    screen: 'from-sky-500 via-indigo-600 to-emerald-500',
    tools: [tx.kotlin_java, tx.android_sdk, tx.android_studio, tx.google_play_console, tx.firebase, tx.room_database],
  },
];

const TECHNOLOGIES: { name: string; role: string; icon: LucideIcon; tile: string }[] = [
  { name: tx.react_native, role: tx.cross_platform_framework, icon: Atom, tile: 'bg-sky-50 text-sky-500' },
  { name: tx.flutter, role: tx.google_ui_toolkit, icon: Feather, tile: 'bg-blue-50 text-blue-500' },
  { name: tx.swift, role: tx.ios_development_2, icon: Bird, tile: 'bg-orange-50 text-orange-500' },
  { name: tx.kotlin, role: tx.android_development_2, icon: Triangle, tile: 'bg-violet-50 text-violet-600' },
  { name: tx.ionic, role: tx.hybrid_app_framework, icon: CircleDot, tile: 'bg-indigo-50 text-indigo-600' },
  { name: tx.xamarin, role: tx.cross_platform_platform, icon: Hexagon, tile: 'bg-sky-50 text-sky-600' },
  { name: tx.firebase_2, role: tx.backend_services, icon: Flame, tile: 'bg-amber-50 text-amber-500' },
  { name: 'AWS', role: tx.cloud_infrastructure, icon: Cloud, tile: 'bg-orange-50 text-orange-500' },
];

const BENEFITS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: tx.native_performance_2, description: tx.optimized_for_each_platform_to, icon: Zap },
  { title: tx.cross_platform, description: tx.single_codebase_solutions_that_work, icon: Layers },
  { title: tx.offline_support, description: tx.applications_that_work_even_without, icon: Wifi },
  { title: tx.push_notifications_2, description: tx.engage_users_with_targeted_notifications, icon: Bell },
  { title: tx.app_store_optimization_2, description: tx.maximize_visibility_and_downloads_in, icon: ChartColumn },
  { title: tx.analytics_integration, description: tx.track_user_behavior_and_app, icon: ChartPie },
];

const PROCESS: { step: string; title: string; description: string; duration: string; icon: LucideIcon }[] = [
  { step: '01', title: tx.discovery_planning, description: tx.understand_your_business_requirements_an, duration: tx.t_1_2_weeks, icon: Search },
  { step: '02', title: tx.ui_ux_design, description: tx.create_intuitive_and_engaging_user, duration: tx.t_2_3_weeks, icon: Palette },
  { step: '03', title: tx.development, description: tx.build_your_mobile_application_with, duration: tx.t_6_10_weeks, icon: Code2 },
  { step: '04', title: tx.testing_qa, description: tx.comprehensive_testing_across_devices_and, duration: tx.t_1_2_weeks, icon: ClipboardCheck },
  { step: '05', title: tx.launch_deployment, description: tx.app_store_submission_and_deployment, duration: tx.t_1_2_weeks, icon: Rocket },
];

const CTA_POINTS: { label: string }[] = [{ label: tx.free_consultation }, { label: tx.detailed_proposal }, { label: tx.no_obligation }];

export default function MobileAppsPage() {
  const projectsMetric = COMPANY_METRICS[0];
  const stats: { value: string; label: string; icon: LucideIcon }[] = [
    { value: String(COMPANY.foundingYear), label: tx.founded, icon: CalendarDays },
    { value: `${projectsMetric.value}${projectsMetric.suffix}`, label: projectsMetric.label, icon: Flag },
    { value: '6-16', label: tx.week_delivery, icon: Clock },
    { value: '24/7', label: tx.support, icon: Headphones },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f5ff] via-white to-[#ecebff] px-6 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              <Smartphone className="h-3.5 w-3.5" aria-hidden />{tx.mobile_app_development}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.3rem]">{tx.mobile_applications}{" "}<span className={GRADIENT_TEXT}>{tx.that_move_your_business_forward}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{tx.we_create_powerful_user_friendly}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
              >{tx.start_a_project}<ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-300"
              >
                <CirclePlay className="h-4 w-4 text-indigo-600" aria-hidden />{tx.view_our_work}</Link>
            </div>
          </div>
          <Image
            src="/images/mobile-apps/mobile-hero-phones.webp"
            alt={tx.two_phones_showing_a_health}
            width={1280}
            height={853}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(79,70,229,0.45)] ring-1 ring-indigo-100"
          />
        </div>
        <ul className="relative mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3.5 rounded-2xl bg-white p-5 shadow-[0_16px_40px_-24px_rgba(79,70,229,0.35)] ring-1 ring-slate-200/70">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-2xl font-bold text-slate-900">{value}</span>
                <span className="block text-sm text-slate-500">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* App types */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={tx.our_solutions}
            title={tx.mobile_app}
            highlight={tx.development_types}
            description={tx.from_native_apps_to_cross}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {APP_TYPES.map(({ id, title, icon: Icon, description, platforms, features, price, timeline }) => (
              <article key={id} className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(79,70,229,0.4)] sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={tx.platforms}>
                      {platforms.map((p) => (
                        <li key={p} className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="mb-6 mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm text-slate-700 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <p className="text-base font-bold text-indigo-700">{tx.starting_at}{" "}{price}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-right">
                      <span className="block text-sm font-bold text-emerald-600">{timeline}</span>
                      <span className="block text-xs text-slate-500">{tx.timeline}</span>
                    </p>
                    <Link
                      href="/contact"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30 transition hover:brightness-110"
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden />
                      <span className="sr-only">{tx.enquire_about}{" "}{title}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={tx.platforms}
            title={tx.ios_android}
            highlight={tx.development_2}
            description={tx.we_build_high_quality_native}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PLATFORMS.map(({ id, name, description, icon: Icon, tile, screen, tools }) => (
              <article key={id} className="relative flex overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 sm:p-7">
                <div className="min-w-0 flex-1 sm:pr-32">
                  <div className="flex items-center gap-3.5">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tile}`}>
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                      <p className="text-sm text-slate-600">{description}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">{tx.technologies}</p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                    {tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" aria-hidden />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div aria-hidden className="absolute -bottom-10 right-6 hidden w-28 rotate-6 rounded-[1.6rem] bg-slate-900 p-1.5 shadow-xl sm:block">
                  <div className={`flex aspect-[9/19] items-center justify-center rounded-[1.3rem] bg-gradient-to-br ${screen}`}>
                    <Icon className="h-9 w-9 text-white/90" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.technology_stack}
            title={tx.mobile}
            highlight={tx.technologies}
            description={tx.we_use_cutting_edge_mobile}
          />
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {TECHNOLOGIES.map(({ name, role, icon: Icon, tile }) => (
              <li key={name} className="flex flex-col items-center rounded-2xl bg-white px-3 py-6 text-center ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="mt-4 text-sm font-bold text-slate-900">{name}</span>
                <span className="mt-1 text-xs leading-snug text-slate-500">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={tx.key_features}
            title={tx.why_choose_our}
            highlight={tx.mobile_apps}
            description={tx.we_combine_technical_expertise_with}
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 transition hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-base font-bold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.our_process}
            title={tx.how_we_build}
            highlight={tx.mobile_apps}
            description={tx.our_proven_5_step_process}
          />
          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            <span aria-hidden className="absolute left-[10%] right-[10%] top-7 hidden border-t-2 border-dashed border-indigo-200 lg:block" />
            {PROCESS.map(({ step, title, description, duration, icon: Icon }) => (
              <li key={step} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-indigo-600 shadow-md ring-4 ring-indigo-50">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="-mt-7 flex w-full flex-1 flex-col items-center rounded-2xl bg-white px-5 pb-6 pt-11 ring-1 ring-slate-200/80">
                  <span className="text-xs font-semibold text-indigo-600">{step}</span>
                  <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  <p className="mt-auto pt-4 text-sm font-semibold text-indigo-700">{duration}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500 px-6 py-12 sm:px-12 lg:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-white/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 -rotate-12 rounded-[3rem] bg-white/10" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />{tx.let_s_build_together}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.ready_to_build_your_mobile}</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-indigo-100">{tx.let_s_discuss_your_mobile}</p>
            </div>
            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
                >{tx.start_your_project}<ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/70 transition hover:bg-white/10"
                >{tx.schedule_demo}</Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/70 transition hover:bg-white/10"
                >{tx.view_portfolio}</Link>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-indigo-50">
                {CTA_POINTS.map(({ label }) => (
                  <li key={label} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
