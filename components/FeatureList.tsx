interface Feature {
  text: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
  type?: 'check' | 'bullet';
}

export default function FeatureList({ title, features, type = 'check' }: FeatureListProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#00c97e] font-bold text-lg mt-0.5">
              {type === 'check' ? '✓' : '•'}
            </span>
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
