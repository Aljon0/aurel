/**
 * Checks every image listed in src/data/images.ts against /public:
 * exists, real format, file size, resolution and aspect ratio.
 * Run with: npm run check:images
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MAX_KB = 600;
const root = process.cwd();
const manifest = readFileSync(join(root, "src/data/images.ts"), "utf8");

const entries = [
  ...manifest.matchAll(
    /"(\/images\/[^"]+)",\s*"(?:[^"\\]|\\.)*",\s*(\d+),\s*(\d+)/g,
  ),
].map(([, src, width, height]) => ({
  src,
  width: Number(width),
  height: Number(height),
}));

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("sharp not found: skipping format and dimension checks.\n");
}

const rows = [];
let problems = 0;

for (const entry of entries) {
  const path = join(root, "public", entry.src);

  if (!existsSync(path)) {
    rows.push({ file: entry.src, size: "-", pixels: "-", status: "MISSING" });
    problems += 1;
    continue;
  }

  const kb = Math.round(statSync(path).size / 1024);
  const notes = [];
  let pixels = "n/a";

  if (sharp) {
    const meta = await sharp(path).metadata();
    pixels = `${meta.width}x${meta.height}`;

    const expected = entry.width / entry.height;
    const actual = meta.width / meta.height;
    if (Math.abs(actual - expected) / expected > 0.03) {
      notes.push(`ratio ${actual.toFixed(2)} (expected ${expected.toFixed(2)})`);
    }
    if (meta.width < entry.width * 0.75) notes.push("low resolution");
    if (!["webp", "heif"].includes(meta.format ?? "")) {
      notes.push(`real format is ${meta.format}, not webp/avif`);
    }
  }

  if (kb > MAX_KB) notes.push(`large (over ${MAX_KB} KB)`);
  if (notes.length > 0) problems += 1;

  rows.push({
    file: entry.src,
    size: `${kb} KB`,
    pixels,
    status: notes.length > 0 ? notes.join("; ") : "OK",
  });
}

console.table(rows);
console.log(
  problems === 0
    ? "All images look good."
    : `${problems} image(s) need attention.`,
);
process.exit(problems === 0 ? 0 : 1);