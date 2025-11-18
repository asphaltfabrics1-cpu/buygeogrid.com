import Link from 'next/link';

interface ProductCardProps {
  name: string;
  image: string;
  url: string;
}

export default function ProductCard({ name, image, url }: ProductCardProps) {
  return (
    <div className="bg-white rounded border border-gray-200 p-6 hover:border-[#00c97e] transition-colors duration-200 flex flex-col items-center text-center">
      <div className="bg-white rounded p-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full max-w-[200px] h-[150px] object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{name}</h3>
      <Link
        href={url}
        className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 w-full"
      >
        View Product
      </Link>
    </div>
  );
}
