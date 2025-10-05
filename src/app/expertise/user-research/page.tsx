'use client';

import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Research Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">👥</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">📊</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🔍</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">💡</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-200">
              <span className="text-lg">👥</span>
              User Research
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              User
              <span className="block text-purple-600 mt-2">Research</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We conduct comprehensive user research to understand your audience, validate assumptions, 
              and create data-driven solutions that truly meet user needs and drive business success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Research Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-6</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Users Researched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methods */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              Research Methods
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              User Research
              <span className="block text-purple-600 mt-2">Methodologies</span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                      <span className="text-3xl">{method.icon}</span>
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
                      <div className="text-sm font-bold text-purple-600 mb-1">{method.duration}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{method.participants}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{method.cost}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Research
              <span className="block text-purple-600 mt-2">Process</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                      <span className="text-2xl">{phase.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              Research Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-purple-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive research deliverables that provide actionable insights for your product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{deliverable.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              Why User Research
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-purple-600 mt-2">User Research</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              User research provides invaluable insights that drive product success and user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
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
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Research Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
