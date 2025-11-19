'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PcbDesignPage() {
  const features = [
    {
      title: 'Custom PCB Layout',
      description: 'Tailored circuit board designs optimized for performance, cost, and manufacturing.',
      icon: '🔧'
    },
    {
      title: 'Multi-layer Boards',
      description: 'Complex multi-layer PCB designs up to 16+ layers for advanced applications.',
      icon: '📐'
    },
    {
      title: 'Signal Integrity',
      description: 'High-speed PCB design with proper signal integrity and EMC considerations.',
      icon: '⚡'
    },
    {
      title: 'Thermal Management',
      description: 'Optimized thermal design for heat dissipation and component protection.',
      icon: '🌡️'
    },
    {
      title: '3D Visualization',
      description: '3D PCB models and mechanical integration with enclosures.',
      icon: '📦'
    },
    {
      title: 'DFM Analysis',
      description: 'Design for Manufacturing checks to ensure production-ready PCBs.',
      icon: '✅'
    }
  ];

  const technologies = [
    { name: 'KiCAD', icon: '/images/icons/kicad1.png', description: 'Open-source PCB tool' },
    { name: 'DipTrace', icon: '/images/icons/Diptrace.jpeg', description: 'PCB layout software' },
    { name: 'SolidWorks', icon: '/images/icons/SolidWorks.png', description: '3D mechanical design' },
    { name: 'Arduino', icon: '/images/icons/ardunio1.png', description: 'Development platform' },
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: 'IoT microcontroller' },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: 'ARM Cortex MCU' },
    { name: 'Raspberry Pi', icon: '/images/icons/raspberrypi.jpeg', description: 'Single-board computer' },
    { name: 'AVR', icon: '/images/icons/AVR.png', description: 'Microcontrollers' }
  ];

  const pcbTypes = [
    {
      title: 'Single & Double Layer PCBs',
      description: 'Simple and cost-effective PCB solutions for basic circuits and prototypes.',
      icon: '📄',
      features: ['Quick turnaround', 'Low cost', 'Simple routing', 'Prototype friendly'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Multi-layer PCBs',
      description: 'Complex PCB designs with multiple layers for high-density applications.',
      icon: '📚',
      features: ['4-16+ layers', 'High-speed design', 'Complex routing', 'Industrial grade'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Flex & Rigid-Flex PCBs',
      description: 'Flexible and rigid-flex PCB designs for space-constrained applications.',
      icon: '🌊',
      features: ['Bendable circuits', 'Space saving', 'Wearable devices', 'Medical applications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'High-Speed PCBs',
      description: 'Specialized designs for high-frequency and high-speed digital signals.',
      icon: '⚡',
      features: ['Impedance control', 'Signal integrity', 'Low crosstalk', 'RF applications'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Schematic Design',
      description: 'Creating detailed circuit schematics with component selection and specifications.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'PCB Layout',
      description: 'Translating schematics into optimized PCB layouts with proper routing.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Design Verification',
      description: 'DRC, ERC checks, signal integrity analysis, and thermal simulation.',
      duration: '1 week',
      icon: '✅'
    },
    {
      step: '04',
      title: 'Gerber Generation',
      description: 'Creating manufacturing files including Gerber, drill files, and BOM.',
      duration: '2-3 days',
      icon: '📁'
    },
    {
      step: '05',
      title: 'Manufacturing Support',
      description: 'Assisting with PCB fabrication, assembly, and testing support.',
      duration: 'Ongoing',
      icon: '🏭'
    }
  ];

  const capabilities = [
    { title: 'Board Size', value: 'Up to 1000mm x 500mm' },
    { title: 'Layer Count', value: 'Up to 16+ layers' },
    { title: 'Min Trace Width', value: '3 mil (0.075mm)' },
    { title: 'Min Via Size', value: '8 mil (0.2mm)' },
    { title: 'Surface Finish', value: 'HASL, ENIG, OSP, Immersion Silver' },
    { title: 'Copper Weight', value: '0.5 - 3 oz' },
    { title: 'Solder Mask', value: 'Green, Black, White, Red, Blue, Yellow' },
    { title: 'Silkscreen', value: 'White, Black' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200">
              <span className="text-lg">🔌</span>
              PCB Design & Layout
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Professional PCB Design &
              <span className="block text-green-600 mt-2">Circuit Board Layout</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Custom printed circuit board design services from simple prototypes to complex multi-layer boards. 
              We deliver production-ready PCBs optimized for performance, reliability, and manufacturing.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">PCB Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">16+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Layer Capability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">First Pass Yield</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-600 mb-2">2-4</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              PCB Design
              <span className="block text-green-600 mt-2">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
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

      {/* PCB Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              PCB
              <span className="block text-green-600 mt-2">Types & Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pcbTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{type.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technical
              <span className="block text-green-600 mt-2">Specifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300">
                <h3 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                  {capability.title}
                </h3>
                <p className="text-lg font-bold text-slate-900">
                  {capability.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Design
              <span className="block text-green-600 mt-2">Tools</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600">{tech.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Design
              <span className="block text-green-600 mt-2">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-green-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-green-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Design Your
            <span className="block text-green-100 mt-2">Custom PCB?</span>
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your PCB requirements and create production-ready circuit boards that meet your specifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold text-lg">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

