import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid Ohio | Tensar Distributor | BuyGeogrid',
  description: 'Northern Ohio Geogrid distributor. Authorized Tensar & Solmax dealer. Free DCP soil testing and expert consultation. Cleveland, Akron, Toledo.',
  keywords: ['Geogrid Cleveland', 'Cleveland Geogrid', 'Geogrid Ohio', 'Tensar Geogrids Cleveland', 'Tensar Geogrids', 'Geogrid Northern Ohio', 'Northern Ohio Geogrid', 'Geogrid Akron', 'Geogrid Toledo', 'Buy Tensar Geogrid', 'Geogrid distributor Ohio', 'InterAx Geogrid', 'TriAx Geogrid', 'Biaxial Geogrid', 'Tensar authorized distributor', 'soil stabilization Ohio', 'Geogrid supplier Cleveland', 'NX850 Geogrid', 'TX190 Geogrid', 'BuyGeogrid'],
  alternates: {
    canonical: 'https://www.buygeogrid.com',
  },
  openGraph: {
    title: 'Geogrid Ohio | Tensar Distributor | BuyGeogrid',
    description: 'Northern Ohio Geogrid distributor. Authorized Tensar & Solmax dealer. Free DCP soil testing and expert consultation. Cleveland, Akron, Toledo.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
    url: 'https://buygeogrid.com',
  },
};

export default function Home() {
  const benefits = [
    { number: '40%', label: 'Cost Reduction', desc: 'Lower aggregate costs' },
    { number: 'Up to 3x', label: 'Longer Life', desc: 'Could extend pavement lifespan' },
    { number: '24/7', label: 'Support', desc: 'Expert consultation' },
  ];

  const features = [
    { title: 'Free DCP Testing', desc: 'We come to your site and test your subgrade. Real CBR data, not guesswork.' },
    { title: 'Tensar+ Design Support', desc: 'We run your soil data through Tensar Plus and give you an engineered recommendation.' },
    { title: 'On-Site When You Need Us', desc: 'Failing a proof roll? We show up with a solution, not just a product.' },
    { title: 'Lunch & Learn Training', desc: 'Free training for your team with PDH credits for engineers. We bring lunch.' },
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

        {/* What We Do Differently */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              More Than a Supplier
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Anyone can sell you a roll of geogrid. We help you figure out which one you actually need.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We test your subgrade with a DCP — at no cost to you — run the results through Tensar Plus design software, and give you an engineered recommendation — the right product and the right aggregate thickness for your actual site conditions. When you fail a proof roll, we show up with a solution. When your engineers need PDH credits, we bring lunch and training. That&apos;s the difference between a distributor and a supply house.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
              Schedule a Free Site Assessment
            </Link>
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

        {/* Why Geogrid Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Use Geogrid?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Geogrid is one of the most practical ways to improve base performance without overbuilding. By mechanically stabilizing aggregate, it can allow for reduced stone thickness while maintaining or improving structural capacity. This often translates to less excavation, fewer material deliveries, and shorter project timelines. Geogrid also helps prevent subgrade intrusion—when soft soils migrate into the base layer and weaken it over time. From residential driveways to commercial parking lots and municipal roadways, Geogrid offers a reliable way to build longer-lasting surfaces with fewer callbacks.
            </p>
          </div>
        </section>

        {/* DCP Testing Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              What Is DCP Testing?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Dynamic Cone Penetrometer (DCP) is a portable tool used to measure soil strength on-site. It works by dropping a weighted hammer onto a steel rod with a cone tip, recording how far the cone penetrates with each blow. The results correlate to California Bearing Ratio (CBR) values, which help determine how much structural support your subgrade can provide. DCP testing gives you real data about your soil conditions—so you can make informed decisions about whether Geogrid is needed and which product is right for your project. We offer free DCP testing throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Northern Ohio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Tensar Geogrids and Solmax Mirafi Geotextiles at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours. For time-sensitive projects, call us directly and we&apos;ll work to meet your schedule. We also provide on-site DCP soil testing and technical consultations at no charge throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* Authorized Distributor Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Authorized Distributor
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Proud distributor of Tensar Geogrids, Solmax Mirafi Geotextiles, and Patch Packs
            </p>

            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              <Link
                href="https://asphaltfabrics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-75 p-6 bg-white rounded border border-gray-200"
              >
                <img
                  src="/images/logos/logo-8.22.18.jpg"
                  alt="Asphalt Fabrics Supply Logo"
                  className="h-20"
                />
              </Link>
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
              <Link
                href="https://fptinfrastructure.com/products/pavement-repair-materials/patch-packs/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-75 p-6 bg-white rounded border border-gray-200"
              >
                <img
                  src="/images/logos/PatchPacksTM Logo 2in.png"
                  alt="Patch Packs Logo"
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
