'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      category: "web",
      image: "🛒",
      description: "Full-stack e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "TechCorp Solutions",
      duration: "6 months",
      results: "300% increase in online sales",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      image: "📊",
      description: "Intelligent business intelligence platform with machine learning algorithms for predictive analytics and reporting.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      client: "DataFlow Inc",
      duration: "4 months",
      results: "50% improvement in decision making",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      image: "📱",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
      technologies: ["React Native", "Node.js", "AWS", "Blockchain"],
      client: "SecureBank",
      duration: "8 months",
      results: "1M+ downloads in first year",
      featured: true
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "web",
      image: "🏥",
      description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      client: "MediCare Plus",
      duration: "5 months",
      results: "40% reduction in admin time",
      featured: false
    },
    {
      id: 5,
      title: "IoT Smart Home Solution",
      category: "iot",
      image: "🏠",
      description: "Connected home automation system with smart devices, energy monitoring, and security features.",
      technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
      client: "SmartHome Co",
      duration: "7 months",
      results: "60% energy savings",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain Supply Chain",
      category: "blockchain",
      image: "⛓️",
      description: "Transparent supply chain tracking system using blockchain technology for product authenticity and traceability.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      client: "LogiChain",
      duration: "6 months",
      results: "100% traceability achieved",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', name: 'AI/ML Solutions', count: projects.filter(p => p.category === 'ai').length },
    { id: 'iot', name: 'IoT Solutions', count: projects.filter(p => p.category === 'iot').length },
    { id: 'blockchain', name: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium mb-8 border border-slate-200">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              Our Portfolio
            </div>

            {/* Professional Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Professional
              <span className="block text-blue-600 mt-2">
                Work Portfolio
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Discover our portfolio of innovative projects that have transformed businesses and delivered exceptional results across various industries.
            </p>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  <AnimatedCounter end={150} suffix="+" duration={2800} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  <AnimatedCounter end={98} suffix="%" duration={2200} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  <AnimatedCounter end={25} suffix="+" duration={1600} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Showcasing our most impactful and innovative solutions that have delivered exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Project Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-3xl">{project.image}</span>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-slate-500">Client</span>
                      <span className="text-sm text-slate-900">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-slate-500">Duration</span>
                      <span className="text-sm text-slate-900">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-slate-500">Result</span>
                      <span className="text-sm text-green-600 font-semibold">{project.results}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our comprehensive portfolio across different technologies and industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Project Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-2xl">{project.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">{project.client}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="font-semibold text-slate-900">{project.duration}</div>
                      <div className="text-slate-500">Duration</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="font-semibold text-green-600">{project.results}</div>
                      <div className="text-slate-500">Result</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let&apos;s discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 font-medium text-base">
              Start a Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-200 font-medium text-base">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
