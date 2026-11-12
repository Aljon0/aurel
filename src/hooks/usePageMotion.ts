import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations/gsap";
import { countUps, heroParallax, sectionParallax } from "@/lib/animations/effects";
import { heroEntrance } from "@/lib/animations/hero";
import { MEDIA } from "@/lib/animations/motion";
import { imageReveals, textReveals } from "@/lib/animations/reveals";
import { pinnedShowcase } from "@/lib/animations/showcase";

/**
 * Wires up every page animation inside one gsap.matchMedia() context.
 * - Nothing runs when the user prefers reduced motion (content stays static).
 * - Distances shrink on small screens; pin and parallax are desktop-only.
 * - Everything is reverted on unmount or when the media queries change.
 */
export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(MEDIA, (context) => {
        const conditions = context.conditions ?? {};
        if (conditions.reduceMotion) return;

        const options = { isDesktop: Boolean(conditions.isDesktop) };

        // Order matters: pins first, so triggers below them measure correctly.
        if (conditions.isWide) pinnedShowcase(root);

        heroEntrance(root, options);
        if (options.isDesktop) {
          heroParallax(root);
          sectionParallax(root);
        }
        textReveals(root, options);
        imageReveals(root);

        return countUps(root);
      });

      let cancelled = false;
      void document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
        mm.revert();
      };
    },
    { scope },
  );
}