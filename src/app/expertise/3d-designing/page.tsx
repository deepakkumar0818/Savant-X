import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Box } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: '3D Design & Visualisation',
  description:
    'Photorealistic 3D models, animations and visualisations for products, architecture and immersive experiences.',
  path: '/expertise/3d-designing',
});

export default function ThreeDDesigningPage() {

  const threeDServices = [
    {
      id: 'product-visualization',
      title: 'Product 3D Visualization',
      icon: '📦',
      description: 'Photorealistic 3D product renders for marketing, e-commerce, and presentations.',
      features: ['Product Modeling', 'Material Texturing', 'Lighting Setup', 'Photorealistic Rendering', '360° Views', 'Animation'],
      pricing: 'Starting at $800',
      timeline: '1-2 weeks',
      complexity: 'Standard',
      formats: 'OBJ, FBX, GLTF'
    },
    {
      id: 'architectural-visualization',
      title: 'Architectural Visualization',
      icon: '🏗️',
      description: '3D architectural renders and walkthroughs for buildings and interior spaces.',
      features: ['Building Modeling', 'Interior Design', 'Landscape Design', 'Virtual Tours', 'Day/Night Renders', 'VR Ready'],
      pricing: 'Starting at $1,500',
      timeline: '2-4 weeks',
      complexity: 'Advanced',
      formats: 'FBX, 3DS, OBJ'
    },
    {
      id: 'character-modeling',
      title: '3D Character Design',
      icon: '🎭',
      description: 'Custom 3D character creation for games, animations, and virtual experiences.',
      features: ['Character Modeling', 'Rigging & Skinning', 'Facial Animation', 'Texture Painting', 'Hair & Clothing', 'Game Ready'],
      pricing: 'Starting at $2,000',
      timeline: '3-5 weeks',
      complexity: 'Advanced',
      formats: 'FBX, Blend, OBJ'
    },
    {
      id: 'animation',
      title: '3D Animation',
      icon: '🎬',
      description: 'Professional 3D animations for marketing, explainer videos, and entertainment.',
      features: ['Motion Graphics', 'Character Animation', 'Product Animation', 'Architectural Walkthroughs', 'Visual Effects', 'Post-Production'],
      pricing: 'Starting at $1,200',
      timeline: '2-6 weeks',
      complexity: 'Advanced',
      formats: 'MP4, MOV, AVI'
    },
    {
      id: 'ar-vr-models',
      title: 'AR/VR 3D Models',
      icon: '🥽',
      description: 'Optimized 3D models for augmented and virtual reality applications.',
      features: ['Low-Poly Modeling', 'Texture Optimization', 'LOD Creation', 'AR Integration', 'VR Compatibility', 'Performance Optimization'],
      pricing: 'Starting at $1,500',
      timeline: '2-4 weeks',
      complexity: 'Enterprise',
      formats: 'GLTF, GLB, FBX'
    },
    {
      id: 'industrial-design',
      title: 'Industrial 3D Design',
      icon: '⚙️',
      description: '3D modeling and visualization for industrial products and machinery.',
      features: ['CAD Integration', 'Technical Modeling', 'Assembly Visualization', 'Exploded Views', 'Technical Drawings', 'Manufacturing Ready'],
      pricing: 'Starting at $2,500',
      timeline: '3-6 weeks',
      complexity: 'Enterprise',
      formats: 'STEP, IGES, STL'
    }
  ];

  const threeDTools = [
    {
      category: '3D Modeling Software',
      tools: [
        { name: 'Blender', icon: '🎨', description: 'Open-source 3D creation suite' },
        { name: 'Maya', icon: '🎭', description: 'Professional 3D animation software' },
        { name: '3ds Max', icon: '🏗️', description: '3D modeling and rendering' },
        { name: 'Cinema 4D', icon: '🎬', description: 'Motion graphics and 3D modeling' }
      ]
    },
    {
      category: 'Rendering Engines',
      tools: [
        { name: 'V-Ray', icon: '✨', description: 'Photorealistic rendering engine' },
        { name: 'Arnold', icon: '🌟', description: 'Advanced ray-tracing renderer' },
        { name: 'Octane Render', icon: '⚡', description: 'GPU-accelerated rendering' },
        { name: 'Cycles', icon: '🔄', description: 'Blender path-tracing engine' }
      ]
    },
    {
      category: 'Texturing & Materials',
      tools: [
        { name: 'Substance Painter', icon: '🖌️', description: '3D texture painting software' },
        { name: 'Substance Designer', icon: '🎨', description: 'Procedural material creation' },
        { name: 'Mari', icon: '🌈', description: '3D texture painting for VFX' },
        { name: 'Quixel Mixer', icon: '🌍', description: '3D texture mixing tool' }
      ]
    },
    {
      category: 'Specialized Tools',
      tools: [
        { name: 'ZBrush', icon: '🗿', description: 'Digital sculpting software' },
        { name: 'Unreal Engine', icon: '🎮', description: 'Real-time 3D creation' },
        { name: 'Unity', icon: '🎯', description: 'Game engine with 3D tools' },
        { name: 'Houdini', icon: '🌀', description: 'Procedural 3D animation' }
      ]
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Concept & Planning',
      description: 'Understanding requirements, creating concept sketches, and planning the 3D workflow.',
      duration: '2-3 days',
      icon: '📋'
    },
    {
      step: '02',
      title: '3D Modeling',
      description: 'Creating the base 3D model with proper topology and structure.',
      duration: '3-7 days',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Texturing & Materials',
      description: 'Applying textures, materials, and shaders for realistic appearance.',
      duration: '2-5 days',
      icon: '🖌️'
    },
    {
      step: '04',
      title: 'Lighting & Setup',
      description: 'Setting up lighting, cameras, and scene composition.',
      duration: '1-3 days',
      icon: '💡'
    },
    {
      step: '05',
      title: 'Rendering',
      description: 'High-quality rendering with post-processing and optimization.',
      duration: '2-4 days',
      icon: '✨'
    },
    {
      step: '06',
      title: 'Delivery & Optimization',
      description: 'Final file preparation, format conversion, and delivery.',
      duration: '1-2 days',
      icon: '🚀'
    }
  ];

  const deliverables = [
    {
      title: '3D Models',
      description: 'High-quality 3D models in multiple formats for various applications.',
      icon: '📦'
    },
    {
      title: 'Textures & Materials',
      description: 'Complete texture sets and material libraries for your 3D assets.',
      icon: '🎨'
    },
    {
      title: 'Rendered Images',
      description: 'Photorealistic rendered images in various resolutions and angles.',
      icon: '🖼️'
    },
    {
      title: 'Animations',
      description: '3D animations and motion graphics ready for production.',
      icon: '🎬'
    },
    {
      title: 'Technical Documentation',
      description: 'Complete documentation including specifications and usage guidelines.',
      icon: '📚'
    },
    {
      title: 'Source Files',
      description: 'All source files and project assets for future modifications.',
      icon: '💾'
    }
  ];

  const benefits = [
    {
      title: 'Visual Communication',
      description: 'Communicate complex ideas and designs through stunning 3D visualizations.',
      icon: '👁️'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce physical prototyping costs with virtual 3D models and renders.',
      icon: '💰'
    },
    {
      title: 'Marketing Impact',
      description: 'Create compelling marketing materials with photorealistic 3D visuals.',
      icon: '📈'
    },
    {
      title: 'Iteration Speed',
      description: 'Quickly iterate and modify designs without physical constraints.',
      icon: '⚡'
    },
    {
      title: 'Immersive Experiences',
      description: 'Enable AR/VR experiences with optimized 3D content.',
      icon: '🥽'
    },
    {
      title: 'Global Reach',
      description: 'Share 3D content digitally across platforms and devices.',
      icon: '🌐'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: '3D product visualization for online stores and shopping experiences.',
      icon: '🛒'
    },
    {
      title: 'Architecture',
      description: 'Architectural visualization and virtual property tours.',
      icon: '🏢'
    },
    {
      title: 'Gaming',
      description: '3D assets, characters, and environments for video games.',
      icon: '🎮'
    },
    {
      title: 'Marketing',
      description: '3D animations and renders for advertising and promotional content.',
      icon: '📢'
    },
    {
      title: 'Manufacturing',
      description: 'Product design visualization and technical documentation.',
      icon: '🏭'
    },
    {
      title: 'Education',
      description: '3D educational content and interactive learning materials.',
      icon: '📚'
    }
  ];

  const threeDCapabilities = [
    {
      title: 'Photorealistic Rendering',
      description: 'Create stunning photorealistic renders with advanced lighting and materials.',
      icon: '✨'
    },
    {
      title: 'Real-time Visualization',
      description: 'Interactive 3D experiences with real-time rendering capabilities.',
      icon: '⚡'
    },
    {
      title: 'Animation & Motion',
      description: 'Professional 3D animations and motion graphics for various media.',
      icon: '🎬'
    },
    {
      title: 'AR/VR Integration',
      description: 'Optimized 3D models and scenes for augmented and virtual reality.',
      icon: '🥽'
    },
    {
      title: 'Technical Modeling',
      description: 'Precise technical 3D modeling for engineering and manufacturing.',
      icon: '⚙️'
    },
    {
      title: 'Procedural Generation',
      description: 'Automated 3D content generation using procedural techniques.',
      icon: '🌀'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="3D Designing & Visualization"
        eyebrowIcon={Box}
        title="3D Designing"
        highlight="Solutions"
        description="Transform your ideas into stunning 3D reality. We create photorealistic 3D models, animations, and visualizations for products, architecture, games, and immersive experiences."
        highlights={["Product 3D Visualization", "Architectural Visualization", "3D Character Design", "3D Animation"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "4K", label: "Resolution" },
          { value: "1-6", label: "Week Delivery" },
          { value: "100%", label: "Client Satisfaction" },
        ]}
      />

      {/* 3D Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              3D Designing
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive 3D design services for products, architecture, characters, and immersive experiences.
            </p>
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
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{service.formats}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Formats</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              3D Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Complete 3D
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Tool Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We work with industry-leading 3D software and tools to create exceptional results.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              3D Design
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our systematic approach ensures high-quality 3D designs delivered on time and within budget.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Deliverables
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              What You&apos;ll
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete 3D design deliverables that provide everything needed for your project.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Why 3D Designing
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Benefits of
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">3D Design</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              3D design provides significant advantages for visualization, marketing, and product development.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Use Cases
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Perfect For
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">These Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              3D design is ideal for a wide range of industries and applications.
            </p>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              3D Capabilities
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Advanced 3D
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced 3D techniques for stunning visual results.
            </p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Create
            <span className="block text-cyan-100 mt-2">in 3D?</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed font-light">
            Let&apos;s bring your ideas to life with stunning 3D designs, models, and visualizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start 3D Project
            </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
