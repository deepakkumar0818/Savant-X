'use client';

import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Commercial Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🏢</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">💰</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">📊</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🚀</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">🏢</span>
              Commercial Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Commercial
              <span className="block text-blue-600 mt-2">Experience</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We specialize in building commercial solutions that drive business growth and revenue. 
              From e-commerce platforms to SaaS applications, we deliver technology that powers commercial success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Commercial Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4-24</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Commercial
              <span className="block text-blue-600 mt-2">Solutions</span>
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

      {/* Commercial Industries */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Industries We Serve
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Commercial
              <span className="block text-blue-600 mt-2">Industries</span>
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
                        <div className="text-2xl">{industry.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Commercial Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Essential
              <span className="block text-blue-600 mt-2">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key features that power commercial success and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialFeatures.map((feature, index) => (
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Commercial Development
              <span className="block text-blue-600 mt-2">Process</span>
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Success Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Measuring
              <span className="block text-blue-600 mt-2">Commercial Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key performance indicators that drive commercial success and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{metric.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Commercial
              <span className="block text-blue-600 mt-2">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge technologies to build scalable and secure commercial solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{tech.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-blue-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete commercial development deliverables that provide everything needed for business success.
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
              Why Commercial Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Commercial Development</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Commercial development provides significant advantages for business growth and success.
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Commercial Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
