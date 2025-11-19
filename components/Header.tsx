'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [geogridsOpen, setGeogridsOpen] = useState(false);
  const [wovenOpen, setWovenOpen] = useState(false);
  const [nonWovenOpen, setNonWovenOpen] = useState(false);
  const [interlayersOpen, setInterlayersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <>
      {/* Combined Header & Navigation */}
      <header className="bg-[#1a1a1a] text-white py-3 px-4 border-b-[3px] border-[#00c97e]">
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
              <Link href="/" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Home
              </Link>
            </li>

            {/* Geogrids Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setGeogridsOpen(true)}
              onMouseLeave={() => setGeogridsOpen(false)}
            >
              <Link href="/geogrid" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
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

            {/* Woven Fabrics Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setWovenOpen(true)}
              onMouseLeave={() => setWovenOpen(false)}
            >
              <Link href="/woven-fabrics" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Woven Fabrics ▾
              </Link>
              {wovenOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[220px] z-50"
                  onMouseEnter={() => setWovenOpen(true)}
                  onMouseLeave={() => setWovenOpen(false)}
                >
                  <Link href="/500x" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Mirafi® 500X
                  </Link>
                  <Link href="/600x" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Mirafi® 600X
                  </Link>
                </div>
              )}
            </li>

            {/* Non-Woven Fabrics Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setNonWovenOpen(true)}
              onMouseLeave={() => setNonWovenOpen(false)}
            >
              <Link href="/nonwoven-fabrics" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Non-Woven Fabrics ▾
              </Link>
              {nonWovenOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[220px] z-50"
                  onMouseEnter={() => setNonWovenOpen(true)}
                  onMouseLeave={() => setNonWovenOpen(false)}
                >
                  <Link href="/135n" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Mirafi® 135N
                  </Link>
                  <Link href="/140n" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Mirafi® 140N
                  </Link>
                  <Link href="/180n" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Mirafi® 180N
                  </Link>
                </div>
              )}
            </li>

            {/* Interlayers Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setInterlayersOpen(true)}
              onMouseLeave={() => setInterlayersOpen(false)}
            >
              <Link href="/interlayers" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Interlayers ▾
              </Link>
              {interlayersOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[220px] z-50"
                  onMouseEnter={() => setInterlayersOpen(true)}
                  onMouseLeave={() => setInterlayersOpen(false)}
                >
                  <Link href="/petrotac-1ft" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Petrotac 1ft Roll
                  </Link>
                  <Link href="/petrotac-15ft" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Petrotac 1.5ft Roll
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/contact" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Contact Us
              </Link>
            </li>

            {/* Resources Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <Link href="/resources" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Resources ▾
              </Link>
              {resourcesOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[220px] z-50"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <Link href="/faq" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    FAQ
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Blog
                  </Link>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Gallery
                  </Link>
                  <Link href="/lunch-and-learn" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Lunch & Learn
                  </Link>
                </div>
              )}
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
              <Link href="/" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link href="/geogrid" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Geogrids
              </Link>
            </li>
            <li>
              <Link href="/woven-fabrics" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/nonwoven-fabrics" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Non-Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/interlayers" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Interlayers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/lunch-and-learn" className="block px-4 py-4 hover:bg-white/10 transition-colors font-semibold text-lg">
                Lunch & Learn
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
