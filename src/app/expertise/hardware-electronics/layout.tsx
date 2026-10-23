import tx from '@/content/text/app/expertise/hardware-electronics/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.hardware_electronics_development,
  description:
    tx.custom_electronics_pcbs_and_embedded,
  path: '/expertise/hardware-electronics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
