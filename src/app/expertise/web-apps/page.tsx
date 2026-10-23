'use client';

import tx from '@/content/text/app/expertise/web-apps/page.json';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { AppWindow } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function WebAppsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const webAppTypes = [
    {
      id: 'saas',
      title: tx.saas_platforms,
      icon: '☁️',
      description: tx.complete_software_as_a_service,
      features: [tx.user_authentication, tx.subscription_management, tx.payment_processing, tx.analytics_dashboard, tx.api_integration, tx.multi_tenancy],
      pricing: tx.starting_at_15_000,
      timeline: '8-12 weeks',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'dashboard',
      title: tx.admin_dashboards,
      icon: '📊',
      description: tx.comprehensive_admin_panels_for_managing,
      features: [tx.data_visualization, tx.user_management, tx.content_management, tx.report_generation, tx.real_time_updates, tx.role_based_access],
      pricing: tx.starting_at_8_000,
      timeline: '4-6 weeks',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'crm',
      title: tx.crm_systems,
      icon: '👥',
      description: tx.customer_relationship_management_systems,
      features: [tx.lead_management, tx.contact_database, tx.sales_pipeline, tx.email_integration, tx.task_management, tx.reporting_tools],
      pricing: tx.starting_at_12_000,
      timeline: '6-8 weeks',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ecommerce',
      title: tx.e_commerce_platforms,
      icon: '🛒',
      description: tx.full_featured_online_stores_with,
      features: [tx.product_catalog, tx.shopping_cart, tx.payment_gateway, tx.order_management, tx.inventory_tracking, tx.customer_portal],
      pricing: tx.starting_at_10_000,
      timeline: '6-10 weeks',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    { name: tx.react, icon: '⚛️', description: tx.modern_ui_library, color: 'blue' },
    { name: tx.next_js, icon: '⚡', description: tx.full_stack_framework, color: 'black' },
    { name: tx.node_js, icon: '🟢', description: tx.backend_runtime, color: 'green' },
    { name: tx.typescript, icon: '🔷', description: tx.type_safe_development, color: 'blue' },
    { name: tx.postgresql, icon: '🐘', description: tx.reliable_database, color: 'blue' },
    { name: tx.redis, icon: '🔴', description: tx.caching_solution, color: 'red' },
    { name: 'AWS', icon: '☁️', description: tx.cloud_infrastructure, color: 'orange' },
    { name: tx.docker, icon: '🐳', description: tx.containerization, color: 'blue' }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.discovery_analysis,
      description: tx.deep_dive_into_your_business,
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.architecture_design,
      description: tx.creating_scalable_system_architecture_an,
      duration: '1-2 weeks',
      icon: '🏗️'
    },
    {
      step: '03',
      title: tx.ui_ux_design,
      description: tx.designing_intuitive_user_interfaces_and,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.development,
      description: tx.building_the_application_with_modern,
      duration: '4-8 weeks',
      icon: '💻'
    },
    {
      step: '05',
      title: tx.testing_deployment,
      description: tx.comprehensive_testing_and_deployment_to,
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const features = [
    {
      title: tx.scalable_architecture,
      description: tx.built_to_handle_growth_from,
      icon: '📈'
    },
    {
      title: tx.real_time_updates_2,
      description: tx.live_data_synchronization_and_real,
      icon: '⚡'
    },
    {
      title: tx.security_first,
      description: tx.enterprise_grade_security_with_encryptio,
      icon: '🔒'
    },
    {
      title: tx.mobile_responsive,
      description: tx.perfect_experience_across_all_devices,
      icon: '📱'
    },
    {
      title: tx.api_integration_2,
      description: tx.seamless_integration_with_third_party,
      icon: '🔌'
    },
    {
      title: tx.analytics_insights,
      description: tx.comprehensive_analytics_and_business_int,
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.web_application_development}
        eyebrowIcon={AppWindow}
        title={tx.custom_web}
        highlight={tx.applications}
        description={tx.we_build_powerful_scalable_web}
        highlights={["SaaS Platforms", "Admin Dashboards", "CRM Systems", "E-commerce Platforms"]}
      />

      {/* Web App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.web_application}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.types}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_saas_platforms_to_custom}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppTypes.map((app, index) => (
              <div 
                key={app.id} 
                className="group"
                style={{
                  transform: `translateY(${mousePosition.y * (0.002 * (index + 1))}px)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header with 3D Icon */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <ServiceIcon emoji={app.icon} size="none" className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {app.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{app.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{app.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.modern}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_cutting_edge_technologies}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `rotateY(${mousePosition.x * (0.001 * (index + 1))}deg) translateZ(${mousePosition.y * 0.001}px)`
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-110">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.key_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.why_choose_our}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.web_applications}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.001}deg) rotateY(${mousePosition.x * 0.001}deg)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we_build}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.web_applications}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_5_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="group"
                style={{
                  transform: `translateY(${mousePosition.y * (0.001 * (index + 1))}px) rotateZ(${mousePosition.x * (0.002 * (index + 1))}deg)`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-blue-100 mt-2">{tx.custom_web_app}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_requirements}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_demo}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
