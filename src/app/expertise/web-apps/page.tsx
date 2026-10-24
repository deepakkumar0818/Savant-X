import tx from '@/content/text/app/expertise/web-apps/page.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  AppWindow,
  ArrowRight,
  Atom,
  CalendarDays,
  ChartColumn,
  ChartPie,
  Check,
  CirclePlay,
  Cloud,
  Clock,
  Code2,
  Container,
  Database,
  Hexagon,
  LayoutDashboard,
  LayoutGrid,
  Leaf,
  Link2,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import SectionHeading, { GRADIENT_TEXT } from '@/components/expertise/SectionHeading';
import { COMPANY, COMPANY_METRICS } from '@/lib/company';

const APP_TYPES: { id: string; title: string; icon: LucideIcon; description: string; features: string[]; price: string; timeline: string; badge?: string }[] = [
  {
    id: 'saas',
    title: tx.saas_platforms,
    icon: Cloud,
    description: tx.complete_software_as_a_service,
    features: [tx.user_authentication, tx.subscription_management, tx.payment_processing, tx.analytics_dashboard, tx.api_integrations, tx.multi_tenancy],
    price: '₹15,000',
    timeline: tx.t_8_12_weeks,
    badge: tx.most_popular,
  },
  {
    id: 'dashboard',
    title: tx.admin_dashboards,
    icon: ChartColumn,
    description: tx.comprehensive_admin_panels_for_managing,
    features: [tx.data_visualizations, tx.user_management, tx.content_management, tx.report_generation, tx.real_time_updates, tx.role_based_access],
    price: '₹8,000',
    timeline: tx.t_4_6_weeks,
  },
  {
    id: 'crm',
    title: tx.crm_systems,
    icon: Users,
    description: tx.custom_relationship_management_systems_t,
    features: [tx.lead_management, tx.contact_database, tx.sales_pipeline, tx.email_integration, tx.task_management, tx.reporting_tools],
    price: '₹12,000',
    timeline: tx.t_6_8_weeks,
  },
  {
    id: 'ecommerce',
    title: tx.e_commerce_platforms,
    icon: ShoppingCart,
    description: tx.full_featured_online_stores_with,
    features: [tx.product_catalog, tx.shopping_cart, tx.payment_gateway, tx.order_management, tx.inventory_tracking, tx.customer_portal],
    price: '₹10,000',
    timeline: tx.t_6_10_weeks,
  },
];

const TECHNOLOGIES: { name: string; role: string; mark: React.ReactNode; tile: string }[] = [
  { name: tx.react, role: tx.frontend, mark: <Atom className="h-6 w-6" aria-hidden />, tile: 'bg-sky-50 text-sky-500' },
  { name: tx.next_js, role: tx.full_stack, mark: <Zap className="h-6 w-6" aria-hidden />, tile: 'bg-indigo-50 text-indigo-600' },
  { name: tx.node_js, role: tx.backend, mark: <Hexagon className="h-6 w-6" aria-hidden />, tile: 'bg-emerald-50 text-emerald-600' },
  { name: tx.typescript, role: tx.type_safety, mark: <span className="text-sm font-bold">{tx.ts}</span>, tile: 'bg-[#3178c6] text-white' },
  { name: tx.postgresql, role: tx.database, mark: <Database className="h-6 w-6" aria-hidden />, tile: 'bg-blue-50 text-blue-700' },
  { name: tx.mongodb, role: tx.database, mark: <Leaf className="h-6 w-6" aria-hidden />, tile: 'bg-green-50 text-green-600' },
  { name: 'AWS', role: tx.cloud, mark: <Cloud className="h-6 w-6" aria-hidden />, tile: 'bg-orange-50 text-orange-500' },
  { name: tx.docker, role: tx.containerization, mark: <Container className="h-6 w-6" aria-hidden />, tile: 'bg-sky-50 text-sky-600' },
];

const BENEFITS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: tx.scalable_architecture, description: tx.built_to_handle_growth_from, icon: ChartColumn },
  { title: tx.real_time_updates_2, description: tx.live_data_synchronization_and_real, icon: Zap },
  { title: tx.security_first, description: tx.enterprise_grade_security_with_encryptio, icon: ShieldCheck },
  { title: tx.mobile_responsive, description: tx.perfect_experience_across_all_devices, icon: Smartphone },
  { title: tx.api_integration, description: tx.seamless_integration_with_third_party, icon: Link2 },
  { title: tx.analytics_insights, description: tx.comprehensive_analytics_and_business_int, icon: ChartPie },
];

