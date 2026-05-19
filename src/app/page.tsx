'use client';

import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, Cpu, CircuitBoard, Eye, Puzzle, Smartphone, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';
import CompaniesSection from '@/components/CompaniesSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedCounter from '@/components/AnimatedCounter';
import HeroWorkflowEditor from '@/components/HeroWorkflowEditor';
import AboutExcellenceSection from '@/components/AboutExcellenceSection';
import SolutionsMegaSectionBackdrop, {
  useSolutionsAmbientMotion,
} from '@/components/solutions/SolutionsMegaSectionBackdrop';
import HomeMegaSectionCTA from '@/components/HomeMegaSectionCTA';
import HeroPremiumBackdrop from '@/components/hero/HeroPremiumBackdrop';

const heroShellVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

const heroColumnVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [heroGridGlow, setHeroGridGlow] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const solutionsAmbient = useSolutionsAmbientMotion();
  const reducedMotionPreference = useReducedMotion();

  const handleConsultationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConsultationFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...consultationFormData,
          service: 'Consultation Request',
          budget: ''
        }),
      });

      if (response.ok) {
        alert('Thank you for your consultation request! We will get back to you soon.');
        setIsConsultationOpen(false);
        setConsultationFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        alert('Sorry, there was an error. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error. Please try again or contact us directly.');
    }
  };

  // Software Services Data
  const softwareServices = [
    {
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies that deliver exceptional user experiences.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      features: [
        { icon: "⚡", title: "Progressive Web Apps", desc: "Lightning-fast performance" },
        { icon: "🔄", title: "Server-Side Rendering", desc: "SEO optimized" },
        { icon: "🔗", title: "API Integration", desc: "Seamless connectivity" },
        { icon: "📱", title: "Responsive Design", desc: "All devices covered" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile solutions that deliver native performance across iOS and Android platforms.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600",
      features: [
        { icon: "📱", title: "React Native", desc: "Cross-platform apps" },
        { icon: "🎯", title: "App Store Optimization", desc: "Maximum visibility" },
        { icon: "🔔", title: "Push Notifications", desc: "User engagement" },
        { icon: "⚡", title: "Native Performance", desc: "Optimized speed" }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise platforms including CRM, ERP manufacturing (which we do extensively), and custom business applications. We focus on understanding your business deeply so every solution fits your operations.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      features: [
        { icon: "🏭", title: "ERP & Manufacturing", desc: "Extensive ERP implementation" },
        { icon: "🏢", title: "CRM Systems", desc: "Customer management" },
        { icon: "📈", title: "Business Analytics", desc: "Performance insights" },
        { icon: "🎯", title: "Understand Your Business", desc: "Solutions that fit" }
      ]
    },
    {
      title: "Zoho Integration",
      description: "Seamless integration with Zoho's business suite including CRM customization, Creator apps, and workflow automation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-amber-500 to-yellow-600",
      features: [
        { icon: "🏢", title: "CRM Customization", desc: "Tailored CRM solutions" },
        { icon: "🛠️", title: "Creator Apps", desc: "Custom applications" },
        { icon: "🔄", title: "Workflow Automation", desc: "Process optimization" },
        { icon: "🔗", title: "Third-party Integration", desc: "Seamless connectivity" }
      ]
    }
  ];

  // Hardware Services Data
  const hardwareServices = [
    {
      title: "IoT & Embedded Systems",
      description: "Smart connected devices and embedded systems that bring intelligence to everyday objects and industrial applications.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      features: [
        { icon: "🌐", title: "Smart Sensors", desc: "Real-time monitoring" },
        { icon: "📡", title: "Wireless Connectivity", desc: "Seamless communication" },
        { icon: "🔋", title: "Power Management", desc: "Efficient energy use" },
        { icon: "🛡️", title: "Secure Protocols", desc: "Data protection" }
      ]
    },
    {
      title: "PCB Designing",
      description: "Custom printed circuit board design and layout services for electronic products with optimized performance and reliability.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
      features: [
        { icon: "🔧", title: "Custom PCB Layout", desc: "Optimized designs" },
        { icon: "⚡", title: "Signal Integrity", desc: "High-speed performance" },
        { icon: "🌡️", title: "Thermal Management", desc: "Heat dissipation" },
        { icon: "📐", title: "3D Modeling", desc: "Visual prototyping" }
      ]
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to manufacturing, including industrial design and market-ready solutions.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { icon: "💡", title: "Concept Design", desc: "Innovative ideas" },
        { icon: "🔬", title: "Prototyping", desc: "Rapid iteration" },
        { icon: "🏭", title: "Manufacturing", desc: "Production ready" },
        { icon: "📊", title: "Testing & Validation", desc: "Quality assurance" }
      ]
    },
    {
      title: "Firmware Development",
      description: "Low-level software development for microcontrollers and embedded systems with optimized performance and reliability.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      features: [
        { icon: "⚙️", title: "Real-time Systems", desc: "Precise timing" },
        { icon: "🔧", title: "Driver Development", desc: "Hardware control" },
        { icon: "🛡️", title: "Security Features", desc: "Protected systems" },
        { icon: "📈", title: "Performance Optimization", desc: "Efficient code" }
      ]
    }
  ];

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
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
    const y = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
    el.style.setProperty('--hero-gx', `${x}%`);
    el.style.setProperty('--hero-gy', `${y}%`);
    el.style.setProperty('--hero-px', String(Math.min(1, Math.max(0, x / 100))));
    el.style.setProperty('--hero-py', String(Math.min(1, Math.max(0, y / 100))));
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
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-white font-sans text-slate-900 antialiased">
      {/* Hero */}
      <section
        ref={heroSectionRef}
        className="relative z-10 overflow-hidden bg-white px-4 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-16"
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

        <motion.div
          className="relative z-10 mx-auto max-w-7xl"
          variants={heroShellVariants}
          initial={reducedMotionPreference === true ? false : 'hidden'}
          whileInView={reducedMotionPreference === true ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <motion.div variants={heroColumnVariants} className="text-center lg:text-left">
              <p className="animate-fade-in-up relative z-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-white/80 backdrop-blur-md lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Enterprise software &amp; electronics
                </span>
                <span className="hidden h-1 w-1 shrink-0 rounded-full bg-indigo-300 sm:inline-block" aria-hidden />
                <span className="inline-flex rounded-full border border-indigo-200/90 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-900 shadow-sm ring-1 ring-indigo-500/10">
                  From discovery to rollout
                </span>
              </p>

              <h1 className="animate-fade-in-up delay-100 mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:mt-6 lg:text-[3.35rem] xl:text-[3.85rem]">
                Understand your workflow.{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent motion-safe:animate-hero-gradient-text-shift">
                  Build what fits.
                </span>
              </h1>

              <p className="animate-fade-in-up delay-200 mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                We pair deep operational understanding with solid engineering—from CRM, ERP manufacturing, Zoho,
                GenAI and modern web/mobile to IoT, firmware, and PCB when the hardware edge matters.
              </p>

              <div className="animate-fade-in-up mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start motion-safe:[animation-delay:260ms]">
                {[
                  { label: 'ERP & Manufacturing', Icon: Building2 },
                  { label: 'Web & GenAI', Icon: Sparkles },
                  { label: 'Mobile apps', Icon: Smartphone },
                  { label: 'Zoho integrations', Icon: Puzzle },
                  { label: 'IoT & Firmware', Icon: Cpu },
                  { label: 'PCB & Product', Icon: CircuitBoard },
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

              <div className="animate-fade-in-up delay-300 mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/28 motion-safe:transition-all motion-safe:duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 motion-safe:active:scale-[0.98]"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 shadow-sm motion-safe:transition-all motion-safe:duration-300 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md motion-safe:active:scale-[0.98]"
                >
                  <Eye className="h-[1.15rem] w-[1.15rem] opacity-80" aria-hidden />
                  View Our Work
                </Link>
              </div>

              <p className="animate-fade-in-up delay-400 mx-auto mt-10 max-w-lg text-center text-sm text-slate-500 lg:mx-0 lg:text-left">
                Our strongest differentiator: we invest time understanding how your teams work—then ship systems that fit
                operations, not the other way around.
              </p>
            </motion.div>

            <motion.div variants={heroColumnVariants}>
              <HeroWorkflowEditor />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={heroColumnVariants}
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6"
          >
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={200} suffix="+" duration={2800} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">Projects Completed</div>
            </div>
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={98} suffix="%" duration={2200} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">Client Satisfaction</div>
            </div>
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold tabular-nums text-transparent md:text-[2rem] motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-[-2px]">
                <AnimatedCounter end={24} suffix="/7" duration={1600} />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Why Choose SavantX — services + tech */}
      <section
        className="solutions-mega-section-ring relative isolate z-10 overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12"
        {...solutionsAmbient.handlers}
      >
        <SolutionsMegaSectionBackdrop
          spotlight={solutionsAmbient.spotlight}
          parallax={solutionsAmbient.parallax}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl"
          initial={{ opacity: reducedMotionPreference === true ? 1 : 0, y: reducedMotionPreference === true ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px 0px -72px 0px' }}
          transition={{ duration: reducedMotionPreference === true ? 0 : 0.88, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] backdrop-blur-sm sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white shadow-inner">
                <svg className="h-3.5 w-3.5 motion-safe:animate-pulse" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Why Choose SavantX?
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15] animate-fade-in-up">
              Excellence in Every
              <span className="animate-hero-gradient-text-shift bg-[length:200%_auto] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {' '}
                Solution
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl px-2 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl animate-fade-in-up delay-200">
              We learn how your business runs first—then pair that clarity with modern software, Zoho and ERP depth, and hardware when it matters.
            </p>
          </div>
          
          {/* Software & Hardware Services Grid */}
          <div className="mb-10 grid grid-cols-1 gap-8 sm:gap-10 lg:mb-16 lg:grid-cols-2 lg:gap-12">
            {/* Software Services Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <p className="mb-2 inline-flex rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-800">
                  Code &amp; cloud
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Software</span>{' '}
                  <span className="text-slate-800">Solutions</span>
                </h3>
                <p className="mt-2 text-base text-slate-600 sm:text-lg">Modern apps, integrations, and platforms your teams actually use.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {softwareServices.slice(0, showAllServices ? 4 : 3).map((service, index) => (
                  <div
                    key={index}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white/92 p-5 shadow-[0_22px_55px_-28px_rgba(30,58,138,0.2)] ring-1 ring-white/95 backdrop-blur-md motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_60px_-22px_rgba(79,70,229,0.28)] sm:rounded-3xl sm:p-6 lg:p-8 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[3px] before:bg-gradient-to-r before:from-blue-500 before:to-indigo-600`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-${service.gradient.split(' ')[2]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-start gap-6 mb-6 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                        {service.icon}
                </div>
                      <div className="flex-1 min-h-[120px] flex flex-col">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed flex-1">
                          {service.description}
                  </p>
                </div>
              </div>
              
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 group-hover:bg-blue-50/50 transition-colors duration-300">
                    <span className="text-lg">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                ))}
              </div>
            </div>

            {/* Hardware Services Column */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <p className="mb-2 inline-flex rounded-full border border-orange-200/80 bg-orange-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-900">
                  Devices &amp; boards
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Hardware</span>{' '}
                  <span className="text-slate-800">Solutions</span>
                </h3>
                <p className="mt-2 text-base text-slate-600 sm:text-lg">Firmware, connectivity, and PCB design when the product is physical.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {hardwareServices.slice(0, showAllServices ? 4 : 3).map((service, index) => (
                  <div
                    key={index}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white/92 p-6 shadow-[0_22px_55px_-28px_rgba(194,65,12,0.14)] ring-1 ring-white/95 backdrop-blur-md motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_60px_-22px_rgba(249,115,22,0.22)] sm:rounded-3xl sm:p-8 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[3px] before:bg-gradient-to-r before:from-orange-500 before:to-rose-600`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-${service.gradient.split(' ')[2]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6 flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                        {service.icon}
                </div>
                      <div className="flex-1 min-h-0 sm:min-h-[120px] flex flex-col">
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h4>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed flex-1">
                          {service.description}
                  </p>
                </div>
              </div>
              
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 group-hover:bg-orange-50/50 transition-colors duration-300">
                    <span className="text-lg">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                ))}
              </div>
            </div>
          </div>

          {/* Single Show More Button */}
          {!showAllServices && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllServices(true)}
                className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Show More Services
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          )}

          <AboutExcellenceSection />

          {/* Technology Stack */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 animate-fade-in-up">Technologies We Master</h3>
            <p className="text-lg text-slate-600 mb-12 animate-fade-in-up delay-200">Cutting-edge tools and frameworks for modern development</p>
            
            {(() => {
              const softwareTechnologies = [
                { name: "React", icon: "/images/icons/react1.png" },
                { name: "Next.js", icon: "/images/icons/nextjs.png" },
                { name: "TypeScript", icon: "/images/icons/ts1.jpeg" },
                { name: "Node.js", icon: "/images/icons/nodejs1.png" },
                { name: "Python", icon: "/images/icons/python1.png" },
                { name: "AWS", icon: "/images/icons/aws1.png" },
                { name: "Docker", icon: "/images/icons/docker.png" },
                { name: "MongoDB", icon: "/images/icons/mongodb.png" },
                { name: "PostgreSQL", icon: "/images/icons/postgresql.png" },
                { name: "Redis", icon: "/images/icons/redis.png" },
                { name: "GraphQL", icon: "/images/icons/Graphql1.png" },
                { name: "Kubernetes", icon: "/images/icons/kubernatives.png" },
                { name: "FreeRTOS", icon: "/images/icons/freeRtos.jpeg" },
                { name: "Git", icon: "/images/icons/github.png" },
                { name: "TensorFlow", icon: "/images/icons/tensorFlow.jpeg" },
                { name: "PyTorch", icon: "/images/icons/pytorch.png" },
                { name: "GenAI", icon: "/images/icons/genai.png" },
                { name: "Langchain", icon: "/images/icons/langchain.png" }
              ];

              const hardwareTechnologies = [
                { name: "ESP32", icon: "/images/icons/esp32_1.jpeg" },
                { name: "Arduino", icon: "/images/icons/ardunio1.png" },
                { name: "STM32", icon: "/images/icons/stm32.jpeg" },
                { name: "Raspberry Pi", icon: "/images/icons/raspberrypi.jpeg" },
                { name: "PIC / AVR", icon: "/images/icons/AVR.png" },
                { name: "Zephyr RTOS", icon: "/images/icons/Zephyr.jpeg" },
                { name: "AWS IoT Core", icon: "/images/icons/AwsIot.jpeg" },
                { name: "Google Cloud IoT", icon: "/images/icons/googleCloud.png" },
                { name: "KiCAD", icon: "/images/icons/kicad1.png" },
                { name: "DipTrace", icon: "/images/icons/Diptrace.jpeg" },
                { name: "SolidWorks", icon: "/images/icons/SolidWorks.png" }
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
                      <h4 className="text-base md:text-lg font-bold text-blue-600">
                        Software Technologies
                      </h4>
                    </div>
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex items-center gap-3 border-l-4 border-orange-600 pl-4">
                      <h4 className="text-base md:text-lg font-bold text-orange-600">
                        Hardware & IoT Technology
                      </h4>
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
              <span>{showAllTechnologies ? 'Show Less' : 'See More Technologies'}</span>
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
        </motion.div>
      </section>

      {/* Companies Section */}
      <CompaniesSection />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Schedule a Consultation</h3>
                <p className="text-blue-100 text-sm">Let&apos;s discuss how we can help your business grow</p>
              </div>
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleConsultationSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={consultationFormData.name}
                    onChange={handleConsultationInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-slate-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={consultationFormData.email}
                    onChange={handleConsultationInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-slate-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={consultationFormData.company}
                    onChange={handleConsultationInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-slate-900"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={consultationFormData.phone}
                    onChange={handleConsultationInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-slate-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your project <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={consultationFormData.message}
                  onChange={handleConsultationInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none text-slate-900"
                  placeholder="Describe your project requirements, goals, and any specific challenges you'd like to discuss..."
                />
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
