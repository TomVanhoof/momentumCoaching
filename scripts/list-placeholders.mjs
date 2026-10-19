// Lists every [placeholder] left in the built site. Run after `npm run build`.
import { readdirSync, readFileSync } from 'node:fs';

const files = readdirSync('dist').filter((f) => f.endsWith('.html'));
const found = new Map();

for (const file of files) {
  const text = readFileSync(`dist/${file}`, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ');
  // Outermost [ ... ] groups; nested brackets stay inside their parent
  for (const m of text.matchAll(/\[(?:[^\[\]]|\[[^\[\]]*\])*\]/g)) {
    const key = m[0].replace(/\s+/g, ' ');
    if (!found.has(key)) found.set(key, new Set());
    found.get(key).add(file);
  }
}

for (const [text, pages] of [...found].sort()) console.log(`${text}  ←  ${[...pages].join(', ')}`);
console.log(`\n${found.size} distinct placeholders`);
