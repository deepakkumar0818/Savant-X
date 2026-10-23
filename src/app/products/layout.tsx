import tx from '@/content/text/app/products/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.products,
  description:
    tx.explore_the_savantx_technologies_product,
  path: '/products',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
