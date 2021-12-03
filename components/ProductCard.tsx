import Image from 'next/image';

export interface ProductCardProps {
  title: string;
  category: string;
  pointsValue: number;
  redeemable: boolean;
  image: string;
}

export default function ProductCard({
  image,
  title,
  category,
}: ProductCardProps) {
  return (
    <div className="w-72 h-72 p-3 divide-y shadow-md">
      <div>
        <Image
          src={image}
          alt={`${title} image`}
          width={3}
          height={2}
          objectFit="contain"
          layout="responsive"
        />
      </div>
      <div className="pb-1.5 pt-5">
        <p className="typography-gray-light text-base">{category}</p>
        <p className="typography-gray text-lg">{title}</p>
      </div>
    </div>
  );
}
