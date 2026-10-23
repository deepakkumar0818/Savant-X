'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  Calculator,
  CalendarCheck,
  CreditCard,
  Factory,
  FileText,
  LayoutDashboard,
  MapPin,
  MessagesSquare,
  Package,
  Phone,
  ScanEye,
  ShieldCheck,
  ShoppingCart,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ui/ServiceIcon';
import ProjectMock from '@/components/work/ProjectMock';
import WorkHero from '@/components/work/WorkHero';
import { COMPANY } from '@/lib/company';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 9,
      title: "Customized Manufacturing ERP",
      category: "manufacturing",
      image: "🏭",
      description: "Custom ERP for manufacturers that brings sales, purchases, inventory, production, quality control, finance and HR & payroll into one system, with live dashboards for orders, stock and work orders.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: true,
      highlights: [
        { label: 'Sales & Purchase', icon: ShoppingCart, tone: 'blue' },
        { label: 'Inventory Management', icon: Package, tone: 'orange' },
        { label: 'Production', icon: Factory, tone: 'green' },
        { label: 'Quality Control', icon: ShieldCheck, tone: 'rose' },
        { label: 'Finance & HR', icon: Wallet, tone: 'violet' },
        { label: 'Live Dashboards', icon: LayoutDashboard, tone: 'sky' },
      ],
      screenshot: {
        src: "/images/work/manufacturing-erp-dashboard.webp",
        width: 1536,
        height: 1024,
        alt: "Manufacturing ERP dashboard showing sales, purchases, inventory value, order status, production, quality control and recent orders",
      },
    },
    {
      id: 1,
      title: "Sehat Setu",
      category: "healthcare",
      image: "🏥",
      description: "Comprehensive healthcare management platform enabling patients to book appointments, manage medical records, and communicate with healthcare providers seamlessly.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      client: "MediCare Solutions",
      duration: "4 months",
      results: "150+ active users",
      featured: true,
      highlights: [
        { label: 'Appointment Booking', icon: CalendarCheck, tone: 'blue' },
        { label: 'Medical Records', icon: FileText, tone: 'orange' },
        { label: 'Provider Communication', icon: MessagesSquare, tone: 'green' },
        { label: 'Patient Management', icon: ShieldCheck, tone: 'violet' },
      ],
      screenshot: {
        src: "/images/work/sehat-setu-hero.webp",
        width: 1345,
        height: 841,
        alt: "Sehat Setu home page with doctor search, appointment booking and online consultation",
      },
    },
    {
      id: 2,
      title: "Food Ordering App",
      category: "web-mobile",
      image: "🍕",
      description: "Complete food delivery solution with restaurant management, order tracking, payment processing, and real-time delivery updates for enhanced customer experience.",
      technologies: ["React Native", "Express", "MongoDB", "Stripe API"],
      client: "FoodieHub",
      duration: "5 months",
      results: "300+ restaurants onboarded",
      featured: true,
      highlights: [
        { label: 'Restaurant Management', icon: UtensilsCrossed, tone: 'orange' },
        { label: 'Order Tracking', icon: MapPin, tone: 'blue' },
        { label: 'Payment Processing', icon: CreditCard, tone: 'green' },
        { label: 'Real-time Delivery Updates', icon: BellRing, tone: 'violet' },
      ],
      screenshot: {
        src: "/images/work/savantx-eats-dashboard.webp",
        width: 1536,
        height: 1024,
        alt: "SavantX Eats restaurant management dashboard with orders, revenue trend, order status, popular menu items and live deliveries",
      },
    },
    {
      id: 3,
      title: "Real Estate App",
      category: "web-mobile",
      image: "🏠",
      description: "Advanced property management platform with property listings, virtual tours, mortgage calculators, and comprehensive real estate analytics for agents and buyers.",
      technologies: ["Next.js", "Laravel", "MySQL", "Google Maps API"],
      client: "PropertyMax",
      duration: "6 months",
      results: "200+ properties listed",
      featured: true,
      highlights: [
        { label: 'Property Listings', icon: Building2, tone: 'blue' },
        { label: 'Virtual Tours', icon: ScanEye, tone: 'violet' },
        { label: 'Mortgage Calculators', icon: Calculator, tone: 'orange' },
        { label: 'Real Estate Analytics', icon: BarChart3, tone: 'green' },
      ],
      screenshot: {
        src: "/images/work/homehub-real-estate-dashboard.webp",
        width: 1536,
        height: 1024,
        alt: "HomeHub real estate dashboard with property stats, featured listings, property map, sales overview, leads and bookings",
      },
    },
    {
      id: 5,
      title: "Web Scraping Tool",
      category: "data",
      image: "🕷️",
      description: "Powerful data extraction platform with intelligent scraping capabilities, data processing, and automated collection from various web sources.",
      technologies: ["Python", "Scrapy", "Redis", "Celery"],
      client: "DataInsights Corp",
      duration: "2 months",
      results: "100+ data sources integrated",
      featured: false,
      hideFromAll: true,
    },
    {
      id: 10,
      title: "EcoTours India",
      category: "ui-ux",
      image: "🌿",
      description: "UI/UX design for EcoTours India, a travel website showcasing eco-friendly tours across India.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
    },
    {
      id: 4,
      title: "Student Portal",
      category: "education",
      image: "🎓",
      description: "Comprehensive educational platform providing students with course management, assignment tracking, grade monitoring, and collaborative learning tools.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
      client: "EduTech Institute",
      duration: "3 months",
      results: "500+ students enrolled",
      featured: false,
      screenshot: {
        src: "/images/work/savantx-student-portal.webp",
        width: 1536,
        height: 1024,
        alt: "SavantX Student Portal dashboard with enrolled courses, assignments, schedule, deadlines, grades and announcements",
      },
    },
    {
      id: 6,
      title: "School Management System",
      category: "education",
      image: "🏫",
      description: "Complete educational institution management solution covering student enrollment, staff management, academic planning, and administrative operations.",
      technologies: ["Angular", "Laravel", "MySQL", "Chart.js"],
      client: "Bright Future School",
      duration: "7 months",
      results: "75+ schools implemented",
      featured: false
    },
    {
      id: 7,
      title: "Student Training Management System",
      category: "education",
      image: "📚",
      description: "Specialized platform for managing training programs, skill development, certification tracking, and progress monitoring for educational institutions.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      client: "SkillUp Academy",
      duration: "4 months",
      results: "120+ training programs",
      featured: false
    },
    {
      id: 8,
      title: "Fleet Management System",
      category: "logistics",
      image: "🚛",
      description: "Comprehensive vehicle fleet management solution with GPS tracking, maintenance scheduling, driver management, and route optimization.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "GPS API"],
      client: "LogiTrack Solutions",
      duration: "5 months",
      results: "80+ vehicles tracked",
      featured: false,
      screenshot: {
        src: "/images/work/fleetmint-fleet-management.webp",
        width: 1440,
        height: 820,
        alt: "Fleetmint fleet management website hero with vehicle routes and tracking stats",
      },
    },
    {
      id: 11,
      title: "Logic Mechanics",
      category: "ui-ux",
      image: "⚙️",
      description: "UI/UX design for the Logic Mechanics website, from layout and visual style to responsive screens.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
      hideFromAll: true,
    },
    {
      id: 12,
      title: "Pet E-commerce",
      category: "ui-ux",
      image: "🐾",
      description: "UI/UX design for a pet supplies online store, covering product browsing, cart and checkout.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
      hideFromAll: true,
    },
    {
      id: 13,
      title: "Real Estate Website",
      category: "ui-ux",
      image: "🏡",
      description: "UI/UX design for a real estate website that makes property listings easy to browse and compare.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
      hideFromAll: true,
    },
    {
      id: 14,
      title: "Viz Vigyaan",
      category: "ui-ux",
      image: "🔬",
      description: "UI/UX design for Viz Vigyaan, from layout and visual style to responsive screens.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
      hideFromAll: true,
    },
    {
      id: 15,
      title: "Kouton Table Booking App",
      category: "ui-ux",
      image: "🍽️",
      description: "UI/UX design for Kouton, a table booking app for finding restaurants and reserving a table.",
      technologies: [],
      client: "",
      duration: "",
      results: "",
      featured: false,
      hideFromAll: true,
    }
  ];

  const countIn = (id: string) => projects.filter(p => p.category === id).length;
  const allCategories = [
    { id: 'all', name: 'All', count: projects.filter(p => !p.hideFromAll).length },
    { id: 'zoho', name: 'Zoho', count: countIn('zoho') },
    { id: 'web-mobile', name: 'Web & Mobile', count: countIn('web-mobile') },
    { id: 'ui-ux', name: 'UI/UX', count: countIn('ui-ux') },
    { id: 'hardware', name: 'Hardware', count: countIn('hardware') },
    { id: 'manufacturing', name: 'Manufacturing', count: countIn('manufacturing') },
    { id: 'healthcare', name: 'Healthcare', count: countIn('healthcare') },
    { id: 'education', name: 'Education', count: countIn('education') },
    { id: 'data', name: 'Data Solutions', count: countIn('data') },
    { id: 'logistics', name: 'Logistics', count: countIn('logistics') },
    { id: 'finance', name: 'Finance', count: countIn('finance') },
  ];
  // Service filters stay visible even before projects are added; industry filters hide when empty.
  const categories = allCategories.filter(c => c.count > 0 || c.id in SERVICE_PAGES);
  const categoryName = (id: string) => allCategories.find(c => c.id === id)?.name ?? id;

  const filteredProjects = activeFilter === 'all'
    ? projects.filter(project => !project.hideFromAll)
    : projects.filter(project => project.category === activeFilter);
  const bentoSpans = bentoLayout(filteredProjects.length);

  const featuredProjects = projects.filter(project => project.featured);
  const spotlight = featuredProjects[spotlightIndex];
  const stepSpotlight = (delta: number) =>
    setSpotlightIndex((i) => (i + delta + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="min-h-screen bg-white">
      <WorkHero />

      <section aria-labelledby="featured-heading" className="relative px-6 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              <span aria-hidden className="h-px w-12 bg-blue-200 sm:w-16" />
              Featured projects
              <span aria-hidden className="h-px w-12 bg-blue-200 sm:w-16" />
            </p>
            <h2 id="featured-heading" className="mt-4 text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-5xl">
              Real Solutions. Real Impact.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              Explore some of our recent projects that help businesses streamline operations, improve productivity and drive growth.
            </p>
          </div>

          {spotlight && (
            <>
              <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-6">
                <div className="min-w-0 lg:-ml-6">
                  <LaptopVisual projects={featuredProjects} index={spotlightIndex} />
                </div>

                <div className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 sm:p-8">
                  {/* Every project is rendered in the same cell so the card keeps the size of the
                      longest one; only the current project is visible. */}
                  <div aria-live="polite" className="grid flex-1 grid-cols-[minmax(0,1fr)]">
                    {featuredProjects.map((project, i) => (
                      <div
                        key={project.id}
                        aria-hidden={i !== spotlightIndex}
                        className={`flex flex-col [grid-area:1/1] ${i === spotlightIndex ? 'product-fade' : 'invisible'}`}
                      >
                        <p className="text-sm font-medium text-slate-500">
                          <span className="text-blue-600">Featured</span> · {categoryName(project.category)}
                        </p>
                        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">{project.title}</h3>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{project.description}</p>
                        {project.highlights && (
                          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {project.highlights.map(({ label, icon: Icon, tone }) => (
                              <li key={label} className="flex h-14 items-center gap-2.5 rounded-2xl bg-slate-50 px-2.5 text-sm font-medium leading-tight text-slate-700 ring-1 ring-slate-100">
                                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${TONES[tone]}`}>
                                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                                </span>
                                {label}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-auto flex items-center gap-3 pt-8">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                            <ServiceIcon emoji={project.image} size="none" className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 flex-1 pr-28">
                            <span className="block truncate text-sm font-semibold text-slate-900">{project.client || project.title}</span>
                            <span className="block truncate text-xs text-slate-500">{project.results || COMPANY.name}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative -mt-12 flex h-12 items-center justify-end">
                    <span className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => stepSpotlight(-1)}
                        aria-label="Previous featured project"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                      >
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => stepSpotlight(1)}
                        aria-label="Next featured project"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
                      >
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-center gap-2">
                {featuredProjects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSpotlightIndex(i)}
                    aria-label={`Show ${p.title}`}
                    aria-current={i === spotlightIndex ? 'true' : undefined}
                    className="flex h-6 items-center"
                  >
                    <span className={`block h-1.5 rounded-full transition-all ${i === spotlightIndex ? 'w-8 bg-blue-600' : 'w-6 bg-slate-200 hover:bg-slate-300'}`} />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section id="showcase" className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Every project, every industry"
            description="Solutions we have delivered across sectors and technology stacks. Filter by industry to find work like yours."
            cta={{ label: 'Start a project', href: '/contact' }}
          />

          <div className="-mx-6 mt-10 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0">
            <div role="group" aria-label="Filter projects by industry" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {categories.map((category) => {
                const active = activeFilter === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveFilter(category.id)}
                    aria-pressed={active}
                    className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                      active ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-1.5 tabular-nums ${active ? 'text-white/70' : 'text-slate-400'}`}>{category.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p aria-live="polite" className="sr-only">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 pointer-fine:[&:has(>article:hover)>article:not(:hover)]:scale-[0.98] pointer-fine:[&:has(>article:hover)>article:not(:hover)]:opacity-60 pointer-fine:[&:has(>article:hover)>article:not(:hover)]:blur-[3px] pointer-fine:[&:has(>article:hover)>article:not(:hover)]:saturate-50">
            {filteredProjects.map((project, index) => (
              <BentoCard
                key={project.id}
                project={project}
                label={categoryName(project.category)}
                span={bentoSpans[index]}
                theme={BENTO_THEMES[index % BENTO_THEMES.length]}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && activeFilter in SERVICE_PAGES && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
              <p className="text-lg font-semibold text-slate-900">{categoryName(activeFilter)} case studies are coming soon</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                We are preparing write-ups of our {categoryName(activeFilter)} work. In the meantime, see what we offer or
                talk to us about your project.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={SERVICE_PAGES[activeFilter]}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:ring-slate-300"
                >
                  Explore {categoryName(activeFilter)} services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Start a project
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b0b10] px-6 py-20 text-center sm:py-24">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_25%_0%,rgba(190,24,93,0.45),transparent_70%),radial-gradient(ellipse_45%_60%_at_75%_0%,rgba(37,99,235,0.5),transparent_70%)]"
          />
          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]">
              <Image src={COMPANY.logoPath} alt="" width={48} height={48} className="h-full w-full object-contain" />
            </span>
            <h2 className="mx-auto mt-8 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-300">
              Tell us what you are building and we will come back with a plan, timeline and estimate.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Start a project
              </Link>
              <a
                href={COMPANY.phone.href}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {COMPANY.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  duration: string;
  results: string;
  featured: boolean;
  screenshot?: { src: string; alt: string; width: number; height: number };
  /** Key modules shown as chips in the featured spotlight. */
  highlights?: { label: string; icon: LucideIcon; tone: Tone }[];
  /** Listed only under its own filter, not in "All". */
  hideFromAll?: boolean;
};

/** Real product screenshot in a browser frame when we have one, otherwise the illustrative mock. */
function ProjectVisual({ project }: { project: Project }) {
  if (!project.screenshot) return <ProjectMock category={project.category} />;
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(2,6,23,0.6)] ring-1 ring-slate-900/10">
      <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <Image
        src={project.screenshot.src}
        alt={project.screenshot.alt}
        width={project.screenshot.width}
        height={project.screenshot.height}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

type Tone = 'blue' | 'orange' | 'green' | 'rose' | 'violet' | 'sky';
const TONES: Record<Tone, string> = {
  blue: 'bg-blue-100 text-blue-600',
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-emerald-100 text-emerald-600',
  rose: 'bg-rose-100 text-rose-600',
  violet: 'bg-violet-100 text-violet-600',
  sky: 'bg-sky-100 text-sky-600',
};

/** Screen area of /images/work/laptop-frame.webp (transparent there), as % of the frame. */
const LAPTOP_SCREEN = { left: '15.16%', top: '9.47%', width: '69.79%', height: '76.55%' };

/**
 * Featured screenshots on a laptop. The frame stays put; only the screen content slides
 * when the project changes. Screenshots sit behind the frame's transparent screen.
 */
function LaptopVisual({ projects, index }: { projects: Project[]; index: number }) {
  return (
    <div className="relative mx-auto aspect-[2/1] w-full">
      <div className="absolute flex flex-col overflow-hidden bg-white" style={LAPTOP_SCREEN}>
        <div className="flex shrink-0 items-center gap-1 px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={project.id} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
                {project.screenshot ? (
                  <Image
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 680px, 70vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 overflow-hidden">
                    <ProjectMock category={project.category} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/images/work/laptop-frame.webp"
        alt=""
        width={1400}
        height={700}
        priority
        sizes="(min-width: 1024px) 900px, 100vw"
        className="pointer-events-none relative h-auto w-full select-none drop-shadow-[0_30px_40px_rgba(15,23,42,0.18)]"
      />
    </div>
  );
}

// Service filters without published projects yet link to the matching service page.
const SERVICE_PAGES: Record<string, string> = {
  zoho: '/expertise/zoho-integrations',
  'ui-ux': '/expertise/ui-ux-design',
  hardware: '/expertise/hardware-electronics',
};

const BENTO_WIDE = [true, false, false, false, false, true, true, false, false];
const BENTO_COLUMNS = 4;
const SPAN_CLASSES: Record<number, string> = {
  1: '',
  2: 'md:col-span-2',
  3: 'md:col-span-2 lg:col-span-3',
  4: 'md:col-span-2 lg:col-span-4',
};

/** Column span per card; the last card stretches so a short final row has no gap. */
function bentoLayout(count: number) {
  const spans = Array.from({ length: count }, (_, i) => (BENTO_WIDE[i % BENTO_WIDE.length] ? 2 : 1));
  let used = 0;
  spans.forEach((span, i) => {
    if (used + span > BENTO_COLUMNS) used = 0;
    used = (used + span) % BENTO_COLUMNS;
    if (i === count - 1 && used > 0) spans[i] += BENTO_COLUMNS - used;
  });
  return spans;
}
const BENTO_THEMES: BentoTheme[] = ['blue', 'light', 'dark', 'dark', 'peach', 'light', 'dark', 'light', 'blue'];

type BentoTheme = 'light' | 'peach' | 'dark' | 'blue';

const THEME_STYLES: Record<BentoTheme, { card: string; inverse: boolean }> = {
  light: { card: 'bg-[linear-gradient(160deg,#ffffff_0%,#eef2ff_45%,#bfdbfe_100%)] ring-1 ring-slate-200/70', inverse: false },
  peach: { card: 'bg-[linear-gradient(160deg,#fff7ed_0%,#ffe4e6_50%,#fecdd3_100%)] ring-1 ring-rose-100', inverse: false },
  dark: {
    card: 'bg-[#07070c] bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(79,70,229,0.55),transparent_70%)]',
    inverse: true,
  },
  blue: { card: 'bg-[linear-gradient(160deg,#3b82f6_0%,#4338ca_50%,#2e1065_100%)]', inverse: true },
};

function BentoCard({ project, label, span, theme }: { project: Project; label: string; span: number; theme: BentoTheme }) {
  const wide = span > 1;
  const { card, inverse } = THEME_STYLES[theme];
  const chips = (
      <div
        className={`relative z-10 flex flex-wrap items-center gap-2 text-xs font-medium ${wide ? 'mt-4' : ''}`}
      >
        {[project.duration, project.results].filter(Boolean).map((item) => (
          <span
            key={item}
            className={`rounded-full px-2.5 py-1 backdrop-blur ${
              inverse ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-white/80 text-slate-700 ring-1 ring-slate-200'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
  );
  return (
    <article
      className={`group relative flex h-[24rem] flex-col overflow-hidden rounded-2xl p-6 transition duration-500 ease-out motion-safe:hover:-translate-y-1 ${card} ${
        SPAN_CLASSES[span]
      }`}
    >
      <p className={`text-xs font-medium ${inverse ? 'text-white/60' : 'text-slate-500'}`}>{label}</p>
      <h3 className={`mt-1.5 text-lg font-semibold tracking-tight ${inverse ? 'text-white' : 'text-slate-900'}`}>
        {project.title}
      </h3>
      <p className={`mt-2 line-clamp-2 shrink-0 text-sm leading-relaxed ${inverse ? 'text-white/70' : 'text-slate-600'} ${wide ? 'max-w-md' : ''}`}>
        {project.description}
      </p>
      {wide && chips}

      {wide ? (
        <div className="relative -mb-16 mt-6 flex flex-1 items-start justify-center transition-transform duration-500 motion-safe:group-hover:-translate-y-2">
          <div className="w-full max-w-md">
            <ProjectVisual project={project} />
          </div>
        </div>
      ) : project.screenshot ? (
        <div className="flex flex-1 items-center">
          <div className="w-full overflow-hidden rounded-xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.45)] ring-1 ring-slate-900/10 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]">
            <Image
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              width={project.screenshot.width}
              height={project.screenshot.height}
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <span
            className={`flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-500 motion-safe:group-hover:scale-105 ${
              inverse
                ? 'bg-white/10 text-white ring-1 ring-white/20 shadow-[0_0_60px_-5px_rgba(129,140,248,0.75)] backdrop-blur'
                : 'bg-white text-blue-600 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.45)] ring-1 ring-slate-200/70'
            }`}
          >
            <ServiceIcon emoji={project.image} size="none" className="h-9 w-9" />
          </span>
        </div>
      )}

      {!wide && chips}
    </article>
  );
}

function SectionHeader({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">{description}</p>
      </div>
      <Link
        href={cta.href}
        className="inline-flex shrink-0 items-center self-start rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-blue-700 sm:self-auto"
      >
        {cta.label}
      </Link>
    </div>
  );
}
