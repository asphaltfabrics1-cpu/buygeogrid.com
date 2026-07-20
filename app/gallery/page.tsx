import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Geogrid Installations Ohio',
  description: 'Geogrid & geotextile installations across Ohio. Real projects from Cleveland, Akron, Toledo.',
  keywords: ['Geogrid installation photos', 'Tensar projects Ohio', 'Geogrid before after', 'Cleveland Geogrid projects', 'Akron installations'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/gallery',
  },
  openGraph: {
    title: 'Project Gallery | Geogrid Installations Ohio',
    description: 'Real Tensar Geogrid and geotextile projects across Northern Ohio.',
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function Gallery() {
  // Installation projects and featured images
  const projects: any[] = [];

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
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            {/* Real Projects Section */}
            <Reveal className="mb-12">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Photos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Installation Projects</h2>
            </Reveal>

            {/* Projects Grid with Lightbox */}
            <Reveal delay={120}>
              <GalleryGrid projects={projects} />
            </Reveal>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                Have a Project to Showcase?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We love featuring completed Geogrid installations! Contact us to share your project photos
                and help other contractors see what's possible with Tensar and Solmax products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Submit Your Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors group"
                >
                  <span>(440) 368-1420</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
