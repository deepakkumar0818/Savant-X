import tx from '@/content/text/app/expertise/react/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Code } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.mern_stack_react_development,
  description:
    tx.modern_scalable_react_and_mern,
  path: '/expertise/react',
});

export default function ReactPage() {

  const reactServices = [
    {
      id: 'web-apps',
      title: tx.react_web_applications,
      icon: '💻',
      description: tx.modern_responsive_web_applications_built,
      features: [tx.single_page_applications, tx.component_based_architecture, tx.state_management, tx.routing_navigation, tx.api_integration, tx.performance_optimization],
      pricing: tx.starting_at_5_000,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      components: '50-200'
    },
    {
      id: 'dashboards',
      title: tx.react_dashboards,
      icon: '📊',
      description: tx.interactive_dashboards_and_admin_panels,
      features: [tx.data_visualization, tx.real_time_updates, tx.interactive_charts, tx.user_management, tx.custom_widgets, tx.responsive_design],
      pricing: tx.starting_at_7_500,
      timeline: '6-10 weeks',
      complexity: tx.complex,
      components: '100-300'
    },
    {
      id: 'ecommerce',
      title: tx.react_e_commerce,
      icon: '🛒',
      description: tx.feature_rich_e_commerce_platforms,
      features: [tx.product_catalogs, tx.shopping_cart, tx.payment_gateway, tx.order_management, tx.user_accounts, tx.admin_panel],
      pricing: tx.starting_at_12_000,
      timeline: '8-16 weeks',
      complexity: tx.enterprise,
      components: '200-500'
    },
    {
      id: 'mobile',
      title: tx.react_native_apps,
      icon: '📱',
      description: tx.cross_platform_mobile_applications_using,
      features: [tx.cross_platform_development, tx.native_performance, tx.push_notifications, tx.offline_support, tx.app_store_deployment, tx.device_integration],
      pricing: tx.starting_at_8_000,
      timeline: '6-12 weeks',
      complexity: tx.advanced,
      components: '100-400'
    }
  ];

  const reactEcosystem = [
    {
      category: 'Core Libraries',
      tools: [
        { name: tx.react, icon: '⚛️', description: tx.ui_library_for_building_user },
        { name: tx.react_router, icon: '🗺️', description: tx.declarative_routing_for_react_applicatio },
        { name: tx.react_hooks, icon: '🎣', description: tx.state_and_lifecycle_management },
        { name: tx.react_context, icon: '📦', description: tx.global_state_management_solution }
      ]
    },
    {
      category: 'State Management',
      tools: [
        { name: tx.redux, icon: '🔄', description: tx.predictable_state_container },
        { name: tx.zustand, icon: '🐻', description: tx.lightweight_state_management },
        { name: tx.recoil, icon: '⚛️', description: tx.experimental_state_management },
        { name: tx.mobx, icon: '📊', description: tx.reactive_state_management }
      ]
    },
    {
      category: 'UI Libraries',
      tools: [
        { name: tx.material_ui, icon: '🎨', description: tx.google_material_design_components },
        { name: tx.ant_design, icon: '🐜', description: tx.enterprise_class_ui_design_language },
        { name: tx.chakra_ui, icon: '⚡', description: tx.simple_modular_and_accessible },
        { name: tx.tailwind_css, icon: '🎨', description: tx.utility_first_css_framework }
      ]
    },
    {
      category: 'Testing',
      tools: [
        { name: tx.jest, icon: '🧪', description: tx.javascript_testing_framework },
        { name: tx.react_testing_library, icon: '🔬', description: tx.simple_and_complete_testing_utilities },
        { name: tx.cypress, icon: '🌲', description: tx.end_to_end_testing_framework },
        { name: tx.storybook, icon: '📚', description: tx.component_development_environment }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.project_setup,
      description: tx.initializing_react_project_with_proper,
      duration: '1-2 days',
      icon: '🚀'
    },
    {
      step: '02',
      title: tx.component_architecture,
      description: tx.designing_component_hierarchy_and_data,
      duration: '3-5 days',
      icon: '🏗️'
    },
    {
      step: '03',
      title: tx.ui_development,
      description: tx.building_responsive_user_interfaces_with,
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.state_management_2,
      description: tx.implementing_state_management_and_data,
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '05',
      title: tx.api_integration_2,
      description: tx.connecting_frontend_with_backend_apis,
      duration: '1-2 weeks',
      icon: '🔗'
    },
    {
      step: '06',
      title: tx.testing_deployment,
      description: tx.comprehensive_testing_and_production_dep,
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.react_application,
      description: tx.fully_functional_react_application_with,
      icon: '⚛️'
    },
    {
      title: tx.component_library,
      description: tx.reusable_react_components_with_comprehen,
      icon: '🧩'
    },
    {
      title: tx.state_management_3,
      description: tx.optimized_state_management_solution_for,
      icon: '📊'
    },
    {
      title: tx.api_integration_3,
      description: tx.complete_api_integration_with_error,
      icon: '🔗'
    },
    {
      title: tx.testing_suite,
      description: tx.comprehensive_testing_suite_with_unit,
      icon: '🧪'
    },
    {
      title: tx.deployment_setup,
      description: tx.production_ready_deployment_configuratio,
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      title: tx.component_reusability,
      description: tx.build_reusable_components_that_can,
      icon: '🧩'
    },
    {
      title: tx.virtual_dom,
      description: tx.fast_rendering_with_react_apos,
      icon: '⚡'
    },
    {
      title: tx.rich_ecosystem,
      description: tx.access_to_thousands_of_libraries,
      icon: '🌐'
    },
    {
      title: tx.developer_experience,
      description: tx.excellent_developer_tools_and_debugging,
      icon: '🛠️'
    },
    {
      title: tx.community_support,
      description: tx.large_community_and_extensive_documentat,
      icon: '👥'
    },
    {
      title: tx.future_proof,
      description: tx.continuously_evolving_with_new_features,
      icon: '🔮'
    }
  ];

  const useCases = [
    {
      title: tx.corporate_websites,
      description: tx.professional_corporate_websites_with_dyn,
      icon: '🏢'
    },
    {
      title: tx.saas_applications,
      description: tx.software_as_a_service_applications,
      icon: '☁️'
    },
    {
      title: tx.e_commerce_platforms,
      description: tx.online_stores_with_advanced_shopping,
      icon: '🛒'
    },
    {
      title: tx.social_media_apps,
      description: tx.interactive_social_platforms_with_real,
      icon: '📱'
    },
    {
      title: tx.analytics_dashboards,
      description: tx.data_visualization_and_business_intellig,
      icon: '📊'
    },
    {
      title: tx.mobile_applications,
      description: tx.cross_platform_mobile_apps_using,
      icon: '📲'
    }
  ];

  const performanceFeatures = [
    {
      title: tx.code_splitting,
      description: tx.lazy_loading_and_code_splitting,
      icon: '✂️'
    },
    {
      title: tx.memoization,
      description: tx.react_memo_and_usememo_for,
      icon: '🧠'
    },
    {
      title: tx.bundle_optimization,
      description: tx.webpack_optimization_and_tree_shaking,
      icon: '📦'
    },
    {
      title: tx.server_side_rendering,
      description: tx.next_js_integration_for_seo,
      icon: '🖥️'
    },
    {
      title: tx.progressive_web_app,
      description: tx.pwa_features_for_app_like,
      icon: '📱'
    },
    {
      title: tx.performance_monitoring,
      description: tx.real_time_performance_monitoring_and,
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.react_js_development}
        eyebrowIcon={Code}
        title={tx.react_js}
        highlight={tx.development}
        description={tx.we_build_modern_scalable_react}
        highlights={["React Web Applications", "React Dashboards", "React E-commerce", "React Native Apps"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "99%", label: tx.performance_score },
          { value: "4-16", label: tx.week_delivery },
          { value: "100%", label: tx.client_satisfaction },
        ]}
      />

      {/* React Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.react_js}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_react_js_development_servi}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reactServices.map((service) => (
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.components}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.components}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* React Ecosystem */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.react_ecosystem}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.complete_react}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technology_stack}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_the_entire}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reactEcosystem.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={tool.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{tool.name}</h4>
                          <p className="text-sm text-slate-600">{tool.description}</p>
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.react_development}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_high}</p>
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_react_development_deliverables}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_react_js}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.react_js}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.react_js_provides_significant_advantages}</p>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.react_js_is_ideal_for}</p>
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

      {/* Performance Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.performance_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.optimized}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.performance}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_implement_advanced_performance_optimi}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_react_app}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_modern}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_react_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
