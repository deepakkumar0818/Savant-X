'use client';

import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { useState } from 'react';
import Footer from '@/components/Footer';
import PageHero from '@/components/hero/PageHero';
import { Component } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function DesignSystemsPage() {
  const [activeCategory, setActiveCategory] = useState('components');

  const designSystemTypes = [
    {
      id: 'basic',
      title: 'Basic Design System',
      icon: '🎨',
      description: 'Essential design tokens and basic components for consistent branding.',
      features: ['Color Palette', 'Typography Scale', 'Basic Components', 'Spacing System', 'Brand Guidelines', 'Icon Library'],
      pricing: 'Starting at $3,500',
      timeline: '2-4 weeks',
      complexity: 'Basic',
      components: '15-25'
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Design System',
      icon: '🏗️',
      description: 'Complete design system with advanced components and documentation.',
      features: ['Advanced Components', 'Interaction Patterns', 'Animation Library', 'Accessibility Guidelines', 'Usage Documentation', 'Developer Handoff'],
      pricing: 'Starting at $7,500',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      components: '50-100'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Design System',
      icon: '🏢',
      description: 'Scalable design system for large organizations with multiple products.',
      features: ['Multi-Product Support', 'Custom Theming', 'Advanced Patterns', 'Team Training', 'Maintenance Support', 'Version Control'],
      pricing: 'Starting at $15,000',
      timeline: '8-16 weeks',
      complexity: 'Enterprise',
      components: '100+'
    },
    {
      id: 'custom',
      title: 'Custom Design System',
      icon: '⚡',
      description: 'Tailored design system built specifically for your unique requirements.',
      features: ['Custom Architecture', 'Brand Integration', 'Specialized Components', 'Advanced Theming', 'Integration Support', 'Ongoing Evolution'],
      pricing: 'Custom Quote',
      timeline: '6-20 weeks',
      complexity: 'Custom',
      components: 'Unlimited'
    }
  ];

  const designSystemProcess = [
    {
      step: '01',
      title: 'Audit & Analysis',
      description: 'Analyzing existing designs and identifying patterns and inconsistencies.',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Foundation Setup',
      description: 'Establishing design tokens, typography, and color foundations.',
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Component Design',
      description: 'Creating reusable components with consistent patterns.',
      duration: '2-4 weeks',
      icon: '🧩'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Creating comprehensive documentation and usage guidelines.',
      duration: '1-2 weeks',
      icon: '📚'
    },
    {
      step: '05',
      title: 'Implementation',
      description: 'Building the design system in your preferred framework.',
      duration: '2-6 weeks',
      icon: '⚙️'
    },
    {
      step: '06',
      title: 'Training & Handoff',
      description: 'Training your team and providing ongoing support.',
      duration: '1-2 weeks',
      icon: '🎓'
    }
  ];

  const deliverables = [
    {
      title: 'Design Tokens',
      description: 'Colors, typography, spacing, and other design variables.',
      icon: '🎨'
    },
    {
      title: 'Component Library',
      description: 'Reusable UI components with multiple states and variations.',
      icon: '🧩'
    },
    {
      title: 'Style Guide',
      description: 'Comprehensive documentation of design principles and usage.',
      icon: '📖'
    },
    {
      title: 'Code Library',
      description: 'Implementation in React, Vue, or your preferred framework.',
      icon: '💻'
    },
    {
      title: 'Accessibility Guidelines',
      description: 'WCAG compliance guidelines and accessibility patterns.',
      icon: '♿'
    },
    {
      title: 'Brand Integration',
      description: 'Seamless integration with your brand identity and values.',
      icon: '🏷️'
    }
  ];

  const systemComponents = {
    'components': [
      { name: 'Buttons', icon: '🔘', description: 'Primary, secondary, and variant button styles' },
      { name: 'Forms', icon: '📝', description: 'Input fields, labels, and validation states' },
      { name: 'Navigation', icon: '🧭', description: 'Menus, breadcrumbs, and navigation patterns' },
      { name: 'Cards', icon: '🃏', description: 'Content containers with consistent styling' },
      { name: 'Modals', icon: '🪟', description: 'Overlays, dialogs, and popup components' },
      { name: 'Tables', icon: '📊', description: 'Data display with sorting and filtering' },
      { name: 'Charts', icon: '📈', description: 'Data visualization components' },
      { name: 'Loading States', icon: '⏳', description: 'Spinners, skeletons, and progress indicators' }
    ],
    'patterns': [
      { name: 'Layout Patterns', icon: '📐', description: 'Grid systems and responsive layouts' },
      { name: 'Interaction Patterns', icon: '👆', description: 'Hover states, focus indicators, and animations' },
      { name: 'Content Patterns', icon: '📄', description: 'Typography hierarchy and content structure' },
      { name: 'Navigation Patterns', icon: '🗺️', description: 'User flow and navigation behaviors' },
      { name: 'Feedback Patterns', icon: '💬', description: 'Success, error, and warning messages' },
      { name: 'Data Patterns', icon: '📋', description: 'Lists, filters, and data display patterns' }
    ],
    'tokens': [
      { name: 'Color System', icon: '🌈', description: 'Primary, secondary, and semantic color palettes' },
      { name: 'Typography', icon: '🔤', description: 'Font families, sizes, weights, and line heights' },
      { name: 'Spacing', icon: '📏', description: 'Consistent spacing scale and rhythm' },
      { name: 'Shadows', icon: '🌫️', description: 'Elevation and depth through shadow tokens' },
      { name: 'Border Radius', icon: '⭕', description: 'Consistent corner rounding values' },
      { name: 'Breakpoints', icon: '📱', description: 'Responsive design breakpoints and media queries' }
    ]
  };

  const benefits = [
    {
      title: 'Design Consistency',
      description: 'Ensure consistent visual design across all products and platforms.',
      icon: '🎯'
    },
    {
      title: 'Faster Development',
      description: 'Reduce development time with pre-built, tested components.',
      icon: '⚡'
    },
    {
      title: 'Better Collaboration',
      description: 'Improve collaboration between design and development teams.',
      icon: '🤝'
    },
    {
      title: 'Scalability',
      description: 'Easily scale your design system as your product grows.',
      icon: '📈'
    },
    {
      title: 'Brand Cohesion',
      description: 'Maintain strong brand identity across all touchpoints.',
      icon: '🏷️'
    },
    {
      title: 'Reduced Maintenance',
      description: 'Centralized updates reduce maintenance overhead.',
      icon: '🔧'
    }
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', description: 'Design system creation', category: 'Design' },
    { name: 'Storybook', icon: '📚', description: 'Component documentation', category: 'Documentation' },
    { name: 'Zeroheight', icon: '📖', description: 'Design system hub', category: 'Platform' },
    { name: 'React', icon: '⚛️', description: 'Component implementation', category: 'Framework' },
    { name: 'Vue', icon: '💚', description: 'Vue.js components', category: 'Framework' },
    { name: 'Angular', icon: '🔺', description: 'Angular components', category: 'Framework' },
    { name: 'Styled Components', icon: '💅', description: 'CSS-in-JS styling', category: 'Styling' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS', category: 'Styling' }
  ];

  const useCases = [
    {
      title: 'Product Suites',
      description: 'Maintain consistency across multiple related products.',
      icon: '🏢'
    },
    {
      title: 'Multi-Platform Apps',
      description: 'Unified design across web, mobile, and desktop.',
      icon: '📱'
    },
    {
      title: 'Large Teams',
      description: 'Enable multiple designers and developers to work consistently.',
      icon: '👥'
    },
    {
      title: 'Brand Evolution',
      description: 'Support brand updates and design evolution over time.',
      icon: '🔄'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Speed up prototyping with pre-built components.',
      icon: '⚡'
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure design quality and accessibility standards.',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Design Systems"
        eyebrowIcon={Component}
        title="Design"
        highlight="Systems"
        description="We create comprehensive design systems that ensure consistency, scalability, and efficiency across all your digital products and platforms."
        highlights={["Basic Design System", "Comprehensive Design System", "Enterprise Design System", "Custom Design System"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "70%", label: "Faster Development" },
          { value: "2-20", label: "Week Delivery" },
          { value: "100%", label: "Consistency" },
        ]}
      />

      {/* Design System Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              System Types
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Design System
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From basic design tokens to enterprise-scale systems, we deliver the right level of complexity for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designSystemTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
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
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 sm:grid-cols-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.components}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Components</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Design System
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures comprehensive design systems that scale with your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSystemProcess.map((step, index) => (
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

      {/* System Components */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              System Components
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What&apos;s
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive design system components that cover all aspects of your digital products.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl">
              {Object.keys(systemComponents).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemComponents[activeCategory as keyof typeof systemComponents].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={item.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
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
              Complete design system deliverables that provide everything needed for consistent product development.
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
              Why Design Systems
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Design Systems</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Design systems provide significant advantages for teams and organizations building digital products.
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

      {/* Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Design System Tools
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Professional
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use industry-leading tools to create and maintain comprehensive design systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tool.icon} size="lg" className="mb-3" />
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

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Use Cases
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Perfect For
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">These Scenarios</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Design systems are ideal for organizations building multiple digital products or platforms.
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
            <span className="block text-blue-100 mt-2">Your Design System?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a comprehensive design system that ensures consistency and scalability across all your products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Design System
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
