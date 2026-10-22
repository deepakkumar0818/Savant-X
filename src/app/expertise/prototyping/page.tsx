import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { MousePointerClick } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Prototyping',
  description:
    'Interactive prototypes that validate ideas and user experience before development, reducing product risk.',
  path: '/expertise/prototyping',
});

export default function PrototypingPage() {

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
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Interactive Prototyping"
        eyebrowIcon={MousePointerClick}
        title="Prototyping"
        highlight="Services"
        description="We create interactive prototypes that bring your ideas to life, validate user experiences, and ensure your products are built right the first time with minimal development risk."
        highlights={["Low-Fidelity Prototypes", "Mid-Fidelity Prototypes", "High-Fidelity Prototypes", "Interactive Prototypes"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "60%", label: "Cost Reduction" },
          { value: "1-6", label: "Week Delivery" },
          { value: "95%", label: "Stakeholder Approval" },
        ]}
      />

      {/* Prototype Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Prototype Types
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Prototyping
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From quick concept validation to pixel-perfect prototypes, we deliver the right level of fidelity for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prototypeTypes.map((type) => (
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.fidelity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Fidelity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.interactivity}</div>
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Prototyping
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
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
              Comprehensive prototyping deliverables that provide everything needed for successful development.
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

      {/* Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Prototyping Tools
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Professional
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use industry-leading prototyping tools to create exceptional interactive experiences.
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

      {/* Benefits */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Why Prototyping
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Prototyping</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Prototyping provides invaluable benefits that improve your product development process.
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
              Prototyping is ideal for a wide range of digital product development scenarios.
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
            <span className="block text-blue-100 mt-2">Your Prototype?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create an interactive prototype that validates your ideas and accelerates your development process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Prototyping
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
