'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Decide during render (not in an effect) so admin pages never flash the public navbar.
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />
    </>
  );
}
