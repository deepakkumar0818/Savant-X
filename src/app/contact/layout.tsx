import tx from '@/content/text/app/contact/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.contact_us,
  description:
    tx.talk_to_savantx_technologies_about,
  path: '/contact',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
