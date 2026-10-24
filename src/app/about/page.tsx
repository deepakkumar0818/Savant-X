'use client';

import tx from '@/content/text/app/about/page.json';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/Footer';
import ConsultationDialog from '@/components/forms/ConsultationDialog';

import AboutPageHero from '@/components/about/AboutPageHero';
import AboutJourneySection from '@/components/about/AboutJourneySection';
import AboutValuesSection from '@/components/about/AboutValuesSection';

export default function About() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <AboutPageHero />

      <AboutJourneySection />

      <AboutValuesSection />

      {/* Professional Technology Stack Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{tx.technology_stack}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.cutting_edge_tools_and_frameworks}</p>
          </div>

          {(() => {
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
          <div className="text-center">
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
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#060b2b] px-6 py-16 text-center sm:py-20">
          <Image src="/images/zoho/cta-wave.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
          <div className="relative">
            <p className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">{tx.let_s_work_together}</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.ready_to_work_with_us}</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">{tx.let_s_discuss_your_project}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                {tx.start_your_project}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <CalendarDays className="h-4 w-4" aria-hidden />
                {tx.schedule_consultation}
              </button>
            </div>
          </div>
        </div>
      </section>

      {isConsultationOpen && <ConsultationDialog source="About page" onClose={() => setIsConsultationOpen(false)} />}

      <Footer />
    </div>
  );
}