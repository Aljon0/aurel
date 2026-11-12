import { ImageFrame } from "@/components/ui/ImageFrame";
import type { ImageAsset } from "@/types/content";

interface RatioImageProps {
  image: ImageAsset;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/**
 * Reserves space using the image's own width/height ratio, so the layout
 * never shifts while the image loads. Marked for the clip-path reveal.
 */
export function RatioImage({
  image,
  sizes,
  className = "",
  imgClassName = "",
  priority = false,
}: RatioImageProps) {
  return (
    <div
      data-image-reveal
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <ImageFrame
        image={image}
        sizes={sizes}
        priority={priority}
        imgClassName={imgClassName}
        className="absolute inset-0"
      />
    </div>
  );
}