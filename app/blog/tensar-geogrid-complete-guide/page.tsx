import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar Geogrid: Complete Guide to Types, Applications & Benefits | 2025',
  description: 'Complete guide to Tensar geogrid products. Learn about InterAx, TriAx, and Biaxial geogrids, their applications, benefits, and how to choose the right geogrid for your project. Ohio distributor.',
  keywords: [
    'tensar geogrid',
    'tensar geogrids',
    'tensar interax',
    'tensar triax',
    'tensar biaxial geogrid',
    'geogrid for roads',
    'geogrid soil stabilization',
    'tensar geogrid price',
    'tensar geogrid specifications',
    'geogrid Ohio',
    'geogrid distributor'
  ],
  alternates: {
    canonical: 'https://buygeogrid.com/blog/tensar-geogrid-complete-guide',
  },
  openGraph: {
    title: 'Tensar Geogrid: Complete Guide to Types, Applications & Benefits',
    description: 'Complete guide to Tensar geogrid products including InterAx, TriAx, and Biaxial. Learn applications, benefits, and specifications.',
    images: ['/images/products/solution-interax.png'],
    type: 'article',
  },
};

export default function TensarGeogridGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#00c97e] font-semibold mb-4">Geogrid Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tensar Geogrid: Complete Guide to Types, Applications & Benefits</h1>
            <p className="text-xl text-gray-300">Everything you need to know about Tensar geogrid products, from selection to installation.</p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tensar geogrid is one of the most trusted names in soil stabilization and pavement reinforcement. Whether you&apos;re building roads, parking lots, or working on subgrade improvement, understanding the different types of Tensar geogrids and their applications can help you choose the right product for your project and potentially reduce construction costs significantly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                This guide covers everything you need to know about Tensar geogrid products, including the InterAx, TriAx, and Biaxial product lines available through authorized distributors in Ohio.
              </p>
            </section>

            {/* What is Tensar Geogrid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Tensar Geogrid?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tensar geogrid is a polymer-based reinforcement material used in civil engineering and construction applications. The geogrid features a grid-like structure with apertures (openings) that interlock with aggregate materials, creating a mechanically stabilized layer that distributes loads more effectively than aggregate alone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Tensar Corporation pioneered geogrid technology and continues to lead the industry with innovative products designed for specific applications. Their geogrids are manufactured using a proprietary process that creates stiff, integral junctions capable of withstanding significant loads without failing.
              </p>
            </section>

            {/* Types of Tensar Geogrid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Tensar Geogrid</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">InterAx Geogrids (NX Series)</h3>
                <p className="text-gray-700 mb-4">
                  The InterAx geogrid line represents Tensar&apos;s most advanced technology, featuring a multi-aperture design with three distinct geometries: hexagonal, trapezoidal, and triangular. This unique structure provides consistent performance in all directions, making it ideal for base reinforcement where loads come from multiple angles.
                </p>
                <p className="text-gray-700 mb-4"><strong>Products include:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><Link href="/geogrid/nx850" className="text-[#00c97e] hover:underline font-semibold">InterAx NX850</Link> – Heavy-duty applications, maximum stabilization</li>
                  <li><Link href="/geogrid/nx750" className="text-[#00c97e] hover:underline font-semibold">InterAx NX750</Link> – High-performance for demanding projects</li>
                  <li><Link href="/geogrid/nx650" className="text-[#00c97e] hover:underline font-semibold">InterAx NX650</Link> – Standard applications, excellent value</li>
                  <li><Link href="/geogrid/nxl" className="text-[#00c97e] hover:underline font-semibold">InterAx NXL</Link> – Lightweight option for less demanding conditions</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Road construction, parking lots, working platforms, and any application requiring multi-directional load distribution.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">H-Series Geogrids (HX Series)</h3>
                <p className="text-gray-700 mb-4">
                  The H-Series geogrids offer optimized geometry for base reinforcement at a more economical price point than InterAx. They provide excellent performance for stabilizing soft subgrades and improving pavement performance.
                </p>
                <p className="text-gray-700 mb-4"><strong>Products include:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><Link href="/geogrid/hx165" className="text-[#00c97e] hover:underline font-semibold">H-Series HX165</Link> – Higher tensile strength for demanding applications</li>
                  <li><Link href="/geogrid/hx145" className="text-[#00c97e] hover:underline font-semibold">H-Series HX145</Link> – Cost-effective base reinforcement</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Soft subgrade stabilization, access roads, pavement improvement, and projects needing a balance of performance and economy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TriAx Geogrids (TX Series)</h3>
                <p className="text-gray-700 mb-4">
                  TriAx geogrids feature triangular apertures that provide three-directional strength, improving performance over traditional biaxial designs. The geometry creates more efficient load transfer for applications with varied traffic patterns.
                </p>
                <p className="text-gray-700 mb-4"><strong>Products include:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><Link href="/geogrid/tx190" className="text-[#00c97e] hover:underline font-semibold">TriAx TX190L</Link> – Versatile tri-axial performance with 60mm rib pitch</li>
                  <li><Link href="/geogrid/tx-type-2" className="text-[#00c97e] hover:underline font-semibold">TriAx TX Type 2</Link> – Heavy-duty with denser 33mm rib pitch for maximum reinforcement</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Heavy traffic roads, container yards, truck terminals, airport taxiways, and industrial facilities.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Biaxial Geogrids (BX Series)</h3>
                <p className="text-gray-700 mb-4">
                  Biaxial geogrids provide two-directional strength with rectangular apertures, offering equal performance in both machine and cross-machine directions. These cost-effective products are proven performers for base course stabilization.
                </p>
                <p className="text-gray-700 mb-4"><strong>Products include:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><Link href="/geogrid/bx1200" className="text-[#00c97e] hover:underline font-semibold">BX1200</Link> – Tight apertures (1.0&quot; x 1.3&quot;) for fine aggregate</li>
                  <li><Link href="/geogrid/bx1300" className="text-[#00c97e] hover:underline font-semibold">BX1300</Link> – Large apertures (1.8&quot; x 2.5&quot;) for coarse aggregate</li>
                  <li><Link href="/geogrid/sq2020" className="text-[#00c97e] hover:underline font-semibold">SQ2020</Link> – Economy option with square apertures for light-duty applications</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Roads, parking lots, base course stabilization, subgrade improvement, and unpaved roads.
                </p>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tensar Geogrid Applications</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Road Construction & Rehabilitation</h3>
              <p className="text-gray-700 mb-6">
                Tensar geogrid is widely used in road construction to stabilize subgrade soils and reduce the required thickness of aggregate base courses. This can result in significant cost savings while improving long-term pavement performance. The geogrid creates a mechanically stabilized layer that distributes wheel loads over a wider area, reducing stress on the subgrade.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Parking Lots & Commercial Paving</h3>
              <p className="text-gray-700 mb-6">
                Commercial parking lots benefit from geogrid reinforcement, particularly in areas with poor soils or heavy vehicle traffic. The <Link href="/geogrid/nx750" className="text-[#00c97e] hover:underline">InterAx NX750</Link> is commonly specified for parking lot applications due to its balance of performance and cost-effectiveness.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Working Platforms & Temporary Roads</h3>
              <p className="text-gray-700 mb-6">
                Construction sites often require temporary roads and working platforms over soft ground. Tensar geogrid allows these structures to be built with less aggregate, reducing material costs and construction time.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Stabilization</h3>
              <p className="text-gray-700 mb-6">
                For sites with weak or unstable soils, Tensar geogrid provides mechanical stabilization that allows construction to proceed without expensive soil removal and replacement. This is particularly valuable in Ohio where clay soils can present challenges.
              </p>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tensar Geogrid</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li><strong>Reduced Aggregate Requirements:</strong> Geogrid reinforcement can reduce aggregate base thickness by 30-50% while maintaining equivalent performance.</li>
                <li><strong>Lower Construction Costs:</strong> Less material means less trucking, less excavation, and faster construction timelines.</li>
                <li><strong>Improved Performance:</strong> Mechanically stabilized layers outperform unreinforced aggregate over time, with less rutting and deformation.</li>
                <li><strong>Extended Pavement Life:</strong> Better load distribution reduces stress on underlying layers, extending overall pavement life.</li>
                <li><strong>Sustainable Construction:</strong> Using less aggregate reduces the environmental impact of construction projects.</li>
                <li><strong>Proven Technology:</strong> Tensar geogrids have been used successfully on thousands of projects worldwide since the 1980s.</li>
              </ul>
            </section>

            {/* How to Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Tensar Geogrid</h2>
              <p className="text-gray-700 mb-4">
                Selecting the appropriate geogrid depends on several factors:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Subgrade Conditions:</strong> Weaker soils require stronger geogrids like the <Link href="/geogrid/nx850" className="text-[#00c97e] hover:underline">NX850</Link> for maximum base reinforcement.</li>
                <li><strong>Traffic Loads:</strong> Heavy truck traffic or industrial applications benefit from <Link href="/geogrid/tx-type-2" className="text-[#00c97e] hover:underline">TX Type 2</Link> or <Link href="/geogrid/bx1300" className="text-[#00c97e] hover:underline">BX1300</Link>.</li>
                <li><strong>Value Engineering:</strong> <Link href="/geogrid/hx165" className="text-[#00c97e] hover:underline">H-Series geogrids</Link> offer strong performance at a more economical price point than InterAx.</li>
                <li><strong>Budget Constraints:</strong> Products like <Link href="/geogrid/nx650" className="text-[#00c97e] hover:underline">NX650</Link> or <Link href="/geogrid/sq2020" className="text-[#00c97e] hover:underline">SQ2020</Link> offer excellent value for lighter applications.</li>
              </ul>
              <p className="text-gray-700">
                We offer free DCP soil testing and technical consultations to help you select the right geogrid for your project. Our team can analyze your site conditions and recommend the most cost-effective solution.
              </p>
            </section>

            {/* Ohio Distributor */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tensar Geogrid Distributor in Ohio</h2>
              <p className="text-gray-700 mb-4">
                As an authorized Tensar distributor, we stock a full range of Tensar geogrid products at our Solon, Ohio warehouse. We serve contractors, engineers, and municipalities throughout Northern Ohio including Cleveland, Akron, Canton, Youngstown, and Toledo.
              </p>
              <p className="text-gray-700 mb-4">
                Our services include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Competitive pricing on all Tensar geogrid products</li>
                <li>Fast delivery throughout Northern Ohio</li>
                <li>Free DCP soil testing</li>
                <li>Technical support and product selection assistance</li>
                <li>Lunch & Learn presentations for engineering firms</li>
              </ul>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Tensar Geogrid for Your Project?</h2>
            <p className="text-lg text-gray-300 mb-6">Get competitive pricing and expert support from your authorized Ohio distributor</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Request a Quote
              </Link>
              <Link href="tel:4403681420" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200">
                (440) 368-1420
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Tensar Geogrid Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/geogrid" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">All Geogrids</h3>
                <p className="text-gray-600 text-sm">View our complete geogrid selection</p>
              </Link>
              <Link href="/geogrid/nx750" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">InterAx NX750</h3>
                <p className="text-gray-600 text-sm">Popular choice for roads & parking lots</p>
              </Link>
              <Link href="/geogrid/hx165" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">H-Series HX165</h3>
                <p className="text-gray-600 text-sm">Heavy-duty industrial applications</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
