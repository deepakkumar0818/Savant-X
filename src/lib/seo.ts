import type { Metadata } from 'next';
import { COMPANY, SITE_URL } from './company';

type PageSeo = {
  /** Page-specific title; the brand is appended automatically. */
  title: string;
  description: string;
  /** Route path, e.g. "/about". */
  path: string;
};

/** Absolute canonical URL. The site uses `trailingSlash: true`. */
export function canonicalUrl(path: string): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${SITE_URL}${clean}`;
}

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = path === '/' ? title : `${title} | ${COMPANY.name}`;
  const url = canonicalUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: COMPANY.logoPath, alt: `${COMPANY.name} logo` }],
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
  };
}
