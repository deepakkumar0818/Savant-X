import tx from '@/content/text/app/expertise/commercial/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Building2 } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.commercial_solutions,
  description:
    tx.technology_for_commercial_organisations,
  path: '/expertise/commercial',
});

export default function CommercialPage() {

  const commercialServices = [
    {
      id: 'ecommerce',
      title: tx.e_commerce_solutions,
      icon: '🛒',
      description: tx.complete_e_commerce_platforms_with,
      features: [tx.online_store_setup, tx.payment_gateway_integration, tx.inventory_management, tx.order_processing, tx.customer_management, tx.analytics_reporting],
      pricing: tx.starting_at_8_000,
      timeline: '6-12 weeks',
      complexity: tx.enterprise,
      features_count: '50+'
    },
    {
      id: 'business-websites',
      title: tx.business_websites,
      icon: '🏢',
      description: tx.professional_corporate_websites_designed,
      features: [tx.corporate_design, tx.content_management, tx.seo_optimization, tx.contact_forms, tx.analytics_integration, tx.mobile_responsive],
      pricing: tx.starting_at_4_500,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      features_count: '30+'
    },
    {
      id: 'saas-platforms',
      title: tx.saas_platforms,
      icon: '☁️',
      description: tx.software_as_a_service_applications,
      features: [tx.user_authentication, tx.subscription_management, tx.dashboard_analytics, tx.api_integration, tx.multi_tenancy, tx.payment_processing],
      pricing: tx.starting_at_15_000,
      timeline: '10-20 weeks',
      complexity: tx.enterprise,
      features_count: '75+'
    },
    {
      id: 'marketplace',
      title: tx.marketplace_platforms,
      icon: '🏪',
      description: tx.multi_vendor_marketplace_platforms_conne,
      features: [tx.multi_vendor_support, tx.commission_management, tx.escrow_system, tx.vendor_dashboard, tx.buyer_protection, tx.dispute_resolution],
      pricing: tx.starting_at_20_000,
      timeline: '12-24 weeks',
      complexity: tx.enterprise,
      features_count: '100+'
    }
  ];

  const commercialIndustries = [
    {
      category: 'Retail & E-commerce',
      industries: [
        { name: tx.online_stores, icon: '🛍️', description: tx.complete_online_retail_solutions },
        { name: tx.fashion_apparel, icon: '👗', description: tx.fashion_e_commerce_platforms },
        { name: tx.electronics, icon: '📱', description: tx.electronics_and_gadget_stores },
        { name: tx.home_garden, icon: '🏠', description: tx.home_improvement_and_garden_centers }
      ]
    },
    {
      category: 'Professional Services',
      industries: [
        { name: tx.legal_services, icon: '⚖️', description: tx.law_firms_and_legal_consultancies },
        { name: tx.healthcare, icon: '🏥', description: tx.medical_practices_and_healthcare_provide },
        { name: tx.financial_services, icon: '💰', description: tx.banks_insurance_and_financial_advisors },
        { name: tx.real_estate, icon: '🏘️', description: tx.real_estate_agencies_and_property }
      ]
    },
    {
      category: 'Technology & Innovation',
      industries: [
        { name: tx.saas_companies, icon: '💻', description: tx.software_as_a_service_platforms },
        { name: tx.tech_startups, icon: '🚀', description: tx.technology_startup_companies },
        { name: tx.consulting_firms, icon: '📊', description: tx.business_and_technology_consultants },
        { name: tx.manufacturing, icon: '🏭', description: tx.manufacturing_and_industrial_companies }
      ]
    },
    {
      category: 'Service Industries',
      industries: [
        { name: tx.restaurants, icon: '🍽️', description: tx.restaurants_and_food_service },
        { name: tx.travel_tourism, icon: '✈️', description: tx.travel_agencies_and_tourism },
        { name: tx.education, icon: '🎓', description: tx.educational_institutions_and_training },
        { name: tx.entertainment, icon: '🎬', description: tx.media_and_entertainment_companies }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.business_analysis,
      description: tx.understanding_your_business_model_target,
      duration: '1-2 weeks',
      icon: '📊'
    },
    {
      step: '02',
      title: tx.strategy_planning,
      description: tx.developing_commercial_strategy_and_techn,
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '03',
      title: tx.design_ux,
      description: tx.creating_user_centric_designs_that,
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.development_integration,
      description: tx.building_robust_commercial_applications,
      duration: '4-12 weeks',
      icon: '⚙️'
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
      title: tx.launch_growth,
      description: tx.launching_your_commercial_platform_with,
      duration: tx.t_1_week,
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.commercial_platform,
      description: tx.fully_functional_commercial_website_or,
      icon: '🏢'
    },
    {
      title: tx.payment_integration,
      description: tx.secure_payment_processing_with_multiple,
      icon: '💳'
    },
    {
      title: tx.analytics_dashboard,
      description: tx.comprehensive_business_analytics_and_rep,
      icon: '📊'
    },
    {
      title: tx.admin_panel,
      description: tx.complete_administrative_interface_for_ma,
      icon: '🎛️'
    },
    {
      title: tx.business_training,
      description: tx.training_for_your_team_on,
      icon: '🎓'
    },
    {
      title: tx.growth_strategy,
      description: tx.digital_marketing_and_growth_strategies,
      icon: '📈'
    }
  ];

  const benefits = [
    {
      title: tx.revenue_growth,
      description: tx.drive_sales_and_revenue_through,
      icon: '💰'
    },
    {
      title: tx.market_expansion,
      description: tx.expand_your_market_reach_with,
      icon: '🌍'
    },
    {
      title: tx.operational_efficiency,
      description: tx.streamline_business_operations_with_auto,
      icon: '⚡'
    },
    {
      title: tx.customer_experience,
      description: tx.enhance_customer_experience_with_user,
      icon: '😊'
    },
    {
      title: tx.data_driven_decisions,
      description: tx.make_informed_business_decisions_with,
      icon: '📊'
    },
    {
      title: tx.competitive_advantage,
      description: tx.stay_ahead_of_competition_with,
      icon: '🏆'
    }
  ];

  const commercialFeatures = [
    {
      title: tx.payment_processing_2,
      description: tx.secure_payment_gateways_with_multiple,
      icon: '💳'
    },
    {
      title: tx.inventory_management_2,
      description: tx.real_time_inventory_tracking_and,
      icon: '📦'
    },
    {
      title: tx.customer_management_2,
      description: tx.comprehensive_crm_integration_for_custom,
      icon: '👥'
    },
    {
      title: tx.order_management,
      description: tx.complete_order_processing_from_placement,
      icon: '📋'
    },
    {
      title: tx.analytics_reporting_2,
      description: tx.business_intelligence_with_detailed_anal,
      icon: '📊'
    },
    {
      title: tx.multi_channel_support,
      description: tx.support_for_multiple_sales_channels,
      icon: '📱'
    }
  ];

  const successMetrics = [
    {
      title: tx.conversion_rate,
      description: tx.optimize_conversion_rates_through_user,
      icon: '📈'
    },
    {
      title: tx.customer_acquisition,
      description: tx.implement_strategies_to_acquire_new,
      icon: '🎯'
    },
    {
      title: tx.revenue_per_customer,
      description: tx.increase_average_revenue_per_customer,
      icon: '💰'
    },
    {
      title: tx.customer_retention,
      description: tx.improve_customer_retention_through_loyal,
      icon: '🔄'
    },
    {
      title: tx.operational_cost,
      description: tx.reduce_operational_costs_through_automat,
      icon: '💸'
    },
    {
      title: tx.market_share,
      description: tx.grow_market_share_through_competitive,
      icon: '🏆'
    }
  ];

  const technologies = [
    { name: tx.react_next_js, icon: '⚛️', description: tx.modern_frontend_frameworks, category: 'Frontend' },
    { name: tx.laravel_php, icon: '🔥', description: tx.robust_backend_development, category: 'Backend' },
    { name: tx.node_js, icon: '🟢', description: tx.scalable_server_side_javascript, category: 'Backend' },
    { name: tx.woocommerce, icon: '🛒', description: tx.e_commerce_platform, category: 'E-commerce' },
    { name: tx.shopify, icon: '🛍️', description: tx.e_commerce_solution, category: 'E-commerce' },
    { name: tx.stripe, icon: '💳', description: tx.payment_processing_3, category: 'Payments' },
    { name: tx.paypal, icon: '🔵', description: tx.payment_gateway, category: 'Payments' },
    { name: tx.google_analytics, icon: '📊', description: tx.web_analytics, category: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.commercial_solutions_2}
        eyebrowIcon={Building2}
        title={tx.commercial}
        highlight={tx.experience}
        description={tx.we_specialize_in_building_commercial}
        highlights={["E-commerce Solutions", "Business Websites", "SaaS Platforms", "Marketplace Platforms"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "$50M+", label: tx.revenue_generated },
          { value: "4-24", label: tx.week_delivery },
          { value: "98%", label: tx.success_rate },
        ]}
      />

      {/* Commercial Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.commercial}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_commercial_development_ser}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service) => (
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

      {/* Commercial Industries */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.industries_we_serve}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.commercial}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.industries}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_have_extensive_experience_working}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {commercialIndustries.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.industries.map((industry, industryIndex) => (
                      <div key={industryIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={industry.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{industry.name}</h4>
                          <p className="text-sm text-slate-600">{industry.description}</p>
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

      {/* Commercial Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.commercial_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.essential}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.features}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_features_that_power_commercial}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialFeatures.map((feature, index) => (
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.commercial_development}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_commerci}</p>
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

      {/* Success Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.success_metrics}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.measuring}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.commercial_success}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_performance_indicators_that_drive}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={metric.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {metric.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {metric.description}
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technologies}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.commercial}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_cutting_edge_technologies}</p>
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_commercial_development_delivera}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_commercial_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.commercial_development}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.commercial_development_provides_signific}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build}<span className="block text-blue-100 mt-2">{tx.your_commercial_solution}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_create_a_commercial}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_commercial_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_case_studies}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
