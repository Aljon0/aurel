import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ctaContent } from "@/data/content";
import { images } from "@/data/images";

export function CallToAction() {
  return (
    <section
      id="discover"
      aria-labelledby="cta-heading"
      className="relative flex min-h-[85svh] items-end overflow-hidden bg-charcoal text-paper"
    >
      <ImageFrame
        image={images.closing}
        sizes="100vw"
        className="absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/20 to-charcoal/30"
      />

      <div data-reveal className="relative mx-auto w-full max-w-page px-gutter pb-16 md:pb-24">
        <h2
          id="cta-heading"
          className="max-w-4xl font-display text-display font-light"
        >
          {ctaContent.headline}
        </h2>
        <ButtonLink
          href={ctaContent.action.href}
          variant="solid"
          surface="dark"
          className="mt-10"
        >
          {ctaContent.action.label}
        </ButtonLink>
      </div>
    </section>
  );
}