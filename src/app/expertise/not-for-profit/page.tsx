import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { HeartHandshake } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Not-for-Profit Technology',
  description:
    'Technology solutions that help nonprofit organisations amplify their impact and focus on their mission.',
  path: '/expertise/not-for-profit',
});

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
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Not for Profit Solutions"
        eyebrowIcon={HeartHandshake}
        title="Not for Profit"
        highlight="Experience"
        description="We're passionate about supporting nonprofit organizations with technology solutions that amplify their impact. Our nonprofit-friendly approach helps you focus on your mission while we handle the technology."
        highlights={["Donation Platforms", "Volunteer Management", "Member Portals", "Grant Management"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "$10M+", label: "Funds Raised" },
          { value: "3-12", label: "Week Delivery" },
          { value: "Pro Bono", label: "Support Available" },
        ]}
      />

      {/* Nonprofit Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Nonprofit
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
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

      {/* Nonprofit Sectors */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Sectors We Serve
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Nonprofit
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Sectors</span>
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
                        <ServiceIcon emoji={org.icon} size="md" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Nonprofit Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Essential
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key features specifically designed for nonprofit organizations to maximize their impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonprofitFeatures.map((feature, index) => (
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
              Nonprofit Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
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

      {/* Impact Areas */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Impact Areas
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Measuring
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Social Impact</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key areas where technology can amplify your organization&apos;s impact and effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={area.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Nonprofit Technologies
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Technology
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with nonprofit-friendly technologies that are cost-effective and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {nonprofitTechnologies.map((tech, index) => (
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
              Complete nonprofit development deliverables designed to support your mission and impact.
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
              Why Nonprofit Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Nonprofit Technology</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Technology solutions specifically designed to support nonprofit organizations and amplify their impact.
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
            Ready to Amplify
            <span className="block text-blue-100 mt-2">Your Impact?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s work together to create technology solutions that amplify your organization&apos;s mission and maximize your social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Nonprofit Project
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Learn About Pro Bono
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

