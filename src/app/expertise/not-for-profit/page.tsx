import tx from '@/content/text/app/expertise/not-for-profit/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { HeartHandshake } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.not_for_profit_technology,
  description:
    tx.technology_solutions_that_help_nonprofit,
  path: '/expertise/not-for-profit',
});

export default function NotForProfitPage() {

  const nonprofitServices = [
    {
      id: 'donation-platforms',
      title: tx.donation_platforms,
      icon: '💝',
      description: tx.secure_and_user_friendly_donation,
      features: [tx.online_donations, tx.recurring_giving, tx.donor_management, tx.campaign_tracking, tx.receipt_generation, tx.analytics_dashboard],
      pricing: tx.starting_at_3_500,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      features_count: '25+'
    },
    {
      id: 'volunteer-management',
      title: tx.volunteer_management,
      icon: '👥',
      description: tx.comprehensive_volunteer_management_syste,
      features: [tx.volunteer_registration, tx.event_scheduling, tx.time_tracking, tx.skills_matching, tx.communication_tools, tx.impact_reporting],
      pricing: tx.starting_at_2_500,
      timeline: '3-6 weeks',
      complexity: tx.standard,
      features_count: '20+'
    },
    {
      id: 'member-portals',
      title: tx.member_portals,
      icon: '🏛️',
      description: tx.member_focused_portals_for_organizations,
      features: [tx.member_registration, tx.profile_management, tx.event_registration, tx.resource_library, tx.discussion_forums, tx.payment_processing],
      pricing: tx.starting_at_4_000,
      timeline: '5-10 weeks',
      complexity: tx.advanced,
      features_count: '30+'
    },
    {
      id: 'grant-management',
      title: tx.grant_management,
      icon: '📋',
      description: tx.streamlined_grant_management_systems_for,
      features: [tx.grant_applications, tx.document_management, tx.progress_tracking, tx.reporting_tools, tx.compliance_monitoring, tx.deadline_alerts],
      pricing: tx.starting_at_5_000,
      timeline: '6-12 weeks',
      complexity: tx.enterprise,
      features_count: '40+'
    }
  ];

  const nonprofitSectors = [
    {
      category: 'Social Services',
      organizations: [
        { name: tx.homeless_shelters, icon: '🏠', description: tx.supporting_vulnerable_populations },
        { name: tx.food_banks, icon: '🍎', description: tx.fighting_hunger_and_food_insecurity },
        { name: tx.mental_health, icon: '🧠', description: tx.mental_health_support_and_advocacy },
        { name: tx.domestic_violence, icon: '🛡️', description: tx.supporting_survivors_and_prevention }
      ]
    },
    {
      category: 'Education & Youth',
      organizations: [
        { name: tx.schools_universities, icon: '🎓', description: tx.educational_institutions_and_programs },
        { name: tx.youth_development, icon: '🌟', description: tx.youth_mentoring_and_development },
        { name: tx.literacy_programs, icon: '📚', description: tx.reading_and_literacy_initiatives },
        { name: tx.stem_education, icon: '🔬', description: tx.science_technology_engineering_math }
      ]
    },
    {
      category: 'Healthcare & Medical',
      organizations: [
        { name: tx.medical_research, icon: '🔬', description: tx.medical_research_and_clinical_trials },
        { name: tx.patient_support, icon: '🏥', description: tx.patient_care_and_support_services },
        { name: tx.public_health, icon: '💊', description: tx.public_health_initiatives },
        { name: tx.accessibility, icon: '♿', description: tx.healthcare_accessibility_advocacy }
      ]
    },
    {
      category: 'Environmental & Conservation',
      organizations: [
        { name: tx.environmental_protection, icon: '🌱', description: tx.environmental_conservation },
        { name: tx.wildlife_conservation, icon: '🐾', description: tx.wildlife_and_habitat_protection },
        { name: tx.climate_action, icon: '🌍', description: tx.climate_change_initiatives },
        { name: tx.sustainable_development, icon: '♻️', description: tx.sustainable_development_projects }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.mission_understanding,
      description: tx.understanding_your_organization_apos_s,
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '02',
      title: tx.stakeholder_analysis,
      description: tx.identifying_key_stakeholders_including_d,
      duration: '1-2 weeks',
      icon: '👥'
    },
    {
      step: '03',
      title: tx.impact_strategy,
      description: tx.developing_technology_strategy_to_maximi,
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '04',
      title: tx.solution_development,
      description: tx.building_custom_solutions_tailored_to,
      duration: '3-10 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: tx.training_support,
      description: tx.comprehensive_training_for_staff_and,
      duration: '1-2 weeks',
      icon: '🎓'
    },
    {
      step: '06',
      title: tx.impact_measurement,
      description: tx.implementing_tools_to_measure_and,
      duration: tx.t_1_week,
      icon: '📈'
    }
  ];

  const deliverables = [
    {
      title: tx.nonprofit_platform,
      description: tx.custom_platform_designed_specifically_fo,
      icon: '💝'
    },
    {
      title: tx.donor_management_2,
      description: tx.comprehensive_donor_relationship_managem,
      icon: '💌'
    },
    {
      title: tx.impact_reporting_2,
      description: tx.tools_for_measuring_tracking_and,
      icon: '📊'
    },
    {
      title: tx.volunteer_coordination,
      description: tx.systems_for_managing_volunteers_and,
      icon: '👥'
    },
    {
      title: tx.training_documentation,
      description: tx.complete_training_materials_and_document,
      icon: '📚'
    },
    {
      title: tx.ongoing_support,
      description: tx.continued_support_and_maintenance_at,
      icon: '🤝'
    }
  ];

  const benefits = [
    {
      title: tx.mission_amplification,
      description: tx.technology_solutions_that_amplify_your,
      icon: '📢'
    },
    {
      title: tx.cost_efficiency,
      description: tx.affordable_solutions_designed_specifical,
      icon: '💰'
    },
    {
      title: tx.donor_engagement,
      description: tx.enhanced_donor_engagement_and_retention,
      icon: '💝'
    },
    {
      title: tx.operational_efficiency,
      description: tx.streamlined_operations_to_focus_more,
      icon: '⚡'
    },
    {
      title: tx.impact_measurement_2,
      description: tx.better_tools_to_measure_track,
      icon: '📈'
    },
    {
      title: tx.community_building,
      description: tx.stronger_community_connections_and_volun,
      icon: '🤝'
    }
  ];

  const nonprofitFeatures = [
    {
      title: tx.donation_processing,
      description: tx.secure_tax_deductible_donation_processin,
      icon: '💳'
    },
    {
      title: tx.volunteer_coordination_2,
      description: tx.complete_volunteer_management_from_regis,
      icon: '👥'
    },
    {
      title: tx.event_management,
      description: tx.fundraising_event_management_and_partici,
      icon: '🎪'
    },
    {
      title: tx.grant_tracking,
      description: tx.grant_application_and_compliance_trackin,
      icon: '📋'
    },
    {
      title: tx.impact_reporting_3,
      description: tx.comprehensive_reporting_on_programs_and,
      icon: '📊'
    },
    {
      title: tx.communication_tools_2,
      description: tx.multi_channel_communication_with_donors,
      icon: '📢'
    }
  ];

  const impactAreas = [
    {
      title: tx.fundraising,
      description: tx.increase_fundraising_effectiveness_and_d,
      icon: '💰'
    },
    {
      title: tx.volunteer_engagement,
      description: tx.better_volunteer_recruitment_coordinatio,
      icon: '🌟'
    },
    {
      title: tx.program_delivery,
      description: tx.more_efficient_program_delivery_and,
      icon: '🎯'
    },
    {
      title: tx.administrative_efficiency,
      description: tx.reduce_administrative_overhead_and_focus,
      icon: '⚡'
    },
    {
      title: tx.impact_measurement_3,
      description: tx.better_measurement_and_communication_of,
      icon: '📊'
    },
    {
      title: tx.community_outreach,
      description: tx.expand_community_reach_and_engagement,
      icon: '🌍'
    }
  ];

  const nonprofitTechnologies = [
    { name: tx.wordpress, icon: '🌐', description: tx.content_management_and_websites, category: 'CMS' },
    { name: tx.salesforce, icon: '☁️', description: tx.crm_for_nonprofit_organizations, category: 'CRM' },
    { name: tx.stripe, icon: '💳', description: tx.payment_processing_for_donations, category: 'Payments' },
    { name: tx.mailchimp, icon: '📧', description: tx.email_marketing_and_communication, category: 'Marketing' },
    { name: tx.google_analytics, icon: '📊', description: tx.website_and_impact_analytics, category: 'Analytics' },
    { name: tx.zoom, icon: '📹', description: tx.virtual_meetings_and_events, category: 'Communication' },
    { name: tx.slack, icon: '💬', description: tx.team_communication_and_collaboration, category: 'Collaboration' },
    { name: tx.airtable, icon: '📋', description: tx.database_and_project_management, category: 'Database' }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.not_for_profit_solutions}
        eyebrowIcon={HeartHandshake}
        title={tx.not_for_profit}
        highlight={tx.experience}
        description={tx.we_re_passionate_about_supporting}
        highlights={["Donation Platforms", "Volunteer Management", "Member Portals", "Grant Management"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "$10M+", label: tx.funds_raised },
          { value: "3-12", label: tx.week_delivery },
          { value: "Pro Bono", label: tx.support_available },
        ]}
      />

      {/* Nonprofit Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.nonprofit}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.specialized_technology_solutions_designe}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonprofitServices.map((service) => (
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
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

      {/* Nonprofit Sectors */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.sectors_we_serve}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.nonprofit}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.sectors}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_have_extensive_experience_working}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {nonprofitSectors.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.organizations.map((org, orgIndex) => (
                      <div key={orgIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={org.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{org.name}</h4>
                          <p className="text-sm text-slate-600">{org.description}</p>
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

      {/* Nonprofit Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.nonprofit_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.essential}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_features_specifically_designed_for}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonprofitFeatures.map((feature, index) => (
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.nonprofit_development}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_nonprofit_focused_approach_ensures}</p>
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

      {/* Impact Areas */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.impact_areas}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.measuring}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.social_impact}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_areas_where_technology_can}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={area.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.nonprofit_technologies}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.technology}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_nonprofit_friendly}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {nonprofitTechnologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_nonprofit_development_deliverab}</p>
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_nonprofit_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.nonprofit_technology}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.technology_solutions_specifically_design}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_amplify}<span className="block text-blue-100 mt-2">{tx.your_impact}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_work_together_to}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_nonprofit_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.learn_about_pro_bono}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

