/**
 * Single source of truth for public company details. The values live in
 * src/content/site.json and are edited from the admin (Settings); pages read them from here.
 */

import site from '@/content/site.json';

export const SITE_URL = 'https://www.savantxtechnologies.com';

/** International phone number as displayed, e.g. "+91 9888244166". */
function phoneFormats(display: string) {
  const digits = display.replace(/[^\d+]/g, '');
  const m = display.trim().match(/^\+(\d{1,3})[\s-]*(.+)$/);
  return {
    display,
    href: `tel:${digits}`,
    schema: m ? `+${m[1]}-${m[2].replace(/\D/g, '')}` : digits,
  };
}

/** Company details, offices, metrics and social links are edited in the admin (src/content/site.json). */
export const COMPANY = {
  name: site.company.name,
  legalName: site.company.legalName,
  foundingYear: site.company.foundingYear,
  phone: phoneFormats(site.company.phone),
  email: site.company.email,
  infoEmail: site.company.infoEmail,
  /** Shown only on the Zoho pages. */
  zohoEmail: site.company.zohoEmail,
  logoPath: site.company.logoPath,
};

/** Approved company metrics. Do not add unverified counts here. */
export const COMPANY_METRICS: { value: number; suffix: string; label: string; zohoLabel?: string }[] = site.metrics;

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

export const OFFICES: Office[] = site.offices.map((o) => ({
  ...o,
  coordinates: [o.coordinates[0], o.coordinates[1]],
  type: o.type === 'headquarters' ? 'headquarters' : 'office',
}));

/** Cities we also operate from, without a published office address. */
export type OperatingCity = { id: string; city: string; region: string; country: string; coordinates: [number, number] };

export const OPERATING_FROM: OperatingCity[] = site.operatingFrom.map((c) => ({ ...c, coordinates: [c.coordinates[0], c.coordinates[1]] }));

/** "Mumbai, India and Toronto, Canada" */
export const operatingFromText = () => {
  const names = OPERATING_FROM.map((c) => `${c.city}, ${c.country}`);
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : (names[0] ?? '');
};

export function cityMapUrl(c: OperatingCity): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.city}, ${c.region}, ${c.country}`)}`;
}

export const SOCIAL_LINKS = site.social;

export function formatOfficeAddress(office: Office): string {
  return `${office.streetAddress}, ${office.locality}, ${office.region} ${office.postalCode}, ${office.country}`;
}

export function officeMapUrl(office: Office): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatOfficeAddress(office))}`;
}

/** Everything shown on the contact map: the offices, then the cities we also operate from. */
export type MapPlace = {
  id: string;
  name: string;
  city: string;
  kind: Office['type'] | 'operations';
  coordinates: [number, number];
  address: string;
  mapUrl: string;
};

function officePlace(o: Office): MapPlace {
  return { id: o.id, name: o.name, city: o.city, kind: o.type, coordinates: o.coordinates, address: formatOfficeAddress(o), mapUrl: officeMapUrl(o) };
}

function cityPlace(c: OperatingCity): MapPlace {
  return { id: c.id, name: `${c.city} Operations`, city: c.city, kind: 'operations', coordinates: c.coordinates, address: `${c.city}, ${c.region}, ${c.country}`, mapUrl: cityMapUrl(c) };
}

export const MAP_PLACES: MapPlace[] = OFFICES.map(officePlace).concat(OPERATING_FROM.map(cityPlace));
