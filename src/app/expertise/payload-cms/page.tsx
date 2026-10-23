import tx from '@/content/text/app/expertise/payload-cms/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Layers } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.payload_cms_development,
  description:
    tx.flexible_developer_friendly_content_mana,
  path: '/expertise/payload-cms',
});

export default function PayloadCMSPage() {

  const payloadServices = [
    {
      id: 'headless',
      title: tx.headless_cms_setup,
      icon: '🔄',
      description: tx.modern_headless_cms_implementation_with,
      features: [tx.api_first_architecture, tx.content_management, tx.multi_site_support, tx.custom_fields, tx.media_management, tx.user_permissions],
      pricing: tx.starting_at_3_500,
      timeline: '2-4 weeks',
      complexity: tx.standard,
      features_count: '20+'
    },
    {
      id: 'custom-fields',
      title: tx.custom_field_development,
      icon: '🛠️',
      description: tx.custom_field_types_and_complex,
      features: [tx.custom_field_types, tx.conditional_logic, tx.validation_rules, tx.rich_text_editor, tx.file_uploads, tx.relationship_fields],
      pricing: tx.starting_at_2_500,
      timeline: '1-3 weeks',
      complexity: tx.advanced,
      features_count: '15+'
    },
    {
      id: 'api-integration',
      title: tx.api_integration,
      icon: '🔗',
      description: tx.seamless_integration_with_frontend_appli,
      features: [tx.rest_api, tx.graphql_api, tx.webhooks, tx.authentication, tx.rate_limiting, tx.api_documentation],
      pricing: tx.starting_at_2_000,
      timeline: '1-2 weeks',
      complexity: tx.standard,
      features_count: '12+'
    },
    {
      id: 'enterprise',
      title: tx.enterprise_cms,
      icon: '🏢',
      description: tx.scalable_enterprise_grade_cms_solution,
      features: [tx.multi_tenant_architecture, tx.advanced_security, tx.workflow_management, tx.audit_logs, tx.performance_optimization, tx.custom_admin_ui],
      pricing: tx.starting_at_8_000,
      timeline: '6-12 weeks',
      complexity: tx.enterprise,
      features_count: '50+'
    }
  ];

  const payloadFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: tx.typescript_support, icon: '📘', description: tx.full_typescript_support_for_type },
        { name: tx.custom_fields_2, icon: '🔧', description: tx.flexible_field_types_and_validation },
        { name: tx.rich_text_editor_2, icon: '📝', description: tx.advanced_rich_text_editing_capabilities },
        { name: tx.media_management_2, icon: '🖼️', description: tx.comprehensive_media_handling_and_optimiz }
      ]
    },
    {
      category: 'Developer Experience',
      features: [
        { name: tx.rest_graphql_apis, icon: '🌐', description: tx.both_rest_and_graphql_api },
        { name: tx.webhooks_2, icon: '🎣', description: tx.real_time_event_notifications },
        { name: tx.authentication_2, icon: '🔐', description: tx.built_in_authentication_and_authorizatio },
        { name: tx.plugin_system, icon: '🧩', description: tx.extensible_plugin_architecture }
      ]
    },
    {
      category: 'Content Management',
      features: [
        { name: tx.version_control, icon: '📚', description: tx.content_versioning_and_history_tracking },
        { name: tx.draft_system, icon: '📄', description: tx.draft_and_publish_workflow },
        { name: tx.bulk_operations, icon: '⚡', description: tx.bulk_content_management_operations },
        { name: tx.search_filter, icon: '🔍', description: tx.advanced_search_and_filtering_capabiliti }
      ]
    },
    {
      category: 'Deployment & Scaling',
      features: [
        { name: tx.cloud_deployment, icon: '☁️', description: tx.easy_deployment_to_cloud_platforms },
        { name: tx.database_support, icon: '🗄️', description: tx.mongodb_and_postgresql_support },
        { name: tx.cdn_integration, icon: '🌍', description: tx.content_delivery_network_integration },
        { name: tx.performance_monitoring, icon: '📊', description: tx.built_in_performance_monitoring }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.requirements_analysis,
      description: tx.understanding_your_content_structure_and,
      duration: '3-5 days',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.schema_design,
      description: tx.designing_content_schemas_and_field,
      duration: '5-7 days',
      icon: '🏗️'
    },
    {
      step: '03',
      title: tx.cms_configuration,
      description: tx.setting_up_payload_cms_with,
      duration: '3-5 days',
      icon: '⚙️'
    },
    {
      step: '04',
      title: tx.custom_development,
      description: tx.building_custom_fields_plugins_and,
      duration: '1-3 weeks',
      icon: '🛠️'
    },
    {
      step: '05',
      title: tx.content_migration,
      description: tx.migrating_existing_content_to_payload,
      duration: '3-7 days',
      icon: '📊'
    },
    {
      step: '06',
      title: tx.testing_deployment,
      description: tx.testing_and_deploying_the_cms,
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.payload_cms_setup,
      description: tx.fully_configured_payload_cms_with,
      icon: '🔄'
    },
    {
      title: tx.custom_admin_ui_2,
      description: tx.tailored_admin_interface_for_content,
      icon: '🎨'
    },
    {
      title: tx.api_documentation_2,
      description: tx.comprehensive_api_documentation_and_exam,
      icon: '📚'
    },
    {
      title: tx.content_migration_2,
      description: tx.safe_migration_of_existing_content,
      icon: '📊'
    },
    {
      title: tx.training_support,
      description: tx.complete_training_for_your_content,
      icon: '🎓'
    },
    {
      title: tx.maintenance_plan,
      description: tx.ongoing_support_and_maintenance_for,
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: tx.developer_friendly,
      description: tx.built_by_developers_for_developers,
      icon: '👨‍💻'
    },
    {
      title: tx.type_safe,
      description: tx.full_typescript_support_ensures_type,
      icon: '🛡️'
    },
    {
      title: tx.flexible_architecture,
      description: tx.headless_architecture_allows_integration,
      icon: '🔀'
    },
    {
      title: tx.scalable_performance,
      description: tx.optimized_for_performance_with_efficient,
      icon: '⚡'
    },
    {
      title: tx.cost_effective,
      description: tx.open_source_solution_with_no,
      icon: '💰'
    },
    {
      title: tx.future_proof,
      description: tx.modern_architecture_ensures_long_term,
      icon: '🔮'
    }
  ];

  const useCases = [
    {
      title: tx.corporate_websites,
      description: tx.content_management_for_corporate_website,
      icon: '🏢'
    },
    {
      title: tx.e_commerce_platforms,
      description: tx.product_catalog_and_content_management,
      icon: '🛒'
    },
    {
      title: tx.blog_news_sites,
      description: tx.publishing_platform_for_blogs_news,
      icon: '📰'
    },
    {
      title: tx.documentation_sites,
      description: tx.technical_documentation_and_knowledge_ba,
      icon: '📖'
    },
    {
      title: tx.portfolio_websites,
      description: tx.showcase_portfolios_and_creative_content,
      icon: '🎨'
    },
    {
      title: tx.multi_site_networks,
      description: tx.managing_multiple_websites_from_a,
      icon: '🌐'
    }
  ];

  const integrations = [
    {
      title: tx.frontend_frameworks,
      description: tx.seamless_integration_with_react_next,
      icon: '⚛️'
    },
    {
      title: tx.e_commerce_platforms_2,
      description: tx.integration_with_shopify_woocommerce_and,
      icon: '🛒'
    },
    {
      title: tx.analytics_tools,
      description: tx.connect_with_google_analytics_mixpanel,
      icon: '📊'
    },
    {
      title: tx.email_marketing,
      description: tx.integration_with_mailchimp_sendgrid_and,
      icon: '📧'
    },
    {
      title: tx.social_media,
      description: tx.connect_with_social_media_platforms,
      icon: '📱'
    },
    {
      title: tx.third_party_apis,
      description: tx.integration_with_external_services_and,
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.payload_cms_development_2}
        eyebrowIcon={Layers}
        title={tx.payload}
        highlight={tx.cms_solutions}
        description={tx.we_build_powerful_developer_friendly}
        highlights={["Headless CMS Setup", "Custom Field Development", "API Integration", "Enterprise CMS"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "100%", label: tx.type_safe_2 },
          { value: "2-12", label: tx.week_delivery },
          { value: "Open Source", label: tx.no_licensing_fees },
        ]}
      />

      {/* Payload Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.payload_cms}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_payload_cms_development_se}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {payloadServices.map((service) => (
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

      {/* Payload Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.payload_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.powerful}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.payload_cms_provides_a_comprehensive}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {payloadFeatures.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={feature.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{feature.name}</h4>
                          <p className="text-sm text-slate-600">{feature.description}</p>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.payload_cms}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_robust}</p>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_payload_cms_deliverables_that}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_payload_cms}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.payload_cms}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.payload_cms_provides_significant_advanta}</p>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.payload_cms_is_ideal_for}</p>
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

      {/* Integrations */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.integrations}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.seamless}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.integrations}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.payload_cms_integrates_seamlessly_with}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={integration.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {integration.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {integration.description}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_cms}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_powerful}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_cms_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_examples}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
