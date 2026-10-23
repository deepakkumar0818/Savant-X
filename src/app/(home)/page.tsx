'use client';

import tx from '@/content/text/app/(home)/page.json';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Cpu, CircuitBoard, Eye, Puzzle, Smartphone, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';
import ConsultationDialog from '@/components/forms/ConsultationDialog';
import CompaniesSection from '@/components/CompaniesSection';
import SolutionsShowcase from '@/components/home/SolutionsShowcase';
import AnimatedCounter from '@/components/AnimatedCounter';
import SolutionsMegaSectionBackdrop from '@/components/solutions/SolutionsMegaSectionBackdrop';
import { useSolutionsAmbientMotion } from '@/lib/useSolutionsAmbientMotion';
import HeroPremiumBackdrop from '@/components/hero/HeroPremiumBackdrop';
import { COMPANY_METRICS } from '@/lib/company';

const HeroWorkflowEditor = dynamic(() => import('@/components/HeroWorkflowEditor'), {
  loading: () => (
    <div
      className="mx-auto h-[min(420px,50vh)] w-full max-w-lg animate-pulse rounded-2xl bg-slate-100/90 lg:ml-auto"
      aria-hidden
    />
  ),
});

const AboutExcellenceSection = dynamic(() => import('@/components/AboutExcellenceSection'), {
  loading: () => <div className="h-72 w-full animate-pulse rounded-2xl bg-slate-50" aria-hidden />,
});

const HomeMegaSectionCTA = dynamic(() => import('@/components/HomeMegaSectionCTA'), {
  loading: () => <div className="h-48 w-full animate-pulse rounded-3xl bg-indigo-100/40" aria-hidden />,
});

const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50/80" aria-hidden />,
});

