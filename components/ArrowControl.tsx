import arrows from './arrows';

const { ArrowLeft, ArrowRight } = arrows;

export interface ArrowControlProps
  extends React.HTMLAttributes<HTMLDivElement> {
  page: number;
  pages: number;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}

export default function ArrowControl({
  page,
  pages,
  onClickNext,
  onClickPrev,
  className,
  ...props
}: ArrowControlProps) {
  const renderLeftArrow = page > 0;
  const renderRightArrow = page < pages - 1;

  return (
    <div
      {...props}
      className={`flex items-center justify-between w-28 ${
        className ? className : ''
      }`}
    >
      {renderLeftArrow && (
        <ArrowLeft
          onClick={onClickPrev}
          className="cursor-pointer text-gray-300 hover:text-blue-200"
        />
      )}
      {renderRightArrow && (
        <ArrowRight
          onClick={onClickNext}
          className="cursor-pointer text-gray-300 hover:text-blue-200"
        />
      )}
    </div>
  );
}
