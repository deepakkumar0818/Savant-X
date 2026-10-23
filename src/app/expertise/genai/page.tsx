import tx from '@/content/text/app/expertise/genai/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Sparkles } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.generative_ai_solutions,
  description:
    tx.generative_ai_solutions_from_savantx,
  path: '/expertise/genai',
});

export default function GenAIPage() {

  const genAIServices = [
    {
      id: 'chatbots',
      title: tx.ai_chatbots_assistants,
      icon: '💬',
      description: tx.intelligent_conversational_ai_chatbots_t,
      features: [tx.natural_language_processing, tx.context_awareness, tx.multi_language_support, tx.integration_apis, tx.analytics_dashboard, tx.custom_training],
      pricing: tx.starting_at_5_000,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      models: tx.gpt_4_claude_gemini
    },
    {
      id: 'content-generation',
      title: tx.content_generation,
      icon: '✍️',
      description: tx.ai_powered_content_creation_for,
      features: [tx.text_generation, tx.image_generation, tx.video_scripts, tx.seo_optimization, tx.brand_voice, tx.multi_format_export],
      pricing: tx.starting_at_3_500,
      timeline: '3-6 weeks',
      complexity: tx.standard,
      models: tx.gpt_4_dall_e_midjourney
    },
    {
      id: 'data-analysis',
      title: tx.ai_data_analysis,
      icon: '📊',
      description: tx.advanced_ai_analytics_and_insights,
      features: [tx.predictive_analytics, tx.pattern_recognition, tx.automated_reports, tx.data_visualization, tx.anomaly_detection, tx.custom_dashboards],
      pricing: tx.starting_at_6_000,
      timeline: '5-10 weeks',
      complexity: tx.enterprise,
      models: tx.custom_models_gpt_4
    },
    {
      id: 'automation',
      title: tx.ai_workflow_automation,
      icon: '⚙️',
      description: tx.intelligent_automation_solutions_that_le,
      features: [tx.process_automation, tx.smart_routing, tx.decision_making, tx.task_prioritization, tx.error_handling, tx.performance_monitoring],
      pricing: tx.starting_at_4_500,
      timeline: '4-8 weeks',
      complexity: tx.advanced,
      models: tx.custom_ai_models
    },
    {
      id: 'personalization',
      title: tx.ai_personalization,
      icon: '🎯',
      description: tx.personalized_user_experiences_powered_by,
      features: [tx.user_profiling, tx.recommendation_engine, tx.dynamic_content, tx.behavioral_analysis, tx.a_b_testing, tx.real_time_adaptation],
      pricing: tx.starting_at_5_500,
      timeline: '5-9 weeks',
      complexity: tx.enterprise,
      models: tx.custom_ml_models
    },
    {
      id: 'code-generation',
      title: tx.ai_code_generation,
      icon: '💻',
      description: tx.ai_powered_code_generation_and,
      features: [tx.code_completion, tx.bug_detection, tx.refactoring, tx.documentation, tx.test_generation, tx.code_review],
      pricing: tx.starting_at_7_000,
      timeline: '6-12 weeks',
      complexity: tx.enterprise,
      models: tx.gpt_4_github_copilot_custom
    }
  ];

  const aiTechnologies = [
    {
      category: 'Large Language Models',
      tools: [
        { name: tx.openai_gpt_4, icon: '🤖', description: tx.advanced_language_model_for_text },
        { name: tx.anthropic_claude, icon: '🧠', description: tx.safe_and_helpful_ai_assistant },
        { name: tx.google_gemini, icon: '💎', description: tx.multimodal_ai_model },
        { name: tx.llama_2, icon: '🦙', description: tx.open_source_llm_by_meta }
      ]
    },
    {
      category: 'Image Generation',
      tools: [
        { name: tx.dall_e_3, icon: '🎨', description: tx.ai_image_generation_from_text },
        { name: tx.midjourney, icon: '🖼️', description: tx.artistic_image_creation },
        { name: tx.stable_diffusion, icon: '🌈', description: tx.open_source_image_generation },
        { name: tx.adobe_firefly, icon: '🔥', description: tx.creative_ai_by_adobe }
      ]
    },
    {
      category: 'AI Frameworks',
      tools: [
        { name: tx.tensorflow, icon: '🔧', description: tx.machine_learning_framework },
        { name: tx.pytorch, icon: '🔥', description: tx.deep_learning_research_platform },
        { name: tx.langchain, icon: '⛓️', description: tx.llm_application_framework },
        { name: tx.hugging_face, icon: '🤗', description: tx.ai_model_library_and_tools }
      ]
    },
    {
      category: 'AI Services',
      tools: [
        { name: tx.openai_api, icon: '🔌', description: tx.gpt_models_api_integration },
        { name: tx.azure_ai, icon: '☁️', description: tx.microsoft_cloud_ai_services },
        { name: tx.aws_bedrock, icon: '🏗️', description: tx.amazon_ai_foundation_models },
        { name: tx.google_ai, icon: '🔍', description: tx.google_cloud_ai_platform }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: tx.requirements_use_case,
      description: tx.understanding_your_business_needs_and,
      duration: '3-5 days',
      icon: '🔍'
    },
    {
      step: '02',
      title: tx.model_selection,
      description: tx.choosing_the_right_ai_models,
      duration: '5-7 days',
      icon: '🎯'
    },
    {
      step: '03',
      title: tx.data_preparation,
      description: tx.collecting_cleaning_and_preparing_data,
      duration: '7-14 days',
      icon: '📊'
    },
    {
      step: '04',
      title: tx.model_training_fine_tuning,
      description: tx.training_or_fine_tuning_ai,
      duration: '10-20 days',
      icon: '🧠'
    },
    {
      step: '05',
      title: tx.integration_testing,
      description: tx.integrating_ai_into_your_systems,
      duration: '7-14 days',
      icon: '🔗'
    },
    {
      step: '06',
      title: tx.deployment_monitoring,
      description: tx.production_deployment_and_continuous_mon,
      duration: '3-5 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.ai_solution,
      description: tx.fully_functional_ai_powered_solution,
      icon: '🤖'
    },
    {
      title: tx.model_documentation,
      description: tx.comprehensive_documentation_for_ai_model,
      icon: '📚'
    },
    {
      title: tx.api_integration,
      description: tx.complete_api_integration_with_your,
      icon: '🔌'
    },
    {
      title: tx.training_data,
      description: tx.curated_and_prepared_training_datasets,
      icon: '📊'
    },
    {
      title: tx.performance_metrics,
      description: tx.analytics_and_monitoring_tools_for,
      icon: '📈'
    },
    {
      title: tx.maintenance_plan,
      description: tx.ongoing_support_and_model_improvement,
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      title: tx.enhanced_efficiency,
      description: tx.automate_repetitive_tasks_and_processes,
      icon: '⚡'
    },
    {
      title: tx.better_insights,
      description: tx.gain_deeper_insights_from_your,
      icon: '🔍'
    },
    {
      title: tx.cost_reduction,
      description: tx.reduce_operational_costs_through_intelli,
      icon: '💰'
    },
    {
      title: tx.scalability,
      description: tx.scale_your_operations_with_ai,
      icon: '📈'
    },
    {
      title: tx.personalization,
      description: tx.deliver_personalized_experiences_to_your,
      icon: '🎯'
    },
    {
      title: tx.innovation,
      description: tx.stay_ahead_with_cutting_edge,
      icon: '🚀'
    }
  ];

  const useCases = [
    {
      title: tx.customer_support,
      description: tx.ai_powered_chatbots_and_virtual,
      icon: '💬'
    },
    {
      title: tx.content_creation,
      description: tx.automated_content_generation_for_marketi,
      icon: '✍️'
    },
    {
      title: tx.data_analytics,
      description: tx.advanced_ai_analytics_for_business,
      icon: '📊'
    },
    {
      title: tx.e_commerce,
      description: tx.personalized_product_recommendations_and,
      icon: '🛒'
    },
    {
      title: tx.healthcare,
      description: tx.ai_powered_diagnostics_treatment_recomme,
      icon: '🏥'
    },
    {
      title: tx.finance,
      description: tx.fraud_detection_risk_analysis_and,
      icon: '💳'
    }
  ];

  const aiCapabilities = [
    {
      title: tx.natural_language_processing_2,
      description: tx.advanced_nlp_for_understanding_and,
      icon: '🗣️'
    },
    {
      title: tx.computer_vision,
      description: tx.image_and_video_analysis_with,
      icon: '👁️'
    },
    {
      title: tx.predictive_analytics_2,
      description: tx.forecast_trends_and_outcomes_with,
      icon: '🔮'
    },
    {
      title: tx.speech_recognition,
      description: tx.convert_speech_to_text_and,
      icon: '🎤'
    },
    {
      title: tx.recommendation_systems,
      description: tx.personalized_recommendations_based_on_us,
      icon: '💡'
    },
    {
      title: tx.anomaly_detection_2,
      description: tx.identify_unusual_patterns_and_potential,
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.generative_ai_development}
        eyebrowIcon={Sparkles}
        title={tx.genai}
        highlight={tx.solutions}
        description={tx.harness_the_power_of_generative}
        highlights={["AI Chatbots & Assistants", "Content Generation", "AI Data Analysis", "AI Workflow Automation"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "95%", label: tx.accuracy_rate },
          { value: "3-12", label: tx.week_delivery },
          { value: "100%", label: tx.client_satisfaction },
        ]}
      />

      {/* GenAI Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.genai}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.solutions}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_generative_ai_development}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genAIServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={service.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
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
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.models}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.ai_models}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.ai_technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.complete_ai}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technology_ecosystem}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_the_latest}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aiTechnologies.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-all duration-200">
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.ai_development}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_high}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-indigo-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-indigo-600">{step.duration}</div>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_ai_development_deliverables_tha}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_genai}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.generative_ai}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.generative_ai_provides_significant_advan}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.perfect_for}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.these_applications}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.generative_ai_is_ideal_for}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
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

      {/* AI Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.ai_capabilities}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.advanced_ai}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.capabilities}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_implement_advanced_ai_capabilities}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={capability.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_transform}<span className="block text-indigo-100 mt-2">{tx.with_genai}</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed font-light">{tx.let_s_create_intelligent_ai}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_ai_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200 font-semibold text-lg">{tx.view_examples}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
