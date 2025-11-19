'use client';

import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating 3D Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-teal-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">🎭</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-teal-400/30 to-blue-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🎨</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-cyan-400/30 to-teal-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">✨</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-teal-400/30 to-cyan-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">🎬</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-200">
              <span className="text-lg">🎭</span>
              3D Designing & Visualization
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              3D Designing
              <span className="block text-cyan-600 mt-2">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your ideas into stunning 3D reality. We create photorealistic 3D models, 
              animations, and visualizations for products, architecture, games, and immersive experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">200+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">3D Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">4K</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1-6</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Services */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              3D Designing
              <span className="block text-cyan-600 mt-2">Services</span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-2xl flex items-center justify-center group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                      <span className="text-3xl">{service.icon}</span>
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
                      <div className="text-sm font-bold text-cyan-600 mb-1">{service.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-teal-600 mb-1">{service.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{service.complexity}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Complexity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-indigo-600 mb-1">{service.formats}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              3D Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Complete 3D
              <span className="block text-cyan-600 mt-2">Tool Ecosystem</span>
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
                        <div className="text-2xl">{tool.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              3D Design
              <span className="block text-cyan-600 mt-2">Process</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What You&apos;ll
              <span className="block text-cyan-600 mt-2">Receive</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Complete 3D design deliverables that provide everything needed for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                    <span className="text-2xl">{deliverable.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              Why 3D Designing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Benefits of
              <span className="block text-cyan-600 mt-2">3D Design</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              3D design provides significant advantages for visualization, marketing, and product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Perfect For
              <span className="block text-cyan-600 mt-2">These Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              3D design is ideal for a wide range of industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                    <span className="text-2xl">{useCase.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              3D Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Advanced 3D
              <span className="block text-cyan-600 mt-2">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We implement advanced 3D techniques for stunning visual results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeDCapabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-200 group-hover:to-teal-300 transition-all duration-300">
                    <span className="text-2xl">{capability.icon}</span>
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
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start 3D Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

