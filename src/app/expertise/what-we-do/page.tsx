import tx from '@/content/text/app/expertise/what-we-do/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY_METRICS } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { LayoutGrid } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.what_we_do,
  description:
    tx.websites_web_applications_mobile_apps,
  path: '/expertise/what-we-do',
});

export default function WhatWeDoPage() {

  const services = [
    {
      id: 'websites',
      title: tx.websites,
      icon: '✈️',
      description: tx.professional_websites_that_establish_cre,
      features: [tx.corporate_websites, tx.portfolio_sites, tx.landing_pages, tx.blog_platforms],
      href: '/expertise/websites',
      color: 'blue'
    },
    {
      id: 'webapps',
      title: tx.web_apps,
      icon: '💎',
      description: tx.custom_web_applications_that_streamline,
      features: [tx.saas_platforms, tx.admin_dashboards, tx.e_commerce_solutions, tx.crm_systems],
      href: '/expertise/web-apps',
      color: 'purple'
    },
    {
      id: 'mobile',
      title: tx.mobile_apps,
      icon: '📱',
      description: tx.native_and_cross_platform_mobile,
      features: [tx.ios_apps, tx.android_apps, tx.react_native, tx.flutter_development],
      href: '/expertise/mobile-apps',
      color: 'green'
    },
    {
      id: 'ecommerce',
      title: tx.e_commerce,
      icon: '🛒',
      description: tx.complete_e_commerce_solutions_that,
      features: [tx.online_stores, tx.payment_integration, tx.inventory_management, tx.order_processing],
      href: '/expertise/ecommerce',
      color: 'orange'
    },
    {
      id: 'data',
      title: tx.data_visualization,
      icon: '🔄',
      description: tx.interactive_dashboards_and_data_visualiz,
      features: [tx.business_intelligence, tx.analytics_dashboards, tx.real_time_data, tx.custom_reports],
      href: '/expertise/zoho-integrations/zoho-analytics',
      color: 'cyan'
    }
  ];

  const expertise = [
    {
      category: 'Frontend Development',
      technologies: [tx.react, tx.next_js, tx.vue_js, tx.angular, tx.typescript, tx.tailwind_css],
      icon: '🎨'
    },
    {
      category: 'Backend Development',
      technologies: [tx.node_js, tx.python, 'PHP', tx.java, tx.postgresql, tx.mongodb],
      icon: '⚙️'
    },
    {
      category: 'Mobile Development',
      technologies: [tx.react_native_2, tx.flutter, tx.swift, tx.kotlin, tx.ionic, tx.xamarin],
      icon: '📱'
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', tx.azure, tx.docker, tx.kubernetes, tx.ci_cd, tx.serverless],
      icon: '☁️'
    }
  ];

  const process = [
    {
      step: '01',
      title: tx.discovery,
      description: tx.understanding_your_business_goals_and,
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.strategy,
      description: tx.creating_a_roadmap_and_technical,
      icon: '📋'
    },
    {
      step: '03',
      title: tx.design,
      description: tx.crafting_user_centered_designs_and,
      icon: '🎨'
    },
    {
      step: '04',
      title: tx.development,
      description: tx.building_with_modern_technologies_and,
      icon: '💻'
    },
    {
      step: '05',
      title: tx.launch,
      description: tx.testing_deployment_and_go_live,
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.what_we_do_2}
        eyebrowIcon={LayoutGrid}
        title={tx.what_we}
        highlight={tx.do_best}
        description={tx.we_are_a_full_service}
        highlights={["Websites", "Web Apps", "Mobile Apps", "E-commerce"]}
        stats={[
          { value: `${COMPANY_METRICS[0].value}${COMPANY_METRICS[0].suffix}`, label: COMPANY_METRICS[0].label },
          { value: `${COMPANY_METRICS[1].value}${COMPANY_METRICS[1].suffix}`, label: COMPANY_METRICS[1].label },
          { value: "5+", label: tx.years_experience },
          { value: "24/7", label: tx.support },
        ]}
      />

      {/* Services Grid */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.complete_digital}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_concept_to_launch_we}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                <div className="group cursor-pointer">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      service.color === 'blue' ? 'from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300' :
                      service.color === 'purple' ? 'from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300' :
                      service.color === 'green' ? 'from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300' :
                      service.color === 'orange' ? 'from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300' :
                      'from-cyan-100 to-cyan-200 group-hover:from-cyan-200 group-hover:to-cyan-300'
                    } rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                      <ServiceIcon emoji={service.icon} size="lg" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-200">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">{tx.learn_more}</span>
                      <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.our_technical}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.expertise}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_cutting_edge}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={area.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {area.category}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.work}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_5_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_start_your}<span className="block text-blue-100 mt-2">{tx.next_project}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_ideas}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.get_started}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_demo}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
