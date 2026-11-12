import { ImageFrame } from "@/components/ui/ImageFrame";
import { LightboxDialog, LightboxTrigger } from "@/components/ui/Lightbox";
import { RatioImage } from "@/components/ui/RatioImage";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { galleryIntro, galleryItems } from "@/data/content";

/** Column spans for the editorial grid, matched to galleryItems order. */
const spans = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-8",
] as const;

export function VehicleGallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-paper py-section"
    >
      <div className="mx-auto max-w-page px-gutter">
        <SectionEyebrow
          label={galleryIntro.eyebrow}
          index="04"
          className="text-charcoal/70"
        />
        <h2
          id="gallery-heading"
          data-reveal
          className="mt-6 max-w-4xl font-display text-title font-light"
        >
          {galleryIntro.title}
        </h2>

        <ul className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-12 md:items-end">
          {galleryItems.map((item, index) => {
            const dialogId = `gallery-dialog-${index}`;

            return (
              <li
                key={item.image.src}
                className={spans[index] ?? "md:col-span-6"}
              >
                <figure className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <RatioImage
                      image={item.image}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <LightboxTrigger
                      dialogId={dialogId}
                      label={`View larger: ${item.caption}`}
                      className="absolute inset-0 cursor-zoom-in"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-charcoal/70 transition-colors duration-300 group-hover:text-charcoal">
                    {item.caption}
                  </figcaption>

                  <LightboxDialog id={dialogId} label={item.caption}>
                    <div className="relative h-[78svh] w-[92vw] max-w-6xl">
                      <ImageFrame
                        image={item.image}
                        sizes="92vw"
                        className="absolute inset-0"
                        imgClassName="object-contain!"
                      />
                    </div>
                    <p className="mt-4 text-sm text-silver">{item.caption}</p>
                  </LightboxDialog>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
