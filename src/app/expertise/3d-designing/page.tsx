import tx from '@/content/text/app/expertise/3d-designing/page.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Box } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.t_3d_design_visualisation,
  description:
    tx.photorealistic_3d_models_animations_and,
  path: '/expertise/3d-designing',
});

export default function ThreeDDesigningPage() {

  const threeDServices = [
    {
      id: 'product-visualization',
      title: tx.product_3d_visualization,
      icon: '📦',
      description: tx.photorealistic_3d_product_renders_for,
      features: [tx.product_modeling, tx.material_texturing, tx.lighting_setup, tx.photorealistic_rendering, tx.t_360_views, tx.animation],
      pricing: tx.starting_at_800,
      timeline: '1-2 weeks',
      complexity: tx.standard,
      formats: tx.obj_fbx_gltf
    },
    {
      id: 'architectural-visualization',
      title: tx.architectural_visualization,
      icon: '🏗️',
      description: tx.t_3d_architectural_renders_and_walkthrough,
      features: [tx.building_modeling, tx.interior_design, tx.landscape_design, tx.virtual_tours, tx.day_night_renders, tx.vr_ready],
      pricing: tx.starting_at_1_500,
      timeline: '2-4 weeks',
      complexity: tx.advanced,
      formats: tx.fbx_3ds_obj
    },
    {
      id: 'character-modeling',
      title: tx.t_3d_character_design,
      icon: '🎭',
      description: tx.custom_3d_character_creation_for,
      features: [tx.character_modeling, tx.rigging_skinning, tx.facial_animation, tx.texture_painting, tx.hair_clothing, tx.game_ready],
      pricing: tx.starting_at_2_000,
      timeline: '3-5 weeks',
      complexity: tx.advanced,
      formats: tx.fbx_blend_obj
    },
    {
      id: 'animation',
      title: tx.t_3d_animation,
      icon: '🎬',
      description: tx.professional_3d_animations_for_marketing,
      features: [tx.motion_graphics, tx.character_animation, tx.product_animation, tx.architectural_walkthroughs, tx.visual_effects, tx.post_production],
      pricing: tx.starting_at_1_200,
      timeline: '2-6 weeks',
      complexity: tx.advanced,
      formats: tx.mp4_mov_avi
    },
    {
      id: 'ar-vr-models',
      title: tx.ar_vr_3d_models,
      icon: '🥽',
      description: tx.optimized_3d_models_for_augmented,
      features: [tx.low_poly_modeling, tx.texture_optimization, tx.lod_creation, tx.ar_integration, tx.vr_compatibility, tx.performance_optimization],
      pricing: tx.starting_at_1_500,
      timeline: '2-4 weeks',
      complexity: tx.enterprise,
      formats: tx.gltf_glb_fbx
    },
    {
      id: 'industrial-design',
      title: tx.industrial_3d_design,
      icon: '⚙️',
      description: tx.t_3d_modeling_and_visualization_for,
      features: [tx.cad_integration, tx.technical_modeling, tx.assembly_visualization, tx.exploded_views, tx.technical_drawings, tx.manufacturing_ready],
      pricing: tx.starting_at_2_500,
      timeline: '3-6 weeks',
      complexity: tx.enterprise,
      formats: tx.step_iges_stl
    }
  ];

  const threeDTools = [
    {
      category: '3D Modeling Software',
      tools: [
        { name: tx.blender, icon: '🎨', description: tx.open_source_3d_creation_suite },
        { name: tx.maya, icon: '🎭', description: tx.professional_3d_animation_software },
        { name: tx.t_3ds_max, icon: '🏗️', description: tx.t_3d_modeling_and_rendering },
        { name: tx.cinema_4d, icon: '🎬', description: tx.motion_graphics_and_3d_modeling }
      ]
    },
    {
      category: 'Rendering Engines',
      tools: [
        { name: tx.v_ray, icon: '✨', description: tx.photorealistic_rendering_engine },
        { name: tx.arnold, icon: '🌟', description: tx.advanced_ray_tracing_renderer },
        { name: tx.octane_render, icon: '⚡', description: tx.gpu_accelerated_rendering },
        { name: tx.cycles, icon: '🔄', description: tx.blender_path_tracing_engine }
      ]
    },
    {
      category: 'Texturing & Materials',
      tools: [
        { name: tx.substance_painter, icon: '🖌️', description: tx.t_3d_texture_painting_software },
        { name: tx.substance_designer, icon: '🎨', description: tx.procedural_material_creation },
        { name: tx.mari, icon: '🌈', description: tx.t_3d_texture_painting_for_vfx },
        { name: tx.quixel_mixer, icon: '🌍', description: tx.t_3d_texture_mixing_tool }
      ]
    },
    {
      category: 'Specialized Tools',
      tools: [
        { name: tx.zbrush, icon: '🗿', description: tx.digital_sculpting_software },
        { name: tx.unreal_engine, icon: '🎮', description: tx.real_time_3d_creation },
        { name: tx.unity, icon: '🎯', description: tx.game_engine_with_3d_tools },
        { name: tx.houdini, icon: '🌀', description: tx.procedural_3d_animation }
      ]
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: tx.concept_planning,
      description: tx.understanding_requirements_creating_conc,
      duration: '2-3 days',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.t_3d_modeling,
      description: tx.creating_the_base_3d_model,
      duration: '3-7 days',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.texturing_materials,
      description: tx.applying_textures_materials_and_shaders,
      duration: '2-5 days',
      icon: '🖌️'
    },
    {
      step: '04',
      title: tx.lighting_setup_2,
      description: tx.setting_up_lighting_cameras_and,
      duration: '1-3 days',
      icon: '💡'
    },
    {
      step: '05',
      title: tx.rendering,
      description: tx.high_quality_rendering_with_post,
      duration: '2-4 days',
      icon: '✨'
    },
    {
      step: '06',
      title: tx.delivery_optimization,
      description: tx.final_file_preparation_format_conversion,
      duration: '1-2 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: tx.t_3d_models,
      description: tx.high_quality_3d_models_in,
      icon: '📦'
    },
    {
      title: tx.textures_materials,
      description: tx.complete_texture_sets_and_material,
      icon: '🎨'
    },
    {
      title: tx.rendered_images,
      description: tx.photorealistic_rendered_images_in_variou,
      icon: '🖼️'
    },
    {
      title: tx.animations,
      description: tx.t_3d_animations_and_motion_graphics,
      icon: '🎬'
    },
    {
      title: tx.technical_documentation,
      description: tx.complete_documentation_including_specifi,
      icon: '📚'
    },
    {
      title: tx.source_files,
      description: tx.all_source_files_and_project,
      icon: '💾'
    }
  ];

  const benefits = [
    {
      title: tx.visual_communication,
      description: tx.communicate_complex_ideas_and_designs,
      icon: '👁️'
    },
    {
      title: tx.cost_efficiency,
      description: tx.reduce_physical_prototyping_costs_with,
      icon: '💰'
    },
    {
      title: tx.marketing_impact,
      description: tx.create_compelling_marketing_materials_wi,
      icon: '📈'
    },
    {
      title: tx.iteration_speed,
      description: tx.quickly_iterate_and_modify_designs,
      icon: '⚡'
    },
    {
      title: tx.immersive_experiences,
      description: tx.enable_ar_vr_experiences_with,
      icon: '🥽'
    },
    {
      title: tx.global_reach,
      description: tx.share_3d_content_digitally_across,
      icon: '🌐'
    }
  ];

  const useCases = [
    {
      title: tx.e_commerce,
      description: tx.t_3d_product_visualization_for_online,
      icon: '🛒'
    },
    {
      title: tx.architecture,
      description: tx.architectural_visualization_and_virtual,
      icon: '🏢'
    },
    {
      title: tx.gaming,
      description: tx.t_3d_assets_characters_and_environments,
      icon: '🎮'
    },
    {
      title: tx.marketing,
      description: tx.t_3d_animations_and_renders_for,
      icon: '📢'
    },
    {
      title: tx.manufacturing,
      description: tx.product_design_visualization_and_technic,
      icon: '🏭'
    },
    {
      title: tx.education,
      description: tx.t_3d_educational_content_and_interactive,
      icon: '📚'
    }
  ];

  const threeDCapabilities = [
    {
      title: tx.photorealistic_rendering_2,
      description: tx.create_stunning_photorealistic_renders_w,
      icon: '✨'
    },
    {
      title: tx.real_time_visualization,
      description: tx.interactive_3d_experiences_with_real,
      icon: '⚡'
    },
    {
      title: tx.animation_motion,
      description: tx.professional_3d_animations_and_motion,
      icon: '🎬'
    },
    {
      title: tx.ar_vr_integration,
      description: tx.optimized_3d_models_and_scenes,
      icon: '🥽'
    },
    {
      title: tx.technical_modeling_2,
      description: tx.precise_technical_3d_modeling_for,
      icon: '⚙️'
    },
    {
      title: tx.procedural_generation,
      description: tx.automated_3d_content_generation_using,
      icon: '🌀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.t_3d_designing_visualization}
        eyebrowIcon={Box}
        title={tx.t_3d_designing}
        highlight={tx.solutions}
        description={tx.transform_your_ideas_into_stunning}
        highlights={["Product 3D Visualization", "Architectural Visualization", "3D Character Design", "3D Animation"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "4K", label: tx.resolution },
          { value: "1-6", label: tx.week_delivery },
          { value: "100%", label: tx.client_satisfaction },
        ]}
      />

      {/* 3D Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_services}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.t_3d_designing}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.services}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_3d_design_services_for}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeDServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={service.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
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
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
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
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.formats}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.formats}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Tools */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.t_3d_technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.complete_3d}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.tool_ecosystem}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_work_with_industry_leading}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {threeDTools.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-cyan-600 transition-colors duration-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-cyan-50 transition-all duration-200">
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

      {/* Design Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.t_3d_design}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_systematic_approach_ensures_high}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-cyan-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-cyan-600">{step.duration}</div>
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.complete_3d_design_deliverables_that}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={deliverable.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.why_3d_designing}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.benefits_of}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.t_3d_design}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.t_3d_design_provides_significant_advantage}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={benefit.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.t_3d_design_is_ideal_for}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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

      {/* 3D Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.t_3d_capabilities}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.advanced_3d}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.capabilities}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_implement_advanced_3d_techniques}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeDCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={capability.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_create}<span className="block text-cyan-100 mt-2">{tx.in_3d}</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed font-light">{tx.let_s_bring_your_ideas}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_3d_project}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
