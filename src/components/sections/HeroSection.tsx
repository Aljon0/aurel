import { ImageFrame } from "@/components/ui/ImageFrame";
import { heroContent } from "@/data/content";
import { images } from "@/data/images";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="model"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-charcoal text-paper"
    >
      <div data-hero-image className="absolute inset-x-0 top-[-8%] h-[116%]">
        <ImageFrame
          image={images.hero}
          sizes="100vw"
          priority
          className="absolute inset-0"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/10 to-charcoal/30"
      />
      <div
        aria-hidden
        data-hero-curtain
        className="absolute inset-0 bg-charcoal"
      />

      <div className="relative mx-auto flex w-full max-w-page flex-col gap-10 px-gutter pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
        <div className="max-w-4xl">
          <p data-hero-item className="text-eyebrow tracking-[0.2em] uppercase">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-heading"
            data-hero-item
            className="mt-6 font-display text-display font-light"
          >
            {heroContent.headline}
          </h1>
          <p data-hero-item className="mt-6 max-w-md text-paper/80">
            {heroContent.support}
          </p>
        </div>

        <Link
          href="#design"
          aria-label="Scroll to the design section"
          data-hero-item
          className="flex items-center gap-4 self-start text-eyebrow tracking-[0.2em] uppercase md:self-end"
        >
          <span>{heroContent.scrollLabel}</span>
          <span aria-hidden className="h-12 w-px bg-paper/60" />
        </Link>
      </div>
    </section>
  );
}
