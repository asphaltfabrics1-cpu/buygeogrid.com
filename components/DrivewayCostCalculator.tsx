'use client';

import { useMemo, useState } from 'react';

const PHONE_DISPLAY = '(440) 384-1897';
const PHONE_TEL = 'tel:4403841897';

type SubgradeKey = 'severe' | 'moderate' | 'mild';

// Aggregate thicknesses per Tensar 2025 Subgrade Pocket Card — the published
// design spec for passing a proof roll (1-inch max deformation). NX850 values
// match the pocket card exactly. Traditional depth = pocket-card over-excavation
// (excavate soft material + backfill with stone), no grid used.
const SUBGRADE: Record<SubgradeKey, {
  label: string;
  hint: string;
  cbr: number;
  traditionalDepth: number; // inches — over-excavation per Tensar pocket card
  gridDepth: number;        // inches — NX850 stabilized per Tensar pocket card
  gridDepthDisplay?: string; // published range if applicable
  lifeExtension: string;
}> = {
  severe: {
    label: 'Severe — boots sink 3" (soupy clay, wet fill)',
    hint: 'Very soft, wet subgrade. Boot leaves a 3-inch impression. CBR 0.5%.',
    cbr: 0.5,
    traditionalDepth: 48,
    gridDepth: 24,
    lifeExtension: 'Could help extend pavement life 2–3× vs. unstabilized base',
  },
  moderate: {
    label: 'Moderate — boots leave 1" impressions (soft, not soupy)',
    hint: 'Soft but not saturated. Typical Northern Ohio clay after a wet spring. CBR 1.0%.',
    cbr: 1.0,
    traditionalDepth: 36,
    gridDepth: 12,
    lifeExtension: 'Could help extend pavement life 2–3× vs. unstabilized base',
  },
  mild: {
    label: 'Mild — 1" tire ruts from a pickup (slightly soft)',
    hint: 'Reasonably firm. Pickup truck leaves 1-inch ruts. CBR 2.0%.',
    cbr: 2.0,
    traditionalDepth: 24,
    gridDepth: 6,
    gridDepthDisplay: '4–6',
    lifeExtension: 'Could help extend pavement life 2–3× vs. unstabilized base',
  },
};

// Stone volume math:
// tons = (sq_ft × depth_in / 12 / 27) × density_ton_per_cy
// #57 / #304 limestone runs ~1.4–1.5 ton/cy compacted → use 1.5
const TON_PER_CY = 1.5;

function money(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));
}

type ProjectKey = 'driveway' | 'parkingPad' | 'patio' | 'shedPad';

