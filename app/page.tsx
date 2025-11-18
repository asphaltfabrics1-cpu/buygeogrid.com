import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar Geogrid Ohio | Northern Ohio Distributor | Cleveland Akron Toledo',
  description: 'Northern Ohio\'s trusted Tensar Geogrid and Solmax Mirafi distributor. Serving Cleveland, Akron, Toledo, Youngstown with expert soil stabilization solutions, free DCP testing, and competitive pricing. Authorized Tensar dealer in Solon, OH.',
  keywords: ['Tensar Ohio', 'Geogrid Northern Ohio', 'Tensar Cleveland', 'Tensar Akron', 'Tensar Toledo', 'Geogrid distributor Cleveland', 'soil stabilization Ohio', 'Tensar dealer Northern Ohio', 'Geogrid supplier Akron', 'Tensar Youngstown', 'geosynthetics Cleveland', 'DCP testing Ohio', 'Tensar authorized distributor', 'Geogrid Solon Ohio'],
  openGraph: {
    title: 'Tensar Geogrid Northern Ohio | Authorized Distributor Cleveland Akron Toledo',
    description: 'Northern Ohio\'s #1 Tensar Geogrid distributor. Expert consultation, free DCP testing, competitive pricing. Serving Cleveland, Akron, Toledo.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
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
    </div>
  );
}
