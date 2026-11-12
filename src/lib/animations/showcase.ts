import { gsap } from "@/lib/animations/gsap";
import { EASE, SELECTORS, SHOWCASE } from "@/lib/animations/motion";

/**
 * Pinned vehicle showcase. The panel stays fixed while one scrubbed timeline
 * wipes between images, swaps the supporting text and fills a progress line.
 * Create this BEFORE other ScrollTriggers that sit below it, so their
 * positions account for the pin spacing.
 */
export function pinnedShowcase(root: HTMLElement) {
  const panel = root.querySelector<HTMLElement>(SELECTORS.showcasePanel);
  if (!panel) return;

  const images = gsap.utils.toArray<HTMLElement>(SELECTORS.showcaseImage, panel);
  const texts = gsap.utils.toArray<HTMLElement>(SELECTORS.showcaseText, panel);
  const progress = panel.querySelector<HTMLElement>(SELECTORS.showcaseProgress);

  if (images.length < 2 || images.length !== texts.length) return;

  const total = images.length * SHOWCASE.hold;

  // Starting state: first image and text visible, the rest waiting.
  gsap.set(images.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
  gsap.set(texts.slice(1), { opacity: 0, y: 32 });

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: panel,
      start: "top top",
      end: () => `+=${window.innerHeight * SHOWCASE.scrollScreens}`,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // Fix the timeline length so every state gets an equal share of scroll.
  timeline.to({}, { duration: total }, 0);

  if (progress) {
    timeline.fromTo(
      progress,
      { scaleX: 0 },
      { scaleX: 1, duration: total },
      0,
    );
  }

  images.slice(1).forEach((image, index) => {
    const next = index + 1;
    const start = next * SHOWCASE.hold - SHOWCASE.swap / 2;
    const half = SHOWCASE.swap / 2;

    timeline.to(
      image,
      { clipPath: "inset(0% 0% 0% 0%)", duration: SHOWCASE.swap, ease: EASE.inOut },
      start,
    );

    const inner = image.firstElementChild;
    if (inner) {
      timeline.fromTo(
        inner,
        { scale: 1.15 },
        { scale: 1, duration: SHOWCASE.swap * 2 },
        start,
      );
    }

    timeline.to(texts[index], { opacity: 0, y: -32, duration: half }, start);
    timeline.to(texts[next], { opacity: 1, y: 0, duration: half }, start + half);
  });
}