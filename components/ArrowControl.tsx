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
  return (
    <div className="flex items-center justify-between w-28">
      {page > 1 && (
        <ArrowLeft onClick={onClickPrev} className="cursor-pointer" />
      )}
      {page < pages && (
        <ArrowRight onClick={onClickNext} className="cursor-pointer" />
      )}
    </div>
  );
}