export default function Home() {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [heroGridGlow, setHeroGridGlow] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroPointerRaf = useRef(0);
  const solutionsAmbient = useSolutionsAmbientMotion();

  const heroGlowReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleHeroPointerEnter = () => {
    if (heroGlowReducedMotion()) return;
    setHeroGridGlow(true);
  };

  const handleHeroPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (heroGlowReducedMotion()) return;
    const el = heroSectionRef.current;
    if (!el || heroPointerRaf.current) return;
    heroPointerRaf.current = requestAnimationFrame(() => {
      heroPointerRaf.current = 0;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
      const y = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
      el.style.setProperty('--hero-gx', `${x}%`);
      el.style.setProperty('--hero-gy', `${y}%`);
      el.style.setProperty('--hero-px', String(Math.min(1, Math.max(0, x / 100))));
      el.style.setProperty('--hero-py', String(Math.min(1, Math.max(0, y / 100))));
    });
  };

  const handleHeroPointerLeave = () => {
    const el = heroSectionRef.current;
    if (el) {
      el.style.setProperty('--hero-gx', '50%');
      el.style.setProperty('--hero-gy', '40%');
      el.style.setProperty('--hero-px', '0.5');
      el.style.setProperty('--hero-py', '0.4');
    }
    setHeroGridGlow(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip overflow-y-auto bg-white font-sans text-slate-900 antialiased">
      {/* Hero */}
      <section
        ref={heroSectionRef}
        className="relative z-10 overflow-hidden bg-white px-4 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-16 [content-visibility:auto]"
        style={
          {
            '--hero-gx': '50%',
            '--hero-gy': '40%',
            '--hero-px': '0.5',
            '--hero-py': '0.4',
          } as React.CSSProperties
        }
        onPointerEnter={handleHeroPointerEnter}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <HeroPremiumBackdrop gridGlowActive={heroGridGlow} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <div className="hero-enter text-center lg:text-left">
              <p className="relative z-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-white/80 backdrop-blur-md lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{tx.enterprise_software_electronics}</span>
                <span className="hidden h-1 w-1 shrink-0 rounded-full bg-indigo-300 sm:inline-block" aria-hidden />
                <span className="inline-flex rounded-full border border-indigo-200/90 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-900 shadow-sm ring-1 ring-indigo-500/10">{tx.from_discovery_to_rollout}</span>
              </p>

              <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:mt-6 lg:text-[3.35rem] xl:text-[3.85rem]">{tx.understand_your_workflow}{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent motion-safe:animate-hero-gradient-text-shift">{tx.build_what_fits}</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">{tx.we_pair_deep_operational_understanding}</p>

              <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
                {[
                  { label: tx.erp_manufacturing, Icon: Building2 },
                  { label: tx.web_genai, Icon: Sparkles },
                  { label: tx.mobile_apps, Icon: Smartphone },
                  { label: tx.zoho_integrations, Icon: Puzzle },
                  { label: tx.iot_firmware, Icon: Cpu },
                  { label: tx.pcb_product, Icon: CircuitBoard },
                ].map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="group inline-flex cursor-default items-center gap-2 rounded-full border border-slate-200/95 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-indigo-200 motion-safe:hover:shadow-[0_10px_28px_-10px_rgba(79,70,229,0.35)]"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-indigo-500 motion-safe:transition-transform group-hover:scale-105 group-hover:text-indigo-600" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/28 motion-safe:transition-all motion-safe:duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 motion-safe:active:scale-[0.98]"
                >{tx.get_started_today}<ArrowRight className="ml-2 h-5 w-5 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 shadow-sm motion-safe:transition-all motion-safe:duration-300 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md motion-safe:active:scale-[0.98]"
                >
                  <Eye className="h-[1.15rem] w-[1.15rem] opacity-80" aria-hidden />{tx.view_our_work}</Link>
              </div>

              <p className="mx-auto mt-10 max-w-lg text-center text-sm text-slate-500 lg:mx-0 lg:text-left">{tx.our_strongest_differentiator_we_invest}</p>
            </div>

            <div className="hero-enter [--hero-delay:0.1s]">
              <HeroWorkflowEditor />
            </div>
          </div>

          {/* Stats */}
          <div
            className="hero-enter mx-auto mt-14 grid max-w-4xl [--hero-delay:0.2s] grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6"
          >
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={COMPANY_METRICS[0].value} suffix={COMPANY_METRICS[0].suffix} duration={2800} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">{COMPANY_METRICS[0].label}</div>
            </div>
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={98} suffix="%" duration={2200} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">{tx.client_satisfaction}</div>
            </div>
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={24} suffix="/7" duration={1600} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">{tx.support_available}</div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose SavantX — services + tech */}
      <section
        ref={solutionsAmbient.sectionRef}
        className="solutions-mega-section-ring relative isolate z-10 overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 [content-visibility:auto] [contain-intrinsic-size:auto_900px]"
        style={
          {
            '--sol-sx': '50%',
            '--sol-sy': '28%',
            '--sol-px': '0',
            '--sol-py': '0',
          } as React.CSSProperties
        }
        {...solutionsAmbient.handlers}
      >
        <SolutionsMegaSectionBackdrop />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] backdrop-blur-sm sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white shadow-inner">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>{tx.our_solutions}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">{tx.excellence_in_every}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {' '}{tx.solution}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl px-2 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">{tx.from_powerful_software_to_intelligent}</p>
          </div>
          
          <div className="mb-16 lg:mb-20">
            <SolutionsShowcase />
          </div>

          <AboutExcellenceSection />

          {/* Technology Stack */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 animate-fade-in-up">{tx.technologies_we_master}</h3>
            <p className="text-lg text-slate-600 mb-12 animate-fade-in-up delay-200">{tx.cutting_edge_tools_and_frameworks}</p>
            
            {(() => {
              const softwareTechnologies = [
                { name: tx.react, icon: "/images/icons/react1.png" },
                { name: tx.next_js, icon: "/images/icons/nextjs.png" },
                { name: tx.typescript, icon: "/images/icons/ts1.jpeg" },
                { name: tx.node_js, icon: "/images/icons/nodejs1.png" },
                { name: tx.python, icon: "/images/icons/python1.png" },
                { name: "AWS", icon: "/images/icons/aws1.png" },
                { name: tx.docker, icon: "/images/icons/docker.png" },
                { name: tx.mongodb, icon: "/images/icons/mongodb.png" },
                { name: tx.postgresql, icon: "/images/icons/postgresql.png" },
                { name: tx.redis, icon: "/images/icons/redis.png" },
                { name: tx.graphql, icon: "/images/icons/Graphql1.png" },
                { name: tx.kubernetes, icon: "/images/icons/kubernatives.png" },
                { name: tx.freertos, icon: "/images/icons/freeRtos.jpeg" },
                { name: tx.git, icon: "/images/icons/github.png" },
                { name: tx.tensorflow, icon: "/images/icons/tensorFlow.jpeg" },
                { name: tx.pytorch, icon: "/images/icons/pytorch.png" },
                { name: tx.genai, icon: "/images/icons/genai.png" },
                { name: tx.langchain, icon: "/images/icons/langchain.png" }
              ];

              const hardwareTechnologies = [
                { name: "ESP32", icon: "/images/icons/esp32_1.jpeg" },
                { name: tx.arduino, icon: "/images/icons/ardunio1.png" },
                { name: "STM32", icon: "/images/icons/stm32.jpeg" },
                { name: tx.raspberry_pi, icon: "/images/icons/raspberrypi.jpeg" },
                { name: tx.pic_avr, icon: "/images/icons/AVR.png" },
                { name: tx.zephyr_rtos, icon: "/images/icons/Zephyr.jpeg" },
                { name: tx.aws_iot_core, icon: "/images/icons/AwsIot.jpeg" },
                { name: tx.google_cloud_iot, icon: "/images/icons/googleCloud.png" },
                { name: tx.kicad, icon: "/images/icons/kicad1.png" },
                { name: tx.diptrace, icon: "/images/icons/Diptrace.jpeg" },
                { name: tx.solidworks, icon: "/images/icons/SolidWorks.png" }
              ];

              // Interleave: 3 software + 3 hardware per row
              const interleavedTechnologies = [];
              let softIndex = 0;
              let hardIndex = 0;

              while (softIndex < softwareTechnologies.length || hardIndex < hardwareTechnologies.length) {
                // Add 3 software technologies
                for (let i = 0; i < 3 && softIndex < softwareTechnologies.length; i++) {
                  interleavedTechnologies.push({ ...softwareTechnologies[softIndex], type: 'software' });
                  softIndex++;
                }
                // Add 3 hardware technologies
                for (let i = 0; i < 3 && hardIndex < hardwareTechnologies.length; i++) {
                  interleavedTechnologies.push({ ...hardwareTechnologies[hardIndex], type: 'hardware' });
                  hardIndex++;
                }
              }

              // Show 3 rows (18 items) by default, all when expanded
              const displayedTechnologies = showAllTechnologies ? interleavedTechnologies : interleavedTechnologies.slice(0, 18);
              
              return (
                <div className="mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Category Labels as Grid Items */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex items-center gap-3 border-l-4 border-blue-600 pl-4">
                      <h4 className="text-base md:text-lg font-bold text-blue-600">{tx.software_technologies}</h4>
                    </div>
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex items-center gap-3 border-l-4 border-orange-600 pl-4">
                      <h4 className="text-base md:text-lg font-bold text-orange-600">{tx.hardware_iot_technology}</h4>
                    </div>

                    {/* Technology Cards */}
                    {displayedTechnologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border ${
                          tech.type === 'software' 
                            ? 'border-blue-200/40 hover:border-blue-300/60' 
                            : 'border-orange-200/40 hover:border-orange-300/60'
                        } hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out`}
                        style={{
                          animation: 'fadeInUp 0.6s ease-out forwards',
                          animationDelay: `${index * 0.05}s`,
                          opacity: 0
                        }}
                      >
                        <div className="h-20 w-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={tech.icon} 
                            alt={`${tech.name} icon`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <div className={`text-sm font-semibold ${
                          tech.type === 'software' ? 'text-blue-700' : 'text-orange-700'
                        }`}>
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
            
            {/* See More/Less Button */}
            <button
              onClick={() => setShowAllTechnologies(!showAllTechnologies)}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>{showAllTechnologies ? tx.show_less : tx.see_more_technologies}</span>
              <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${showAllTechnologies ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* CTA */}
          <HomeMegaSectionCTA onScheduleConsultation={() => setIsConsultationOpen(true)} />
        </div>
      </section>

      {/* Companies Section */}
      <CompaniesSection />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {isConsultationOpen && <ConsultationDialog source="Home page" onClose={() => setIsConsultationOpen(false)} />}

      <Footer />
    </div>
  );
}
