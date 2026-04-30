'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useMemo } from 'react';

// Tensar 2025 Subgrade Pocket Card data
// Aggregate thickness (inches) to pass a proof roll with 1" deformation
const THICKNESS_DATA: Record<string, { label: string; description: string; cbr: number; overExcavation: number; bx: number; hx145: number; hx165: number; nx850: number; nx850dual?: number; nx850display?: string }> = {
  severe: {
    label: '3" Deep Footprint (Severe)',
    description: 'Boots sink 3 inches into subgrade — very soft, wet soil',
    cbr: 0.5,
    overExcavation: 48,
    bx: 36,
    hx145: 32,
    hx165: 28,
    nx850: 24,
    nx850dual: 20,
  },
  moderate: {
    label: '1" Deep Footprint (Moderate)',
    description: 'Boots leave 1-inch impressions — soft but not soupy',
    cbr: 1.0,
    overExcavation: 36,
    bx: 24,
    hx145: 20,
    hx165: 16,
    nx850: 12,
  },
  mild: {
    label: '1" Tire Rut from Pickup (Mild)',
    description: 'Pickup truck leaves 1-inch ruts — slightly soft',
    cbr: 2.0,
    overExcavation: 24,
    bx: 16,
    hx145: 14,
    hx165: 10,
    nx850: 6, // conservative end of 4-6" range per pocket card
    nx850display: '4–6',
  },
};

const GEOGRID_OPTIONS: Record<string, { label: string; key: keyof typeof THICKNESS_DATA.severe }> = {
  bx: { label: 'BX Geogrid (Biaxial)', key: 'bx' },
  hx145: { label: 'H-Series HX145', key: 'hx145' },
  hx165: { label: 'H-Series HX165', key: 'hx165' },
  nx850: { label: 'InterAx NX850 (Best Performance)', key: 'nx850' },
};

// Aggregate cost per SY per inch of thickness
// Formula: (cost_per_ton × 133 pcf × 9 sqft) / (2000 lbs × 12 inches)
// = cost_per_ton × 0.04988
function aggregateCostPerSYInch(costPerTon: number): number {
  return (costPerTon * 133 * 9) / (2000 * 12);
}

