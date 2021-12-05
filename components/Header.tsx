import ImageComponentFactory from '../factories/ImageComponentFactory';

export interface HeaderProps {
  image: StaticImageData | string;
  title: string;
}

export default function Header({ title, image }: HeaderProps) {
  const Header = ImageComponentFactory({
    src: typeof image === 'string' ? image : image.src,
    alt: `${title}-header`,
  });

  return (
    <div className="w-full relative">
      <Header layout="responsive" width={1440} height={412} />
      <h3 className="title text-white absolute bottom-4 left-5 sm:bottom-8 lg:bottom-9 xl:bottom-12 sm:left-10 xl:left-32">
        {title}
      </h3>
    </div>
  );
}
