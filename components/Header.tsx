'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [geogridsOpen, setGeogridsOpen] = useState(false);

  return (
    <>
      {/* Combined Header & Navigation */}
      <header className="bg-[#1a1a1a] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <Link href="https://asphaltfabrics.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="/images/logos/logo-8.22.18.jpg"
                  alt="Asphalt Fabrics Logo"
                  className="h-[50px]"
                />
              </Link>
            </div>

            {/* Center Navigation - Desktop Only */}
            <nav className="hidden md:block flex-1">
              <ul className="flex justify-center items-center gap-0">
            <li>
              <Link href="/" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Home
              </Link>
            </li>

            {/* Geogrids Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setGeogridsOpen(true)}
              onMouseLeave={() => setGeogridsOpen(false)}
            >
              <Link href="/geogrid" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Geogrids ▾
              </Link>
              {geogridsOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[220px] z-50"
                  onMouseEnter={() => setGeogridsOpen(true)}
                  onMouseLeave={() => setGeogridsOpen(false)}
                >
                  <Link href="/geogrid/nx850" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    InterAx® NX850™
                  </Link>
                  <Link href="/geogrid/nx750" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    InterAx® NX750™
                  </Link>
                  <Link href="/geogrid/nx650" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    InterAx® NX650™
                  </Link>
                  <Link href="/geogrid/hx165" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    H-Series™ HX165™
                  </Link>
                  <Link href="/geogrid/hx145" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    H-Series™ HX145™
                  </Link>
                  <Link href="/geogrid/tx190" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    TriAx® TX190L
                  </Link>
                  <Link href="/geogrid/tx-type-2" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    TriAx® TX Type 2
                  </Link>
                  <Link href="/geogrid/nxl" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    InterAx™ NXL™
                  </Link>
                  <Link href="/geogrid/bx1200" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    BX1200
                  </Link>
                  <Link href="/geogrid/bx1300" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    BX1300
                  </Link>
                  <Link href="/geogrid/sq2020" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    SQ2020
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/woven-fabrics" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/nonwoven-fabrics" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Non-Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/interlayers" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Interlayers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right - Call Now Button */}
        <div className="flex-shrink-0">
          <Link
            href="tel:4403681420"
            className="inline-flex items-center px-5 py-2 bg-[#00c97e] hover:bg-[#00b36f] text-white rounded font-semibold transition-colors duration-200 whitespace-nowrap"
          >
            Call Now
          </Link>
        </div>

        {/* Hamburger Menu - Mobile Only */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50 p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="bg-white h-[3px] w-[25px] rounded"></div>
          <div className="bg-white h-[3px] w-[25px] rounded"></div>
          <div className="bg-white h-[3px] w-[25px] rounded"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 border-t border-white/10 pt-4">
          <ul className="flex flex-col gap-0">
            <li>
              <Link href="/" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link href="/geogrid" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Geogrids
              </Link>
            </li>
            <li>
              <Link href="/woven-fabrics" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/nonwoven-fabrics" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Non-Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/interlayers" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Interlayers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block px-4 py-3 hover:bg-white/10 transition-colors font-semibold">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  </header>
    </>
  );
}
