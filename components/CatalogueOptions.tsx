import ArrowControl, { ArrowControlProps } from './ArrowControl';
import RenderProductsCounter, {
  RenderProductsCounterProps,
} from './RenderProductsCounter';
import Sorter, { SorterProps } from './Sorter';
import arrows from './arrows';

const { ArrowLeft, ArrowRight } = arrows;

export interface CatalogueOptionsProps {
  renderProductsCounter: RenderProductsCounterProps;
  sorter: SorterProps;
  arrowControl: ArrowControlProps;
}

export default function CatalogueOptions({
  renderProductsCounter,
  sorter,
  arrowControl,
}: CatalogueOptionsProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex divide-x items-center">
        <div className="mr-6">
          <RenderProductsCounter {...renderProductsCounter} />
        </div>
        <div className="pl-6">
          <Sorter {...sorter} />
        </div>
      </div>
      <ArrowControl {...arrowControl} />
    </div>
  );
}
