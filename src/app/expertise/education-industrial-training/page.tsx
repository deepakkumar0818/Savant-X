'use client';

import Footer from '@/components/Footer';

export default function EducationIndustrialTrainingPage() {

  const educationServices = [
    {
      id: 'industrial-training',
      title: 'Industrial Training',
      icon: '🏭',
      description: 'Comprehensive industrial training programs for students and professionals to gain real-world experience.',
      features: ['Hands-on Projects', 'Industry Mentorship', 'Technical Skills', 'Software Training', 'Industry Visits', 'Certification'],
      pricing: 'Starting at $2,000',
      timeline: '4-12 weeks',
      complexity: 'Standard',
      features_count: '20+'
    },
    {
      id: 'internship-programs',
      title: 'Internship Programs',
      icon: '👨‍💼',
      description: 'Structured internship programs providing practical experience in real industry projects and workflows.',
      features: ['Real Projects', 'Industry Exposure', 'Skill Development', 'Networking', 'Portfolio Building', 'Job Placement'],
      pricing: 'Starting at $1,500',
      timeline: '8-24 weeks',
      complexity: 'Standard',
      features_count: '25+'
    },
    {
      id: 'skill-development',
      title: 'Skill Development',
      icon: '🎯',
      description: 'Focused skill development programs to bridge the gap between academic knowledge and industry requirements.',
      features: ['Technical Training', 'Soft Skills', 'Industry Tools', 'Best Practices', 'Project Management', 'Team Collaboration'],
      pricing: 'Starting at $1,200',
      timeline: '3-8 weeks',
      complexity: 'Standard',
      features_count: '18+'
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      icon: '🎓',
      description: 'Professional career guidance and mentorship to help students and graduates make informed career decisions.',
      features: ['Career Counseling', 'Industry Insights', 'Resume Building', 'Interview Prep', 'Job Search', 'Networking'],
      pricing: 'Starting at $800',
      timeline: '2-6 weeks',
      complexity: 'Basic',
      features_count: '15+'
    }
  ];

  const trainingPrograms = [
    {
      category: 'Technical Training',
      programs: [
        { name: 'Web Development', icon: '💻', description: 'Full-stack web development training' },
        { name: 'Mobile App Development', icon: '📱', description: 'iOS and Android app development' },
        { name: 'Data Science', icon: '📊', description: 'Data analysis and machine learning' },
        { name: 'Cloud Computing', icon: '☁️', description: 'AWS, Azure, and Google Cloud' },
        { name: 'DevOps', icon: '⚙️', description: 'CI/CD, Docker, Kubernetes' },
        { name: 'Cybersecurity', icon: '🔒', description: 'Security best practices and tools' }
      ]
    },
    {
      category: 'Industry Exposure',
      programs: [
        { name: 'Industry Visits', icon: '🏢', description: 'Visit real companies and see operations' },
        { name: 'Guest Lectures', icon: '🎤', description: 'Industry experts sharing insights' },
        { name: 'Case Studies', icon: '📋', description: 'Real-world problem-solving scenarios' },
        { name: 'Project Simulations', icon: '🎮', description: 'Simulated industry projects' },
        { name: 'Networking Events', icon: '🤝', description: 'Connect with industry professionals' },
        { name: 'Job Shadowing', icon: '👥', description: 'Shadow professionals in their work' }
      ]
    },
    {
      category: 'Soft Skills',
      programs: [
        { name: 'Communication', icon: '💬', description: 'Effective communication skills' },
        { name: 'Leadership', icon: '👑', description: 'Leadership and management skills' },
        { name: 'Teamwork', icon: '🤝', description: 'Collaboration and team building' },
        { name: 'Problem Solving', icon: '🧩', description: 'Critical thinking and analysis' },
        { name: 'Time Management', icon: '⏰', description: 'Productivity and organization' },
        { name: 'Presentation Skills', icon: '🎯', description: 'Public speaking and presenting' }
      ]
    },
    {
      category: 'Certification',
      programs: [
        { name: 'Industry Certificates', icon: '🏆', description: 'Recognized industry certifications' },
        { name: 'Skill Assessments', icon: '📝', description: 'Comprehensive skill evaluations' },
        { name: 'Portfolio Reviews', icon: '📁', description: 'Professional portfolio development' },
        { name: 'Mock Interviews', icon: '🎤', description: 'Interview preparation and practice' },
        { name: 'Resume Building', icon: '📄', description: 'Professional resume creation' },
        { name: 'LinkedIn Optimization', icon: '💼', description: 'Professional profile enhancement' }
      ]
    }
  ];

  const internshipTypes = [
    {
      title: 'Summer Internships',
      description: 'Intensive summer programs for students during vacation periods.',
      icon: '☀️',
      duration: '8-12 weeks',
      target: 'Students'
    },
    {
      title: 'Semester Internships',
      description: 'Long-term internships integrated with academic semesters.',
      icon: '📚',
      duration: '16-24 weeks',
      target: 'Graduates'
    },
    {
      title: 'Part-time Internships',
      description: 'Flexible part-time internships for working students.',
      icon: '⏰',
      duration: '12-20 weeks',
      target: 'Working Students'
    },
    {
      title: 'Research Internships',
      description: 'Research-focused internships for academic and industry research.',
      icon: '🔬',
      duration: '6-12 weeks',
      target: 'Researchers'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Assessing student skills and creating personalized training plans.',
      duration: '1 week',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Curriculum Design',
      description: 'Designing comprehensive curriculum based on industry requirements.',
      duration: '1-2 weeks',
      icon: '📚'
    },
    {
      step: '03',
      title: 'Training Delivery',
      description: 'Delivering hands-on training with real-world projects.',
      duration: '4-20 weeks',
      icon: '🎓'
    },
    {
      step: '04',
      title: 'Industry Exposure',
      description: 'Providing industry visits, guest lectures, and networking.',
      duration: '2-4 weeks',
      icon: '🏢'
    },
    {
      step: '05',
      title: 'Project Work',
      description: 'Students work on real industry projects with mentorship.',
      duration: '2-8 weeks',
      icon: '💼'
    },
    {
      step: '06',
      title: 'Assessment & Placement',
      description: 'Final assessment, certification, and job placement assistance.',
      duration: '1-2 weeks',
      icon: '🎯'
    }
  ];

  const deliverables = [
    {
      title: 'Training Programs',
      description: 'Comprehensive training programs tailored to industry needs.',
      icon: '📚'
    },
    {
      title: 'Industry Projects',
      description: 'Real-world projects that provide practical experience.',
      icon: '💼'
    },
    {
      title: 'Certifications',
      description: 'Industry-recognized certificates and skill assessments.',
      icon: '🏆'
    },
    {
      title: 'Mentorship',
      description: 'One-on-one mentorship from industry professionals.',
      icon: '👨‍🏫'
    },
    {
      title: 'Career Support',
      description: 'Resume building, interview prep, and job placement assistance.',
      icon: '🎯'
    },
    {
      title: 'Networking',
      description: 'Access to industry professionals and networking opportunities.',
      icon: '🤝'
    }
  ];

  const benefits = [
    {
      title: 'Industry Readiness',
      description: 'Students become industry-ready with practical skills and experience.',
      icon: '🚀'
    },
    {
      title: 'Career Advancement',
      description: 'Enhanced career prospects with industry exposure and networking.',
      icon: '📈'
    },
    {
      title: 'Skill Development',
      description: 'Comprehensive development of technical and soft skills.',
      icon: '🎯'
    },
    {
      title: 'Real-world Experience',
      description: 'Hands-on experience with real industry projects and tools.',
      icon: '💼'
    },
    {
      title: 'Professional Network',
      description: 'Building valuable connections with industry professionals.',
      icon: '🤝'
    },
    {
      title: 'Job Placement',
      description: 'Assistance with job placement and career opportunities.',
      icon: '🎓'
    }
  ];

  const targetAudience = [
    {
      title: 'Engineering Students',
      description: 'B.Tech, M.Tech, and other engineering students seeking industry exposure.',
      icon: '👨‍🎓'
    },
    {
      title: 'Computer Science Graduates',
      description: 'CS graduates looking to gain practical industry experience.',
      icon: '💻'
    },
    {
      title: 'MBA Students',
      description: 'Management students seeking industry training and internships.',
      icon: '📊'
    },
    {
      title: 'Recent Graduates',
      description: 'Fresh graduates looking to bridge the gap between academics and industry.',
      icon: '🎓'
    },
    {
      title: 'Career Changers',
      description: 'Professionals looking to transition into technology careers.',
      icon: '🔄'
    },
    {
      title: 'Working Professionals',
      description: 'Working professionals seeking skill enhancement and career growth.',
      icon: '👔'
    }
  ];

  const industryPartners = [
    { name: 'Tech Giants', icon: '🏢', description: 'Microsoft, Google, Amazon partnerships' },
    { name: 'Startups', icon: '🚀', description: 'Emerging tech startups and unicorns' },
    { name: 'Consulting Firms', icon: '💼', description: 'McKinsey, Deloitte, PwC collaborations' },
    { name: 'Banking & Finance', icon: '🏦', description: 'Banks and financial institutions' },
    { name: 'E-commerce', icon: '🛒', description: 'Online retail and marketplace platforms' },
    { name: 'Healthcare Tech', icon: '🏥', description: 'Healthcare technology companies' },
    { name: 'Manufacturing', icon: '🏭', description: 'Industrial and manufacturing companies' },
    { name: 'Government', icon: '🏛️', description: 'Government agencies and departments' }
  ];

  const successMetrics = [
    {
      title: 'Placement Rate',
      description: '95%+ job placement rate for trained students.',
      icon: '📈'
    },
    {
      title: 'Industry Satisfaction',
      description: 'High satisfaction ratings from industry partners.',
      icon: '😊'
    },
    {
      title: 'Skill Enhancement',
      description: 'Significant improvement in technical and soft skills.',
      icon: '🎯'
    },
    {
      title: 'Career Growth',
      description: 'Faster career progression for program graduates.',
      icon: '🚀'
    },
    {
      title: 'Industry Recognition',
      description: 'Recognition from leading industry organizations.',
      icon: '🏆'
    },
    {
      title: 'Alumni Network',
      description: 'Strong alumni network and continued support.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Education Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🎓</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🏭</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">👨‍💼</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🎯</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">🎓</span>
              Education Industrial Training & Internships
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Education Industrial
              <span className="block text-blue-600 mt-2">Training & Internships</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Bridge the gap between academic knowledge and industry requirements with our comprehensive 
              industrial training and internship programs designed for students and professionals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4-24</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Education & Training
              <span className="block text-blue-600 mt-2">Programs</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive industrial training and internship programs designed to prepare students for industry success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationServices.map((service) => (
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600 mb-1">{service.features_count}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Features</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Training Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Comprehensive
              <span className="block text-blue-600 mt-2">Training Programs</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our training programs cover technical skills, industry exposure, soft skills, and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {trainingPrograms.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.programs.map((program, programIndex) => (
                      <div key={programIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <div className="text-2xl">{program.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{program.name}</h4>
                          <p className="text-sm text-slate-600">{program.description}</p>
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

      {/* Internship Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Internship Types
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Flexible
              <span className="block text-blue-600 mt-2">Internship Programs</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Various internship formats to accommodate different schedules and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-blue-600">{type.duration}</div>
                    <div className="text-xs text-slate-500">{type.target}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Target Audience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Who Can
              <span className="block text-blue-600 mt-2">Benefit</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our programs are designed for students, graduates, and professionals at various career stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{audience.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {audience.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Industry Partners
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Leading
              <span className="block text-blue-600 mt-2">Industry Partners</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We partner with leading companies across various industries to provide real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industryPartners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{partner.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Training & Internship
              <span className="block text-blue-600 mt-2">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures comprehensive training and successful career preparation.
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Success Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Measuring
              <span className="block text-blue-600 mt-2">Program Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key metrics that demonstrate the effectiveness and impact of our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{metric.icon}</span>
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
              Complete training and internship deliverables that prepare students for industry success.
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
              Why Education Training
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-blue-600 mt-2">Industrial Training</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Industrial training and internships provide significant advantages for career development and industry readiness.
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Start Your
            <span className="block text-blue-100 mt-2">Industrial Training Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Join our comprehensive industrial training and internship programs to gain real-world experience and advance your career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply for Training
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Programs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
