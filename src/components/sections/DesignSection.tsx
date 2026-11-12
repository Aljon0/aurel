import { RatioImage } from "@/components/ui/RatioImage";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { designBlocks, designDetails, designIntro } from "@/data/content";

const layout = {
  left: {
    image: "md:order-1 md:col-span-6",
    text: "md:order-2 md:col-span-5 md:col-start-8",
  },
  right: {
    image: "md:order-2 md:col-span-6 md:col-start-7",
    text: "md:order-1 md:col-span-5",
  },
} as const;

export function DesignSection() {
  return (
    <section
      id="design"
      aria-labelledby="design-heading"
      className="bg-paper py-section"
    >
      <div className="mx-auto max-w-page px-gutter">
        <SectionEyebrow
          label={designIntro.eyebrow}
          index="01"
          className="text-charcoal/70"
        />
        <h2
          id="design-heading" data-reveal
          className="mt-6 max-w-4xl font-display text-title font-light"
        >
          {designIntro.title}
        </h2>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {designBlocks.map((block) => (
            <article
              key={block.title}
              className="grid gap-8 md:grid-cols-12 md:items-center md:gap-x-8"
            >
              <RatioImage
                image={block.image}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`rounded-lg order-1 ${layout[block.imageSide].image}`}
              />
              <div data-reveal className={`order-2 ${layout[block.imageSide].text}`}>
                <p className="text-eyebrow tracking-[0.2em] text-charcoal/60 uppercase">
                  {block.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-title font-light">
                  {block.title}
                </h3>
                <p className="mt-6 max-w-md text-charcoal/70">{block.body}</p>
              </div>
            </article>
          ))}
        </div>

        <dl className="mt-20 grid gap-x-8 gap-y-8 border-t border-charcoal/15 pt-10 sm:grid-cols-2 md:mt-32 lg:grid-cols-4">
          {designDetails.map((detail) => (
            <div key={detail.label} data-reveal>
              <dt className="text-eyebrow tracking-[0.2em] text-charcoal/60 uppercase">
                {detail.label}
              </dt>
              <dd className="mt-3 text-charcoal/80">{detail.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}