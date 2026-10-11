const OPTIMIZER_WIDTHS = [
  640, 750, 828, 1080, 1200, 1920, 2048, 3840,
] as const;

const THUMBNAIL_WIDTH = 384;

type SizedPhoto = {
  src: string;
  width: number;
  height: number;
};

export function nextImageUrl(src: string, width: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}

export function toLightboxSlide(photo: SizedPhoto) {
  const largest =
    OPTIMIZER_WIDTHS.find((size) => size >= photo.width) ??
    OPTIMIZER_WIDTHS[OPTIMIZER_WIDTHS.length - 1] ??
    3840;
  const widths = OPTIMIZER_WIDTHS.filter((size) => size <= largest);

  return {
    src: nextImageUrl(photo.src, largest),
    width: photo.width,
    height: photo.height,
    thumbnail: nextImageUrl(photo.src, THUMBNAIL_WIDTH),
    srcSet: widths.map((size) => ({
      src: nextImageUrl(photo.src, size),
      width: size,
      height: Math.round((photo.height / photo.width) * size),
    })),
  };
}
