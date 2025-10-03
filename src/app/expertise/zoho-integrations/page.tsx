'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function ZohoIntegrationsPage() {
  const [activeIntegration, setActiveIntegration] = useState('crm');

  const zohoProducts = [
    {
      id: 'crm',
      title: 'Zoho CRM Integration',
      icon: '📊',
      description: 'Seamless customer relationship management integration with your existing systems.',
      features: ['Lead Management', 'Contact Sync', 'Deal Tracking', 'Sales Pipeline', 'Customer Support', 'Analytics & Reports'],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks',
      complexity: 'Advanced',
      integrations: '15+'
    },
    {
      id: 'creator',
      title: 'Zoho Creator Integration',
      icon: '🛠️',
      description: 'Custom application development and integration with Zoho Creator platform.',
      features: ['Custom Apps', 'Workflow Automation', 'Data Management', 'Form Builder', 'API Integration', 'Mobile Apps'],
      pricing: 'Starting at $3,500',
      timeline: '3-6 weeks',
      complexity: 'Custom',
      integrations: '20+'
    },
    {
      id: 'books',
      title: 'Zoho Books Integration',
      icon: '💰',
      description: 'Complete accounting and financial management system integration.',
      features: ['Invoice Management', 'Expense Tracking', 'Bank Reconciliation', 'Tax Management', 'Financial Reports', 'Multi-Currency'],
      pricing: 'Starting at $2,000',
      timeline: '2-3 weeks',
      complexity: 'Standard',
      integrations: '10+'
    },
    {
      id: 'desk',
      title: 'Zoho Desk Integration',
      icon: '🎧',
      description: 'Customer support and helpdesk system integration for better service delivery.',
      features: ['Ticket Management', 'Customer Portal', 'Knowledge Base', 'Live Chat', 'SLA Management', 'Performance Analytics'],
      pricing: 'Starting at $2,800',
      timeline: '3-4 weeks',
      complexity: 'Advanced',
      integrations: '12+'
    },
    {
      id: 'campaigns',
      title: 'Zoho Campaigns Integration',
      icon: '📧',
      description: 'Email marketing and campaign management integration with your marketing tools.',
      features: ['Email Automation', 'List Management', 'Campaign Analytics', 'A/B Testing', 'Social Media Integration', 'Lead Nurturing'],
      pricing: 'Starting at $1,800',
      timeline: '2-3 weeks',
      complexity: 'Standard',
      integrations: '8+'
    },
    {
      id: 'projects',
      title: 'Zoho Projects Integration',
      icon: '📋',
      description: 'Project management and team collaboration integration for better productivity.',
      features: ['Task Management', 'Time Tracking', 'Resource Planning', 'Gantt Charts', 'Team Collaboration', 'Project Reports'],
      pricing: 'Starting at $2,200',
      timeline: '2-4 weeks',
      complexity: 'Advanced',
      integrations: '14+'
    }
  ];

  const integrationProcess = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your business needs and Zoho product requirements.',
      duration: '3-5 days',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'System Architecture',
      description: 'Designing the integration architecture and data flow.',
      duration: '5-7 days',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'API Development',
      description: 'Building custom APIs and integration connectors.',
      duration: '7-14 days',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Migrating existing data to Zoho systems safely.',
      duration: '3-7 days',
      icon: '📊'
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing and validation of all integrations.',
      duration: '5-10 days',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deployment & Training',
      description: 'Deploying the solution and training your team.',
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Custom Integration',
      description: 'Tailored integration solution connecting your systems with Zoho.',
      icon: '🔗'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive documentation for all custom APIs and endpoints.',
      icon: '📚'
    },
    {
      title: 'Data Migration',
      description: 'Safe migration of existing data to Zoho systems.',
      icon: '📊'
    },
    {
      title: 'User Training',
      description: 'Complete training for your team on new integrated workflows.',
      icon: '🎓'
    },
    {
      title: 'Maintenance Support',
      description: 'Ongoing support and maintenance for your integrations.',
      icon: '🔧'
    },
    {
      title: 'Performance Monitoring',
      description: 'Monitoring tools and performance optimization.',
      icon: '📈'
    }
  ];

  const zohoSuite = [
    { name: 'CRM', icon: '📊', description: 'Customer relationship management', category: 'Sales' },
    { name: 'Creator', icon: '🛠️', description: 'Custom application development', category: 'Development' },
    { name: 'Books', icon: '💰', description: 'Accounting and financial management', category: 'Finance' },
    { name: 'Desk', icon: '🎧', description: 'Customer support and helpdesk', category: 'Support' },
    { name: 'Campaigns', icon: '📧', description: 'Email marketing automation', category: 'Marketing' },
    { name: 'Projects', icon: '📋', description: 'Project management and collaboration', category: 'Project' },
    { name: 'Inventory', icon: '📦', description: 'Inventory and order management', category: 'Operations' },
    { name: 'Analytics', icon: '📈', description: 'Business intelligence and analytics', category: 'Analytics' }
  ];

  const benefits = [
    {
      title: 'Unified Data',
      description: 'Centralize all your business data in one integrated Zoho ecosystem.',
      icon: '🎯'
    },
    {
      title: 'Automated Workflows',
      description: 'Automate repetitive tasks and streamline business processes.',
      icon: '⚡'
    },
    {
      title: 'Real-time Sync',
      description: 'Keep all systems synchronized with real-time data updates.',
      icon: '🔄'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs through integrated workflows.',
      icon: '💰'
    },
    {
      title: 'Better Insights',
      description: 'Get comprehensive business insights from unified data.',
      icon: '📊'
    },
    {
      title: 'Scalable Solution',
      description: 'Scale your business with flexible Zoho integrations.',
      icon: '📈'
    }
  ];

  const integrationTypes = [
    {
      title: 'CRM Integration',
      description: 'Connect your existing CRM with Zoho CRM for unified customer data.',
      icon: '📊'
    },
    {
      title: 'ERP Integration',
      description: 'Integrate enterprise resource planning systems with Zoho suite.',
      icon: '🏢'
    },
    {
      title: 'E-commerce Integration',
      description: 'Connect online stores with Zoho inventory and accounting.',
      icon: '🛒'
    },
    {
      title: 'Marketing Integration',
      description: 'Integrate marketing tools with Zoho Campaigns and CRM.',
      icon: '📧'
    },
    {
      title: 'Support Integration',
      description: 'Connect helpdesk systems with Zoho Desk for better support.',
      icon: '🎧'
    },
    {
      title: 'Custom App Integration',
      description: 'Build custom applications using Zoho Creator platform.',
      icon: '🛠️'
    }
  ];

  const technicalCapabilities = [
    {
      title: 'API Development',
      description: 'Custom API development for seamless system integration.',
      icon: '🔧'
    },
    {
      title: 'Data Mapping',
      description: 'Intelligent data mapping between different systems.',
      icon: '🗺️'
    },
    {
      title: 'Real-time Sync',
      description: 'Real-time data synchronization across platforms.',
      icon: '⚡'
    },
    {
      title: 'Security Compliance',
      description: 'Enterprise-grade security and compliance standards.',
      icon: '🔒'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized performance for large-scale integrations.',
      icon: '🚀'
    },
    {
      title: 'Error Handling',
      description: 'Robust error handling and recovery mechanisms.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Zoho Integration Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🔗</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">📊</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">⚙️</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🛠️</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">🔗</span>
              Zoho Integrations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Zoho
              <span className="block text-blue-600 mt-2">Integrations</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Seamlessly integrate your existing systems with Zoho&apos;s comprehensive business suite. 
              We specialize in connecting your workflows, automating processes, and unifying your data across all Zoho applications.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Zoho Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2-6</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Products */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Zoho Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Zoho Suite
              <span className="block text-blue-600 mt-2">Integrations</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We integrate all major Zoho products with your existing systems for a unified business experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zohoProducts.map((product, index) => (
              <div key={product.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{product.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{product.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{product.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{product.integrations}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Integrations</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Integration
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures seamless integration with minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationProcess.map((step, index) => (
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

      {/* Zoho Suite Overview */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Zoho Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete Zoho
              <span className="block text-blue-600 mt-2">Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We integrate with all major Zoho applications to create a unified business management platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {zohoSuite.map((app, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{app.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {app.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{app.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {app.category}
                  </span>
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
              Complete Zoho integration deliverables that provide everything needed for seamless business operations.
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
              Why Zoho Integration
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Zoho Integration</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Zoho integration provides significant advantages for businesses looking to streamline operations and improve efficiency.
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

      {/* Integration Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Integration Types
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Common
              <span className="block text-blue-600 mt-2">Integrations</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We specialize in various types of Zoho integrations to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationTypes.map((integration, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{integration.icon}</span>
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

      {/* Technical Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Technical
              <span className="block text-blue-600 mt-2">Expertise</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Advanced technical capabilities ensure robust and scalable Zoho integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{capability.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
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
            Ready to Integrate
            <span className="block text-blue-100 mt-2">with Zoho?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s connect your business systems with Zoho&apos;s powerful suite for unified operations and enhanced productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Integration
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Examples
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
