// One short text, written to leave the reader relaxed.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "In the afternoon, the sun lays a band of light across the floor, and dust moves through it, slow as snow. This morning it lay on the far field. By evening it will be on the rooftops, and after this room goes dark it is still travelling, still warm on a wall you will never see.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
