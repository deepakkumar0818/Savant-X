import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Building2 } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Commercial Solutions',
  description:
    'Technology for commercial organisations, from e-commerce platforms to SaaS applications, built by SavantX Technologies.',
  path: '/expertise/commercial',
});

export default function CommercialPage() {

  const commercialServices = [
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      icon: '🛒',
      description: 'Complete e-commerce platforms with payment processing, inventory management, and order fulfillment.',
      features: ['Online Store Setup', 'Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Customer Management', 'Analytics & Reporting'],
      pricing: 'Starting at $8,000',
      timeline: '6-12 weeks',
      complexity: 'Enterprise',
      features_count: '50+'
    },
    {
      id: 'business-websites',
      title: 'Business Websites',
      icon: '🏢',
      description: 'Professional corporate websites designed to establish credibility and drive business growth.',
      features: ['Corporate Design', 'Content Management', 'SEO Optimization', 'Contact Forms', 'Analytics Integration', 'Mobile Responsive'],
      pricing: 'Starting at $4,500',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      features_count: '30+'
    },
    {
      id: 'saas-platforms',
      title: 'SaaS Platforms',
      icon: '☁️',
      description: 'Software-as-a-Service applications with subscription management and user authentication.',
      features: ['User Authentication', 'Subscription Management', 'Dashboard Analytics', 'API Integration', 'Multi-tenancy', 'Payment Processing'],
      pricing: 'Starting at $15,000',
      timeline: '10-20 weeks',
      complexity: 'Enterprise',
      features_count: '75+'
    },
    {
      id: 'marketplace',
      title: 'Marketplace Platforms',
      icon: '🏪',
      description: 'Multi-vendor marketplace platforms connecting buyers and sellers with secure transactions.',
      features: ['Multi-vendor Support', 'Commission Management', 'Escrow System', 'Vendor Dashboard', 'Buyer Protection', 'Dispute Resolution'],
      pricing: 'Starting at $20,000',
      timeline: '12-24 weeks',
      complexity: 'Enterprise',
      features_count: '100+'
    }
  ];

  const commercialIndustries = [
    {
      category: 'Retail & E-commerce',
      industries: [
        { name: 'Online Stores', icon: '🛍️', description: 'Complete online retail solutions' },
        { name: 'Fashion & Apparel', icon: '👗', description: 'Fashion e-commerce platforms' },
        { name: 'Electronics', icon: '📱', description: 'Electronics and gadget stores' },
        { name: 'Home & Garden', icon: '🏠', description: 'Home improvement and garden centers' }
      ]
    },
    {
      category: 'Professional Services',
      industries: [
        { name: 'Legal Services', icon: '⚖️', description: 'Law firms and legal consultancies' },
        { name: 'Healthcare', icon: '🏥', description: 'Medical practices and healthcare providers' },
        { name: 'Financial Services', icon: '💰', description: 'Banks, insurance, and financial advisors' },
        { name: 'Real Estate', icon: '🏘️', description: 'Real estate agencies and property management' }
      ]
    },
    {
      category: 'Technology & Innovation',
      industries: [
        { name: 'SaaS Companies', icon: '💻', description: 'Software-as-a-Service platforms' },
        { name: 'Tech Startups', icon: '🚀', description: 'Technology startup companies' },
        { name: 'Consulting Firms', icon: '📊', description: 'Business and technology consultants' },
        { name: 'Manufacturing', icon: '🏭', description: 'Manufacturing and industrial companies' }
      ]
    },
    {
      category: 'Service Industries',
      industries: [
        { name: 'Restaurants', icon: '🍽️', description: 'Restaurants and food service' },
        { name: 'Travel & Tourism', icon: '✈️', description: 'Travel agencies and tourism' },
        { name: 'Education', icon: '🎓', description: 'Educational institutions and training' },
        { name: 'Entertainment', icon: '🎬', description: 'Media and entertainment companies' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Business Analysis',
      description: 'Understanding your business model, target audience, and commercial objectives.',
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Developing commercial strategy and technical architecture for maximum ROI.',
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Design & UX',
      description: 'Creating user-centric designs that drive conversions and business growth.',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Development & Integration',
      description: 'Building robust commercial applications with payment and business integrations.',
      duration: '4-12 weeks',
      icon: '⚙️'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization for commercial success.',
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Launch & Growth',
      description: 'Launching your commercial platform with growth strategies and analytics.',
      duration: '1 week',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Commercial Platform',
      description: 'Fully functional commercial website or application ready for business operations.',
      icon: '🏢'
    },
    {
      title: 'Payment Integration',
      description: 'Secure payment processing with multiple payment gateways and methods.',
      icon: '💳'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics and reporting dashboard.',
      icon: '📊'
    },
    {
      title: 'Admin Panel',
      description: 'Complete administrative interface for managing business operations.',
      icon: '🎛️'
    },
    {
      title: 'Business Training',
      description: 'Training for your team on using the commercial platform effectively.',
      icon: '🎓'
    },
    {
      title: 'Growth Strategy',
      description: 'Digital marketing and growth strategies for commercial success.',
      icon: '📈'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Drive sales and revenue through optimized commercial platforms and strategies.',
      icon: '💰'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your market reach with online presence and digital commerce capabilities.',
      icon: '🌍'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline business operations with automated processes and integrations.',
      icon: '⚡'
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer experience with user-friendly interfaces and seamless transactions.',
      icon: '😊'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions with comprehensive analytics and reporting.',
      icon: '📊'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competition with modern technology and innovative solutions.',
      icon: '🏆'
    }
  ];

  const commercialFeatures = [
    {
      title: 'Payment Processing',
      description: 'Secure payment gateways with multiple payment methods and fraud protection.',
      icon: '💳'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated stock management systems.',
      icon: '📦'
    },
    {
      title: 'Customer Management',
      description: 'Comprehensive CRM integration for customer relationship management.',
      icon: '👥'
    },
    {
      title: 'Order Management',
      description: 'Complete order processing from placement to fulfillment and tracking.',
      icon: '📋'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Business intelligence with detailed analytics and performance reporting.',
      icon: '📊'
    },
    {
      title: 'Multi-channel Support',
      description: 'Support for multiple sales channels including web, mobile, and third-party platforms.',
      icon: '📱'
    }
  ];

  const successMetrics = [
    {
      title: 'Conversion Rate',
      description: 'Optimize conversion rates through user experience and conversion funnel analysis.',
      icon: '📈'
    },
    {
      title: 'Customer Acquisition',
      description: 'Implement strategies to acquire new customers and grow your customer base.',
      icon: '🎯'
    },
    {
      title: 'Revenue Per Customer',
      description: 'Increase average revenue per customer through upselling and cross-selling.',
      icon: '💰'
    },
    {
      title: 'Customer Retention',
      description: 'Improve customer retention through loyalty programs and engagement strategies.',
      icon: '🔄'
    },
    {
      title: 'Operational Cost',
      description: 'Reduce operational costs through automation and efficient business processes.',
      icon: '💸'
    },
    {
      title: 'Market Share',
      description: 'Grow market share through competitive positioning and market expansion.',
      icon: '🏆'
    }
  ];

  const technologies = [
    { name: 'React/Next.js', icon: '⚛️', description: 'Modern frontend frameworks', category: 'Frontend' },
    { name: 'Laravel/PHP', icon: '🔥', description: 'Robust backend development', category: 'Backend' },
    { name: 'Node.js', icon: '🟢', description: 'Scalable server-side JavaScript', category: 'Backend' },
    { name: 'WooCommerce', icon: '🛒', description: 'E-commerce platform', category: 'E-commerce' },
    { name: 'Shopify', icon: '🛍️', description: 'E-commerce solution', category: 'E-commerce' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing', category: 'Payments' },
    { name: 'PayPal', icon: '🔵', description: 'Payment gateway', category: 'Payments' },
    { name: 'Google Analytics', icon: '📊', description: 'Web analytics', category: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Commercial Solutions"
        eyebrowIcon={Building2}
        title="Commercial"
        highlight="Experience"
        description="We specialize in building commercial solutions that drive business growth and revenue. From e-commerce platforms to SaaS applications, we deliver technology that powers commercial success."
        highlights={["E-commerce Solutions", "Business Websites", "SaaS Platforms", "Marketplace Platforms"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "$50M+", label: "Revenue Generated" },
          { value: "4-24", label: "Week Delivery" },
          { value: "98%", label: "Success Rate" },
        ]}
      />

      {/* Commercial Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Commercial
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive commercial development services designed to drive business growth and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service) => (
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

      {/* Commercial Industries */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Industries We Serve
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Commercial
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Industries</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We have extensive experience working with various commercial industries and business models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {commercialIndustries.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.industries.map((industry, industryIndex) => (
                      <div key={industryIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={industry.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{industry.name}</h4>
                          <p className="text-sm text-slate-600">{industry.description}</p>
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

      {/* Commercial Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Commercial Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Essential
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key features that power commercial success and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialFeatures.map((feature, index) => (
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Commercial Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures commercial success and maximum return on investment.
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Success Metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Measuring
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Commercial Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key performance indicators that drive commercial success and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={metric.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {metric.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technologies
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Commercial
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge technologies to build scalable and secure commercial solutions.
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
              Complete commercial development deliverables that provide everything needed for business success.
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
              Why Commercial Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Commercial Development</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Commercial development provides significant advantages for business growth and success.
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Build
            <span className="block text-blue-100 mt-2">Your Commercial Solution?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a commercial platform that drives revenue growth and business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Commercial Project
            </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
