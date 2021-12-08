import Image from 'next/image';

import { HtmlHTMLAttributes, useState } from 'react';

import Button, { ButtonProps } from './Button';
import BuyIcon from './BuyIcon';
import Chip from './Chip';
import Coin from './Coin';
import Points from './Points';

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
  disabledButton,
  className,
  onRedeem,
}: ProductCardProps) {
  const errorGettingPoints = missingPoints === undefined;

  const redeemable = !errorGettingPoints && missingPoints <= 0;

  const [mouseEnter, setMouseEnter] = useState(false);

  const hoverHandlers = {
    onMouseEnter: () => setMouseEnter(true),
    onMouseLeave: () => setMouseEnter(false),
  };

  const ButtonWithProps = ({
    variant,
  }: {
    variant?: ButtonProps['variant'];
    className?: HtmlHTMLAttributes<HTMLButtonElement>['className'];
  }) => (
    <Button
      disabled={disabledButton || !redeemable}
      onClick={() => redeemable && onRedeem?.(id)}
      variant={variant}
    >
      {errorGettingPoints
        ? 'Failed to load your points'
        : redeemable
        ? 'Redeem now'
        : "You don't have enough points :("}
    </Button>
  );

  return (
    <div
      className={`relative cursor-pointer ${className || ''} transition-all ${
        mouseEnter ? 'lg:transform lg:-translate-y-3 lg:duration-300' : ''
      }`}
      style={{ width: 'fit-content', height: 'fit-content' }}
    >
      <div className="absolute top-3 right-3 z-10">
        {redeemable && (
          <Points amount={pointsValue} className="lg:hidden" />
        )}
        {redeemable ? (
          <BuyIcon
            {...hoverHandlers}
            variant={mouseEnter ? 'white' : 'blue'}
            className="hidden lg:block"
          />
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
      <div
        {...hoverHandlers}
        className={`w-72 p-3 rounded divide-y shadow-lg lg:shadow-${
          mouseEnter ? '2xl' : 'md'
        }`}
      >
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
        <div className="lg:hidden flex justify-center items-center pb-1.5 pt-5">
          <ButtonWithProps variant="primary" />
        </div>
      </div>
      <div
        {...hoverHandlers}
        style={{
          backgroundImage: `linear-gradient(-180deg, rgba(${
            redeemable ? '10, 212, 250' : '138, 135, 135'
          }, 0.5) 0%, rgba(${
            redeemable ? '37, 187, 241' : '91, 91, 91'
          }, 0.5) 100%)`,
        }}
        className={`absolute rounded top-0 h-full w-full hidden lg:flex flex-col items-center justify-center opacity-0 transition-all ${
          mouseEnter ? 'opacity-100 duration-300' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-center">
            <p className="typography-white text-4xl mr-2">{pointsValue}</p>
            <Coin />
          </div>
          <ButtonWithProps variant="secondary" />
        </div>
      </div>
    </div>
  );
}
