import { gsap } from "@/lib/animations/gsap";
import {
  DURATION,
  EASE,
  SELECTORS,
  type MotionOptions,
} from "@/lib/animations/motion";

/**
 * Hero entrance: a charcoal curtain fades off the photo while it settles
 * from a slight zoom, then the text items rise in sequence.
 * The curtain and the hidden text come from CSS (see globals.css), so the
 * hero never flashes before this runs.
 */
export function heroEntrance(root: HTMLElement, { isDesktop }: MotionOptions) {
  const image = root.querySelector<HTMLElement>(SELECTORS.heroImage);
  const curtain = root.querySelector<HTMLElement>(SELECTORS.heroCurtain);
  const items = gsap.utils.toArray<HTMLElement>(SELECTORS.heroItem, root);
  if (!image && !curtain && items.length === 0) return;

  const timeline = gsap.timeline({ defaults: { ease: EASE.out } });

  if (curtain) {
    timeline.to(curtain, { opacity: 0, duration: DURATION.base + 0.3 }, 0);
  }

  if (image) {
    timeline.fromTo(
      image,
      { scale: 1.12 },
      { scale: 1, duration: DURATION.hero },
      0,
    );
  }

  if (items.length > 0) {
    timeline.fromTo(
      items,
      { y: isDesktop ? 48 : 28, opacity: 0 },
      { y: 0, opacity: 1, duration: DURATION.base, stagger: 0.12 },
      0.5,
    );
  }
}