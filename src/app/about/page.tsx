'use client';

import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function About() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We will get back to you soon.');
    setIsConsultationOpen(false);
    setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
  };

  const teamMembers = [
    {
      name: "Raushan Kumar Bharti",
      role: "CEO",
      image: "👨‍💼",
      description: "Visionary leader with 5+ years in tech innovation and business strategy",
      expertise: ["Strategy", "Leadership", "Innovation"],
      experience: "5+ years",
      projects: "35+"
    },
    {
      name: "Bikash Kumar",
      role: "COO | Sr. Embedded System Engineer",
      image: "👨‍💼",
      description: "Strategic operations leader with deep expertise in embedded systems and hardware development",
      expertise: ["Embedded Systems", "Operations", "IoT Solutions"],
      experience: "4+ years",
      projects: "30+"
    },
    {
      name: "Deepak Kumar",
      role: "CTO | Sr. Developer",
      image: "👨‍💻",
      description: "Full-stack architect passionate about cutting-edge technology and system design",
      expertise: ["React", "Node.js", "Cloud Architecture"],
      experience: "5+ years",
      projects: "40+"
    },
    {
      name: "Iqra Zafar",
      role: "UI/UX Designer",
      image: "👩‍💻",
      description: "Creative designer focused on user-centered design and exceptional user experiences",
      expertise: ["UI/UX", "Design Systems", "Brand Identity"],
      experience: "4+ years",
      projects: "32+"
    },
    {
      name: "Manisa Roy Chaudhary",
      role: "Embedded Engineer",
      image: "👩‍💻",
      description: "Skilled embedded engineer specializing in hardware-software integration and firmware development",
      expertise: ["Firmware", "Hardware Integration", "Microcontrollers"],
      experience: "3+ years",
      projects: "25+"
    }
  ];

  const capabilities = [
    { 
      icon: "🎯", 
      title: "Strategy", 
      desc: "Digital strategy & planning",
      color: "from-blue-500 to-blue-600",
      features: ["Market Analysis", "Digital Roadmaps", "Competitive Research"]
    },
    { 
      icon: "🎨", 
      title: "Design", 
      desc: "UI/UX & brand design",
      color: "from-purple-500 to-purple-600",
      features: ["User Experience", "Visual Design", "Brand Identity"]
    },
    { 
      icon: "💻", 
      title: "Development", 
      desc: "Web & mobile apps",
      color: "from-green-500 to-green-600",
      features: ["Web Applications", "Mobile Apps", "API Development"]
    },
    { 
      icon: "⚡", 
      title: "Electronics & Hardware", 
      desc: "Circuit design & embedded systems",
      color: "from-cyan-500 to-cyan-600",
      features: ["PCB Design", "IoT Solutions", "Firmware Development"]
    },
    { 
      icon: "📊", 
      title: "Analytics", 
      desc: "Data & insights",
      color: "from-orange-500 to-orange-600",
      features: ["Business Intelligence", "Data Visualization", "Performance Metrics"]
    },
    { 
      icon: "🔧", 
      title: "Integration", 
      desc: "System integration",
      color: "from-red-500 to-red-600",
      features: ["API Integration", "Third-party Services", "Legacy Systems"]
    },
    { 
      icon: "🤖", 
      title: "Generative AI Solutions", 
      desc: "Advanced AI content generation",
      color: "from-violet-500 to-violet-600",
      features: ["LLM Integration", "AI Chatbots", "Content Automation", "GPT-based Solutions"]
    },
    { 
      icon: "🧠", 
      title: "Machine Learning", 
      desc: "Intelligent predictive systems",
      color: "from-indigo-500 to-indigo-600",
      features: ["ML Model Development", "Predictive Analytics", "Computer Vision", "NLP Solutions"]
    },
    { 
      icon: "✨", 
      title: "AI Integration & Consulting", 
      desc: "Expert AI implementation",
      color: "from-pink-500 to-pink-600",
      features: ["AI Strategy", "Model Training", "AI/ML Deployment", "Custom AI Solutions"]
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
      icon: "🚀",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
      icon: "🎯",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to user experience.",
      icon: "⭐",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Collaborative Partnership",
      description: "We work closely with our clients as true partners, ensuring transparency and open communication.",
      icon: "🤝",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Foundation",
      description: "Established SavantX with a mission to deliver enterprise-grade technology solutions that drive measurable business outcomes.",
      icon: "building"
    },
    {
      year: "2020",
      title: "Enterprise Breakthrough",
      description: "Delivered our first Fortune 500 CRM implementation, achieving 40% improvement in customer engagement metrics.",
      icon: "trophy"
    },
    {
      year: "2021",
      title: "Strategic Growth",
      description: "Expanded our engineering team to 25+ specialists and launched our proprietary development framework.",
      icon: "users"
    },
    {
      year: "2022",
      title: "AI Innovation",
      description: "Introduced machine learning capabilities, reducing client operational costs by an average of 35%.",
      icon: "brain"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Established international operations across North America, Europe, and Asia-Pacific regions.",
      icon: "globe"
    },
    {
      year: "2024",
      title: "Technology Leadership",
      description: "Launched our advanced analytics platform and secured partnerships with leading cloud providers.",
      icon: "lightbulb"
    }
  ];

  const technologies = [
    { name: "React", icon: "/images/icons/react1.png", category: "Frontend" },
    { name: "Next.js", icon: "/images/icons/nextjs.png", category: "Framework" },
    { name: "TypeScript", icon: "/images/icons/ts1.jpeg", category: "Language" },
    { name: "Node.js", icon: "/images/icons/nodejs1.png", category: "Backend" },
    { name: "Python", icon: "/images/icons/python1.png", category: "Language" },
    { name: "AWS", icon: "/images/icons/aws1.png", category: "Cloud" },
    { name: "Docker", icon: "/images/icons/docker.png", category: "DevOps" },
    { name: "MongoDB", icon: "/images/icons/mongodb.png", category: "Database" },
    { name: "PostgreSQL", icon: "/images/icons/postgresql.png", category: "Database" },
    { name: "Redis", icon: "/images/icons/redis.png", category: "Cache" },
    { name: "GraphQL", icon: "/images/icons/Graphql1.png", category: "API" },
    { name: "Kubernetes", icon: "/images/icons/kubernatives.png", category: "DevOps" },
    { name: "ESP32", icon: "/images/icons/esp32_1.jpeg", category: "Hardware" },
    { name: "Arduino", icon: "/images/icons/ardunio1.png", category: "Hardware" },
    { name: "STM32", icon: "/images/icons/stm32.jpeg", category: "Hardware" },
    { name: "Raspberry Pi", icon: "/images/icons/raspberrypi.jpeg", category: "Hardware" },
    { name: "PIC / AVR", icon: "/images/icons/AVR.png", category: "Hardware" },
    { name: "Zephyr RTOS", icon: "/images/icons/Zephyr.jpeg", category: "RTOS" },
    { name: "AWS IoT Core", icon: "/images/icons/AwsIot.jpeg", category: "IoT" },
    { name: "Google Cloud IoT", icon: "/images/icons/googleCloud.png", category: "IoT" },
    { name: "KiCAD", icon: "/images/icons/kicad1.png", category: "PCB Design" },
    { name: "DipTrace", icon: "/images/icons/Diptrace.jpeg", category: "PCB Design" },
    { name: "SolidWorks", icon: "/images/icons/SolidWorks.png", category: "CAD" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 relative overflow-hidden">
      {/* Subtle Professional Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/30 rounded-full blur-3xl"></div>
      </div>

      {/* Professional Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium mb-8 border border-slate-200">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              About SavantX
            </div>

            {/* Professional Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Building Digital
              <span className="block text-blue-600 mt-2">
                Excellence
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              We craft exceptional digital experiences that transform businesses and drive growth. 
              Our comprehensive technology solutions span from web development to AI-powered applications.
            </p>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  <AnimatedCounter end={200} suffix="+" duration={2800} />
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
                  <AnimatedCounter end={5} suffix="+" duration={1600} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-out font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Explore Our Work
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </Link>
              <button 
                onClick={() => {
                  const teamSection = document.getElementById('executive-team');
                  teamSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out font-semibold text-lg transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Meet Our Team
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From a small team with big dreams to a leading technology company that transforms businesses worldwide.
            </p>
          </div>

          {/* Clean Professional Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full">
                    {/* Year */}
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm font-medium mb-3">
                      {item.year}
                        </div>
                        
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-8H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm2-2h6v2H9V2zm-1 4h8v2H8V6zm0 4h8v8H8v-8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Industry Recognition</h3>
              <p className="text-slate-600 text-sm">Awarded for excellence in enterprise technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Presence</h3>
              <p className="text-slate-600 text-sm">Serving enterprise clients across North America, Europe, and Asia-Pacific</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation Leadership</h3>
              <p className="text-slate-600 text-sm">Pioneering next-generation enterprise technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section id="executive-team" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Executive Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Leadership Team
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Meet Our
              <span className="block text-blue-600 mt-2">Executive Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Experienced leaders driving innovation and delivering exceptional results across enterprise technology solutions.
            </p>
          </div>

          {/* Executive Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Executive Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Professional Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <span className="text-4xl relative z-10 drop-shadow-sm">{member.image}</span>
                  </div>

                    {/* Executive Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {member.name}
                    </h3>
                      <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold mb-3">
                        {member.role}
                      </div>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Executive Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{member.experience}</div>
                      <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{member.projects}</div>
                      <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Projects</div>
                      </div>
                    </div>

                  {/* Executive Expertise */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-slate-200/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Leadership Excellence</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our executive team brings together decades of combined experience in technology innovation, 
                strategic leadership, and enterprise solutions delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Strategic Vision</h4>
                <p className="text-slate-600 text-sm">Leading technology innovation and business growth</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM14.5 5h2v3h-2V5zm-9 3h2v3h-2V8zM19 8v3h2V8h-2zm-9 5h2v3h-2v-3zM17 13v3h2v-3h-2zM3 13v3h2v-3H3z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Technical Excellence</h4>
                <p className="text-slate-600 text-sm">Cutting-edge technology and system architecture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Creative Design</h4>
                <p className="text-slate-600 text-sm">User-centered design and exceptional experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-8H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm2-2h6v2H9V2zm-1 4h8v2H8V6zm0 4h8v8H8v-8z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Business Growth</h4>
                <p className="text-slate-600 text-sm">Strategic partnerships and business development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{value.icon}</span>
                    </div>
                    <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                    <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Capabilities Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive technology solutions designed to meet your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{capability.icon}</span>
                    </div>
                    <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {capability.title}
                      </h3>
                    <p className="text-slate-600 text-sm">{capability.desc}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Technology Stack Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Cutting-edge tools and frameworks we use to build exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {(() => {
              const displayedTechnologies = showAllTechnologies ? technologies : technologies.slice(0, 18);
              
              return displayedTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 text-center hover:scale-105"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0
                  }}
                >
                  <div className="h-20 w-full mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-sm font-medium text-slate-900 mb-1">{tech.name}</div>
                  <div className="text-xs text-slate-500">{tech.category}</div>
                </div>
              ));
            })()}
          </div>
          
          {/* See More/Less Button */}
          <div className="text-center">
            <button
              onClick={() => setShowAllTechnologies(!showAllTechnologies)}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>{showAllTechnologies ? 'Show Less' : 'See More Technologies'}</span>
              <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${showAllTechnologies ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-blue-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how SavantX can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 ease-out font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 ease-out font-semibold text-lg transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Popup Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Schedule Consultation</h3>
                <button 
                  onClick={() => setIsConsultationOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsConsultationOpen(false)}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all duration-200 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Schedule Meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}