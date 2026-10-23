import tx from '@/content/text/app/expertise/zoho-integrations/page.json';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Layers,
  Mail,
  Milestone,
  Network,
  PenLine,
  Phone,
  RefreshCw,
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
import ZohoHeroVisual from '@/components/zoho/landing/ZohoHeroVisual';
import AppShowcase from '@/components/zoho/landing/AppShowcase';
import IntegrationEnterprise from '@/components/zoho/landing/IntegrationEnterprise';
import MembershipPlan from '@/components/zoho/landing/MembershipPlan';
import UseCases from '@/components/zoho/landing/UseCases';
import ZohoPackages from '@/components/zoho/landing/ZohoPackages';
import TeamPackages from '@/components/zoho/landing/TeamPackages';
import ErpOffers from '@/components/zoho/landing/ErpOffers';
import {
  FAQS,
  MEMBERSHIP,
  PACKAGES,
  TEAM_PACKAGES,
  TRUST_APPS,
  WHY,
  ZOHO_LOGOS,
} from '@/components/zoho/landing/data';
import { COMPANY, COMPANY_METRICS, OFFICES, SITE_URL } from '@/lib/company';
import { canonicalUrl } from '@/lib/seo';

const PAGE_PATH = '/expertise/zoho-integrations';
const FALLBACK_ICONS: Record<string, LucideIcon> = { 'Zoho Flow': Workflow, 'Zoho Sign': PenLine };
const WHY_ICONS: LucideIcon[] = [Layers, Wrench, Code2, Network, Milestone, RefreshCw];

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
            <h1 className="animate-fade-in-up delay-100 mt-6 text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">{tx.make_zoho_work_the_way}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.your_business_works}</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">{tx.customize_zoho_crm_build_powerful}</p>
            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <SelectServiceLink service="consultation" className={primaryButton}>{tx.book_free_consultation}<ArrowRight className="h-4 w-4" aria-hidden />
              </SelectServiceLink>
              <TrackedLink href="#plans" event="plans_cta_click" className={secondaryButton}>{tx.explore_development_plans}</TrackedLink>
            </div>
            <ul className="animate-fade-in-up delay-400 mt-8 flex flex-col items-center gap-x-6 gap-y-2.5 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {['Zoho CRM & Creator', 'Workflow Automation', 'Business Integrations'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="animate-fade-in-up delay-500 mt-6 text-sm text-slate-500">{tx.building_business_software_since}{" "}{COMPANY.foundingYear}{" "}{tx.offices_in}{" "}{OFFICES.map((o) => o.city).join(' and ')}{tx.india}</p>
          </div>
          <div className="animate-fade-in-up delay-300">
            <ZohoHeroVisual />
          </div>
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
                <p className="text-sm">{tx.minimum_commitment}{" "}{MEMBERSHIP.minimumMonths}{" "}{tx.months}<br />{tx.total_commitment}{" "}{MEMBERSHIP.minimumTotal}{" "}{tx.before_applicable_taxes}</p>
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
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {TRUST_APPS.map((app) => (
              <li key={app} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
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

      {/* 7. Why SavantX */}
      <section id="why" aria-labelledby="why-heading" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading
              id="why-heading"
              eyebrow={tx.why_savantx}
              title={tx.a_development_team_that_knows}
              description={`Building business software since ${COMPANY.foundingYear}, from offices in ${OFFICES.map((o) => o.city).join(' and ')}.`}
            />
            <dl className="zoho-reveal mt-8 grid max-w-sm grid-cols-2 gap-4">
              {COMPANY_METRICS.map((m) => (
                <div key={m.label} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                  <dt className="text-sm text-slate-600">{'zohoLabel' in m ? m.zohoLabel : m.label}</dt>
                  <dd className="order-first bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl font-semibold text-transparent">
                    {m.value}
                    {m.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY.map((item, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <li key={item.title} className="zoho-reveal rounded-2xl border border-slate-200 bg-white p-6">
                  <Icon className="h-5 w-5 text-indigo-600" aria-hidden />
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 8. FAQ: native <details> gives keyboard and screen-reader support without extra script. */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading id="faq-heading" center eyebrow="FAQ" title={tx.questions_about_working_with_us} />
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5 font-semibold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4">
                  <h3 className="text-base">{faq.q}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="px-4 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b1024] px-6 py-16 text-center sm:py-20">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_45%_70%_at_20%_0%,rgba(59,130,246,0.35),transparent_70%),radial-gradient(ellipse_45%_70%_at_80%_100%,rgba(139,92,246,0.35),transparent_70%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{tx.ready_to_make_zoho_work}</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">{tx.tell_us_about_your_workflows}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <SelectServiceLink
                service="consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >{tx.book_free_consultation}</SelectServiceLink>
              <TrackedLink href="#plans" event="plans_cta_click" className={darkSecondaryButton}>{tx.explore_development_plans}</TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" aria-labelledby="enquiry-heading" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
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
                <TrackedLink href={`mailto:${COMPANY.email}`} event="email_click" className="flex items-center gap-3 font-medium text-slate-700 hover:text-indigo-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  {COMPANY.email}
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
