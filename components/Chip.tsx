import { HTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabledHover?: boolean;
  selected?: boolean;
}

export default function Chip({
  children,
  className,
  disabledHover,
  selected,
  ...props
}: ChipProps) {
  return (
    <div
      className={`bg-gray-200 rounded-3xl flex items-center text-center lg:text-left p-2 md:py-3 lg:px-5 justify-around cursor-pointer ${
        !disabledHover ? 'hover:bg-blue-100' : ''
      } ${
        selected
          ? 'bg-blue-200 typography-white hover:bg-blue-200'
          : 'typography-gray'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
