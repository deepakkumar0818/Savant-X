'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Company names that will rotate
const companyNames = [
  "Legal Palz",
  "St. Paul's Sr. Sec. School",
  "Sansani Express",
  "RV Logistics",
  "JDN Technologies",
  "Anoop Automations",
  "Fleet Logic",
  "The Canophilla"
];

export default function CompaniesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotate company names every 3 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Start transition effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companyNames.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 3000); // Changed from 5000 to 3000 (3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 pb-0 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full animate-float-gentle blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full animate-float-gentle delay-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/15 rounded-full animate-float-gentle delay-1000 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-scale-in shadow-lg">
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted Partners
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight animate-fade-in-up">
            We design, build and ship
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              world-class digital products
            </span>
            for forward-thinking brands.
          </h2>
        </div>

        {/* Companies Display - 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
          {Array.from({ length: 5 }, (_, index) => {
            const companyIndex = (currentIndex + index) % companyNames.length;
            return (
              <div
                key={`${currentIndex}-${index}`}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 animate-fade-in-up transition-all duration-600 ease-in-out h-32 flex items-center justify-center ${
                  isTransitioning 
                    ? 'opacity-0 scale-95 translate-y-2' 
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="text-center w-full">
                  <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 transition-all duration-600 ease-in-out ${
                    isTransitioning 
                      ? 'opacity-0 transform translate-y-1' 
                      : 'opacity-100 transform translate-y-0'
                  }`}>
                    {companyNames[companyIndex]}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full transition-all duration-600 ease-in-out ${
                    isTransitioning 
                      ? 'opacity-0 scale-75' 
                      : 'opacity-100 scale-100 animate-pulse'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-600 relative z-20">
          <p className="text-slate-600 text-lg mb-6">
            Join these industry leaders in transforming your digital presence
          </p>
          <Link 
            href="/contact" 
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl relative z-30 inline-block"
          >
            <span className="flex items-center justify-center gap-2">
              Start Your Project
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
