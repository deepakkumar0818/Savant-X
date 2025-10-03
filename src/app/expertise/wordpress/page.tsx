'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function WordPressPage() {
  const [activeType, setActiveType] = useState('custom-themes');

  const wordpressServices = [
    {
      id: 'custom-themes',
      title: 'Custom WordPress Themes',
      icon: '🎨',
      description: 'Bespoke WordPress themes designed and developed to match your brand and business requirements.',
      features: ['Responsive Design', 'Custom Layouts', 'SEO Optimized', 'Performance Optimized', 'Cross-Browser Compatible', 'Accessibility Compliant'],
      pricing: 'Starting at $3,500',
      timeline: '3-6 weeks',
      complexity: 'Advanced',
      features_count: '25+'
    },
    {
      id: 'plugin-development',
      title: 'WordPress Plugin Development',
      icon: '🔌',
      description: 'Custom WordPress plugins to extend functionality and add unique features to your website.',
      features: ['Custom Functionality', 'Database Integration', 'Admin Interface', 'Security Features', 'API Integration', 'Documentation'],
      pricing: 'Starting at $2,500',
      timeline: '2-5 weeks',
      complexity: 'Advanced',
      features_count: '20+'
    },
    {
      id: 'ecommerce-woocommerce',
      title: 'WooCommerce Development',
      icon: '🛒',
      description: 'Complete e-commerce solutions using WooCommerce with custom features and integrations.',
      features: ['Product Management', 'Payment Gateway', 'Shipping Integration', 'Inventory Management', 'Order Processing', 'Analytics'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      complexity: 'Enterprise',
      features_count: '40+'
    },
    {
      id: 'multisite-networks',
      title: 'WordPress Multisite',
      icon: '🌐',
      description: 'WordPress Multisite networks for managing multiple websites from a single installation.',
      features: ['Multi-Site Management', 'Centralized Updates', 'User Management', 'Custom Domains', 'Shared Resources', 'Network Administration'],
      pricing: 'Starting at $6,000',
      timeline: '5-10 weeks',
      complexity: 'Enterprise',
      features_count: '30+'
    }
  ];

  const wordpressFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'Content Management', icon: '📝', description: 'Powerful content management system with Gutenberg editor' },
        { name: 'Media Library', icon: '🖼️', description: 'Built-in media library for images, videos, and documents' },
        { name: 'User Management', icon: '👥', description: 'Flexible user roles and permissions system' },
        { name: 'SEO Tools', icon: '🔍', description: 'Built-in SEO features and meta tag management' }
      ]
    },
    {
      category: 'Development Features',
      features: [
        { name: 'Custom Post Types', icon: '📋', description: 'Create custom content types for different data structures' },
        { name: 'Custom Fields', icon: '🔧', description: 'Advanced custom fields for additional data storage' },
        { name: 'Hooks & Filters', icon: '🎣', description: 'Extensive hook system for customization' },
        { name: 'REST API', icon: '🌐', description: 'WordPress REST API for headless implementations' }
      ]
    },
    {
      category: 'Performance & Security',
      features: [
        { name: 'Caching System', icon: '⚡', description: 'Built-in caching and optimization features' },
        { name: 'Security Features', icon: '🔒', description: 'Regular security updates and protection features' },
        { name: 'Database Optimization', icon: '🗄️', description: 'Optimized database queries and structure' },
        { name: 'CDN Integration', icon: '🌍', description: 'Content delivery network integration support' }
      ]
    },
    {
      category: 'Ecosystem & Plugins',
      features: [
        { name: 'Plugin Directory', icon: '📦', description: 'Extensive plugin ecosystem with 60,000+ plugins' },
        { name: 'Theme Directory', icon: '🎨', description: 'Thousands of free and premium themes available' },
        { name: 'WooCommerce', icon: '🛒', description: 'Most popular e-commerce plugin for WordPress' },
        { name: 'Third-party Integrations', icon: '🔗', description: 'Integration with popular services and APIs' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Planning & Design',
      description: 'Understanding requirements and creating wireframes and design mockups.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Theme Development',
      description: 'Building custom WordPress theme with responsive design and functionality.',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Plugin Development',
      description: 'Creating custom plugins and extending WordPress functionality.',
      duration: '1-3 weeks',
      icon: '🔌'
    },
    {
      step: '04',
      title: 'Content Migration',
      description: 'Migrating existing content and setting up the website structure.',
      duration: '3-7 days',
      icon: '📊'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security review.',
      duration: '3-7 days',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Launch & Training',
      description: 'Website launch, training, and ongoing support setup.',
      duration: '2-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'WordPress Website',
      description: 'Fully functional WordPress website with custom theme and plugins.',
      icon: '🌐'
    },
    {
      title: 'Custom Theme',
      description: 'Bespoke WordPress theme tailored to your brand and requirements.',
      icon: '🎨'
    },
    {
      title: 'Custom Plugins',
      description: 'Custom WordPress plugins with specific functionality and features.',
      icon: '🔌'
    },
    {
      title: 'Content Migration',
      description: 'Safe migration of existing content to the new WordPress site.',
      icon: '📊'
    },
    {
      title: 'Training & Documentation',
      description: 'Complete training for your team and comprehensive documentation.',
      icon: '📚'
    },
    {
      title: 'Maintenance Plan',
      description: 'Ongoing maintenance, updates, and support for your WordPress site.',
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: 'User-Friendly',
      description: 'Intuitive content management system that anyone can use without technical knowledge.',
      icon: '😊'
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO features and compatibility with popular SEO plugins.',
      icon: '🔍'
    },
    {
      title: 'Flexible & Scalable',
      description: 'Highly flexible platform that can grow with your business needs.',
      icon: '📈'
    },
    {
      title: 'Cost-Effective',
      description: 'Open-source platform with no licensing fees and extensive free resources.',
      icon: '💰'
    },
    {
      title: 'Large Community',
      description: 'Huge community of developers, designers, and users providing support.',
      icon: '👥'
    },
    {
      title: 'Regular Updates',
      description: 'Regular security updates and new features from WordPress core team.',
      icon: '🔄'
    }
  ];

  const useCases = [
    {
      title: 'Business Websites',
      description: 'Professional websites for businesses with content management capabilities.',
      icon: '🏢'
    },
    {
      title: 'Blogs & News Sites',
      description: 'Content-rich websites for blogging, news, and editorial content.',
      icon: '📰'
    },
    {
      title: 'E-commerce Stores',
      description: 'Online stores with WooCommerce for selling products and services.',
      icon: '🛒'
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase portfolios for creative professionals and agencies.',
      icon: '🎨'
    },
    {
      title: 'Corporate Websites',
      description: 'Large corporate websites with multiple sections and departments.',
      icon: '🏛️'
    },
    {
      title: 'Educational Sites',
      description: 'Educational institutions and online learning platforms.',
      icon: '🎓'
    }
  ];

  const wordpressTypes = [
    {
      title: 'WordPress.com',
      description: 'Hosted WordPress solution with managed hosting and maintenance.',
      icon: '☁️'
    },
    {
      title: 'WordPress.org',
      description: 'Self-hosted WordPress with full control and customization options.',
      icon: '🛠️'
    },
    {
      title: 'Headless WordPress',
      description: 'WordPress as a headless CMS with custom frontend frameworks.',
      icon: '🔗'
    },
    {
      title: 'WordPress Multisite',
      description: 'Network of WordPress sites managed from a single installation.',
      icon: '🌐'
    }
  ];

  const popularPlugins = [
    { name: 'WooCommerce', icon: '🛒', description: 'E-commerce plugin', category: 'E-commerce' },
    { name: 'Yoast SEO', icon: '🔍', description: 'SEO optimization plugin', category: 'SEO' },
    { name: 'Elementor', icon: '🎨', description: 'Page builder plugin', category: 'Design' },
    { name: 'Contact Form 7', icon: '📧', description: 'Contact form plugin', category: 'Forms' },
    { name: 'WP Rocket', icon: '⚡', description: 'Caching plugin', category: 'Performance' },
    { name: 'Wordfence', icon: '🔒', description: 'Security plugin', category: 'Security' },
    { name: 'Akismet', icon: '🚫', description: 'Spam protection', category: 'Security' },
    { name: 'WP Super Cache', icon: '💾', description: 'Caching plugin', category: 'Performance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating WordPress Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🌐</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🎨</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🔌</span>
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
              <span className="text-lg">🌐</span>
              WordPress Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              WordPress
              <span className="block text-blue-600 mt-2">Development</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We create powerful, custom WordPress websites that combine beautiful design with robust functionality. 
              From simple blogs to complex e-commerce platforms, we deliver WordPress solutions that drive results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">WordPress Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">43%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Web Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3-10</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Open Source</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Free Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              WordPress
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive WordPress development services for all types of websites and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wordpressServices.map((service, index) => (
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

      {/* WordPress Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              WordPress Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Powerful
              <span className="block text-blue-600 mt-2">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              WordPress provides a comprehensive set of features for modern website development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {wordpressFeatures.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <div className="text-2xl">{feature.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{feature.name}</h4>
                          <p className="text-sm text-slate-600">{feature.description}</p>
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

      {/* WordPress Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              WordPress Types
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              WordPress
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Different WordPress implementations to meet various business requirements and technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wordpressTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Plugins */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Popular Plugins
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Essential
              <span className="block text-blue-600 mt-2">WordPress Plugins</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with the most popular and reliable WordPress plugins to enhance functionality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {popularPlugins.map((plugin, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{plugin.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {plugin.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{plugin.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {plugin.category}
                  </span>
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
              WordPress Development
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality WordPress websites delivered on time and within budget.
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
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
              Complete WordPress development deliverables that provide everything needed for successful website launch.
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Why WordPress
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">WordPress</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              WordPress provides significant advantages for building modern websites.
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
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
              WordPress is ideal for a wide range of website development scenarios.
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
            <span className="block text-blue-100 mt-2">Your WordPress Site?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a powerful WordPress website that drives results and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start WordPress Project
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
