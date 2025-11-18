import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
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
  // Featured fun content
  const featuredArt = [
    {
      title: 'Geogrid Installation: So Easy, Even Zombies Can Do It!',
      location: 'Halloween 2025',
      description: 'Our creative take on how simple Geogrid installation really is. Check out the full Halloween blog post!',
      image: '/images/zombie-geogrid-installation.jpeg',
      category: 'Fun Content',
      link: '/blog/geogrid-zombie-apocalypse',
    },
    {
      title: 'Geogrid Holds Back More Than Just Soft Soil!',
      location: 'Halloween 2025',
      description: 'It can also hold back the cursed undead! A fun look at Geogrid\'s unexpected uses.',
      image: '/images/geogrid-holds-back-undead.jpeg',
      category: 'Fun Content',
      link: '/blog/geogrid-zombie-apocalypse',
    },
  ];

  // Real projects - owner can add real photos later
  const projects = [
    {
      title: 'Coming Soon: Your Projects Here!',
      location: 'Northern Ohio',
      description: 'We\'re building our gallery with real installation photos from projects across Ohio.',
      image: '/images/logos/afsupplylogo_transparent.png',
      category: 'All Projects',
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

            {/* Featured Art Section */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Featured Content</h2>
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  🎃 Halloween Special
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArt.map((art, index) => (
                  <Link
                    key={index}
                    href={art.link}
                    className="bg-white rounded border border-gray-200 overflow-hidden hover:border-orange-500 transition-all duration-200 hover:shadow-xl group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-orange-600 font-semibold mb-2">
                        {art.category}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {art.title}
                      </h3>
                      <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {art.location}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {art.description}
                      </p>
                      <div className="flex items-center text-orange-600 font-semibold">
                        Read Full Story
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-16"></div>

            {/* Real Projects Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Projects</h2>
              <div className="bg-green-50 border-2 border-[#00c97e] rounded p-8 mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Building Our Gallery
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  This gallery will showcase real Tensar Geogrid and Solmax Mirafi installations from projects
                  across Cleveland, Akron, Toledo, and all of Northern Ohio. From residential driveways to
                  commercial parking lots, see the difference professional geosynthetic solutions make.
                </p>
              </div>
            </div>

            {/* Projects Grid (placeholder) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded border border-gray-200 overflow-hidden hover:border-[#00c97e] transition-all duration-200 hover:shadow-lg"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full h-auto opacity-70"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#00c97e] font-semibold mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
