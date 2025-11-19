import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid Ohio | Tensar Geogrids Cleveland | Northern Ohio Distributor',
  description: 'Cleveland Geogrid - Buy Tensar Geogrids from Northern Ohio\'s #1 authorized distributor. InterAx, TriAx, Biaxial Geogrids in stock. Expert soil stabilization, free DCP testing. Proudly serving Cleveland, Akron, Toledo, and Northern Ohio. Shop Geogrid products at BuyGeogrid.com.',
  keywords: ['Geogrid Cleveland', 'Cleveland Geogrid', 'Geogrid Ohio', 'Tensar Geogrids Cleveland', 'Tensar Geogrids', 'Geogrid Northern Ohio', 'Northern Ohio Geogrid', 'Geogrid Akron', 'Geogrid Toledo', 'Buy Tensar Geogrid', 'Geogrid distributor Ohio', 'InterAx Geogrid', 'TriAx Geogrid', 'Biaxial Geogrid', 'Tensar authorized distributor', 'soil stabilization Ohio', 'Geogrid supplier Cleveland', 'NX850 Geogrid', 'TX190 Geogrid', 'BuyGeogrid'],
  openGraph: {
    title: 'Geogrid Ohio | Tensar Geogrids | #1 Ohio Geogrid Distributor',
    description: 'Geogrid Ohio - Buy Tensar Geogrids direct from Ohio\'s #1 authorized Geogrid distributor. Free DCP testing, expert support, competitive pricing.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
  other: {
    'google-site-verification': 'your-verification-code-here',
  },
};

export default function Home() {
  const benefits = [
    { number: '40%', label: 'Cost Reduction', desc: 'Lower aggregate costs' },
    { number: '3x', label: 'Extended Life', desc: 'Triple pavement lifespan' },
    { number: '24/7', label: 'Support', desc: 'Expert consultation' },
  ];

  const features = [
    { title: 'Premium Products', desc: 'Tensar & Mirafi authorized distributor' },
    { title: 'Expert Design', desc: 'Free DCP testing & consultation' },
    { title: 'Fast Delivery', desc: 'Quick turnaround' },
    { title: 'Best Pricing', desc: 'Price matching & bulk discounts' },
  ];

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Free Lunch & Learn Sessions - Geogrid Training",
    "description": "Watch our free lunch and learn sessions on Tensar geogrids and geotextiles. We provide lunch, expert training, and PDH credits for engineers in Ohio.",
    "thumbnailUrl": "https://buygeogrid.com/images/lunch-and-learn/IMG_0158.jpeg",
    "uploadDate": "2025-01-15",
    "contentUrl": "https://buygeogrid.com/videos/lunch-and-learn.mp4",
    "embedUrl": "https://buygeogrid.com/videos/lunch-and-learn.mp4",
    "duration": "PT6S"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BuyGeogrid.com - AF Supply",
    "image": "https://buygeogrid.com/images/logos/afsupplylogo_transparent.png",
    "@id": "https://buygeogrid.com",
    "url": "https://buygeogrid.com",
    "telephone": "+14403681420",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Solon",
      "addressLocality": "Cleveland",
      "addressRegion": "OH",
      "postalCode": "44139",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3897,
      "longitude": -81.4412
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://asphaltfabrics.com"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Cleveland"
      },
      {
        "@type": "City",
        "name": "Akron"
      },
      {
        "@type": "City",
        "name": "Toledo"
      },
      {
        "@type": "City",
        "name": "Youngstown"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Professional Geosynthetic Solutions for Civil Infrastructure
                </h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Authorized distributor of Tensar Geogrids and Solmax Mirafi geotextiles.
                  Expert consultation and competitive pricing for projects across Northern Ohio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                  >
                    Get Free DCP Test
                  </Link>
                  <Link
                    href="tel:4403681420"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
                  >
                    Call (440) 368-1420
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <img
                  src="/images/logos/afsupplylogo_transparent.png"
                  alt="AF Supply Logo"
                  className="w-full max-w-xl h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to BuyGeogrid.com
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Your trusted source for premium geosynthetic solutions including Geogrids,
              geotextiles, and paving interlayers. We serve contractors, engineers, and municipalities
              throughout Northern Ohio with expert consultation and competitive pricing.
            </p>
            <div className="inline-block bg-[#00c97e] text-white px-6 py-3 rounded font-semibold">
              Free DCP Testing Available
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded p-6 border border-gray-200 hover:border-[#00c97e] transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authorized Distributor Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Authorized Distributor
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Proud distributor of Tensar Geogrids and Solmax Mirafi Geotextiles
            </p>

            <div className="flex justify-center items-center gap-12 mb-12 flex-wrap">
              <Link
                href="https://www.tensarcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-75 p-6 bg-white rounded border border-gray-200"
              >
                <img
                  src="/images/logos/tensar.png"
                  alt="Tensar Logo"
                  className="h-20"
                />
              </Link>
              <Link
                href="https://www.solmax.com/us/en"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-75 p-6 bg-white rounded border border-gray-200"
              >
                <img
                  src="/images/logos/solmax.png"
                  alt="Solmax Logo"
                  className="h-20"
                />
              </Link>
            </div>

            <div className="bg-white border-2 border-[#00c97e] rounded p-6 text-left max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can&apos;t Find What You Need?</h3>
              <p className="text-gray-700 leading-relaxed">
                We can source it directly from the manufacturer. Click the logos above to explore
                their full catalogs, then contact us about any product they offer. We&apos;re here
                to get you exactly what your project needs.
              </p>
            </div>
          </div>
        </section>

        {/* Lunch & Learn Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#00c97e] text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                  100% FREE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Schedule Your Free Lunch & Learn
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We provide expert training on Tensar geogrids and geotextiles—plus free lunch for your team and PDH credits for engineers. Perfect for firms, municipalities, and project teams across Ohio.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free lunch from anywhere you choose</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">PDH credits for continuing education</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Expert training on latest products</span>
                  </li>
                </ul>
                <Link
                  href="/lunch-and-learn"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                >
                  Learn More & Schedule
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden h-96 bg-gray-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/lunch-and-learn.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get expert consultation, free DCP testing, and competitive pricing on all products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="tel:4403681420"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
              >
                (440) 368-1420
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data - VideoObject Schema */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Structured Data - LocalBusiness Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}
