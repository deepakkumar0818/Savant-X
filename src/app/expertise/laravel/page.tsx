'use client';

import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Laravel Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🔥</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">⚙️</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🚀</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">⚡</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">🔥</span>
              Laravel Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Laravel
              <span className="block text-blue-600 mt-2">Development</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We build robust, scalable web applications using Laravel framework. 
              From simple APIs to complex enterprise solutions, we deliver exceptional PHP applications with modern architecture.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Laravel Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Secure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6-20</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">PHP 8.2+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Latest Version</div>
            </div>
          </div>
        </div>
      </section>

      {/* Laravel Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Laravel
              <span className="block text-blue-600 mt-2">Solutions</span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{service.icon}</span>
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
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{service.features_count}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Laravel Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete Laravel
              <span className="block text-blue-600 mt-2">Technology Stack</span>
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
                        <div className="text-2xl">{tool.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Laravel Development
              <span className="block text-blue-600 mt-2">Process</span>
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

      {/* Laravel Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Laravel Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Powerful
              <span className="block text-blue-600 mt-2">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel provides a comprehensive set of features for modern web application development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laravelFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-blue-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete Laravel development deliverables that provide everything needed for successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{deliverable.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Why Laravel
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Laravel</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel provides significant advantages for building modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Perfect For
              <span className="block text-blue-600 mt-2">These Projects</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Laravel is ideal for a wide range of web application development scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{useCase.icon}</span>
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Laravel Project
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
