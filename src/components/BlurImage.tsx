"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";
import { blurData } from "~/lib/blur-data";
import { cn } from "~/lib/utils";

type Props = ImageProps & {
  wrapperClassName?: string;
};

function srcKey(src: ImageProps["src"]) {
  if (typeof src === "string") return src;
  if (typeof src === "object" && src && "src" in src) return src.src;
  return undefined;
}

export function BlurImage({
  src,
  alt,
  className,
  wrapperClassName,
  fill,
  onLoad,
  style,
  ...props
}: Props) {
  const key = srcKey(src);
  const blur = key ? blurData[key] : undefined;
  const [loaded, setLoaded] = useState(false);
  const contain = className?.includes("object-contain");
  const blurPosition = className?.includes("object-[center_20%]")
    ? "bg-[center_20%]"
    : "bg-center";

  const setImgRef = useCallback(
    (node: HTMLImageElement | null) => {
      if (!node) return;
      setLoaded(node.complete && node.naturalWidth > 0);
    },
    [key],
  );

  return (
    <span
      className={cn(
        "relative",
        fill ? "block h-full w-full" : "block w-full",
        wrapperClassName,
      )}
    >
      {blur ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500 motion-reduce:transition-none",
            loaded ? "opacity-0" : "opacity-100",
          )}
        >
          <span
            className={cn(
              "absolute inset-0 scale-110 blur-xl",
              blurPosition,
              contain ? "bg-contain bg-no-repeat" : "bg-cover",
            )}
            style={{ backgroundImage: `url("${blur}")` }}
          />
        </span>
      ) : null}
      <Image
        ref={setImgRef}
        src={src}
        alt={alt}
        fill={fill}
        className={cn(
          "transition-opacity duration-500 motion-reduce:transition-none",
          blur && !loaded ? "opacity-0" : "opacity-100",
          className,
        )}
        style={style}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}
