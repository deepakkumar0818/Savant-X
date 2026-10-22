import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { GraduationCap } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Education & Industrial Training',
  description:
    'Industrial training and internship programmes that bridge academic learning and industry requirements.',
  path: '/expertise/education-industrial-training',
});

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
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Education & Industrial Training"
        eyebrowIcon={GraduationCap}
        title="Industrial Training"
        highlight="& Internships"
        description="Bridge the gap between academic knowledge and industry requirements with our comprehensive industrial training and internship programs designed for students and professionals."
        highlights={["Industrial Training", "Internship Programs", "Skill Development", "Career Guidance"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "95%", label: "Placement Rate" },
          { value: "4-24", label: "Week Programs" },
          { value: "50+", label: "Industry Partners" },
        ]}
      />

      {/* Education Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Education & Training
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Programs</span>
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.features_count}</div>
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
      <section id="programs" className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Training Programs
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Comprehensive
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Training Programs</span>
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
                        <ServiceIcon emoji={program.icon} size="md" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Internship Types
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Flexible
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Internship Programs</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Various internship formats to accommodate different schedules and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={type.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Target Audience
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Who Can
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Benefit</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our programs are designed for students, graduates, and professionals at various career stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={audience.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Industry Partners
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Leading
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Industry Partners</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We partner with leading companies across various industries to provide real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industryPartners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={partner.icon} size="lg" className="mb-3" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Training & Internship
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Process</span>
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Success Metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Measuring
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Program Success</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Key metrics that demonstrate the effectiveness and impact of our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={metric.icon} size="none" className="h-6 w-6 text-indigo-600" />
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete training and internship deliverables that prepare students for industry success.
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
              Why Education Training
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Industrial Training</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Industrial training and internships provide significant advantages for career development and industry readiness.
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
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply for Training
            </Link>
            <Link href="#programs" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
