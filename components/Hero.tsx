import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Asphalt Fabrics & Supply!
        </h1>

        <div className="space-y-4 text-lg text-gray-700 mb-8">
          <p>
            Asphalt Fabrics & Supply is your trusted partner for high-performance
            geogrid and geotextile products engineered for civil infrastructure. We
            supply premium solutions from Tensar and Mirafi for soil stabilization,
            base reinforcement, and retaining wall support. Backed by decades of
            field experience, we offer unmatched product expertise, design support,
            and fast, reliable service.
          </p>

          <p>
            Whether you&apos;re reducing aggregate costs, increasing load-bearing
            strength, or could help extend pavement life, our geosynthetic solutions are
            built to deliver long-lasting performance.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          Request your test today!
        </Link>
      </div>
    </section>
  );
}
