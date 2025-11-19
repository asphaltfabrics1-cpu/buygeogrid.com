import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Tensar Geogrid Installations in Ohio | BuyGeogrid.com',
  description: 'View completed Geogrid and geotextile installations across Northern Ohio. Real projects from Cleveland, Akron, Toledo featuring Tensar Geogrids and Solmax Mirafi fabrics.',
  keywords: ['Geogrid installation photos', 'Tensar projects Ohio', 'Geogrid before after', 'Cleveland Geogrid projects', 'Akron installations'],
  openGraph: {
    title: 'Project Gallery | Real Geogrid Installations in Ohio',
    description: 'See real Tensar Geogrid and geotextile projects completed across Northern Ohio.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function Gallery() {
  // Installation projects and featured images
  const projects = [
    {
      title: 'Zombie-Proof Geogrid Installation',
      location: 'Halloween Special',
      description: 'Geogrid installation so easy, even zombies can do it! This Halloween demonstration shows just how simple Tensar Geogrid installation really is.',
      image: '/images/zombie-geogrid-installation.jpeg',
      category: 'Featured',
    },
    {
      title: 'Geogrid Retaining Wall Application',
      location: 'Undead Containment Project',
      description: 'Demonstrating Geogrid\'s versatility beyond soft soil stabilization - including retaining walls and containment applications.',
      image: '/images/geogrid-holds-back-undead.jpeg',
      category: 'Featured',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Matches other pages */}
        <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-black/50 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Project Gallery
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Real Tensar Geogrid and Solmax Mirafi installations across Northern Ohio.
                See the difference professional geosynthetic solutions make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                >
                  Submit Your Project
                </a>
                <a
                  href="tel:4403681420"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
                >
                  Call (440) 368-1420
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            {/* Real Projects Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Projects</h2>
            </div>

            {/* Projects Grid with Lightbox */}
            <GalleryGrid projects={projects} />

            {/* CTA Box */}
            <div className="mt-16 bg-[#1a1a1a] text-white rounded p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Project to Showcase?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We love featuring completed Geogrid installations! Contact us to share your project photos
                and help other contractors see what's possible with Tensar and Solmax products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                >
                  Submit Your Project
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
                >
                  (440) 368-1420
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
