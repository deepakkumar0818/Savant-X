'use client';

import Footer from '@/components/Footer';

export default function ReactPage() {

  const reactServices = [
    {
      id: 'web-apps',
      title: 'React Web Applications',
      icon: '💻',
      description: 'Modern, responsive web applications built with React.js for optimal performance and user experience.',
      features: ['Single Page Applications', 'Component-Based Architecture', 'State Management', 'Routing & Navigation', 'API Integration', 'Performance Optimization'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      complexity: 'Advanced',
      components: '50-200'
    },
    {
      id: 'dashboards',
      title: 'React Dashboards',
      icon: '📊',
      description: 'Interactive dashboards and admin panels with real-time data visualization and analytics.',
      features: ['Data Visualization', 'Real-time Updates', 'Interactive Charts', 'User Management', 'Custom Widgets', 'Responsive Design'],
      pricing: 'Starting at $7,500',
      timeline: '6-10 weeks',
      complexity: 'Complex',
      components: '100-300'
    },
    {
      id: 'ecommerce',
      title: 'React E-commerce',
      icon: '🛒',
      description: 'Feature-rich e-commerce platforms with shopping carts, payment integration, and order management.',
      features: ['Product Catalogs', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'User Accounts', 'Admin Panel'],
      pricing: 'Starting at $12,000',
      timeline: '8-16 weeks',
      complexity: 'Enterprise',
      components: '200-500'
    },
    {
      id: 'mobile',
      title: 'React Native Apps',
      icon: '📱',
      description: 'Cross-platform mobile applications using React Native for iOS and Android.',
      features: ['Cross-Platform Development', 'Native Performance', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'Device Integration'],
      pricing: 'Starting at $8,000',
      timeline: '6-12 weeks',
      complexity: 'Advanced',
      components: '100-400'
    }
  ];

  const reactEcosystem = [
    {
      category: 'Core Libraries',
      tools: [
        { name: 'React', icon: '⚛️', description: 'UI library for building user interfaces' },
        { name: 'React Router', icon: '🗺️', description: 'Declarative routing for React applications' },
        { name: 'React Hooks', icon: '🎣', description: 'State and lifecycle management' },
        { name: 'React Context', icon: '📦', description: 'Global state management solution' }
      ]
    },
    {
      category: 'State Management',
      tools: [
        { name: 'Redux', icon: '🔄', description: 'Predictable state container' },
        { name: 'Zustand', icon: '🐻', description: 'Lightweight state management' },
        { name: 'Recoil', icon: '⚛️', description: 'Experimental state management' },
        { name: 'MobX', icon: '📊', description: 'Reactive state management' }
      ]
    },
    {
      category: 'UI Libraries',
      tools: [
        { name: 'Material-UI', icon: '🎨', description: 'Google Material Design components' },
        { name: 'Ant Design', icon: '🐜', description: 'Enterprise-class UI design language' },
        { name: 'Chakra UI', icon: '⚡', description: 'Simple, modular and accessible' },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' }
      ]
    },
    {
      category: 'Testing',
      tools: [
        { name: 'Jest', icon: '🧪', description: 'JavaScript testing framework' },
        { name: 'React Testing Library', icon: '🔬', description: 'Simple and complete testing utilities' },
        { name: 'Cypress', icon: '🌲', description: 'End-to-end testing framework' },
        { name: 'Storybook', icon: '📚', description: 'Component development environment' }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Project Setup',
      description: 'Initializing React project with proper configuration and tooling.',
      duration: '1-2 days',
      icon: '🚀'
    },
    {
      step: '02',
      title: 'Component Architecture',
      description: 'Designing component hierarchy and data flow architecture.',
      duration: '3-5 days',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'UI Development',
      description: 'Building responsive user interfaces with modern design principles.',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'State Management',
      description: 'Implementing state management and data flow patterns.',
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '05',
      title: 'API Integration',
      description: 'Connecting frontend with backend APIs and data services.',
      duration: '1-2 weeks',
      icon: '🔗'
    },
    {
      step: '06',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and production deployment.',
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: 'React Application',
      description: 'Fully functional React application with modern architecture.',
      icon: '⚛️'
    },
    {
      title: 'Component Library',
      description: 'Reusable React components with comprehensive documentation.',
      icon: '🧩'
    },
    {
      title: 'State Management',
      description: 'Optimized state management solution for your application.',
      icon: '📊'
    },
    {
      title: 'API Integration',
      description: 'Complete API integration with error handling and loading states.',
      icon: '🔗'
    },
    {
      title: 'Testing Suite',
      description: 'Comprehensive testing suite with unit and integration tests.',
      icon: '🧪'
    },
    {
      title: 'Deployment Setup',
      description: 'Production-ready deployment configuration and documentation.',
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      title: 'Component Reusability',
      description: 'Build reusable components that can be shared across applications.',
      icon: '🧩'
    },
    {
      title: 'Virtual DOM',
      description: 'Fast rendering with React&apos;s efficient virtual DOM implementation.',
      icon: '⚡'
    },
    {
      title: 'Rich Ecosystem',
      description: 'Access to thousands of libraries and tools in the React ecosystem.',
      icon: '🌐'
    },
    {
      title: 'Developer Experience',
      description: 'Excellent developer tools and debugging capabilities.',
      icon: '🛠️'
    },
    {
      title: 'Community Support',
      description: 'Large community and extensive documentation resources.',
      icon: '👥'
    },
    {
      title: 'Future-Proof',
      description: 'Continuously evolving with new features and improvements.',
      icon: '🔮'
    }
  ];

  const useCases = [
    {
      title: 'Corporate Websites',
      description: 'Professional corporate websites with dynamic content management.',
      icon: '🏢'
    },
    {
      title: 'SaaS Applications',
      description: 'Software-as-a-Service applications with complex user interfaces.',
      icon: '☁️'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Online stores with advanced shopping and payment features.',
      icon: '🛒'
    },
    {
      title: 'Social Media Apps',
      description: 'Interactive social platforms with real-time features.',
      icon: '📱'
    },
    {
      title: 'Analytics Dashboards',
      description: 'Data visualization and business intelligence platforms.',
      icon: '📊'
    },
    {
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps using React Native.',
      icon: '📲'
    }
  ];

  const performanceFeatures = [
    {
      title: 'Code Splitting',
      description: 'Lazy loading and code splitting for optimal performance.',
      icon: '✂️'
    },
    {
      title: 'Memoization',
      description: 'React.memo and useMemo for preventing unnecessary re-renders.',
      icon: '🧠'
    },
    {
      title: 'Bundle Optimization',
      description: 'Webpack optimization and tree shaking for smaller bundles.',
      icon: '📦'
    },
    {
      title: 'Server-Side Rendering',
      description: 'Next.js integration for SEO and performance benefits.',
      icon: '🖥️'
    },
    {
      title: 'Progressive Web App',
      description: 'PWA features for app-like experience in browsers.',
      icon: '📱'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring and optimization.',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating React Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">⚛️</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">💻</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🚀</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">⚡</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">⚛️</span>
              React.js Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              React.js
              <span className="block text-blue-600 mt-2">Development</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We build modern, scalable React.js applications with cutting-edge technologies. 
              From simple websites to complex enterprise applications, we deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">React Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Performance Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4-16</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* React Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              React.js
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive React.js development services for web applications, mobile apps, and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reactServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{service.icon}</span>
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
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{service.components}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Components</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* React Ecosystem */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              React Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete React
              <span className="block text-blue-600 mt-2">Technology Stack</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with the entire React ecosystem to build robust and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reactEcosystem.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
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
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              React Development
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality React applications delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
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
              Complete React development deliverables that provide everything needed for successful deployment.
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
              Why React.js
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">React.js</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              React.js provides significant advantages for building modern web applications.
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
              React.js is ideal for a wide range of web application development scenarios.
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

      {/* Performance Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Performance Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Optimized
              <span className="block text-blue-600 mt-2">Performance</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced performance optimization techniques for lightning-fast React applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
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
            <span className="block text-blue-100 mt-2">Your React App?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s create a modern React.js application that delivers exceptional performance and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start React Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
