import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar Geogrid Products | InterAx TriAx Ohio',
  description: 'Northern Ohio\'s authorized Tensar Geogrid distributor. InterAx NX850, TriAx TX190, Biaxial, H-Series for soil stabilization. Free DCP testing. Cleveland, Akron, Toledo.',
  keywords: ['Tensar Geogrids Ohio', 'InterAx Geogrid', 'TriAx Geogrid', 'Biaxial Geogrid', 'Cleveland Geogrid', 'Akron Geogrid', 'soil stabilization Ohio', 'pavement reinforcement', 'NX850', 'TX190', 'Ohio'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid',
  },
  openGraph: {
    title: 'Tensar Geogrid Products | InterAx TriAx',
    description: 'Northern Ohio\'s authorized Tensar Geogrid distributor. InterAx NX850, TriAx TX190, Biaxial, H-Series for soil stabilization. Free DCP testing. Cleveland, Akron, Toledo.',
    images: ['/images/products/solution-interax.png'],
  }
};

export default function Geogrid() {
  const products = [
    {
      name: 'InterAx® NX850™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx850',
    },
    {
      name: 'InterAx® NX750™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx750',
    },
    {
      name: 'InterAx® NX650™ Geogrid',
      image: '/images/products/solution-interax.png',
      url: '/geogrid/nx650',
    },
    {
      name: 'InterAx™ NXL™ Geogrid',
      image: '/images/products/nxl.png',
      url: '/geogrid/nxl',
    },
    {
      name: 'Tensar H-Series™ HX165™ Geogrid',
      image: '/images/products/h-series.png',
      url: '/geogrid/hx165',
    },
    {
      name: 'Tensar H-Series™ HX145™ Geogrid',
      image: '/images/products/h-series.png',
      url: '/geogrid/hx145',
    },
    {
      name: 'TriAx® TX190L Geogrid',
      image: '/images/products/solution-triax.png',
      url: '/geogrid/tx190',
    },
    {
      name: 'TriAx® TX Type 2',
      image: '/images/products/solution-triax.png',
      url: '/geogrid/tx-type-2',
    },
    {
      name: 'Biaxial Geogrid BX1200',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/bx1200',
    },
    {
      name: 'Biaxial Geogrid BX1300',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/bx1300',
    },
    {
      name: 'Biaxial Geogrid SQ2020',
      image: '/images/products/solution-biax.png',
      url: '/geogrid/sq2020',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar Geogrid Products"
          description="Authorized Tensar distributor offering the full range of Geogrid solutions including InterAx®, TriAx®, and Biaxial series. Whether you're reinforcing a driveway, parking lot, roadway, or industrial pad, we help you select the right product for your soil conditions. Competitive pricing with expert support and free DCP testing available."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          logo="/images/logos/tensar.png"
          logoLink="https://tensarcorp.com"
          logoAlt="Tensar International"
        />

        {/* Products Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Tensar Geogrid Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  image={product.image}
                  url={product.url}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What Is Geogrid Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is Geogrid?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Geogrid is a polymer mesh designed to mechanically stabilize aggregate bases. When placed between the subgrade and base course, it interlocks with stone to distribute loads across a wider area and limit lateral movement. This can reduce rutting, prevent base contamination from soft soils, and help extend pavement life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tensar manufactures several Geogrid product lines, each engineered for different applications:
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>InterAx® (NX Series):</strong> Multi-axial Geogrids with hexagonal apertures that provide 360-degree stability. Ideal for unpaved roads, parking lots, and sites with variable traffic patterns.</li>
              <li><strong>TriAx® (TX Series):</strong> Triangular aperture Geogrids offering multi-directional strength. Well-suited for paved roads, highways, and heavy-duty applications.</li>
              <li><strong>Biaxial (BX Series):</strong> Rectangular aperture Geogrids designed for bi-directional loading. Commonly used in retaining walls, slopes, and foundation reinforcement.</li>
            </ul>
          </div>
        </section>

        {/* How Geogrid Works Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Geogrid Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When aggregate is compacted over Geogrid, the stone particles partially penetrate the apertures and lock into place. This creates a mechanically stabilized layer that resists movement under load. As traffic passes over the surface, forces are distributed laterally through the Geogrid rather than concentrating on weak spots in the subgrade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result is a stiffer base that can support heavier loads with less material. In many cases, Geogrid allows engineers to reduce aggregate thickness while achieving equivalent or better performance—saving on excavation, hauling, and material costs.
            </p>
          </div>
        </section>

        {/* Evolution of Geogrid Technology Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Evolution of Geogrid Technology</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tensar invented the Geogrid in 1978 and has continued advancing the technology ever since. Their <strong>Biaxial (BX) series</strong>, introduced in the 1980s, featured rectangular apertures for bi-directional reinforcement—ideal for retaining walls and foundation support. In 2007, Tensar launched the <strong>TriAx® series</strong> with triangular apertures that provide radial stiffness in all directions, improving performance under multi-directional traffic loads. The latest innovation is the <strong>InterAx® series</strong> (2021), which uses hexagonal geometry with multiple aperture sizes and coextruded outer layers that conform to aggregate particles for enhanced interlock. Each generation builds on decades of research and field-proven performance.
            </p>
          </div>
        </section>

        {/* Choosing the Right Geogrid Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choosing the Right Geogrid</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The best Geogrid for your project depends on your soil conditions, expected traffic, and structural requirements. Soft or saturated subgrades often benefit from higher-grade products like NX850 or TX190, while stable soils may only need lighter reinforcement. Pavement type also matters—unpaved surfaces see different stress patterns than asphalt roads.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure which product fits your site? We offer free DCP soil testing throughout Northern Ohio to measure your subgrade strength. Based on the results, we can recommend a Geogrid solution tailored to your project&apos;s needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
