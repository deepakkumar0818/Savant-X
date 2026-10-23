import tx from '@/content/text/app/expertise/mobile-apps/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.mobile_app_development,
  description:
    tx.ios_and_android_mobile_applications,
  path: '/expertise/mobile-apps',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
