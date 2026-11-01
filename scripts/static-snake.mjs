import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// Keep the original grid and colors, but omit the snake, consumed-cell bar
// and all animation rules. Fail visibly if the upstream SVG format changes.
export function createStaticSnake(svg) {
  const root = svg.match(/<svg\b[^>]*>/)?.[0];
  const palette = svg.match(/:root\s*\{[^}]+\}/)?.[0];
  const cellRules = [...svg.matchAll(/\.c(?:\.c[\da-z]+)?\s*\{[^}]+\}/g)]
    .map(([rule]) => rule.replace(/animation[^:}]*:[^;}]+;?/g, ''));
  const cells = [...svg.matchAll(/<rect\b[^>]*class="c(?:\s[^"]*)?"[^>]*\/>/g)]
    .map(([cell]) => cell);
  assert(root && palette && cellRules.length > 1, 'Unexpected snake SVG styling');
  assert(cells.length >= 350 && cells.length <= 371, 'Expected a yearly contribution grid');
  return `${root}<title>Marius Minia's GitHub contributions</title><desc>Static contribution grid for reduced-motion readers. Generated from the same data as the animated snake.</desc><style>${palette}${cellRules.join('')}</style>${cells.join('')}</svg>\n`;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  for (const suffix of ['', '-dark']) {
    const input = new URL(`../assets/contributions/snake${suffix}.svg`, import.meta.url);
    const output = new URL(`../assets/contributions/snake-static${suffix}.svg`, import.meta.url);
    writeFileSync(output, createStaticSnake(readFileSync(input, 'utf8')));
    console.log(`Generated ${fileURLToPath(output)}`);
  }
}
