export interface NavLink {
    label: string;
    href: string;
  }
  
  export type ImageOrigin = "ai-generated" | "original" | "licensed";
  
  export interface ImageCredit {
    origin: ImageOrigin;
    /** AI tool / camera / stock site used to produce the image. */
    tool: string;
    creator: string;
    license: string;
    attributionRequired: boolean;
    attributionText?: string;
    /** Optional: the prompt used, useful for portfolio documentation. */
    prompt?: string;
  }
  
  export interface ImageAsset {
    /** Path relative to /public, e.g. "/images/hero.webp" */
    src: string;
    alt: string;
    /** Target export size in px (used for planning aspect ratios). */
    width: number;
    height: number;
    credit: ImageCredit;
  }
  
  export interface DesignBlock {
    eyebrow: string;
    title: string;
    body: string;
    image: ImageAsset;
    /** Which side the image sits on at desktop widths. */
    imageSide: "left" | "right";
  }
  
  export interface DesignDetail {
    label: string;
    text: string;
  }
  
  export interface ConceptSpec {
    label: string;
    /** Numeric value kept separate so Phase 4 can animate a count-up. */
    value: number;
    decimals: number;
    unit: string;
  }
  
  export interface ShowcaseState {
    id: string;
    index: string;
    label: string;
    title: string;
    body: string;
    image: ImageAsset;
  }
  
  export interface GalleryItem {
    image: ImageAsset;
    caption: string;
  }

  export interface SiteSection {
    /** The element id of the section on the page. */
    id: string;
    /** Header colour scheme while this section sits under the header. */
    theme: "dark" | "light";
    /** Which nav link counts as "current" in this section, if any. */
    navHref: string | null;
  }