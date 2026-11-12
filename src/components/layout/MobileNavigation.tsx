"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { EASE } from "@/lib/animations/motion";
import type { NavLink } from "@/types/content";

interface MobileNavigationProps {
  links: NavLink[];
  action: NavLink;
}

export function MobileNavigation({ links, action }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  // Scroll lock, focus management, focus trap, Escape, close on resize.
  useEffect(() => {
    if (!open) return;
    const root = rootRef.current;
    if (!root) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Opening animation (skipped for reduced motion).
  useGSAP(
    () => {
      if (!open) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-menu-panel]", {
          opacity: 0,
          duration: 0.35,
          ease: EASE.out,
        });
        gsap.from("[data-menu-item]", {
          y: 28,
          opacity: 0,
          duration: 0.6,
          stagger: 0.07,
          delay: 0.1,
          ease: EASE.out,
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [open] },
  );

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`relative z-50 inline-flex min-h-12 min-w-12 items-center justify-center px-2 text-sm tracking-wide ${
          open ? "text-paper" : ""
        }`}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          data-menu-panel
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 flex flex-col justify-center bg-charcoal px-gutter text-paper"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href} data-menu-item>
                  <a
                    href={link.href}
                    onClick={() => close(false)}
                    className="font-display text-5xl font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div data-menu-item className="mt-12">
            <ButtonLink
              href={action.href}
              onClick={() => close(false)}
              variant="outline"
              surface="dark"
              className="w-full"
            >
              {action.label}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}