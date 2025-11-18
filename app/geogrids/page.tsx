import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar Geogrids Ohio | TriAx, Biaxial, Uniaxial | Northern Ohio Distributor',
  description: 'Shop premium Tensar geogrids for soil stabilization, base reinforcement, and retaining wall support in Northern Ohio. Serving Cleveland, Akron, Toledo, Youngstown. Expert design support, free DCP testing, and competitive pricing. Call (440) 368-1420.',
  keywords: ['Tensar Geogrids Ohio', 'TriAx Geogrid Cleveland', 'Biaxial Geogrid Akron', 'Uniaxial Geogrid Toledo', 'soil stabilization Northern Ohio', 'base reinforcement Ohio', 'retaining wall Geogrid Cleveland', 'Geogrid distributor Ohio'],
  openGraph: {
    title: 'Tensar Geogrids Ohio | Northern Ohio Authorized Distributor',
    description: 'Premium Tensar geogrids for soil stabilization and base reinforcement in Northern Ohio. Free DCP testing and expert support.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function Geogrids() {
  const products = [
    {
      name: 'TriAx Geogrid',
      description: 'Revolutionary triangular aperture design provides multi-directional soil confinement for superior stabilization.',
      applications: ['Base reinforcement', 'Working platforms', 'Haul roads'],
    },
    {
      name: 'BX Geogrid',
      description: 'Biaxial Geogrid engineered for permanent road and pavement applications with exceptional load distribution.',
      applications: ['Paved roads', 'Parking lots', 'Airfield pavements'],
    },
    {
      name: 'UX Geogrid',
      description: 'Uniaxial Geogrid designed for mechanically stabilized earth structures and steep slope reinforcement.',
      applications: ['Retaining walls', 'Steep slopes', 'Embankments'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Tensar Geogrids</h1>
            <p className="text-xl mb-8">
              Engineered solutions for soil stabilization, base reinforcement, and
              retaining wall support
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Tensar Geogrids?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-green-500 text-5xl font-bold mb-4">40%</div>
                <h3 className="text-xl font-semibold mb-2">Reduce Aggregate</h3>
                <p className="text-gray-700">
                  Cut base course material costs by up to 40% with optimized
                  Geogrid reinforcement
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-green-500 text-5xl font-bold mb-4">3x</div>
                <h3 className="text-xl font-semibold mb-2">Extend Lifespan</h3>
                <p className="text-gray-700">
                  Triple the service life of paved and unpaved roads with proven
                  reinforcement technology
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-green-500 text-5xl font-bold mb-4">50%</div>
                <h3 className="text-xl font-semibold mb-2">Faster Construction</h3>
                <p className="text-gray-700">
                  Accelerate project timelines with improved constructability and
                  reduced material handling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Geogrid Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Applications:
                    </h4>
                    <ul className="space-y-1">
                      {product.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Selecting the Right Geogrid?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts can help you choose the optimal Geogrid solution
              for your project. We offer free design support and DCP testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Request Free Consultation
              </Link>
              <Link
                href="tel:4403681420"
                className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Call (440) 368-1420
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
