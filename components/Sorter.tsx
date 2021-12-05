import Chip from './Chip';

export type SortType = 'lowestPrice' | 'highestPrice';

export interface SorterProps {
  options: {
    value: SortType;
    label: string;
  }[];
  selected?: SortType;
  onChange?: (selected: SortType) => void;
}

export default function Sorter({ options, selected, onChange }: SorterProps) {
  return (
    <div className="w-full sm:flex items-center">
      <p className="typography-gray sm:mr-6">Sort by:</p>
      <div className="flex items-center mt-1 sm:mt-0">
        {options.map(({ value, label }) => (
          <Chip
            key={value}
            onClick={() => onChange?.(value)}
            selected={selected === value}
            className="mr-2 sm:mr-6"
          >
            {label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
