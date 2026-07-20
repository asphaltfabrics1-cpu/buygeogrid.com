import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
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
  const signatureServices = [
    {
      eyebrow: 'On-site testing',
      title: 'Free DCP Testing',
      desc: 'We come to your site and test your subgrade. Real CBR data, not guesswork.',
      href: '/contact',
      cta: 'Request a DCP test',
    },
    {
      eyebrow: 'Engineered design',
      title: 'Tensar+ Design Support',
      desc: 'We run your soil data through Tensar Plus and give you an engineered recommendation.',
      href: '/blog/dcp-testing-tensar-plus',
      cta: 'How the design works',
    },
  ];

  const secondaryServices = [
    { title: 'Cost Savings Calculator', desc: 'See how much geogrid can save on aggregate costs for your next project.', href: '/cost-calculator' },
    { title: 'Lunch & Learn Training', desc: 'Free training for your team with PDH credits for engineers. We bring lunch.', href: '/lunch-and-learn' },
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "BuyGeogrid.com - AF Supply",
      "image": "https://buygeogrid.com/images/logos/afsupplylogo_transparent.png",
      "telephone": "+14403681420",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cleveland",
        "addressRegion": "OH",
        "postalCode": "44139",
        "addressCountry": "US"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Engineered Technical Solutions",
      "url": "https://engineeredtechnicalsolutions.com/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Asphalt Fabrics & Supply is a great resource for anyone looking to gain a better understanding of the cost saving options available when it comes to pavement and concrete. The technical information they provide is very thorough, and extremely useful when determining the best solution for a project. Their DCP testing and follow-up evaluations help to clarify subsurface conditions. In addition to this, they have a great lineup of software available to help tailor a solution specifically for each site. Their team is always willing to walk through options to ensure the best outcome as well. We also appreciate their lunch-and-learn sessions. They are always well-organized, informative, and a great opportunity to earn CE credits."
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
        <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/tensar-geogrid-blog-northern-ohio.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-45"
            />
            {/* Gradient overlay — dark on left for text legibility, fades right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-[#1a1a1a]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="inline-block text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                Northern Ohio · Solon Warehouse
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Geogrids, geotextiles, and interlayers — stocked in Solon.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Authorized Tensar and Solmax distributor serving contractors across Northern Ohio. Free on-site DCP testing. Pickup at our Solon warehouse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Get Free DCP Test
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors duration-200 group"
                >
                  <span>Call (440) 368-1420</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Capabilities Flyer Download Band */}
        <section className="py-8 px-6 bg-[#00c97e] text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Want the quick overview?</h2>
              <p className="text-white/90 leading-snug">Download our one-page capabilities flyer — what we stock, why local beats national, and the proof-roll chart.</p>
            </div>
            <a
              href="/docs/asphalt-fabrics-supply-flyer.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-[#00c97e] bg-white hover:bg-gray-100 rounded transition-colors whitespace-nowrap flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Download Flyer (PDF)
            </a>
          </div>
        </section>

        {/* What We Do Differently */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
              <Reveal>
                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The difference</div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  More Than a Supplier
                </h2>
                <p className="text-xl text-gray-800 leading-snug font-medium">
                  Anyone can sell you a roll of geogrid. We help you figure out which one you actually need.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We test your subgrade with a DCP — at no cost to you — run the results through Tensar Plus design software, and give you an engineered recommendation — the right product and the right aggregate thickness for your actual site conditions. When you fail a proof roll, we show up with a solution. When your engineers need PDH credits, we bring lunch and training. That&apos;s the difference between a local Ohio distributor and a supply house.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Schedule a Free Site Assessment
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Signature Services */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Services</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                How we help before you buy.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {signatureServices.map((s, i) => (
                <Reveal key={i} delay={i * 120}>
                  <Link
                    href={s.href}
                    className="group relative bg-[#1a1a1a] text-white p-8 md:p-10 rounded overflow-hidden hover:bg-[#111111] transition-colors duration-200 flex flex-col h-full"
                  >
                    <div className="absolute top-0 left-0 h-1 w-24 bg-[#00c97e]" />
                    <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-[0.2em] mb-4 mt-2">{s.eyebrow}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{s.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-8 flex-grow">{s.desc}</p>
                    <div className="inline-flex items-center gap-2 text-[#00c97e] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      {s.cta}
                      <span>→</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {secondaryServices.map((s, i) => (
                <Reveal key={i} delay={240 + i * 120}>
                  <Link
                    href={s.href}
                    className="group flex items-start gap-4 py-5 px-6 border border-gray-200 rounded hover:border-[#00c97e] hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-[#00c97e] transition-colors">{s.title}</div>
                      <div className="text-sm text-gray-600">{s.desc}</div>
                    </div>
                    <div className="text-gray-400 group-hover:text-[#00c97e] group-hover:translate-x-1 transition-all duration-200 self-center">→</div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Deep-content trio: Why Geogrid / DCP Testing / Serving Northern Ohio */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-0 md:gap-x-12 lg:gap-x-16">
              <Reveal as="article" className="bg-gray-50 md:bg-transparent border border-gray-200 md:border-0 md:border-t-2 md:border-[#00c97e] p-6 md:p-0 md:pt-8 rounded md:rounded-none">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c97e] md:text-gray-500 mb-4">01 — Product</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  Why Use Geogrid?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Geogrid is one of the most practical ways to improve base performance without overbuilding. By mechanically stabilizing aggregate, it can allow for reduced stone thickness while maintaining or improving structural capacity. This often translates to less excavation, fewer material deliveries, and shorter project timelines. Geogrid also helps prevent subgrade intrusion—when soft soils migrate into the base layer and weaken it over time. From residential driveways to commercial parking lots and municipal roadways, Geogrid offers a reliable way to build longer-lasting surfaces with fewer callbacks.
                </p>
              </Reveal>

              <Reveal as="article" delay={120} className="bg-gray-50 md:bg-transparent border border-gray-200 md:border-0 md:border-t-2 md:border-[#00c97e] p-6 md:p-0 md:pt-8 rounded md:rounded-none">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c97e] md:text-gray-500 mb-4">02 — Testing</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  What Is DCP Testing?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A Dynamic Cone Penetrometer (DCP) is a portable tool used to measure soil strength on-site. It works by dropping a weighted hammer onto a steel rod with a cone tip, recording how far the cone penetrates with each blow. The results correlate to California Bearing Ratio (CBR) values, which help determine how much structural support your subgrade can provide. DCP testing gives you real data about your soil conditions—so you can make informed decisions about whether Geogrid is needed and which product is right for your project. We offer free DCP testing throughout Northern Ohio.
                </p>
              </Reveal>

              <Reveal as="article" delay={240} className="bg-gray-50 md:bg-transparent border border-gray-200 md:border-0 md:border-t-2 md:border-[#00c97e] p-6 md:p-0 md:pt-8 rounded md:rounded-none">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c97e] md:text-gray-500 mb-4">03 — Coverage</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  Serving Northern Ohio
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  We stock Tensar Geogrids and Solmax Mirafi Geotextiles at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours. For time-sensitive projects, call us directly and we&apos;ll work to meet your schedule. We also provide on-site DCP soil testing and technical consultations at no charge throughout Northern Ohio.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Authorized Distributor Section */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Authorized Distributor</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Proud distributor of Tensar Geogrids, Solmax Mirafi Geotextiles, and Patch Packs.
              </h2>
            </Reveal>

            {/* Product showcase — actual products we stock */}
            <Reveal delay={120} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { img: '/images/products/solution-interax.png', brand: 'Tensar', product: 'InterAx® Geogrid', href: '/geogrid' },
                { img: '/images/products/mirafi-500x.jpeg', brand: 'Solmax', product: 'Mirafi® Geotextile', href: '/woven-fabrics' },
                { img: '/images/products/petrotac.jpg', brand: 'Propex', product: 'Petrotac® Interlayer', href: '/interlayers' },
                { img: '/images/products/patch-packs.png', brand: 'FPT', product: 'Patch Packs™', href: '/patch-packs' },
              ].map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  className="group bg-[#252525] hover:bg-[#2f2f2f] transition-colors duration-200 rounded overflow-hidden flex flex-col"
                >
                  <div className="aspect-square bg-white/5 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.brand} ${p.product}`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="text-[#00c97e] text-xs uppercase tracking-wider font-semibold mb-1">{p.brand}</div>
                    <div className="font-semibold text-sm md:text-base">{p.product}</div>
                  </div>
                </Link>
              ))}
            </Reveal>

            <Reveal delay={200} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-12">
              <Link
                href="https://asphaltfabrics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-200 flex items-center justify-center p-8 min-h-[140px]"
                aria-label="Asphalt Fabrics Supply"
              >
                <img
                  src="/images/logos/logo-8.22.18.jpg"
                  alt="Asphalt Fabrics Supply"
                  className="max-h-16 w-auto"
                />
              </Link>
              <Link
                href="https://www.tensarcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-200 flex items-center justify-center p-8 min-h-[140px]"
                aria-label="Tensar"
              >
                <img
                  src="/images/logos/tensar.png"
                  alt="Tensar"
                  className="max-h-16 w-auto brightness-0 invert opacity-90"
                />
              </Link>
              <Link
                href="https://www.solmax.com/us/en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-200 flex items-center justify-center p-8 min-h-[140px]"
                aria-label="Solmax"
              >
                <img
                  src="/images/logos/solmax.png"
                  alt="Solmax"
                  className="max-h-16 w-auto brightness-0 invert opacity-90"
                />
              </Link>
              <Link
                href="https://fptinfrastructure.com/products/pavement-repair-materials/patch-packs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-200 flex items-center justify-center p-8 min-h-[140px]"
                aria-label="Patch Packs"
              >
                <img
                  src="/images/logos/PatchPacksTM Logo 2in.png"
                  alt="Patch Packs"
                  className="max-h-16 w-auto brightness-0 invert opacity-90"
                />
              </Link>
            </Reveal>

            <Reveal delay={240} className="border-l-2 border-[#00c97e] pl-6 max-w-3xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Can&apos;t find what you need?</h3>
              <p className="text-gray-300 leading-relaxed">
                We can source it directly from the manufacturer. Click any logo above to explore their full catalogs, then contact us about any product they offer. We&apos;re here to get you exactly what your project needs.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                What Our Customers Say
              </h2>
            </Reveal>
            <Reveal delay={120} as="div">
            <figure className="bg-gray-50 border border-gray-200 rounded p-8 md:p-10">
              <div className="flex items-center mb-4" aria-label="5 out of 5 stars">
                {[0,1,2,3,4].map((i) => (
                  <svg key={i} className="w-6 h-6 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.098 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-800 leading-relaxed mb-6">
                <p className="mb-4">
                  &ldquo;Asphalt Fabrics &amp; Supply is a great resource for anyone looking to gain a better understanding of the cost saving options available when it comes to pavement and concrete. The technical information they provide is very thorough, and extremely useful when determining the best solution for a project. Their DCP testing and follow-up evaluations help to clarify subsurface conditions. In addition to this, they have a great lineup of software available to help tailor a solution specifically for each site. Their team is always willing to walk through options to ensure the best outcome as well.&rdquo;
                </p>
                <p>
                  &ldquo;We also appreciate their lunch-and-learn sessions. They are always well-organized, informative, and a great opportunity to earn CE credits.&rdquo;
                </p>
              </blockquote>
              <figcaption className="text-gray-700 font-semibold">
                — <a href="https://engineeredtechnicalsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00c97e] underline decoration-gray-300 hover:decoration-[#00c97e] underline-offset-4">Engineered Technical Solutions</a>
                <span className="block text-sm text-gray-500 font-normal mt-1">Google Review</span>
              </figcaption>
            </figure>
            </Reveal>
          </div>
        </section>

        {/* Lunch & Learn Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
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
              </Reveal>
              <Reveal delay={120} className="rounded-lg overflow-hidden h-96 bg-gray-900">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
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
            </Reveal>
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

      {/* Structured Data - Review Schema */}
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </div>
  );
}
