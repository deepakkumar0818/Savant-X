'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const [isAdminPage, setIsAdminPage] = useState(false);
  
  useEffect(() => {
    setIsAdminPage(pathname?.startsWith('/admin') ?? false);
  }, [pathname]);
  
  if (isAdminPage) {
    return null;
  }
  
  return (
    <>
      <Navbar />
      <ScrollToTop />
    </>
  );
}

