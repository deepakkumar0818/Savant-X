'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

// TypeScript interfaces for type safety
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  companyName?: string;
  logo?: string;
  navItems?: NavItem[];
  className?: string;
}

// Default navigation items for a company website
const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { 
    label: 'Expertise', 
    href: '/expertise',
    children: [
      { label: 'What We Do', href: '/expertise/what-we-do' },
      { label: 'Websites', href: '/expertise/websites' },
      { label: 'Web Apps', href: '/expertise/web-apps' },
      { label: 'Mobile Apps', href: '/expertise/mobile-apps' },
      { label: 'E-commerce', href: '/expertise/ecommerce' },
      { label: 'Design & UX', href: '/expertise/design-ux' },
      { label: 'Technology', href: '/expertise/technology' },
      { label: 'Experience', href: '/expertise/experience' }
    ]
  },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar({ 
  companyName = 'SavantX', 
  logo,
  navItems = defaultNavItems,
  className = ''
}: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Function to get the active item based on current pathname
  const getActiveItem = () => {
    if (pathname === '/') return 'Home';
    if (pathname === '/about') return 'About';
    if (pathname === '/work') return 'Work';
    if (pathname === '/products') return 'Products';
    if (pathname === '/contact') return 'Contact';
    
    // Check for expertise pages
    if (pathname.startsWith('/expertise')) {
      // Check for specific expertise pages
      if (pathname.includes('/websites')) return 'Expertise';
      if (pathname.includes('/web-apps')) return 'Expertise';
      if (pathname.includes('/mobile-apps')) return 'Expertise';
      if (pathname.includes('/ecommerce')) return 'Expertise';
      if (pathname.includes('/user-research')) return 'Expertise';
      if (pathname.includes('/ui-ux-design')) return 'Expertise';
      if (pathname.includes('/prototyping')) return 'Expertise';
      if (pathname.includes('/design-systems')) return 'Expertise';
      if (pathname.includes('/zoho-integrations')) return 'Expertise';
      if (pathname.includes('/react')) return 'Expertise';
      if (pathname.includes('/payload-cms')) return 'Expertise';
      if (pathname.includes('/laravel')) return 'Expertise';
      if (pathname.includes('/wordpress')) return 'Expertise';
      if (pathname.includes('/commercial')) return 'Expertise';
      if (pathname.includes('/not-for-profit')) return 'Expertise';
      if (pathname.includes('/innovation')) return 'Expertise';
      if (pathname.includes('/education-industrial-training')) return 'Expertise';
      if (pathname.includes('/community')) return 'Expertise';
      if (pathname.includes('/what-we-do')) return 'Expertise';
      if (pathname.includes('/technology')) return 'Expertise';
      if (pathname.includes('/experience')) return 'Expertise';
      return 'Expertise';
    }
    
    return 'Home';
  };
  
  const currentActiveItem = getActiveItem();

  // Handle click outside to close dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close desktop dropdown if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      
      // Close mobile menu if clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Add event listener when dropdown or mobile menu is open
    if (activeDropdown || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 backdrop-blur-md sticky top-0 z-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-90 transition-all duration-300 ease-out"
              onClick={closeMobileMenu}
            >
              {logo ? (
                <img 
                  src={logo} 
                  alt={`${companyName} logo`} 
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <img 
                  src="/images/logos/Logo.png" 
                  alt={`${companyName} logo`} 
                  className="h-10 w-auto object-contain"
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation - Pill Container */}
          <div className="hidden md:flex items-center" ref={dropdownRef}>
            <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-blue-200/60 transition-all duration-300 ease-out">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative">
                    {item.children ? (
                      <div className="relative">
                                                 <button
                           onClick={() => toggleDropdown(item.label)}
                           className={`px-4 py-2 rounded-full transition-all duration-300 ease-out font-semibold text-sm tracking-wide transform hover:scale-105 ${
                             currentActiveItem === item.label
                               ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                               : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                           }`}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup="true"
                        >
                          {item.label}
                        </button>
                        
                                                 {/* Dropdown Menu */}
                         <div 
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg border border-slate-200/50 border-t-0 transition-all duration-300 ease-out z-50 ${
                             activeDropdown === item.label 
                               ? 'opacity-100 visible translate-y-0 scale-100' 
                                : 'opacity-0 invisible -translate-y-2 scale-95'
                            } ${activeDropdown === 'Expertise' ? 'w-[900px]' : 'w-[700px]'}`}
                          >
                           {item.label === 'Expertise' ? (
                             <div className="p-6">
                               <div className="grid grid-cols-4 gap-6">
                                 {/* What We Do */}
                                 <div className="space-y-3">
                                   <h3 className="font-bold text-slate-900 text-sm mb-4">
                                     What We Do
                                   </h3>
                                   <ul className="space-y-3">
                                     <li>
                                       <Link href="/expertise/websites" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">✈️</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Websites</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/web-apps" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                         <span className="text-lg">💎</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Web Apps</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/mobile-apps" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">📱</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Mobile Apps</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/ecommerce" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 active:bg-green-200 transition-all duration-200 group">
                                         <span className="text-lg">🛍️</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 group-active:text-green-800">eCommerce</span>
                                       </Link>
                                     </li>
                                   </ul>
                                 </div>

                                 {/* Design & UX */}
                                 <div className="space-y-3">
                                   <h3 className="font-bold text-slate-900 text-sm mb-4">
                                     Design & UX
                                   </h3>
                                   <ul className="space-y-3">
                                     <li>
                                       <Link href="/expertise/user-research" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                         <span className="text-lg">👥</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">User Research</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/ui-ux-design" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">🎨</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">UI/UX Design</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/prototyping" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">🔧</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Prototyping</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/design-systems" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 active:bg-green-200 transition-all duration-200 group">
                                         <span className="text-lg">🎨</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 group-active:text-green-800">Design Systems</span>
                                       </Link>
                                     </li>
                                   </ul>
                                 </div>

                                 {/* Technology */}
                                 <div className="space-y-3">
                                   <h3 className="font-bold text-slate-900 text-sm mb-4">
                                     Technology
                                   </h3>
                                   <ul className="space-y-3">
                                     <li>
                                       <Link href="/expertise/zoho-integrations" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                         <span className="text-lg">🔗</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">Zoho Integrations</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/react" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">⚛️</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">React.js</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/payload-cms" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 group">
                                         <span className="text-lg">🔄</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-gray-700 group-active:text-gray-800">Payload CMS</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/laravel" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                         <span className="text-lg">🔥</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Laravel</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/wordpress" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg font-bold text-blue-600">W</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">WordPress</span>
                                       </Link>
                                     </li>
                                   </ul>
                                 </div>

                                 {/* Experience */}
                                 <div className="space-y-3">
                                   <h3 className="font-bold text-slate-900 text-sm mb-4">
                                     Experience
                                   </h3>
                                   <ul className="space-y-3">
                                     <li>
                                       <Link href="/expertise/commercial" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">🏢</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Commercial</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/not-for-profit" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                         <span className="text-lg">❤️</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Not for Profit</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/innovation" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                         <span className="text-lg">〰️</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">Innovation</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/education-industrial-training" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-100 active:bg-yellow-200 transition-all duration-200 group">
                                         <span className="text-lg">🎓</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-yellow-700 group-active:text-yellow-800">Education Industrial Training</span>
                                       </Link>
                                     </li>
                                     <li>
                                       <Link href="/expertise/community" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                         <span className="text-lg">😊</span>
                                         <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Community</span>
                                       </Link>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           ) : (
                           <div className="py-3">
                             {item.children.map((child) => (
                               <Link
                                 key={child.label}
                                 href={child.href}
                                 className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium transform hover:translate-x-1"
                                 onClick={() => setActiveDropdown(null)}
                               >
                                 {child.label}
                               </Link>
                             ))}
                           </div>
                           )}
                         </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ease-out font-semibold text-sm tracking-wide transform hover:scale-105 ${
                          currentActiveItem === item.label
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="text-blue-600 px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-300 ease-out font-medium text-sm hover:text-blue-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-blue-600 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-blue-50 transform hover:scale-110"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

                 {/* Mobile Navigation Menu */}
         <div 
           ref={mobileMenuRef}
           className={`md:hidden transition-all duration-300 ease-in-out ${
             isMobileMenuOpen 
               ? 'max-h-screen opacity-100 visible' 
               : 'max-h-0 opacity-0 invisible'
           }`}
         >
           <div className="px-4 pt-4 pb-6 space-y-2 border-t border-blue-200/60 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl transform">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                                         <button
                       onClick={() => toggleDropdown(item.label)}
                       className={`flex items-center justify-between w-full px-4 py-3 text-left transition-all duration-300 ease-out font-semibold text-sm rounded-xl transform hover:scale-105 ${
                         currentActiveItem === item.label
                           ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                           : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                       }`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ease-out ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div 
                      className={`transition-all duration-300 ease-out ${
                        activeDropdown === item.label 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="pl-4 space-y-1 mt-2">
                        {item.label === 'Expertise' ? (
                          <div className="space-y-4">
                            {/* What We Do */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">What We Do</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/websites" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Websites</Link>
                                <Link href="/expertise/web-apps" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Web Apps</Link>
                                <Link href="/expertise/mobile-apps" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Mobile Apps</Link>
                                <Link href="/expertise/ecommerce" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>eCommerce</Link>
                              </div>
                            </div>
                            
                            {/* Design & UX */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">Design & UX</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/user-research" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>User Research</Link>
                                <Link href="/expertise/ui-ux-design" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>UI/UX Design</Link>
                                <Link href="/expertise/prototyping" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Prototyping</Link>
                                <Link href="/expertise/design-systems" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Design Systems</Link>
                              </div>
                            </div>
                            
                            {/* Technology */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">Technology</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/zoho-integrations" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Zoho Integrations</Link>
                                <Link href="/expertise/react" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>React.js</Link>
                                <Link href="/expertise/payload-cms" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Payload CMS</Link>
                                <Link href="/expertise/laravel" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Laravel</Link>
                                <Link href="/expertise/wordpress" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>WordPress</Link>
                              </div>
                            </div>
                            
                            {/* Experience */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">Experience</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/commercial" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Commercial</Link>
                                <Link href="/expertise/not-for-profit" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Not for Profit</Link>
                                <Link href="/expertise/innovation" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Innovation</Link>
                                <Link href="/expertise/education-industrial-training" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Education Industrial Training</Link>
                                <Link href="/expertise/community" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Community</Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          item.children.map((child) => (
                                                     <Link
                             key={child.label}
                             href={child.href}
                             className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium rounded-lg transform hover:translate-x-1"
                             onClick={closeMobileMenu}
                           >
                             {child.label}
                           </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                                     <Link
                     href={item.href}
                     className={`block px-4 py-3 transition-all duration-300 ease-out font-semibold text-sm rounded-xl transform hover:scale-105 ${
                       currentActiveItem === item.label
                         ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                         : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                     }`}
                     onClick={handleNavClick}
                   >
                     {item.label}
                   </Link>
                )}
              </div>
            ))}
            
                         {/* Mobile Contact Button */}
             <div className="pt-4 border-t border-blue-200/60 text-center">
               <Link
                 href="/contact"
                 className="inline-block text-blue-600 px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 ease-out font-medium hover:text-blue-700"
               >
                 Contact Us
               </Link>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
