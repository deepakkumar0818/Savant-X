'use client';

import Footer from '@/components/Footer';

export default function WebsitesPage() {

  const websiteTypes = [
    {
      id: 'corporate',
      title: 'Corporate Websites',
      icon: '🏢',
      description: 'Professional corporate websites that establish credibility and showcase your business.',
      features: ['Company Branding', 'About Us Pages', 'Contact Information', 'Service Showcase', 'Team Profiles', 'News & Updates'],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Websites',
      icon: '🎨',
      description: 'Creative portfolio websites to showcase your work and attract potential clients.',
      features: ['Project Galleries', 'Case Studies', 'Client Testimonials', 'Blog Integration', 'Contact Forms', 'Social Media Integration'],
      pricing: 'Starting at $1,800',
      timeline: '1-3 weeks'
    },
    {
      id: 'landing',
      title: 'Landing Pages',
      icon: '🚀',
      description: 'High-converting landing pages designed to maximize your marketing campaigns.',
      features: ['A/B Testing Ready', 'Lead Capture Forms', 'Analytics Integration', 'Mobile Optimized', 'Fast Loading', 'SEO Optimized'],
      pricing: 'Starting at $800',
      timeline: '1-2 weeks'
    },
    {
      id: 'blog',
      title: 'Blog Websites',
      icon: '📝',
      description: 'Content-focused websites perfect for bloggers, writers, and content creators.',
      features: ['CMS Integration', 'Comment System', 'Social Sharing', 'Email Newsletter', 'Search Functionality', 'Multi-author Support'],
      pricing: 'Starting at $1,200',
      timeline: '2-3 weeks'
    }
  ];

  const technologies = [
    { name: 'Next.js', icon: '⚡', description: 'React framework for production' },
    { name: 'React', icon: '⚛️', description: 'Modern JavaScript library' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Framer Motion', icon: '🎬', description: 'Animation library' },
    { name: 'Headless CMS', icon: '📄', description: 'Content management solutions' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and requirements.',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Creating user-centered designs and interactive wireframes for your approval.',
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your website with modern technologies and best practices.',
      duration: '1-3 weeks'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing across devices and browsers before going live.',
      duration: '2-3 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">✈️</span>
              Website Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Professional
              <span className="block text-blue-600 mt-2">Website Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We create stunning, high-performance websites that drive results. From corporate sites to portfolios, 
              we deliver exceptional web experiences that engage your audience and grow your business.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2-4</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Website Types
              <span className="block text-blue-600 mt-2">We Build</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From simple landing pages to complex corporate websites, we have the expertise to deliver exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-3xl">{type.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {type.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                    {type.features.length > 3 && (
                      <div className="text-sm text-slate-500">
                        +{type.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">Starting Price</span>
                      <span className="text-sm font-bold text-blue-600">{type.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">Timeline</span>
                      <span className="text-sm font-bold text-green-600">{type.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Modern
              <span className="block text-blue-600 mt-2">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              How We
              <span className="block text-blue-600 mt-2">Build Websites</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 4-step process ensures your website is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-6 border border-blue-200">
                    Step {step.step}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-600">{step.duration}</span>
                  </div>
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
            Ready to Build Your
            <span className="block text-blue-100 mt-2">Dream Website?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your project and create a website that drives results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