export default function CostCalculatorPage() {
  const [soilCondition, setSoilCondition] = useState('moderate');
  const [geogridType, setGeogridType] = useState('nx850');
  const [projectArea, setProjectArea] = useState(5000);
  const [aggregateCost, setAggregateCost] = useState(30);
  const [geogridCostPerSY, setGeogridCostPerSY] = useState(3);

  const results = useMemo(() => {
    const soil = THICKNESS_DATA[soilCondition];
    if (!soil) return null;

    const geogrid = GEOGRID_OPTIONS[geogridType];
    const geogridKey = geogrid.key as string;

    const unstabilizedThickness = soil.overExcavation;
    const stabilizedThickness = soil[geogridKey as keyof typeof soil] as number;
    const thicknessSaved = unstabilizedThickness - stabilizedThickness;

    const costPerInchPerSY = aggregateCostPerSYInch(aggregateCost);

    const unstabilizedCost = unstabilizedThickness * costPerInchPerSY * projectArea;
    const stabilizedAggregateCost = stabilizedThickness * costPerInchPerSY * projectArea;
    const totalGeogridCost = geogridCostPerSY * projectArea;
    const stabilizedTotalCost = stabilizedAggregateCost + totalGeogridCost;

    const savings = unstabilizedCost - stabilizedTotalCost;
    const savingsPercent = unstabilizedCost > 0 ? (savings / unstabilizedCost) * 100 : 0;

    // Show the published range label if available (e.g. "4–6" for NX850 mild)
    const displayThickness = (geogridType === 'nx850' && soil.nx850display) ? soil.nx850display : String(stabilizedThickness);

    return {
      unstabilizedThickness,
      stabilizedThickness,
      stabilizedThicknessDisplay: displayThickness,
      thicknessSaved,
      unstabilizedCost,
      stabilizedAggregateCost,
      totalGeogridCost,
      stabilizedTotalCost,
      savings,
      savingsPercent,
      cbr: soil.cbr,
      isRange: displayThickness !== String(stabilizedThickness),
    };
  }, [soilCondition, geogridType, projectArea, aggregateCost, geogridCostPerSY]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <>
      <Header />

      <section className="bg-[#1a1a1a] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Aggregate Cost Savings Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how much you can save by using Tensar geogrid instead of over-excavating.
            Based on the <Link href="/blog/how-to-pass-a-proof-roll" className="text-[#00c97e] underline hover:text-[#00e08a]">Tensar 2025 Subgrade Pocket Card</Link>.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Inputs */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Soil Condition */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subgrade Condition
                </label>
                <select
                  value={soilCondition}
                  onChange={(e) => setSoilCondition(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] outline-none"
                >
                  {Object.entries(THICKNESS_DATA).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.label} — CBR {data.cbr}%
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">
                  {THICKNESS_DATA[soilCondition]?.description}
                </p>
              </div>

              {/* Geogrid Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Geogrid Product
                </label>
                <select
                  value={geogridType}
                  onChange={(e) => setGeogridType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] outline-none"
                >
                  {Object.entries(GEOGRID_OPTIONS).map(([key, data]) => (
                    <option key={key} value={key}>{data.label}</option>
                  ))}
                </select>
              </div>

              {/* Project Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Area (square yards)
                </label>
                <input
                  type="number"
                  value={projectArea}
                  onChange={(e) => setProjectArea(Math.max(0, Number(e.target.value)))}
                  min={0}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {(projectArea * 9).toLocaleString()} sq ft
                </p>
              </div>

              {/* Aggregate Cost */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aggregate Cost ($/ton installed)
                </label>
                <input
                  type="number"
                  value={aggregateCost}
                  onChange={(e) => setAggregateCost(Math.max(0, Number(e.target.value)))}
                  min={0}
                  step={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Includes material + delivery + placement. Typical: $20–$40/ton
                </p>
              </div>

              {/* Geogrid Cost */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Geogrid Cost ($/SY installed)
                </label>
                <input
                  type="number"
                  value={geogridCostPerSY}
                  onChange={(e) => setGeogridCostPerSY(Math.max(0, Number(e.target.value)))}
                  min={0}
                  step={0.5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Includes material + installation. <Link href="/contact" className="text-[#00c97e] underline">Contact us for pricing</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Without Geogrid */}
                <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">Without Geogrid</h3>
                  <p className="text-sm text-red-700 mb-1">Over-excavation required</p>
                  <p className="text-3xl font-bold text-red-900 mb-4">{results.unstabilizedThickness}&quot; of aggregate</p>
                  <div className="border-t border-red-200 pt-4">
                    <p className="text-sm text-red-700">Total aggregate cost:</p>
                    <p className="text-3xl font-bold text-red-900">{formatCurrency(results.unstabilizedCost)}</p>
                  </div>
                </div>

                {/* With Geogrid */}
                <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">With {GEOGRID_OPTIONS[geogridType].label}</h3>
                  <p className="text-sm text-green-700 mb-1">Stabilized section</p>
                  <p className="text-3xl font-bold text-green-900 mb-4">{results.stabilizedThicknessDisplay}&quot; of aggregate</p>
                  {results.isRange && (
                    <p className="text-xs text-green-700 -mt-3 mb-4">Cost estimate uses conservative end ({results.stabilizedThickness}&quot;)</p>
                  )}
                  <div className="border-t border-green-200 pt-4 space-y-1">
                    <div className="flex justify-between text-sm text-green-700">
                      <span>Aggregate:</span>
                      <span>{formatCurrency(results.stabilizedAggregateCost)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-700">
                      <span>Geogrid ({projectArea.toLocaleString()} SY):</span>
                      <span>{formatCurrency(results.totalGeogridCost)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-green-300">
                      <span className="font-semibold text-green-800">Total:</span>
                      <span className="text-2xl font-bold text-green-900">{formatCurrency(results.stabilizedTotalCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              {results.savings > 0 ? (
                <div className="bg-[#00c97e] rounded-lg p-6 text-center text-white">
                  <p className="text-lg font-semibold mb-1">Estimated Savings with Geogrid</p>
                  <p className="text-5xl font-bold mb-2">{formatCurrency(results.savings)}</p>
                  <p className="text-lg opacity-90">
                    {results.savingsPercent.toFixed(0)}% less cost &bull; {results.thicknessSaved}&quot; less aggregate &bull; Fewer trucks &bull; Faster completion
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-100 rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-yellow-800">
                    At these inputs, geogrid cost exceeds aggregate savings. Try adjusting your aggregate cost or project size, or <Link href="/contact" className="underline">contact us</Link> for actual geogrid pricing.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tensar+ Callout */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 mb-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Want Exact Numbers? Use Tensar+ Software</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                This calculator uses the pocket card for quick estimates. For engineered designs with exact thickness requirements,
                Tensar+ software uses your actual DCP test data to model site-specific solutions.
                We run Tensar+ for our customers at no charge — or you can <a href="https://www.tensarplus.com" target="_blank" rel="noopener noreferrer" className="text-[#00c97e] underline">download it from Tensar</a> and run it yourself.
              </p>
            </div>
            <Link href="/contact" className="inline-block bg-[#00c97e] hover:bg-[#00b36f] text-white font-bold py-3 px-6 rounded transition-colors whitespace-nowrap text-center">
              Free DCP Test + Design
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Important Disclaimer</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              This calculator provides rough estimates based on the Tensar 2025 Subgrade Pocket Card for general comparison purposes only.
              Actual aggregate thickness requirements depend on site-specific conditions including soil type, moisture content, traffic loading,
              and other factors that can only be determined through proper field testing. <strong>CBR values shown are estimated from visual subgrade
              conditions and may not reflect your actual soil strength.</strong>
            </p>
            <p className="text-blue-800 text-sm leading-relaxed mt-3">
              For accurate project design, we recommend <Link href="/blog/dcp-testing-tensar-plus" className="text-blue-700 underline font-semibold">free DCP testing</Link> and
              Tensar+ software analysis — both of which we provide at no cost to our customers in Ohio.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Get Exact Numbers for Your Project
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              We offer free DCP testing throughout Ohio. We&apos;ll test your subgrade, run the data through Tensar+ design software,
              and give you an engineered recommendation — no cost, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#00c97e] hover:bg-[#00b36f] text-white font-bold py-3 px-8 rounded transition-colors"
              >
                Request Free DCP Testing
              </Link>
              <Link
                href="tel:4403681420"
                className="inline-block border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded transition-colors"
              >
                Call (440) 368-1420
              </Link>
            </div>
          </div>

          {/* Reference Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tensar 2025 Subgrade Pocket Card — Full Reference</h2>
            <p className="text-gray-600 mb-6">
              Estimated aggregate thickness (inches) to pass a proof roll with 1&quot; deformation.
              Source: <em>Tensar, a Division of CMC. &copy; 2025.</em>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1a1a1a] text-white">
                    <th className="px-4 py-3 text-left">Subgrade Condition</th>
                    <th className="px-4 py-3 text-center">Est. CBR</th>
                    <th className="px-4 py-3 text-center">Over-Excavation</th>
                    <th className="px-4 py-3 text-center bg-blue-700">BX Geogrid</th>
                    <th className="px-4 py-3 text-center bg-blue-700">HX145</th>
                    <th className="px-4 py-3 text-center bg-blue-700">HX165</th>
                    <th className="px-4 py-3 text-center bg-blue-700">NX850</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">3&quot; Deep Footprint</td>
                    <td className="px-4 py-3 text-center">0.5%</td>
                    <td className="px-4 py-3 text-center text-red-600 font-bold">48&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">36&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">32&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">28&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">24&quot;</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium">1&quot; Deep Footprint</td>
                    <td className="px-4 py-3 text-center">1%</td>
                    <td className="px-4 py-3 text-center text-red-600 font-bold">36&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">24&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">20&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">16&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">12&quot;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">1&quot; Tire Rut (Pickup)</td>
                    <td className="px-4 py-3 text-center">2%</td>
                    <td className="px-4 py-3 text-center text-red-600 font-bold">24&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">16&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">14&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">10&quot;</td>
                    <td className="px-4 py-3 text-center bg-blue-50 font-bold">4–6&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Well graded, angular crushed stone with 5%–15% fines recommended. Special considerations may be needed for highly moisture-sensitive
              soils (silts, organics) or saturated conditions. Contact Tensar (800-TENSAR-1) or your local distributor for site-specific recommendations.
            </p>
            <div className="mt-4">
              <Link
                href="/docs/tensar-2025-subgrade-pocket-card.pdf"
                download
                className="inline-flex items-center gap-2 text-[#00c97e] hover:text-[#00b36f] font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Tensar 2025 Subgrade Pocket Card (PDF)
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
