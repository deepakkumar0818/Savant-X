import tx from '@/content/text/app/expertise/websites/page.json';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Atom,
  BriefcaseBusiness,
  Building2,
  CircleCheck,
  CirclePlay,
  Code2,
  Database,
  FileText,
  Flag,
  Framer,
  Globe,
  Headphones,
  Network,
  PenTool,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import SectionHeading, { GRADIENT_TEXT } from '@/components/expertise/SectionHeading';
import { pageMetadata } from '@/lib/seo';
import { COMPANY, COMPANY_METRICS } from '@/lib/company';

export const metadata: Metadata = pageMetadata({
  title: tx.website_development,
  description: tx.high_performance_professionally_designed,
  path: '/expertise/websites',
});

type WebsiteKind = 'corporate' | 'portfolio' | 'landing' | 'blog';

const WEBSITE_TYPES: { id: WebsiteKind; title: string; icon: LucideIcon; description: string; features: string[]; price: string; timeline: string }[] = [
  {
    id: 'corporate',
    title: tx.corporate_websites,
    icon: Building2,
    description: tx.professional_websites_that_establish_you,
    features: [tx.company_profiling, tx.about_us_team, tx.services_showcase, tx.contact_enquiry_forms, tx.seo_optimization],
    price: '₹25,000',
    timeline: '2-4 weeks',
  },
  {
    id: 'portfolio',
    title: tx.portfolio_websites,
    icon: BriefcaseBusiness,
    description: tx.creative_portfolio_websites_to_showcase,
    features: [tx.project_gallery, tx.case_studies, tx.client_testimonials, tx.custom_design, tx.blog_integration],
    price: '₹18,000',
    timeline: '1-3 weeks',
  },
  {
    id: 'landing',
    title: tx.landing_pages,
    icon: Rocket,
    description: tx.high_converting_landing_pages_designed,
    features: [tx.a_b_testing_ready, tx.lead_capture_forms, tx.analytics_integration, tx.high_conversion_design, tx.fast_loading_speed],
    price: '₹8,000',
    timeline: '1-2 weeks',
  },
  {
    id: 'blog',
    title: tx.blog_websites,
    icon: FileText,
    description: tx.content_focused_websites_perfect_for,
    features: [tx.cms_integration, tx.category_management, tx.social_sharing, tx.newsletter_integration, tx.seo_ready],
    price: '₹15,000',
    timeline: '2-3 weeks',
  },
];

const TECHNOLOGIES: { name: string; description: string; mark: React.ReactNode }[] = [
  {
    name: tx.next_js,
    description: tx.react_framework_for_production,
    mark: <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg font-bold text-white">{tx.n}</span>,
  },
  { name: tx.react, description: tx.modern_javascript_library, mark: <Atom className="h-11 w-11 text-sky-500" strokeWidth={1.6} aria-hidden /> },
  {
    name: tx.typescript,
    description: tx.type_safe_javascript,
    mark: <span className="flex h-11 w-11 items-end justify-end rounded-md bg-[#3178c6] p-1 text-base font-bold leading-none text-white">{tx.ts}</span>,
  },
  { name: tx.tailwind_css, description: tx.utility_first_css_framework, mark: <Wind className="h-11 w-11 text-cyan-500" strokeWidth={1.8} aria-hidden /> },
  { name: tx.framer_motion, description: tx.animation_library, mark: <Framer className="h-10 w-10 text-fuchsia-600" strokeWidth={1.8} aria-hidden /> },
  { name: tx.headless_cms, description: tx.content_management_solutions, mark: <Database className="h-10 w-10 text-indigo-600" strokeWidth={1.6} aria-hidden /> },
];

const QUALITIES: { label: string; icon: LucideIcon }[] = [
  { label: tx.scalable_architecture, icon: Network },
  { label: tx.secure_reliable, icon: ShieldCheck },
  { label: tx.seo_optimized, icon: Search },
  { label: tx.fast_performance, icon: Zap },
  { label: tx.easy_to_manage, icon: Settings2 },
];

const PROCESS: { step: string; title: string; description: string; duration: string; icon: LucideIcon }[] = [
  { step: '01', title: tx.discovery_planning, description: tx.we_start_by_understanding_your, duration: '1-2 days', icon: Search },
  { step: '02', title: tx.design_wireframing, description: tx.creating_user_centered_designs_and, duration: '3-5 days', icon: PenTool },
  { step: '03', title: tx.development, description: tx.building_your_website_with_modern, duration: '1-3 weeks', icon: Code2 },
  { step: '04', title: tx.testing_launch, description: tx.thorough_testing_across_devices_and, duration: '2-4 days', icon: Rocket },
];

/** Example design for each kind of website, shown on a laptop and a phone. */
const TYPE_IMAGES: Record<WebsiteKind, { src: string; alt: string }> = {
  corporate: { src: '/images/websites/type-corporate.webp', alt: tx.example_corporate_website_on_a },
  portfolio: { src: '/images/websites/type-portfolio.webp', alt: tx.example_portfolio_website_on_a },
  landing: { src: '/images/websites/type-landing.webp', alt: tx.example_landing_page_on_a },
  blog: { src: '/images/websites/type-blog.webp', alt: tx.example_blog_website_on_a },
};

