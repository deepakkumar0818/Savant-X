import tx from '@/content/text/app/expertise/zoho-integrations/page.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Layers,
  Mail,
  MapIcon,
  Network,
  PenLine,
  Phone,
  Rocket,
  Search,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import HeroPremiumBackdrop from '@/components/hero/HeroPremiumBackdrop';
import SelectServiceLink from '@/components/zoho/landing/SelectServiceLink';
import TrackedLink from '@/components/zoho/landing/TrackedLink';
import ZohoEnquiryForm from '@/components/zoho/landing/ZohoEnquiryForm';
import ZohoLeadPopup from '@/components/zoho/landing/ZohoLeadPopup';
import AppShowcase from '@/components/zoho/landing/AppShowcase';
import IntegrationEnterprise from '@/components/zoho/landing/IntegrationEnterprise';
import MembershipPlan from '@/components/zoho/landing/MembershipPlan';
import UseCases from '@/components/zoho/landing/UseCases';
import ZohoPackages from '@/components/zoho/landing/ZohoPackages';
import TeamPackages from '@/components/zoho/landing/TeamPackages';
import ErpOffers from '@/components/zoho/landing/ErpOffers';
import FaqTabs from '@/components/zoho/landing/FaqTabs';
import {
  FAQS,
  MEMBERSHIP,
  PACKAGES,
  TEAM_PACKAGES,
  TRUST_APPS,
  ZOHO_LOGOS,
} from '@/components/zoho/landing/data';
import { COMPANY, OFFICES, SITE_URL, operatingFromText } from '@/lib/company';
import { canonicalUrl } from '@/lib/seo';

const PAGE_PATH = '/expertise/zoho-integrations';
const FALLBACK_ICONS: Record<string, LucideIcon> = { 'Zoho Flow': Workflow, 'Zoho Sign': PenLine };
const PROCESS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: tx.discover, description: tx.understand_your_goals_and_requirements, icon: Search },
  { title: tx.plan, description: tx.create_a_tailored_solution_roadmap, icon: MapIcon },
  { title: tx.build, description: tx.configure_customize_and_integrate, icon: Wrench },
  { title: tx.launch, description: tx.train_your_team_and_provide, icon: Rocket },
];

const HERO_POINTS: { label: string; icon: LucideIcon }[] = [
  { label: tx.all_zoho_apps, icon: BadgeCheck },
  { label: tx.end_to_end_implementation, icon: Layers },
  { label: tx.ongoing_support, icon: Headphones },
];

const INDUSTRIES: { label: string; icon: string }[] = [
  { label: tx.manufacturing, icon: '/images/zoho/industries/manufacturing.webp' },
  { label: tx.healthcare, icon: '/images/zoho/industries/healthcare.webp' },
  { label: tx.education, icon: '/images/zoho/industries/education.webp' },
  { label: tx.retail, icon: '/images/zoho/industries/retail.webp' },
  { label: tx.real_estate, icon: '/images/zoho/industries/real-estate.webp' },
  { label: tx.logistics, icon: '/images/zoho/industries/logistics.webp' },
  { label: tx.non_profit, icon: '/images/zoho/industries/non-profit.webp' },
  { label: tx.and_more, icon: '/images/zoho/industries/more.webp' },
];

const priceNumber = (price: string) => Number(price.replace(/[^\d]/g, ''));

