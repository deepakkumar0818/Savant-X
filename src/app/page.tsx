'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CompaniesSection from '@/components/CompaniesSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Home() {
  const [codeVersion, setCodeVersion] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  
  const codeVersions = [
    // Version 0: CRM System
    [
      { line: 1, content: "// SavantX CRM System", type: "comment" },
      { line: 2, content: "// Enterprise-grade solution", type: "comment" },
      { line: 3, content: "import { React, useState } from \"react\"", type: "import" },
      { line: 4, content: "// Modern React patterns", type: "comment" },
      { line: 5, content: "const CustomerDashboard = () => {", type: "function" },
      { line: 6, content: "  // State management", type: "comment" },
      { line: 7, content: "  const [customers, setCustomers] = useState([])", type: "state" },
      { line: 8, content: "  // API integration", type: "comment" },
      { line: 9, content: "  const fetchCustomers = async () => {", type: "function" },
      { line: 10, content: "    // RESTful API call", type: "comment" },
      { line: 11, content: "    const response = await fetch(\"/api/customers\")", type: "api" },
      { line: 12, content: "    const data = await response.json()", type: "api" },
      { line: 13, content: "    setCustomers(data)", type: "state" },
      { line: 14, content: "  }", type: "function" },
      { line: 15, content: "  // Error handling", type: "comment" },
      { line: 16, content: "  catch (error) {", type: "error" },
      { line: 17, content: "    console.error(\"Error:\", error)", type: "error" },
      { line: 18, content: "  }", type: "error" },
      { line: 19, content: "  // Return JSX", type: "comment" },
      { line: 20, content: "  return (", type: "return" },
      { line: 21, content: "    <div className=\"dashboard\">", type: "jsx" },
      { line: 22, content: "      // Customer list component", type: "comment" },
      { line: 23, content: "      <CustomerList customers={customers} />", type: "jsx" },
      { line: 24, content: "    </div>", type: "jsx" },
      { line: 25, content: "  )", type: "return" },
      { line: 26, content: "}", type: "function" },
      { line: 27, content: "// Export component", type: "comment" },
      { line: 28, content: "export default CustomerDashboard;", type: "export" },
      { line: 29, content: "// Ready to code", type: "cursor" }
    ],
    // Version 1: E-commerce System
    [
      { line: 1, content: "// SavantX E-commerce Platform", type: "comment" },
      { line: 2, content: "// Next.js + TypeScript", type: "comment" },
      { line: 3, content: "import { Product, Cart } from '@/types'", type: "import" },
      { line: 4, content: "// Type-safe development", type: "comment" },
      { line: 5, content: "const ProductPage = ({ product }: { product: Product }) => {", type: "function" },
      { line: 6, content: "  // Shopping cart state", type: "comment" },
      { line: 7, content: "  const [cart, setCart] = useState<Cart[]>([])", type: "state" },
      { line: 8, content: "  // Add to cart function", type: "comment" },
      { line: 9, content: "  const addToCart = (product: Product) => {", type: "function" },
      { line: 10, content: "    // Update cart state", type: "comment" },
      { line: 11, content: "    setCart(prev => [...prev, product])", type: "state" },
      { line: 12, content: "    // Show success message", type: "comment" },
      { line: 13, content: "    toast.success('Added to cart!')", type: "ui" },
      { line: 14, content: "  }", type: "function" },
      { line: 15, content: "  // Payment processing", type: "comment" },
      { line: 16, content: "  const processPayment = async () => {", type: "function" },
      { line: 17, content: "    // Stripe integration", type: "comment" },
      { line: 18, content: "    const { error } = await stripe.confirmPayment()", type: "payment" },
      { line: 19, content: "    if (error) throw new Error(error.message)", type: "error" },
      { line: 20, content: "  }", type: "function" },
      { line: 21, content: "  return (", type: "return" },
      { line: 22, content: "    <div className=\"product-page\">", type: "jsx" },
      { line: 23, content: "      <ProductImage src={product.image} />", type: "jsx" },
      { line: 24, content: "      <ProductDetails product={product} />", type: "jsx" },
      { line: 25, content: "      <AddToCartButton onClick={() => addToCart(product)} />", type: "jsx" },
      { line: 26, content: "    </div>", type: "jsx" },
      { line: 27, content: "  )", type: "return" },
      { line: 28, content: "}", type: "function" },
      { line: 29, content: "// Building the future", type: "cursor" }
    ],
    // Version 2: AI Analytics Dashboard
    [
      { line: 1, content: "// SavantX AI Analytics", type: "comment" },
      { line: 2, content: "// Machine Learning Dashboard", type: "comment" },
      { line: 3, content: "import { Chart, LineChart } from 'recharts'", type: "import" },
      { line: 4, content: "// Data visualization", type: "comment" },
      { line: 5, content: "const AnalyticsDashboard = () => {", type: "function" },
      { line: 6, content: "  // AI predictions state", type: "comment" },
      { line: 7, content: "  const [predictions, setPredictions] = useState(null)", type: "state" },
      { line: 8, content: "  // Real-time data", type: "comment" },
      { line: 9, content: "  useEffect(() => {", type: "effect" },
      { line: 10, content: "    // WebSocket connection", type: "comment" },
      { line: 11, content: "    const ws = new WebSocket('ws://localhost:8080')", type: "websocket" },
      { line: 12, content: "    ws.onmessage = (event) => {", type: "websocket" },
      { line: 13, content: "      const data = JSON.parse(event.data)", type: "data" },
      { line: 14, content: "      setPredictions(data.predictions)", type: "state" },
      { line: 15, content: "    }", type: "websocket" },
      { line: 16, content: "  }, [])", type: "effect" },
      { line: 17, content: "  // Chart configuration", type: "comment" },
      { line: 18, content: "  const chartData = predictions?.map(p => ({", type: "data" },
      { line: 19, content: "    date: p.timestamp,", type: "data" },
      { line: 20, content: "    value: p.prediction", type: "data" },
      { line: 21, content: "  }))", type: "data" },
      { line: 22, content: "  return (", type: "return" },
      { line: 23, content: "    <div className=\"analytics-dashboard\">", type: "jsx" },
      { line: 24, content: "      <LineChart data={chartData} />", type: "jsx" },
      { line: 25, content: "      <PredictionMetrics predictions={predictions} />", type: "jsx" },
      { line: 26, content: "    </div>", type: "jsx" },
      { line: 27, content: "  )", type: "return" },
      { line: 28, content: "}", type: "function" },
      { line: 29, content: "// AI-powered insights", type: "cursor" }
    ]
  ];

  const handleRefresh = () => {
    setCodeVersion((prev) => (prev + 1) % codeVersions.length);
  };

  // Software Services Data
  const softwareServices = [
    {
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies that deliver exceptional user experiences.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      features: [
        { icon: "⚡", title: "Progressive Web Apps", desc: "Lightning-fast performance" },
        { icon: "🔄", title: "Server-Side Rendering", desc: "SEO optimized" },
        { icon: "🔗", title: "API Integration", desc: "Seamless connectivity" },
        { icon: "📱", title: "Responsive Design", desc: "All devices covered" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile solutions that deliver native performance across iOS and Android platforms.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600",
      features: [
        { icon: "📱", title: "React Native", desc: "Cross-platform apps" },
        { icon: "🎯", title: "App Store Optimization", desc: "Maximum visibility" },
        { icon: "🔔", title: "Push Notifications", desc: "User engagement" },
        { icon: "⚡", title: "Native Performance", desc: "Optimized speed" }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise platforms including CRM, ERP, and custom business applications.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      features: [
        { icon: "🏢", title: "CRM Systems", desc: "Customer management" },
        { icon: "📈", title: "Business Analytics", desc: "Performance insights" },
        { icon: "🔄", title: "Workflow Automation", desc: "Process efficiency" },
        { icon: "🔒", title: "Enterprise Security", desc: "Data protection" }
      ]
    },
    {
      title: "Zoho Integration",
      description: "Seamless integration with Zoho's business suite including CRM customization, Creator apps, and workflow automation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-amber-500 to-yellow-600",
      features: [
        { icon: "🏢", title: "CRM Customization", desc: "Tailored CRM solutions" },
        { icon: "🛠️", title: "Creator Apps", desc: "Custom applications" },
        { icon: "🔄", title: "Workflow Automation", desc: "Process optimization" },
        { icon: "🔗", title: "Third-party Integration", desc: "Seamless connectivity" }
      ]
    }
  ];

  // Hardware Services Data
  const hardwareServices = [
    {
      title: "IoT & Embedded Systems",
      description: "Smart connected devices and embedded systems that bring intelligence to everyday objects and industrial applications.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      features: [
        { icon: "🌐", title: "Smart Sensors", desc: "Real-time monitoring" },
        { icon: "📡", title: "Wireless Connectivity", desc: "Seamless communication" },
        { icon: "🔋", title: "Power Management", desc: "Efficient energy use" },
        { icon: "🛡️", title: "Secure Protocols", desc: "Data protection" }
      ]
    },
    {
      title: "PCB Designing",
      description: "Custom printed circuit board design and layout services for electronic products with optimized performance and reliability.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
      features: [
        { icon: "🔧", title: "Custom PCB Layout", desc: "Optimized designs" },
        { icon: "⚡", title: "Signal Integrity", desc: "High-speed performance" },
        { icon: "🌡️", title: "Thermal Management", desc: "Heat dissipation" },
        { icon: "📐", title: "3D Modeling", desc: "Visual prototyping" }
      ]
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to manufacturing, including industrial design and market-ready solutions.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { icon: "💡", title: "Concept Design", desc: "Innovative ideas" },
        { icon: "🔬", title: "Prototyping", desc: "Rapid iteration" },
        { icon: "🏭", title: "Manufacturing", desc: "Production ready" },
        { icon: "📊", title: "Testing & Validation", desc: "Quality assurance" }
      ]
    },
    {
      title: "Firmware Development",
      description: "Low-level software development for microcontrollers and embedded systems with optimized performance and reliability.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      features: [
        { icon: "⚙️", title: "Real-time Systems", desc: "Precise timing" },
        { icon: "🔧", title: "Driver Development", desc: "Hardware control" },
        { icon: "🛡️", title: "Security Features", desc: "Protected systems" },
        { icon: "📈", title: "Performance Optimization", desc: "Efficient code" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-blue-300/20 rounded-full blur-3xl transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-indigo-300/15 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Tech Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Floating Laptop */}
        <div className="absolute top-20 left-12 w-20 h-14 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-lg transform rotate-8 animate-float-slow shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/50 to-indigo-500/50 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v10H4zm2 2v6h12V8H6zm0 0h12v6H6V8z"/>
            </svg>
          </div>
        </div>

        {/* Floating Smartphone */}
        <div className="absolute top-32 right-20 w-8 h-14 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-lg transform -rotate-6 animate-float-medium shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/50 to-blue-500/50 rounded-lg flex flex-col items-center justify-center">
            <div className="w-6 h-8 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-4 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Floating Cloud Server */}
        <div className="absolute bottom-32 left-20 w-16 h-12 bg-gradient-to-br from-blue-600/30 to-indigo-700/30 rounded-lg transform rotate-4 animate-float-slow shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/50 to-indigo-600/50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
          </div>
        </div>

        {/* Floating API Symbol */}
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-lg transform -rotate-12 animate-float-medium shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/50 to-blue-500/50 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Floating Git Branch */}
        <div className="absolute top-1/3 left-8 w-14 h-14 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-lg transform rotate-6 animate-float-slow shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/50 to-indigo-500/50 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Floating Network Nodes */}
        <div className="absolute top-1/4 right-12 w-16 h-12 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-lg transform -rotate-8 animate-float-medium shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/50 to-blue-500/50 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Hero Section - Seamlessly connected to navbar */}
      <section className="relative z-10 pt-4 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Hero Title */}
            <div className="mb-8 mt-8">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-20 lg:justify-end">
                {/* Hero Text */}
                <div className="text-center lg:text-left w-full lg:w-auto">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight drop-shadow-lg transform hover:scale-105 transition-all duration-500 ease-out">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SavantX
                </span>
              </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8 px-4 lg:px-0">
                Professional technology solutions for modern businesses. 
                We specialize in web development, mobile applications, and digital transformation.
              </p>
                </div>

                 {/* Coding Screen */}
                 <div className="w-full sm:w-4/5 md:w-3/5 lg:w-auto lg:max-w-72 mx-auto lg:mx-0">
                   <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-200/50 overflow-hidden">
                     {/* Screen Header */}
                     <div className="bg-gray-100/80 backdrop-blur-sm border-b border-gray-200/50 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 md:gap-3">
                       <div className="flex gap-1 md:gap-1.5">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full"></div>
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full"></div>
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                       </div>
                       <div className="text-gray-600 text-xs font-mono">savantx-editor</div>
                     </div>
                     
                     {/* Code Content */}
                     <div className="relative bg-white overflow-hidden">
                       {/* File Path */}
                       <div className="px-3 md:px-4 pt-2 md:pt-3 pb-1 md:pb-2 text-gray-500 text-xs border-b border-gray-100">
                         <span className="text-blue-600">src/</span>
                         <span className="text-gray-600">components/</span>
                         <span className="text-gray-800 font-semibold">savantx.js</span>
                       </div>
                       
                       {/* Auto-Scrolling Code Area */}
                       <div className="h-24 md:h-32 overflow-hidden relative">
                         <div className="p-3 md:p-4 font-mono text-xs space-y-1 md:space-y-2 text-gray-800 simple-scroll code-content">
                           {/* Dynamic Code Content */}
                           {codeVersions[codeVersion].map((line, index) => (
                             <div key={index} className="flex items-center gap-2">
                               <span className="text-gray-400 text-xs w-6 text-right">{line.line}</span>
                               <span className={
                                 line.type === 'comment' ? 'text-gray-500' :
                                 line.type === 'import' ? 'text-blue-600 font-semibold' :
                                 line.type === 'function' ? 'text-purple-600 font-semibold' :
                                 line.type === 'state' ? 'text-blue-600' :
                                 line.type === 'api' ? 'text-green-600' :
                                 line.type === 'error' ? 'text-red-600' :
                                 line.type === 'return' ? 'text-blue-600 font-semibold' :
                                 line.type === 'jsx' ? 'text-gray-800' :
                                 line.type === 'export' ? 'text-blue-600 font-semibold' :
                                 line.type === 'cursor' ? 'text-gray-500' :
                                 'text-gray-800'
                               }>
                                 {line.content}
                               </span>
                               {line.type === 'cursor' && (
                                 <div className="w-1 h-3 bg-blue-600 animate-pulse"></div>
                               )}
                             </div>
                           ))}
                           
                           {/* Duplicate content for seamless loop */}
                           {codeVersions[codeVersion].map((line, index) => (
                             <div key={`dup-${index}`} className="flex items-center gap-2">
                               <span className="text-gray-400 text-xs w-6 text-right">{line.line}</span>
                               <span className={
                                 line.type === 'comment' ? 'text-gray-500' :
                                 line.type === 'import' ? 'text-blue-600 font-semibold' :
                                 line.type === 'function' ? 'text-purple-600 font-semibold' :
                                 line.type === 'state' ? 'text-blue-600' :
                                 line.type === 'api' ? 'text-green-600' :
                                 line.type === 'error' ? 'text-red-600' :
                                 line.type === 'return' ? 'text-blue-600 font-semibold' :
                                 line.type === 'jsx' ? 'text-gray-800' :
                                 line.type === 'export' ? 'text-blue-600 font-semibold' :
                                 line.type === 'cursor' ? 'text-gray-500' :
                                 'text-gray-800'
                               }>
                                 {line.content}
                               </span>
                               {line.type === 'cursor' && (
                                 <div className="w-1 h-3 bg-blue-600 animate-pulse"></div>
                               )}
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                     
                     {/* Interactive Refresh Button */}
                     <button 
                       className="absolute top-3 md:top-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-200/50 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200 cursor-pointer group"
                       onClick={handleRefresh}
                     >
                       <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                       </svg>
                     </button>
                     
                     {/* Small floating element */}
                     <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded flex items-center justify-center backdrop-blur-sm border border-green-200/50">
                       <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-600 rounded-full animate-pulse"></div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4 lg:px-0">
              <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-out font-semibold text-base md:text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Get Started Today
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/work" className="group border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out font-semibold text-base md:text-lg transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  View Our Work
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4 lg:px-0">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-blue-200/60 transform hover:scale-105 transition-all duration-500 ease-out group">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={200} suffix="+" duration={2800} />
                </div>
                <div className="text-slate-600 font-medium text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-blue-200/60 transform hover:scale-105 transition-all duration-500 ease-out group">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={98} suffix="%" duration={2200} />
                </div>
                <div className="text-slate-600 font-medium text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-blue-200/60 transform hover:scale-105 transition-all duration-500 ease-out group">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={24} suffix="/7" duration={1600} />
                </div>
                <div className="text-slate-600 font-medium text-sm md:text-base">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose SavantX Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full animate-float-gentle"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full animate-float-gentle delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full animate-float-gentle delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-scale-in shadow-lg">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Why Choose SavantX?
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight animate-fade-in-up">
              Excellence in Every
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift"> Solution</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              We combine cutting-edge technology with strategic thinking to deliver solutions that transform businesses and drive sustainable growth.
            </p>
          </div>
          
          {/* Software & Hardware Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Software Services Column */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Software</span> Solutions
                </h3>
                <p className="text-lg text-slate-600">Modern software development and integration services</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {softwareServices.slice(0, showAllServices ? 4 : 3).map((service, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-${service.gradient.split(' ')[2]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-start gap-6 mb-6 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                        {service.icon}
                </div>
                      <div className="flex-1 min-h-[120px] flex flex-col">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed flex-1">
                          {service.description}
                  </p>
                </div>
              </div>
              
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 group-hover:bg-blue-50/50 transition-colors duration-300">
                    <span className="text-lg">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                ))}
              </div>
            </div>

            {/* Hardware Services Column */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Hardware</span> Solutions
                </h3>
                <p className="text-lg text-slate-600">Advanced hardware development and embedded systems</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {hardwareServices.slice(0, showAllServices ? 4 : 3).map((service, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-${service.gradient.split(' ')[2]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-start gap-6 mb-6 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                        {service.icon}
                </div>
                      <div className="flex-1 min-h-[120px] flex flex-col">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed flex-1">
                          {service.description}
                  </p>
                </div>
              </div>
              
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 group-hover:bg-orange-50/50 transition-colors duration-300">
                    <span className="text-lg">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                ))}
              </div>
            </div>
          </div>

          {/* Single Show More Button */}
          {!showAllServices && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllServices(true)}
                className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Show More Services
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {/* About SavantX Section */}
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
              {/* Left Side - Content */}
              <div className="space-y-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  Trusted Technology Partner
                </div>

                {/* Main Headline */}
                <div>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Building Digital
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Excellence
                    </span>
                  </h2>
                </div>

                {/* Body Text */}
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
                  <p>
                    We craft exceptional digital experiences that transform businesses and drive growth. Our comprehensive technology solutions span from web development to AI-powered applications.
                  </p>
                  <p>
                    With a commitment to innovation and quality, we deliver scalable solutions that help organizations thrive in the digital landscape.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact" className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/work" className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                    <span className="flex items-center gap-2">
                      View Our Work
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </Link>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={100} suffix="%" duration={2500} />
                    </div>
                    <div className="text-slate-600 font-medium">In-House Team</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-purple-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={5} suffix="+" duration={2000} />
                    </div>
                    <div className="text-slate-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-green-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                      <AnimatedCounter end={200} suffix="+" duration={3000} />
                    </div>
                    <div className="text-slate-600 font-medium">Projects Delivered</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Elements */}
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Why Choose SavantX?</h3>
                    <p className="text-slate-600">Proven expertise in modern technology</p>
                  </div>

                  {/* Feature Cards */}
                  <div className="space-y-6">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Lightning Fast</h4>
                        <p className="text-sm text-slate-600">Optimized performance and rapid delivery</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Quality Assured</h4>
                        <p className="text-sm text-slate-600">Rigorous testing and quality control</p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">24/7 Support</h4>
                        <p className="text-sm text-slate-600">Round-the-clock technical assistance</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center group">
                        <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <AnimatedCounter end={98} suffix="%" duration={2000} />
                        </div>
                        <div className="text-xs text-slate-500">Satisfaction</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          <AnimatedCounter end={24} suffix="/7" duration={1500} />
                        </div>
                        <div className="text-xs text-slate-500">Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 animate-fade-in-up">Technologies We Master</h3>
            <p className="text-lg text-slate-600 mb-12 animate-fade-in-up delay-200">Cutting-edge tools and frameworks for modern development</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", icon: "/images/icons/react.png" },
                { name: "Next.js", icon: "/images/icons/nextjs.png" },
                { name: "TypeScript", icon: "/images/icons/typescript.png" },
                { name: "Node.js", icon: "/images/icons/nodejs.png" },
                { name: "Python", icon: "/images/icons/python.png" },
                { name: "AWS", icon: "/images/icons/aws.png" },
                { name: "Docker", icon: "/images/icons/docker.png" },
                { name: "MongoDB", icon: "/images/icons/mongodb.png" },
                { name: "PostgreSQL", icon: "/images/icons/postgresql.png" },
                { name: "Redis", icon: "/images/icons/redis.png" },
                { name: "GraphQL", icon: "/images/icons/graphql.jpeg" },
                { name: "Kubernetes", icon: "/images/icons/kubernatives.png" },
                { name: "ESP32", icon: "/images/icons/esp32.jpeg" },
                { name: "Arduino", icon: "/images/icons/ardunino.png" },
                { name: "STM32", icon: "/images/icons/stm32.jpeg" },
                { name: "KiCAD", icon: "/images/icons/kicad.jpeg" },
                { name: "DipTrace", icon: "/images/icons/Diptrace.jpeg" },
                { name: "SolidWorks", icon: "/images/icons/SolidWorks.png" }
              ].map((tech, index) => (
                <div key={index} className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/40 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out animate-scale-in delay-${Math.min(index * 100, 800)} animate-tech-bounce`}>
                  <div className="h-20 w-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl animate-slide-in-bottom animate-gradient-shift">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Let&apos;s discuss your project and see how SavantX can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 ease-out font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl animate-scale-in delay-300 hover:animate-pulse-glow">
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg">🚀</span>
                  Start Your Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/about" className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 ease-out font-semibold text-lg transform hover:scale-105 hover:shadow-lg animate-scale-in delay-400">
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg">📅</span>
                  Schedule Consultation
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <CompaniesSection />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      <Footer />
    </div>
  );
}
