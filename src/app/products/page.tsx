import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarDays,
  Database,
  Headphones,
  Layers,
  MousePointerClick,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { CATEGORIES, PRODUCTS, TRUSTED_BY } from '@/components/products/data';
import RequestDemoButton from '@/components/products/RequestDemoButton';
import { COMPANY_METRICS } from '@/lib/company';

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Boxes, value: String(PRODUCTS.length), label: 'Ready-made products' },
  { icon: Building2, value: String(CATEGORIES.length - 1), label: 'Industries served' },
  { icon: Database, value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
  { icon: Layers, value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: COMPANY_METRICS[1].label },
];

const WHY: { icon: LucideIcon; tone: string; title: string; body: string }[] = [
  { icon: Building2, tone: 'bg-blue-50 text-blue-600', title: 'Industry focused', body: 'Products designed around real workflows in healthcare, education, real estate and more.' },
  { icon: Zap, tone: 'bg-orange-50 text-orange-500', title: 'Quick to deploy', body: 'Start from a working product and adapt it, instead of building from scratch.' },
  { icon: ShieldCheck, tone: 'bg-emerald-50 text-emerald-600', title: 'Scalable & secure', body: 'Built on proven technology that grows with your users and data.' },
  { icon: Headphones, tone: 'bg-violet-50 text-violet-600', title: 'Ongoing support', body: 'Our team stays with you after launch for fixes and improvements.' },
];

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Search, title: 'Choose a product', body: 'Browse the catalog and shortlist what fits.' },
  { icon: MousePointerClick, title: 'Request a demo', body: 'See the product in action with our team.' },
  { icon: Settings2, title: 'Get started', body: 'We set it up and customise it for you.' },
  { icon: BarChart3, title: 'Grow your business', body: 'Use it, measure it and improve it with us.' },
];

const eyebrow = 'inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700';
const primary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110';

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f5f7ff_0%,#ffffff_100%)] px-4 pb-14 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        <div aria-hidden className="absolute -right-32 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="hero-enter">
              <p className={eyebrow}>Our products</p>
              <h1 className="mt-5 text-[2.3rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                Powerful software solutions for{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">every business</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                From healthcare to education, real estate to logistics — discover ready-to-use and customisable software designed to simplify your
                operations and accelerate growth.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#catalog" className={primary}>
                  Browse products
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <RequestDemoButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-200 transition hover:ring-indigo-400">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  Request a demo
                </RequestDemoButton>
              </div>
            </div>
            <div className="hero-enter relative mx-auto w-full max-w-[450px] [--hero-delay:0.08s] lg:mr-0">
              <div aria-hidden className="absolute inset-6 -z-10 rounded-full bg-violet-200/50 blur-3xl" />
              <Image
                src="/images/products/products-hero-dashboard.webp"
                alt="Illustration of a SavantX product dashboard on a laptop and phone"
                width={450}
                height={304}
                priority
                sizes="(min-width: 480px) 450px, 92vw"
                className="h-auto w-full rounded-2xl [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_55%,transparent_100%)]"
              />
            </div>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_14px_35px_-25px_rgba(30,58,138,0.4)] ring-1 ring-slate-200/80 sm:gap-4 sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-2xl font-bold tracking-tight text-slate-900">{value}</span>
                  <span className="block text-xs text-slate-500 sm:text-sm">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProductCatalog />

      {/* Why choose */}
      <section aria-labelledby="why-heading" className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f7ff_100%)] px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Why choose SavantX products</p>
            <h2 id="why-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for businesses that <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">want more</span>
            </h2>
            <p className="mt-3 text-slate-600">Our products are designed with a focus on usability, scalability and real business impact.</p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, tone, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${tone}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">{body}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* How it works */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:items-center">
            <div>
              <p className={eyebrow}>How it works</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Get started in just a <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">few steps</span>
              </h2>
              <p className="mt-3 text-slate-600">From choosing a product to going live, we keep it simple.</p>
              <Link href="/contact" className={`${primary} mt-6`}>
                Talk to our team
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="relative rounded-2xl bg-white p-5 shadow-[0_14px_35px_-25px_rgba(30,58,138,0.4)] ring-1 ring-slate-200/80">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-bold text-indigo-500">{String(i + 1).padStart(2, '0')}</p>
                  <p className="mt-1 font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{body}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight aria-hidden className="absolute -right-3.5 top-9 z-10 hidden h-5 w-5 text-indigo-400 xl:block" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Trusted by */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:items-center">
            <div>
              <p className={eyebrow}>Trusted by businesses</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Helping businesses <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">across industries</span>
              </h2>
            </div>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {TRUSTED_BY.map((name) => (
                <li key={name} className="inline-flex items-center gap-2.5 font-semibold text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-indigo-600 shadow-sm ring-1 ring-slate-200">
                    {name.charAt(0)}
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-7 text-white shadow-[0_30px_70px_-35px_rgba(79,70,229,0.8)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 sm:flex">
              <Rocket className="h-8 w-8" aria-hidden />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to transform your business?</h2>
              <p className="mt-2 max-w-xl text-indigo-100">Explore the complete catalog, or ask us for a custom solution built around your needs.</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#catalog" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50">
              Browse all products
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <RequestDemoButton className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white ring-1 ring-white/60 transition hover:bg-white/10">
              <CalendarDays className="h-4 w-4" aria-hidden />
              Request a demo
            </RequestDemoButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
