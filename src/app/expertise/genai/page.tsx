import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Sparkles } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Generative AI Solutions',
  description:
    'Generative AI solutions from SavantX Technologies that automate processes, generate content and support better decisions.',
  path: '/expertise/genai',
});

export default function GenAIPage() {

  const genAIServices = [
    {
      id: 'chatbots',
      title: 'AI Chatbots & Assistants',
      icon: '💬',
      description: 'Intelligent conversational AI chatbots that understand context and provide natural interactions.',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      models: 'GPT-4, Claude, Gemini'
    },
    {
      id: 'content-generation',
      title: 'Content Generation',
      icon: '✍️',
      description: 'AI-powered content creation for blogs, marketing materials, and documentation.',
      features: ['Text Generation', 'Image Generation', 'Video Scripts', 'SEO Optimization', 'Brand Voice', 'Multi-format Export'],
      pricing: 'Starting at $3,500',
      timeline: '3-6 weeks',
      complexity: 'Standard',
      models: 'GPT-4, DALL-E, Midjourney'
    },
    {
      id: 'data-analysis',
      title: 'AI Data Analysis',
      icon: '📊',
      description: 'Advanced AI analytics and insights from your business data.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Reports', 'Data Visualization', 'Anomaly Detection', 'Custom Dashboards'],
      pricing: 'Starting at $6,000',
      timeline: '5-10 weeks',
      complexity: 'Enterprise',
      models: 'Custom Models, GPT-4'
    },
    {
      id: 'automation',
      title: 'AI Workflow Automation',
      icon: '⚙️',
      description: 'Intelligent automation solutions that learn and adapt to your business processes.',
      features: ['Process Automation', 'Smart Routing', 'Decision Making', 'Task Prioritization', 'Error Handling', 'Performance Monitoring'],
      pricing: 'Starting at $4,500',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      models: 'Custom AI Models'
    },
    {
      id: 'personalization',
      title: 'AI Personalization',
      icon: '🎯',
      description: 'Personalized user experiences powered by machine learning and AI.',
      features: ['User Profiling', 'Recommendation Engine', 'Dynamic Content', 'Behavioral Analysis', 'A/B Testing', 'Real-time Adaptation'],
      pricing: 'Starting at $5,500',
      timeline: '5-9 weeks',
      complexity: 'Enterprise',
      models: 'Custom ML Models'
    },
    {
      id: 'code-generation',
      title: 'AI Code Generation',
      icon: '💻',
      description: 'AI-powered code generation and development assistance tools.',
      features: ['Code Completion', 'Bug Detection', 'Refactoring', 'Documentation', 'Test Generation', 'Code Review'],
      pricing: 'Starting at $7,000',
      timeline: '6-12 weeks',
      complexity: 'Enterprise',
      models: 'GPT-4, GitHub Copilot, Custom'
    }
  ];

  const aiTechnologies = [
    {
      category: 'Large Language Models',
      tools: [
        { name: 'OpenAI GPT-4', icon: '🤖', description: 'Advanced language model for text generation' },
        { name: 'Anthropic Claude', icon: '🧠', description: 'Safe and helpful AI assistant' },
        { name: 'Google Gemini', icon: '💎', description: 'Multimodal AI model' },
        { name: 'Llama 2', icon: '🦙', description: 'Open-source LLM by Meta' }
      ]
    },
    {
      category: 'Image Generation',
      tools: [
        { name: 'DALL-E 3', icon: '🎨', description: 'AI image generation from text' },
        { name: 'Midjourney', icon: '🖼️', description: 'Artistic image creation' },
        { name: 'Stable Diffusion', icon: '🌈', description: 'Open-source image generation' },
        { name: 'Adobe Firefly', icon: '🔥', description: 'Creative AI by Adobe' }
      ]
    },
    {
      category: 'AI Frameworks',
      tools: [
        { name: 'TensorFlow', icon: '🔧', description: 'Machine learning framework' },
        { name: 'PyTorch', icon: '🔥', description: 'Deep learning research platform' },
        { name: 'LangChain', icon: '⛓️', description: 'LLM application framework' },
        { name: 'Hugging Face', icon: '🤗', description: 'AI model library and tools' }
      ]
    },
    {
      category: 'AI Services',
      tools: [
        { name: 'OpenAI API', icon: '🔌', description: 'GPT models API integration' },
        { name: 'Azure AI', icon: '☁️', description: 'Microsoft cloud AI services' },
        { name: 'AWS Bedrock', icon: '🏗️', description: 'Amazon AI foundation models' },
        { name: 'Google AI', icon: '🔍', description: 'Google Cloud AI platform' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Requirements & Use Case',
      description: 'Understanding your business needs and defining AI use cases.',
      duration: '3-5 days',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Model Selection',
      description: 'Choosing the right AI models and frameworks for your project.',
      duration: '5-7 days',
      icon: '🎯'
    },
    {
      step: '03',
      title: 'Data Preparation',
      description: 'Collecting, cleaning, and preparing data for AI training.',
      duration: '7-14 days',
      icon: '📊'
    },
    {
      step: '04',
      title: 'Model Training/Fine-tuning',
      description: 'Training or fine-tuning AI models for your specific needs.',
      duration: '10-20 days',
      icon: '🧠'
    },
    {
      step: '05',
      title: 'Integration & Testing',
      description: 'Integrating AI into your systems and comprehensive testing.',
      duration: '7-14 days',
      icon: '🔗'
    },
    {
      step: '06',
      title: 'Deployment & Monitoring',
      description: 'Production deployment and continuous monitoring.',
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'AI Solution',
      description: 'Fully functional AI-powered solution tailored to your needs.',
      icon: '🤖'
    },
    {
      title: 'Model Documentation',
      description: 'Comprehensive documentation for AI models and architecture.',
      icon: '📚'
    },
    {
      title: 'API Integration',
      description: 'Complete API integration with your existing systems.',
      icon: '🔌'
    },
    {
      title: 'Training Data',
      description: 'Curated and prepared training datasets for your AI models.',
      icon: '📊'
    },
    {
      title: 'Performance Metrics',
      description: 'Analytics and monitoring tools for AI performance tracking.',
      icon: '📈'
    },
    {
      title: 'Maintenance Plan',
      description: 'Ongoing support and model improvement strategies.',
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Efficiency',
      description: 'Automate repetitive tasks and processes with intelligent AI solutions.',
      icon: '⚡'
    },
    {
      title: 'Better Insights',
      description: 'Gain deeper insights from your data with AI-powered analytics.',
      icon: '🔍'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation.',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'Scale your operations with AI that adapts to growing demands.',
      icon: '📈'
    },
    {
      title: 'Personalization',
      description: 'Deliver personalized experiences to your customers at scale.',
      icon: '🎯'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI technologies and capabilities.',
      icon: '🚀'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'AI-powered chatbots and virtual assistants for 24/7 customer support.',
      icon: '💬'
    },
    {
      title: 'Content Creation',
      description: 'Automated content generation for marketing, blogs, and documentation.',
      icon: '✍️'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced AI analytics for business intelligence and decision making.',
      icon: '📊'
    },
    {
      title: 'E-commerce',
      description: 'Personalized product recommendations and shopping experiences.',
      icon: '🛒'
    },
    {
      title: 'Healthcare',
      description: 'AI-powered diagnostics, treatment recommendations, and patient care.',
      icon: '🏥'
    },
    {
      title: 'Finance',
      description: 'Fraud detection, risk analysis, and automated financial services.',
      icon: '💳'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP for understanding and generating human language.',
      icon: '🗣️'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis with AI-powered vision models.',
      icon: '👁️'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with machine learning models.',
      icon: '🔮'
    },
    {
      title: 'Speech Recognition',
      description: 'Convert speech to text and enable voice-controlled applications.',
      icon: '🎤'
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendations based on user behavior and preferences.',
      icon: '💡'
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues in real-time.',
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Generative AI Development"
        eyebrowIcon={Sparkles}
        title="GenAI"
        highlight="Solutions"
        description="Harness the power of Generative AI to transform your business. We build intelligent AI solutions using cutting-edge models like GPT-4, Claude, and Gemini to automate processes, generate content, and deliver exceptional user experiences."
        highlights={["AI Chatbots & Assistants", "Content Generation", "AI Data Analysis", "AI Workflow Automation"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "95%", label: "Accuracy Rate" },
          { value: "3-12", label: "Week Delivery" },
          { value: "100%", label: "Client Satisfaction" },
        ]}
      />

      {/* GenAI Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              GenAI
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive Generative AI development services for chatbots, content generation, data analysis, and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genAIServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={service.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
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
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.models}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">AI Models</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              AI Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Complete AI
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technology Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with the latest AI models, frameworks, and platforms to build cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aiTechnologies.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-all duration-200">
                        <ServiceIcon emoji={tool.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{tool.name}</h4>
                          <p className="text-sm text-slate-600">{tool.description}</p>
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              AI Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality AI solutions delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-indigo-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-indigo-600">{step.duration}</div>
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
              Complete AI development deliverables that provide everything needed for successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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
              Why GenAI
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Generative AI</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Generative AI provides significant advantages for businesses looking to innovate and automate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">These Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Generative AI is ideal for a wide range of business applications and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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

      {/* AI Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              AI Capabilities
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Advanced AI
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced AI capabilities for intelligent and responsive applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={capability.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform
            <span className="block text-indigo-100 mt-2">with GenAI?</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed font-light">
            Let&apos;s create intelligent AI solutions that automate processes, generate content, and deliver exceptional experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start AI Project
            </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200 font-semibold text-lg">
              View Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
