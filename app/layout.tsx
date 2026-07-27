import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import ConditionalWidgets from "@/components/ConditionalWidgets";
import SiteMetaPixel from "@/components/SiteMetaPixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.buygeogrid.com'),
  title: {
    default: 'Geogrid Ohio | Tensar Distributor',
    template: '%s | BuyGeogrid'
  },
  description: 'Northern Ohio\'s authorized Tensar & Solmax Mirafi distributor. Free DCP testing, soil stabilization expertise. Cleveland, Akron, Toledo, Youngstown.',
  keywords: ['Cleveland Geogrid', 'Geogrid Cleveland', 'Northern Ohio Geogrid', 'Geogrid Ohio', 'Ohio Geogrid', 'Tensar Geogrids Cleveland', 'Tensar Geogrids', 'Akron Geogrid', 'Toledo Geogrid', 'Youngstown Geogrid', 'Geogrid distributor Ohio', 'Solmax Mirafi Ohio', 'Geotextile fabrics', 'soil stabilization', 'civil engineering fabrics', 'pavement reinforcement', 'InterAx Geogrid', 'TriAx Geogrid', 'Biaxial Geogrid', 'woven Geotextile', 'Solon Ohio Geogrid', 'DCP testing Ohio', 'Geogrid supplier Cleveland', 'Geosynthetics distributor', 'Buy Geogrid Ohio', 'BuyGeogrid'],
  authors: [{ name: 'Asphalt Fabrics & Supply' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.buygeogrid.com',
    siteName: 'BuyGeogrid.com',
    title: 'Geogrid Ohio | Tensar Distributor',
    description: 'Northern Ohio\'s authorized Tensar & Solmax Mirafi distributor. Free DCP testing, soil stabilization expertise. Cleveland, Akron, Toledo, Youngstown.',
    images: [
      {
        url: '/images/logos/afsupplylogo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'BuyGeogrid.com - Tensar & Solmax Authorized Distributor Northern Ohio'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // Meta Business Manager domain verification for buygeogrid.com
    // (required for AFS pixel 2475116883007778 attribution + iOS 14.5+ tracking)
    'facebook-domain-verification': 'et35hks06prlyhw1329wbklswc1qxa',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.buygeogrid.com',
  name: 'Asphalt Fabrics & Supply',
  alternateName: 'BuyGeogrid.com',
  description: 'Authorized distributor of Tensar geogrids and Solmax Mirafi geotextiles serving all of Ohio',
  url: 'https://www.buygeogrid.com',
  telephone: '+1-440-368-1420',
  email: 'jstone@asphaltfabrics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7620 Bond Street',
    addressLocality: 'Solon',
    addressRegion: 'OH',
    postalCode: '44139',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.3894,
    longitude: -81.4412
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Cleveland',
      '@id': 'https://en.wikipedia.org/wiki/Cleveland'
    },
    {
      '@type': 'City',
      name: 'Columbus',
      '@id': 'https://en.wikipedia.org/wiki/Columbus,_Ohio'
    },
    {
      '@type': 'City',
      name: 'Cincinnati',
      '@id': 'https://en.wikipedia.org/wiki/Cincinnati'
    },
    {
      '@type': 'City',
      name: 'Akron',
      '@id': 'https://en.wikipedia.org/wiki/Akron,_Ohio'
    },
    {
      '@type': 'City',
      name: 'Toledo',
      '@id': 'https://en.wikipedia.org/wiki/Toledo,_Ohio'
    },
    {
      '@type': 'City',
      name: 'Youngstown',
      '@id': 'https://en.wikipedia.org/wiki/Youngstown,_Ohio'
    },
    {
      '@type': 'City',
      name: 'Dayton',
      '@id': 'https://en.wikipedia.org/wiki/Dayton,_Ohio'
    },
    {
      '@type': 'State',
      name: 'Ohio',
      '@id': 'https://en.wikipedia.org/wiki/Ohio'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Geogrid and Geotextile Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Tensar Geogrids',
          brand: {
            '@type': 'Brand',
            name: 'Tensar'
          },
          category: 'Civil Engineering Materials'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Solmax Mirafi Geotextiles',
          brand: {
            '@type': 'Brand',
            name: 'Solmax'
          },
          category: 'Civil Engineering Materials'
        }
      }
    ]
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61577581101649',
    'https://www.linkedin.com/company/asphalt-fabrics-supply',
    'https://asphaltfabrics.com'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Bebas+Neue&display=swap" rel="stylesheet" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ92XN218P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQ92XN218P');
          `}
        </Script>

        {/* Facebook Pixel moved to SiteMetaPixel component below — client-scoped so it doesn't fire on the AFS landing page (which has its own dedicated pixel) */}

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Chatbot + newsletter popup render everywhere EXCEPT PPC landing pages (see ConditionalWidgets) */}
        <ConditionalWidgets />
        {/* Site-wide FB Pixel — skips the /concrete-crack-sealing route which has its own pixel */}
        <SiteMetaPixel />
      </body>
    </html>
  );
}
