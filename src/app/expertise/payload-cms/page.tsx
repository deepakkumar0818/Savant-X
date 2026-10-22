import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Layers } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Payload CMS Development',
  description:
    'Flexible, developer-friendly content management systems built on Payload CMS.',
  path: '/expertise/payload-cms',
});

export default function PayloadCMSPage() {

  const payloadServices = [
    {
      id: 'headless',
      title: 'Headless CMS Setup',
      icon: '🔄',
      description: 'Modern headless CMS implementation with API-first architecture for maximum flexibility.',
      features: ['API-First Architecture', 'Content Management', 'Multi-Site Support', 'Custom Fields', 'Media Management', 'User Permissions'],
      pricing: 'Starting at $3,500',
      timeline: '2-4 weeks',
      complexity: 'Standard',
      features_count: '20+'
    },
    {
      id: 'custom-fields',
      title: 'Custom Field Development',
      icon: '🛠️',
      description: 'Custom field types and complex data structures tailored to your content needs.',
      features: ['Custom Field Types', 'Conditional Logic', 'Validation Rules', 'Rich Text Editor', 'File Uploads', 'Relationship Fields'],
      pricing: 'Starting at $2,500',
      timeline: '1-3 weeks',
      complexity: 'Advanced',
      features_count: '15+'
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      icon: '🔗',
      description: 'Seamless integration with frontend applications and third-party services.',
      features: ['REST API', 'GraphQL API', 'Webhooks', 'Authentication', 'Rate Limiting', 'API Documentation'],
      pricing: 'Starting at $2,000',
      timeline: '1-2 weeks',
      complexity: 'Standard',
      features_count: '12+'
    },
    {
      id: 'enterprise',
      title: 'Enterprise CMS',
      icon: '🏢',
      description: 'Scalable enterprise-grade CMS solution with advanced features and security.',
      features: ['Multi-Tenant Architecture', 'Advanced Security', 'Workflow Management', 'Audit Logs', 'Performance Optimization', 'Custom Admin UI'],
      pricing: 'Starting at $8,000',
      timeline: '6-12 weeks',
      complexity: 'Enterprise',
      features_count: '50+'
    }
  ];

  const payloadFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'TypeScript Support', icon: '📘', description: 'Full TypeScript support for type-safe development' },
        { name: 'Custom Fields', icon: '🔧', description: 'Flexible field types and validation' },
        { name: 'Rich Text Editor', icon: '📝', description: 'Advanced rich text editing capabilities' },
        { name: 'Media Management', icon: '🖼️', description: 'Comprehensive media handling and optimization' }
      ]
    },
    {
      category: 'Developer Experience',
      features: [
        { name: 'REST & GraphQL APIs', icon: '🌐', description: 'Both REST and GraphQL API support' },
        { name: 'Webhooks', icon: '🎣', description: 'Real-time event notifications' },
        { name: 'Authentication', icon: '🔐', description: 'Built-in authentication and authorization' },
        { name: 'Plugin System', icon: '🧩', description: 'Extensible plugin architecture' }
      ]
    },
    {
      category: 'Content Management',
      features: [
        { name: 'Version Control', icon: '📚', description: 'Content versioning and history tracking' },
        { name: 'Draft System', icon: '📄', description: 'Draft and publish workflow' },
        { name: 'Bulk Operations', icon: '⚡', description: 'Bulk content management operations' },
        { name: 'Search & Filter', icon: '🔍', description: 'Advanced search and filtering capabilities' }
      ]
    },
    {
      category: 'Deployment & Scaling',
      features: [
        { name: 'Cloud Deployment', icon: '☁️', description: 'Easy deployment to cloud platforms' },
        { name: 'Database Support', icon: '🗄️', description: 'MongoDB and PostgreSQL support' },
        { name: 'CDN Integration', icon: '🌍', description: 'Content delivery network integration' },
        { name: 'Performance Monitoring', icon: '📊', description: 'Built-in performance monitoring' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your content structure and CMS requirements.',
      duration: '3-5 days',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Schema Design',
      description: 'Designing content schemas and field structures.',
      duration: '5-7 days',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'CMS Configuration',
      description: 'Setting up Payload CMS with custom configurations.',
      duration: '3-5 days',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Custom Development',
      description: 'Building custom fields, plugins, and integrations.',
      duration: '1-3 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: 'Content Migration',
      description: 'Migrating existing content to Payload CMS.',
      duration: '3-7 days',
      icon: '📊'
    },
    {
      step: '06',
      title: 'Testing & Deployment',
      description: 'Testing and deploying the CMS solution.',
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Payload CMS Setup',
      description: 'Fully configured Payload CMS with custom schemas and fields.',
      icon: '🔄'
    },
    {
      title: 'Custom Admin UI',
      description: 'Tailored admin interface for content management.',
      icon: '🎨'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API documentation and examples.',
      icon: '📚'
    },
    {
      title: 'Content Migration',
      description: 'Safe migration of existing content to Payload CMS.',
      icon: '📊'
    },
    {
      title: 'Training & Support',
      description: 'Complete training for your content management team.',
      icon: '🎓'
    },
    {
      title: 'Maintenance Plan',
      description: 'Ongoing support and maintenance for your CMS.',
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: 'Developer-Friendly',
      description: 'Built by developers, for developers with modern tools and practices.',
      icon: '👨‍💻'
    },
    {
      title: 'Type-Safe',
      description: 'Full TypeScript support ensures type safety throughout your application.',
      icon: '🛡️'
    },
    {
      title: 'Flexible Architecture',
      description: 'Headless architecture allows integration with any frontend framework.',
      icon: '🔀'
    },
    {
      title: 'Scalable Performance',
      description: 'Optimized for performance with efficient database queries and caching.',
      icon: '⚡'
    },
    {
      title: 'Cost-Effective',
      description: 'Open-source solution with no licensing fees or vendor lock-in.',
      icon: '💰'
    },
    {
      title: 'Future-Proof',
      description: 'Modern architecture ensures long-term viability and updates.',
      icon: '🔮'
    }
  ];

  const useCases = [
    {
      title: 'Corporate Websites',
      description: 'Content management for corporate websites and marketing pages.',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Product catalog and content management for online stores.',
      icon: '🛒'
    },
    {
      title: 'Blog & News Sites',
      description: 'Publishing platform for blogs, news, and editorial content.',
      icon: '📰'
    },
    {
      title: 'Documentation Sites',
      description: 'Technical documentation and knowledge base management.',
      icon: '📖'
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase portfolios and creative content management.',
      icon: '🎨'
    },
    {
      title: 'Multi-Site Networks',
      description: 'Managing multiple websites from a single CMS instance.',
      icon: '🌐'
    }
  ];

  const integrations = [
    {
      title: 'Frontend Frameworks',
      description: 'Seamless integration with React, Next.js, Vue, and other frameworks.',
      icon: '⚛️'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Integration with Shopify, WooCommerce, and custom e-commerce solutions.',
      icon: '🛒'
    },
    {
      title: 'Analytics Tools',
      description: 'Connect with Google Analytics, Mixpanel, and other analytics platforms.',
      icon: '📊'
    },
    {
      title: 'Email Marketing',
      description: 'Integration with Mailchimp, SendGrid, and email marketing tools.',
      icon: '📧'
    },
    {
      title: 'Social Media',
      description: 'Connect with social media platforms for content syndication.',
      icon: '📱'
    },
    {
      title: 'Third-Party APIs',
      description: 'Integration with external services and APIs.',
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Payload CMS Development"
        eyebrowIcon={Layers}
        title="Payload"
        highlight="CMS Solutions"
        description="We build powerful, developer-friendly content management systems using Payload CMS. From simple blogs to complex enterprise solutions, we deliver flexible and scalable CMS platforms."
        highlights={["Headless CMS Setup", "Custom Field Development", "API Integration", "Enterprise CMS"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "100%", label: "Type-Safe" },
          { value: "2-12", label: "Week Delivery" },
          { value: "Open Source", label: "No Licensing Fees" },
        ]}
      />

      {/* Payload Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Payload CMS
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive Payload CMS development services for all types of content management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {payloadServices.map((service) => (
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

      {/* Payload Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Payload Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Powerful
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Payload CMS provides a comprehensive set of features for modern content management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {payloadFeatures.map((category, index) => (
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Payload CMS
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures robust and scalable Payload CMS solutions.
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
              Complete Payload CMS deliverables that provide everything needed for content management.
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
              Why Payload CMS
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Payload CMS</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Payload CMS provides significant advantages for modern content management needs.
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
              Payload CMS is ideal for a wide range of content management scenarios.
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

      {/* Integrations */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Integrations
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Seamless
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Payload CMS integrates seamlessly with modern development tools and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={integration.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {integration.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {integration.description}
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
            <span className="block text-blue-100 mt-2">Your CMS?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a powerful Payload CMS solution that meets your content management needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start CMS Project
            </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
