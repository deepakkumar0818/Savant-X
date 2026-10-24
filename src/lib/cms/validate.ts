/**
 * Checks every CMS change before it is published, so a bad edit cannot break the site.
 * Pure functions with no imports, so they can be tested directly with Node.
 */

export class ValidationError extends Error {}

const fail = (message: string): never => {
  throw new ValidationError(message);
};

const MAX_TEXT = 10_000;

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function str(v: unknown, label: string, { required = true, max = 2000 } = {}): string {
  if (typeof v !== 'string') return fail(`${label} must be text.`);
  if (required && !v.trim()) return fail(`${label} cannot be empty.`);
  if (v.length > max) return fail(`${label} is too long (max ${max} characters).`);
  return v;
}

function strList(v: unknown, label: string, { min = 0, unique = true, max = 500 } = {}): string[] {
  if (!Array.isArray(v)) return fail(`${label} must be a list.`);
  const out = v.map((x, i) => str(x, `${label} #${i + 1}`, { max }));
  if (out.length < min) fail(`${label} needs at least ${min} item${min === 1 ? '' : 's'}.`);
  if (unique) {
    const seen = new Set<string>();
    for (const x of out) {
      const k = x.trim().toLowerCase();
      if (seen.has(k)) fail(`${label} has "${x}" twice.`);
      seen.add(k);
    }
  }
  return out;
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const IMAGE_SRC = /^\/(images|uploads)\/[\w./-]+\.(png|jpe?g|webp|gif|avif)$/i;

function image(v: unknown, label: string) {
  if (v === undefined || v === null) return undefined;
  if (!isObject(v)) return fail(`${label} is invalid.`);
  const src = str(v.src, `${label} file`);
  if (!IMAGE_SRC.test(src)) fail(`${label} must be an uploaded image (/uploads/…) or a site image (/images/…).`);
  const alt = str(v.alt, `${label} description (alt text)`, { max: 300 });
  const width = Number(v.width);
  const height = Number(v.height);
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 16 || height < 16 || width > 10000 || height > 10000) {
    fail(`${label} width/height are invalid.`);
  }
  return { src, alt, width, height };
}