const PROCESS: { step: string; title: string; description: string; duration: string; icon: LucideIcon }[] = [
  { step: '01', title: tx.discovery_analysis, description: tx.understand_your_business_goals_requireme, duration: tx.t_1_2_weeks, icon: Search },
  { step: '02', title: tx.architecture_design, description: tx.create_scalable_architecture_and_databas, duration: tx.t_1_2_weeks, icon: LayoutGrid },
  { step: '03', title: tx.ui_ux_design, description: tx.design_intuitive_user_interfaces_and, duration: tx.t_2_3_weeks, icon: Palette },
  { step: '04', title: tx.development, description: tx.build_your_application_using_modern, duration: tx.t_4_8_weeks, icon: Code2 },
  { step: '05', title: tx.testing_deployment, description: tx.rigorous_testing_and_smooth_deployment, duration: tx.t_1_2_weeks, icon: Rocket },
];

const CTA_POINTS: { label: string }[] = [{ label: tx.free_consultation }, { label: tx.detailed_proposal }, { label: tx.no_obligation }];

export default function WebAppsPage() {
  const projectsMetric = COMPANY_METRICS[0];
  const yearsInBusiness = new Date().getFullYear() - COMPANY.foundingYear;
  const stats: { value: string; label: string; icon: LucideIcon }[] = [
    { value: `${projectsMetric.value}${projectsMetric.suffix}`, label: projectsMetric.label, icon: CalendarDays },
    { value: '98%', label: tx.client_satisfaction, icon: ShieldCheck },
    { value: `${yearsInBusiness}+`, label: tx.years_experience, icon: Clock },
    { value: '24/7', label: tx.support_maintenance, icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f5ff] via-white to-[#ecebff] px-6 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              <AppWindow className="h-3.5 w-3.5" aria-hidden />{tx.web_application_development}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.3rem]">{tx.custom_web_applications_that}{" "}<span className={`block ${GRADIENT_TEXT}`}>{tx.drive_real_growth}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{tx.we_build_powerful_scalable_web}</p>
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
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
                  <span>
                    <span className="block text-lg font-bold leading-tight text-slate-900">{value}</span>
                    <span className="block text-xs leading-snug text-slate-500">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/websites/website-hero-devices.webp"
            alt={tx.a_web_application_shown_on}
            width={1280}
            height={853}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full"
          />
        </div>
      </section>

      {/* Web application types */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={tx.our_solutions}
            title={tx.web_application}
            highlight={tx.types}
            description={tx.from_saas_platforms_to_custom}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {APP_TYPES.map(({ id, title, icon: Icon, description, features, price, timeline, badge }) => (
              <article
                key={id}
                className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.3)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(79,70,229,0.4)] sm:p-7 ${
                  badge ? 'ring-2 ring-indigo-400' : 'ring-1 ring-slate-200/80'
                }`}
              >
                {badge && (
                  <span className="mb-4 self-start rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700 sm:absolute sm:right-5 sm:top-5 sm:mb-0">{badge}</span>
                )}
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className={badge ? 'sm:pr-24' : ''}>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                </div>
                <ul className="mb-6 mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm text-slate-700 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" aria-hidden />
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

      {/* Technologies */}
      <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.technology_stack}
            title={tx.modern}
            highlight={tx.technologies}
            description={tx.we_use_cutting_edge_technologies}
          />
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {TECHNOLOGIES.map(({ name, role, mark, tile }) => (
              <li key={name} className="flex flex-col items-center rounded-2xl bg-white px-3 py-6 text-center ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile}`}>{mark}</span>
                <span className="mt-4 text-sm font-bold text-slate-900">{name}</span>
                <span className="mt-1 text-xs text-slate-500">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={tx.why_choose_us}
            title={tx.why_choose_our}
            highlight={tx.web_applications}
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
      <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.our_process}
            title={tx.how_we_build}
            highlight={tx.web_applications}
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
      <section className="px-4 py-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500 px-6 py-12 sm:px-12 lg:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-white/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 right-48 h-48 w-48 -rotate-12 rounded-[3rem] bg-white/10" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />{tx.let_s_build_together}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.ready_to_build_your_custom}</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-indigo-100">{tx.let_s_discuss_your_requirements}</p>
            </div>
            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
                >{tx.start_your_project}<ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/70 transition hover:bg-white/10"
                >{tx.schedule_demo}</Link>
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
