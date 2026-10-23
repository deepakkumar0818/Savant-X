import tx from '@/content/text/app/layout.json';
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MotionProvider from '@/components/MotionProvider';
import NavigationProgress from '@/components/NavigationProgress';
import ConditionalNavbar from "@/components/ConditionalNavbar";
import ScrollPerfGuard from "@/components/ScrollPerfGuard";
import Script from "next/script";
import { COMPANY, OFFICES, SITE_URL } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${COMPANY.logoPath}`,
  slogan: "Excellence in Every Solution",
  description:
    "SavantX Technologies Pvt Ltd is an IT and Electronics company delivering software, Zoho CRM and ERP solutions, IoT, Embedded Systems, PCB Design, Product Development, and Smart Automation. With offices in Gaya (Bihar) and Mohali (Punjab), India, SavantX Technologies supports startups and enterprises with end-to-end hardware and software integration, industrial automation, IoT platforms, and R&D services.",
  keywords:
    "Zoho CRM partner India, ERP solutions, IoT company India, embedded systems development, PCB design services, product development, electronics company India, IT services, SavantX Technologies",
  foundingDate: String(COMPANY.foundingYear),
  email: COMPANY.email,
  telephone: COMPANY.phone.schema,
  address: OFFICES.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.locality,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: office.countryCode,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phone.schema,
    email: COMPANY.email,
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  // TODO(verify): these profiles differ from the footer's social links; confirm the official accounts.
  sameAs: [
    "https://www.linkedin.com/company/savantx123",
    "https://www.facebook.com/savantxtechnologies",
    "https://www.instagram.com/thesavantx/",
    "https://x.com/Savantx123",
    "https://in.pinterest.com/Savantxtechnologies123/_profile/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: tx.savantx_technologies_software_zoho_crm,
  description:
    tx.savantx_technologies_builds_websites_web,
  applicationName: COMPANY.name,
  openGraph: {
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: COMPANY.logoPath, alt: `${COMPANY.name} logo` }],
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} bg-white antialiased`}>
        <ScrollPerfGuard />
        <NavigationProgress />
        <ConditionalNavbar />
        <main className="bg-white">
          <MotionProvider>{children}</MotionProvider>
        </main>

        {/* Defer analytics until after load so they don't compete with first paint */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17987668620"
          strategy="lazyOnload"
        />
        <Script id="google-gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17987668620');
            gtag('config', 'G-D60F50EG51');
          `}
        </Script>
      </body>
    </html>
  );
}
