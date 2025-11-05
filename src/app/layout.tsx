import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SavantX - Professional Technology Solutions",
  description: "Leading provider of web development, mobile apps, and technology consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D60F50EG51"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D60F50EG51');
          `}
        </Script>

        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Savantx Technologies Pvt Ltd",
              "url": "https://www.savantxtechnologies.com/",
              "logo": "https://www.savantxtechnologies.com/logo.png",
              "slogan": "Excellence in Every Solution",
              "description": "Savantx Technologies Pvt Ltd is an IT and Electronics company delivering innovative solutions in IoT, Embedded Systems, PCB Design, Product Development, and Smart Automation. With offices in Gaya (Bihar) and Mohali (Punjab), India, Savantx Technologies empowers startups and enterprises through end-to-end hardware and software integration, industrial automation, IoT platforms, and R&D services.",
              "keywords": "IoT company India, embedded systems development, PCB design services, product development, electronics company India, IT services, hardware design, automation solutions, Savantx Technologies",
              "foundingDate": "2022",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Panchanpur",
                  "addressLocality": "Gaya",
                  "addressRegion": "Bihar",
                  "postalCode": "824236",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 71",
                  "addressLocality": "Mohali",
                  "addressRegion": "Punjab",
                  "postalCode": "160071",
                  "addressCountry": "IN"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 98882-44166",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/savantx123",
                "https://www.facebook.com/savantxtechnologies",
                "https://www.instagram.com/thesavantx/",
                "https://x.com/Savantx123",
                "https://in.pinterest.com/Savantxtechnologies123/_profile/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
