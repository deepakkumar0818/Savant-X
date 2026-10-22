import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Search } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'User Research',
  description:
    'User interviews, usability testing and research that turn assumptions into evidence-based product decisions.',
  path: '/expertise/user-research',
});

export default function UserResearchPage() {

  const researchMethods = [
    {
      id: 'interviews',
      title: 'User Interviews',
      icon: '👥',
      description: 'One-on-one conversations to understand user needs, motivations, and pain points.',
      features: ['In-depth Insights', 'Behavioral Understanding', 'Pain Point Discovery', 'User Journey Mapping', 'Qualitative Data', 'Empathy Building'],
      duration: '1-2 hours per session',
      participants: '5-10 users',
      cost: 'Starting at $2,500'
    },
    {
      id: 'surveys',
      title: 'User Surveys',
      icon: '📊',
      description: 'Quantitative research to gather data from large user groups efficiently.',
      features: ['Large Sample Size', 'Statistical Analysis', 'Quick Data Collection', 'Demographic Insights', 'Trend Identification', 'Scalable Research'],
      duration: '2-4 weeks',
      participants: '100-1000+ users',
      cost: 'Starting at $1,500'
    },
    {
      id: 'usability',
      title: 'Usability Testing',
      icon: '🔍',
      description: 'Observing users interact with your product to identify usability issues.',
      features: ['Task-based Testing', 'Error Identification', 'Performance Metrics', 'User Behavior Analysis', 'Interface Evaluation', 'Improvement Recommendations'],
      duration: '1-2 hours per session',
      participants: '5-8 users',
      cost: 'Starting at $3,000'
    },
    {
      id: 'analytics',
      title: 'Analytics Analysis',
      icon: '📈',
      description: 'Data-driven insights from user behavior and interaction patterns.',
      features: ['Behavior Tracking', 'Conversion Analysis', 'User Flow Mapping', 'Performance Metrics', 'A/B Testing', 'Data Visualization'],
      duration: '2-3 weeks',
      participants: 'All users',
      cost: 'Starting at $2,000'
    }
  ];

  const researchPhases = [
    {
      phase: '01',
      title: 'Planning & Setup',
      description: 'Define research objectives, select methods, and prepare research materials.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      phase: '02',
      title: 'Recruitment',
      description: 'Identify and recruit target users based on your personas and criteria.',
      duration: '1-2 weeks',
      icon: '👥'
    },
    {
      phase: '03',
      title: 'Data Collection',
      description: 'Conduct research sessions and gather insights from participants.',
      duration: '2-4 weeks',
      icon: '🎯'
    },
    {
      phase: '04',
      title: 'Analysis & Synthesis',
      description: 'Analyze findings and create actionable insights and recommendations.',
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      phase: '05',
      title: 'Reporting & Presentation',
      description: 'Deliver comprehensive research reports and present findings to stakeholders.',
      duration: '1 week',
      icon: '📄'
    }
  ];

  const deliverables = [
    {
      title: 'User Personas',
      description: 'Detailed profiles of your target users based on research findings.',
      icon: '👤'
    },
    {
      title: 'User Journey Maps',
      description: 'Visual representation of user interactions with your product.',
      icon: '🗺️'
    },
    {
      title: 'Pain Point Analysis',
      description: 'Identified problems and friction points in the user experience.',
      icon: '⚠️'
    },
    {
      title: 'Usability Report',
      description: 'Detailed findings from usability testing with actionable recommendations.',
      icon: '📋'
    },
    {
      title: 'Research Insights',
      description: 'Key findings and strategic recommendations for product improvement.',
      icon: '💡'
    },
    {
      title: 'Competitive Analysis',
      description: 'Analysis of competitor products and user experience patterns.',
      icon: '🔍'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed product decisions based on real user data and insights.',
      icon: '📊'
    },
    {
      title: 'Improved User Experience',
      description: 'Identify and solve user problems to create better experiences.',
      icon: '✨'
    },
    {
      title: 'Reduced Development Costs',
      description: 'Catch issues early to avoid expensive redesigns later.',
      icon: '💰'
    },
    {
      title: 'Increased User Satisfaction',
      description: 'Build products that truly meet user needs and expectations.',
      icon: '😊'
    },
    {
      title: 'Competitive Advantage',
      description: 'Understand users better than competitors to gain market advantage.',
      icon: '🏆'
    },
    {
      title: 'Risk Mitigation',
      description: 'Validate assumptions and reduce the risk of product failure.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="User Research"
        eyebrowIcon={Search}
        title="User"
        highlight="Research"
        description="We conduct comprehensive user research to understand your audience, validate assumptions, and create data-driven solutions that truly meet user needs and drive business success."
        highlights={["User Interviews", "User Surveys", "Usability Testing", "Analytics Analysis"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "95%", label: "Success Rate" },
          { value: "2-6", label: "Week Delivery" },
          { value: "1000+", label: "Users Researched" },
        ]}
      />

      {/* Research Methods */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Research Methods
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              User Research
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Methodologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use proven research methods to gather deep insights about your users and their needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchMethods.map((method) => (
              <div key={method.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={method.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                        {method.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.duration}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.participants}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.cost}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Research
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures thorough research and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {researchPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-purple-200">
                      {phase.phase}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={phase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  <div className="text-xs font-medium text-purple-600">{phase.duration}</div>
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
              Research Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive research deliverables that provide actionable insights for your product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
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
              Why User Research
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">User Research</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              User research provides invaluable insights that drive product success and user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Understand
            <span className="block text-purple-100 mt-2">Your Users?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed font-light">
            Let&apos;s conduct comprehensive user research to create products that truly meet your users&apos; needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Research Project
            </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
