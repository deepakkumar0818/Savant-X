import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Palette } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'UI/UX Design',
  description:
    'User-centred UX research, interface design and design systems from SavantX Technologies.',
  path: '/expertise/ui-ux-design',
});

export default function UIUXDesignPage() {

  const designServices = [
    {
      id: 'ux',
      title: 'UX Design',
      icon: '📐',
      description: 'User experience design focused on usability, accessibility, and user satisfaction.',
      features: ['User Research', 'Information Architecture', 'User Journey Mapping', 'Wireframing', 'Usability Testing', 'Accessibility Design'],
      pricing: 'Starting at $5,000',
      timeline: '3-6 weeks',
      color: 'blue'
    },
    {
      id: 'ui',
      title: 'UI Design',
      icon: '🎨',
      description: 'User interface design creating visually appealing and intuitive digital experiences.',
      features: ['Visual Design', 'Component Design', 'Design Systems', 'Brand Integration', 'Responsive Design', 'Interactive Prototypes'],
      pricing: 'Starting at $4,000',
      timeline: '2-5 weeks',
      color: 'purple'
    },
    {
      id: 'research',
      title: 'UX Research',
      icon: '🔍',
      description: 'Comprehensive user research to understand needs, behaviors, and pain points.',
      features: ['User Interviews', 'Surveys & Analytics', 'Usability Testing', 'Persona Development', 'Competitive Analysis', 'Insights & Recommendations'],
      pricing: 'Starting at $3,500',
      timeline: '2-4 weeks',
      color: 'green'
    },
    {
      id: 'prototyping',
      title: 'Prototyping',
      icon: '⚡',
      description: 'Interactive prototypes to test and validate design concepts before development.',
      features: ['Low-Fidelity Prototypes', 'High-Fidelity Prototypes', 'Interactive Testing', 'User Feedback', 'Iteration Support', 'Developer Handoff'],
      pricing: 'Starting at $2,500',
      timeline: '1-3 weeks',
      color: 'orange'
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Understanding users, business goals, and project requirements.',
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Defining information architecture and user experience strategy.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Wireframing & Structure',
      description: 'Creating low-fidelity layouts and content structure.',
      duration: '1-2 weeks',
      icon: '📐'
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Developing high-fidelity designs with brand integration.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '05',
      title: 'Prototyping & Testing',
      description: 'Creating interactive prototypes and user testing.',
      duration: '1-2 weeks',
      icon: '⚡'
    },
    {
      step: '06',
      title: 'Handoff & Support',
      description: 'Developer handoff and ongoing design support.',
      duration: '1 week',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'User Personas',
      description: 'Detailed user profiles based on research and insights.',
      icon: '👤'
    },
    {
      title: 'User Journey Maps',
      description: 'Visual representation of user interactions and touchpoints.',
      icon: '🗺️'
    },
    {
      title: 'Information Architecture',
      description: 'Site structure and content organization strategy.',
      icon: '🏗️'
    },
    {
      title: 'Wireframes',
      description: 'Low-fidelity layouts showing structure and functionality.',
      icon: '📐'
    },
    {
      title: 'Visual Designs',
      description: 'High-fidelity designs with brand integration.',
      icon: '🎨'
    },
    {
      title: 'Interactive Prototypes',
      description: 'Clickable prototypes for testing and validation.',
      icon: '⚡'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design guidelines and component library.',
      icon: '📚'
    },
    {
      title: 'Usability Report',
      description: 'Testing results and recommendations for improvement.',
      icon: '📊'
    }
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', description: 'Collaborative design tool', category: 'Design' },
    { name: 'Sketch', icon: '✏️', description: 'Vector graphics editor', category: 'Design' },
    { name: 'Adobe XD', icon: '🎯', description: 'UX/UI design platform', category: 'Design' },
    { name: 'InVision', icon: '🔄', description: 'Prototyping and collaboration', category: 'Prototyping' },
    { name: 'Principle', icon: '⚡', description: 'Animation and interaction design', category: 'Animation' },
    { name: 'Maze', icon: '🧪', description: 'User testing platform', category: 'Testing' },
    { name: 'Hotjar', icon: '🔥', description: 'User behavior analytics', category: 'Analytics' },
    { name: 'Zeplin', icon: '📱', description: 'Design handoff tool', category: 'Handoff' }
  ];

  const principles = [
    {
      title: 'User-Centered Design',
      description: 'Every decision is based on user needs, behaviors, and feedback.',
      icon: '👥'
    },
    {
      title: 'Accessibility First',
      description: 'Designing for all users, including those with disabilities.',
      icon: '♿'
    },
    {
      title: 'Consistency & Standards',
      description: 'Maintaining visual and functional consistency across the product.',
      icon: '📏'
    },
    {
      title: 'Performance Optimized',
      description: 'Designing for speed and efficiency without compromising quality.',
      icon: '⚡'
    },
    {
      title: 'Mobile-First',
      description: 'Designing for mobile devices first, then scaling up.',
      icon: '📱'
    },
    {
      title: 'Data-Driven',
      description: 'Using analytics and user feedback to inform design decisions.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="UI/UX Design"
        eyebrowIcon={Palette}
        title="UI/UX"
        highlight="Design Services"
        description="We create exceptional user experiences through thoughtful UX research, intuitive interface design, and comprehensive design systems that drive user engagement and business success."
        highlights={["UX Design", "UI Design", "UX Research", "Prototyping"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "85%", label: "User Satisfaction" },
          { value: "2-6", label: "Week Delivery" },
          { value: "50%", label: "Conversion Increase" },
        ]}
      />

      {/* Design Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              UI/UX Design
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive design services covering every aspect of user experience and interface design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      service.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      service.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      service.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300'
                    } rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      <ServiceIcon emoji={service.icon} size="lg" />
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

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Design
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic 6-step design process ensures exceptional user experiences and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, index) => (
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
              Design Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive design deliverables that provide everything needed for successful implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Design Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Design Tools
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Professional
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Design Tools</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use industry-leading design tools to create exceptional user experiences.
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

      {/* Design Principles */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Design Principles
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Our Design
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Core principles that guide our design decisions and ensure exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={principle.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {principle.description}
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
            Ready to Create
            <span className="block text-blue-100 mt-2">Exceptional Experiences?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s work together to design user experiences that delight your customers and drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
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
