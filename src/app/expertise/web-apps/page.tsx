'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function WebAppsPage() {
  const [activeTab, setActiveTab] = useState('overview');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating 3D Cubes */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg transform rotate-12 blur-sm animate-float"
          style={{
            top: '10%',
            left: '10%',
            transform: `rotate(${mousePosition.x * 0.02}deg) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animationDelay: '0s'
          }}
        ></div>
        
        <div 
          className="absolute w-24 h-24 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg transform -rotate-12 blur-sm animate-float"
          style={{
            top: '20%',
            right: '15%',
            transform: `rotate(${mousePosition.x * -0.015}deg) translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`,
            animationDelay: '1s'
          }}
        ></div>

        <div 
          className="absolute w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-cyan-600/15 rounded-xl transform rotate-45 blur-sm animate-float"
          style={{
            bottom: '20%',
            left: '20%',
            transform: `rotate(${mousePosition.x * 0.01 + 45}deg) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * -0.005}px)`,
            animationDelay: '2s'
          }}
        ></div>

        <div 
          className="absolute w-28 h-28 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-lg transform -rotate-45 blur-sm animate-float"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `rotate(${mousePosition.x * -0.02 - 45}deg) translate(${mousePosition.x * -0.012}px, ${mousePosition.y * -0.012}px)`,
            animationDelay: '3s'
          }}
        ></div>

        {/* Floating Spheres */}
        <div 
          className="absolute w-16 h-16 bg-gradient-to-br from-green-400/25 to-green-600/25 rounded-full blur-sm animate-float"
          style={{
            top: '60%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.006}px, ${mousePosition.y * 0.006}px)`,
            animationDelay: '1.5s'
          }}
        ></div>

        <div 
          className="absolute w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-sm animate-float"
          style={{
            top: '30%',
            right: '5%',
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`,
            animationDelay: '2.5s'
          }}
        ></div>

        {/* Large Background Blurs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">💎</span>
              Web Application Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Custom Web
              <span className="block text-blue-600 mt-2">Applications</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We build powerful, scalable web applications that streamline your business operations, 
              enhance productivity, and drive growth through innovative technology solutions.
            </p>
          </div>

          {/* 3D Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '150+', label: 'Web Apps Built', color: 'blue' },
              { number: '99.9%', label: 'Uptime Guarantee', color: 'green' },
              { number: '4-12', label: 'Week Delivery', color: 'purple' },
              { number: '24/7', label: 'Support', color: 'orange' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group"
                style={{
                  transform: `translate(${mousePosition.x * (0.001 * (index + 1))}px, ${mousePosition.y * (0.001 * (index + 1))}px)`
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 text-center group-hover:scale-105">
                  <div className={`text-3xl font-bold mb-2 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Web Application
              <span className="block text-blue-600 mt-2">Types</span>
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <span className="text-4xl">{app.icon}</span>
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
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Modern
              <span className="block text-blue-600 mt-2">Technologies</span>
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
                  <div className="text-3xl mb-3">{tech.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Key Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Why Choose Our
              <span className="block text-blue-600 mt-2">Web Applications</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              How We Build
              <span className="block text-blue-600 mt-2">Web Applications</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
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
