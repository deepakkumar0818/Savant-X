'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Doctor Appointment System",
      category: "healthcare",
      image: "🏥",
      description: "Comprehensive healthcare management platform enabling patients to book appointments, manage medical records, and communicate with healthcare providers seamlessly.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      client: "MediCare Solutions",
      duration: "4 months",
      results: "150+ active users",
      featured: true
    },
    {
      id: 2,
      title: "Food Ordering App",
      category: "mobile",
      image: "🍕",
      description: "Complete food delivery solution with restaurant management, order tracking, payment processing, and real-time delivery updates for enhanced customer experience.",
      technologies: ["React Native", "Express", "MongoDB", "Stripe API"],
      client: "FoodieHub",
      duration: "5 months",
      results: "300+ restaurants onboarded",
      featured: true
    },
    {
      id: 3,
      title: "Real Estate App",
      category: "web",
      image: "🏠",
      description: "Advanced property management platform with property listings, virtual tours, mortgage calculators, and comprehensive real estate analytics for agents and buyers.",
      technologies: ["Next.js", "Laravel", "MySQL", "Google Maps API"],
      client: "PropertyMax",
      duration: "6 months",
      results: "200+ properties listed",
      featured: true
    },
    {
      id: 4,
      title: "Student Portal",
      category: "education",
      image: "🎓",
      description: "Comprehensive educational platform providing students with course management, assignment tracking, grade monitoring, and collaborative learning tools.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
      client: "EduTech Institute",
      duration: "3 months",
      results: "500+ students enrolled",
      featured: false
    },
    {
      id: 5,
      title: "Web Scraping Tool",
      category: "data",
      image: "🕷️",
      description: "Powerful data extraction platform with intelligent scraping capabilities, data processing, and automated collection from various web sources.",
      technologies: ["Python", "Scrapy", "Redis", "Celery"],
      client: "DataInsights Corp",
      duration: "2 months",
      results: "100+ data sources integrated",
      featured: false
    },
    {
      id: 6,
      title: "School Management System",
      category: "education",
      image: "🏫",
      description: "Complete educational institution management solution covering student enrollment, staff management, academic planning, and administrative operations.",
      technologies: ["Angular", "Laravel", "MySQL", "Chart.js"],
      client: "Bright Future School",
      duration: "7 months",
      results: "75+ schools implemented",
      featured: false
    },
    {
      id: 7,
      title: "Student Training Management System",
      category: "education",
      image: "📚",
      description: "Specialized platform for managing training programs, skill development, certification tracking, and progress monitoring for educational institutions.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      client: "SkillUp Academy",
      duration: "4 months",
      results: "120+ training programs",
      featured: false
    },
    {
      id: 8,
      title: "Fleet Management System",
      category: "logistics",
      image: "🚛",
      description: "Comprehensive vehicle fleet management solution with GPS tracking, maintenance scheduling, driver management, and route optimization.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "GPS API"],
      client: "LogiTrack Solutions",
      duration: "5 months",
      results: "80+ vehicles tracked",
      featured: false
    },
    {
      id: 9,
      title: "Professional Accounting Software for MNCs",
      category: "finance",
      image: "💰",
      description: "Enterprise-grade accounting solution designed for multinational corporations with multi-currency support, compliance management, and advanced financial reporting.",
      technologies: ["React", "Java", "Oracle", "Spring Boot"],
      client: "Global Finance Corp",
      duration: "8 months",
      results: "50+ MNCs using platform",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'healthcare', name: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'education', name: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'data', name: 'Data Solutions', count: projects.filter(p => p.category === 'data').length },
    { id: 'logistics', name: 'Logistics', count: projects.filter(p => p.category === 'logistics').length },
    { id: 'finance', name: 'Finance', count: projects.filter(p => p.category === 'finance').length }
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
              Excellence in
              <span className="block text-blue-600 mt-2">
                Digital Innovation
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
                  <AnimatedCounter end={9} suffix="+" duration={2800} />
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
            {featuredProjects.map((project) => (
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
              Our Project Showcase
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our comprehensive showcase of cutting-edge solutions across different technologies and industries.
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
            {filteredProjects.map((project) => (
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
          <div className="flex justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 font-medium text-base">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