const PROJECT: Record<ProjectKey, { label: string; noun: string; defaultLen: number; defaultWid: number }> = {
  driveway:   { label: 'Gravel driveway',                     noun: 'driveway',    defaultLen: 40, defaultWid: 20 },
  parkingPad: { label: 'Gravel parking pad (RV / boat / trailer / vehicle)', noun: 'parking pad', defaultLen: 40, defaultWid: 12 },
  patio:      { label: 'Patio / paver base',                  noun: 'patio',       defaultLen: 20, defaultWid: 15 },
  shedPad:    { label: 'Shed / outbuilding / equipment pad',  noun: 'pad',         defaultLen: 20, defaultWid: 20 },
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
    const sg = SUBGRADE[subgrade];

    // Traditional (excavate & fill approach)
    const tradVolCy = (sqft * (sg.traditionalDepth / 12)) / 27;
    const tradStoneTons = tradVolCy * TON_PER_CY;
    const tradStoneCost = tradStoneTons * stonePrice;
    const tradExcavationCost = tradVolCy * excavationRate;
    const tradTotal = tradStoneCost + tradExcavationCost;

    // Geogrid-reinforced (thinner base, no undercut needed)
    const gridVolCy = (sqft * (sg.gridDepth / 12)) / 27;
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

    let rollRecommendation = '';
    let rollLengthAvailable = 0;
    if (linearFtNeeded === 0) {
      rollRecommendation = '';
    } else if (linearFtNeeded <= QUARTER_ROLL_LEN) {
      rollRecommendation = '1 quarter roll (12.5 ft × 49.25 ft)';
      rollLengthAvailable = QUARTER_ROLL_LEN;
    } else if (linearFtNeeded <= HALF_ROLL_LEN) {
      rollRecommendation = '1 half roll (12.5 ft × 98.5 ft)';
      rollLengthAvailable = HALF_ROLL_LEN;
    } else if (linearFtNeeded <= HALF_ROLL_LEN + QUARTER_ROLL_LEN) {
      rollRecommendation = '1 half roll + 1 quarter roll';
      rollLengthAvailable = HALF_ROLL_LEN + QUARTER_ROLL_LEN;
    } else if (linearFtNeeded <= FULL_ROLL_LEN) {
      rollRecommendation = '1 full roll (12.5 ft × 197 ft)';
      rollLengthAvailable = FULL_ROLL_LEN;
    } else {
      const fullRollsNeeded = Math.ceil(linearFtNeeded / FULL_ROLL_LEN);
      rollRecommendation = `${fullRollsNeeded} full rolls (12.5 ft × 197 ft each)`;
      rollLengthAvailable = fullRollsNeeded * FULL_ROLL_LEN;
    }
    const leftoverLinearFt = Math.max(0, rollLengthAvailable - linearFtNeeded);

    return {
      sqft,
      subgradeLabel: sg.label,
      cbr: sg.cbr,
      lifeExtension: sg.lifeExtension,
      trad: {
        depth: sg.traditionalDepth,
        volCy: tradVolCy,
        stoneTons: tradStoneTons,
        stoneCost: tradStoneCost,
        excavationCost: tradExcavationCost,
        total: tradTotal,
      },
      grid: {
        depth: sg.gridDepth,
        depthDisplay: sg.gridDepthDisplay || String(sg.gridDepth),
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
    };
  }, [length, width, subgrade, stonePrice, excavationRate]);

  return (
    <div className="bg-white border border-gray-200 rounded p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Gravel base cost calculator</h3>
        <p className="text-gray-700">
          Works for gravel driveways, RV / boat / trailer parking pads, patios, and shed pads. Plug
          in your dimensions and subgrade condition. See what a traditional excavate-and-fill
          approach costs vs. building on Tensar NX850 geogrid.
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
            {(Object.keys(SUBGRADE) as SubgradeKey[]).map((k) => (
              <option key={k} value={k}>
                {SUBGRADE[k].label}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">{SUBGRADE[subgrade].hint}</p>
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

        {/* With Geogrid */}
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
                <td className="py-1 text-gray-700">Excavation + haul-off</td>
                <td className="py-1 text-right text-gray-900">{money(results.grid.excavationCost)}</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-700">
                  Stone ({results.grid.stoneTons.toFixed(1)} tons)
                </td>
                <td className="py-1 text-right text-gray-900">{money(results.grid.stoneCost)}</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-700">NX850 partial roll</td>
                <td className="py-1 text-right text-gray-500 italic">get quote</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="pt-2 font-bold text-gray-900">Materials subtotal</td>
                <td className="pt-2 text-right font-bold text-gray-900">
                  {money(results.grid.subtotal)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Savings callout */}
      <div className="bg-[#00c97e] text-white rounded p-5 mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="text-sm uppercase tracking-wide opacity-90">
              Stone + excavation savings
            </div>
            <div className="text-3xl font-bold">
              {money(results.materialSavings)}
              <span className="text-lg font-normal ml-2 opacity-90">
                ({results.savingsPercent.toFixed(0)}%)
              </span>
            </div>
          </div>
          <div className="text-right md:text-right">
            <div className="text-sm opacity-90">Expected life</div>
            <div className="text-base font-semibold">{results.lifeExtension}</div>
          </div>
        </div>
        <p className="text-sm mt-3 opacity-95">
          NX850 partial-roll cost for a job this size runs a fraction of these material savings.
          Text{' '}
          <a href={PHONE_TEL} className="underline font-semibold">
            {PHONE_DISPLAY}
          </a>{' '}
          with your square footage for the exact number — same-day quote.
        </p>
      </div>

      {/* Assumptions footer */}
      <p className="text-xs text-gray-500 leading-relaxed">
        <strong>Per spec:</strong> Aggregate thicknesses match the{' '}
        <strong>Tensar 2025 Subgrade Pocket Card</strong> — the published NX850 design values for
        passing a proof roll (1&quot; max deformation). Traditional depth = over-excavation
        (excavate soft material + backfill with stone, no grid). Grid-reinforced depth = NX850
        stabilized base thickness at the same subgrade CBR. These are conservative for typical
        residential loads; the numbers hold up on commercial and DOT specs too. Stone volume
        converted at 1.5 tons/cubic yard (#57 / #304 limestone). Excavation rate is a loaded rate
        covering dig, haul-off, and tip fees. Grid layout assumes 12.5-ft-wide roll strips run
        along the driveway length. Numbers are planning estimates — actual job costs vary by
        site access, drainage, and delivery. Geogrid material cost not shown; text{' '}
        <a href={PHONE_TEL} className="text-[#00c97e] hover:underline font-semibold">
          {PHONE_DISPLAY}
        </a>{' '}
        for pricing.
      </p>
    </div>
  );
}
