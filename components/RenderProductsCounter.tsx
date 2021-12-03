export interface RenderProductsCounterProps {
  current: number;
  total: number;
}

export default function RenderProductsCounter({
  current,
  total,
}: RenderProductsCounterProps) {
  return (
    <p className="typography-gray">
      {current} of {total} products
    </p>
  );
}
