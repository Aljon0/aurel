/**
 * Creates the social-preview images (1200x630 JPG) from the hero photo.
 * Next.js picks up opengraph-image.jpg and twitter-image.jpg in src/app
 * automatically. Run with: npm run make:og
 */
import { existsSync } from "node:fs";
import sharp from "sharp";

const source = "public/images/hero.webp";

if (!existsSync(source)) {
  console.error(`Missing ${source}. Add the hero image first.`);
  process.exit(1);
}

for (const name of ["opengraph-image.jpg", "twitter-image.jpg"]) {
  await sharp(source)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`src/app/${name}`);
  console.log(`Created src/app/${name}`);
}