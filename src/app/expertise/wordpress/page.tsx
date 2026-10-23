import tx from '@/content/text/app/expertise/wordpress/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Newspaper } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.wordpress_development,
  description:
    tx.custom_wordpress_websites_and_e,
  path: '/expertise/wordpress',
});

export default function WordPressPage() {

  const wordpressServices = [
    {
      id: 'custom-themes',
      title: tx.custom_wordpress_themes,
      icon: '🎨',
      description: tx.bespoke_wordpress_themes_designed_and,
      features: [tx.responsive_design, tx.custom_layouts, tx.seo_optimized, tx.performance_optimized, tx.cross_browser_compatible, tx.accessibility_compliant],
      pricing: tx.starting_at_3_500,
      timeline: '3-6 weeks',
      complexity: tx.advanced,
      features_count: '25+'
    },
    {
      id: 'plugin-development',
      title: tx.wordpress_plugin_development,
      icon: '🔌',
      description: tx.custom_wordpress_plugins_to_extend,
      features: [tx.custom_functionality, tx.database_integration, tx.admin_interface, tx.security_features, tx.api_integration, tx.documentation],
      pricing: tx.starting_at_2_500,
      timeline: '2-5 weeks',
      complexity: tx.advanced,
      features_count: '20+'
    },
    {
      id: 'ecommerce-woocommerce',
      title: tx.woocommerce_development,
      icon: '🛒',
      description: tx.complete_e_commerce_solutions_using,
      features: [tx.product_management, tx.payment_gateway, tx.shipping_integration, tx.inventory_management, tx.order_processing, tx.analytics],
      pricing: tx.starting_at_5_000,
      timeline: '4-8 weeks',
      complexity: tx.enterprise,
      features_count: '40+'
    },
    {
      id: 'multisite-networks',
      title: tx.wordpress_multisite,
      icon: '🌐',
      description: tx.wordpress_multisite_networks_for_managin,
      features: [tx.multi_site_management, tx.centralized_updates, tx.user_management, tx.custom_domains, tx.shared_resources, tx.network_administration],
      pricing: tx.starting_at_6_000,
      timeline: '5-10 weeks',
      complexity: tx.enterprise,
      features_count: '30+'
    }
  ];

  const wordpressFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: tx.content_management, icon: '📝', description: tx.powerful_content_management_system_with },
        { name: tx.media_library, icon: '🖼️', description: tx.built_in_media_library_for },
        { name: tx.user_management_2, icon: '👥', description: tx.flexible_user_roles_and_permissions },
        { name: tx.seo_tools, icon: '🔍', description: tx.built_in_seo_features_and }
      ]
    },
    {
      category: 'Development Features',
      features: [
        { name: tx.custom_post_types, icon: '📋', description: tx.create_custom_content_types_for },
        { name: tx.custom_fields, icon: '🔧', description: tx.advanced_custom_fields_for_additional },
        { name: tx.hooks_filters, icon: '🎣', description: tx.extensive_hook_system_for_customization },
        { name: tx.rest_api, icon: '🌐', description: tx.wordpress_rest_api_for_headless }
      ]
    },
    {
      category: 'Performance & Security',
      features: [
        { name: tx.caching_system, icon: '⚡', description: tx.built_in_caching_and_optimization },
        { name: tx.security_features_2, icon: '🔒', description: tx.regular_security_updates_and_protection },
        { name: tx.database_optimization, icon: '🗄️', description: tx.optimized_database_queries_and_structure },
        { name: tx.cdn_integration, icon: '🌍', description: tx.content_delivery_network_integration_sup }
      ]
    },
    {
      category: 'Ecosystem & Plugins',
      features: [
        { name: tx.plugin_directory, icon: '📦', description: tx.extensive_plugin_ecosystem_with_60 },
        { name: tx.theme_directory, icon: '🎨', description: tx.thousands_of_free_and_premium },
        { name: tx.woocommerce, icon: '🛒', description: tx.most_popular_e_commerce_plugin },
        { name: tx.third_party_integrations, icon: '🔗', description: tx.integration_with_popular_services_and }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.planning_design,
      description: tx.understanding_requirements_and_creating,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.theme_development,
      description: tx.building_custom_wordpress_theme_with,
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.plugin_development,
      description: tx.creating_custom_plugins_and_extending,
      duration: '1-3 weeks',
      icon: '🔌'
    },
    {
      step: '04',
      title: tx.content_migration,
      description: tx.migrating_existing_content_and_setting,
      duration: '3-7 days',
      icon: '📊'
    },
    {
      step: '05',
      title: tx.testing_optimization,
      description: tx.comprehensive_testing_performance_optimi,
      duration: '3-7 days',
      icon: '🧪'
    },
    {
      step: '06',
      title: tx.launch_training,
      description: tx.website_launch_training_and_ongoing,
      duration: '2-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.wordpress_website,
      description: tx.fully_functional_wordpress_website_with,
      icon: '🌐'
    },
    {
      title: tx.custom_theme,
      description: tx.bespoke_wordpress_theme_tailored_to,
      icon: '🎨'
    },
    {
      title: tx.custom_plugins,
      description: tx.custom_wordpress_plugins_with_specific,
      icon: '🔌'
    },
    {
      title: tx.content_migration_2,
      description: tx.safe_migration_of_existing_content,
      icon: '📊'
    },
    {
      title: tx.training_documentation,
      description: tx.complete_training_for_your_team,
      icon: '📚'
    },
    {
      title: tx.maintenance_plan,
      description: tx.ongoing_maintenance_updates_and_support,
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: tx.user_friendly,
      description: tx.intuitive_content_management_system_that,
      icon: '😊'
    },
    {
      title: tx.seo_optimized_2,
      description: tx.built_in_seo_features_and_2,
      icon: '🔍'
    },
    {
      title: tx.flexible_scalable,
      description: tx.highly_flexible_platform_that_can,
      icon: '📈'
    },
    {
      title: tx.cost_effective,
      description: tx.open_source_platform_with_no,
      icon: '💰'
    },
    {
      title: tx.large_community,
      description: tx.huge_community_of_developers_designers,
      icon: '👥'
    },
    {
      title: tx.regular_updates,
      description: tx.regular_security_updates_and_new,
      icon: '🔄'
    }
  ];

  const useCases = [
    {
      title: tx.business_websites,
      description: tx.professional_websites_for_businesses_wit,
      icon: '🏢'
    },
    {
      title: tx.blogs_news_sites,
      description: tx.content_rich_websites_for_blogging,
      icon: '📰'
    },
    {
      title: tx.e_commerce_stores,
      description: tx.online_stores_with_woocommerce_for,
      icon: '🛒'
    },
    {
      title: tx.portfolio_websites,
      description: tx.showcase_portfolios_for_creative_profess,
      icon: '🎨'
    },
    {
      title: tx.corporate_websites,
      description: tx.large_corporate_websites_with_multiple,
      icon: '🏛️'
    },
    {
      title: tx.educational_sites,
      description: tx.educational_institutions_and_online_lear,
      icon: '🎓'
    }
  ];

  const wordpressTypes = [
    {
      title: tx.wordpress_com,
      description: tx.hosted_wordpress_solution_with_managed,
      icon: '☁️'
    },
    {
      title: tx.wordpress_org,
      description: tx.self_hosted_wordpress_with_full,
      icon: '🛠️'
    },
    {
      title: tx.headless_wordpress,
      description: tx.wordpress_as_a_headless_cms,
      icon: '🔗'
    },
    {
      title: tx.wordpress_multisite_2,
      description: tx.network_of_wordpress_sites_managed,
      icon: '🌐'
    }
  ];

  const popularPlugins = [
    { name: tx.woocommerce_2, icon: '🛒', description: tx.e_commerce_plugin, category: 'E-commerce' },
    { name: tx.yoast_seo, icon: '🔍', description: tx.seo_optimization_plugin, category: 'SEO' },
    { name: tx.elementor, icon: '🎨', description: tx.page_builder_plugin, category: 'Design' },
    { name: tx.contact_form_7, icon: '📧', description: tx.contact_form_plugin, category: 'Forms' },
    { name: tx.wp_rocket, icon: '⚡', description: tx.caching_plugin, category: 'Performance' },
    { name: tx.wordfence, icon: '🔒', description: tx.security_plugin, category: 'Security' },
    { name: tx.akismet, icon: '🚫', description: tx.spam_protection, category: 'Security' },
    { name: tx.wp_super_cache, icon: '💾', description: tx.caching_plugin, category: 'Performance' }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.wordpress_development_2}
        eyebrowIcon={Newspaper}
        title={tx.wordpress}
        highlight={tx.development}
        description={tx.we_create_powerful_custom_wordpress}
        highlights={["Custom WordPress Themes", "WordPress Plugin Development", "WooCommerce Development", "WordPress Multisite"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "43%", label: tx.web_market_share },
          { value: "3-10", label: tx.week_delivery },
          { value: "Open Source", label: tx.free_platform },
        ]}
      />

      {/* WordPress Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.wordpress}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_wordpress_development_serv}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wordpressServices.map((service) => (
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

      {/* WordPress Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.wordpress_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.powerful}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.wordpress_provides_a_comprehensive_set}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {wordpressFeatures.map((category, index) => (
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

      {/* WordPress Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.wordpress_types}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.wordpress}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.different_wordpress_implementations_to_m}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wordpressTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={type.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Plugins */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.popular_plugins}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.essential}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.wordpress_plugins}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_the_most}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {popularPlugins.map((plugin, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={plugin.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {plugin.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{plugin.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                    {plugin.category}
                  </span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.wordpress_development_2}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_wordpress_development_deliverab}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_wordpress}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.wordpress}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.wordpress_provides_significant_advantage}</p>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.wordpress_is_ideal_for_a}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_wordpress_site}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_powerful}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_wordpress_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
