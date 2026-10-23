import tx from '@/content/text/app/about/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.about_us,
  description:
    tx.founded_in_2019_savantx_technologies,
  path: '/about',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
