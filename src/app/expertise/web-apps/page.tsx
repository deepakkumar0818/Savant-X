'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { AppWindow } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function WebAppsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const webAppTypes = [
    {
      id: 'saas',
      title: 'SaaS Platforms',
      icon: '☁️',
      description: 'Complete Software-as-a-Service solutions with user management, billing, and analytics.',
      features: ['User Authentication', 'Subscription Management', 'Payment Processing', 'Analytics Dashboard', 'API Integration', 'Multi-tenancy'],
      pricing: 'Starting at $15,000',
      timeline: '8-12 weeks',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'dashboard',
      title: 'Admin Dashboards',
      icon: '📊',
      description: 'Comprehensive admin panels for managing business operations and data.',
      features: ['Data Visualization', 'User Management', 'Content Management', 'Report Generation', 'Real-time Updates', 'Role-based Access'],
      pricing: 'Starting at $8,000',
      timeline: '4-6 weeks',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'crm',
      title: 'CRM Systems',
      icon: '👥',
      description: 'Customer relationship management systems to streamline sales and support.',
      features: ['Lead Management', 'Contact Database', 'Sales Pipeline', 'Email Integration', 'Task Management', 'Reporting Tools'],
      pricing: 'Starting at $12,000',
      timeline: '6-8 weeks',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platforms',
      icon: '🛒',
      description: 'Full-featured online stores with inventory management and payment processing.',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Inventory Tracking', 'Customer Portal'],
      pricing: 'Starting at $10,000',
      timeline: '6-10 weeks',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern UI library', color: 'blue' },
    { name: 'Next.js', icon: '⚡', description: 'Full-stack framework', color: 'black' },
    { name: 'Node.js', icon: '🟢', description: 'Backend runtime', color: 'green' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe development', color: 'blue' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Reliable database', color: 'blue' },
    { name: 'Redis', icon: '🔴', description: 'Caching solution', color: 'red' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure', color: 'orange' },
    { name: 'Docker', icon: '🐳', description: 'Containerization', color: 'blue' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business requirements and technical specifications.',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Creating scalable system architecture and database design.',
      duration: '1-2 weeks',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and user experience flows.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building the application with modern technologies and best practices.',
      duration: '4-8 weeks',
      icon: '💻'
    },
    {
      step: '05',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and deployment to production environment.',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from day one with cloud-native architecture.',
      icon: '📈'
    },
    {
      title: 'Real-time Updates',
      description: 'Live data synchronization and real-time notifications.',
      icon: '⚡'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with encryption and authentication.',
      icon: '🔒'
    },
    {
      title: 'Mobile Responsive',
      description: 'Perfect experience across all devices and screen sizes.',
      icon: '📱'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs.',
      icon: '🔌'
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and business intelligence features.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Web Application Development"
        eyebrowIcon={AppWindow}
        title="Custom Web"
        highlight="Applications"
        description="We build powerful, scalable web applications that streamline your business operations, enhance productivity, and drive growth through innovative technology solutions."
        highlights={["SaaS Platforms", "Admin Dashboards", "CRM Systems", "E-commerce Platforms"]}
      />

      {/* Web App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Web Application
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From SaaS platforms to custom business applications, we deliver solutions that transform your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppTypes.map((app, index) => (
              <div 
                key={app.id} 
                className="group"
                style={{
                  transform: `translateY(${mousePosition.y * (0.002 * (index + 1))}px)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header with 3D Icon */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <ServiceIcon emoji={app.icon} size="none" className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {app.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{app.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{app.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Modern
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge technologies to build robust, scalable, and maintainable web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `rotateY(${mousePosition.x * (0.001 * (index + 1))}deg) translateZ(${mousePosition.y * 0.001}px)`
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-110">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Key Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Why Choose Our
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Web Applications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.001}deg) rotateY(${mousePosition.x * 0.001}deg)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              How We Build
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Web Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process ensures your web application is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `translateY(${mousePosition.y * (0.001 * (index + 1))}px) rotateZ(${mousePosition.x * (0.002 * (index + 1))}deg)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-blue-600">{step.duration}</div>
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
            Ready to Build Your
            <span className="block text-blue-100 mt-2">Custom Web App?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your requirements and create a powerful web application that transforms your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
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
