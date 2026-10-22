'use client';

import { useState } from 'react';
import { COMPANY } from '@/lib/company';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { CircuitBoard } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function HardwareElectronicsPage() {
  const [activePlatform, setActivePlatform] = useState('iot');

  const hardwareTypes = [
    {
      id: 'iot',
      title: 'IoT & Embedded Systems',
      icon: '🌐',
      description: 'Smart connected devices and embedded systems that bring intelligence to everyday objects and industrial applications.',
      features: ['Smart Sensors', 'Wireless Connectivity', 'Power Management', 'Secure Protocols', 'Real-time Processing', 'Edge Computing'],
      pricing: 'Starting at $8,000',
      timeline: '6-12 weeks',
      platforms: ['ESP32', 'Arduino', 'STM32']
    },
    {
      id: 'pcb',
      title: 'PCB Design & Layout',
      icon: '🔧',
      description: 'Custom printed circuit board design and layout services for electronic products with optimized performance and reliability.',
      features: ['Custom PCB Layout', 'Signal Integrity', 'Thermal Management', '3D Modeling', 'Multi-layer Boards', 'High-speed Design'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks',
      platforms: ['KiCAD', 'DipTrace', 'Altium']
    },
    {
      id: 'product',
      title: 'Product Development',
      icon: '🚀',
      description: 'End-to-end product development from concept to manufacturing, including industrial design and market-ready solutions.',
      features: ['Concept Design', 'Prototyping', 'Manufacturing', 'Testing & Validation', 'Certification', 'Production Support'],
      pricing: 'Starting at $15,000',
      timeline: '8-16 weeks',
      platforms: ['SolidWorks', 'Fusion 360', 'CAD']
    },
    {
      id: 'firmware',
      title: 'Firmware Development',
      icon: '⚙️',
      description: 'Low-level software development for microcontrollers and embedded systems with optimized performance and reliability.',
      features: ['Real-time Systems', 'Driver Development', 'Security Features', 'Performance Optimization', 'RTOS', 'Bootloader'],
      pricing: 'Starting at $10,000',
      timeline: '6-12 weeks',
      platforms: ['C/C++', 'Assembly', 'FreeRTOS']
    }
  ];

  const technologies = [
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: 'IoT microcontroller', category: 'Hardware' },
    { name: 'Arduino', icon: '/images/icons/ardunio1.png', description: 'Development platform', category: 'Hardware' },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: 'ARM Cortex MCU', category: 'Hardware' },
    { name: 'KiCAD', icon: '/images/icons/kicad1.png', description: 'PCB design tool', category: 'PCB Design' },
    { name: 'DipTrace', icon: '/images/icons/Diptrace.jpeg', description: 'PCB layout software', category: 'PCB Design' },
    { name: 'SolidWorks', icon: '/images/icons/SolidWorks.png', description: '3D CAD software', category: 'CAD' },
    { name: 'Raspberry Pi', icon: '🥧', description: 'Single-board computer', category: 'Hardware' },
    { name: 'FreeRTOS', icon: '⚡', description: 'Real-time OS', category: 'Firmware' }
  ];

  const platforms = [
    {
      id: 'iot',
      name: 'IoT Solutions',
      icon: '🌐',
      description: 'Connected devices and smart systems',
      features: ['Wi-Fi/Bluetooth', 'Cloud Integration', 'Sensor Networks', 'Remote Monitoring', 'Data Analytics', 'Low Power'],
      stats: { projects: '50+', devices: '10K+', uptime: '99.9%' }
    },
    {
      id: 'embedded',
      name: 'Embedded Systems',
      icon: '🔌',
      description: 'Specialized computing systems for specific tasks',
      features: ['Real-time Processing', 'Hardware Integration', 'Custom Protocols', 'Firmware Development', 'System Optimization', 'Testing'],
      stats: { projects: '40+', products: '8K+', reliability: '99.5%' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your hardware specifications and technical requirements.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Design & Schematic',
      description: 'Creating circuit diagrams, PCB layouts, and 3D models.',
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Prototyping',
      description: 'Building and testing initial prototypes for validation.',
      duration: '2-4 weeks',
      icon: '🔧'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing including EMC, safety, and reliability.',
      duration: '2-3 weeks',
      icon: '🧪'
    },
    {
      step: '05',
      title: 'Production Support',
      description: 'Manufacturing support and certification assistance.',
      duration: '2-4 weeks',
      icon: '🏭'
    }
  ];

  const features = [
    {
      title: 'Custom PCB Design',
      description: 'Tailored printed circuit board designs optimized for your specific requirements.',
      icon: '🔧'
    },
    {
      title: 'IoT Integration',
      description: 'Seamless connectivity with cloud platforms and mobile applications.',
      icon: '🌐'
    },
    {
      title: 'Firmware Development',
      description: 'Robust, efficient firmware for microcontrollers and embedded systems.',
      icon: '⚙️'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Fast iteration cycles to validate concepts and designs.',
      icon: '⚡'
    },
    {
      title: 'Certification Support',
      description: 'Assistance with FCC, CE, and other regulatory certifications.',
      icon: '✅'
    },
    {
      title: 'Manufacturing Ready',
      description: 'Production-ready designs with complete documentation.',
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Hardware & Electronics"
        eyebrowIcon={CircuitBoard}
        title="Electronics &"
        highlight="Hardware Development"
        description="We design and develop custom electronics, PCBs, and embedded systems that power innovative products. From IoT devices to industrial automation, we bring your hardware ideas to life."
        highlights={["IoT & Embedded Systems", "PCB Design & Layout", "Product Development", "Firmware Development"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "6-16", label: "Week Delivery" },
          { value: "24/7", label: "Support" },
        ]}
      />

      {/* Hardware Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Hardware
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From circuit design to firmware development, we offer comprehensive hardware engineering services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {type.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium border border-cyan-200/50">
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-cyan-600 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Specializations
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              IoT & Embedded
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Systems</span>
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
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-cyan-50'
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
                      <div className="text-lg font-bold text-cyan-600 mb-1">{platform.stats.projects || platform.stats.devices}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.projects ? 'Projects' : 'Devices'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">{platform.stats.devices || platform.stats.products}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.devices ? 'Devices' : 'Products'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600 mb-1">{platform.stats.uptime || platform.stats.reliability}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.uptime ? 'Uptime' : 'Reliability'}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Hardware
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use industry-leading tools and platforms for electronics and hardware development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-cyan-200/50 transition-all duration-300 group-hover:scale-105">
                  {typeof tech.icon === 'string' && tech.icon.startsWith('/') ? (
                    <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                      <img 
                        src={tech.icon} 
                        alt={`${tech.name} icon`}
                        loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  )}
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs font-medium">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Key Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Why Choose Our
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Hardware Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              How We Develop
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Hardware Products</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process ensures your hardware product is delivered on time with exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Build Your
            <span className="block text-cyan-100 mt-2">Hardware Product?</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your hardware requirements and create innovative electronics solutions that exceed expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">
                Schedule Consultation
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

