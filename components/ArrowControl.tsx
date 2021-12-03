import arrows from './arrows';

const { ArrowLeft, ArrowRight } = arrows;

export interface ArrowControlProps {
  page: number;
  pages: number;
}

export default function ArrowControl({ page, pages }: ArrowControlProps) {
  return (
    <div className="flex items-center justify-between w-28">
      {page > 1 && <ArrowLeft className="cursor-pointer" />}
      {page < pages && <ArrowRight className="cursor-pointer" />}
    </div>
  );
}
