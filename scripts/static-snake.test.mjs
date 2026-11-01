import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createStaticSnake } from './static-snake.mjs';

for (const suffix of ['', '-dark']) {
  test(`static grid preserves cells and colors (${suffix || 'light'})`, () => {
    const source = readFileSync(new URL(`../assets/contributions/snake${suffix}.svg`, import.meta.url), 'utf8');
    const output = createStaticSnake(source);
    const cells = /<rect\b[^>]*class="c(?:\s[^"]*)?"[^>]*\/>/g;
    assert.deepEqual(output.match(cells), source.match(cells));
    assert.equal(output.match(/:root\s*\{[^}]+\}/)[0], source.match(/:root\s*\{[^}]+\}/)[0]);
    assert.doesNotMatch(output, /animation|@keyframes|<script|<foreignObject/);
    assert.match(output, /fill:var\(--c[1-4]\)/);
    assert.equal(output.match(/viewBox="[^"]+"/)[0], source.match(/viewBox="[^"]+"/)[0]);
  });
}

test('rejects missing or changed upstream SVG structure', () => {
  assert.throws(() => createStaticSnake('<svg></svg>'), /Unexpected/);
});
