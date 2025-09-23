'use client';

import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function About() {

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      description: "Visionary leader with 15+ years in tech innovation",
      expertise: ["Strategy", "Leadership", "Innovation"],
      experience: "15+ years",
      projects: "200+"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      description: "Full-stack architect passionate about cutting-edge technology",
      expertise: ["React", "Node.js", "Cloud Architecture"],
      experience: "12+ years",
      projects: "150+"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      description: "Creative director focused on user-centered design",
      expertise: ["UI/UX", "Design Systems", "Brand Identity"],
      experience: "10+ years",
      projects: "180+"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "👨‍🔬",
      description: "Problem solver with expertise in complex integrations",
      expertise: ["Python", "AI/ML", "Data Science"],
      experience: "8+ years",
      projects: "120+"
    },
    {
      name: "Alex Thompson",
      role: "Product Manager",
      image: "👨‍💼",
      description: "Strategic thinker focused on product excellence",
      expertise: ["Product Strategy", "Agile", "User Research"],
      experience: "9+ years",
      projects: "90+"
    },
    {
      name: "Lisa Wang",
      role: "DevOps Engineer",
      image: "👩‍🔧",
      description: "Infrastructure specialist ensuring scalable solutions",
      expertise: ["AWS", "Docker", "Kubernetes"],
      experience: "7+ years",
      projects: "100+"
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
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Redis", icon: "🔴", category: "Cache" },
    { name: "GraphQL", icon: "🔺", category: "API" },
    { name: "Kubernetes", icon: "⚙️", category: "DevOps" }
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
                  <AnimatedCounter end={500} suffix="+" duration={2800} />
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-base">
                Explore Our Work
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-md hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 font-medium text-base">
                Meet Our Team
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

      {/* Professional Team Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Talented professionals dedicated to delivering exceptional results and driving innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
                <div className="text-center">
                  {/* Professional Avatar */}
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-200">
                    <span className="text-2xl">{member.image}</span>
                  </div>

                  {/* Professional Content */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.description}</p>

                  {/* Professional Stats */}
                  <div className="flex justify-center gap-6 mb-4 text-xs">
                    <div className="text-center">
                      <div className="font-semibold text-slate-900">{member.experience}</div>
                      <div className="text-slate-500">Experience</div>
                      </div>
                    <div className="text-center">
                      <div className="font-semibold text-slate-900">{member.projects}</div>
                      <div className="text-slate-500">Projects</div>
                    </div>
                    </div>

                  {/* Professional Expertise Tags */}
                  <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 text-center">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-slate-900 mb-1">{tech.name}</div>
                <div className="text-xs text-slate-500">{tech.category}</div>
              </div>
            ))}
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
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 font-medium">
                  Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-200 font-medium">
                  Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}