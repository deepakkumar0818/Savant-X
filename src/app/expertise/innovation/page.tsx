import tx from '@/content/text/app/expertise/innovation/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Lightbulb } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.innovation_emerging_technology,
  description:
    tx.applied_innovation_with_ai_iot,
  path: '/expertise/innovation',
});

export default function InnovationPage() {

  const innovationServices = [
    {
      id: 'ai-ml',
      title: tx.ai_machine_learning,
      icon: '🤖',
      description: tx.cutting_edge_artificial_intelligence_and,
      features: [tx.machine_learning_models, tx.natural_language_processing, tx.computer_vision, tx.predictive_analytics, tx.chatbots_virtual_assistants, tx.data_science],
      pricing: tx.starting_at_15_000,
      timeline: '8-16 weeks',
      complexity: tx.advanced,
      features_count: '40+'
    },
    {
      id: 'blockchain',
      title: tx.blockchain_solutions,
      icon: '⛓️',
      description: tx.blockchain_and_cryptocurrency_solutions,
      features: [tx.smart_contracts, tx.defi_applications, tx.nft_platforms, tx.cryptocurrency_wallets, tx.supply_chain_tracking, tx.identity_verification],
      pricing: tx.starting_at_20_000,
      timeline: '10-20 weeks',
      complexity: tx.enterprise,
      features_count: '35+'
    },
    {
      id: 'iot',
      title: tx.iot_connected_devices,
      icon: '🌐',
      description: tx.internet_of_things_solutions_connecting,
      features: [tx.device_connectivity, tx.real_time_monitoring, tx.sensor_integration, tx.data_analytics, tx.remote_control, tx.predictive_maintenance],
      pricing: tx.starting_at_12_000,
      timeline: '6-12 weeks',
      complexity: tx.advanced,
      features_count: '30+'
    },
    {
      id: 'ar-vr',
      title: tx.ar_vr_metaverse,
      icon: '🥽',
      description: tx.augmented_and_virtual_reality_experience,
      features: [tx.virtual_reality_apps, tx.augmented_reality, tx.t_3d_modeling, tx.immersive_experiences, tx.virtual_training, tx.metaverse_integration],
      pricing: tx.starting_at_18_000,
      timeline: '12-24 weeks',
      complexity: tx.enterprise,
      features_count: '45+'
    }
  ];

  const innovationAreas = [
    {
      category: 'Emerging Technologies',
      technologies: [
        { name: tx.artificial_intelligence, icon: '🧠', description: tx.ai_powered_solutions_and_automation },
        { name: tx.machine_learning, icon: '📊', description: tx.predictive_analytics_and_data_insights },
        { name: tx.blockchain, icon: '⛓️', description: tx.decentralized_and_secure_applications },
        { name: tx.quantum_computing, icon: '⚛️', description: tx.next_generation_computing_power }
      ]
    },
    {
      category: 'Digital Transformation',
      technologies: [
        { name: tx.cloud_computing, icon: '☁️', description: tx.scalable_cloud_infrastructure_and_servic },
        { name: tx.edge_computing, icon: '🔗', description: tx.distributed_computing_at_the_edge },
        { name: tx.microservices, icon: '🧩', description: tx.modular_and_scalable_architecture },
        { name: tx.api_integration, icon: '🔌', description: tx.seamless_system_integration }
      ]
    },
    {
      category: 'User Experience',
      technologies: [
        { name: tx.ar_vr, icon: '🥽', description: tx.immersive_user_experiences },
        { name: tx.voice_interfaces, icon: '🎤', description: tx.voice_activated_applications },
        { name: tx.gesture_control, icon: '👋', description: tx.touch_free_interaction_systems },
        { name: tx.brain_computer_interface, icon: '🧠', description: tx.direct_neural_interaction }
      ]
    },
    {
      category: 'Data & Analytics',
      technologies: [
        { name: tx.big_data, icon: '📈', description: tx.large_scale_data_processing_and },
        { name: tx.real_time_analytics, icon: '⚡', description: tx.live_data_processing_and_insights },
        { name: tx.data_visualization, icon: '📊', description: tx.interactive_data_presentation },
        { name: tx.predictive_modeling, icon: '🔮', description: tx.future_trend_prediction }
      ]
    }
  ];

  const innovationProcess = [
    {
      step: '01',
      title: tx.innovation_discovery,
      description: tx.exploring_cutting_edge_technologies_and,
      duration: '2-3 weeks',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.technology_research,
      description: tx.deep_research_into_emerging_technologies,
      duration: '2-4 weeks',
      icon: '🔬'
    },
    {
      step: '03',
      title: tx.prototype_development,
      description: tx.creating_proof_of_concept_prototypes,
      duration: '4-8 weeks',
      icon: '🧪'
    },
    {
      step: '04',
      title: tx.technology_integration,
      description: tx.integrating_innovative_technologies_with,
      duration: '6-12 weeks',
      icon: '⚙️'
    },
    {
      step: '05',
      title: tx.testing_optimization,
      description: tx.rigorous_testing_and_optimization_of,
      duration: '2-4 weeks',
      icon: '🧪'
    },
    {
      step: '06',
      title: tx.innovation_deployment,
      description: tx.deploying_innovative_solutions_with_ongo,
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.innovation_strategy,
      description: tx.comprehensive_strategy_for_implementing,
      icon: '📋'
    },
    {
      title: tx.prototype_solutions,
      description: tx.working_prototypes_demonstrating_innovat,
      icon: '🧪'
    },
    {
      title: tx.technology_integration_2,
      description: tx.seamless_integration_of_innovative_techn,
      icon: '⚙️'
    },
    {
      title: tx.performance_analytics,
      description: tx.advanced_analytics_and_monitoring_for,
      icon: '📊'
    },
    {
      title: tx.innovation_training,
      description: tx.training_programs_for_teams_to,
      icon: '🎓'
    },
    {
      title: tx.future_roadmap,
      description: tx.strategic_roadmap_for_continued_innovati,
      icon: '🗺️'
    }
  ];

  const benefits = [
    {
      title: tx.competitive_advantage,
      description: tx.stay_ahead_of_the_competition,
      icon: '🏆'
    },
    {
      title: tx.future_proof_solutions,
      description: tx.build_solutions_that_adapt_and,
      icon: '🔮'
    },
    {
      title: tx.enhanced_efficiency,
      description: tx.automate_processes_and_improve_efficienc,
      icon: '⚡'
    },
    {
      title: tx.better_user_experience,
      description: tx.deliver_exceptional_user_experiences_wit,
      icon: '😊'
    },
    {
      title: tx.data_driven_insights,
      description: tx.leverage_advanced_analytics_for_better,
      icon: '📊'
    },
    {
      title: tx.scalable_architecture,
      description: tx.build_solutions_that_scale_with,
      icon: '📈'
    }
  ];

  const innovationTypes = [
    {
      title: tx.disruptive_innovation,
      description: tx.game_changing_solutions_that_transform,
      icon: '💥'
    },
    {
      title: tx.incremental_innovation,
      description: tx.continuous_improvements_and_enhancements,
      icon: '🔄'
    },
    {
      title: tx.process_innovation,
      description: tx.innovative_approaches_to_business_proces,
      icon: '⚙️'
    },
    {
      title: tx.product_innovation,
      description: tx.new_products_and_features_that,
      icon: '🆕'
    }
  ];

  const emergingTech = [
    {
      title: tx.artificial_intelligence_2,
      description: tx.machine_learning_natural_language_proces,
      icon: '🤖'
    },
    {
      title: tx.blockchain_technology,
      description: tx.decentralized_applications_smart_contrac,
      icon: '⛓️'
    },
    {
      title: tx.internet_of_things,
      description: tx.connected_devices_smart_sensors_and,
      icon: '🌐'
    },
    {
      title: tx.augmented_reality_2,
      description: tx.ar_applications_immersive_experiences_an,
      icon: '🥽'
    },
    {
      title: tx.edge_computing_2,
      description: tx.distributed_computing_real_time_processi,
      icon: '🔗'
    },
    {
      title: tx.quantum_computing_2,
      description: tx.quantum_algorithms_cryptography_and_next,
      icon: '⚛️'
    }
  ];

  const innovationMetrics = [
    {
      title: tx.time_to_market,
      description: tx.accelerate_product_development_and_reduc,
      icon: '⏱️'
    },
    {
      title: tx.innovation_roi,
      description: tx.measure_return_on_investment_for,
      icon: '💰'
    },
    {
      title: tx.technology_adoption,
      description: tx.track_adoption_rates_and_user,
      icon: '📈'
    },
    {
      title: tx.patent_portfolio,
      description: tx.build_intellectual_property_through_inno,
      icon: '📜'
    },
    {
      title: tx.market_disruption,
      description: tx.measure_market_impact_and_disruption,
      icon: '🌊'
    },
    {
      title: tx.future_readiness,
      description: tx.assess_readiness_for_future_technologica,
      icon: '🔮'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.innovation_solutions}
        eyebrowIcon={Lightbulb}
        title={tx.innovation}
        highlight={tx.experience}
        description={tx.we_push_the_boundaries_of}
        highlights={["AI & Machine Learning", "Blockchain Solutions", "IoT & Connected Devices", "AR/VR & Metaverse"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "15+", label: tx.patents_filed },
          { value: "8-24", label: tx.week_delivery },
          { value: "Future-Ready", label: tx.solutions },
        ]}
      />

      {/* Innovation Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.innovation}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.cutting_edge_technology_solutions_that}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationServices.map((service) => (
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

      {/* Innovation Areas */}
      <section id="technologies" className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.innovation_areas}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.cutting_edge}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_specialize_in_the_latest}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {innovationAreas.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-200">
                        <ServiceIcon emoji={tech.icon} size="md" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                          <p className="text-sm text-slate-600">{tech.description}</p>
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

      {/* Emerging Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.emerging_technologies}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.next_generation}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.leading_edge_technologies_that_are}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTech.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={tech.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.types_of_innovation}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.innovation}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.approaches}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.different_approaches_to_innovation_that}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationTypes.map((type, index) => (
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

      {/* Development Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.innovation}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_to_innovation}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationProcess.map((step, index) => (
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

      {/* Innovation Metrics */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.innovation_metrics}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.measuring}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.innovation_success}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.key_metrics_to_track_and}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationMetrics.map((metric, index) => (
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

      {/* Deliverables */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.deliverables}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.what_you_ll}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.receive}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_innovation_development_delivera}</p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_innovation_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.innovation_technology}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.innovation_technology_provides_significa}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_innovate}<span className="block text-blue-100 mt-2">{tx.with_cutting_edge_technology}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_work_together_to}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_innovation_project}</Link>
            <Link href="#technologies" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.explore_technologies}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
