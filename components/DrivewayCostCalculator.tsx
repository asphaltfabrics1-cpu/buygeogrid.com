'use client';

import { useMemo, useState } from 'react';

const PHONE_DISPLAY = '(440) 384-1897';
const PHONE_TEL = 'tel:4403841897';

type SubgradeKey = 'severe' | 'moderate' | 'mild';
type LoadClass = 'vehicular' | 'lightStructural' | 'pointLoad';

// Subgrade descriptions (used as user-facing labels)
const SUBGRADE_LABEL: Record<SubgradeKey, { label: string; hint: string; cbr: number }> = {
  severe: {
    label: 'Severe — boots sink 3" (soupy clay, wet fill)',
    hint: 'Very soft, wet subgrade. Boot leaves a 3-inch impression. CBR 0.5%.',
    cbr: 0.5,
  },
  moderate: {
    label: 'Moderate — boots leave 1" impressions (soft, not soupy)',
    hint: 'Soft but not saturated. Typical Northern Ohio clay after a wet spring. CBR 1.0%.',
    cbr: 1.0,
  },
  mild: {
    label: 'Mild — 1" tire ruts from a pickup (slightly soft)',
    hint: 'Reasonably firm. Pickup truck leaves 1-inch ruts. CBR 2.0%.',
    cbr: 2.0,
  },
};

// Depth tables per load class — each cell has a real published source. No fabricated values.
//
// * VEHICULAR — Tensar 2025 Subgrade Pocket Card. Traditional = over-excavation +
//   structural backfill. Grid = NX850-stabilized base thickness.
// * LIGHT STRUCTURAL — CMHA PAV-TEC-002 (formerly ICPI Tech Spec 2, since ICPI
//   merged into the Concrete Masonry & Hardscapes Association in early 2024)
//   pedestrian base minimums (4" well-drained, 6" poorly-drained) with the
//   industry-standard +2–4" Ohio freeze-thaw adjustment. Traditional =
//   overbuild-in-place-of-grid for wet/soft cases; Grid = pedestrian minimum
//   + geogrid + separator fabric. Direct URL: https://www.cmha.org/resource/pav-tec-002/
// * POINT LOAD — industry consensus for hot tub / spa point loads (2,000–6,000 lb
//   concentrated). ¾" clean crushed stone at 6–8" minimum on well-drained; more
//   on soft ground to prevent settling.
const DEPTH_TABLE: Record<LoadClass, Record<SubgradeKey, {
  traditional: number;
  grid: number;
  gridDisplay?: string;
  lifeExtension: string;
}>> = {
  vehicular: {
    severe:   { traditional: 48, grid: 24, lifeExtension: 'Can extend base life and reduce long-term maintenance costs (per Tensar full-scale trafficking testing)' },
    moderate: { traditional: 36, grid: 12, lifeExtension: 'Can extend base life and reduce long-term maintenance costs (per Tensar full-scale trafficking testing)' },
    mild:     { traditional: 24, grid: 6, gridDisplay: '4–6', lifeExtension: 'Can extend base life and reduce long-term maintenance costs (per Tensar full-scale trafficking testing)' },
  },
  lightStructural: {
    severe:   { traditional: 12, grid: 6, lifeExtension: 'Can help resist settling on soft Ohio subgrade' },
    moderate: { traditional: 10, grid: 6, lifeExtension: 'Can help resist settling on soft Ohio subgrade' },
    mild:     { traditional: 8, grid: 4, lifeExtension: 'ICPI-compliant base that lasts the life of the finish' },
  },
  pointLoad: {
    severe:   { traditional: 16, grid: 10, lifeExtension: 'Designed for 2,000–6,000 lb point loads on stabilized base' },
    moderate: { traditional: 12, grid: 8, lifeExtension: 'Designed for 2,000–6,000 lb point loads on stabilized base' },
    mild:     { traditional: 8, grid: 6, lifeExtension: 'Designed for 2,000–6,000 lb point loads on stabilized base' },
  },
};

// Stone volume math:
// tons = (sq_ft × depth_in / 12 / 27) × density_ton_per_cy
// #57 / #304 limestone runs ~1.4–1.5 ton/cy compacted → use 1.5
const TON_PER_CY = 1.5;

