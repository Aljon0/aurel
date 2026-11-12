import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { conceptSpecs, performanceContent } from "@/data/content";
import { images } from "@/data/images";
import { formatNumber } from "@/lib/format";

export function PerformanceSection() {
  return (
    <section
      id="performance"
      aria-labelledby="performance-heading"
      className="relative overflow-hidden bg-charcoal py-section text-paper"
    >
      <div data-parallax className="absolute inset-x-0 top-[-10%] h-[120%]">
        <ImageFrame
          image={images.performance}
          sizes="100vw"
          className="absolute inset-0"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-charcoal/75" />

      <div className="relative mx-auto max-w-page px-gutter">
        <SectionEyebrow label={performanceContent.eyebrow} index="02" />
        <h2
          id="performance-heading"
          data-reveal
          className="mt-6 max-w-5xl font-display text-display font-light"
        >
          {performanceContent.statement}
        </h2>
        <p data-reveal className="mt-8 max-w-md text-paper/80">
          {performanceContent.body}
        </p>

        <dl className="mt-16 grid gap-x-8 gap-y-12 border-t border-paper/20 pt-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {conceptSpecs.map((spec) => (
            <div key={spec.label} data-reveal>
              <dd className="font-display text-title font-light lining-nums tabular-nums">
                <span
                  data-count-to={spec.value}
                  data-count-decimals={spec.decimals}
                >
                  {formatNumber(spec.value, spec.decimals)}
                </span>
                <span className="ml-2 text-body text-silver">{spec.unit}</span>
              </dd>
              <dt className="mt-3 text-eyebrow tracking-[0.2em] text-silver uppercase">
                {spec.label}
              </dt>
            </div>
          ))}
        </dl>

        <p data-reveal className="mt-12 max-w-xl text-sm text-silver">
          {performanceContent.disclaimer}
        </p>
      </div>
    </section>
  );
}