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

  const [isRedeeming, setIsRedeeming] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(
    undefined
  );

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
    setIsRedeeming(true);
    await onProductRedeem?.(productId);
    setIsRedeeming(false);
  };

  const categories = Object.keys(
    products.reduce(
      (res, { category }) =>
        res[category] ? res : { ...res, [category]: true },
      {} as { [category: string]: boolean }
    )
  );

  let productsToRender = selectedFilter
    ? [...products].filter(({ category }) => category === selectedFilter)
    : [...products];

  const totalFilteredProducts = productsToRender.length;

  productsToRender = (
    !!sort
      ? [...productsToRender].sort((a: Product, b: Product) =>
          sort === 'lowestPrice' ? a.cost - b.cost : b.cost - a.cost
        )
      : [...productsToRender]
  ).slice(page * pageSize, page * pageSize + pageSize);

  const totalRenderedProducts = productsToRender.length;

  const renderProductsCounterProps = {
    current: totalRenderedProducts,
    total: totalFilteredProducts,
  };

  const arrowControlProps = {
    page,
    pages,
    onClickNext: () => handlePage('next'),
    onClickPrev: () => handlePage('prev'),
  };

  const filterProps = {
    label: 'Filter by category',
    options: categories.map((category) => ({ text: category })),
    value: selectedFilter,
    onChange: ({ value }: { value: unknown; name: string | undefined }) =>
      setSelectedFilter(value as string),
  };

  const sorterProps = {
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
    ] as { label: string; value: SortType }[],
    onChange: handleSort,
  };

  return (
    <div style={{ borderBottom: '1px solid #d9d9d9' }}>
      <CatalogueOptions
        arrowControl={arrowControlProps}
        renderProductsCounter={renderProductsCounterProps}
        filter={filterProps}
        sorter={sorterProps}
      />
      <div className="divide-y">
        <div className="h-4 sm:h-6"></div>
        <div className="h-5 sm:h-7"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-6">
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
            disabledButton={isRedeeming}
          />
        ))}
      </div>
      <div className="mt-16 mb-6">
        <CatalogueOptions
          renderProductsCounter={renderProductsCounterProps}
          arrowControl={arrowControlProps}
          variant="bottom"
        />
      </div>
    </div>
  );
}
