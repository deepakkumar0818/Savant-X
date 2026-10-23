import tx from '@/content/text/app/expertise/laravel/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Server } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.laravel_development,
  description:
    tx.robust_secure_laravel_and_php,
  path: '/expertise/laravel',
});

export default function LaravelPage() {

  const laravelServices = [
    {
      id: 'web-apps',
      title: tx.laravel_web_applications,
      icon: '💻',
      description: tx.robust_scalable_web_applications_built,
      features: [tx.mvc_architecture, tx.eloquent_orm, tx.authentication_system, tx.api_development, tx.queue_management, tx.testing_suite],
      pricing: tx.starting_at_6_000,
      timeline: '6-12 weeks',
      complexity: tx.advanced,
      features_count: '50+'
    },
    {
      id: 'api-development',
      title: tx.laravel_api_development,
      icon: '🔗',
      description: tx.restful_and_graphql_apis_with,
      features: [tx.restful_apis, tx.graphql_apis, tx.api_documentation, tx.rate_limiting, tx.oauth_authentication, tx.api_versioning],
      pricing: tx.starting_at_4_500,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      features_count: '30+'
    },
    {
      id: 'ecommerce',
      title: tx.laravel_e_commerce,
      icon: '🛒',
      description: tx.feature_rich_e_commerce_platforms,
      features: [tx.product_management, tx.shopping_cart, tx.payment_gateway, tx.order_processing, tx.inventory_management, tx.admin_dashboard],
      pricing: tx.starting_at_15_000,
      timeline: '10-20 weeks',
      complexity: tx.enterprise,
      features_count: '100+'
    },
    {
      id: 'cms-platforms',
      title: tx.laravel_cms_platforms,
      icon: '📝',
      description: tx.custom_content_management_systems_with,
      features: [tx.content_management, tx.user_management, tx.role_based_access, tx.media_library, tx.seo_tools, tx.multi_language_support],
      pricing: tx.starting_at_8_000,
      timeline: '8-16 weeks',
      complexity: tx.enterprise,
      features_count: '75+'
    }
  ];

  const laravelEcosystem = [
    {
      category: 'Core Framework',
      tools: [
        { name: tx.laravel_framework, icon: '🔥', description: tx.modern_php_framework_for_web },
        { name: tx.eloquent_orm_2, icon: '🗄️', description: tx.beautiful_simple_activerecord_implementa },
        { name: tx.artisan_cli, icon: '⚡', description: tx.command_line_interface_for_laravel },
        { name: tx.blade_templates, icon: '🎨', description: tx.lightweight_template_engine }
      ]
    },
    {
      category: 'Authentication & Security',
      tools: [
        { name: tx.laravel_sanctum, icon: '🔐', description: tx.lightweight_api_authentication },
        { name: tx.laravel_passport, icon: '🛡️', description: tx.oauth2_server_implementation },
        { name: tx.laravel_breeze, icon: '💨', description: tx.minimal_authentication_scaffolding },
        { name: tx.laravel_jetstream, icon: '✈️', description: tx.beautiful_authentication_scaffolding }
      ]
    },
    {
      category: 'Development Tools',
      tools: [
        { name: tx.laravel_mix, icon: '🎵', description: tx.asset_compilation_and_bundling },
        { name: tx.laravel_valet, icon: '🚗', description: tx.laravel_development_environment },
        { name: tx.laravel_telescope, icon: '🔭', description: tx.debug_and_monitor_your_application },
        { name: tx.laravel_horizon, icon: '🌅', description: tx.dashboard_and_configuration_for_queues }
      ]
    },
    {
      category: 'Testing & Deployment',
      tools: [
        { name: tx.phpunit, icon: '🧪', description: tx.testing_framework_for_php },
        { name: tx.laravel_dusk, icon: '🌅', description: tx.browser_automation_and_testing },
        { name: tx.laravel_forge, icon: '🔨', description: tx.server_provisioning_and_deployment },
        { name: tx.laravel_envoyer, icon: '📤', description: tx.zero_downtime_deployment }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.project_planning,
      description: tx.requirements_analysis_and_laravel_projec,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.database_design,
      description: tx.designing_database_schema_and_relationsh,
      duration: '1-2 weeks',
      icon: '🗄️'
    },
    {
      step: '03',
      title: tx.backend_development,
      description: tx.building_laravel_backend_with_controller,
      duration: '3-8 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: tx.api_development_2,
      description: tx.creating_restful_or_graphql_apis,
      duration: '2-4 weeks',
      icon: '🔗'
    },
    {
      step: '05',
      title: tx.testing_optimization,
      description: tx.comprehensive_testing_and_performance_op,
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: tx.deployment_maintenance,
      description: tx.production_deployment_and_ongoing_mainte,
      duration: tx.t_1_week,
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.laravel_application,
      description: tx.fully_functional_laravel_application_wit,
      icon: '🔥'
    },
    {
      title: tx.api_documentation_2,
      description: tx.comprehensive_api_documentation_with_exa,
      icon: '📚'
    },
    {
      title: tx.database_schema,
      description: tx.optimized_database_design_with_migration,
      icon: '🗄️'
    },
    {
      title: tx.testing_suite_2,
      description: tx.complete_testing_suite_with_unit,
      icon: '🧪'
    },
    {
      title: tx.admin_panel,
      description: tx.custom_admin_interface_for_content,
      icon: '🎛️'
    },
    {
      title: tx.deployment_setup,
      description: tx.production_ready_deployment_configuratio,
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      title: tx.elegant_syntax,
      description: tx.clean_expressive_syntax_that_makes,
      icon: '✨'
    },
    {
      title: tx.rich_ecosystem,
      description: tx.extensive_package_ecosystem_and_laravel,
      icon: '🌐'
    },
    {
      title: tx.built_in_security,
      description: tx.built_in_security_features_including,
      icon: '🔒'
    },
    {
      title: tx.scalable_architecture,
      description: tx.modular_architecture_that_scales_from,
      icon: '📈'
    },
    {
      title: tx.active_community,
      description: tx.large_active_community_with_extensive,
      icon: '👥'
    },
    {
      title: tx.rapid_development,
      description: tx.artisan_commands_and_scaffolding_tools,
      icon: '⚡'
    }
  ];

  const useCases = [
    {
      title: tx.saas_applications,
      description: tx.software_as_a_service_applications,
      icon: '☁️'
    },
    {
      title: tx.enterprise_web_apps,
      description: tx.complex_enterprise_applications_with_adv,
      icon: '🏢'
    },
    {
      title: tx.e_commerce_platforms,
      description: tx.online_stores_with_payment_processing,
      icon: '🛒'
    },
    {
      title: tx.content_management_2,
      description: tx.custom_cms_platforms_with_flexible,
      icon: '📝'
    },
    {
      title: tx.api_services,
      description: tx.backend_api_services_for_mobile,
      icon: '🔗'
    },
    {
      title: tx.financial_systems,
      description: tx.banking_and_financial_applications_with,
      icon: '💰'
    }
  ];

  const laravelFeatures = [
    {
      title: tx.eloquent_orm_3,
      description: tx.beautiful_simple_activerecord_implementa_2,
      icon: '🗄️'
    },
    {
      title: tx.blade_templating,
      description: tx.lightweight_powerful_templating_engine_w,
      icon: '🎨'
    },
    {
      title: tx.queue_system,
      description: tx.robust_queue_system_for_background,
      icon: '⏳'
    },
    {
      title: tx.event_broadcasting,
      description: tx.real_time_event_broadcasting_using,
      icon: '📡'
    },
    {
      title: tx.task_scheduling,
      description: tx.built_in_task_scheduler_for,
      icon: '⏰'
    },
    {
      title: tx.caching_system,
      description: tx.flexible_caching_system_supporting_multi,
      icon: '💾'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.laravel_development_2}
        eyebrowIcon={Server}
        title={tx.laravel}
        highlight={tx.development}
        description={tx.we_build_robust_scalable_web}
        highlights={["Laravel Web Applications", "Laravel API Development", "Laravel E-commerce", "Laravel CMS Platforms"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "100%", label: tx.secure },
          { value: "6-20", label: tx.week_delivery },
          { value: "PHP 8.2+", label: tx.latest_version },
        ]}
      />

      {/* Laravel Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.laravel}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_laravel_development_servic}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laravelServices.map((service) => (
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

      {/* Laravel Ecosystem */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.laravel_ecosystem}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.complete_laravel}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technology_stack}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_the_entire}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {laravelEcosystem.map((category, index) => (
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.laravel_development_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
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

      {/* Laravel Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.laravel_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.powerful}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.laravel_provides_a_comprehensive_set}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laravelFeatures.map((feature, index) => (
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_laravel_development_deliverable}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_laravel}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.laravel}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.laravel_provides_significant_advantages}</p>
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.use_cases}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.perfect_for}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.these_projects}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.laravel_is_ideal_for_a}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_laravel_app}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_powerful}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_laravel_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
