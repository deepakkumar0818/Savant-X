'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ZohoIntegrationsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    zohoApps: '',
    lookingToBuild: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const trustItems = [
    'End-to-End Zoho Implementation',
    'Custom Apps Built on Zoho',
    'Automation • Integration • Advanced Workflows',
    'Dedicated Expert Support',
  ];

  const zohoApps = [
    { name: 'Zoho CRM', iconUrl: '/images/zoho-crm.webp' },
    { name: 'Zoho Books', iconUrl: '/images/zohoBooks.png' },
    { name: 'Zoho Creator', iconUrl: '/images/ZohoCreator.png' },
    { name: 'Zoho Recruit', iconUrl: '/images/ZohoRecruit.png' },
    { name: 'Zoho Analytics', iconUrl: '/images/ZohoAnalytics.png' },
    { name: 'Zoho Desk', iconUrl: '/images/ZohoDesk.png' },
    { name: 'Zoho SalesIQ', iconUrl: '/images/ZohoSalesiq.png' },
    { name: 'Zoho Campaigns', iconUrl: '/images/ZohoCampains.png' },
    { name: 'Zoho Inventory', iconUrl: '/images/ZohoInventary.png' },
    { name: 'Zoho Projects', iconUrl: '/images/ZohoProjects.png' },
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
      quote: 'SavantX transformed our Zoho setup. We went from scattered data to a single source of truth. CRM, Books, and Projects now work as one.',
      author: 'Operations Director',
      problem: 'Disconnected systems, manual data entry, no visibility.',
      solution: 'Unified Zoho ecosystem with Blueprint automation and custom Creator app.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-28 pb-20 sm:pt-32 sm:pb-24 px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 mb-8">
            Official Zoho Development Partner
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Complete Zoho Setup, Customization & App Development
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            From CRM to Creator, Books to Recruit — we design, build and automate your entire Zoho ecosystem.
          </p>
          <Link
            href="tel:+919888244166"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-blue-500/25 transition-all duration-200"
          >
            Get Free Zoho Strategy Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
            {trustItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
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
            {zohoApps.map((app, i) => (
              <div
                key={i}
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
                <span className="text-sm font-semibold text-slate-800">{app.name}</span>
              </div>
            ))}
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
              <Link
                href="tel:+919888244166"
                className="mt-6 block w-full rounded-xl bg-white py-3.5 text-center font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Testimonial */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">Success Story</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            Projects & Testimonials
          </h2>
          {testimonials.map((t, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 flex items-center justify-center min-h-[200px]">
                  <div className="flex flex-col items-center gap-3 text-slate-400">
                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <span className="text-sm font-medium">Zoho ecosystem dashboard</span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4 text-sm">
                    <p><span className="font-semibold text-slate-700">Problem:</span> {t.problem}</p>
                    <p><span className="font-semibold text-slate-700">Solution:</span> {t.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="form-section" className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Get Your Free Zoho Strategy Call
            </h2>
            <p className="text-slate-600 text-center mb-8 text-sm">
              Share a few details and we&apos;ll reach out to discuss your needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Your name"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Company name"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="you@company.com"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="+1 234 567 8900"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Which Zoho Apps Are You Using?</label>
                <input
                  type="text"
                  name="zohoApps"
                  value={formData.zohoApps}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g. CRM, Books, Creator"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">What Are You Looking To Build?</label>
                <textarea
                  name="lookingToBuild"
                  value={formData.lookingToBuild}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  placeholder="Brief description of your goals"
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <p className="mt-5 text-center text-xs text-slate-500">
              We use your details only to contact you about your Zoho strategy. We do not share them with third parties.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
