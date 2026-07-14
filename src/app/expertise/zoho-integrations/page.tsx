'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ZohoStrategyForm from '@/components/zoho/ZohoStrategyForm';
import ZohoStrategyFormModal from '@/components/zoho/ZohoStrategyFormModal';

const AUTO_OPEN_DELAY_MS = 10_000;

const accentFrom = '#2563eb';
const accentVia = '#4f46e5';
const accentTo = '#7c3aed';
const accentGlow = 'rgba(37, 99, 235, 0.25)';

export default function ZohoIntegrationsPage() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAutoOpened = useRef(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [modalPlacement, setModalPlacement] = useState<'center' | 'bottom-right'>('bottom-right');

  const openForm = () => {
    if (isInHero) return;
    hasAutoOpened.current = true;
    setModalPlacement('bottom-right');
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    const hero = heroSectionRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inHero = entry.isIntersecting && entry.intersectionRatio > 0.4;
        setIsInHero(inHero);
        if (inHero) {
          setIsFormOpen(false);
        }
      },
      { threshold: [0, 0.4, 0.7, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInHero) {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
      return;
    }

    if (hasAutoOpened.current) return;

    autoTimerRef.current = setTimeout(() => {
      if (hasAutoOpened.current) return;
      hasAutoOpened.current = true;
      setModalPlacement('center');
      setIsFormOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
    };
  }, [isInHero]);
  const trustItems = [
    'End-to-End Zoho Implementation',
    'Custom Apps Built on Zoho',
    'Automation • Integration • Advanced Workflows',
    'Dedicated Expert Support',
  ];

  const zohoApps = [
    { name: 'Zoho CRM', iconUrl: '/images/zoho-crm.webp', slug: 'zoho-crm' },
    { name: 'Zoho Books', iconUrl: '/images/zohoBooks.png', slug: 'zoho-books' },
    { name: 'Zoho Creator', iconUrl: '/images/ZohoCreator.png', slug: 'zoho-creator' },
    { name: 'Zoho Recruit', iconUrl: '/images/ZohoRecruit.png', slug: 'zoho-recruit' },
    { name: 'Zoho Analytics', iconUrl: '/images/ZohoAnalytics.png', slug: 'zoho-analytics' },
    { name: 'Zoho Desk', iconUrl: '/images/ZohoDesk.png', slug: 'zoho-desk' },
    { name: 'Zoho SalesIQ', iconUrl: '/images/ZohoSalesiq.png', slug: 'zoho-salesiq' },
    { name: 'Zoho Campaigns', iconUrl: '/images/ZohoCampains.png', slug: 'zoho-campaigns' },
    { name: 'Zoho Inventory', iconUrl: '/images/ZohoInventary.png', slug: 'zoho-inventory' },
    { name: 'Zoho Projects', iconUrl: '/images/ZohoProjects.png', slug: 'zoho-projects' },
  ];

  const struggles = [
    'Poor CRM structure',
    'No proper lead automation',
    'Broken integrations',
    'Manual repetitive tasks',
    'No real-time reporting',
    'Low team adoption',
  ];

  const expertise = [
    { title: 'Complete Zoho Implementation', desc: 'Full setup tailored to your business workflow.', icon: '⚙️' },
    { title: 'Custom Zoho Creator Applications', desc: 'We build fully custom apps inside Zoho.', icon: '🛠️' },
    { title: 'Advanced Workflow & Blueprint Automation', desc: 'Smart automation that saves hours every week.', icon: '🔄' },
    { title: 'API & Third-Party Integration', desc: 'Payment gateways, websites, WhatsApp, custom APIs.', icon: '🔗' },
    { title: 'Multi-App Zoho Ecosystem Architecture', desc: 'Connecting CRM, Books, Recruit, Analytics & more.', icon: '🏗️' },
    { title: 'Official Zoho Development Partner', desc: 'Business-first implementation approach.', icon: '✅' },
    { title: 'Clean Data Architecture', desc: 'Scalable system design.', icon: '📐' },
    { title: 'Long-Term Support Available', desc: 'Transparent pricing & timeline.', icon: '🛡️' },
  ];

  const auditPoints = [
    'Review your current setup',
    'Identify automation gaps',
    'Suggest system improvements',
    'Share implementation roadmap',
    'Estimate cost & timeline',
  ];

  const testimonials = [
    {
      quote: 'SavantX built our manufacturing ERP on Zoho. We now have one system for production planning, inventory, shop floor, and finance. Everything is visible and traceable.',
      author: 'Operations Director, Manufacturing',
      problem: 'They were on pen and paper and Excel — manual production tracking, spreadsheets for inventory, no real-time visibility across shop floor and finance.',
      solution: 'Custom manufacturing ERP on Zoho — production orders, BOMs, work orders, inventory, and reporting in one place.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      imageAlt: 'Manufacturing ERP dashboard — production, inventory, and reporting',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero + Strategy Call Form */}
      <section
        ref={heroSectionRef}
        className="relative overflow-hidden bg-slate-900 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 mb-4">
                Official Zoho Development Partner
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
                Complete Zoho Setup, Customization & App Development
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
                From CRM to Creator, Books to Recruit — we design, build and automate your entire Zoho ecosystem.
              </p>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-col gap-3 sm:gap-x-6 sm:gap-y-3 lg:gap-3 text-slate-400 text-sm font-medium items-center lg:items-start">
                {trustItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="form-section"
              className="rounded-2xl border border-white/10 bg-white p-6 sm:p-8 shadow-xl shadow-black/20"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">
                Get Your Free Zoho Strategy Call
              </h2>
              <p className="text-slate-600 text-center mb-6 text-sm">
                Share a few details and we&apos;ll reach out to discuss your needs.
              </p>

              <ZohoStrategyForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">What We Do</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4">
            We Build & Customize Every Zoho Application
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            We help businesses implement and customize the following — and fully integrate them into one powerful ecosystem.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {zohoApps.map((app) => (
              <Link
                key={app.slug}
                href={`/expertise/zoho-integrations/${app.slug}/`}
                className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md"
              >
                <div className="mb-4 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80 group-hover:ring-blue-200 overflow-hidden shrink-0">
                  <div className={app.name === 'Zoho Projects' ? 'h-full w-full scale-110' : 'h-full w-full'}>
                    <img
                      src={app.iconUrl}
                      alt={app.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                  {app.name}
                </span>
                <span className="mt-2 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Get Your Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Why Businesses Struggle */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider text-center mb-3">Common Challenges</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            Why Businesses Struggle With Zoho
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
            Even though Zoho is powerful, most companies face one or more of these issues.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {struggles.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 text-sm font-bold">!</span>
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50"
            >
              Fix Your Zoho Setup — Book Free Call
            </button>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">Our Expertise</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            Why Businesses Choose Us
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-xl mx-auto">
            End-to-end Zoho implementation, custom apps, and long-term support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Talk to a Zoho Expert
            </button>
          </div>
        </div>
      </section>

      {/* Free Strategy Offer */}
      <section id="free-strategy" className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900" />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Get a FREE 30-Minute Zoho System Audit
              </h2>
              <p className="text-slate-300 text-lg font-medium mb-4">In this call, we:</p>
              <ul className="space-y-3 mb-8">
                {auditPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-amber-400 font-semibold">Limited slots available this week.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-4xl">
                📞
              </div>
              <p className="text-white font-bold text-lg">Book your free strategy call</p>
              <p className="text-slate-400 text-sm mt-1">No commitment required</p>
              <button
                type="button"
                onClick={openForm}
                className="mt-6 block w-full rounded-xl bg-white py-3.5 text-center font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Book Now
              </button>
              <a
                href="tel:+919888244166"
                className="mt-3 block text-sm text-slate-400 hover:text-white transition-colors"
              >
                Or call +91 98882 44166
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Testimonial */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">Success Story</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            Projects & Testimonials
          </h2>
          {testimonials.map((t, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-0 md:items-stretch">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] bg-gradient-to-br from-blue-50 to-indigo-50">
                  {t.image ? (
                    <>
                      <img
                        src={t.image}
                        alt={t.imageAlt ?? 'Zoho ecosystem dashboard'}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.closest('.relative')?.querySelector('[data-fallback]') as HTMLElement | null;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-slate-500/10 pointer-events-none" aria-hidden />
                    </>
                  ) : null}
                  <div
                    data-fallback
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-slate-400"
                    style={{ display: t.image ? 'none' : 'flex' }}
                    aria-hidden={!!t.image}
                  >
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <span className="text-sm font-medium">Zoho ecosystem dashboard</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 pb-10 flex flex-col">
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-slate-900 mb-4">{t.author}</p>
                  <div className="space-y-4 rounded-lg bg-slate-100 border border-slate-200 p-5 pb-6 text-sm leading-relaxed text-slate-800">
                    <div>
                      <span className="font-semibold text-slate-900">Problem: </span>
                      <span className="text-slate-800">{t.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Solution: </span>
                      <span className="text-slate-800">{t.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Start Your Zoho Journey
            </button>
          </div>
        </div>
      </section>

      <ZohoStrategyFormModal
        open={isFormOpen}
        onClose={closeForm}
        placement={modalPlacement}
        accentFrom={accentFrom}
        accentVia={accentVia}
        accentTo={accentTo}
        accentGlow={accentGlow}
        submitStyle={{
          background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
          boxShadow: `0 12px 28px -10px ${accentGlow}`,
        }}
      />

      <Footer />
    </div>
  );
}
