import { footerContent } from "@/data/content";
import { navLinks } from "@/data/navigation";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto max-w-page px-gutter py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-[0.3em]">AUREL</p>
            <p className="mt-4 max-w-xs text-sm text-mist">
              {footerContent.disclaimer}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-eyebrow tracking-[0.2em] text-mist uppercase">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 hover:text-silver"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow tracking-[0.2em] text-mist uppercase">
              Follow
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-mist">
              {footerContent.social.map((name) => (
                <li key={name}>
                  {name}
                  <span className="sr-only"> (placeholder, no link yet)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-mist md:flex-row md:justify-between">
          <p>{footerContent.copyright}</p>
          <p>{footerContent.stack}</p>
        </div>
      </div>
    </footer>
  );
}
