import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";
/** The surface the button sits on, which decides its colours. */
type Surface = "light" | "dark";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  surface?: Surface;
  className?: string;
  onClick?: () => void;
}

const styles: Record<Variant, Record<Surface, string>> = {
  solid: {
    dark: "bg-paper text-charcoal hover:bg-silver",
    light: "bg-charcoal text-paper hover:bg-charcoal/80",
  },
  outline: {
    dark: "border border-paper/60 text-paper hover:bg-paper hover:text-charcoal",
    light:
      "border border-charcoal/40 text-charcoal hover:bg-charcoal hover:text-paper",
  },
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  surface = "dark",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center px-7 text-sm tracking-wide transition-[colors,scale] duration-300 active:scale-[0.98] ${styles[variant][surface]} ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}