function TypeVisual({ kind }: { kind: WebsiteKind }) {
  const { src, alt } = TYPE_IMAGES[kind];
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-indigo-50">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw" className="object-cover" />
    </div>
  );
}

export default function WebsitesPage() {
  const projectsMetric = COMPANY_METRICS[0];
  const stats: { value: string; label: string; icon: LucideIcon }[] = [
    { value: String(COMPANY.foundingYear), label: tx.founded, icon: Building2 },
    { value: `${projectsMetric.value}${projectsMetric.suffix}`, label: projectsMetric.label, icon: Flag },
    { value: '98%', label: tx.client_satisfaction, icon: TrendingUp },
    { value: '24/7', label: tx.support, icon: Headphones },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f5ff] via-white to-[#ecebff] px-6 pb-28 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              <Globe className="h-3.5 w-3.5" aria-hidden />{tx.website_development_2}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">{tx.professional}{" "}<span className={GRADIENT_TEXT}>{tx.website_solutions}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{tx.we_design_and_develop_high}</p>
            <ul className="mt-6 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              {[tx.modern_scalable, tx.seo_optimized, tx.mobile_responsive, tx.performance_focused].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
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
                <CirclePlay className="h-4 w-4" aria-hidden />{tx.view_our_work}</Link>
            </div>
          </div>
          <Image
            src="/images/websites/website-hero-devices.webp"
            alt={tx.a_savantx_website_shown_on}
            width={1280}
            height={853}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full"
          />
        </div>
      </section>

      {/* Stats */}
      <section aria-label={tx.savantx_in_numbers} className="relative z-10 -mt-16 px-6 sm:px-8 lg:px-12">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 rounded-2xl bg-white px-6 py-6 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.25)] ring-1 ring-slate-200/70 lg:grid-cols-4 lg:divide-x lg:divide-slate-200 lg:px-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3.5 lg:justify-center">
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

      {/* Website types */}
      <section id="website-types" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.our_services}
            title={tx.website_types}
            highlight={tx.we_build}
            description={tx.from_simple_landing_pages_to}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WEBSITE_TYPES.map(({ id, title, icon: Icon, description, features, price, timeline }) => (
              <article key={id} className="flex flex-col rounded-2xl bg-white p-3 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.35)]">
                <TypeVisual kind={id} />
                <div className="flex flex-1 flex-col px-3 pb-3">
                  <span className="relative z-10 -mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-md ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  <ul className="mb-6 mt-4 space-y-2 text-sm text-slate-700">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CircleCheck className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                    <p>
                      <span className="block text-xs text-slate-500">{tx.starting_price}</span>
                      <span className="block text-lg font-bold text-slate-900">{price}</span>
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100 transition hover:bg-indigo-100"
                    >
                      {timeline}
                      <ArrowRight className="h-3 w-3" aria-hidden />
                      <span className="sr-only">{tx.start_a}{" "}{title.toLowerCase()}{" "}{tx.project}</span>
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
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TECHNOLOGIES.map(({ name, description, mark }) => (
              <li key={name} className="flex flex-col items-center rounded-2xl bg-white px-4 py-6 text-center ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="flex h-12 items-center justify-center">{mark}</span>
                <span className="mt-4 text-sm font-bold text-slate-900">{name}</span>
                <span className="mt-1 text-xs leading-relaxed text-slate-500">{description}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl bg-indigo-50/70 px-6 py-5 ring-1 ring-indigo-100">
            {QUALITIES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <Icon className="h-5 w-5 text-indigo-600" aria-hidden />
                {label}
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
            title={tx.how_we}
            highlight={tx.build_websites}
            description={tx.our_proven_4_step_process}
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {PROCESS.map(({ step, title, description, duration, icon: Icon }, i) => (
              <li key={step} className="relative flex flex-col rounded-2xl bg-white p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/80">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">{tx.step}{" "}{step}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <p className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-slate-700">
                  <CircleCheck className="h-4 w-4 text-indigo-600" aria-hidden />
                  {duration}
                </p>
                {i < PROCESS.length - 1 && (
                  <ArrowRight className="absolute -right-8 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-indigo-500 lg:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Latest work */}
      <section id="latest-work" className="relative overflow-hidden rounded-t-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500 px-6 py-16 sm:px-8 lg:rounded-[2.5rem] lg:mx-4 lg:px-12 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <p className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">{tx.our_work}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.see_our_latest_work}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-indigo-100">{tx.explore_examples_of_the_modern}</p>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >{tx.view_all_projects}<ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <Image
            src="/images/websites/website-showcase.webp"
            alt={tx.examples_of_modern_responsive_website}
            width={2160}
            height={728}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        <div aria-hidden className="pointer-events-none absolute -right-20 top-6 h-64 w-64 rotate-12 rounded-[3rem] bg-indigo-100/70" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 right-40 h-56 w-56 -rotate-12 rounded-[3rem] bg-violet-100/60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />{tx.let_s_work_together}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{tx.ready_to_build_your}{" "}<span className={`block ${GRADIENT_TEXT}`}>{tx.dream_website}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{tx.let_s_discuss_your_project}</p>
          </div>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
              >{tx.start_your_project}<ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-300"
              >
                <CirclePlay className="h-4 w-4" aria-hidden />{tx.view_our_work}</Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              {[tx.free_consultation, tx.custom_solutions, tx.on_time_delivery].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-indigo-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
