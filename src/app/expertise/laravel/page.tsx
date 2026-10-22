import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Server } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Laravel Development',
  description:
    'Robust, secure Laravel and PHP web applications and APIs built by SavantX Technologies.',
  path: '/expertise/laravel',
});

export default function LaravelPage() {

  const laravelServices = [
    {
      id: 'web-apps',
      title: 'Laravel Web Applications',
      icon: '💻',
      description: 'Robust, scalable web applications built with Laravel framework for optimal performance and security.',
      features: ['MVC Architecture', 'Eloquent ORM', 'Authentication System', 'API Development', 'Queue Management', 'Testing Suite'],
      pricing: 'Starting at $6,000',
      timeline: '6-12 weeks',
      complexity: 'Advanced',
      features_count: '50+'
    },
    {
      id: 'api-development',
      title: 'Laravel API Development',
      icon: '🔗',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and authentication.',
      features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Rate Limiting', 'OAuth Authentication', 'API Versioning'],
      pricing: 'Starting at $4,500',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      features_count: '30+'
    },
    {
      id: 'ecommerce',
      title: 'Laravel E-commerce',
      icon: '🛒',
      description: 'Feature-rich e-commerce platforms with payment integration and order management.',
      features: ['Product Management', 'Shopping Cart', 'Payment Gateway', 'Order Processing', 'Inventory Management', 'Admin Dashboard'],
      pricing: 'Starting at $15,000',
      timeline: '10-20 weeks',
      complexity: 'Enterprise',
      features_count: '100+'
    },
    {
      id: 'cms-platforms',
      title: 'Laravel CMS Platforms',
      icon: '📝',
      description: 'Custom content management systems with flexible content structures and admin interfaces.',
      features: ['Content Management', 'User Management', 'Role-Based Access', 'Media Library', 'SEO Tools', 'Multi-Language Support'],
      pricing: 'Starting at $8,000',
      timeline: '8-16 weeks',
      complexity: 'Enterprise',
      features_count: '75+'
    }
  ];

  const laravelEcosystem = [
    {
      category: 'Core Framework',
      tools: [
        { name: 'Laravel Framework', icon: '🔥', description: 'Modern PHP framework for web artisans' },
        { name: 'Eloquent ORM', icon: '🗄️', description: 'Beautiful, simple ActiveRecord implementation' },
        { name: 'Artisan CLI', icon: '⚡', description: 'Command-line interface for Laravel' },
        { name: 'Blade Templates', icon: '🎨', description: 'Lightweight template engine' }
      ]
    },
    {
      category: 'Authentication & Security',
      tools: [
        { name: 'Laravel Sanctum', icon: '🔐', description: 'Lightweight API authentication' },
        { name: 'Laravel Passport', icon: '🛡️', description: 'OAuth2 server implementation' },
        { name: 'Laravel Breeze', icon: '💨', description: 'Minimal authentication scaffolding' },
        { name: 'Laravel Jetstream', icon: '✈️', description: 'Beautiful authentication scaffolding' }
      ]
    },
    {
      category: 'Development Tools',
      tools: [
        { name: 'Laravel Mix', icon: '🎵', description: 'Asset compilation and bundling' },
        { name: 'Laravel Valet', icon: '🚗', description: 'Laravel development environment' },
        { name: 'Laravel Telescope', icon: '🔭', description: 'Debug and monitor your application' },
        { name: 'Laravel Horizon', icon: '🌅', description: 'Dashboard and configuration for queues' }
      ]
    },
    {
      category: 'Testing & Deployment',
      tools: [
        { name: 'PHPUnit', icon: '🧪', description: 'Testing framework for PHP' },
        { name: 'Laravel Dusk', icon: '🌅', description: 'Browser automation and testing' },
        { name: 'Laravel Forge', icon: '🔨', description: 'Server provisioning and deployment' },
        { name: 'Laravel Envoyer', icon: '📤', description: 'Zero-downtime deployment' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Project Planning',
      description: 'Requirements analysis and Laravel project architecture planning.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Database Design',
      description: 'Designing database schema and relationships using Eloquent models.',
      duration: '1-2 weeks',
      icon: '🗄️'
    },
    {
      step: '03',
      title: 'Backend Development',
      description: 'Building Laravel backend with controllers, models, and business logic.',
      duration: '3-8 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'API Development',
      description: 'Creating RESTful or GraphQL APIs with authentication and documentation.',
      duration: '2-4 weeks',
      icon: '🔗'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization.',
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deployment & Maintenance',
      description: 'Production deployment and ongoing maintenance support.',
      duration: '1 week',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Laravel Application',
      description: 'Fully functional Laravel application with modern architecture.',
      icon: '🔥'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API documentation with examples and testing.',
      icon: '📚'
    },
    {
      title: 'Database Schema',
      description: 'Optimized database design with migrations and seeders.',
      icon: '🗄️'
    },
    {
      title: 'Testing Suite',
      description: 'Complete testing suite with unit and feature tests.',
      icon: '🧪'
    },
    {
      title: 'Admin Panel',
      description: 'Custom admin interface for content and user management.',
      icon: '🎛️'
    },
    {
      title: 'Deployment Setup',
      description: 'Production-ready deployment configuration and documentation.',
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      title: 'Elegant Syntax',
      description: 'Clean, expressive syntax that makes development enjoyable and efficient.',
      icon: '✨'
    },
    {
      title: 'Rich Ecosystem',
      description: 'Extensive package ecosystem and Laravel-specific tools.',
      icon: '🌐'
    },
    {
      title: 'Built-in Security',
      description: 'Built-in security features including CSRF protection and encryption.',
      icon: '🔒'
    },
    {
      title: 'Scalable Architecture',
      description: 'Modular architecture that scales from small projects to enterprise applications.',
      icon: '📈'
    },
    {
      title: 'Active Community',
      description: 'Large, active community with extensive documentation and support.',
      icon: '👥'
    },
    {
      title: 'Rapid Development',
      description: 'Artisan commands and scaffolding tools for rapid application development.',
      icon: '⚡'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Applications',
      description: 'Software-as-a-Service applications with multi-tenancy and subscription management.',
      icon: '☁️'
    },
    {
      title: 'Enterprise Web Apps',
      description: 'Complex enterprise applications with advanced business logic.',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Online stores with payment processing and inventory management.',
      icon: '🛒'
    },
    {
      title: 'Content Management',
      description: 'Custom CMS platforms with flexible content structures.',
      icon: '📝'
    },
    {
      title: 'API Services',
      description: 'Backend API services for mobile and web applications.',
      icon: '🔗'
    },
    {
      title: 'Financial Systems',
      description: 'Banking and financial applications with high security requirements.',
      icon: '💰'
    }
  ];

  const laravelFeatures = [
    {
      title: 'Eloquent ORM',
      description: 'Beautiful, simple ActiveRecord implementation for database operations.',
      icon: '🗄️'
    },
    {
      title: 'Blade Templating',
      description: 'Lightweight, powerful templating engine with inheritance and sections.',
      icon: '🎨'
    },
    {
      title: 'Queue System',
      description: 'Robust queue system for background job processing.',
      icon: '⏳'
    },
    {
      title: 'Event Broadcasting',
      description: 'Real-time event broadcasting using WebSockets.',
      icon: '📡'
    },
    {
      title: 'Task Scheduling',
      description: 'Built-in task scheduler for cron-like job scheduling.',
      icon: '⏰'
    },
    {
      title: 'Caching System',
      description: 'Flexible caching system supporting multiple cache drivers.',
      icon: '💾'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Laravel Development"
        eyebrowIcon={Server}
        title="Laravel"
        highlight="Development"
        description="We build robust, scalable web applications using Laravel framework. From simple APIs to complex enterprise solutions, we deliver exceptional PHP applications with modern architecture."
        highlights={["Laravel Web Applications", "Laravel API Development", "Laravel E-commerce", "Laravel CMS Platforms"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "100%", label: "Secure" },
          { value: "6-20", label: "Week Delivery" },
          { value: "PHP 8.2+", label: "Latest Version" },
        ]}
      />

      {/* Laravel Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Laravel
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive Laravel development services for web applications, APIs, and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laravelServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={service.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 sm:grid-cols-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.features_count}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Features</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laravel Ecosystem */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Laravel Ecosystem
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Complete Laravel
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with the entire Laravel ecosystem to build robust and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {laravelEcosystem.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={tool.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{tool.name}</h4>
                          <p className="text-sm text-slate-600">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Laravel Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality Laravel applications delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
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

      {/* Laravel Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Laravel Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Powerful
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel provides a comprehensive set of features for modern web application development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laravelFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete Laravel development deliverables that provide everything needed for successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {deliverable.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {deliverable.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Why Laravel
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Laravel</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel provides significant advantages for building modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Use Cases
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Perfect For
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">These Projects</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel is ideal for a wide range of web application development scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {useCase.description}
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
            Ready to Build
            <span className="block text-blue-100 mt-2">Your Laravel App?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a powerful Laravel application that delivers exceptional performance and scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Laravel Project
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
