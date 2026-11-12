import type { ImageAsset } from "@/types/content";

/**
 * Single manifest for every image on the site.
 * Drop the exported files into /public/images/ using these exact names.
 * Update `tool` (and optionally `prompt`) for each image after generating it.
 */
function aiImage(
  src: string,
  alt: string,
  width: number,
  height: number,
): ImageAsset {
  return {
    src,
    alt,
    width,
    height,
    credit: {
      origin: "ai-generated",
      tool: "TODO: AI tool and model name",
      creator: "AUREL concept project",
      license: "Original — generated for this project",
      attributionRequired: false,
    },
  };
}

export const images = {
  hero: aiImage(
    "/images/hero.webp",
    "AUREL Concept One, a low charcoal performance coupe, seen from a front three-quarter angle at dawn.",
    2400,
    1350,
  ),
  designSilhouette: aiImage(
    "/images/design-silhouette.webp",
    "Side profile of the AUREL Concept One showing its single, unbroken roofline.",
    1600,
    2000,
  ),
  designDetail: aiImage(
    "/images/design-detail.webp",
    "Close detail of the AUREL Concept One's slim headlight and sculpted front fender.",
    2000,
    1333,
  ),
  performance: aiImage(
    "/images/performance-bg.webp",
    "AUREL Concept One at speed on a wet track, rear three-quarter view with motion in the road surface.",
    2400,
    1350,
  ),
  showcaseStance: aiImage(
    "/images/showcase-stance.webp",
    "AUREL Concept One in a low front three-quarter view, emphasising its wide stance.",
    2000,
    1250,
  ),
  showcaseLight: aiImage(
    "/images/showcase-light.webp",
    "AUREL Concept One at dusk with its light signature glowing across the front and flank.",
    2000,
    1250,
  ),
  showcaseMotion: aiImage(
    "/images/showcase-motion.webp",
    "AUREL Concept One from behind, framed by a long road and soft evening light.",
    2000,
    1250,
  ),
  gallery01: aiImage(
    "/images/gallery-01.webp",
    "Portrait crop of the AUREL Concept One's front wheel and brake detail.",
    1600,
    2000,
  ),
  gallery02: aiImage(
    "/images/gallery-02.webp",
    "AUREL Concept One parked in a minimal concrete studio under soft overhead light.",
    2000,
    1333,
  ),
  gallery03: aiImage(
    "/images/gallery-03.webp",
    "Square crop of the AUREL Concept One's cabin interior with a minimal dashboard.",
    1600,
    1600,
  ),
  gallery04: aiImage(
    "/images/gallery-04.webp",
    "AUREL Concept One on a coastal road with the sea behind it.",
    2000,
    1333,
  ),
  closing: aiImage(
    "/images/closing.webp",
    "AUREL Concept One driving away along an empty road toward the horizon at dusk.",
    2400,
    1350,
  ),
} as const;