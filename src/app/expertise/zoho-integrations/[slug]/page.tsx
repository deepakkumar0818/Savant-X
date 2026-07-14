import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import ZohoAppPage from '@/components/zoho/ZohoAppPage';
import { getAllZohoAppSlugs, getZohoApp } from '@/data/zohoApps';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = 'https://www.savantxtechnologies.com';

export function generateStaticParams() {
  return getAllZohoAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getZohoApp(slug);
  if (!app) {
    return { title: 'Zoho App | SavantX' };
  }

  const canonical = `${SITE_URL}/expertise/zoho-integrations/${app.slug}/`;

  return {
    title: app.seoTitle,
    description: app.seoDescription,
    keywords: app.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: app.seoTitle,
      description: app.seoDescription,
      url: canonical,
      type: 'website',
      images: [{ url: app.heroImage, alt: app.heroImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: app.seoTitle,
      description: app.seoDescription,
      images: [app.heroImage],
    },
  };
}

export default async function ZohoAppRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const app = getZohoApp(slug);
  if (!app) notFound();

  const canonical = `${SITE_URL}/expertise/zoho-integrations/${app.slug}/`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: app.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${app.name} Setup & Customization`,
    description: app.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'Savantx Technologies Pvt Ltd',
      url: SITE_URL,
    },
    areaServed: 'IN',
    url: canonical,
    serviceType: app.name,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Zoho Integrations',
        item: `${SITE_URL}/expertise/zoho-integrations/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: app.name,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Script
        id={`faq-schema-${app.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`service-schema-${app.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${app.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ZohoAppPage app={app} />
    </>
  );
}
