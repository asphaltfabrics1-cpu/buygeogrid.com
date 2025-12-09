import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patch Packs Ohio | Cold Asphalt Pothole Repair Solution | Cleveland, Akron, Toledo',
  description: 'Patch Packs cold asphalt patch for pothole repair in Northern Ohio. All-weather emergency pavement repair with VOC-free recycled aggregate. Bridge deck repair material. Cleveland, Akron, Canton, Toledo distributor.',
  keywords: [
    'Patch Packs Ohio',
    'pothole repair Northern Ohio',
    'cold asphalt patch',
    'cold patch asphalt',
    'emergency pavement repair',
    'all-weather pothole repair',
    'VOC-free pothole material',
    'recycled aggregate patch',
    'bridge deck repair material',
    'pothole repair Cleveland',
    'pothole repair Akron',
    'pothole repair Toledo',
    'pothole repair Canton',
    'asphalt repair supply Northern Ohio',
    'pothole filler Ohio',
    'Buy Geogrid Patch Packs'
  ],
  alternates: {
    canonical: 'https://buygeogrid.com/patch-packs',
  },
  openGraph: {
    title: 'Patch Packs Ohio | Cold Asphalt Pothole Repair Solution',
    description: 'Cold asphalt patch for pothole repair in Northern Ohio. All-weather emergency pavement repair. VOC-free, recycled aggregate. Cleveland, Akron, Toledo distributor.',
    images: ['/images/products/patch-packs.png'],
  },
};

export default function PatchPacks() {
  const features = [
    { text: 'No specialized equipment required' },
    { text: 'Single-person application' },
    { text: 'VOC-free, environmentally conscious' },
    { text: 'Immediate traffic access after application' },
    { text: 'Works in all weather conditions and seasons' },
    { text: '100% recycled aggregate' },
  ];

  const applications = [
    { text: 'Bridge deck repair material' },
    { text: 'Highway and road pavements (asphalt and concrete)' },
    { text: 'Pavement leveling around drains and manholes' },
    { text: 'Parking facilities and driveways' },
    { text: 'High-traffic commercial surfaces' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Patch Packs Pothole Repair Solution"
          description="Fast and easy, all-weather emergency pavement repair for potholes, spalls, and other defects. Patch Packs combine 100% recycled aggregate with a non-volatile binder and cold asphalt for durable repairs. Authorized cold patch asphalt distributor serving Northern Ohio with competitive pricing and expert support."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          image="/images/products/patch-packs.png"
          imageAlt="Patch Packs Cold Asphalt Pothole Repair Solution"
          logo="/images/logos/PatchPacksTM Logo 2in.png"
          logoLink="https://fptinfrastructure.com/products/pavement-repair-materials/patch-packs/"
          logoAlt="Patch Packs"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Are Patch Packs Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Patch Packs?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Patch Packs are a fast and easy cold asphalt patch solution for all-weather emergency pavement repair. Whether you need to fix potholes, spalls, or other pavement defects, this cold patch asphalt product delivers durable results without specialized equipment. The VOC-free pothole material combines 100% recycled aggregate with a non-volatile binder, making it an environmentally conscious choice for pavement maintenance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Available in Standard and Flex variants, Patch Packs are designed for repairing asphalt and reactive concrete defects measuring 1 inch or deeper. The VOC-free formulation makes them safe to use in any environment—from municipal road crews to commercial property managers.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Cold Patch Asphalt Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The asphalt binder in this cold asphalt patch enables Patch Packs to expand and compress under vehicle load, establishing adhesion to existing surfaces while simultaneously sealing the top and side edges of the repair area. Unlike hot mix asphalt, this all-weather pothole repair solution works in any temperature.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simply clean the pothole of loose debris, place the recycled aggregate patch material into the hole, and compact it. No heating, mixing, or specialized equipment is required. The repair can be opened to traffic immediately after compaction—perfect for emergency pavement repair situations.
            </p>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pothole Repair Applications</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>Bridge deck repair material</strong> – Trusted solution for bridge approach and deck repairs</li>
              <li><strong>Highway and road pavements</strong> – Works on both asphalt and concrete surfaces</li>
              <li><strong>Utility cut restoration</strong> – Pavement leveling around drains, manholes, and access points</li>
              <li><strong>Multi-use vehicular pathways</strong> – Bike paths, trails, and shared roadways</li>
              <li><strong>Commercial surfaces</strong> – Parking facilities, driveways, and high-traffic areas</li>
              <li><strong>Emergency cold weather repairs</strong> – All-weather pothole repair when hot mix isn&apos;t available</li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits of Cold Asphalt Patch</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>No specialized equipment required</strong> – Simple application process for any crew</li>
              <li><strong>Single-person application</strong> – Reduces labor costs significantly</li>
              <li><strong>Reduces safety hazards</strong> – For workers and drivers alike</li>
              <li><strong>VOC-free pothole material</strong> – Environmentally conscious formulation</li>
              <li><strong>Immediate traffic access</strong> – No curing time needed for emergency pavement repair</li>
              <li><strong>All-weather pothole repair</strong> – Works in any season or condition, including freezing temperatures</li>
              <li><strong>100% recycled aggregate</strong> – Sustainable choice for municipalities and contractors</li>
            </ul>
          </div>
        </section>

        {/* Product Variants Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Variants</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Patch Packs</h3>
                <p className="text-gray-700">
                  Designed for standard cold asphalt patch repairs on asphalt and concrete pavement. Ideal for most pothole and spall repairs on roads, parking lots, and driveways throughout Northern Ohio.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flex Patch Packs</h3>
                <p className="text-gray-700">
                  Enhanced flexibility for areas with greater movement or thermal expansion. The preferred bridge deck repair material for surfaces subject to heavy loads and temperature fluctuations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Repair Potholes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Repair Potholes Quickly?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Potholes cause vehicle damage, create safety hazards, and accelerate pavement deterioration. Water entering through potholes undermines the base layers, leading to larger failures and more expensive repairs. In freeze-thaw climates like Northern Ohio, this cycle can cause rapid pavement breakdown—making emergency pavement repair essential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Addressing potholes promptly with an effective cold patch asphalt solution like Patch Packs protects your pavement investment and reduces liability exposure. Quick all-weather pothole repair also improves the driving experience and public perception of road conditions.
            </p>
          </div>
        </section>

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pothole Repair Supplier Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Patch Packs cold asphalt patch at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours. Contact us for current availability and to discuss your pothole repair needs.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Schedule a free Lunch & Learn for your team. We provide expert training on cold asphalt patch products, pavement repair solutions, and geosynthetics—plus free lunch and PDH credits for engineers.
            </p>
            <Link
              href="/lunch-and-learn"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
            >
              Schedule a Lunch & Learn
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order Patch Packs?</h2>
            <p className="text-lg text-gray-300 mb-6">Get competitive pricing on cold asphalt patch and expert support from your Northern Ohio asphalt repair supply distributor</p>
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
      </main>
      <Footer />
    </div>
  );
}
