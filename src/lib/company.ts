/**
 * Single source of truth for public company details.
 * Change values here rather than hard-coding them in pages.
 */

export const SITE_URL = 'https://www.savantxtechnologies.com';

export const COMPANY = {
  name: 'SavantX Technologies',
  legalName: 'SavantX Technologies Pvt Ltd',
  foundingYear: 2019,
  phone: {
    display: '+91 9888244166',
    href: 'tel:+919888244166',
    schema: '+91-9888244166',
  },
  email: 'zoho@savantxtechnologies.com',
  logoPath: '/images/logos/Logo.png',
} as const;

/** Approved company metrics. Do not add unverified counts here. */
export const COMPANY_METRICS = [
  // The Zoho page shows this count as CRM solutions; everywhere else it is projects delivered.
  { value: 80, suffix: '+', label: 'Projects Delivered', zohoLabel: 'CRM Solutions' },
  { value: 50, suffix: '+', label: 'ERP Systems' },
] as const;

export type Office = {
  id: string;
  city: string;
  name: string;
  /** Street-level detail exactly as published by the company; do not invent. */
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  countryCode: string;
  /** Approximate map position (locality level). */
  coordinates: [number, number];
  type: 'headquarters' | 'office';
};

export const OFFICES: Office[] = [
  {
    id: 'gaya',
    city: 'Gaya',
    name: 'Gaya Office (Headquarters)',
    streetAddress: 'Panchanpur, Tekari',
    locality: 'Gaya',
    region: 'Bihar',
    postalCode: '824236',
    country: 'India',
    countryCode: 'IN',
    coordinates: [24.9366, 84.8425],
    type: 'headquarters',
  },
  {
    id: 'mohali',
    city: 'Mohali',
    name: 'Mohali Office',
    streetAddress: 'Sector 71',
    locality: 'Mohali',
    region: 'Punjab',
    postalCode: '160071',
    country: 'India',
    countryCode: 'IN',
    coordinates: [30.7046, 76.7179],
    type: 'office',
  },
];

export function formatOfficeAddress(office: Office): string {
  return `${office.streetAddress}, ${office.locality}, ${office.region} ${office.postalCode}, ${office.country}`;
}

export function officeMapUrl(office: Office): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatOfficeAddress(office))}`;
}
