import { ImageFrame } from "@/components/ui/ImageFrame";
import { RatioImage } from "@/components/ui/RatioImage";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { showcaseIntro, showcaseStates } from "@/data/content";

/**
 * Two layouts of the same content:
 * - Stacked (mobile, tablet, reduced motion): simple readable rows.
 * - Pinned (lg and up, motion allowed): one panel that GSAP pins and
 *   scrubs through the three states.
 * CSS decides which one is displayed, so there is no layout jump on load.
 */
export function PinnedVehicleShowcase() {
  return (
    <section
      id="showcase"
      aria-label={showcaseIntro.title}
      className="bg-silver/25"
    >
      {/* Stacked layout */}
      <div className="py-section lg:motion-safe:hidden">
        <div className="mx-auto max-w-page px-gutter">
          <SectionEyebrow
            label={showcaseIntro.eyebrow}
            index="03"
            className="text-charcoal/70"
          />
          <h2
            data-reveal
            className="mt-6 max-w-4xl font-display text-title font-light"
          >
            {showcaseIntro.title}
          </h2>

          <ol className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
            {showcaseStates.map((state) => (
              <li key={state.id}>
                <article className="grid gap-8 md:grid-cols-12 md:items-end md:gap-x-8">
                  <RatioImage
                    image={state.image}
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="md:col-span-8"
                  />
                  <div data-reveal className="md:col-span-4">
                    <p className="text-eyebrow tracking-[0.2em] text-charcoal/70 uppercase">
                      {state.index} — {state.label}
                    </p>
                    <h3 className="mt-4 font-display text-title font-light">
                      {state.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-charcoal/70">
                      {state.body}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Pinned layout */}
      <div
        data-showcase-panel
        className="hidden h-svh lg:motion-safe:flex lg:motion-safe:flex-col lg:motion-safe:justify-center"
      >
        <div className="mx-auto w-full max-w-page px-gutter">
          <SectionEyebrow
            label={showcaseIntro.eyebrow}
            index="03"
            className="text-charcoal/70"
          />
          <h2
            data-reveal
            className="mt-6 max-w-4xl font-display text-title font-light"
          >
            {showcaseIntro.title}
          </h2>

          <div className="mt-10 grid grid-cols-12 items-end gap-x-8">
            <div className="relative col-span-8 h-[56svh] min-h-80 overflow-hidden">
              {showcaseStates.map((state, index) => (
                <div
                  key={state.id}
                  data-showcase-image
                  className={`absolute inset-0 ${
                    index > 0 ? "[clip-path:inset(100%_0%_0%_0%)]" : ""
                  }`}
                >
                  <ImageFrame
                    image={state.image}
                    sizes="66vw"
                    className="absolute inset-0 rounded-lg"
                  />
                </div>
              ))}
            </div>

            <div className="col-span-4">
              <div className="grid">
                {showcaseStates.map((state, index) => (
                  <article
                    key={state.id}
                    data-showcase-text
                    className={`col-start-1 row-start-1 ${
                      index > 0 ? "opacity-0" : ""
                    }`}
                  >
                    <p className="text-eyebrow tracking-[0.2em] text-charcoal/70 uppercase">
                      {state.index} — {state.label}
                    </p>
                    <h3 className="mt-4 font-display text-title font-light">
                      {state.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-charcoal/70">
                      {state.body}
                    </p>
                  </article>
                ))}
              </div>

              <div aria-hidden className="mt-10 h-px w-full bg-charcoal/15">
                <div
                  data-showcase-progress
                  className="h-px bg-charcoal transform-[scaleX(0)] [origin-left]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}