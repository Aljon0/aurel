import { images } from "@/data/images";
import type {
  ConceptSpec,
  DesignBlock,
  DesignDetail,
  GalleryItem,
  ShowcaseState,
} from "@/types/content";

export const heroContent = {
  eyebrow: "AUREL — Concept One",
  headline: "Built to move you.",
  support: "A concept in proportion, restraint and motion.",
  scrollLabel: "Scroll",
} as const;

export const designIntro = {
  eyebrow: "Design",
  title: "Form, resolved to a single line.",
} as const;

export const designBlocks: DesignBlock[] = [
  {
    eyebrow: "Silhouette",
    title: "One line from nose to tail.",
    body: "The roofline falls in a single, unbroken gesture. Nothing is added for show; every surface earns its place by shaping the way the car sits and moves.",
    image: images.designSilhouette,
    imageSide: "left",
  },
  {
    eyebrow: "Light & surface",
    title: "Detail that catches the light.",
    body: "Slim lamps, sculpted fenders and quiet materials let light travel across the body. The result is a car that looks different at every hour of the day.",
    image: images.designDetail,
    imageSide: "right",
  },
];

export const designDetails: DesignDetail[] = [
  { label: "Silhouette", text: "Low, long and uninterrupted." },
  { label: "Materials", text: "Brushed metal, matte carbon and soft leather." },
  { label: "Lighting", text: "A slim signature that defines the face." },
  { label: "Aerodynamics", text: "Surfaces shaped to guide air, not fight it." },
];

export const performanceContent = {
  eyebrow: "Performance",
  statement: "Engineered motion, without excess.",
  body: "Performance is not a number on a page. It is how the car feels when everything works together.",
  disclaimer:
    "All figures are fictional design targets for the AUREL concept. They are not real-world performance claims.",
} as const;

export const conceptSpecs: ConceptSpec[] = [
  { label: "0–100 km/h target", value: 2.9, decimals: 1, unit: "s" },
  { label: "Target mass", value: 1480, decimals: 0, unit: "kg" },
  { label: "Drag coefficient target", value: 0.24, decimals: 2, unit: "Cd" },
  { label: "Top speed target", value: 320, decimals: 0, unit: "km/h" },
];

export const showcaseIntro = {
  eyebrow: "The model",
  title: "Three ways to see it.",
} as const;

export const showcaseStates: ShowcaseState[] = [
  {
    id: "stance",
    index: "01",
    label: "Stance",
    title: "Low, wide and planted.",
    body: "Proportion comes first. A wide track and short overhangs give the car a calm, confident posture before it moves.",
    image: images.showcaseStance,
  },
  {
    id: "light",
    index: "02",
    label: "Light",
    title: "A signature after dark.",
    body: "A single slim line of light defines the face and travels along the flank, so the car is unmistakable at dusk.",
    image: images.showcaseLight,
  },
  {
    id: "motion",
    index: "03",
    label: "Motion",
    title: "Built to leave.",
    body: "Seen from behind, the shape resolves into one clean gesture, a car that is always on its way somewhere.",
    image: images.showcaseMotion,
  },
];

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Moments from the concept.",
} as const;

export const galleryItems: GalleryItem[] = [
  { image: images.gallery01, caption: "Wheel and brake detail" },
  { image: images.gallery02, caption: "Studio, soft overhead light" },
  { image: images.gallery03, caption: "Cabin, minimal by design" },
  { image: images.gallery04, caption: "Coastal road" },
];

export const ctaContent = {
  headline: "Some journeys are felt before they begin.",
  action: { label: "Discover AUREL", href: "#model" },
} as const;

export const footerContent = {
  disclaimer:
    "AUREL is a fictional brand created as a frontend design-concept showcase. It is not affiliated with any automotive manufacturer.",
  copyright: "© 2026 AUREL Concept. All rights reserved.",
  stack: "Built with Next.js, TypeScript and GSAP.",
  /** Placeholders only: rendered as plain text until real links exist. */
  social: ["Instagram", "YouTube", "GitHub"],
} as const;