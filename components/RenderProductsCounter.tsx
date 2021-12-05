import { HTMLAttributes } from 'react';

export interface RenderProductsCounterProps
  extends HTMLAttributes<HTMLParagraphElement> {
  current: number;
  total: number;
}

export default function RenderProductsCounter({
  current,
  total,
  className,
}: RenderProductsCounterProps) {
  return (
    <p className={`typography-gray ${className ? className : ''}`}>
      {current} of {total} products
    </p>
  );
}
