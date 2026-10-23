import { Car, GraduationCap, HeartPulse, Truck, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import collection from '@/content/collections/products.json';
import { cmsIcon } from '@/lib/cms/icons';

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

/** Edited in the admin (Products); stored in src/content/collections/products.json. */
export const PRODUCTS: Product[] = collection.items.map((p) => ({
  ...p,
  category: (p.category in CATEGORY_STYLE ? p.category : 'education') as ProductCategory,
  icon: cmsIcon(p.icon),
}));

export const TRUSTED_BY: string[] = collection.trustedBy;
