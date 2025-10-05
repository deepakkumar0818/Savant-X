'use client';

import Footer from '@/components/Footer';

export default function NotForProfitPage() {

  const nonprofitServices = [
    {
      id: 'donation-platforms',
      title: 'Donation Platforms',
      icon: '💝',
      description: 'Secure and user-friendly donation platforms to maximize fundraising efforts and donor engagement.',
      features: ['Online Donations', 'Recurring Giving', 'Donor Management', 'Campaign Tracking', 'Receipt Generation', 'Analytics Dashboard'],
      pricing: 'Starting at $3,500',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      features_count: '25+'
    },
    {
      id: 'volunteer-management',
      title: 'Volunteer Management',
      icon: '👥',
      description: 'Comprehensive volunteer management systems to coordinate volunteers and track their contributions.',
      features: ['Volunteer Registration', 'Event Scheduling', 'Time Tracking', 'Skills Matching', 'Communication Tools', 'Impact Reporting'],
      pricing: 'Starting at $2,500',
      timeline: '3-6 weeks',
      complexity: 'Standard',
      features_count: '20+'
    },
    {
      id: 'member-portals',
      title: 'Member Portals',
      icon: '🏛️',
      description: 'Member-focused portals for organizations to engage with their community and manage memberships.',
      features: ['Member Registration', 'Profile Management', 'Event Registration', 'Resource Library', 'Discussion Forums', 'Payment Processing'],
      pricing: 'Starting at $4,000',
      timeline: '5-10 weeks',
      complexity: 'Advanced',
      features_count: '30+'
    },
    {
      id: 'grant-management',
      title: 'Grant Management',
      icon: '📋',
      description: 'Streamlined grant management systems for tracking applications, reporting, and compliance.',
      features: ['Grant Applications', 'Document Management', 'Progress Tracking', 'Reporting Tools', 'Compliance Monitoring', 'Deadline Alerts'],
      pricing: 'Starting at $5,000',
      timeline: '6-12 weeks',
      complexity: 'Enterprise',
      features_count: '40+'
    }
  ];

  const nonprofitSectors = [
    {
      category: 'Social Services',
      organizations: [
        { name: 'Homeless Shelters', icon: '🏠', description: 'Supporting vulnerable populations' },
        { name: 'Food Banks', icon: '🍎', description: 'Fighting hunger and food insecurity' },
        { name: 'Mental Health', icon: '🧠', description: 'Mental health support and advocacy' },
        { name: 'Domestic Violence', icon: '🛡️', description: 'Supporting survivors and prevention' }
      ]
    },
    {
      category: 'Education & Youth',
      organizations: [
        { name: 'Schools & Universities', icon: '🎓', description: 'Educational institutions and programs' },
        { name: 'Youth Development', icon: '🌟', description: 'Youth mentoring and development' },
        { name: 'Literacy Programs', icon: '📚', description: 'Reading and literacy initiatives' },
        { name: 'STEM Education', icon: '🔬', description: 'Science, technology, engineering, math' }
      ]
    },
    {
      category: 'Healthcare & Medical',
      organizations: [
        { name: 'Medical Research', icon: '🔬', description: 'Medical research and clinical trials' },
        { name: 'Patient Support', icon: '🏥', description: 'Patient care and support services' },
        { name: 'Public Health', icon: '💊', description: 'Public health initiatives' },
        { name: 'Accessibility', icon: '♿', description: 'Healthcare accessibility advocacy' }
      ]
    },
    {
      category: 'Environmental & Conservation',
      organizations: [
        { name: 'Environmental Protection', icon: '🌱', description: 'Environmental conservation' },
        { name: 'Wildlife Conservation', icon: '🐾', description: 'Wildlife and habitat protection' },
        { name: 'Climate Action', icon: '🌍', description: 'Climate change initiatives' },
        { name: 'Sustainable Development', icon: '♻️', description: 'Sustainable development projects' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Mission Understanding',
      description: 'Understanding your organization&apos;s mission, values, and impact goals.',
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '02',
      title: 'Stakeholder Analysis',
      description: 'Identifying key stakeholders including donors, volunteers, and beneficiaries.',
      duration: '1-2 weeks',
      icon: '👥'
    },
    {
      step: '03',
      title: 'Impact Strategy',
      description: 'Developing technology strategy to maximize social impact and efficiency.',
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '04',
      title: 'Solution Development',
      description: 'Building custom solutions tailored to nonprofit needs and constraints.',
      duration: '3-10 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: 'Training & Support',
      description: 'Comprehensive training for staff and volunteers on using the platform.',
      duration: '1-2 weeks',
      icon: '🎓'
    },
    {
      step: '06',
      title: 'Impact Measurement',
      description: 'Implementing tools to measure and report on social impact.',
      duration: '1 week',
      icon: '📈'
    }
  ];

  const deliverables = [
    {
      title: 'Nonprofit Platform',
      description: 'Custom platform designed specifically for nonprofit operations and impact.',
      icon: '💝'
    },
    {
      title: 'Donor Management',
      description: 'Comprehensive donor relationship management and communication tools.',
      icon: '💌'
    },
    {
      title: 'Impact Reporting',
      description: 'Tools for measuring, tracking, and reporting on social impact.',
      icon: '📊'
    },
    {
      title: 'Volunteer Coordination',
      description: 'Systems for managing volunteers and coordinating their activities.',
      icon: '👥'
    },
    {
      title: 'Training & Documentation',
      description: 'Complete training materials and documentation for your team.',
      icon: '📚'
    },
    {
      title: 'Ongoing Support',
      description: 'Continued support and maintenance at nonprofit-friendly rates.',
      icon: '🤝'
    }
  ];

  const benefits = [
    {
      title: 'Mission Amplification',
      description: 'Technology solutions that amplify your organization&apos;s impact and reach.',
      icon: '📢'
    },
    {
      title: 'Cost Efficiency',
      description: 'Affordable solutions designed specifically for nonprofit budgets.',
      icon: '💰'
    },
    {
      title: 'Donor Engagement',
      description: 'Enhanced donor engagement and retention through better communication tools.',
      icon: '💝'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlined operations to focus more resources on your mission.',
      icon: '⚡'
    },
    {
      title: 'Impact Measurement',
      description: 'Better tools to measure, track, and communicate your social impact.',
      icon: '📈'
    },
    {
      title: 'Community Building',
      description: 'Stronger community connections and volunteer engagement.',
      icon: '🤝'
    }
  ];

  const nonprofitFeatures = [
    {
      title: 'Donation Processing',
      description: 'Secure, tax-deductible donation processing with receipt generation.',
      icon: '💳'
    },
    {
      title: 'Volunteer Coordination',
      description: 'Complete volunteer management from registration to impact tracking.',
      icon: '👥'
    },
    {
      title: 'Event Management',
      description: 'Fundraising event management and participant coordination.',
      icon: '🎪'
    },
    {
      title: 'Grant Tracking',
      description: 'Grant application and compliance tracking systems.',
      icon: '📋'
    },
    {
      title: 'Impact Reporting',
      description: 'Comprehensive reporting on programs and social impact.',
      icon: '📊'
    },
    {
      title: 'Communication Tools',
      description: 'Multi-channel communication with donors, volunteers, and beneficiaries.',
      icon: '📢'
    }
  ];

  const impactAreas = [
    {
      title: 'Fundraising',
      description: 'Increase fundraising effectiveness and donor retention rates.',
      icon: '💰'
    },
    {
      title: 'Volunteer Engagement',
      description: 'Better volunteer recruitment, coordination, and retention.',
      icon: '🌟'
    },
    {
      title: 'Program Delivery',
      description: 'More efficient program delivery and beneficiary support.',
      icon: '🎯'
    },
    {
      title: 'Administrative Efficiency',
      description: 'Reduce administrative overhead and focus on mission.',
      icon: '⚡'
    },
    {
      title: 'Impact Measurement',
      description: 'Better measurement and communication of social impact.',
      icon: '📊'
    },
    {
      title: 'Community Outreach',
      description: 'Expand community reach and engagement.',
      icon: '🌍'
    }
  ];

  const nonprofitTechnologies = [
    { name: 'WordPress', icon: '🌐', description: 'Content management and websites', category: 'CMS' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM for nonprofit organizations', category: 'CRM' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing for donations', category: 'Payments' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing and communication', category: 'Marketing' },
    { name: 'Google Analytics', icon: '📊', description: 'Website and impact analytics', category: 'Analytics' },
    { name: 'Zoom', icon: '📹', description: 'Virtual meetings and events', category: 'Communication' },
    { name: 'Slack', icon: '💬', description: 'Team communication and collaboration', category: 'Collaboration' },
    { name: 'Airtable', icon: '📋', description: 'Database and project management', category: 'Database' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Nonprofit Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">💝</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">👥</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🌟</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🤝</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">💝</span>
              Not for Profit Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Not for Profit
              <span className="block text-blue-600 mt-2">Experience</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We&apos;re passionate about supporting nonprofit organizations with technology solutions that amplify their impact. 
              Our nonprofit-friendly approach helps you focus on your mission while we handle the technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Nonprofit Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$10M+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3-12</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Pro Bono</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nonprofit Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Nonprofit
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Specialized technology solutions designed to support nonprofit organizations and maximize their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonprofitServices.map((service) => (
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

      {/* Nonprofit Sectors */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Sectors We Serve
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Nonprofit
              <span className="block text-blue-600 mt-2">Sectors</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We have extensive experience working with various nonprofit sectors and understanding their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {nonprofitSectors.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.organizations.map((org, orgIndex) => (
                      <div key={orgIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <div className="text-2xl">{org.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{org.name}</h4>
                          <p className="text-sm text-slate-600">{org.description}</p>
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

      {/* Nonprofit Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Nonprofit Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Essential
              <span className="block text-blue-600 mt-2">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key features specifically designed for nonprofit organizations to maximize their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonprofitFeatures.map((feature, index) => (
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
              Nonprofit Development
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our nonprofit-focused approach ensures solutions that align with your mission and maximize impact.
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

      {/* Impact Areas */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Impact Areas
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Measuring
              <span className="block text-blue-600 mt-2">Social Impact</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key areas where technology can amplify your organization&apos;s impact and effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
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
              Nonprofit Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with nonprofit-friendly technologies that are cost-effective and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {nonprofitTechnologies.map((tech, index) => (
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
              Complete nonprofit development deliverables designed to support your mission and impact.
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
              Why Nonprofit Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Nonprofit Technology</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Technology solutions specifically designed to support nonprofit organizations and amplify their impact.
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
            Ready to Amplify
            <span className="block text-blue-100 mt-2">Your Impact?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s work together to create technology solutions that amplify your organization&apos;s mission and maximize your social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Nonprofit Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Learn About Pro Bono
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
