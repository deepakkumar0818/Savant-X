import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Lightbulb } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Innovation & Emerging Technology',
  description:
    'Applied innovation with AI, IoT, AR/VR and other emerging technologies to keep your business ahead.',
  path: '/expertise/innovation',
});

export default function InnovationPage() {

  const innovationServices = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Cutting-edge artificial intelligence and machine learning solutions to automate processes and gain insights.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants', 'Data Science'],
      pricing: 'Starting at $15,000',
      timeline: '8-16 weeks',
      complexity: 'Advanced',
      features_count: '40+'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      icon: '⛓️',
      description: 'Blockchain and cryptocurrency solutions for secure, decentralized applications and smart contracts.',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Cryptocurrency Wallets', 'Supply Chain Tracking', 'Identity Verification'],
      pricing: 'Starting at $20,000',
      timeline: '10-20 weeks',
      complexity: 'Enterprise',
      features_count: '35+'
    },
    {
      id: 'iot',
      title: 'IoT & Connected Devices',
      icon: '🌐',
      description: 'Internet of Things solutions connecting devices and sensors for smart automation and data collection.',
      features: ['Device Connectivity', 'Real-time Monitoring', 'Sensor Integration', 'Data Analytics', 'Remote Control', 'Predictive Maintenance'],
      pricing: 'Starting at $12,000',
      timeline: '6-12 weeks',
      complexity: 'Advanced',
      features_count: '30+'
    },
    {
      id: 'ar-vr',
      title: 'AR/VR & Metaverse',
      icon: '🥽',
      description: 'Augmented and virtual reality experiences for immersive user interactions and virtual environments.',
      features: ['Virtual Reality Apps', 'Augmented Reality', '3D Modeling', 'Immersive Experiences', 'Virtual Training', 'Metaverse Integration'],
      pricing: 'Starting at $18,000',
      timeline: '12-24 weeks',
      complexity: 'Enterprise',
      features_count: '45+'
    }
  ];

  const innovationAreas = [
    {
      category: 'Emerging Technologies',
      technologies: [
        { name: 'Artificial Intelligence', icon: '🧠', description: 'AI-powered solutions and automation' },
        { name: 'Machine Learning', icon: '📊', description: 'Predictive analytics and data insights' },
        { name: 'Blockchain', icon: '⛓️', description: 'Decentralized and secure applications' },
        { name: 'Quantum Computing', icon: '⚛️', description: 'Next-generation computing power' }
      ]
    },
    {
      category: 'Digital Transformation',
      technologies: [
        { name: 'Cloud Computing', icon: '☁️', description: 'Scalable cloud infrastructure and services' },
        { name: 'Edge Computing', icon: '🔗', description: 'Distributed computing at the edge' },
        { name: 'Microservices', icon: '🧩', description: 'Modular and scalable architecture' },
        { name: 'API Integration', icon: '🔌', description: 'Seamless system integration' }
      ]
    },
    {
      category: 'User Experience',
      technologies: [
        { name: 'AR/VR', icon: '🥽', description: 'Immersive user experiences' },
        { name: 'Voice Interfaces', icon: '🎤', description: 'Voice-activated applications' },
        { name: 'Gesture Control', icon: '👋', description: 'Touch-free interaction systems' },
        { name: 'Brain-Computer Interface', icon: '🧠', description: 'Direct neural interaction' }
      ]
    },
    {
      category: 'Data & Analytics',
      technologies: [
        { name: 'Big Data', icon: '📈', description: 'Large-scale data processing and analysis' },
        { name: 'Real-time Analytics', icon: '⚡', description: 'Live data processing and insights' },
        { name: 'Data Visualization', icon: '📊', description: 'Interactive data presentation' },
        { name: 'Predictive Modeling', icon: '🔮', description: 'Future trend prediction' }
      ]
    }
  ];

  const innovationProcess = [
    {
      step: '01',
      title: 'Innovation Discovery',
      description: 'Exploring cutting-edge technologies and identifying innovation opportunities.',
      duration: '2-3 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Technology Research',
      description: 'Deep research into emerging technologies and their potential applications.',
      duration: '2-4 weeks',
      icon: '🔬'
    },
    {
      step: '03',
      title: 'Prototype Development',
      description: 'Creating proof-of-concept prototypes to validate innovative ideas.',
      duration: '4-8 weeks',
      icon: '🧪'
    },
    {
      step: '04',
      title: 'Technology Integration',
      description: 'Integrating innovative technologies with existing systems and workflows.',
      duration: '6-12 weeks',
      icon: '⚙️'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization of innovative solutions.',
      duration: '2-4 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Innovation Deployment',
      description: 'Deploying innovative solutions with ongoing support and evolution.',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'Innovation Strategy',
      description: 'Comprehensive strategy for implementing cutting-edge technologies.',
      icon: '📋'
    },
    {
      title: 'Prototype Solutions',
      description: 'Working prototypes demonstrating innovative concepts and capabilities.',
      icon: '🧪'
    },
    {
      title: 'Technology Integration',
      description: 'Seamless integration of innovative technologies with existing systems.',
      icon: '⚙️'
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced analytics and monitoring for innovative solutions.',
      icon: '📊'
    },
    {
      title: 'Innovation Training',
      description: 'Training programs for teams to work with new technologies.',
      icon: '🎓'
    },
    {
      title: 'Future Roadmap',
      description: 'Strategic roadmap for continued innovation and technology evolution.',
      icon: '🗺️'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions.',
      icon: '🏆'
    },
    {
      title: 'Future-Proof Solutions',
      description: 'Build solutions that adapt and evolve with technological advancements.',
      icon: '🔮'
    },
    {
      title: 'Enhanced Efficiency',
      description: 'Automate processes and improve efficiency with innovative technologies.',
      icon: '⚡'
    },
    {
      title: 'Better User Experience',
      description: 'Deliver exceptional user experiences with modern, intuitive interfaces.',
      icon: '😊'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Leverage advanced analytics for better decision-making and insights.',
      icon: '📊'
    },
    {
      title: 'Scalable Architecture',
      description: 'Build solutions that scale with your business growth and demands.',
      icon: '📈'
    }
  ];

  const innovationTypes = [
    {
      title: 'Disruptive Innovation',
      description: 'Game-changing solutions that transform entire industries and markets.',
      icon: '💥'
    },
    {
      title: 'Incremental Innovation',
      description: 'Continuous improvements and enhancements to existing products and services.',
      icon: '🔄'
    },
    {
      title: 'Process Innovation',
      description: 'Innovative approaches to business processes and operational efficiency.',
      icon: '⚙️'
    },
    {
      title: 'Product Innovation',
      description: 'New products and features that meet evolving customer needs.',
      icon: '🆕'
    }
  ];

  const emergingTech = [
    {
      title: 'Artificial Intelligence',
      description: 'Machine learning, natural language processing, and intelligent automation.',
      icon: '🤖'
    },
    {
      title: 'Blockchain Technology',
      description: 'Decentralized applications, smart contracts, and cryptocurrency solutions.',
      icon: '⛓️'
    },
    {
      title: 'Internet of Things',
      description: 'Connected devices, smart sensors, and IoT ecosystem development.',
      icon: '🌐'
    },
    {
      title: 'Augmented Reality',
      description: 'AR applications, immersive experiences, and mixed reality solutions.',
      icon: '🥽'
    },
    {
      title: 'Edge Computing',
      description: 'Distributed computing, real-time processing, and edge AI applications.',
      icon: '🔗'
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and next-generation computing.',
      icon: '⚛️'
    }
  ];

  const innovationMetrics = [
    {
      title: 'Time to Market',
      description: 'Accelerate product development and reduce time to market with innovative approaches.',
      icon: '⏱️'
    },
    {
      title: 'Innovation ROI',
      description: 'Measure return on investment for innovation initiatives and technology adoption.',
      icon: '💰'
    },
    {
      title: 'Technology Adoption',
      description: 'Track adoption rates and user engagement with innovative solutions.',
      icon: '📈'
    },
    {
      title: 'Patent Portfolio',
      description: 'Build intellectual property through innovative solutions and technology patents.',
      icon: '📜'
    },
    {
      title: 'Market Disruption',
      description: 'Measure market impact and disruption caused by innovative solutions.',
      icon: '🌊'
    },
    {
      title: 'Future Readiness',
      description: 'Assess readiness for future technological changes and market shifts.',
      icon: '🔮'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Innovation Solutions"
        eyebrowIcon={Lightbulb}
        title="Innovation"
        highlight="Experience"
        description="We push the boundaries of technology with cutting-edge innovation solutions. From AI and blockchain to AR/VR and IoT, we help you stay ahead of the curve with next-generation technologies."
        highlights={["AI & Machine Learning", "Blockchain Solutions", "IoT & Connected Devices", "AR/VR & Metaverse"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "15+", label: "Patents Filed" },
          { value: "8-24", label: "Week Delivery" },
          { value: "Future-Ready", label: "Solutions" },
        ]}
      />

      {/* Innovation Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Innovation
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Cutting-edge technology solutions that drive innovation and transform businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationServices.map((service) => (
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

      {/* Innovation Areas */}
      <section id="technologies" className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Innovation Areas
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Cutting-Edge
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We specialize in the latest technologies that are shaping the future of business and society.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {innovationAreas.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={tech.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                          <p className="text-sm text-slate-600">{tech.description}</p>
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

      {/* Emerging Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Emerging Technologies
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Next-Generation
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Leading-edge technologies that are transforming industries and creating new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTech.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={tech.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Types of Innovation
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Innovation
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Approaches</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Different approaches to innovation that drive transformation and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={type.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Innovation
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach to innovation ensures cutting-edge solutions that deliver real value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationProcess.map((step, index) => (
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

      {/* Innovation Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Innovation Metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Measuring
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Innovation Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key metrics to track and measure the success of innovation initiatives and technology adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={metric.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
              Complete innovation development deliverables that provide cutting-edge solutions and future-ready technology.
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
              Why Innovation Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Innovation Technology</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Innovation technology provides significant advantages for businesses looking to stay competitive and future-ready.
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
            Ready to Innovate
            <span className="block text-blue-100 mt-2">with Cutting-Edge Technology?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s work together to build innovative solutions that transform your business and drive future success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Innovation Project
            </Link>
            <Link href="#technologies" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
