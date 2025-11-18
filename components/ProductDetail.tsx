import FeatureList from './FeatureList';

interface Feature {
  text: string;
}

interface ProductDetailProps {
  features: Feature[];
  applications: Feature[];
  specifications?: {
    label: string;
    value: string;
  }[];
}

export default function ProductDetail({ features, applications, specifications }: ProductDetailProps) {
  return (
    <div className="bg-white rounded border border-gray-200 p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Product Overview</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <FeatureList title="Key Features" features={features} type="check" />
        <FeatureList title="Applications" features={applications} type="bullet" />
      </div>

      {specifications && specifications.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Specifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => (
              <div key={index} className="border-b border-gray-200 pb-2">
                <div className="text-sm text-gray-600">{spec.label}</div>
                <div className="font-semibold text-gray-900">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
