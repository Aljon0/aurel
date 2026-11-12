import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { DURATION, SELECTORS } from "@/lib/animations/motion";
import { formatNumber } from "@/lib/format";

/** Hero image drifts down slowly as the hero scrolls away. */
export function heroParallax(root: HTMLElement) {
  const image = root.querySelector<HTMLElement>(SELECTORS.heroImage);
  const hero = image?.closest("section");
  if (!image || !hero) return;

  gsap.to(image, {
    yPercent: 6.5,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/** Background images marked [data-parallax] drift against the scroll. */
export function sectionParallax(root: HTMLElement) {
  gsap.utils.toArray<HTMLElement>(SELECTORS.parallax, root).forEach((element) => {
    const section = element.closest("section");
    if (!section) return;

    gsap.fromTo(
      element,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

/**
 * Counts [data-count-to] numbers up from zero when they scroll into view.
 * Server markup already holds the final number, so nothing breaks without JS.
 * Returns a cleanup that restores the original text.
 */
export function countUps(root: HTMLElement): () => void {
  const threshold = window.innerHeight * 0.88;
  const items = gsap.utils
    .toArray<HTMLElement>(SELECTORS.countTo, root)
    .filter((element) => element.getBoundingClientRect().top > threshold);

  const originals = items.map((element) => element.textContent ?? "");

  items.forEach((element) => {
    const target = Number(element.dataset.countTo);
    const decimals = Number(element.dataset.countDecimals ?? 0);
    if (!Number.isFinite(target)) return;

    element.textContent = formatNumber(0, decimals);
    const counter = { value: 0 };

    ScrollTrigger.create({
      trigger: element,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: DURATION.count,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = formatNumber(counter.value, decimals);
          },
          onComplete: () => {
            element.textContent = formatNumber(target, decimals);
          },
        });
      },
    });
  });

  return () => {
    items.forEach((element, index) => {
      element.textContent = originals[index];
    });
  };
}