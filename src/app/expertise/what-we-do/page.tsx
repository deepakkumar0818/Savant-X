import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY_METRICS } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { LayoutGrid } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'What We Do',
  description:
    'Websites, web applications, mobile apps and e-commerce built by SavantX Technologies to help businesses grow.',
  path: '/expertise/what-we-do',
});

export default function WhatWeDoPage() {

  const services = [
    {
      id: 'websites',
      title: 'Websites',
      icon: '✈️',
      description: 'Professional websites that establish credibility and drive business growth.',
      features: ['Corporate Websites', 'Portfolio Sites', 'Landing Pages', 'Blog Platforms'],
      href: '/expertise/websites',
      color: 'blue'
    },
    {
      id: 'webapps',
      title: 'Web Apps',
      icon: '💎',
      description: 'Custom web applications that streamline your business operations.',
      features: ['SaaS Platforms', 'Admin Dashboards', 'E-commerce Solutions', 'CRM Systems'],
      href: '/expertise/web-apps',
      color: 'purple'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      icon: '📱',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter Development'],
      href: '/expertise/mobile-apps',
      color: 'green'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: '🛒',
      description: 'Complete e-commerce solutions that convert visitors into customers.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      href: '/expertise/ecommerce',
      color: 'orange'
    },
    {
      id: 'data',
      title: 'Data Visualization',
      icon: '🔄',
      description: 'Interactive dashboards and data visualization solutions.',
      features: ['Business Intelligence', 'Analytics Dashboards', 'Real-time Data', 'Custom Reports'],
      href: '/expertise/zoho-integrations/zoho-analytics',
      color: 'cyan'
    }
  ];

  const expertise = [
    {
      category: 'Frontend Development',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: 'Backend Development',
      technologies: ['Node.js', 'Python', 'PHP', 'Java', 'PostgreSQL', 'MongoDB'],
      icon: '⚙️'
    },
    {
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin'],
      icon: '📱'
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless'],
      icon: '☁️'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business goals and requirements',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Creating a roadmap and technical architecture',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Crafting user-centered designs and experiences',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building with modern technologies and best practices',
      icon: '💻'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Testing, deployment, and go-live support',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="What We Do"
        eyebrowIcon={LayoutGrid}
        title="What We"
        highlight="Do Best"
        description="We are a full-service digital agency specializing in creating exceptional web experiences, mobile applications, and custom software solutions that drive business growth."
        highlights={["Websites", "Web Apps", "Mobile Apps", "E-commerce"]}
        stats={[
          { value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
          { value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: COMPANY_METRICS[1].label },
          { value: "5+", label: "Years Experience" },
          { value: "24/7", label: "Support" },
        ]}
      />

      {/* Services Grid */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Complete Digital
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From concept to launch, we provide end-to-end digital solutions that help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                <div className="group cursor-pointer">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      service.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      service.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      service.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      service.color === 'orange' ? 'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300' :
                      'from-cyan-100 to-cyan-200 group-hover:from-cyan-200 group-hover:to-cyan-300'
                    } rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                      <ServiceIcon emoji={service.icon} size="lg" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-200">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                        Learn More
                      </span>
                      <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Our Technical
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with cutting-edge technologies to deliver robust, scalable, and maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={area.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {area.category}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              How We
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Start Your
            <span className="block text-blue-100 mt-2">Next Project?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your ideas and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
                Schedule Demo
              </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
