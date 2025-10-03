'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function PrototypingPage() {
  const [activeType, setActiveType] = useState('low-fidelity');

  const prototypeTypes = [
    {
      id: 'low-fidelity',
      title: 'Low-Fidelity Prototypes',
      icon: '📝',
      description: 'Quick, simple prototypes to test basic concepts and user flows.',
      features: ['Paper Sketches', 'Wireframes', 'Basic Interactions', 'Concept Validation', 'Rapid Iteration', 'Early Feedback'],
      pricing: 'Starting at $1,500',
      timeline: '1-2 weeks',
      fidelity: 'Low',
      interactivity: 'Basic'
    },
    {
      id: 'mid-fidelity',
      title: 'Mid-Fidelity Prototypes',
      icon: '📋',
      description: 'More detailed prototypes with improved visual design and interactions.',
      features: ['Enhanced Wireframes', 'Visual Design', 'User Flow Testing', 'Navigation Testing', 'Content Validation', 'Stakeholder Review'],
      pricing: 'Starting at $2,500',
      timeline: '2-3 weeks',
      fidelity: 'Medium',
      interactivity: 'Moderate'
    },
    {
      id: 'high-fidelity',
      title: 'High-Fidelity Prototypes',
      icon: '⚡',
      description: 'Pixel-perfect prototypes that closely resemble the final product.',
      features: ['Pixel-Perfect Design', 'Advanced Interactions', 'Animation & Transitions', 'User Testing', 'Developer Handoff', 'Final Validation'],
      pricing: 'Starting at $4,000',
      timeline: '3-5 weeks',
      fidelity: 'High',
      interactivity: 'Advanced'
    },
    {
      id: 'interactive',
      title: 'Interactive Prototypes',
      icon: '🎮',
      description: 'Fully interactive prototypes with complex user interactions and animations.',
      features: ['Complex Interactions', 'Micro-animations', 'Advanced User Testing', 'A/B Testing', 'Performance Testing', 'Launch Ready'],
      pricing: 'Starting at $6,000',
      timeline: '4-6 weeks',
      fidelity: 'Premium',
      interactivity: 'Full'
    }
  ];

  const prototypingProcess = [
    {
      step: '01',
      title: 'Requirements & Planning',
      description: 'Understanding project goals and defining prototype scope.',
      duration: '1-2 days',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Wireframing',
      description: 'Creating basic layouts and information architecture.',
      duration: '3-5 days',
      icon: '📐'
    },
    {
      step: '03',
      title: 'Visual Design',
      description: 'Applying visual design and brand elements.',
      duration: '5-10 days',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Interaction Design',
      description: 'Adding interactions, animations, and user flows.',
      duration: '5-15 days',
      icon: '⚡'
    },
    {
      step: '05',
      title: 'Testing & Iteration',
      description: 'User testing and prototype refinement.',
      duration: '3-7 days',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Final Delivery',
      description: 'Handoff to development team with documentation.',
      duration: '1-2 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Interactive Prototype',
      description: 'Clickable prototype with realistic interactions and user flows.',
      icon: '⚡'
    },
    {
      title: 'User Flow Documentation',
      description: 'Detailed documentation of user journeys and interactions.',
      icon: '🗺️'
    },
    {
      title: 'Design Specifications',
      description: 'Technical specifications for developers.',
      icon: '📋'
    },
    {
      title: 'User Testing Report',
      description: 'Results from prototype testing with recommendations.',
      icon: '📊'
    },
    {
      title: 'Animation Guidelines',
      description: 'Detailed animation specifications and timing.',
      icon: '🎬'
    },
    {
      title: 'Component Library',
      description: 'Reusable design components for development.',
      icon: '🧩'
    }
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', description: 'Collaborative prototyping', category: 'Design' },
    { name: 'InVision', icon: '🔄', description: 'Interactive prototyping', category: 'Prototyping' },
    { name: 'Principle', icon: '⚡', description: 'Animation & interaction design', category: 'Animation' },
    { name: 'Framer', icon: '🚀', description: 'Advanced prototyping', category: 'Advanced' },
    { name: 'ProtoPie', icon: '🥧', description: 'Sensor-based prototyping', category: 'Mobile' },
    { name: 'Adobe XD', icon: '🎯', description: 'UX/UI prototyping', category: 'Design' },
    { name: 'Axure', icon: '🔧', description: 'Complex interaction design', category: 'Enterprise' },
    { name: 'Marvel', icon: '⚡', description: 'Simple prototyping', category: 'Quick' }
  ];

  const benefits = [
    {
      title: 'Early Validation',
      description: 'Test concepts and user flows before development begins.',
      icon: '✅'
    },
    {
      title: 'Reduced Development Costs',
      description: 'Catch issues early to avoid expensive changes later.',
      icon: '💰'
    },
    {
      title: 'Better User Experience',
      description: 'Optimize user interactions through iterative testing.',
      icon: '😊'
    },
    {
      title: 'Stakeholder Alignment',
      description: 'Get clear visual approval from all stakeholders.',
      icon: '🤝'
    },
    {
      title: 'Faster Development',
      description: 'Provide developers with clear specifications and interactions.',
      icon: '⚡'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and solve usability issues before launch.',
      icon: '🛡️'
    }
  ];

  const useCases = [
    {
      title: 'Mobile App Development',
      description: 'Prototype mobile app interactions and user flows.',
      icon: '📱'
    },
    {
      title: 'Web Application',
      description: 'Test complex web application functionality.',
      icon: '💻'
    },
    {
      title: 'E-commerce Platform',
      description: 'Validate shopping cart and checkout processes.',
      icon: '🛒'
    },
    {
      title: 'Dashboard Design',
      description: 'Prototype data visualization and user interactions.',
      icon: '📊'
    },
    {
      title: 'Onboarding Flow',
      description: 'Test user onboarding and tutorial experiences.',
      icon: '🎯'
    },
    {
      title: 'Landing Page',
      description: 'Optimize conversion-focused landing page designs.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Prototyping Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">⚡</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🔧</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🎮</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">📱</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">⚡</span>
              Interactive Prototyping
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Prototyping
              <span className="block text-blue-600 mt-2">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We create interactive prototypes that bring your ideas to life, validate user experiences, 
              and ensure your products are built right the first time with minimal development risk.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Prototypes Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1-6</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Stakeholder Approval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Prototype Types
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Prototyping
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From quick concept validation to pixel-perfect prototypes, we deliver the right level of fidelity for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prototypeTypes.map((type, index) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{type.icon}</span>
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

                  {/* Details Grid */}
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{type.fidelity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Fidelity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{type.interactivity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Interactivity</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototyping Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Prototyping
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality prototypes delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prototypingProcess.map((step, index) => (
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
              Comprehensive prototyping deliverables that provide everything needed for successful development.
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

      {/* Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Prototyping Tools
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Professional
              <span className="block text-blue-600 mt-2">Tools</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use industry-leading prototyping tools to create exceptional interactive experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tool.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {tool.category}
                  </span>
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
              Why Prototyping
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Prototyping</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Prototyping provides invaluable benefits that improve your product development process.
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
              Prototyping is ideal for a wide range of digital product development scenarios.
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
            <span className="block text-blue-100 mt-2">Your Prototype?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create an interactive prototype that validates your ideas and accelerates your development process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Prototyping
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
