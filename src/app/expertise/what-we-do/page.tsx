'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

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
      href: '/expertise/data-visualization',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Expertise
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              What We
              <span className="block text-blue-600 mt-2">Do Best</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We are a full-service digital agency specializing in creating exceptional web experiences, 
              mobile applications, and custom software solutions that drive business growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete Digital
              <span className="block text-blue-600 mt-2">Solutions</span>
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
                      <span className="text-3xl">{service.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Technical
              <span className="block text-blue-600 mt-2">Expertise</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{area.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              How We
              <span className="block text-blue-600 mt-2">Work</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
                Schedule Demo
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
