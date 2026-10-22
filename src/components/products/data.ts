import {
  Building2,
  Calculator,
  GraduationCap,
  HeartPulse,
  Home,
  School,
  Search,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

/**
 * SavantX product catalog. Client counts, ratings and prices are deliberately not shown:
 * there is no verified source for them. Add them here only once they are confirmed.
 */
export type ProductCategory = 'healthcare' | 'food' | 'realestate' | 'education' | 'finance' | 'logistics' | 'business-tools';

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  summary: string;
  description: string;
  highlights: string[];
  features: string[];
  technology: string[];
  icon: LucideIcon;
  /** Real screenshot of the product, when we have one. */
  screenshot?: { src: string; alt: string; width: number; height: number };
};

export const CATEGORIES: { id: ProductCategory | 'all'; label: string; icon?: LucideIcon }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
  { id: 'food', label: 'Food & Hospitality', icon: UtensilsCrossed },
  { id: 'realestate', label: 'Real Estate', icon: Building2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'finance', label: 'Finance', icon: Calculator },
  { id: 'logistics', label: 'Logistics', icon: Truck },
  { id: 'business-tools', label: 'Business Tools', icon: Search },
];

export const CATEGORY_STYLE: Record<ProductCategory, { label: string; text: string; tile: string; check: string; tint: string }> = {
  healthcare: { label: 'Healthcare', text: 'text-emerald-600', tile: 'bg-emerald-500', check: 'bg-emerald-500', tint: 'from-emerald-50 to-teal-50' },
  food: { label: 'Food & Hospitality', text: 'text-orange-600', tile: 'bg-orange-500', check: 'bg-orange-500', tint: 'from-orange-50 to-amber-50' },
  realestate: { label: 'Real Estate', text: 'text-violet-600', tile: 'bg-violet-500', check: 'bg-violet-500', tint: 'from-violet-50 to-indigo-50' },
  education: { label: 'Education', text: 'text-rose-600', tile: 'bg-rose-500', check: 'bg-rose-500', tint: 'from-rose-50 to-pink-50' },
  finance: { label: 'Finance', text: 'text-blue-600', tile: 'bg-blue-600', check: 'bg-blue-600', tint: 'from-blue-50 to-sky-50' },
  logistics: { label: 'Logistics', text: 'text-purple-600', tile: 'bg-purple-600', check: 'bg-purple-600', tint: 'from-purple-50 to-fuchsia-50' },
  'business-tools': { label: 'Business Tools', text: 'text-indigo-600', tile: 'bg-indigo-600', check: 'bg-indigo-600', tint: 'from-indigo-50 to-blue-50' },
};

