import tx from '@/content/text/app/expertise/user-research/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Search } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.user_research,
  description:
    tx.user_interviews_usability_testing_and,
  path: '/expertise/user-research',
});

export default function UserResearchPage() {

  const researchMethods = [
    {
      id: 'interviews',
      title: tx.user_interviews,
      icon: '👥',
      description: tx.one_on_one_conversations_to,
      features: [tx.in_depth_insights, tx.behavioral_understanding, tx.pain_point_discovery, tx.user_journey_mapping, tx.qualitative_data, tx.empathy_building],
      duration: tx.t_1_2_hours_per_session,
      participants: '5-10 users',
      cost: tx.starting_at_2_500
    },
    {
      id: 'surveys',
      title: tx.user_surveys,
      icon: '📊',
      description: tx.quantitative_research_to_gather_data,
      features: [tx.large_sample_size, tx.statistical_analysis, tx.quick_data_collection, tx.demographic_insights, tx.trend_identification, tx.scalable_research],
      duration: '2-4 weeks',
      participants: '100-1000+ users',
      cost: tx.starting_at_1_500
    },
    {
      id: 'usability',
      title: tx.usability_testing,
      icon: '🔍',
      description: tx.observing_users_interact_with_your,
      features: [tx.task_based_testing, tx.error_identification, tx.performance_metrics, tx.user_behavior_analysis, tx.interface_evaluation, tx.improvement_recommendations],
      duration: tx.t_1_2_hours_per_session,
      participants: '5-8 users',
      cost: tx.starting_at_3_000
    },
    {
      id: 'analytics',
      title: tx.analytics_analysis,
      icon: '📈',
      description: tx.data_driven_insights_from_user,
      features: [tx.behavior_tracking, tx.conversion_analysis, tx.user_flow_mapping, tx.performance_metrics, tx.a_b_testing, tx.data_visualization],
      duration: '2-3 weeks',
      participants: tx.all_users,
      cost: tx.starting_at_2_000
    }
  ];

  const researchPhases = [
    {
      phase: '01',
      title: tx.planning_setup,
      description: tx.define_research_objectives_select_method,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      phase: '02',
      title: tx.recruitment,
      description: tx.identify_and_recruit_target_users,
      duration: '1-2 weeks',
      icon: '👥'
    },
    {
      phase: '03',
      title: tx.data_collection,
      description: tx.conduct_research_sessions_and_gather,
      duration: '2-4 weeks',
      icon: '🎯'
    },
    {
      phase: '04',
      title: tx.analysis_synthesis,
      description: tx.analyze_findings_and_create_actionable,
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      phase: '05',
      title: tx.reporting_presentation,
      description: tx.deliver_comprehensive_research_reports_a,
      duration: tx.t_1_week,
      icon: '📄'
    }
  ];

  const deliverables = [
    {
      title: tx.user_personas,
      description: tx.detailed_profiles_of_your_target,
      icon: '👤'
    },
    {
      title: tx.user_journey_maps,
      description: tx.visual_representation_of_user_interactio,
      icon: '🗺️'
    },
    {
      title: tx.pain_point_analysis,
      description: tx.identified_problems_and_friction_points,
      icon: '⚠️'
    },
    {
      title: tx.usability_report,
      description: tx.detailed_findings_from_usability_testing,
      icon: '📋'
    },
    {
      title: tx.research_insights,
      description: tx.key_findings_and_strategic_recommendatio,
      icon: '💡'
    },
    {
      title: tx.competitive_analysis,
      description: tx.analysis_of_competitor_products_and,
      icon: '🔍'
    }
  ];

  const benefits = [
    {
      title: tx.data_driven_decisions,
      description: tx.make_informed_product_decisions_based,
      icon: '📊'
    },
    {
      title: tx.improved_user_experience,
      description: tx.identify_and_solve_user_problems,
      icon: '✨'
    },
    {
      title: tx.reduced_development_costs,
      description: tx.catch_issues_early_to_avoid,
      icon: '💰'
    },
    {
      title: tx.increased_user_satisfaction,
      description: tx.build_products_that_truly_meet,
      icon: '😊'
    },
    {
      title: tx.competitive_advantage,
      description: tx.understand_users_better_than_competitors,
      icon: '🏆'
    },
    {
      title: tx.risk_mitigation,
      description: tx.validate_assumptions_and_reduce_the,
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.user_research_2}
        eyebrowIcon={Search}
        title={tx.user}
        highlight={tx.research}
        description={tx.we_conduct_comprehensive_user_research}
        highlights={["User Interviews", "User Surveys", "Usability Testing", "Analytics Analysis"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "95%", label: tx.success_rate },
          { value: "2-6", label: tx.week_delivery },
          { value: "1000+", label: tx.users_researched },
        ]}
      />

      {/* Research Methods */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.research_methods}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.user_research_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.methodologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_proven_research_methods}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchMethods.map((method) => (
              <div key={method.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={method.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                        {method.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.duration}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.participants}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.participants}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{method.cost}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_cost}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.research}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_thorough}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {researchPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-purple-200">
                      {phase.phase}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={phase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  <div className="text-xs font-medium text-purple-600">{phase.duration}</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.research_deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_research_deliverables_that}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_user_research}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.user_research_2}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.user_research_provides_invaluable_insigh}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_understand}<span className="block text-purple-100 mt-2">{tx.your_users}</span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed font-light">{tx.let_s_conduct_comprehensive_user}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_research_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">{tx.view_case_studies}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
