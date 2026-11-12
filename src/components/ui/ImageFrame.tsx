import Image from "next/image";
import type { ImageAsset } from "@/types/content";

interface ImageFrameProps {
  image: ImageAsset;
  sizes: string;
  /**
   * Sizing/positioning classes. Must include `relative` (with an aspect
   * ratio) or `absolute inset-0` so the image can fill the frame.
   */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/** Thin wrapper around next/image that fills a positioned frame. */
export function ImageFrame({
  image,
  sizes,
  className = "",
  imgClassName = "",
  priority = false,
}: ImageFrameProps) {
  return (
    <div className={`overflow-hidden bg-charcoal ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}