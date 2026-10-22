import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Newspaper } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'WordPress Development',
  description:
    'Custom WordPress websites and e-commerce sites that combine strong design with dependable functionality.',
  path: '/expertise/wordpress',
});

export default function WordPressPage() {

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
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="WordPress Development"
        eyebrowIcon={Newspaper}
        title="WordPress"
        highlight="Development"
        description="We create powerful, custom WordPress websites that combine beautiful design with robust functionality. From simple blogs to complex e-commerce platforms, we deliver WordPress solutions that drive results."
        highlights={["Custom WordPress Themes", "WordPress Plugin Development", "WooCommerce Development", "WordPress Multisite"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "43%", label: "Web Market Share" },
          { value: "3-10", label: "Week Delivery" },
          { value: "Open Source", label: "Free Platform" },
        ]}
      />

      {/* WordPress Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              WordPress
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive WordPress development services for all types of websites and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wordpressServices.map((service) => (
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

      {/* WordPress Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              WordPress Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Powerful
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
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
                        <ServiceIcon emoji={feature.icon} size="md" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              WordPress Types
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              WordPress
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Different WordPress implementations to meet various business requirements and technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wordpressTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={type.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Popular Plugins
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Essential
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">WordPress Plugins</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with the most popular and reliable WordPress plugins to enhance functionality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {popularPlugins.map((plugin, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={plugin.icon} size="lg" className="mb-3" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              WordPress Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
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
              Complete WordPress development deliverables that provide everything needed for successful website launch.
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Why WordPress
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">WordPress</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              WordPress provides significant advantages for building modern websites.
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
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
              WordPress is ideal for a wide range of website development scenarios.
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
            <span className="block text-blue-100 mt-2">Your WordPress Site?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a powerful WordPress website that drives results and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start WordPress Project
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
