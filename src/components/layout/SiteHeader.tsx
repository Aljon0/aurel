"use client";

import Link from "next/link";
import { useRef } from "react";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { navLinks, primaryAction } from "@/data/navigation";
import { useHeaderState } from "@/hooks/useHeaderState";

/**
 * Fixed header. Its colours follow the section underneath (data-theme) and a
 * soft bar fades in once the page has scrolled (data-scrolled). Both
 * attributes are kept up to date by useHeaderState.
 */
export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);
  useHeaderState(ref);

  return (
    <header
      ref={ref}
      data-theme="dark"
      data-scrolled="false"
      className="group/header fixed inset-x-0 top-0 z-30 text-paper transition-colors duration-300 data-[theme=light]:text-charcoal"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-charcoal/80 opacity-0 backdrop-blur-md transition-[opacity,background-color] duration-300 group-data-[scrolled=true]/header:opacity-100 group-data-[theme=light]/header:bg-paper/85"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-page items-center justify-between px-gutter py-5 transition-[padding] duration-300 group-data-[scrolled=true]/header:py-3 md:py-7 md:group-data-[scrolled=true]/header:py-4">
        <Link
          href="#model"
          aria-label="AUREL, back to top"
          className="font-display text-2xl tracking-[0.3em]"
        >
          AUREL
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-nav-link
                  className="relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 data-active:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={primaryAction.href}
            className="inline-flex min-h-12 items-center border border-current/50 px-7 text-sm tracking-wide transition-colors duration-300 hover:border-current hover:bg-current/10"
          >
            {primaryAction.label}
          </Link>
        </nav>

        <MobileNavigation links={navLinks} action={primaryAction} />
      </div>
    </header>
  );
}