import tx from '@/content/text/app/(home)/layout.json';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tx.savantx_technologies_software_zoho_crm,
  description:
    tx.savantx_technologies_builds_websites_web,
  path: '/',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
