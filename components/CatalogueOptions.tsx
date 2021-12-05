import ArrowControl, { ArrowControlProps } from './ArrowControl';
import RenderProductsCounter, {
  RenderProductsCounterProps,
} from './RenderProductsCounter';
import Sorter, { SorterProps } from './Sorter';

export interface CatalogueOptionsProps {
  variant?: 'bottom' | 'up';
  renderProductsCounter?: RenderProductsCounterProps;
  sorter?: SorterProps;
  arrowControl?: ArrowControlProps;
}

export default function CatalogueOptions({
  renderProductsCounter,
  sorter,
  arrowControl,
  variant = 'up',
}: CatalogueOptionsProps) {
  if (variant === 'bottom' && !!arrowControl && !!renderProductsCounter) {
    return (
      <div className="mt-16 mb-6 flex justify-center sm:justify-between items-center">
        <RenderProductsCounter
          {...renderProductsCounter}
          className="hidden sm:block sm:w-3/4"
        />
        <ArrowControl {...arrowControl} className="w-auto sm:w-1/4 sm:justify-end" />
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-full md:w-3/4 sm:flex divide-y sm:divide-y-0 sm:divide-x items-center">
        {renderProductsCounter && (
          <div className="mr-4 lg:mr-6 pb-4 sm:pb-0">
            <RenderProductsCounter {...renderProductsCounter} />
          </div>
        )}
        {sorter && (
          <div className="sm:pl-2 pt-4 sm:pt-0 lg:pl-6 w-full">
            <Sorter {...sorter} />
          </div>
        )}
      </div>
      {arrowControl && (
        <ArrowControl
          {...arrowControl}
          className="hidden md:flex md:w-1/4 md:justify-end"
        />
      )}
    </div>
  );
}
