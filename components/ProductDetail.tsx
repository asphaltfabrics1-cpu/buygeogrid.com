import FeatureList from './FeatureList';
import Reveal from './Reveal';

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
    <Reveal>
      <div className="bg-white rounded border border-gray-200 p-6 md:p-10 shadow-sm">
        <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Product Overview</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 leading-tight tracking-tight">What&apos;s in the roll</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <FeatureList title="Key Features" features={features} type="check" />
          <FeatureList title="Applications" features={applications} type="bullet" />
        </div>

        {specifications && specifications.length > 0 && (
          <div className="pt-6 border-t border-gray-200">
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Specifications</div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">By the numbers</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="border-b border-gray-100 pb-2 flex items-baseline justify-between gap-4">
                  <div className="text-sm text-gray-600">{spec.label}</div>
                  <div className="font-semibold text-gray-900 text-right">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