// Savings threshold — if net savings falls below this, we hide the green savings
// callout and show a "text for a quote" CTA instead. Never a negative number on
// screen. Small light-load projects (patio, walkway, shed pad, pool base, hot tub)
// often land here because the quarter-roll cost swamps the modest excavation +
// stone savings. Every hit is still a lead into (440) 384-1897.
const SAVINGS_THRESHOLD = 100;

function money(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));
}

type ProjectKey =
  | 'driveway'
  | 'asphaltDriveway'
  | 'stampedDriveway'
  | 'parkingPad'
  | 'patio'
  | 'concreteSlab'
  | 'walkway'
  | 'shedPad'
  | 'poolPad'
  | 'hotTubPad';

const PROJECT: Record<ProjectKey, {
  label: string;
  noun: string;
  defaultLen: number;
  defaultWid: number;
  loadClass: LoadClass;
}> = {
  driveway:         { label: 'Gravel driveway',                                     noun: 'driveway',      defaultLen: 40, defaultWid: 20, loadClass: 'vehicular' },
  asphaltDriveway:  { label: 'Asphalt driveway',                                    noun: 'driveway',      defaultLen: 40, defaultWid: 20, loadClass: 'vehicular' },
  stampedDriveway:  { label: 'Stamped concrete driveway',                           noun: 'driveway',      defaultLen: 40, defaultWid: 20, loadClass: 'vehicular' },
  parkingPad:       { label: 'RV / boat / trailer parking pad',                     noun: 'parking pad',   defaultLen: 40, defaultWid: 12, loadClass: 'vehicular' },
  patio:            { label: 'Patio (paver, brick, stone)',                         noun: 'patio',         defaultLen: 20, defaultWid: 15, loadClass: 'lightStructural' },
  concreteSlab:     { label: 'Concrete slab (pool deck, stamped patio, walkway)',   noun: 'slab',          defaultLen: 20, defaultWid: 10, loadClass: 'lightStructural' },
  walkway:          { label: 'Walkway / sidewalk',                                  noun: 'walkway',       defaultLen: 30, defaultWid: 4,  loadClass: 'lightStructural' },
  shedPad:          { label: 'Shed / outbuilding / equipment pad',                  noun: 'pad',           defaultLen: 20, defaultWid: 20, loadClass: 'lightStructural' },
  poolPad:          { label: 'Above-ground pool base',                              noun: 'pool base',     defaultLen: 24, defaultWid: 24, loadClass: 'lightStructural' },
  hotTubPad:        { label: 'Hot tub / spa pad',                                   noun: 'spa pad',       defaultLen: 8,  defaultWid: 8,  loadClass: 'pointLoad' },
};

