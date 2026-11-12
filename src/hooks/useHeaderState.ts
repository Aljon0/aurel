import { useEffect, type RefObject } from "react";
import { siteSections } from "@/data/navigation";

const SCROLLED_AFTER = 40;

/**
 * Keeps the fixed header in step with the page:
 * - data-theme: "dark" | "light", from the section under the header
 * - data-scrolled: "true" once the page has moved away from the top
 * - the current section's nav link gets data-active and aria-current
 * Reads positions from the DOM, so it also works while the showcase is pinned.
 */
export function useHeaderState(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const header = ref.current;
    if (!header) return;

    const links = Array.from(
      header.querySelectorAll<HTMLElement>("[data-nav-link]"),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = header.offsetHeight / 2;
      let theme: "dark" | "light" = "dark";
      let activeHref: string | null = null;

      for (const section of siteSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          theme = section.theme;
          activeHref = section.navHref;
          break;
        }
      }

      header.dataset.theme = theme;
      header.dataset.scrolled = String(window.scrollY > SCROLLED_AFTER);

      links.forEach((link) => {
        const active = link.getAttribute("href") === activeHref;
        link.toggleAttribute("data-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);
}