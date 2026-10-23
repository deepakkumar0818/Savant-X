import tx from '@/content/text/app/expertise/ui-ux-design/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Palette } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.ui_ux_design,
  description:
    tx.user_centred_ux_research_interface,
  path: '/expertise/ui-ux-design',
});

export default function UIUXDesignPage() {

  const designServices = [
    {
      id: 'ux',
      title: tx.ux_design,
      icon: '📐',
      description: tx.user_experience_design_focused_on,
      features: [tx.user_research, tx.information_architecture, tx.user_journey_mapping, tx.wireframing, tx.usability_testing, tx.accessibility_design],
      pricing: tx.starting_at_5_000,
      timeline: '3-6 weeks',
      color: 'blue'
    },
    {
      id: 'ui',
      title: tx.ui_design,
      icon: '🎨',
      description: tx.user_interface_design_creating_visually,
      features: [tx.visual_design, tx.component_design, tx.design_systems, tx.brand_integration, tx.responsive_design, tx.interactive_prototypes],
      pricing: tx.starting_at_4_000,
      timeline: '2-5 weeks',
      color: 'purple'
    },
    {
      id: 'research',
      title: tx.ux_research,
      icon: '🔍',
      description: tx.comprehensive_user_research_to_understan,
      features: [tx.user_interviews, tx.surveys_analytics, tx.usability_testing, tx.persona_development, tx.competitive_analysis, tx.insights_recommendations],
      pricing: tx.starting_at_3_500,
      timeline: '2-4 weeks',
      color: 'green'
    },
    {
      id: 'prototyping',
      title: tx.prototyping,
      icon: '⚡',
      description: tx.interactive_prototypes_to_test_and,
      features: [tx.low_fidelity_prototypes, tx.high_fidelity_prototypes, tx.interactive_testing, tx.user_feedback, tx.iteration_support, tx.developer_handoff],
      pricing: tx.starting_at_2_500,
      timeline: '1-3 weeks',
      color: 'orange'
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: tx.discovery_research,
      description: tx.understanding_users_business_goals_and,
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.strategy_planning,
      description: tx.defining_information_architecture_and_us,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '03',
      title: tx.wireframing_structure,
      description: tx.creating_low_fidelity_layouts_and,
      duration: '1-2 weeks',
      icon: '📐'
    },
    {
      step: '04',
      title: tx.visual_design_2,
      description: tx.developing_high_fidelity_designs_with,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '05',
      title: tx.prototyping_testing,
      description: tx.creating_interactive_prototypes_and_user,
      duration: '1-2 weeks',
      icon: '⚡'
    },
    {
      step: '06',
      title: tx.handoff_support,
      description: tx.developer_handoff_and_ongoing_design,
      duration: tx.t_1_week,
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.user_personas,
      description: tx.detailed_user_profiles_based_on,
      icon: '👤'
    },
    {
      title: tx.user_journey_maps,
      description: tx.visual_representation_of_user_interactio,
      icon: '🗺️'
    },
    {
      title: tx.information_architecture_2,
      description: tx.site_structure_and_content_organization,
      icon: '🏗️'
    },
    {
      title: tx.wireframes,
      description: tx.low_fidelity_layouts_showing_structure,
      icon: '📐'
    },
    {
      title: tx.visual_designs,
      description: tx.high_fidelity_designs_with_brand,
      icon: '🎨'
    },
    {
      title: tx.interactive_prototypes_2,
      description: tx.clickable_prototypes_for_testing_and,
      icon: '⚡'
    },
    {
      title: tx.design_system,
      description: tx.comprehensive_design_guidelines_and_comp,
      icon: '📚'
    },
    {
      title: tx.usability_report,
      description: tx.testing_results_and_recommendations_for,
      icon: '📊'
    }
  ];

  const tools = [
    { name: tx.figma, icon: '🎨', description: tx.collaborative_design_tool, category: 'Design' },
    { name: tx.sketch, icon: '✏️', description: tx.vector_graphics_editor, category: 'Design' },
    { name: tx.adobe_xd, icon: '🎯', description: tx.ux_ui_design_platform, category: 'Design' },
    { name: tx.invision, icon: '🔄', description: tx.prototyping_and_collaboration, category: 'Prototyping' },
    { name: tx.principle, icon: '⚡', description: tx.animation_and_interaction_design, category: 'Animation' },
    { name: tx.maze, icon: '🧪', description: tx.user_testing_platform, category: 'Testing' },
    { name: tx.hotjar, icon: '🔥', description: tx.user_behavior_analytics, category: 'Analytics' },
    { name: tx.zeplin, icon: '📱', description: tx.design_handoff_tool, category: 'Handoff' }
  ];

  const principles = [
    {
      title: tx.user_centered_design,
      description: tx.every_decision_is_based_on,
      icon: '👥'
    },
    {
      title: tx.accessibility_first,
      description: tx.designing_for_all_users_including,
      icon: '♿'
    },
    {
      title: tx.consistency_standards,
      description: tx.maintaining_visual_and_functional_consis,
      icon: '📏'
    },
    {
      title: tx.performance_optimized,
      description: tx.designing_for_speed_and_efficiency,
      icon: '⚡'
    },
    {
      title: tx.mobile_first,
      description: tx.designing_for_mobile_devices_first,
      icon: '📱'
    },
    {
      title: tx.data_driven,
      description: tx.using_analytics_and_user_feedback,
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.ui_ux_design_2}
        eyebrowIcon={Palette}
        title={tx.ui_ux}
        highlight={tx.design_services}
        description={tx.we_create_exceptional_user_experiences}
        highlights={["UX Design", "UI Design", "UX Research", "Prototyping"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "85%", label: tx.user_satisfaction },
          { value: "2-6", label: tx.week_delivery },
          { value: "50%", label: tx.conversion_increase },
        ]}
      />

      {/* Design Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.ui_ux_design_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.services}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_design_services_covering_e}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      service.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      service.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      service.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300'
                    } rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      <ServiceIcon emoji={service.icon} size="lg" />
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

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.design}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_6_step_design}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, index) => (
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.design_deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_design_deliverables_that_p}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Design Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.design_tools}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.professional}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.design_tools}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_industry_leading_design}</p>
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

      {/* Design Principles */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.design_principles}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.our_design}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.principles}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.core_principles_that_guide_our}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={principle.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {principle.description}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_create}<span className="block text-blue-100 mt-2">{tx.exceptional_experiences}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_work_together_to}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