// ---------------------------------------------------------------------------
// Page text: same keys as before, every value text.
// ---------------------------------------------------------------------------
export function validateText(next: unknown, current: Record<string, string>, label = 'Page text'): Record<string, string> {
  if (!isObject(next)) return fail(`${label} is invalid.`);
  const keys = Object.keys(current);
  const nextKeys = Object.keys(next);
  if (nextKeys.length !== keys.length || keys.some((k) => !(k in next))) {
    fail(`${label}: fields cannot be added or removed here, only edited.`);
  }
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = next[k];
    if (typeof v !== 'string') fail(`${label}: every field must be text.`);
    if ((v as string).length > MAX_TEXT) fail(`${label}: a field is too long (max ${MAX_TEXT} characters).`);
    // Text that was not empty must stay non-empty, or headings/buttons render blank.
    if (current[k].trim() && !(v as string).trim()) fail(`${label}: "${current[k].slice(0, 60)}" cannot be left empty.`);
    out[k] = v as string;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Site settings
// ---------------------------------------------------------------------------
export function validateSite(v: unknown) {
  if (!isObject(v) || !isObject(v.company) || !Array.isArray(v.metrics) || !Array.isArray(v.offices) || !isObject(v.social)) {
    return fail('Site settings are invalid.');
  }
  const c = v.company;
  const phone = str(c.phone, 'Phone number', { max: 40 });
  if (!/^\+\d{1,3}[\s-]?\d[\d\s-]{5,16}$/.test(phone.trim())) fail('Phone number must be international format, e.g. +91 9888244166.');
  const emailOf = (value: unknown, label: string) => {
    const e = str(value, label, { max: 200 }).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) fail(`${label} address is invalid.`);
    return e;
  };
  const email = emailOf(c.email, 'Email');
  const infoEmail = emailOf(c.infoEmail, 'Info email');
  const zohoEmail = emailOf(c.zohoEmail, 'Zoho email');
  const foundingYear = Number(c.foundingYear);
  if (!Number.isInteger(foundingYear) || foundingYear < 1900 || foundingYear > new Date().getFullYear()) fail('Founding year is invalid.');
  const logoPath = str(c.logoPath, 'Logo');
  if (!/^\/(images|uploads)\/[\w./-]+\.(png|jpe?g|webp|svg)$/i.test(logoPath)) fail('Logo must be a site image path.');

  const metrics = v.metrics.map((m, i) => {
    if (!isObject(m)) return fail(`Metric #${i + 1} is invalid.`);
    const value = Number(m.value);
    if (!Number.isFinite(value) || value < 0 || value > 1_000_000) fail(`Metric #${i + 1}: number is invalid.`);
    const out: { value: number; suffix: string; label: string; zohoLabel?: string } = {
      value,
      suffix: str(m.suffix ?? '', `Metric #${i + 1} suffix`, { required: false, max: 5 }),
      label: str(m.label, `Metric #${i + 1} label`, { max: 60 }),
    };
    if (typeof m.zohoLabel === 'string' && m.zohoLabel.trim()) out.zohoLabel = str(m.zohoLabel, `Metric #${i + 1} Zoho label`, { max: 60 });
    return out;
  });
  // Pages read the first two metrics by position.
  if (metrics.length !== 2) fail('Keep exactly two headline metrics (the pages are designed for two).');

  const ids = new Set<string>();
  const offices = v.offices.map((o, i) => {
    if (!isObject(o)) return fail(`Office #${i + 1} is invalid.`);
    const id = str(o.id, `Office #${i + 1} id`, { max: 40 });
    if (!SLUG.test(id)) fail(`Office #${i + 1} id must be lowercase letters, numbers and dashes.`);
    if (ids.has(id)) fail(`Two offices use the id "${id}".`);
    ids.add(id);
    const coords = Array.isArray(o.coordinates) ? o.coordinates.map(Number) : [];
    if (coords.length !== 2 || !(Math.abs(coords[0]) <= 90) || !(Math.abs(coords[1]) <= 180)) fail(`Office "${id}": map position (latitude, longitude) is invalid.`);
    return {
      id,
      city: str(o.city, `Office "${id}" city`, { max: 80 }),
      name: str(o.name, `Office "${id}" name`, { max: 120 }),
      streetAddress: str(o.streetAddress, `Office "${id}" street address`, { max: 200 }),
      locality: str(o.locality, `Office "${id}" locality`, { max: 80 }),
      region: str(o.region, `Office "${id}" state/region`, { max: 80 }),
      postalCode: str(o.postalCode, `Office "${id}" postal code`, { max: 20 }),
      country: str(o.country, `Office "${id}" country`, { max: 80 }),
      countryCode: str(o.countryCode, `Office "${id}" country code`, { max: 2 }).toUpperCase(),
      coordinates: [coords[0], coords[1]],
      type: o.type === 'headquarters' ? 'headquarters' : 'office',
    };
  });
  if (!offices.length) fail('Add at least one office.');
  if (offices.filter((o) => o.type === 'headquarters').length !== 1) fail('Mark exactly one office as the headquarters.');

  const social: Record<string, string> = {};
  for (const key of ['x', 'linkedin', 'facebook', 'instagram', 'threads']) {
    const url = str(v.social[key], `${key} link`, { max: 300 });
    if (!/^https:\/\/[\w.-]+\.[a-z]{2,}\//i.test(url)) fail(`The ${key} link must be a full https:// address.`);
    social[key] = url;
  }

  return {
    company: { name: str(c.name, 'Company name', { max: 120 }), legalName: str(c.legalName, 'Legal name', { max: 160 }), foundingYear, phone: phone.trim(), email, infoEmail, zohoEmail, logoPath },
    metrics,
    offices,
    social,
  };
}

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------
export function validateForms(v: unknown, current: { zoho: { serviceLabels: Record<string, string> } }) {
  if (!isObject(v) || !isObject(v.consultation) || !isObject(v.contact) || !isObject(v.zoho)) return fail('Form settings are invalid.');
  const budgets = strList(v.budgets, 'Budget ranges', { min: 2, max: 80 });
  const contactServices = strList(v.contact.services, 'Contact form services', { min: 2, max: 80 });
  const hardwareService = str(v.contact.hardwareService, 'Hardware service option', { max: 80 });
  if (!contactServices.includes(hardwareService)) fail('The option that opens the hardware list must be one of the Contact form services.');
  const labels = v.zoho.serviceLabels;
  if (!isObject(labels)) return fail('Zoho services are invalid.');
  const ids = Object.keys(current.zoho.serviceLabels);
  if (Object.keys(labels).length !== ids.length || ids.some((id) => !(id in labels))) fail('Zoho services cannot be added or removed here, only renamed.');
  const serviceLabels: Record<string, string> = {};
  for (const id of ids) serviceLabels[id] = str(labels[id], `Zoho service "${id}"`, { max: 80 });
  return {
    budgets,
    consultation: { services: strList(v.consultation.services, 'Consultation services', { min: 2, max: 80 }) },
    contact: {
      services: contactServices,
      hardwareService,
      hardwareServices: strList(v.contact.hardwareServices, 'Hardware services', { min: 1, max: 80 }),
    },
    zoho: { serviceLabels, budgets: strList(v.zoho.budgets, 'Zoho page budget ranges', { min: 2, max: 80 }) },
  };
}

// ---------------------------------------------------------------------------
// Collections
// ---------------------------------------------------------------------------
const PRODUCT_CATEGORIES = ['education', 'healthcare', 'logistics', 'food', 'automotive'];
const PROJECT_CATEGORIES = ['zoho', 'web-mobile', 'ui-ux', 'hardware', 'manufacturing', 'healthcare', 'education', 'data', 'logistics', 'finance'];
const TONES = ['blue', 'orange', 'green', 'rose', 'violet', 'sky'];
const icon = (v: unknown, label: string, iconNames: readonly string[]) => {
  const name = str(v, label, { max: 40 });
  if (!iconNames.includes(name)) fail(`${label}: choose an icon from the list.`);
  return name;
};

export function validateProducts(v: unknown, iconNames: readonly string[]) {
  if (!isObject(v) || !Array.isArray(v.items)) return fail('Products are invalid.');
  const ids = new Set<string>();
  const items = v.items.map((p, i) => {
    if (!isObject(p)) return fail(`Product #${i + 1} is invalid.`);
    const name = str(p.name, `Product #${i + 1} name`, { max: 80 });
    const id = str(p.id, `"${name}" id`, { max: 60 });
    if (!SLUG.test(id)) fail(`"${name}" id must be lowercase letters, numbers and dashes.`);
    if (ids.has(id)) fail(`Two products use the id "${id}".`);
    ids.add(id);
    if (!PRODUCT_CATEGORIES.includes(String(p.category))) fail(`"${name}": choose a category.`);
    const screenshot = image(p.screenshot, `"${name}" screenshot`);
    return {
      id,
      name,
      subtitle: str(p.subtitle, `"${name}" subtitle`, { max: 120 }),
      category: String(p.category),
      summary: str(p.summary, `"${name}" summary`, { max: 300 }),
      description: str(p.description, `"${name}" description`, { max: 2000 }),
      highlights: strList(p.highlights, `"${name}" highlights`, { max: 120 }),
      features: strList(p.features, `"${name}" features`, { max: 160 }),
      technology: strList(p.technology, `"${name}" technology`, { max: 60 }),
      icon: icon(p.icon, `"${name}" icon`, iconNames),
      ...(screenshot ? { screenshot } : {}),
    };
  });
  if (!items.length) fail('Keep at least one product.');
  return { trustedBy: strList(v.trustedBy, 'Trusted by', { max: 80 }), items };
}

export function validateProjects(v: unknown, iconNames: readonly string[]) {
  if (!isObject(v) || !Array.isArray(v.items)) return fail('Projects are invalid.');
  const ids = new Set<number>();
  const items = v.items.map((p, i) => {
    if (!isObject(p)) return fail(`Project #${i + 1} is invalid.`);
    const title = str(p.title, `Project #${i + 1} title`, { max: 120 });
    const id = Number(p.id);
    if (!Number.isInteger(id) || id < 1) fail(`"${title}" id is invalid.`);
    if (ids.has(id)) fail(`Two projects use the id ${id}.`);
    ids.add(id);
    if (!PROJECT_CATEGORIES.includes(String(p.category))) fail(`"${title}": choose a category.`);
    const screenshot = image(p.screenshot, `"${title}" screenshot`);
    const highlights = p.highlights === undefined ? undefined : (Array.isArray(p.highlights) ? p.highlights : fail(`"${title}" highlights are invalid.`)).map((h, j) => {
      if (!isObject(h)) return fail(`"${title}" highlight #${j + 1} is invalid.`);
      if (!TONES.includes(String(h.tone))) fail(`"${title}" highlight #${j + 1}: choose a colour.`);
      return { label: str(h.label, `"${title}" highlight #${j + 1}`, { max: 60 }), icon: icon(h.icon, `"${title}" highlight #${j + 1} icon`, iconNames), tone: String(h.tone) };
    });
    return {
      id,
      title,
      category: String(p.category),
      image: str(p.image ?? '', `"${title}" emoji`, { required: false, max: 16 }),
      description: str(p.description, `"${title}" description`, { max: 2000 }),
      technologies: strList(p.technologies ?? [], `"${title}" technologies`, { max: 60 }),
      client: str(p.client ?? '', `"${title}" client`, { required: false, max: 120 }),
      duration: str(p.duration ?? '', `"${title}" duration`, { required: false, max: 60 }),
      results: str(p.results ?? '', `"${title}" results`, { required: false, max: 120 }),
      featured: p.featured === true,
      ...(highlights && highlights.length ? { highlights } : {}),
      ...(screenshot ? { screenshot } : {}),
      ...(p.hideFromAll === true ? { hideFromAll: true } : {}),
    };
  });
  if (!items.some((p) => p.featured)) fail('Mark at least one project as featured (it is shown in the laptop showcase).');
  return { items };
}

/** Serialises content the same way as the files in the repository (2 spaces, trailing newline). */
export function toJson(value: unknown): string {
  return JSON.stringify(value, null, 2) + '\n';
}
