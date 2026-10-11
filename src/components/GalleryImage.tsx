"use client";

import { BlurImage } from "~/components/BlurImage";

type Props = {
  src: string;
  alt: string;
  title?: string;
  sizes?: string;
  width: number;
  height: number;
};

export function GalleryImage({
  src,
  alt,
  title,
  sizes,
  width,
  height,
}: Props) {
  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-200"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <BlurImage
        fill
        src={src}
        alt={alt}
        title={title}
        sizes={sizes ?? "100vw"}
        className="object-cover"
      />
    </div>
  );
}
