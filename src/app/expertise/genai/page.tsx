'use client';

import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🤖</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🧠</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">⚡</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-red-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">💡</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-200">
              <span className="text-lg">🤖</span>
              Generative AI Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              GenAI
              <span className="block text-indigo-600 mt-2">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Harness the power of Generative AI to transform your business. 
              We build intelligent AI solutions using cutting-edge models like GPT-4, Claude, and Gemini to automate processes, generate content, and deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">3-12</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* GEnAI Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              GenAI
              <span className="block text-indigo-600 mt-2">Solutions</span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                      <span className="text-3xl">{service.icon}</span>
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
                      <div className="text-sm font-bold text-indigo-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-pink-600 mb-1">{service.models}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              AI Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete AI
              <span className="block text-indigo-600 mt-2">Technology Ecosystem</span>
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
                        <div className="text-2xl">{tool.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              AI Development
              <span className="block text-indigo-600 mt-2">Process</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-indigo-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete AI development deliverables that provide everything needed for successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{deliverable.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              Why GEnAI
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-indigo-600 mt-2">Generative AI</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Generative AI provides significant advantages for businesses looking to innovate and automate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Perfect For
              <span className="block text-indigo-600 mt-2">These Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Generative AI is ideal for a wide range of business applications and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{useCase.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              AI Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Advanced AI
              <span className="block text-indigo-600 mt-2">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced AI capabilities for intelligent and responsive applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{capability.icon}</span>
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
            <span className="block text-indigo-100 mt-2">with GEnAI?</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed font-light">
            Let&apos;s create intelligent AI solutions that automate processes, generate content, and deliver exceptional experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start AI Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200 font-semibold text-lg">
              View Examples
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

