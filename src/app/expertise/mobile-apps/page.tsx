'use client';

import tx from '@/content/text/app/expertise/mobile-apps/page.json';
import { useState } from 'react';
import { COMPANY } from '@/lib/company';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { Smartphone } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function MobileAppsPage() {
  const [activePlatform, setActivePlatform] = useState('ios');

  const mobileAppTypes = [
    {
      id: 'native',
      title: tx.native_mobile_apps,
      icon: '📱',
      description: tx.high_performance_native_applications_bui,
      features: [tx.ios_development, tx.android_development, tx.native_performance, tx.platform_specific_ui, tx.hardware_access, tx.app_store_optimization],
      pricing: tx.starting_at_25_000,
      timeline: '8-16 weeks',
      platforms: ['iOS', tx.android]
    },
    {
      id: 'cross',
      title: tx.cross_platform_apps,
      icon: '🔄',
      description: tx.single_codebase_applications_that_run,
      features: [tx.react_native, tx.flutter_development, tx.code_reusability, tx.faster_development, tx.cost_effective, tx.consistent_ui],
      pricing: tx.starting_at_18_000,
      timeline: '6-12 weeks',
      platforms: ['iOS', tx.android, tx.web]
    },
    {
      id: 'hybrid',
      title: tx.hybrid_apps,
      icon: '🌐',
      description: tx.web_based_applications_wrapped_in,
      features: [tx.ionic_framework, tx.cordova_phonegap, tx.web_technologies, tx.rapid_development, tx.easy_maintenance, tx.cost_effective],
      pricing: tx.starting_at_12_000,
      timeline: '4-8 weeks',
      platforms: ['iOS', tx.android]
    },
    {
      id: 'pwa',
      title: tx.progressive_web_apps,
      icon: '⚡',
      description: tx.web_applications_that_provide_native,
      features: [tx.offline_functionality, tx.push_notifications, tx.app_like_experience, tx.no_app_store, tx.instant_updates, tx.seo_friendly],
      pricing: tx.starting_at_8_000,
      timeline: '3-6 weeks',
      platforms: [tx.web, 'iOS', tx.android]
    }
  ];

  const technologies = [
    { name: tx.react_native_2, icon: '⚛️', description: tx.cross_platform_framework, category: 'Cross-Platform' },
    { name: tx.flutter, icon: '🎯', description: tx.google_s_ui_toolkit, category: 'Cross-Platform' },
    { name: tx.swift, icon: '🍎', description: tx.ios_development_2, category: 'Native iOS' },
    { name: tx.kotlin, icon: '🤖', description: tx.android_development_2, category: 'Native Android' },
    { name: tx.ionic, icon: '⚡', description: tx.hybrid_app_framework, category: 'Hybrid' },
    { name: tx.xamarin, icon: '🔷', description: tx.microsoft_s_solution, category: 'Cross-Platform' },
    { name: tx.firebase, icon: '🔥', description: tx.backend_services, category: 'Backend' },
    { name: 'AWS', icon: '☁️', description: tx.cloud_infrastructure, category: 'Cloud' }
  ];

  const platforms = [
    {
      id: 'ios',
      name: tx.ios_development_3,
      icon: '🍎',
      description: tx.native_ios_applications_for_iphone,
      features: [tx.swift_objective_c, tx.xcode_ide, tx.ios_sdk, tx.app_store_connect, tx.testflight, tx.core_data],
      stats: { users: tx.t_1_5b, apps: tx.t_2m, rating: '4.8' }
    },
    {
      id: 'android',
      name: tx.android_development_3,
      icon: '🤖',
      description: tx.native_android_applications_for_phones,
      features: [tx.kotlin_java, tx.android_studio, tx.android_sdk, tx.google_play_console, tx.firebase_2, tx.room_database],
      stats: { users: tx.t_3b, apps: tx.t_3m, rating: '4.7' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.discovery_planning,
      description: tx.understanding_your_app_requirements_and,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.ui_ux_design,
      description: tx.creating_intuitive_mobile_interfaces_and,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.development,
      description: tx.building_your_mobile_application_with,
      duration: '4-10 weeks',
      icon: '💻'
    },
    {
      step: '04',
      title: tx.testing_qa,
      description: tx.comprehensive_testing_across_devices_and,
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '05',
      title: tx.launch_deployment,
      description: tx.app_store_submission_and_launch,
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const features = [
    {
      title: tx.native_performance_2,
      description: tx.optimized_for_each_platform_to,
      icon: '⚡'
    },
    {
      title: tx.cross_platform,
      description: tx.single_codebase_solutions_that_work,
      icon: '🔄'
    },
    {
      title: tx.offline_support,
      description: tx.applications_that_work_even_without,
      icon: '📱'
    },
    {
      title: tx.push_notifications_2,
      description: tx.engage_users_with_targeted_notifications,
      icon: '🔔'
    },
    {
      title: tx.app_store_optimization_2,
      description: tx.maximize_visibility_and_downloads_in,
      icon: '📈'
    },
    {
      title: tx.analytics_integration,
      description: tx.track_user_behavior_and_app,
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.mobile_app_development}
        eyebrowIcon={Smartphone}
        title={tx.mobile}
        highlight={tx.applications}
        description={tx.we_create_powerful_user_friendly}
        highlights={["Native Mobile Apps", "Cross-Platform Apps", "Hybrid Apps", "Progressive Web Apps"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "4.9", label: tx.app_store_rating },
          { value: "6-16", label: tx.week_delivery },
          { value: "24/7", label: tx.support },
        ]}
      />

      {/* Mobile App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.mobile_app}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_types}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_native_apps_to_cross}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileAppTypes.map((app) => (
              <div key={app.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={app.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {app.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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

      {/* Platform Tabs */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.platforms}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.ios_android}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_2}</span>
            </h2>
          </div>

          {/* Platform Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border border-slate-200 rounded-xl p-1">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatform(platform.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activePlatform === platform.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <ServiceIcon emoji={platform.icon} size="none" className="mr-2" />
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className={`transition-all duration-300 ${activePlatform === platform.id ? 'opacity-100' : 'opacity-50'}`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center">
                      <ServiceIcon emoji={platform.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{platform.name}</h3>
                      <p className="text-slate-600">{platform.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 mb-1">{platform.stats.users}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{tx.users}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">{platform.stats.apps}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{tx.apps}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600 mb-1">{platform.stats.rating}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{tx.rating}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{tx.technologies}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.mobile}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_cutting_edge_mobile}</p>
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

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.key_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.why_choose_our}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.mobile_apps}</span>
            </h2>
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we_build}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.mobile_apps}</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-blue-100 mt-2">{tx.mobile_app_2}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_mobile}</p>
          
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
