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
  { label: 'Zoho', href: '/expertise/zoho-integrations' },
  { 
    label: 'Expertise', 
    href: '/expertise',
    children: [
      { label: 'What We Do', href: '/expertise/what-we-do' },
      { label: 'Websites', href: '/expertise/websites' },
      { label: 'Web Apps', href: '/expertise/web-apps' },
      { label: 'Mobile Apps', href: '/expertise/mobile-app' },
      { label: 'E-commerce', href: '/expertise/ecommerce' },
      { label: 'Design & UX', href: '/expertise/design-ux' },
      { label: 'Technology', href: '/expertise/technology' },
      { label: 'Experience', href: '/expertise/experience' }
    ]
  },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' }
];

function normalizePath(pathname: string | null): string {
  if (!pathname) return '';
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default function Navbar({ 
  companyName = 'SavantX', 
  logo,
  navItems = defaultNavItems,
  className = ''
}: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let scrolledNow = false;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const next = window.scrollY > 12;
        if (next !== scrolledNow) {
          scrolledNow = next;
          setScrolled(next);
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  
  // Function to check if a nav item is active
  const isItemActive = (item: NavItem) => {
    const current = normalizePath(pathname);
    const href = normalizePath(item.href);

    // Exact match for home page
    if (href === '/' && (current === '/' || current === '')) {
      return true;
    }

    // Zoho is a top-level item under /expertise/zoho-integrations — match it specifically
    if (href === '/expertise/zoho-integrations') {
      return current === href || current.startsWith(`${href}/`);
    }

    // Expertise should not stay active on dedicated Zoho routes
    if (href === '/expertise') {
      if (current.startsWith('/expertise/zoho-integrations')) {
        return false;
      }
      if (current === href || current.startsWith(`${href}/`)) {
        return true;
      }
      if (item.children) {
        return item.children.some((child) => {
          const childHref = normalizePath(child.href);
          return current === childHref || current.startsWith(`${childHref}/`);
        });
      }
      return false;
    }

    // For other non-home pages, check if pathname starts with the item's href
    if (href !== '/' && (current === href || current.startsWith(`${href}/`))) {
      return true;
    }

    // Check if any child item matches (for dropdown menus)
    if (item.children) {
      return item.children.some((child) => {
        const childHref = normalizePath(child.href);
        return current === childHref || current.startsWith(`${childHref}/`);
      });
    }

    return false;
  };

  // Handle click outside to close dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Don't close if clicking on a link (let it navigate first)
      if ((target as HTMLElement).closest('a')) {
        return;
      }
      
      // Close desktop dropdown if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
      }
      
      // Close mobile menu if clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Add event listener when dropdown or mobile menu is open
    // Use 'click' instead of 'mousedown' to avoid interfering with link navigation
    if (activeDropdown || isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
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
    <nav
      className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white transition-[box-shadow,border-color] duration-300 ${
        scrolled ? 'shadow-sm' : 'shadow-none'
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex h-[4.25rem] w-full items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
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
            <div className="rounded-full border border-slate-200/90 bg-white px-4 py-1.5 shadow-sm">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {navItems.map((item) => (
                  <div key={item.label} className="relative">
                    {item.children ? (
                      <div className="relative">
                                                 <button
                           onClick={() => toggleDropdown(item.label)}
                           className={`rounded-full px-3 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out motion-safe:hover:scale-105 ${
                            isItemActive(item)
                               ? 'bg-indigo-600 text-white shadow-sm'
                               : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
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
                                : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                            } ${activeDropdown === 'Expertise' ? 'w-[1000px]' : 'w-[700px]'}`}
                            suppressHydrationWarning
                          >
                           {item.label === 'Expertise' ? (
                            <div className="p-6">
                              <div className="grid grid-cols-5 gap-6">
                                {/* What We Do */}
                                <div className="space-y-3">
                                  <Link href="/expertise/what-we-do" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="block">
                                    <h3 className="font-bold text-slate-900 text-sm mb-4 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                      What We Do
                                    </h3>
                                  </Link>
                                  <ul className="space-y-3">
                                    <li>
                                      <Link href="/expertise/websites" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">✈️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Websites</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/web-apps" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                        <span className="text-lg">💎</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Web Apps</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/mobile-apps" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">📱</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Mobile Apps</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/ecommerce" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 active:bg-green-200 transition-all duration-200 group">
                                        <span className="text-lg">🛍️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 group-active:text-green-800">eCommerce</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/zoho-integrations" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                        <span className="text-lg">🔗</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">Zoho Integrations</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                {/* Design & UX */}
                                <div className="space-y-3">
                                  <Link href="/expertise/design-ux" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="block">
                                    <h3 className="font-bold text-slate-900 text-sm mb-4 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                      Design & UX
                                    </h3>
                                  </Link>
                                  <ul className="space-y-3">
                                    <li>
                                      <Link href="/expertise/user-research" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                        <span className="text-lg">👥</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">User Research</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/ui-ux-design" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">🎨</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">UI/UX Design</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/prototyping" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">🔧</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Prototyping</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/design-systems" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 active:bg-green-200 transition-all duration-200 group">
                                        <span className="text-lg">🎨</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 group-active:text-green-800">Design Systems</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/3d-designing" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-100 active:bg-cyan-200 transition-all duration-200 group">
                                        <span className="text-lg">🎭</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-cyan-700 group-active:text-cyan-800">3D Designing</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                {/* Technology */}
                                <div className="space-y-3">
                                  <Link href="/expertise/technology" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="block">
                                    <h3 className="font-bold text-slate-900 text-sm mb-4 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                      Technology
                                    </h3>
                                  </Link>
                                  <ul className="space-y-3">
                                    <li>
                                      <Link href="/expertise/genai" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition-all duration-200 group">
                                        <span className="text-lg">🤖</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700 group-active:text-indigo-800">GenAI</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/react" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">⚛️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">MERN Stack</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/payload-cms" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 group">
                                        <span className="text-lg">🔄</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-gray-700 group-active:text-gray-800">Payload CMS</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/laravel" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                        <span className="text-lg">🔥</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Laravel</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/wordpress" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg font-bold text-blue-600">W</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">WordPress</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                {/* Hardware and Electronics */}
                                <div className="space-y-3">
                                  <h3 className="font-bold text-slate-900 text-sm mb-4">
                                    Hardware and Electronics
                                  </h3>
                                  <ul className="space-y-3">
                                    <li>
                                      <Link href="/expertise/iot-embedded-systems" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-100 active:bg-cyan-200 transition-all duration-200 group">
                                        <span className="text-lg">📡</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-cyan-700 group-active:text-cyan-800">IoT & Embedded Systems</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/pcb-design" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 active:bg-green-200 transition-all duration-200 group">
                                        <span className="text-lg">🔌</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 group-active:text-green-800">PCB Designing</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/product-development" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-100 active:bg-orange-200 transition-all duration-200 group">
                                        <span className="text-lg">🛠️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-orange-700 group-active:text-orange-800">Product Development</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/firmware-development" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                        <span className="text-lg">⚙️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">Firmware Development</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                {/* Experience */}
                                <div className="space-y-3">
                                  <Link href="/expertise/experience" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="block">
                                    <h3 className="font-bold text-slate-900 text-sm mb-4 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                      Experience
                                    </h3>
                                  </Link>
                                  <ul className="space-y-3">
                                    <li>
                                      <Link href="/expertise/commercial" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
                                        <span className="text-lg">🏢</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 group-active:text-blue-800">Commercial</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/not-for-profit" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100 active:bg-pink-200 transition-all duration-200 group">
                                        <span className="text-lg">❤️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-pink-700 group-active:text-pink-800">Not for Profit</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/innovation" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 group">
                                        <span className="text-lg">〰️</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700 group-active:text-purple-800">Innovation</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/education-industrial-training" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-100 active:bg-yellow-200 transition-all duration-200 group">
                                        <span className="text-lg">🎓</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-yellow-700 group-active:text-yellow-800">Education Industrial Training</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/expertise/community" onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all duration-200 group">
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
                                 onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
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
                        className={`rounded-full px-3 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out motion-safe:hover:scale-105 ${
                          isItemActive(item)
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
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

          {/* Interactive 3D Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="group relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out font-semibold text-sm shadow-2xl hover:shadow-blue-500/25 hover:shadow-2xl border border-blue-400/30"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* 3D Cube Icon */}
              <span className="flex items-center gap-2 relative z-10">
                <div className="relative pointer-events-none">
                  <div className="w-5 h-5 bg-white/20 rounded transform group-hover:rotate-12 transition-transform duration-300" style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded transform rotate-45"></div>
                  </div>
                </div>
                Let&apos;s Build
                <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
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
          <div className="border-t border-slate-100 bg-white pt-4 pb-6 space-y-2 shadow-xl backdrop-blur-md">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                                         <button
                       onClick={() => toggleDropdown(item.label)}
                       className={`flex items-center justify-between w-full px-4 py-3 text-left transition-all duration-300 ease-out font-semibold text-sm rounded-xl transform hover:scale-105 ${
                        isItemActive(item)
                           ? 'bg-indigo-600 text-white shadow-sm'
                           : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
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
                                <Link href="/expertise/zoho-integrations" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Zoho Integrations</Link>
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
                                <Link href="/expertise/3d-designing" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>3D Designing</Link>
                              </div>
                            </div>
                            
                            {/* Technology */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">Technology</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/genai" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>GEnAI</Link>
                                <Link href="/expertise/react" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>MERN Stack</Link>
                                <Link href="/expertise/payload-cms" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Payload CMS</Link>
                                <Link href="/expertise/laravel" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Laravel</Link>
                                <Link href="/expertise/wordpress" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>WordPress</Link>
                              </div>
                            </div>
                            
                            {/* Hardware and Electronics */}
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm">Hardware and Electronics</h4>
                              <div className="space-y-1 pl-2">
                                <Link href="/expertise/iot-embedded-systems" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>IoT & Embedded Systems</Link>
                                <Link href="/expertise/pcb-design" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>PCB Designing</Link>
                                <Link href="/expertise/product-development" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Product Development</Link>
                                <Link href="/expertise/firmware-development" className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded" onClick={closeMobileMenu}>Firmware Development</Link>
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
                      isItemActive(item)
                         ? 'bg-indigo-600 text-white shadow-sm'
                         : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                     }`}
                     onClick={handleNavClick}
                   >
                     {item.label}
                   </Link>
                )}
              </div>
            ))}
            
                         {/* Mobile Interactive 3D Button */}
             <div className="pt-4 border-t border-blue-200/60 text-center">
               <Link
                 href="/contact"
                 onClick={closeMobileMenu}
                 className="group relative inline-block text-white px-8 py-3 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out font-semibold shadow-2xl hover:shadow-blue-500/25 hover:shadow-2xl border border-blue-400/30"
                 style={{
                   background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                   boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                 }}
               >
                 <span className="flex items-center gap-2 justify-center relative z-10">
                   <div className="relative pointer-events-none">
                     <div className="w-6 h-6 bg-white/20 rounded transform group-hover:rotate-12 transition-transform duration-300" style={{
                       background: 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                       boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.1)'
                     }}>
                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded transform rotate-45"></div>
                     </div>
                   </div>
                   Let&apos;s Build
                   <svg className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </span>
                 {/* Animated background glow */}
                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
