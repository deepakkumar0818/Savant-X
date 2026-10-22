import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hardware & Electronics Development',
  description:
    'Custom electronics, PCBs and embedded systems for IoT devices and industrial automation, designed by SavantX Technologies.',
  path: '/expertise/hardware-electronics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
