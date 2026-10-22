import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Code } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'MERN Stack & React Development',
  description:
    'Modern, scalable React and MERN stack applications, from websites to complex business platforms.',
  path: '/expertise/react',
});

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
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="React.js Development"
        eyebrowIcon={Code}
        title="React.js"
        highlight="Development"
        description="We build modern, scalable React.js applications with cutting-edge technologies. From simple websites to complex enterprise applications, we deliver exceptional user experiences."
        highlights={["React Web Applications", "React Dashboards", "React E-commerce", "React Native Apps"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "99%", label: "Performance Score" },
          { value: "4-16", label: "Week Delivery" },
          { value: "100%", label: "Client Satisfaction" },
        ]}
      />

      {/* React Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              React.js
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Solutions</span>
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.components}</div>
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              React Ecosystem
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Complete React
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technology Stack</span>
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
              React Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
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
              Complete React development deliverables that provide everything needed for successful deployment.
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
              Why React.js
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">React.js</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              React.js provides significant advantages for building modern web applications.
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
              React.js is ideal for a wide range of web application development scenarios.
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

      {/* Performance Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Performance Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Optimized
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced performance optimization techniques for lightning-fast React applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start React Project
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
