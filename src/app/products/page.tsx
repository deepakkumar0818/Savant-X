'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      title: "SavantX CRM Platform",
      category: "crm",
      image: "📊",
      description: "Complete customer relationship management solution with advanced automation, analytics, and integration capabilities.",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Email Integration", "Mobile App"],
      pricing: "$49/month",
      clients: "500+",
      rating: "4.9",
      featured: true,
      status: "Live",
      launchDate: "2023",
      technology: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "SavantX Analytics Dashboard",
      category: "analytics",
      image: "📈",
      description: "Powerful business intelligence platform with real-time data visualization and predictive analytics for data-driven decisions.",
      features: ["Real-time Dashboards", "Custom Reports", "Data Export", "API Integration", "Team Collaboration"],
      pricing: "$79/month",
      clients: "200+",
      rating: "4.8",
      featured: true,
      status: "Live",
      launchDate: "2023",
      technology: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      id: 3,
      title: "SavantX E-Commerce Suite",
      category: "ecommerce",
      image: "🛒",
      description: "Complete e-commerce solution with inventory management, payment processing, and customer engagement tools.",
      features: ["Product Management", "Order Processing", "Payment Gateway", "Inventory Sync", "Customer Portal"],
      pricing: "$99/month",
      clients: "300+",
      rating: "4.7",
      featured: true,
      status: "Live",
      launchDate: "2022",
      technology: ["Next.js", "Stripe", "Redis"]
    },
    {
      id: 4,
      title: "SavantX Project Manager",
      category: "productivity",
      image: "📋",
      description: "Advanced project management tool with task tracking, team collaboration, and resource planning capabilities.",
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Resource Planning", "Gantt Charts"],
      pricing: "$39/month",
      clients: "150+",
      rating: "4.6",
      featured: false,
      status: "Live",
      launchDate: "2023",
      technology: ["Angular", "Express", "MySQL"]
    },
    {
      id: 5,
      title: "SavantX HR Management",
      category: "hr",
      image: "👥",
      description: "Comprehensive human resources management system with employee records, payroll, and performance tracking.",
      features: ["Employee Records", "Payroll Management", "Performance Reviews", "Leave Management", "Recruitment"],
      pricing: "$69/month",
      clients: "100+",
      rating: "4.5",
      featured: false,
      status: "Live",
      launchDate: "2022",
      technology: ["React", "Laravel", "MySQL"]
    },
    {
      id: 6,
      title: "SavantX Inventory System",
      category: "inventory",
      image: "📦",
      description: "Smart inventory management solution with real-time tracking, automated reordering, and supply chain optimization.",
      features: ["Real-time Tracking", "Automated Reordering", "Barcode Scanning", "Supplier Management", "Reports"],
      pricing: "$59/month",
      clients: "75+",
      rating: "4.9",
      featured: false,
      status: "Live",
      launchDate: "2023",
      technology: ["Vue.js", "Node.js", "MongoDB"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'crm', name: 'CRM Solutions', count: products.filter(p => p.category === 'crm').length },
    { id: 'analytics', name: 'Analytics & BI', count: products.filter(p => p.category === 'analytics').length },
    { id: 'ecommerce', name: 'E-Commerce', count: products.filter(p => p.category === 'ecommerce').length },
    { id: 'productivity', name: 'Productivity', count: products.filter(p => p.category === 'productivity').length },
    { id: 'hr', name: 'HR Management', count: products.filter(p => p.category === 'hr').length },
    { id: 'inventory', name: 'Inventory', count: products.filter(p => p.category === 'inventory').length }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Product Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Product Catalog
            </div>

            {/* Product Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Innovative
              <span className="block text-blue-600 mt-2">
                Software Solutions
              </span>
            </h1>

            {/* Product Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Discover our cutting-edge software products that empower businesses to scale, innovate, and succeed in the digital age.
            </p>

            {/* Product Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  <AnimatedCounter end={6} suffix="+" duration={2800} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Products</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10v8h4z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  <AnimatedCounter end={1325} suffix="+" duration={2200} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  <AnimatedCounter end={99} suffix="%" duration={1600} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Uptime</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-8H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm2-2h6v2H9V2zm-1 4h8v2H8V6zm0 4h8v8H8v-8z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  <AnimatedCounter end={24} suffix="/7" duration={1800} />
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Product Showcase */}
      <section className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Enterprise Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              SavantX
              <span className="block text-blue-600 mt-2">Product Portfolio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive suite of enterprise-grade software solutions designed to accelerate digital transformation and drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <span className="text-4xl">{product.image}</span>
                    </div>
                    <div className="text-right">
                      <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold mb-2">
                        {product.status}
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Since {product.launchDate}</div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-base">
                    {product.description}
                  </p>

                  {/* Product Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{product.pricing}</div>
                      <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{product.clients}</div>
                      <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Active Users</div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technology.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                    Request Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Product Catalog */}
      <section className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Complete Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              All
              <span className="block text-blue-600 mt-2">SavantX Products</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore our comprehensive suite of enterprise software solutions across different business categories and industries.
            </p>
          </div>

          {/* Professional Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Professional Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Product Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                      <span className="text-3xl">{product.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-600">({product.rating})</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Product Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 mb-1">{product.pricing}</div>
                      <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">{product.clients}</div>
                      <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Users</div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technology.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                          {tech}
                        </span>
                      ))}
                      {product.technology.length > 3 && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                          +{product.technology.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-sm text-slate-500">
                          +{product.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-600">Available</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Transform
              <span className="block text-blue-100 mt-2">Your Business?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
              Choose from our comprehensive suite of enterprise software solutions or get a custom solution tailored to your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Trial</h3>
              <p className="text-blue-100 text-sm">Try any product free for 14 days with full access</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Round-the-clock technical support and assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-8H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm2-2h6v2H9V2zm-1 4h8v2H8V6zm0 4h8v8H8v-8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-blue-100 text-sm">Tailored software solutions for your unique needs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
