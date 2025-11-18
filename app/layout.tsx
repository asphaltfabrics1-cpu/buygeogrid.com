import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://buygeogrid.com'),
  title: {
    default: 'Tensar Geogrids & Solmax Mirafi Fabrics | Ohio Distributor | BuyGeogrid.com',
    template: '%s | BuyGeogrid.com'
  },
  description: 'Authorized Ohio distributor of Tensar Geogrids and Solmax Mirafi geotextiles. Leading geosynthetics supplier with expert soil stabilization solutions, competitive pricing, and free DCP testing. Serving Cleveland, Columbus, Cincinnati, Akron, Toledo, Youngstown, Dayton, and all of Ohio.',
  keywords: ['Tensar Geogrids Ohio', 'Solmax Mirafi Ohio', 'Geogrid Ohio', 'geotextile fabrics', 'soil stabilization', 'Cleveland Geogrid', 'Akron Geogrid', 'Columbus Geogrid', 'Cincinnati Geogrid', 'Toledo Geogrid', 'Youngstown Geogrid', 'Dayton Geogrid', 'Northern Ohio distributor', 'civil engineering fabrics', 'pavement reinforcement', 'InterAx Geogrid', 'TriAx Geogrid', 'woven geotextile', 'nonwoven fabric', 'Solon Ohio', 'DCP testing', 'Paramount Materials alternative', 'Hanes Geo Components', 'Titan Environmental', 'HUESKER Geogrid', 'Geogrid supplier Ohio', 'geosynthetics distributor'],
  authors: [{ name: 'Asphalt Fabrics & Supply' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buygeogrid.com',
    siteName: 'BuyGeogrid.com',
    title: 'Tensar Geogrids & Solmax Mirafi Fabrics | Ohio Authorized Distributor',
    description: 'Authorized Ohio distributor of Tensar geogrids and Solmax Mirafi geotextiles. Expert solutions for soil stabilization and pavement reinforcement. Serving all of Ohio from Solon.',
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
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://buygeogrid.com',
  name: 'Asphalt Fabrics & Supply',
  alternateName: 'BuyGeogrid.com',
  description: 'Authorized distributor of Tensar geogrids and Solmax Mirafi geotextiles serving all of Ohio',
  url: 'https://buygeogrid.com',
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

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '314192535267336');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=314192535267336&ev=PageView&noscript=1"
          />
        </noscript>

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
      </body>
    </html>
  );
}
