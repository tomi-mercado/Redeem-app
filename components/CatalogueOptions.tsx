import RenderProductsCounter, {
  RenderProductsCounterProps,
} from './RenderProductsCounter';
import Sorter, { SorterProps } from './Sorter';

export interface CatalogueOptionsProps {
  renderProductsCounter: RenderProductsCounterProps;
  sorter: SorterProps;
}

export default function CatalogueOptions({
  renderProductsCounter,
  sorter,
}: CatalogueOptionsProps) {
  return (
    <div className="flex w-full items-center divide-x">
      <div className="mr-6">
        <RenderProductsCounter {...renderProductsCounter} />
      </div>
      <div className="pl-6">
        <Sorter {...sorter} />
      </div>
    </div>
  );
}
