import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { ShoppingCart } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'E-commerce Development',
  description:
    'Conversion-focused e-commerce stores, from Shopify to fully custom platforms, built by SavantX Technologies.',
  path: '/expertise/ecommerce',
});

export default function EcommercePage() {

  const ecommerceTypes = [
    {
      id: 'shopify',
      title: 'Shopify Development',
      icon: '🛍️',
      description: 'Custom Shopify stores with advanced functionality and seamless user experience.',
      features: ['Custom Themes', 'App Integration', 'Payment Gateway', 'Inventory Management', 'SEO Optimization', 'Mobile Responsive'],
      pricing: 'Starting at $8,000',
      timeline: '4-6 weeks',
      color: 'green'
    },
    {
      id: 'woocommerce',
      title: 'WooCommerce Solutions',
      icon: '🛒',
      description: 'WordPress-based e-commerce solutions with unlimited customization possibilities.',
      features: ['WordPress Integration', 'Custom Plugins', 'Payment Processing', 'Product Management', 'Order Tracking', 'Analytics'],
      pricing: 'Starting at $6,000',
      timeline: '3-5 weeks',
      color: 'purple'
    },
    {
      id: 'custom',
      title: 'Custom E-commerce',
      icon: '🏪',
      description: 'Fully custom e-commerce platforms built from scratch for unique business needs.',
      features: ['Custom Design', 'Unique Features', 'Scalable Architecture', 'API Integration', 'Advanced Analytics', 'Multi-vendor Support'],
      pricing: 'Starting at $15,000',
      timeline: '8-12 weeks',
      color: 'blue'
    },
    {
      id: 'headless',
      title: 'Headless Commerce',
      icon: '⚡',
      description: 'Modern headless e-commerce solutions with API-first architecture.',
      features: ['API-First', 'Multi-Channel', 'Performance Optimized', 'Flexible Frontend', 'Omnichannel', 'Future-Proof'],
      pricing: 'Starting at $20,000',
      timeline: '10-16 weeks',
      color: 'orange'
    }
  ];

  const features = [
    {
      title: 'Product Catalog',
      description: 'Comprehensive product management with categories, variants, and inventory tracking.',
      icon: '📦'
    },
    {
      title: 'Shopping Cart',
      description: 'Seamless cart functionality with save for later, wishlist, and quick checkout.',
      icon: '🛒'
    },
    {
      title: 'Payment Gateway',
      description: 'Secure payment processing with multiple payment options and fraud protection.',
      icon: '💳'
    },
    {
      title: 'Order Management',
      description: 'Complete order lifecycle management from placement to fulfillment.',
      icon: '📋'
    },
    {
      title: 'Customer Portal',
      description: 'Self-service customer accounts with order history and profile management.',
      icon: '👤'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for business insights.',
      icon: '📊'
    }
  ];

  const platforms = [
    {
      id: 'shopify',
      name: 'Shopify',
      icon: '🛍️',
      description: 'Leading e-commerce platform with powerful built-in features',
      features: ['Easy Setup', 'App Store', 'Payment Processing', 'Inventory Management', 'Mobile Apps', '24/7 Support'],
      pricing: 'From $29/month',
      pros: ['User-friendly', 'Reliable hosting', 'Great support'],
      cons: ['Transaction fees', 'Limited customization']
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      icon: '🛒',
      description: 'Flexible WordPress-based e-commerce solution',
      features: ['WordPress Integration', 'Free Core', 'Unlimited Customization', 'SEO Friendly', 'Large Community', 'Flexible Hosting'],
      pricing: 'Free + hosting',
      pros: ['Highly customizable', 'SEO optimized', 'Cost effective'],
      cons: ['Requires maintenance', 'Hosting dependent']
    },
    {
      id: 'magento',
      name: 'Magento',
      icon: '🏢',
      description: 'Enterprise-grade e-commerce platform for large businesses',
      features: ['Enterprise Features', 'Multi-store', 'Advanced SEO', 'B2B Capabilities', 'Scalable', 'API Rich'],
      pricing: 'From $22,000/year',
      pros: ['Enterprise features', 'Highly scalable', 'Powerful'],
      cons: ['Complex setup', 'Expensive', 'Requires expertise']
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Frontend framework', category: 'Frontend' },
    { name: 'Next.js', icon: '⚡', description: 'Full-stack framework', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', description: 'Backend runtime', category: 'Backend' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing', category: 'Payments' },
    { name: 'PayPal', icon: '🅿️', description: 'Payment gateway', category: 'Payments' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Relational database', category: 'Database' },
    { name: 'AWS', icon: '☁️', description: 'Cloud hosting', category: 'Cloud' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your business model and defining the e-commerce strategy.',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Platform Selection',
      description: 'Choosing the right e-commerce platform based on your requirements.',
      duration: '1 week',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Design & UX',
      description: 'Creating user-friendly interfaces optimized for conversions.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building your e-commerce platform with modern technologies.',
      duration: '4-8 weeks',
      icon: '💻'
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Comprehensive testing and launching your online store.',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const integrations = [
    {
      title: 'Payment Gateways',
      description: 'Stripe, PayPal, Square, and other payment processors',
      icon: '💳'
    },
    {
      title: 'Shipping Providers',
      description: 'FedEx, UPS, DHL, and local shipping integrations',
      icon: '🚚'
    },
    {
      title: 'Email Marketing',
      description: 'Mailchimp, Klaviyo, and other email platforms',
      icon: '📧'
    },
    {
      title: 'Analytics',
      description: 'Google Analytics, Facebook Pixel, and conversion tracking',
      icon: '📈'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and management systems',
      icon: '📦'
    },
    {
      title: 'CRM Integration',
      description: 'Salesforce, HubSpot, and customer relationship management',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="E-commerce Development"
        eyebrowIcon={ShoppingCart}
        title="E-commerce"
        highlight="Solutions"
        description="We build powerful, conversion-optimized e-commerce platforms that drive sales and grow your online business. From Shopify stores to custom solutions, we deliver exceptional online shopping experiences."
        highlights={["Shopify Development", "WooCommerce Solutions", "Custom E-commerce", "Headless Commerce"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "40%", label: "Avg. Conversion Increase" },
          { value: "3-12", label: "Week Delivery" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />

      {/* E-commerce Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              E-commerce
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Platform Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From ready-made platforms to custom solutions, we offer the perfect e-commerce solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      type.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      type.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      type.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300'
                    } rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      <ServiceIcon emoji={type.icon} size="lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Platform Comparison
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Popular
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">E-commerce Platforms</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with all major e-commerce platforms to deliver the best solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Platform Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={platform.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {platform.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{platform.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg font-bold text-blue-600 mb-1">{platform.pricing}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-3 pt-6 border-t border-slate-200">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-2">Pros</h4>
                      <div className="space-y-1">
                        {platform.pros.map((pro, proIndex) => (
                          <div key={proIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2">Cons</h4>
                      <div className="space-y-1">
                        {platform.cons.map((con, conIndex) => (
                          <div key={conIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Key Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              E-commerce
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive e-commerce functionality to power your online business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Integrations */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Integrations
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Third-Party
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Seamlessly integrate with your favorite tools and services.
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

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              E-commerce
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Modern technologies powering your e-commerce success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              How We Build
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">E-commerce Stores</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process ensures your e-commerce store is delivered on time and optimized for conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Launch Your
            <span className="block text-blue-100 mt-2">E-commerce Store?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your e-commerce requirements and create a powerful online store that drives sales and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Store
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
