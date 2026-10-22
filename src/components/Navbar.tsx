'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  AppWindow,
  Smartphone,
  ShoppingCart,
  Search,
  Palette,
  MousePointerClick,
  Component,
  Box,
  Sparkles,
  Code,
  Layers,
  Server,
  Newspaper,
  Radio,
  CircuitBoard,
  Package,
  Cpu,
  Building2,
  HeartHandshake,
  Lightbulb,
  GraduationCap,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

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

interface ExpertiseLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface ExpertiseGroup {
  title: string;
  /** Only set when a real overview page exists for the group. */
  href?: string;
  links: ExpertiseLink[];
}

const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    title: 'What We Do',
    href: '/expertise/what-we-do',
    links: [
      { label: 'Websites', href: '/expertise/websites', icon: Globe },
      { label: 'Web Apps', href: '/expertise/web-apps', icon: AppWindow },
      { label: 'Mobile Apps', href: '/expertise/mobile-apps', icon: Smartphone },
      { label: 'eCommerce', href: '/expertise/ecommerce', icon: ShoppingCart },
    ],
  },
  {
    title: 'Design & UX',
    links: [
      { label: 'User Research', href: '/expertise/user-research', icon: Search },
      { label: 'UI/UX Design', href: '/expertise/ui-ux-design', icon: Palette },
      { label: 'Prototyping', href: '/expertise/prototyping', icon: MousePointerClick },
      { label: 'Design Systems', href: '/expertise/design-systems', icon: Component },
      { label: '3D Designing', href: '/expertise/3d-designing', icon: Box },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'GenAI', href: '/expertise/genai', icon: Sparkles },
      { label: 'MERN Stack', href: '/expertise/react', icon: Code },
      { label: 'Payload CMS', href: '/expertise/payload-cms', icon: Layers },
      { label: 'Laravel', href: '/expertise/laravel', icon: Server },
      { label: 'WordPress', href: '/expertise/wordpress', icon: Newspaper },
    ],
  },
  {
    title: 'Hardware & Electronics',
    href: '/expertise/hardware-electronics',
    links: [
      { label: 'IoT & Embedded Systems', href: '/expertise/iot-embedded-systems', icon: Radio },
      { label: 'PCB Designing', href: '/expertise/pcb-design', icon: CircuitBoard },
      { label: 'Product Development', href: '/expertise/product-development', icon: Package },
      { label: 'Firmware Development', href: '/expertise/firmware-development', icon: Cpu },
    ],
  },
  {
    title: 'Experience',
    links: [
      { label: 'Commercial', href: '/expertise/commercial', icon: Building2 },
      { label: 'Not for Profit', href: '/expertise/not-for-profit', icon: HeartHandshake },
      { label: 'Innovation', href: '/expertise/innovation', icon: Lightbulb },
      { label: 'Education & Industrial Training', href: '/expertise/education-industrial-training', icon: GraduationCap },
      { label: 'Community', href: '/expertise/community', icon: UsersRound },
    ],
  },
];

const EXPERTISE_LABEL = 'Expertise';

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Zoho', href: '/expertise/zoho-integrations' },
  {
    label: EXPERTISE_LABEL,
    href: '/expertise',
    children: EXPERTISE_GROUPS.flatMap((group) => [
      ...(group.href ? [{ label: group.title, href: group.href }] : []),
      ...group.links.map(({ label, href }) => ({ label, href })),
    ]),
  },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

