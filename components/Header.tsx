'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [geogridsOpen, setGeogridsOpen] = useState(false);
  const [wovenOpen, setWovenOpen] = useState(false);
  const [nonWovenOpen, setNonWovenOpen] = useState(false);
  const [interlayersOpen, setInterlayersOpen] = useState(false);
  const [patchPacksOpen, setPatchPacksOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <>
      {/* Combined Header & Navigation */}
      <header className="bg-[#1a1a1a] text-white py-3 px-4 border-b-[3px] border-[#00c97e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Center Navigation - Desktop Only */}
            <nav className="hidden md:block flex-1">
              <ul className="flex justify-center items-center gap-0">
            <li>
              <Link href="/" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Home
              </Link>
            </li>

            {/* Geogrids Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setGeogridsOpen(true)}
              onMouseLeave={() => setGeogridsOpen(false)}
            >
              <Link href="/geogrid" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Geogrids
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
              <Link href="/woven-fabrics" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Woven Fabrics
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
              <Link href="/nonwoven-fabrics" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Non-Woven Fabrics
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
              <Link href="/interlayers" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Interlayers
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

            {/* Patch Packs */}
            <li>
              <Link href="/patch-packs" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Patch Packs
              </Link>
            </li>

            {/* Solutions Dropdown — problem-first landing pages for broader search intent */}
            <li
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Solutions
              </button>
              {solutionsOpen && (
                <div
                  className="md:absolute relative top-full left-0 bg-[#2a2a2a] border border-gray-700 shadow-lg py-2 min-w-[280px] z-50"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="px-4 py-2 text-xs uppercase tracking-wide text-gray-400 font-semibold">Fix a Problem</div>
                  <Link href="/soft-ground-solutions" className="block px-4 py-2 hover:bg-white/10 transition-colors">Soft Ground Solutions</Link>
                  <Link href="/muddy-driveway-fix" className="block px-4 py-2 hover:bg-white/10 transition-colors">Muddy Driveway Fix</Link>
                  <Link href="/gravel-driveway-stabilization" className="block px-4 py-2 hover:bg-white/10 transition-colors">Gravel Driveway Stabilization</Link>
                  <Link href="/weak-subgrade" className="block px-4 py-2 hover:bg-white/10 transition-colors">Weak Subgrade Under Pavement</Link>
                  <Link href="/potholes-keep-coming-back" className="block px-4 py-2 hover:bg-white/10 transition-colors">Potholes Keep Coming Back</Link>

                  <div className="px-4 py-2 mt-2 text-xs uppercase tracking-wide text-gray-400 font-semibold border-t border-gray-700 pt-3">Compare Products</div>
                  <Link href="/geogrid-vs-geotextile" className="block px-4 py-2 hover:bg-white/10 transition-colors">Geogrid vs. Geotextile</Link>
                  <Link href="/petrotac-vs-paving-fabric" className="block px-4 py-2 hover:bg-white/10 transition-colors">Petrotac vs. Paving Fabric</Link>
                  <Link href="/nx850-vs-tx190" className="block px-4 py-2 hover:bg-white/10 transition-colors">NX850 vs. TX190L</Link>

                  <div className="px-4 py-2 mt-2 text-xs uppercase tracking-wide text-gray-400 font-semibold border-t border-gray-700 pt-3">Northern Ohio</div>
                  <Link href="/muddy-driveway-cleveland" className="block px-4 py-2 hover:bg-white/10 transition-colors">Cleveland — Muddy Driveways</Link>
                  <Link href="/soft-ground-akron" className="block px-4 py-2 hover:bg-white/10 transition-colors">Akron — Soft Ground</Link>
                  <Link href="/subgrade-stabilization-toledo" className="block px-4 py-2 hover:bg-white/10 transition-colors">Toledo — Subgrade Stabilization</Link>
                </div>
              )}
            </li>

            {/* Residential — residential cost calculator + quote */}
            <li>
              <Link href="/residential" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Residential
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Contact Us
              </Link>
            </li>

            {/* Resources Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <Link href="/resources" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Resources
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
                  <Link href="/cost-calculator" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Cost Calculator
                  </Link>
                  <a
                    href="/docs/asphalt-fabrics-supply-flyer.pdf"
                    download
                    className="block px-4 py-2 hover:bg-white/10 transition-colors border-t border-gray-700 mt-1 pt-2"
                  >
                    ⬇ Download Flyer
                  </a>
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
              <Link href="/" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link href="/geogrid" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Geogrids
              </Link>
            </li>
            <li>
              <Link href="/woven-fabrics" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/nonwoven-fabrics" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Non-Woven Fabrics
              </Link>
            </li>
            <li>
              <Link href="/interlayers" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Interlayers
              </Link>
            </li>
            <li>
              <Link href="/patch-packs" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Patch Packs
              </Link>
            </li>

            {/* Solutions section — problem-first landing pages */}
            <li className="mt-2">
              <div className="px-3 py-2 text-xs uppercase tracking-wide text-gray-400 font-semibold border-t border-gray-700 pt-3">Solutions</div>
              <Link href="/soft-ground-solutions" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Soft Ground Solutions</Link>
              <Link href="/muddy-driveway-fix" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Muddy Driveway Fix</Link>
              <Link href="/gravel-driveway-stabilization" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Gravel Driveway Stabilization</Link>
              <Link href="/weak-subgrade" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Weak Subgrade</Link>
              <Link href="/potholes-keep-coming-back" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Potholes Keep Coming Back</Link>
              <Link href="/geogrid-vs-geotextile" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Geogrid vs. Geotextile</Link>
              <Link href="/petrotac-vs-paving-fabric" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Petrotac vs. Paving Fabric</Link>
              <Link href="/nx850-vs-tx190" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">NX850 vs. TX190L</Link>
              <Link href="/muddy-driveway-cleveland" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Cleveland Driveways</Link>
              <Link href="/soft-ground-akron" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Akron Soft Ground</Link>
              <Link href="/subgrade-stabilization-toledo" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10">Toledo Subgrade</Link>
            </li>

            <li className="mt-2 border-t border-gray-700 pt-2">
              <Link href="/residential" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Residential
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/lunch-and-learn" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Lunch & Learn
              </Link>
            </li>
            <li>
              <Link href="/cost-calculator" className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                Cost Calculator
              </Link>
            </li>
            <li>
              <a href="/docs/asphalt-fabrics-supply-flyer.pdf" download className="block px-3 py-4 hover:bg-white/10 transition-colors font-semibold text-base">
                ⬇ Download Flyer
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  </header>
    </>
  );
}
