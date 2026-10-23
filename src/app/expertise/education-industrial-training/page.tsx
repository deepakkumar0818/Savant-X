import tx from '@/content/text/app/expertise/education-industrial-training/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { GraduationCap } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.education_industrial_training,
  description:
    tx.industrial_training_and_internship_progr,
  path: '/expertise/education-industrial-training',
});

export default function EducationIndustrialTrainingPage() {

  const educationServices = [
    {
      id: 'industrial-training',
      title: tx.industrial_training,
      icon: '🏭',
      description: tx.comprehensive_industrial_training_progra,
      features: [tx.hands_on_projects, tx.industry_mentorship, tx.technical_skills, tx.software_training, tx.industry_visits, tx.certification],
      pricing: tx.starting_at_2_000,
      timeline: '4-12 weeks',
      complexity: tx.standard,
      features_count: '20+'
    },
    {
      id: 'internship-programs',
      title: tx.internship_programs,
      icon: '👨‍💼',
      description: tx.structured_internship_programs_providing,
      features: [tx.real_projects, tx.industry_exposure, tx.skill_development, tx.networking, tx.portfolio_building, tx.job_placement],
      pricing: tx.starting_at_1_500,
      timeline: '8-24 weeks',
      complexity: tx.standard,
      features_count: '25+'
    },
    {
      id: 'skill-development',
      title: tx.skill_development,
      icon: '🎯',
      description: tx.focused_skill_development_programs_to,
      features: [tx.technical_training, tx.soft_skills, tx.industry_tools, tx.best_practices, tx.project_management, tx.team_collaboration],
      pricing: tx.starting_at_1_200,
      timeline: '3-8 weeks',
      complexity: tx.standard,
      features_count: '18+'
    },
    {
      id: 'career-guidance',
      title: tx.career_guidance,
      icon: '🎓',
      description: tx.professional_career_guidance_and_mentors,
      features: [tx.career_counseling, tx.industry_insights, tx.resume_building, tx.interview_prep, tx.job_search, tx.networking],
      pricing: tx.starting_at_800,
      timeline: '2-6 weeks',
      complexity: tx.basic,
      features_count: '15+'
    }
  ];

  const trainingPrograms = [
    {
      category: 'Technical Training',
      programs: [
        { name: tx.web_development, icon: '💻', description: tx.full_stack_web_development_training },
        { name: tx.mobile_app_development, icon: '📱', description: tx.ios_and_android_app_development },
        { name: tx.data_science, icon: '📊', description: tx.data_analysis_and_machine_learning },
        { name: tx.cloud_computing, icon: '☁️', description: tx.aws_azure_and_google_cloud },
        { name: tx.devops, icon: '⚙️', description: tx.ci_cd_docker_kubernetes },
        { name: tx.cybersecurity, icon: '🔒', description: tx.security_best_practices_and_tools }
      ]
    },
    {
      category: 'Industry Exposure',
      programs: [
        { name: tx.industry_visits_2, icon: '🏢', description: tx.visit_real_companies_and_see },
        { name: tx.guest_lectures, icon: '🎤', description: tx.industry_experts_sharing_insights },
        { name: tx.case_studies, icon: '📋', description: tx.real_world_problem_solving_scenarios },
        { name: tx.project_simulations, icon: '🎮', description: tx.simulated_industry_projects },
        { name: tx.networking_events, icon: '🤝', description: tx.connect_with_industry_professionals },
        { name: tx.job_shadowing, icon: '👥', description: tx.shadow_professionals_in_their_work }
      ]
    },
    {
      category: 'Soft Skills',
      programs: [
        { name: tx.communication, icon: '💬', description: tx.effective_communication_skills },
        { name: tx.leadership, icon: '👑', description: tx.leadership_and_management_skills },
        { name: tx.teamwork, icon: '🤝', description: tx.collaboration_and_team_building },
        { name: tx.problem_solving, icon: '🧩', description: tx.critical_thinking_and_analysis },
        { name: tx.time_management, icon: '⏰', description: tx.productivity_and_organization },
        { name: tx.presentation_skills, icon: '🎯', description: tx.public_speaking_and_presenting }
      ]
    },
    {
      category: 'Certification',
      programs: [
        { name: tx.industry_certificates, icon: '🏆', description: tx.recognized_industry_certifications },
        { name: tx.skill_assessments, icon: '📝', description: tx.comprehensive_skill_evaluations },
        { name: tx.portfolio_reviews, icon: '📁', description: tx.professional_portfolio_development },
        { name: tx.mock_interviews, icon: '🎤', description: tx.interview_preparation_and_practice },
        { name: tx.resume_building_2, icon: '📄', description: tx.professional_resume_creation },
        { name: tx.linkedin_optimization, icon: '💼', description: tx.professional_profile_enhancement }
      ]
    }
  ];

  const internshipTypes = [
    {
      title: tx.summer_internships,
      description: tx.intensive_summer_programs_for_students,
      icon: '☀️',
      duration: '8-12 weeks',
      target: 'Students'
    },
    {
      title: tx.semester_internships,
      description: tx.long_term_internships_integrated_with,
      icon: '📚',
      duration: '16-24 weeks',
      target: 'Graduates'
    },
    {
      title: tx.part_time_internships,
      description: tx.flexible_part_time_internships_for,
      icon: '⏰',
      duration: '12-20 weeks',
      target: 'Working Students'
    },
    {
      title: tx.research_internships,
      description: tx.research_focused_internships_for_academi,
      icon: '🔬',
      duration: '6-12 weeks',
      target: 'Researchers'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.assessment_planning,
      description: tx.assessing_student_skills_and_creating,
      duration: tx.t_1_week,
      icon: '📋'
    },
    {
      step: '02',
      title: tx.curriculum_design,
      description: tx.designing_comprehensive_curriculum_based,
      duration: '1-2 weeks',
      icon: '📚'
    },
    {
      step: '03',
      title: tx.training_delivery,
      description: tx.delivering_hands_on_training_with,
      duration: '4-20 weeks',
      icon: '🎓'
    },
    {
      step: '04',
      title: tx.industry_exposure_2,
      description: tx.providing_industry_visits_guest_lectures,
      duration: '2-4 weeks',
      icon: '🏢'
    },
    {
      step: '05',
      title: tx.project_work,
      description: tx.students_work_on_real_industry,
      duration: '2-8 weeks',
      icon: '💼'
    },
    {
      step: '06',
      title: tx.assessment_placement,
      description: tx.final_assessment_certification_and_job,
      duration: '1-2 weeks',
      icon: '🎯'
    }
  ];

  const deliverables = [
    {
      title: tx.training_programs,
      description: tx.comprehensive_training_programs_tailored,
      icon: '📚'
    },
    {
      title: tx.industry_projects,
      description: tx.real_world_projects_that_provide,
      icon: '💼'
    },
    {
      title: tx.certifications,
      description: tx.industry_recognized_certificates_and_ski,
      icon: '🏆'
    },
    {
      title: tx.mentorship,
      description: tx.one_on_one_mentorship_from,
      icon: '👨‍🏫'
    },
    {
      title: tx.career_support,
      description: tx.resume_building_interview_prep_and,
      icon: '🎯'
    },
    {
      title: tx.networking_2,
      description: tx.access_to_industry_professionals_and,
      icon: '🤝'
    }
  ];

  const benefits = [
    {
      title: tx.industry_readiness,
      description: tx.students_become_industry_ready_with,
      icon: '🚀'
    },
    {
      title: tx.career_advancement,
      description: tx.enhanced_career_prospects_with_industry,
      icon: '📈'
    },
    {
      title: tx.skill_development_2,
      description: tx.comprehensive_development_of_technical_a,
      icon: '🎯'
    },
    {
      title: tx.real_world_experience,
      description: tx.hands_on_experience_with_real,
      icon: '💼'
    },
    {
      title: tx.professional_network,
      description: tx.building_valuable_connections_with_indus,
      icon: '🤝'
    },
    {
      title: tx.job_placement_2,
      description: tx.assistance_with_job_placement_and,
      icon: '🎓'
    }
  ];

  const targetAudience = [
    {
      title: tx.engineering_students,
      description: tx.b_tech_m_tech_and,
      icon: '👨‍🎓'
    },
    {
      title: tx.computer_science_graduates,
      description: tx.cs_graduates_looking_to_gain,
      icon: '💻'
    },
    {
      title: tx.mba_students,
      description: tx.management_students_seeking_industry_tra,
      icon: '📊'
    },
    {
      title: tx.recent_graduates,
      description: tx.fresh_graduates_looking_to_bridge,
      icon: '🎓'
    },
    {
      title: tx.career_changers,
      description: tx.professionals_looking_to_transition_into,
      icon: '🔄'
    },
    {
      title: tx.working_professionals,
      description: tx.working_professionals_seeking_skill_enha,
      icon: '👔'
    }
  ];

  const industryPartners = [
    { name: tx.tech_giants, icon: '🏢', description: tx.microsoft_google_amazon_partnerships },
    { name: tx.startups, icon: '🚀', description: tx.emerging_tech_startups_and_unicorns },
    { name: tx.consulting_firms, icon: '💼', description: tx.mckinsey_deloitte_pwc_collaborations },
    { name: tx.banking_finance, icon: '🏦', description: tx.banks_and_financial_institutions },
    { name: tx.e_commerce, icon: '🛒', description: tx.online_retail_and_marketplace_platforms },
    { name: tx.healthcare_tech, icon: '🏥', description: tx.healthcare_technology_companies },
    { name: tx.manufacturing, icon: '🏭', description: tx.industrial_and_manufacturing_companies },
    { name: tx.government, icon: '🏛️', description: tx.government_agencies_and_departments }
  ];

  const successMetrics = [
    {
      title: tx.placement_rate,
      description: tx.t_95_job_placement_rate_for,
      icon: '📈'
    },
    {
      title: tx.industry_satisfaction,
      description: tx.high_satisfaction_ratings_from_industry,
      icon: '😊'
    },
    {
      title: tx.skill_enhancement,
      description: tx.significant_improvement_in_technical_and,
      icon: '🎯'
    },
    {
      title: tx.career_growth,
      description: tx.faster_career_progression_for_program,
      icon: '🚀'
    },
    {
      title: tx.industry_recognition,
      description: tx.recognition_from_leading_industry_organi,
      icon: '🏆'
    },
    {
      title: tx.alumni_network,
      description: tx.strong_alumni_network_and_continued,
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.education_industrial_training_2}
        eyebrowIcon={GraduationCap}
        title={tx.industrial_training_2}
        highlight={tx.internships}
        description={tx.bridge_the_gap_between_academic}
        highlights={["Industrial Training", "Internship Programs", "Skill Development", "Career Guidance"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "95%", label: tx.placement_rate_2 },
          { value: "4-24", label: tx.week_programs },
          { value: "50+", label: tx.industry_partners },
        ]}
      />

      {/* Education Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.education_training}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.programs}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_industrial_training_and_in}</p>
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.complexity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.features_count}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.features}</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.training_programs_2}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.comprehensive}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.training_programs_2}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_training_programs_cover_technical}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.internship_types}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.flexible}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.internship_programs_2}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.various_internship_formats_to_accommodat}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.target_audience}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.who_can}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.benefit}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_programs_are_designed_for}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.industry_partners}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.leading}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.industry_partners}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_partner_with_leading_companies}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.training_internship}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_comprehe}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.success_metrics}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.measuring}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.program_success}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_metrics_that_demonstrate_the}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_training_and_internship_deliver}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_education_training}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.industrial_training_2}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.industrial_training_and_internships_prov}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_start_your}<span className="block text-blue-100 mt-2">{tx.industrial_training_journey}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.join_our_comprehensive_industrial_traini}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.apply_for_training}</Link>
            <Link href="#programs" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_programs}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
