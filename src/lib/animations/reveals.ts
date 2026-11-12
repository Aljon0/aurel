import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import {
  DURATION,
  EASE,
  SELECTORS,
  type MotionOptions,
} from "@/lib/animations/motion";

/**
 * Fades and lifts [data-reveal] elements as they enter the viewport.
 * Elements already in view when this runs are left alone, so content is
 * never hidden after a reload that restores the scroll position.
 */
export function textReveals(root: HTMLElement, { isDesktop }: MotionOptions) {
  const threshold = window.innerHeight * 0.88;
  const pending = gsap.utils
    .toArray<HTMLElement>(SELECTORS.reveal, root)
    .filter((element) => element.getBoundingClientRect().top > threshold);

  if (pending.length === 0) return;

  gsap.set(pending, { opacity: 0, y: isDesktop ? 40 : 24 });

  ScrollTrigger.batch(pending, {
    start: "top 88%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: DURATION.base,
        ease: EASE.out,
        stagger: 0.1,
        overwrite: true,
        clearProps: "opacity,transform",
      });
    },
  });
}

/** Clip-path wipe with an inner scale settle for [data-image-reveal]. */
export function imageReveals(root: HTMLElement) {
  const frames = gsap.utils.toArray<HTMLElement>(SELECTORS.imageReveal, root);

  frames.forEach((frame) => {
    const inner = frame.firstElementChild;
    const timeline = gsap.timeline({
      defaults: { ease: EASE.inOut },
      scrollTrigger: { trigger: frame, start: "top 85%", once: true },
    });

    timeline.fromTo(
      frame,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: DURATION.image,
        clearProps: "clipPath",
      },
      0,
    );

    if (inner) {
      timeline.fromTo(
        inner,
        { scale: 1.2 },
        {
          scale: 1,
          duration: DURATION.image * 1.3,
          ease: EASE.out,
          clearProps: "transform",
        },
        0,
      );
    }
  });
}