import tx from '@/content/text/app/expertise/web-apps/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.custom_web_application_development,
  description:
    tx.scalable_custom_web_applications_that,
  path: '/expertise/web-apps',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
