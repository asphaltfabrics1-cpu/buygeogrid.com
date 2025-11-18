import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black via-dark-950 to-black text-white py-12 px-6 border-t-4 border-primary-500 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-12">
          {/* Company Info */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-4 text-white font-black text-2xl">BuyGeogrid.com</h3>
            <p className="my-2 text-white/90 font-semibold text-lg">Asphalt Fabrics & Supply</p>
            <p className="my-2 text-white/90 font-medium">7620 Bond Street, Glenwillow, OH 44139</p>
            <p className="my-2 text-white/90 font-semibold">
              Phone:{' '}
              <Link href="tel:14403681420" className="text-accent-500 hover:text-accent-400 font-bold hover:underline transition-colors">
                (440) 368-1420
              </Link>
            </p>
            <p className="my-2 text-white/90 font-semibold">
              Email:{' '}
              <Link
                href="mailto:jstone@asphaltfabrics.com"
                className="text-accent-500 hover:text-accent-400 font-bold hover:underline transition-colors"
              >
                jstone@asphaltfabrics.com
              </Link>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-[2] min-w-[200px]">
            <h4 className="mb-4 text-2xl font-black text-accent-500 border-b-3 border-accent-500 pb-2">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-accent-500 font-bold text-lg hover:text-accent-400 hover:scale-110 inline-block transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/geogrid"
                  className="text-accent-500 font-bold text-lg hover:text-accent-400 hover:scale-110 inline-block transition-all"
                >
                  Geogrids
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-accent-500 font-bold text-lg hover:text-accent-400 hover:scale-110 inline-block transition-all"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action & Social */}
          <div className="flex-1 min-w-[250px]">
            <h4 className="mb-3 text-white font-black text-xl">Need a Quote?</h4>
            <p className="text-white/90 mb-6 font-semibold leading-relaxed">
              Call now or fill out our quote request form. We match pricing and offer
              bulk discounts.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-black rounded-xl shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </Link>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61577581101649"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 hover:scale-110 transition-all"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/24/145/145802.png"
                  alt="Facebook"
                  className="h-6"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/asphalt-fabrics-supply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 hover:scale-110 transition-all"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/24/145/145807.png"
                  alt="LinkedIn"
                  className="h-6"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 pt-8 text-base text-white/70 border-t border-white/10 font-medium">
          © {currentYear} BuyGeogrid.com. All rights reserved Asphalt Fabrics & Supply.
        </div>
      </div>
    </footer>
  );
}
