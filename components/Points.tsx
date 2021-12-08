import { HtmlHTMLAttributes } from 'react';

import Coin from './Coin';

export interface PointsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  amount: number;
}

export default function Points({ amount, className, ...props }: PointsProps) {
  return (
    <div
      className={`bg-gray-200 rounded-3xl flex items-center p-2 md:p-3 justify-around ${
        className || ''
      }`}
      {...props}
    >
      <p className="typography-gray mr-2">{amount}</p>
      <Coin height={30} width={30} />
    </div>
  );
}
