import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun's "Sum up 23 November's world news in one image"
// bounty. The image is rendered ahead of time (see README.md); this
// program copies the finished entry.png into the output directory.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts: ${src}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log(`Copied entry.png to ${outDir}`);
