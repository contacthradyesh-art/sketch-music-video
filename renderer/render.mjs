#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const demo = args.includes("--demo");
const outArg = args.find((v) => v.startsWith("--out="));
const output = path.resolve(outArg?.slice("--out=".length) ?? "work/demo/storyboard/frame-0001.svg");

if (!demo) {
  console.error("Renderer scaffold only. Use --demo to create a sample SVG frame.");
  console.error("Production video rendering and audio/lyric synchronization are not implemented yet.");
  process.exitCode = 2;
} else {
  const dir = path.dirname(output);
  await fs.mkdir(dir, { recursive: true });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <rect width="1920" height="1080" fill="#f3ead5"/>
  <path d="M240 780 Q500 620 760 780 T1280 780" fill="none" stroke="#77716a" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 5"/>
  <path d="M760 780 L760 440 Q820 370 880 440 L880 780 M785 500 L855 500 M785 560 L855 560" fill="none" stroke="#77716a" stroke-width="3" stroke-linecap="round"/>
  <text x="960" y="900" text-anchor="middle" font-family="serif" font-size="44" fill="#625b50">Sketch Music Video — renderer demo</text>
</svg>`;
  await fs.writeFile(output, svg, "utf8");
  console.log(`Created demo frame: ${output}`);
}