export default function DrivewayCostCalculator() {
  const [project, setProject] = useState<ProjectKey>('driveway');
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(20);
  const [subgrade, setSubgrade] = useState<SubgradeKey>('moderate');
  const [stonePrice, setStonePrice] = useState(35);      // $/ton delivered
  const [excavationRate, setExcavationRate] = useState(15); // $/cy dig + haul off + tip
  const [showAssumptions, setShowAssumptions] = useState(false);

  function handleProjectChange(next: ProjectKey) {
    setProject(next);
    setLength(PROJECT[next].defaultLen);
    setWidth(PROJECT[next].defaultWid);
  }

  const results = useMemo(() => {
    const sqft = Math.max(0, length) * Math.max(0, width);
    const sgLabel = SUBGRADE_LABEL[subgrade];
    const loadClass = PROJECT[project].loadClass;
    const depths = DEPTH_TABLE[loadClass][subgrade];

    // Traditional (over-excavate + fill for vehicular; ICPI overbuild for light-load
    // on soft ground; industry-consensus point-load base for hot tub)
    const tradVolCy = (sqft * (depths.traditional / 12)) / 27;
    const tradStoneTons = tradVolCy * TON_PER_CY;
    const tradStoneCost = tradStoneTons * stonePrice;
    const tradExcavationCost = tradVolCy * excavationRate;
    const tradTotal = tradStoneCost + tradExcavationCost;

    // Geogrid-reinforced (thinner base — geogrid + separator does the work)
    const gridVolCy = (sqft * (depths.grid / 12)) / 27;
    const gridStoneTons = gridVolCy * TON_PER_CY;
    const gridStoneCost = gridStoneTons * stonePrice;
    const gridExcavationCost = gridVolCy * excavationRate;
    const gridSubtotal = gridStoneCost + gridExcavationCost; // pre-grid material

    const materialSavings = tradTotal - gridSubtotal;
    const savingsPercent = tradTotal > 0 ? (materialSavings / tradTotal) * 100 : 0;

    // Roll geometry: NX850 rolls are 12.5 ft wide. Strips run along the length
    // of the driveway (parallel to traffic — standard install). Total unrolled
    // length needed = strips × driveway length. Roll-fit compares that to
    // roll lengths (quarter=49.25', half=98.5', full=197').
    const ROLL_WIDTH = 12.5;
    const QUARTER_ROLL_LEN = 49.25;
    const HALF_ROLL_LEN = 98.5;
    const FULL_ROLL_LEN = 197;

    const stripsNeeded = width > 0 ? Math.ceil(width / ROLL_WIDTH) : 0;
    const linearFtNeeded = stripsNeeded * length;
    const gridSqFtNeeded = linearFtNeeded * ROLL_WIDTH;

    // NX850 partial-roll pricing — verified from PIDS spec (12.5 ft × 197 ft = 274 sy full)
    // and current listed prices. Quarter roll = 68.5 sy = $445. Half roll = 137 sy = $885.
    // Larger jobs get routed to phone quote (we only stock partials).
    const QUARTER_ROLL_PRICE = 445;
    const HALF_ROLL_PRICE = 885;

    let rollRecommendation = '';
    let rollLengthAvailable = 0;
    let geogridCost: number | null = null;
    if (linearFtNeeded === 0) {
      rollRecommendation = '';
    } else if (linearFtNeeded <= QUARTER_ROLL_LEN) {
      rollRecommendation = '1 quarter roll (12.5 ft × 49.25 ft)';
      rollLengthAvailable = QUARTER_ROLL_LEN;
      geogridCost = QUARTER_ROLL_PRICE;
    } else if (linearFtNeeded <= HALF_ROLL_LEN) {
      rollRecommendation = '1 half roll (12.5 ft × 98.5 ft)';
      rollLengthAvailable = HALF_ROLL_LEN;
      geogridCost = HALF_ROLL_PRICE;
    } else if (linearFtNeeded <= HALF_ROLL_LEN + QUARTER_ROLL_LEN) {
      rollRecommendation = '1 half roll + 1 quarter roll';
      rollLengthAvailable = HALF_ROLL_LEN + QUARTER_ROLL_LEN;
      geogridCost = HALF_ROLL_PRICE + QUARTER_ROLL_PRICE;
    } else if (linearFtNeeded <= 2 * HALF_ROLL_LEN) {
      rollRecommendation = '2 half rolls';
      rollLengthAvailable = 2 * HALF_ROLL_LEN;
      geogridCost = 2 * HALF_ROLL_PRICE;
    } else {
      // Job too big for partial-roll stock — fall back to phone quote
      rollRecommendation = 'Larger than stocked partial rolls — text for a full-roll quote';
      rollLengthAvailable = 0;
      geogridCost = null;
    }
    const leftoverLinearFt = Math.max(0, rollLengthAvailable - linearFtNeeded);

    return {
      sqft,
      subgradeLabel: sgLabel.label,
      cbr: sgLabel.cbr,
      lifeExtension: depths.lifeExtension,
      loadClass,
      trad: {
        depth: depths.traditional,
        volCy: tradVolCy,
        stoneTons: tradStoneTons,
        stoneCost: tradStoneCost,
        excavationCost: tradExcavationCost,
        total: tradTotal,
      },
      grid: {
        depth: depths.grid,
        depthDisplay: depths.gridDisplay || String(depths.grid),
        volCy: gridVolCy,
        stoneTons: gridStoneTons,
        stoneCost: gridStoneCost,
        excavationCost: gridExcavationCost,
        subtotal: gridSubtotal,
      },
      materialSavings,
      savingsPercent,
      rollRecommendation,
      leftoverLinearFt,
      stripsNeeded,
      linearFtNeeded,
      gridSqFtNeeded,
      // geogridCost held internally for the savings math but NEVER surfaced
      // as a line item — owner does not advertise roll pricing publicly.
      _geogridCostInternal: geogridCost,
    };
  }, [project, length, width, subgrade, stonePrice, excavationRate]);

  // Real net total with geogrid (internal — includes actual roll price)
  const gridTotalIncludingGeogrid = results._geogridCostInternal !== null
    ? results.grid.subtotal + results._geogridCostInternal
    : null;
  const netSavings = gridTotalIncludingGeogrid !== null
    ? results.trad.total - gridTotalIncludingGeogrid
    : null;
  const netSavingsPct = gridTotalIncludingGeogrid !== null && results.trad.total > 0
    ? (netSavings! / results.trad.total) * 100
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Base cost &amp; quote calculator</h3>
        <p className="text-gray-700">
          Plug in your project size and subgrade condition. See what a traditional overbuild costs
          vs. building on Tensar NX850 geogrid. Depths from the Tensar 2025 Pocket Card (vehicular)
          and CMHA PAV-TEC-002 (light structural). Smaller projects: skip the math and text your
          dimensions to (440) 384-1897 for a same-day quote.
        </p>
      </div>

      {/* Project type */}
      <div className="mb-4">
        <label htmlFor="calc-project" className="block text-sm font-semibold text-gray-800 mb-1">
          Project type
        </label>
        <select
          id="calc-project"
          value={project}
          onChange={(e) => handleProjectChange(e.target.value as ProjectKey)}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-[#00c97e]"
        >
          {(Object.keys(PROJECT) as ProjectKey[]).map((k) => (
            <option key={k} value={k}>{PROJECT[k].label}</option>
          ))}
        </select>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="calc-length" className="block text-sm font-semibold text-gray-800 mb-1">
            Length (ft)
          </label>
          <input
            id="calc-length"
            type="number"
            min={0}
            value={length}
            onChange={(e) => setLength(Math.max(0, Number(e.target.value)))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
        <div>
          <label htmlFor="calc-width" className="block text-sm font-semibold text-gray-800 mb-1">
            Width (ft)
          </label>
          <input
            id="calc-width"
            type="number"
            min={0}
            value={width}
            onChange={(e) => setWidth(Math.max(0, Number(e.target.value)))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="calc-subgrade" className="block text-sm font-semibold text-gray-800 mb-1">
            Subgrade condition
          </label>
          <select
            id="calc-subgrade"
            value={subgrade}
            onChange={(e) => setSubgrade(e.target.value as SubgradeKey)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-[#00c97e]"
          >
            {(Object.keys(SUBGRADE_LABEL) as SubgradeKey[]).map((k) => (
              <option key={k} value={k}>
                {SUBGRADE_LABEL[k].label}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">{SUBGRADE_LABEL[subgrade].hint}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowAssumptions((v) => !v)}
        className="text-sm text-[#00c97e] font-semibold hover:underline mb-4"
      >
        {showAssumptions ? 'Hide' : 'Edit'} cost assumptions
      </button>

      {showAssumptions && (
        <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded border border-gray-200">
          <div>
            <label htmlFor="calc-stone" className="block text-sm font-semibold text-gray-800 mb-1">
              Stone ($/ton delivered)
            </label>
            <input
              id="calc-stone"
              type="number"
              min={0}
              value={stonePrice}
              onChange={(e) => setStonePrice(Math.max(0, Number(e.target.value)))}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
            />
            <p className="text-xs text-gray-500 mt-1">
              Northern Ohio #57 / #304 typically $30–$50/ton delivered.
            </p>
          </div>
          <div>
            <label htmlFor="calc-excavation" className="block text-sm font-semibold text-gray-800 mb-1">
              Excavation + haul-off ($/cubic yard)
            </label>
            <input
              id="calc-excavation"
              type="number"
              min={0}
              value={excavationRate}
              onChange={(e) => setExcavationRate(Math.max(0, Number(e.target.value)))}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
            />
            <p className="text-xs text-gray-500 mt-1">
              Dig + spoil haul + tip fee. $10–$25/cy is common on residential.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mb-4">
        <p className="text-sm text-gray-700">
          Job size: <strong>{results.sqft.toLocaleString()} sq ft</strong>{' '}
          <span className="text-gray-500">({(results.sqft / 9).toFixed(0)} sq yd)</span>
        </p>
      </div>

      {results.stripsNeeded > 0 && (
        <div className="mb-6 border-2 border-[#00c97e] rounded p-5 bg-[#f0fdf4]">
          <div className="text-xs uppercase tracking-wide text-[#00c97e] font-semibold mb-1">
            You&apos;ll need to buy
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {results.rollRecommendation}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            NX850 rolls are <strong>12.5 ft wide</strong>. Your {PROJECT[project].noun} is {width} ft
            wide, so you&apos;ll lay{' '}
            <strong>{results.stripsNeeded} strip{results.stripsNeeded > 1 ? 's' : ''}</strong> running
            along the {length}-ft length ={' '}
            <strong>{results.linearFtNeeded.toFixed(1)} linear ft of roll</strong> total.
            {results.leftoverLinearFt > 1 && (
              <> Leaves ~{results.leftoverLinearFt.toFixed(1)} ft to keep on the trailer.</>
            )}
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Text your dimensions to{' '}
            <a href={PHONE_TEL} className="text-[#00c97e] font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            for the exact price on this roll size.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Traditional */}
        <div className="border border-gray-300 rounded p-5 bg-gray-50">
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Traditional (excavate &amp; fill)
          </div>
          <div className="text-lg font-bold text-gray-900 mb-3">
            {results.trad.depth}&quot; depth · no geogrid
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-1 text-gray-700">Excavation + haul-off</td>
                <td className="py-1 text-right text-gray-900">{money(results.trad.excavationCost)}</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-700">
                  Stone ({results.trad.stoneTons.toFixed(1)} tons)
                </td>
                <td className="py-1 text-right text-gray-900">{money(results.trad.stoneCost)}</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="pt-2 font-bold text-gray-900">Total</td>
                <td className="pt-2 text-right font-bold text-gray-900">
                  {money(results.trad.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* With Geogrid — deliberately does NOT itemize (excavation + stone + geogrid
            all rolled into one bundled total so the roll price can't be back-solved
            from the visible numbers. Owner does not advertise NX850 pricing.) */}
        <div className="border-2 border-[#00c97e] rounded p-5 bg-white">
          <div className="text-xs uppercase tracking-wide text-[#00c97e] font-semibold mb-1">
            With Tensar NX850 Geogrid
          </div>
          <div className="text-lg font-bold text-gray-900 mb-3">
            {results.grid.depthDisplay}&quot; depth · grid-reinforced
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-1 text-gray-700">
                  {results.grid.stoneTons.toFixed(1)} tons stone + excavation + NX850
                </td>
                <td className="py-1 text-right text-gray-500 italic">bundled</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="pt-2 font-bold text-gray-900">Total materials</td>
                <td className="pt-2 text-right font-bold text-gray-900">
                  {gridTotalIncludingGeogrid !== null
                    ? money(gridTotalIncludingGeogrid)
                    : (
                      <a href={PHONE_TEL} className="text-[#00c97e] not-italic hover:underline">
                        text for quote
                      </a>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            Bundled to keep NX850 pricing confidential — text{' '}
            <a href={PHONE_TEL} className="text-[#00c97e] font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            for the exact quoted breakdown.
          </p>
        </div>
      </div>

      {/* Savings callout OR quote CTA — depends on whether savings clear the threshold.
          Never a negative number on screen. Small light-load projects get routed to the
          phone/text CTA because the geogrid material cost swamps the modest depth savings —
          but the customer still lands on a lead-capture line, which is the point. */}
      {netSavings !== null && netSavings >= SAVINGS_THRESHOLD ? (
        <div className="bg-[#00c97e] text-white rounded p-5 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Total savings with NX850
              </div>
              <div className="text-3xl font-bold">
                {money(netSavings)}
                <span className="text-lg font-normal ml-2 opacity-90">
                  ({netSavingsPct!.toFixed(0)}%)
                </span>
              </div>
            </div>
            <div className="text-right md:text-right">
              <div className="text-sm opacity-90">What NX850 adds</div>
              <div className="text-base font-semibold">{results.lifeExtension}</div>
            </div>
          </div>
          <p className="text-sm mt-3 opacity-95">
            Total savings compare the traditional itemized cost against the bundled NX850 build
            (excavation + stone + geogrid). Text{' '}
            <a href={PHONE_TEL} className="underline font-semibold">{PHONE_DISPLAY}</a>{' '}
            for the exact quote — same-day.
          </p>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] text-white rounded p-5 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-wide text-[#00c97e] font-semibold">
                Small job — call for a real quote
              </div>
              <div className="text-xl md:text-2xl font-bold mt-1">
                Text your dimensions to <a href={PHONE_TEL} className="underline">{PHONE_DISPLAY}</a>
              </div>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {netSavings === null
                  ? <>Larger jobs get a full-roll quote — text your exact dimensions and we&apos;ll price it same-day.</>
                  : <>On projects this size, the geogrid material is close to the excavation savings — but grid can help resist settling and reduce long-term maintenance costs. We&apos;ll price the exact rolls you need — same-day.</>}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                What NX850 adds: <strong className="text-gray-200">{results.lifeExtension}</strong>
              </p>
            </div>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00c97e] hover:bg-[#00b36f] text-white rounded font-semibold text-sm whitespace-nowrap transition-colors"
            >
              Text {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}

      {/* Assumptions footer */}
      <p className="text-xs text-gray-500 leading-relaxed">
        <strong>Depth sources by project type:</strong>{' '}
        <strong>Driveway / parking pad</strong> — Tensar 2025 Subgrade Pocket Card, the published
        NX850 design values for passing a proof roll (1&quot; max deformation).{' '}
        <strong>Patio / walkway / shed pad / above-ground pool base</strong> —{' '}
        <a href="https://www.cmha.org/resource/pav-tec-002/" target="_blank" rel="noopener noreferrer"
          className="text-[#00c97e] hover:underline">CMHA PAV-TEC-002</a>{' '}
        (formerly ICPI Tech Spec 2) pedestrian base minimums — 4&quot; well-drained, 6&quot;
        poorly-drained — with the industry-standard +2–4&quot; Ohio freeze-thaw adjustment. Geogrid
        use in these light-load applications is directly endorsed by{' '}
        <a href="https://www.cmha.org/resource/pav-tec-022/" target="_blank" rel="noopener noreferrer"
          className="text-[#00c97e] hover:underline">CMHA PAV-TEC-022 (Geosynthetics for Segmental
        Concrete Pavements)</a>, which cites geogrid for soft, wet, and slow-draining soils —
        Northeast Ohio&apos;s default subgrade.{' '}
        <strong>Hot tub / spa pad</strong> — industry consensus for concentrated point loads
        (2,000–6,000 lb), ¾&quot; clean crushed stone at 6–8&quot; minimum on well-drained,
        deeper on soft ground. Stone volume converted at 1.5 tons/cubic yard (#57 / #304
        limestone). Excavation rate is a loaded rate covering dig, haul-off, and tip fees. Roll
        geometry: standard NX850 roll is 12.5 ft × 197 ft (274 sq yd) per the Tensar PIDS spec;
        partial rolls run 12.5 ft × 98.5 ft (half) and 12.5 ft × 49.25 ft (quarter). Strips run
        along the length of the project. Numbers are planning estimates — actual job costs vary
        by site access, drainage, and delivery.{' '}
        <strong>NX850 material is bundled into the &quot;Total materials&quot; line</strong> — we
        keep the geogrid pricing off the public page as a policy. Total savings compare traditional
        vs. bundled and reflect actual pricing. For the itemized quote, text{' '}
        <a href={PHONE_TEL} className="text-[#00c97e] hover:underline font-semibold">
          {PHONE_DISPLAY}
        </a>{' '}
        for pricing.
      </p>
    </div>
  );
}
