'use client';

import tx from '@/content/text/app/expertise/design-systems/page.json';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { useState } from 'react';
import Footer from '@/components/Footer';
import PageHero from '@/components/hero/PageHero';
import { Component } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function DesignSystemsPage() {
  const [activeCategory, setActiveCategory] = useState('components');

  const designSystemTypes = [
    {
      id: 'basic',
      title: tx.basic_design_system,
      icon: '🎨',
      description: tx.essential_design_tokens_and_basic,
      features: [tx.color_palette, tx.typography_scale, tx.basic_components, tx.spacing_system, tx.brand_guidelines, tx.icon_library],
      pricing: tx.starting_at_3_500,
      timeline: '2-4 weeks',
      complexity: tx.basic,
      components: '15-25'
    },
    {
      id: 'comprehensive',
      title: tx.comprehensive_design_system,
      icon: '🏗️',
      description: tx.complete_design_system_with_advanced,
      features: [tx.advanced_components, tx.interaction_patterns, tx.animation_library, tx.accessibility_guidelines, tx.usage_documentation, tx.developer_handoff],
      pricing: tx.starting_at_7_500,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      components: '50-100'
    },
    {
      id: 'enterprise',
      title: tx.enterprise_design_system,
      icon: '🏢',
      description: tx.scalable_design_system_for_large,
      features: [tx.multi_product_support, tx.custom_theming, tx.advanced_patterns, tx.team_training, tx.maintenance_support, tx.version_control],
      pricing: tx.starting_at_15_000,
      timeline: '8-16 weeks',
      complexity: tx.enterprise,
      components: '100+'
    },
    {
      id: 'custom',
      title: tx.custom_design_system,
      icon: '⚡',
      description: tx.tailored_design_system_built_specificall,
      features: [tx.custom_architecture, tx.brand_integration, tx.specialized_components, tx.advanced_theming, tx.integration_support, tx.ongoing_evolution],
      pricing: tx.custom_quote,
      timeline: '6-20 weeks',
      complexity: tx.custom,
      components: tx.unlimited
    }
  ];

  const designSystemProcess = [
    {
      step: '01',
      title: tx.audit_analysis,
      description: tx.analyzing_existing_designs_and_identifyi,
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.foundation_setup,
      description: tx.establishing_design_tokens_typography_an,
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '03',
      title: tx.component_design,
      description: tx.creating_reusable_components_with_consis,
      duration: '2-4 weeks',
      icon: '🧩'
    },
    {
      step: '04',
      title: tx.documentation,
      description: tx.creating_comprehensive_documentation_and,
      duration: '1-2 weeks',
      icon: '📚'
    },
    {
      step: '05',
      title: tx.implementation,
      description: tx.building_the_design_system_in,
      duration: '2-6 weeks',
      icon: '⚙️'
    },
    {
      step: '06',
      title: tx.training_handoff,
      description: tx.training_your_team_and_providing,
      duration: '1-2 weeks',
      icon: '🎓'
    }
  ];

  const deliverables = [
    {
      title: tx.design_tokens,
      description: tx.colors_typography_spacing_and_other,
      icon: '🎨'
    },
    {
      title: tx.component_library,
      description: tx.reusable_ui_components_with_multiple,
      icon: '🧩'
    },
    {
      title: tx.style_guide,
      description: tx.comprehensive_documentation_of_design_pr,
      icon: '📖'
    },
    {
      title: tx.code_library,
      description: tx.implementation_in_react_vue_or,
      icon: '💻'
    },
    {
      title: tx.accessibility_guidelines_2,
      description: tx.wcag_compliance_guidelines_and_accessibi,
      icon: '♿'
    },
    {
      title: tx.brand_integration_2,
      description: tx.seamless_integration_with_your_brand,
      icon: '🏷️'
    }
  ];

  const systemComponents = {
    'components': [
      { name: tx.buttons, icon: '🔘', description: tx.primary_secondary_and_variant_button },
      { name: tx.forms, icon: '📝', description: tx.input_fields_labels_and_validation },
      { name: tx.navigation, icon: '🧭', description: tx.menus_breadcrumbs_and_navigation_pattern },
      { name: tx.cards, icon: '🃏', description: tx.content_containers_with_consistent_styli },
      { name: tx.modals, icon: '🪟', description: tx.overlays_dialogs_and_popup_components },
      { name: tx.tables, icon: '📊', description: tx.data_display_with_sorting_and },
      { name: tx.charts, icon: '📈', description: tx.data_visualization_components },
      { name: tx.loading_states, icon: '⏳', description: tx.spinners_skeletons_and_progress_indicato }
    ],
    'patterns': [
      { name: tx.layout_patterns, icon: '📐', description: tx.grid_systems_and_responsive_layouts },
      { name: tx.interaction_patterns_2, icon: '👆', description: tx.hover_states_focus_indicators_and },
      { name: tx.content_patterns, icon: '📄', description: tx.typography_hierarchy_and_content_structu },
      { name: tx.navigation_patterns, icon: '🗺️', description: tx.user_flow_and_navigation_behaviors },
      { name: tx.feedback_patterns, icon: '💬', description: tx.success_error_and_warning_messages },
      { name: tx.data_patterns, icon: '📋', description: tx.lists_filters_and_data_display }
    ],
    'tokens': [
      { name: tx.color_system, icon: '🌈', description: tx.primary_secondary_and_semantic_color },
      { name: tx.typography, icon: '🔤', description: tx.font_families_sizes_weights_and },
      { name: tx.spacing, icon: '📏', description: tx.consistent_spacing_scale_and_rhythm },
      { name: tx.shadows, icon: '🌫️', description: tx.elevation_and_depth_through_shadow },
      { name: tx.border_radius, icon: '⭕', description: tx.consistent_corner_rounding_values },
      { name: tx.breakpoints, icon: '📱', description: tx.responsive_design_breakpoints_and_media }
    ]
  };

  const benefits = [
    {
      title: tx.design_consistency,
      description: tx.ensure_consistent_visual_design_across,
      icon: '🎯'
    },
    {
      title: tx.faster_development,
      description: tx.reduce_development_time_with_pre,
      icon: '⚡'
    },
    {
      title: tx.better_collaboration,
      description: tx.improve_collaboration_between_design_and,
      icon: '🤝'
    },
    {
      title: tx.scalability,
      description: tx.easily_scale_your_design_system,
      icon: '📈'
    },
    {
      title: tx.brand_cohesion,
      description: tx.maintain_strong_brand_identity_across,
      icon: '🏷️'
    },
    {
      title: tx.reduced_maintenance,
      description: tx.centralized_updates_reduce_maintenance_o,
      icon: '🔧'
    }
  ];

  const tools = [
    { name: tx.figma, icon: '🎨', description: tx.design_system_creation, category: 'Design' },
    { name: tx.storybook, icon: '📚', description: tx.component_documentation, category: 'Documentation' },
    { name: tx.zeroheight, icon: '📖', description: tx.design_system_hub, category: 'Platform' },
    { name: tx.react, icon: '⚛️', description: tx.component_implementation, category: 'Framework' },
    { name: tx.vue, icon: '💚', description: tx.vue_js_components, category: 'Framework' },
    { name: tx.angular, icon: '🔺', description: tx.angular_components, category: 'Framework' },
    { name: tx.styled_components, icon: '💅', description: tx.css_in_js_styling, category: 'Styling' },
    { name: tx.tailwind_css, icon: '🎨', description: tx.utility_first_css, category: 'Styling' }
  ];

  const useCases = [
    {
      title: tx.product_suites,
      description: tx.maintain_consistency_across_multiple_rel,
      icon: '🏢'
    },
    {
      title: tx.multi_platform_apps,
      description: tx.unified_design_across_web_mobile,
      icon: '📱'
    },
    {
      title: tx.large_teams,
      description: tx.enable_multiple_designers_and_developers,
      icon: '👥'
    },
    {
      title: tx.brand_evolution,
      description: tx.support_brand_updates_and_design,
      icon: '🔄'
    },
    {
      title: tx.rapid_prototyping,
      description: tx.speed_up_prototyping_with_pre,
      icon: '⚡'
    },
    {
      title: tx.quality_assurance,
      description: tx.ensure_design_quality_and_accessibility,
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.design_systems}
        eyebrowIcon={Component}
        title={tx.design}
        highlight={tx.systems}
        description={tx.we_create_comprehensive_design_systems}
        highlights={["Basic Design System", "Comprehensive Design System", "Enterprise Design System", "Custom Design System"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "70%", label: tx.faster_development_2 },
          { value: "2-20", label: tx.week_delivery },
          { value: "100%", label: tx.consistency },
        ]}
      />

      {/* Design System Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.system_types}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.design_system}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_basic_design_tokens_to}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designSystemTypes.map((type) => (
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.complexity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{type.components}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.components}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.design_system}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_comprehe}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSystemProcess.map((step, index) => (
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

      {/* System Components */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.system_components}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_s}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.included}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_design_system_components_t}</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl">
              {Object.keys(systemComponents).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemComponents[activeCategory as keyof typeof systemComponents].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={item.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_design_system_deliverables_that}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_design_systems}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.design_systems}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.design_systems_provide_significant_advan}</p>
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

      {/* Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.design_system_tools}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.professional}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.tools}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_industry_leading_tools}</p>
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

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.use_cases}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.perfect_for}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.these_scenarios}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.design_systems_are_ideal_for}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_design_system}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_comprehensive}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_design_system}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_examples}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