function normalizePath(pathname: string | null): string {
  if (!pathname) return '';
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function matches(current: string, href: string): boolean {
  const target = normalizePath(href);
  return current === target || current.startsWith(`${target}/`);
}

export default function Navbar({
  companyName = 'SavantX',
  logo = '/images/logos/Logo.png',
  navItems = defaultNavItems,
  className = '',
}: NavbarProps) {
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

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

  const closeAll = useCallback(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, []);

  // Close menus after navigation.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Close the mobile menu if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (mq.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Click outside and Escape close any open menu.
  useEffect(() => {
    if (!activeDropdown && !isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if ((target as HTMLElement).closest?.('a')) return;
      if (mobileToggleRef.current?.contains(target)) return;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const wasMobile = isMobileMenuOpen;
      closeAll();
      if (wasMobile) mobileToggleRef.current?.focus();
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown, isMobileMenuOpen, closeAll]);

  const isItemActive = (item: NavItem) => {
    const href = normalizePath(item.href);

    if (href === '/') return current === '/' || current === '';

    // Zoho has its own top-level item, so Expertise should not also highlight there.
    if (item.label === EXPERTISE_LABEL && current.startsWith('/expertise/zoho-integrations')) {
      return false;
    }

    if (matches(current, href)) return true;
    return item.children?.some((child) => matches(current, child.href)) ?? false;
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((open) => (open === label ? null : label));
  };

  const pillClass = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out motion-safe:hover:scale-105 ${
      active ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
    }`;

  const mobileItemClass = (active: boolean) =>
    `block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 ${
      active ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white transition-[box-shadow,border-color] duration-300 ${
        scrolled ? 'shadow-sm' : 'shadow-none'
      } ${className}`}
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex h-[4.25rem] w-full items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center transition-all duration-300 ease-out hover:opacity-90"
              onClick={closeAll}
            >
              <img src={logo} alt={`${companyName} logo`} width={113} height={40} className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex" ref={dropdownRef}>
            <div className="rounded-full border border-slate-200/90 bg-white px-4 py-1.5 shadow-sm">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  const open = activeDropdown === item.label;
                  const isMega = item.label === EXPERTISE_LABEL;

                  if (!item.children) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className={pillClass(active)}
                          aria-current={matches(current, item.href) ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    // The mega menu is positioned against the <nav>, so its wrapper must not be relative.
                    <li key={item.label} className={isMega ? 'static' : 'relative'}>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className={`${pillClass(active)} inline-flex items-center gap-1`}
                        aria-expanded={open}
                        aria-controls={`nav-menu-${item.label}`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      </button>

                      <div
                        id={`nav-menu-${item.label}`}
                        className={`absolute top-full z-50 rounded-b-2xl border border-t-0 border-slate-200/50 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 ease-out ${
                          isMega
                            ? 'left-1/2 w-[min(64rem,calc(100vw-2rem))] -translate-x-1/2'
                            : 'left-1/2 w-64 -translate-x-1/2'
                        } ${
                          open
                            ? 'visible translate-y-0 opacity-100'
                            : 'pointer-events-none invisible -translate-y-2 opacity-0'
                        }`}
                      >
                        {isMega ? (
                          <div className="grid grid-cols-5 gap-4 p-6 xl:gap-6">
                            {EXPERTISE_GROUPS.map((group) => (
                              <div key={group.title}>
                                {group.href ? (
                                  <Link
                                    href={group.href}
                                    onClick={closeAll}
                                    className="mb-3 block text-sm font-bold text-slate-900 transition-colors duration-200 hover:text-indigo-600"
                                  >
                                    {group.title}
                                  </Link>
                                ) : (
                                  <p className="mb-3 text-sm font-bold text-slate-900">{group.title}</p>
                                )}
                                <ul className="space-y-1">
                                  {group.links.map(({ label, href, icon: Icon }) => (
                                    <li key={href}>
                                      <Link
                                        href={href}
                                        onClick={closeAll}
                                        aria-current={matches(current, href) ? 'page' : undefined}
                                        className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors duration-200 hover:bg-indigo-50 active:bg-indigo-100"
                                      >
                                        <Icon
                                          className="h-4 w-4 flex-shrink-0 text-indigo-500 group-hover:text-indigo-700"
                                          aria-hidden
                                        />
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">
                                          {label}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="py-3">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={closeAll}
                                  className="block px-5 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden flex-shrink-0 items-center lg:flex">
            <LetsBuildLink onClick={closeAll} />
          </div>

          {/* Mobile menu button */}
          <div className="flex-shrink-0 lg:hidden">
            <button
              ref={mobileToggleRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors duration-300 ease-out hover:bg-indigo-50 hover:text-indigo-600"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile navigation: scrolls inside the viewport so every link stays reachable */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? 'visible max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain opacity-100'
              : 'invisible max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <ul className="space-y-1 border-t border-slate-100 bg-white pb-6 pt-4">
            {navItems.map((item) => {
              const active = isItemActive(item);
              const open = activeDropdown === item.label;

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={mobileItemClass(active)}
                      aria-current={matches(current, item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    className={`${mobileItemClass(active)} flex items-center justify-between`}
                    aria-expanded={open}
                    aria-controls={`mobile-menu-${item.label}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>

                  {open && (
                    <div id={`mobile-menu-${item.label}`} className="mt-2 pl-4">
                      {item.label === EXPERTISE_LABEL ? (
                        <div className="space-y-4">
                          {EXPERTISE_GROUPS.map((group) => (
                            <div key={group.title}>
                              {group.href ? (
                                <Link
                                  href={group.href}
                                  onClick={closeAll}
                                  className="mb-1 block px-3 py-1.5 text-sm font-semibold text-slate-800 hover:text-indigo-600"
                                >
                                  {group.title}
                                </Link>
                              ) : (
                                <p className="mb-1 px-3 py-1.5 text-sm font-semibold text-slate-800">{group.title}</p>
                              )}
                              <ul className="space-y-0.5 pl-2">
                                {group.links.map(({ label, href, icon: Icon }) => (
                                  <li key={href}>
                                    <Link
                                      href={href}
                                      onClick={closeAll}
                                      aria-current={matches(current, href) ? 'page' : undefined}
                                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                                    >
                                      <Icon className="h-4 w-4 flex-shrink-0 text-indigo-500" aria-hidden />
                                      {label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeAll}
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}

            <li className="border-t border-blue-200/60 pt-4 text-center">
              <LetsBuildLink onClick={closeAll} large />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function LetsBuildLink({ onClick, large = false }: { onClick: () => void; large?: boolean }) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`group relative inline-block transform rounded-2xl border border-blue-400/30 font-semibold text-white shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25 ${
        large ? 'px-8 py-3' : 'px-6 py-2.5 text-sm hover:scale-105'
      }`}
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="pointer-events-none relative block" aria-hidden>
          <span
            className={`block transform rounded bg-white/20 transition-transform duration-300 group-hover:rotate-12 ${
              large ? 'h-6 w-6' : 'h-5 w-5'
            }`}
            style={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <span className="absolute left-0 top-0 block h-full w-full rotate-45 transform rounded bg-gradient-to-br from-white/40 to-transparent" />
          </span>
        </span>
        Let&apos;s Build
        <svg
          className={`transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-12 ${
            large ? 'h-5 w-5' : 'h-4 w-4'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}
