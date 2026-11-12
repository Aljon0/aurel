import type { NavLink, SiteSection } from "@/types/content";

export const navLinks: NavLink[] = [
  { label: "Model", href: "#model" },
  { label: "Design", href: "#design" },
  { label: "Performance", href: "#performance" },
  { label: "Gallery", href: "#gallery" },
];

export const primaryAction: NavLink = {
  label: "Explore the model",
  href: "#showcase",
};

/**
 * Page order. Drives the header's light/dark appearance and which nav link
 * is highlighted. The footer is dark and is the default.
 */
export const siteSections: SiteSection[] = [
  { id: "model", theme: "dark", navHref: "#model" },
  { id: "design", theme: "light", navHref: "#design" },
  { id: "performance", theme: "dark", navHref: "#performance" },
  { id: "showcase", theme: "light", navHref: "#model" },
  { id: "gallery", theme: "light", navHref: "#gallery" },
  { id: "discover", theme: "dark", navHref: null },
];