import { Car, GraduationCap, HeartPulse, School, Truck, UtensilsCrossed, type LucideIcon } from 'lucide-react';

/**
 * SavantX product catalog, in the order the company wants them shown.
 * Client counts, ratings and prices are deliberately not shown: there is no verified source
 * for them. Features are only listed where they have been confirmed; a product with none
 * yet shows its description and a demo link.
 */
export type ProductCategory = 'education' | 'healthcare' | 'logistics' | 'food' | 'automotive';

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
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
  { id: 'logistics', label: 'Logistics', icon: Truck },
  { id: 'food', label: 'Food & Hospitality', icon: UtensilsCrossed },
  { id: 'automotive', label: 'Automotive', icon: Car },
];

export const CATEGORY_STYLE: Record<ProductCategory, { label: string; text: string; tile: string; check: string; tint: string }> = {
  education: { label: 'Education', text: 'text-rose-600', tile: 'bg-rose-500', check: 'bg-rose-500', tint: 'from-rose-50 to-pink-50' },
  healthcare: { label: 'Healthcare', text: 'text-emerald-600', tile: 'bg-emerald-500', check: 'bg-emerald-500', tint: 'from-emerald-50 to-teal-50' },
  logistics: { label: 'Logistics', text: 'text-purple-600', tile: 'bg-purple-600', check: 'bg-purple-600', tint: 'from-purple-50 to-fuchsia-50' },
  food: { label: 'Food & Hospitality', text: 'text-orange-600', tile: 'bg-orange-500', check: 'bg-orange-500', tint: 'from-orange-50 to-amber-50' },
  automotive: { label: 'Automotive', text: 'text-blue-600', tile: 'bg-blue-600', check: 'bg-blue-600', tint: 'from-blue-50 to-sky-50' },
};

export const PRODUCTS: Product[] = [
  {
    id: 'vidya-setu',
    name: 'Vidya Setu',
    subtitle: 'Online Examination & Olympiad Platform',
    category: 'education',
    summary: 'Run online exams and paid Olympiads across institutions, with live monitoring and fee collection.',
    description:
      'Vidya Setu is an online examination and Olympiad platform. Institutions, staff and students are managed in one place; exams are scheduled, monitored live and reported on; and Olympiad registrations and fees are collected online.',
    // Taken from the modules in the product's admin dashboard.
    highlights: ['Online exams & Olympiads', 'Live exam monitoring', 'Olympiad registration & fee collection', 'Reports & analytics'],
    features: [
      'Institution management',
      'Admin, staff & student control',
      'Exam scheduling & control',
      'Live exam monitoring',
      'Olympiad registrations & online fee collection',
      'Reports & analytics',
      'Roles & permissions',
      'Logs & security',
    ],
    technology: [],
    icon: School,
    screenshot: { src: '/images/work/vidya-setu-dashboard.webp', alt: 'Vidya Setu super admin dashboard', width: 1536, height: 846 },
  },
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
    id: 'fleetmint',
    name: 'FleetMint',
    subtitle: 'Fleet Management System',
    category: 'logistics',
    summary: 'GPS tracking, maintenance, drivers and routes for your whole fleet.',
    description:
      'Vehicle fleet management solution with GPS tracking, maintenance scheduling, driver management and route optimisation.',
    highlights: ['GPS tracking', 'Maintenance scheduling', 'Driver management', 'Fuel monitoring'],
    features: ['GPS tracking', 'Maintenance scheduling', 'Driver management', 'Route optimisation', 'Fuel monitoring'],
    technology: ['Vue.js', 'Express', 'PostgreSQL'],
    icon: Truck,
    screenshot: { src: '/images/work/fleetmint-fleet-management.webp', alt: 'FleetMint fleet management dashboard', width: 1440, height: 820 },
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
    id: 'garage-management',
    name: 'Garage Management',
    subtitle: 'Vehicle Service & Workshop Software',
    category: 'automotive',
    // TODO: add confirmed highlights, features, technology and a screenshot.
    summary: 'A SavantX system for vehicle garages and service workshops.',
    description: 'Garage Management is a SavantX product for vehicle garages and service workshops. Request a demo to see what it can do for yours.',
    highlights: [],
    features: [],
    technology: [],
    icon: Car,
  },
];

export const TRUSTED_BY = ['Legal Palz', "St. Paul's School", 'Sansani Express', 'RV Logistics', 'JDN Technologies'];
