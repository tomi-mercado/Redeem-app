import Image from 'next/image';

import { useState } from 'react';

import BuyIcon from './BuyIcon';
import Chip from './Chip';
import Coin from './Coin';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  category: string;
  pointsValue: number;
  missingPoints: number | undefined;
  image: string;
  disabledButton?: boolean;
  onRedeem?: (productId: string) => void;
}

export default function ProductCard({
  id,
  image,
  title,
  pointsValue,
  category,
  missingPoints,
  className,
  disabledButton,
  onRedeem,
}: ProductCardProps) {
  const errorGettingPoints = missingPoints === undefined;

  const redeemable = !errorGettingPoints && missingPoints <= 0;

  const [mouseEnter, setMouseEnter] = useState(false);

  const hoverHandlers = {
    onMouseEnter: () => setMouseEnter(true),
    onMouseLeave: () => setMouseEnter(false),
  };

  return (
    <div
      className={`relative cursor-pointer ${className || ''}`}
      style={{ width: 'fit-content', height: 'fit-content' }}
    >
      <div className="absolute top-3 right-3 z-10">
        {redeemable ? (
          <BuyIcon variant={mouseEnter ? 'white' : 'blue'} />
        ) : (
          !mouseEnter && (
            <Chip disabledHover className="bg-gray-500 opacity-70">
              <p className="typography-white text-sm flex items-center w-28 justify-around">
                You need {missingPoints} <Coin height={20} width={20} />
              </p>
            </Chip>
          )
        )}
      </div>
      <div {...hoverHandlers} className="w-72 h-72 p-3 divide-y shadow-md">
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
      {mouseEnter && (
        <div
          {...hoverHandlers}
          style={{
            backgroundImage: `linear-gradient(-180deg, rgba(${
              redeemable ? '10, 212, 250' : '138, 135, 135'
            }, 0.5) 0%, rgba(${
              redeemable ? '37, 187, 241' : '91, 91, 91'
            }, 0.5) 100%)`,
          }}
          className="absolute top-0 h-full w-full flex flex-col items-center justify-center"
        >
          <div>
            <div className="flex items-center justify-center">
              <p className="typography-white text-4xl mr-2">{pointsValue}</p>
              <Coin />
            </div>
            <button
              className={`rounded-2xl mt-3 bg-white typography-gray text-lg w-56 p-2 ${
                redeemable ? 'cursor-pointer' : 'cursor-auto'
              }`}
              disabled={disabledButton || !redeemable}
              onClick={() => redeemable && onRedeem?.(id)}
            >
              {errorGettingPoints
                ? 'Failed to load your points'
                : redeemable
                ? 'Redeem now'
                : "You don't have enough points :("}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