/** Service and FAQ structured data, built only from facts shown on the page. */
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zoho Development & Implementation',
    serviceType: 'Zoho CRM implementation, Zoho Creator development, Deluge development and Zoho integrations',
    url: canonicalUrl(PAGE_PATH),
    areaServed: 'IN',
    provider: { '@type': 'Organization', name: COMPANY.legalName, url: SITE_URL },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Zoho development plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: MEMBERSHIP.name,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: priceNumber(MEMBERSHIP.monthly),
            priceCurrency: 'INR',
            unitText: 'MONTH',
            valueAddedTaxIncluded: false,
          },
        },
        ...[...PACKAGES, ...TEAM_PACKAGES].map((pkg) => ({
          '@type': 'Offer',
          name: pkg.name,
          description: pkg.benefit,
          priceSpecification: { '@type': 'PriceSpecification', minPrice: priceNumber(pkg.price), priceCurrency: 'INR', valueAddedTaxIncluded: false },
        })),
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
  },
];

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:shadow-xl hover:shadow-indigo-600/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:text-base';
const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:text-base';
const darkSecondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-indigo-300' : 'text-indigo-600'}`}>{children}</p>;
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  dark = false,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`zoho-reveal max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}

function AppMark({ app, size = 'md' }: { app: string; size?: 'sm' | 'md' }) {
  const src = ZOHO_LOGOS[app];
  const Icon = FALLBACK_ICONS[app] ?? Network;
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 ${size === 'sm' ? 'h-8 w-8' : 'h-11 w-11'}`}>
      {src ? (
        <Image src={src} alt="" width={32} height={32} className={size === 'sm' ? 'h-5 w-5 object-contain' : 'h-7 w-7 object-contain'} />
      ) : (
        <Icon className={`text-indigo-600 ${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden />
      )}
    </span>
  );
}

export default function ZohoIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Scroll reveal: CSS only, skipped for reduced motion and in browsers without scroll timelines. */}
      <style>{`
        @keyframes zoho-reveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .zoho-reveal { animation: zoho-reveal linear both; animation-timeline: view(); animation-range: entry 0% entry 35%; }
          }
        }
      `}</style>

      {/* 1. Hero */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20"
        style={{ '--hero-gx': '50%', '--hero-gy': '40%', '--hero-px': '0.5', '--hero-py': '0.4' } as React.CSSProperties}
      >
        <HeroPremiumBackdrop gridGlowActive={false} />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="text-center lg:text-left">
            <p className="animate-fade-in-up inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 shadow-sm ring-1 ring-slate-200/70 sm:text-xs sm:tracking-[0.2em]">{tx.zoho_development_implementation}</p>
            <h1 className="animate-fade-in-up delay-100 mt-6 text-[2.15rem] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">{tx.make_zoho_work_the_way}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.your_business_works}</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">{tx.we_help_businesses_set_up}</p>
            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <TrackedLink href="#plans" event="plans_cta_click" className={primaryButton}>{tx.get_started_with_zoho}<ArrowRight className="h-4 w-4" aria-hidden />
              </TrackedLink>
              <SelectServiceLink service="consultation" className={secondaryButton}>{tx.schedule_a_free_consultation}</SelectServiceLink>
            </div>
            <ul className="animate-fade-in-up delay-400 mt-8 flex flex-col items-center gap-x-6 gap-y-2.5 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {HERO_POINTS.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-indigo-600" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
            <p className="animate-fade-in-up delay-500 mt-6 text-sm text-slate-500">{tx.building_business_software_since}{" "}{COMPANY.foundingYear}{" "}{tx.offices_in}{" "}{OFFICES.map((o) => o.city).join(' and ')}{tx.india}{' '}{tx.also_operating_from}{' '}{operatingFromText()}.</p>
          </div>
          <div className="animate-fade-in-up delay-300">
            <Image
              src="/images/zoho/zoho-one-dashboard.webp"
              alt={tx.illustration_of_a_zoho_one}
              width={1400}
              height={933}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_68%_66%_at_50%_52%,#000_55%,transparent_100%)]"
            />
          </div>
        </div>

        {/* Industries */}
        <div className="relative z-10 mx-auto mt-14 max-w-7xl border-t border-slate-200/70 pt-8">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{tx.built_for_businesses_across_industries}</h2>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 xl:flex-nowrap xl:justify-between xl:gap-x-3">
            {INDUSTRIES.map(({ label, icon }) => (
              <li key={label} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-slate-700">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50/60 ring-1 ring-indigo-100/70 xl:h-12 xl:w-12">
                  <Image src={icon} alt="" width={40} height={40} className="h-8 w-8 object-contain opacity-90 saturate-[0.65] xl:h-9 xl:w-9" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Membership banner */}
        <div className="relative z-10 mx-auto mt-16 max-w-7xl lg:mt-20">
          <div className="relative overflow-hidden rounded-2xl bg-[#0b1024] px-6 py-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.6)] sm:px-8">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_120%_at_0%_0%,rgba(59,130,246,0.3),transparent_60%),radial-gradient(ellipse_40%_120%_at_100%_100%,rgba(139,92,246,0.3),transparent_60%)]" />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">{MEMBERSHIP.name}</p>
                <p className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">{MEMBERSHIP.apps.join(' + ')}</p>
              </div>
              <div className="flex flex-col gap-1 text-slate-300 sm:flex-row sm:items-baseline sm:gap-6">
                <p>
                  <span className="text-3xl font-semibold tracking-tight text-white">{MEMBERSHIP.monthly}</span>
                  <span className="text-sm">{tx.month}</span>
                </p>
              </div>
              <TrackedLink
                href="#membership"
                event="membership_cta_click"
                className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50 lg:self-auto"
              >{tx.view_membership_details}<ArrowRight className="h-4 w-4" aria-hidden />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust strip */}
      <section aria-labelledby="zoho-apps-strip" className="border-y border-slate-200/70 bg-slate-50/70 px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 id="zoho-apps-strip" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{tx.zoho_applications_we_work_with}</h2>
          <ul className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {TRUST_APPS.map((app) => (
              <li key={app} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-700">
                <AppMark app={app} size="sm" />
                {app}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Membership */}
      <MembershipPlan />

      <ZohoPackages />

      <TeamPackages />

      <ErpOffers />

      {/* Integrations and enterprise */}
      <IntegrationEnterprise />

      {/* 4. Zoho applications */}
      <AppShowcase />

      {/* 5. Use cases */}
      <UseCases />

      {/* 7. How we work */}
      <section id="why" aria-labelledby="why-heading" className="scroll-mt-24 px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="zoho-reveal">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
              {tx.our_process}
            </p>
            <h2 id="why-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {tx.a_development_team_that_knows}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.inside_out}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{tx.from_discovery_to_deployment_we}</p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESS.map(({ title, description, icon: Icon }, i) => (
              <li key={title} className="zoho-reveal relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-[0_12px_30px_-12px_rgba(79,70,229,0.45)] ring-1 ring-slate-200/80">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-xs font-bold text-indigo-600">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>
                {i < PROCESS.length - 1 && (
                  <ArrowRight className="absolute -right-6 top-4 hidden h-4 w-4 text-indigo-400 lg:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-slate-50 px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="lg:self-center">
            <p className="inline-flex items-center rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">{tx.faq}</p>
            <h2 id="faq-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">{tx.questions_about_working_with_us}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.zoho_question}</span></h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{tx.find_answers_to_the_most}</p>
            <Image
              src="/images/zoho/faq-illustration.webp"
              alt=""
              width={900}
              height={641}
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="mt-8 hidden w-full max-w-md sm:block"
            />
          </div>
          <FaqTabs />
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="px-4 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#060b2b] px-6 py-16 text-center sm:py-20">
          <Image src="/images/zoho/cta-wave.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
          <div className="relative">
            <p className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">{tx.ready_to_transform_your_business}</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.ready_to_make_zoho_work}</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">{tx.let_s_discuss_your_requirements_and}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <SelectServiceLink
                service="consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                {tx.get_a_free_consultation}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </SelectServiceLink>
              <Link href="/work" className={darkSecondaryButton}>
                {tx.view_our_work}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" aria-labelledby="enquiry-heading" className="scroll-mt-24 px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading
              id="enquiry-heading"
              eyebrow={tx.free_consultation}
              title={tx.tell_us_about_your_zoho}
              description={tx.share_a_few_details_and}
            />
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <TrackedLink href={`mailto:${COMPANY.zohoEmail}`} event="email_click" className="flex items-center gap-3 font-medium text-slate-700 hover:text-indigo-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  {COMPANY.zohoEmail}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink href={COMPANY.phone.href} event="phone_click" className="flex items-center gap-3 font-medium text-slate-700 hover:text-indigo-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  {COMPANY.phone.display}
                </TrackedLink>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(30,58,138,0.35)]">
            <ZohoEnquiryForm listenForServiceLinks={false} />
          </div>
        </div>
      </section>

      <ZohoLeadPopup />
      <Footer />
    </div>
  );
}
