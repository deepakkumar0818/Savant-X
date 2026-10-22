import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Package } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Product Development & Engineering',
  description:
    'End-to-end hardware product development, from concept and prototyping to manufacturing-ready designs.',
  path: '/expertise/product-development',
});

export default function ProductDevelopmentPage() {
  const features = [
    {
      title: 'Concept Design',
      description: 'Transform your ideas into detailed product concepts with market analysis and feasibility studies.',
      icon: '💡'
    },
    {
      title: 'Industrial Design',
      description: 'Create attractive and functional product designs that stand out in the market.',
      icon: '🎨'
    },
    {
      title: 'Prototyping',
      description: 'Rapid prototyping using 3D printing, CNC machining, and other advanced techniques.',
      icon: '🔧'
    },
    {
      title: 'Engineering Analysis',
      description: 'FEA, thermal analysis, and simulation to optimize product performance.',
      icon: '📊'
    },
    {
      title: 'Manufacturing Support',
      description: 'DFM analysis, tooling design, and production process optimization.',
      icon: '🏭'
    },
    {
      title: 'Certification Assistance',
      description: 'Help with FCC, CE, UL, and other regulatory certifications.',
      icon: '✅'
    }
  ];

  const technologies = [
    { name: 'SolidWorks', icon: '/images/icons/SolidWorks.png', description: '3D CAD software' },
    { name: 'KiCAD', icon: '/images/icons/kicad1.png', description: 'PCB design tool' },
    { name: 'DipTrace', icon: '/images/icons/Diptrace.jpeg', description: 'PCB layout software' },
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: 'IoT microcontroller' },
    { name: 'Arduino', icon: '/images/icons/ardunio1.png', description: 'Development platform' },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: 'ARM Cortex MCU' },
    { name: 'Raspberry Pi', icon: '/images/icons/raspberrypi.jpeg', description: 'Single-board computer' },
    { name: 'FreeRTOS', icon: '/images/icons/freeRtos.jpeg', description: 'Real-time OS' }
  ];

  const developmentPhases = [
    {
      title: 'Discovery & Ideation',
      description: 'Market research, user needs analysis, and concept generation.',
      icon: '🔍',
      duration: '2-4 weeks',
      deliverables: ['Market Analysis', 'User Personas', 'Concept Sketches', 'Feasibility Study'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Design & Engineering',
      description: 'Detailed product design, CAD modeling, and engineering specifications.',
      icon: '📐',
      duration: '4-8 weeks',
      deliverables: ['3D CAD Models', 'Technical Drawings', 'BOM', 'Specifications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Prototyping & Testing',
      description: 'Building functional prototypes and conducting comprehensive testing.',
      icon: '🔬',
      duration: '4-6 weeks',
      deliverables: ['Working Prototypes', 'Test Reports', 'Design Iterations', 'Validation'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Manufacturing Preparation',
      description: 'Production planning, tooling design, and manufacturing documentation.',
      icon: '🏭',
      duration: '3-6 weeks',
      deliverables: ['Manufacturing Files', 'Assembly Instructions', 'Quality Plans', 'Tooling Design'],
      color: 'from-green-500 to-green-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your product vision, market requirements, and user needs.',
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '02',
      title: 'Concept Design',
      description: 'Creating multiple design concepts with sketches and 3D visualizations.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Detailed Design',
      description: 'Finalizing design with complete CAD models and engineering specifications.',
      duration: '4-6 weeks',
      icon: '📐'
    },
    {
      step: '04',
      title: 'Prototyping',
      description: 'Building and testing functional prototypes with iterative improvements.',
      duration: '4-8 weeks',
      icon: '🔧'
    },
    {
      step: '05',
      title: 'Production',
      description: 'Manufacturing setup, tooling, and pilot production runs.',
      duration: '6-12 weeks',
      icon: '🏭'
    }
  ];

  const productTypes = [
    { 
      title: 'Consumer Electronics', 
      icon: '📱', 
      description: 'Smart devices, wearables, and connected consumer products.',
      examples: ['Smart Home Devices', 'Wearable Tech', 'Audio Equipment', 'Mobile Accessories']
    },
    { 
      title: 'Industrial Equipment', 
      icon: '🏭', 
      description: 'Industrial automation, monitoring, and control systems.',
      examples: ['Sensor Systems', 'Control Panels', 'Monitoring Devices', 'Automation Tools']
    },
    { 
      title: 'Medical Devices', 
      icon: '🏥', 
      description: 'Healthcare and medical product development with regulatory compliance.',
      examples: ['Patient Monitors', 'Diagnostic Tools', 'Therapy Devices', 'Lab Equipment']
    },
    { 
      title: 'IoT Products', 
      icon: '🌐', 
      description: 'Internet-connected devices and smart systems.',
      examples: ['Smart Sensors', 'Connected Appliances', 'Tracking Devices', 'Environmental Monitors']
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Product Development"
        eyebrowIcon={Package}
        title="End-to-End Product Development &"
        highlight="Engineering Services"
        description="From concept to manufacturing, we provide complete product development services. Transform your ideas into market-ready products with our expert engineering and design team."
        highlights={["Concept Design", "Industrial Design", "Prototyping", "Engineering Analysis"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "95%", label: "Success Rate" },
          { value: "8-16", label: "Week Delivery" },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Product Development
              <span className="block text-orange-600 mt-2">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
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

      {/* Development Phases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Development
              <span className="block text-orange-600 mt-2">Phases</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <ServiceIcon emoji={phase.icon} size="none" className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="text-sm font-semibold text-orange-600 mb-4">
                    Timeline: {phase.duration}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-700">Key Deliverables:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{deliverable}</span>
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

      {/* Product Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Product
              <span className="block text-orange-600 mt-2">Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <ServiceIcon emoji={type.icon} size="lg" className="mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                        <span className="text-xs text-slate-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Development
              <span className="block text-orange-600 mt-2">Tools</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-orange-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-200">
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Development
              <span className="block text-orange-600 mt-2">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-orange-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-orange-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-orange-600 via-amber-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Develop Your
            <span className="block text-orange-100 mt-2">Next Product?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your product idea and create innovative solutions that exceed market expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold text-lg">
                Schedule Consultation
              </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