export const PRODUCTS: Product[] = [
  {
    id: 'sehat-setu',
    name: 'Sehat Setu',
    subtitle: 'Clinic & Hospital Management System',
    category: 'healthcare',
    summary: 'Complete healthcare management with patient records, appointments, telemedicine and more.',
    description:
      'Comprehensive healthcare management platform enabling patients to book appointments, manage medical records and communicate with healthcare providers seamlessly.',
    highlights: ['Patient records', 'Appointment scheduling', 'Telemedicine support', 'Prescription management'],
    features: ['Online booking', 'Patient records', 'Appointment scheduling', 'Prescription management', 'Telemedicine support'],
    technology: ['React', 'Node.js', 'PostgreSQL'],
    icon: HeartPulse,
    screenshot: { src: '/images/work/sehat-setu-hero.webp', alt: 'Sehat Setu clinic management dashboard', width: 1345, height: 841 },
  },
  {
    id: 'food-ordering',
    name: 'Food Ordering App',
    subtitle: 'Restaurant & Catering Solution',
    category: 'food',
    summary: 'Complete food ordering, menu management, delivery tracking and customer engagement.',
    description:
      'Complete food delivery solution with restaurant management, order tracking, payment processing and real-time delivery updates for a better customer experience.',
    highlights: ['Menu management', 'Order tracking', 'Payment gateway', 'Restaurant dashboard'],
    features: ['Menu management', 'Order tracking', 'Payment gateway', 'Delivery management', 'Restaurant dashboard'],
    technology: ['React Native', 'Express', 'MongoDB'],
    icon: UtensilsCrossed,
    screenshot: { src: '/images/work/savantx-eats-dashboard.webp', alt: 'Food ordering app restaurant dashboard', width: 1536, height: 1024 },
  },
  {
    id: 'real-estate',
    name: 'Real Estate App',
    subtitle: 'Property Management Solution',
    category: 'realestate',
    summary: 'Manage properties, listings, agents and buyer enquiries in one place.',
    description:
      'Property management platform with property listings, virtual tours, mortgage calculators and real estate analytics for agents and buyers.',
    highlights: ['Property listings', 'Virtual tours', 'Agent management', 'Market analytics'],
    features: ['Property listings', 'Virtual tours', 'Mortgage calculator', 'Agent management', 'Market analytics'],
    technology: ['Next.js', 'Laravel', 'MySQL'],
    icon: Home,
    screenshot: { src: '/images/work/homehub-real-estate-dashboard.webp', alt: 'Real estate app property dashboard', width: 1536, height: 1024 },
  },
  {
    id: 'accounting',
    name: 'Professional Accounting Software for MNCs',
    subtitle: 'Enterprise Finance Solution',
    category: 'finance',
    summary: 'Accounting for multinational businesses with multi-currency support and compliance.',
    description:
      'Enterprise-grade accounting solution for multinational corporations with multi-currency support, compliance management and advanced financial reporting.',
    highlights: ['Multi-currency support', 'Compliance management', 'Financial reporting', 'Audit trails'],
    features: ['Multi-currency support', 'Compliance management', 'Financial reporting', 'Tax management', 'Audit trails'],
    technology: ['React', 'Java', 'Oracle'],
    icon: Calculator,
  },
  {
    id: 'student-portal',
    name: 'Student Portal',
    subtitle: 'Education Management System',
    category: 'education',
    summary: 'One platform for students to manage courses, assignments, grades and resources.',
    description:
      'Educational platform giving students course management, assignment tracking, grade monitoring and collaborative learning tools.',
    highlights: ['Course management', 'Assignment tracking', 'Grade portal', 'Discussion forums'],
    features: ['Course management', 'Assignment tracking', 'Grade portal', 'Discussion forums', 'Resource library'],
    technology: ['Vue.js', 'Django', 'PostgreSQL'],
    icon: GraduationCap,
    screenshot: { src: '/images/work/savantx-student-portal.webp', alt: 'Student portal dashboard', width: 1536, height: 1024 },
  },
  {
    id: 'web-scraping',
    name: 'Web Scraping Tool',
    subtitle: 'Data Extraction Solution',
    category: 'business-tools',
    summary: 'Intelligent data extraction with scheduling, processing and export.',
    description:
      'Data extraction platform with intelligent scraping, data processing and automated collection from a range of web sources.',
    highlights: ['Intelligent scraping', 'Scheduled extraction', 'Data processing', 'Data export'],
    features: ['Intelligent scraping', 'Data processing', 'Scheduled extraction', 'API integration', 'Data export'],
    technology: ['Python', 'Scrapy', 'Redis'],
    icon: Search,
  },
  {
    id: 'school-management',
    name: 'School Management System',
    subtitle: 'Complete School Solution',
    category: 'education',
    summary: 'Admissions, staff, academics, fees and reports for schools in one system.',
    description:
      'Complete school management solution covering student enrolment, staff management, academic planning and administrative operations.',
    highlights: ['Student management', 'Staff administration', 'Academic planning', 'Fee management'],
    features: ['Student management', 'Staff administration', 'Academic planning', 'Fee management', 'Report generation'],
    technology: ['Angular', 'Laravel', 'MySQL'],
    icon: School,
  },
  {
    id: 'training-management',
    name: 'Student Training Management System',
    subtitle: 'Training & Certification Platform',
    category: 'education',
    summary: 'Run training programmes, assess skills and track certifications.',
    description:
      'Platform for managing training programmes, skill development, certification tracking and progress monitoring for educational institutions.',
    highlights: ['Training programmes', 'Skill assessment', 'Certification tracking', 'Progress monitoring'],
    features: ['Training programmes', 'Skill assessment', 'Certification tracking', 'Progress monitoring', 'Resource management'],
    technology: ['React', 'Node.js', 'MongoDB'],
    icon: GraduationCap,
  },
  {
    id: 'fleet-management',
    name: 'Fleet Management System',
    subtitle: 'Vehicle & Asset Tracking',
    category: 'logistics',
    summary: 'GPS tracking, maintenance, drivers and routes for your whole fleet.',
    description:
      'Vehicle fleet management solution with GPS tracking, maintenance scheduling, driver management and route optimisation.',
    highlights: ['GPS tracking', 'Maintenance scheduling', 'Driver management', 'Fuel monitoring'],
    features: ['GPS tracking', 'Maintenance scheduling', 'Driver management', 'Route optimisation', 'Fuel monitoring'],
    technology: ['Vue.js', 'Express', 'PostgreSQL'],
    icon: Truck,
    screenshot: { src: '/images/work/fleetmint-fleet-management.webp', alt: 'Fleet management dashboard', width: 1440, height: 820 },
  },
];

export const TRUSTED_BY = ['Legal Palz', "St. Paul's School", 'Sansani Express', 'RV Logistics', 'JDN Technologies'];
