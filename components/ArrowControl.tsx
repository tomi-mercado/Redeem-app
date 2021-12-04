import arrows from './arrows';

const { ArrowLeft, ArrowRight } = arrows;

export interface ArrowControlProps {
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
}: ArrowControlProps) {
  const renderLeftArrow = page > 0;
  const renderRightArrow = page < pages - 1;

  return (
    <div className="flex items-center justify-between w-28">
      {renderLeftArrow && (
        <ArrowLeft onClick={onClickPrev} className="cursor-pointer" />
      )}
      {renderRightArrow && (
        <ArrowRight onClick={onClickNext} className="cursor-pointer" />
      )}
    </div>
  );
}
