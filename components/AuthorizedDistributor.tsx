import Link from 'next/link';

export default function AuthorizedDistributor() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Authorized Distributor
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Asphalt Fabrics & Supply is a proud authorized distributor of Tensar
          Geogrids and Solmax Mirafi Geotextiles.
        </p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-12 mb-10">
          <Link
            href="https://www.tensarcorp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold text-blue-900">TENSAR</div>
          </Link>

          <Link
            href="https://www.solmax.com/us/en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold text-blue-700">SOLMAX</div>
          </Link>
        </div>

        {/* Notice Box */}
        <div className="border-4 border-green-500 rounded-lg p-6 bg-green-50">
          <p className="text-gray-800">
            If you don&apos;t see the product you need on our site, we can source
            it directly from the manufacturer. Just click on the logos above to
            visit their sites. Please ask us about any product they manufacture.
            We&apos;re here to help you get exactly what you need!
          </p>
        </div>
      </div>
    </section>
  );
}
