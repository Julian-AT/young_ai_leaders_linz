import Image from "next/image";

interface PostImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export function PostImage({ src, alt, width, height, caption }: PostImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full rounded-md"
      />
      {caption ? <figcaption className="body-sm text-secondary mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
