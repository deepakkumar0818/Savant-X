'use client';

import Link from 'next/link';
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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <AboutPageHero />

      <AboutJourneySection />

      <AboutValuesSection />

      {/* Professional Technology Stack Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Cutting-edge tools and frameworks we use to build exceptional digital solutions.
            </p>
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
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-blue-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how SavantX can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 ease-out font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 ease-out font-semibold text-lg transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </span>
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