import Image, { ImageProps } from "next/image";

export default function ImageComponentFactory({
  src,
  alt,
}: {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
}) {
  return function ImageComponent(props: Omit<ImageProps, "src" | "alt">) {
    return <Image {...props} src={src} alt={alt} />;
  };
}
