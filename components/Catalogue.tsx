import { useState } from 'react';

import { Product } from '../common/interfaces';

import CatalogueOptions from './CatalogueOptions';
import ProductCard from './ProductCard';
import { SortType } from './Sorter';

const pageSize = 16;

export interface CatalogueProps {
  products: Product[];
  userPoints: number | undefined;
  onProductRedeem?: (productId: string) => void | Promise<void>;
}

export default function Catalogue({
  products,
  userPoints,
  onProductRedeem,
}: CatalogueProps) {
  const [page, setPage] = useState(0);

  const pages = Math.ceil(products.length / pageSize);

  const [sort, setSort] = useState<SortType | undefined>(undefined);

  const handleSort = (clickedSort: SortType) => {
    setPage(0);
    setSort(clickedSort === sort ? undefined : clickedSort);
  };

  const handlePage = (movement: 'prev' | 'next') => {
    if (movement === 'next') {
      setPage(page + (page < pages ? 1 : 0));
    } else {
      setPage(page + (page === 0 ? 0 : -1));
    }
  };

  const handleProductRedeem = async (productId: string) => {
    await onProductRedeem?.(productId);
  };

  const productsToRender = (
    !!sort
      ? [...products].sort((a: Product, b: Product) =>
          sort === 'lowestPrice' ? a.cost - b.cost : b.cost - a.cost
        )
      : products
  ).slice(page * pageSize, page * pageSize + pageSize);

  const renderProductsCounterProps = {
    current: pageSize,
    total: products.length,
  };

  const arrowControlProps = {
    page,
    pages,
    onClickNext: () => handlePage('next'),
    onClickPrev: () => handlePage('prev'),
  };

  return (
    <div style={{ borderBottom: '1px solid #d9d9d9' }}>
      <CatalogueOptions
        arrowControl={arrowControlProps}
        renderProductsCounter={renderProductsCounterProps}
        sorter={{
          selected: sort,
          options: [
            {
              label: 'Lowest price',
              value: 'lowestPrice',
            },
            {
              label: 'Highest price',
              value: 'highestPrice',
            },
          ],
          onChange: handleSort,
        }}
      />
      <div className="divide-y">
        <div className="h-6"></div>
        <div className="h-7"></div>
      </div>
      <div className="grid grid-cols-4 justify-items-center gap-6">
        {productsToRender.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            category={product.category}
            image={product.img.url}
            missingPoints={userPoints ? product.cost - userPoints : undefined}
            pointsValue={product.cost}
            title={product.name}
            className="w-full"
            onRedeem={handleProductRedeem}
          />
        ))}
      </div>
      <div className="mt-16 mb-6">
        <CatalogueOptions
          renderProductsCounter={renderProductsCounterProps}
          arrowControl={arrowControlProps}
        />
      </div>
    </div>
  );
}
