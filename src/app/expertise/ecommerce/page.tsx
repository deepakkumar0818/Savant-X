import tx from '@/content/text/app/expertise/ecommerce/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { ShoppingCart } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.e_commerce_development,
  description:
    tx.conversion_focused_e_commerce_stores,
  path: '/expertise/ecommerce',
});

export default function EcommercePage() {

  const ecommerceTypes = [
    {
      id: 'shopify',
      title: tx.shopify_development,
      icon: '🛍️',
      description: tx.custom_shopify_stores_with_advanced,
      features: [tx.custom_themes, tx.app_integration, tx.payment_gateway, tx.inventory_management, tx.seo_optimization, tx.mobile_responsive],
      pricing: tx.starting_at_8_000,
      timeline: '4-6 weeks',
      color: 'green'
    },
    {
      id: 'woocommerce',
      title: tx.woocommerce_solutions,
      icon: '🛒',
      description: tx.wordpress_based_e_commerce_solutions,
      features: [tx.wordpress_integration, tx.custom_plugins, tx.payment_processing, tx.product_management, tx.order_tracking, tx.analytics],
      pricing: tx.starting_at_6_000,
      timeline: '3-5 weeks',
      color: 'purple'
    },
    {
      id: 'custom',
      title: tx.custom_e_commerce,
      icon: '🏪',
      description: tx.fully_custom_e_commerce_platforms,
      features: [tx.custom_design, tx.unique_features, tx.scalable_architecture, tx.api_integration, tx.advanced_analytics, tx.multi_vendor_support],
      pricing: tx.starting_at_15_000,
      timeline: '8-12 weeks',
      color: 'blue'
    },
    {
      id: 'headless',
      title: tx.headless_commerce,
      icon: '⚡',
      description: tx.modern_headless_e_commerce_solutions,
      features: [tx.api_first, tx.multi_channel, tx.performance_optimized, tx.flexible_frontend, tx.omnichannel, tx.future_proof],
      pricing: tx.starting_at_20_000,
      timeline: '10-16 weeks',
      color: 'orange'
    }
  ];

  const features = [
    {
      title: tx.product_catalog,
      description: tx.comprehensive_product_management_with_ca,
      icon: '📦'
    },
    {
      title: tx.shopping_cart,
      description: tx.seamless_cart_functionality_with_save,
      icon: '🛒'
    },
    {
      title: tx.payment_gateway_2,
      description: tx.secure_payment_processing_with_multiple,
      icon: '💳'
    },
    {
      title: tx.order_management,
      description: tx.complete_order_lifecycle_management_from,
      icon: '📋'
    },
    {
      title: tx.customer_portal,
      description: tx.self_service_customer_accounts_with,
      icon: '👤'
    },
    {
      title: tx.analytics_dashboard,
      description: tx.comprehensive_analytics_and_reporting_fo,
      icon: '📊'
    }
  ];

  const platforms = [
    {
      id: 'shopify',
      name: tx.shopify,
      icon: '🛍️',
      description: tx.leading_e_commerce_platform_with,
      features: [tx.easy_setup, tx.app_store, tx.payment_processing_2, tx.inventory_management_2, tx.mobile_apps, tx.t_24_7_support],
      pricing: tx.from_29_month,
      pros: [tx.user_friendly, tx.reliable_hosting, tx.great_support],
      cons: [tx.transaction_fees, tx.limited_customization]
    },
    {
      id: 'woocommerce',
      name: tx.woocommerce,
      icon: '🛒',
      description: tx.flexible_wordpress_based_e_commerce,
      features: [tx.wordpress_integration_2, tx.free_core, tx.unlimited_customization, tx.seo_friendly, tx.large_community, tx.flexible_hosting],
      pricing: tx.free_hosting,
      pros: [tx.highly_customizable, tx.seo_optimized, tx.cost_effective],
      cons: [tx.requires_maintenance, tx.hosting_dependent]
    },
    {
      id: 'magento',
      name: tx.magento,
      icon: '🏢',
      description: tx.enterprise_grade_e_commerce_platform,
      features: [tx.enterprise_features, tx.multi_store, tx.advanced_seo, tx.b2b_capabilities, tx.scalable, tx.api_rich],
      pricing: tx.from_22_000_year,
      pros: [tx.enterprise_features_2, tx.highly_scalable, tx.powerful],
      cons: [tx.complex_setup, tx.expensive, tx.requires_expertise]
    }
  ];

  const technologies = [
    { name: tx.react, icon: '⚛️', description: tx.frontend_framework, category: 'Frontend' },
    { name: tx.next_js, icon: '⚡', description: tx.full_stack_framework, category: 'Frontend' },
    { name: tx.node_js, icon: '🟢', description: tx.backend_runtime, category: 'Backend' },
    { name: tx.stripe, icon: '💳', description: tx.payment_processing_3, category: 'Payments' },
    { name: tx.paypal, icon: '🅿️', description: tx.payment_gateway_3, category: 'Payments' },
    { name: tx.mongodb, icon: '🍃', description: tx.nosql_database, category: 'Database' },
    { name: tx.postgresql, icon: '🐘', description: tx.relational_database, category: 'Database' },
    { name: 'AWS', icon: '☁️', description: tx.cloud_hosting, category: 'Cloud' }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.discovery_strategy,
      description: tx.understanding_your_business_model_and,
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.platform_selection,
      description: tx.choosing_the_right_e_commerce,
      duration: tx.t_1_week,
      icon: '🎯'
    },
    {
      step: '03',
      title: tx.design_ux,
      description: tx.creating_user_friendly_interfaces_optimi,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.development,
      description: tx.building_your_e_commerce_platform,
      duration: '4-8 weeks',
      icon: '💻'
    },
    {
      step: '05',
      title: tx.testing_launch,
      description: tx.comprehensive_testing_and_launching_your,
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const integrations = [
    {
      title: tx.payment_gateways,
      description: tx.stripe_paypal_square_and_other,
      icon: '💳'
    },
    {
      title: tx.shipping_providers,
      description: tx.fedex_ups_dhl_and_local,
      icon: '🚚'
    },
    {
      title: tx.email_marketing,
      description: tx.mailchimp_klaviyo_and_other_email,
      icon: '📧'
    },
    {
      title: tx.analytics_2,
      description: tx.google_analytics_facebook_pixel_and,
      icon: '📈'
    },
    {
      title: tx.inventory_management_3,
      description: tx.real_time_inventory_tracking_and,
      icon: '📦'
    },
    {
      title: tx.crm_integration,
      description: tx.salesforce_hubspot_and_customer_relation,
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.e_commerce_development_2}
        eyebrowIcon={ShoppingCart}
        title={tx.e_commerce}
        highlight={tx.solutions}
        description={tx.we_build_powerful_conversion_optimized}
        highlights={["Shopify Development", "WooCommerce Solutions", "Custom E-commerce", "Headless Commerce"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "40%", label: tx.avg_conversion_increase },
          { value: "3-12", label: tx.week_delivery },
          { value: "99.9%", label: tx.uptime },
        ]}
      />

      {/* E-commerce Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.e_commerce}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.platform_types}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_ready_made_platforms_to}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      type.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      type.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      type.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300'
                    } rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      <ServiceIcon emoji={type.icon} size="lg" />
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

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.platform_comparison}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.popular}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.e_commerce_platforms}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_all_major}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Platform Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={platform.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {platform.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{platform.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg font-bold text-blue-600 mb-1">{platform.pricing}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-3 pt-6 border-t border-slate-200">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-2">{tx.pros}</h4>
                      <div className="space-y-1">
                        {platform.pros.map((pro, proIndex) => (
                          <div key={proIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2">{tx.cons}</h4>
                      <div className="space-y-1">
                        {platform.cons.map((con, conIndex) => (
                          <div key={conIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.key_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.e_commerce}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_e_commerce_functionality_t}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Integrations */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.integrations}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.third_party}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.integrations}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.seamlessly_integrate_with_your_favorite}</p>
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

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.e_commerce}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.modern_technologies_powering_your_e}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we_build}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.e_commerce_stores}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_5_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_launch_your}<span className="block text-blue-100 mt-2">{tx.e_commerce_store}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_e}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_store}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_demo}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
