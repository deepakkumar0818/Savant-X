import tx from '@/content/text/app/expertise/prototyping/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { MousePointerClick } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.prototyping,
  description:
    tx.interactive_prototypes_that_validate_ide,
  path: '/expertise/prototyping',
});

export default function PrototypingPage() {

  const prototypeTypes = [
    {
      id: 'low-fidelity',
      title: tx.low_fidelity_prototypes,
      icon: '📝',
      description: tx.quick_simple_prototypes_to_test,
      features: [tx.paper_sketches, tx.wireframes, tx.basic_interactions, tx.concept_validation, tx.rapid_iteration, tx.early_feedback],
      pricing: tx.starting_at_1_500,
      timeline: '1-2 weeks',
      fidelity: tx.low,
      interactivity: tx.basic
    },
    {
      id: 'mid-fidelity',
      title: tx.mid_fidelity_prototypes,
      icon: '📋',
      description: tx.more_detailed_prototypes_with_improved,
      features: [tx.enhanced_wireframes, tx.visual_design, tx.user_flow_testing, tx.navigation_testing, tx.content_validation, tx.stakeholder_review],
      pricing: tx.starting_at_2_500,
      timeline: '2-3 weeks',
      fidelity: tx.medium,
      interactivity: tx.moderate
    },
    {
      id: 'high-fidelity',
      title: tx.high_fidelity_prototypes,
      icon: '⚡',
      description: tx.pixel_perfect_prototypes_that_closely,
      features: [tx.pixel_perfect_design, tx.advanced_interactions, tx.animation_transitions, tx.user_testing, tx.developer_handoff, tx.final_validation],
      pricing: tx.starting_at_4_000,
      timeline: '3-5 weeks',
      fidelity: tx.high,
      interactivity: tx.advanced
    },
    {
      id: 'interactive',
      title: tx.interactive_prototypes,
      icon: '🎮',
      description: tx.fully_interactive_prototypes_with_comple,
      features: [tx.complex_interactions, tx.micro_animations, tx.advanced_user_testing, tx.a_b_testing, tx.performance_testing, tx.launch_ready],
      pricing: tx.starting_at_6_000,
      timeline: '4-6 weeks',
      fidelity: tx.premium,
      interactivity: tx.full
    }
  ];

  const prototypingProcess = [
    {
      step: '01',
      title: tx.requirements_planning,
      description: tx.understanding_project_goals_and_defining,
      duration: '1-2 days',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.wireframing,
      description: tx.creating_basic_layouts_and_information,
      duration: '3-5 days',
      icon: '📐'
    },
    {
      step: '03',
      title: tx.visual_design_2,
      description: tx.applying_visual_design_and_brand,
      duration: '5-10 days',
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.interaction_design,
      description: tx.adding_interactions_animations_and_user,
      duration: '5-15 days',
      icon: '⚡'
    },
    {
      step: '05',
      title: tx.testing_iteration,
      description: tx.user_testing_and_prototype_refinement,
      duration: '3-7 days',
      icon: '🧪'
    },
    {
      step: '06',
      title: tx.final_delivery,
      description: tx.handoff_to_development_team_with,
      duration: '1-2 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.interactive_prototype,
      description: tx.clickable_prototype_with_realistic_inter,
      icon: '⚡'
    },
    {
      title: tx.user_flow_documentation,
      description: tx.detailed_documentation_of_user_journeys,
      icon: '🗺️'
    },
    {
      title: tx.design_specifications,
      description: tx.technical_specifications_for_developers,
      icon: '📋'
    },
    {
      title: tx.user_testing_report,
      description: tx.results_from_prototype_testing_with,
      icon: '📊'
    },
    {
      title: tx.animation_guidelines,
      description: tx.detailed_animation_specifications_and_ti,
      icon: '🎬'
    },
    {
      title: tx.component_library,
      description: tx.reusable_design_components_for_developme,
      icon: '🧩'
    }
  ];

  const tools = [
    { name: tx.figma, icon: '🎨', description: tx.collaborative_prototyping, category: 'Design' },
    { name: tx.invision, icon: '🔄', description: tx.interactive_prototyping, category: 'Prototyping' },
    { name: tx.principle, icon: '⚡', description: tx.animation_interaction_design, category: 'Animation' },
    { name: tx.framer, icon: '🚀', description: tx.advanced_prototyping, category: 'Advanced' },
    { name: tx.protopie, icon: '🥧', description: tx.sensor_based_prototyping, category: 'Mobile' },
    { name: tx.adobe_xd, icon: '🎯', description: tx.ux_ui_prototyping, category: 'Design' },
    { name: tx.axure, icon: '🔧', description: tx.complex_interaction_design, category: 'Enterprise' },
    { name: tx.marvel, icon: '⚡', description: tx.simple_prototyping, category: 'Quick' }
  ];

  const benefits = [
    {
      title: tx.early_validation,
      description: tx.test_concepts_and_user_flows,
      icon: '✅'
    },
    {
      title: tx.reduced_development_costs,
      description: tx.catch_issues_early_to_avoid,
      icon: '💰'
    },
    {
      title: tx.better_user_experience,
      description: tx.optimize_user_interactions_through_itera,
      icon: '😊'
    },
    {
      title: tx.stakeholder_alignment,
      description: tx.get_clear_visual_approval_from,
      icon: '🤝'
    },
    {
      title: tx.faster_development,
      description: tx.provide_developers_with_clear_specificat,
      icon: '⚡'
    },
    {
      title: tx.risk_mitigation,
      description: tx.identify_and_solve_usability_issues,
      icon: '🛡️'
    }
  ];

  const useCases = [
    {
      title: tx.mobile_app_development,
      description: tx.prototype_mobile_app_interactions_and,
      icon: '📱'
    },
    {
      title: tx.web_application,
      description: tx.test_complex_web_application_functionali,
      icon: '💻'
    },
    {
      title: tx.e_commerce_platform,
      description: tx.validate_shopping_cart_and_checkout,
      icon: '🛒'
    },
    {
      title: tx.dashboard_design,
      description: tx.prototype_data_visualization_and_user,
      icon: '📊'
    },
    {
      title: tx.onboarding_flow,
      description: tx.test_user_onboarding_and_tutorial,
      icon: '🎯'
    },
    {
      title: tx.landing_page,
      description: tx.optimize_conversion_focused_landing_page,
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.interactive_prototyping_2}
        eyebrowIcon={MousePointerClick}
        title={tx.prototyping_2}
        highlight={tx.services}
        description={tx.we_create_interactive_prototypes_that}
        highlights={["Low-Fidelity Prototypes", "Mid-Fidelity Prototypes", "High-Fidelity Prototypes", "Interactive Prototypes"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "60%", label: tx.cost_reduction },
          { value: "1-6", label: tx.week_delivery },
          { value: "95%", label: tx.stakeholder_approval },
        ]}
      />

      {/* Prototype Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.prototype_types}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.prototyping_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_quick_concept_validation_to}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prototypeTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 sm:grid-cols-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.fidelity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.fidelity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.interactivity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.interactivity}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototyping Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.prototyping_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_high}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prototypingProcess.map((step, index) => (
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_prototyping_deliverables_t}</p>
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

      {/* Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.prototyping_tools}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.professional}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.tools}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_industry_leading_prototyping}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tool.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tool.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {tool.category}
                  </span>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_prototyping}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.prototyping_2}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.prototyping_provides_invaluable_benefits}</p>
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

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.use_cases}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.perfect_for}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.these_projects}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.prototyping_is_ideal_for_a}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {useCase.description}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_prototype}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_an_interactive}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_prototyping}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_examples}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
