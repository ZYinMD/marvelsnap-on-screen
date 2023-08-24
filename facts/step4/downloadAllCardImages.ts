import { allCards } from '../../ui/src/lib/facts/allCards.ts';

const imgDir = new URL('../../ui/static/card-images', import.meta.url);
const filesNeeded = Object.values(allCards).map((card) => card.defId + '.webp');
const filesOwned = new Set<string>();
for await (const dirEntry of Deno.readDir(imgDir)) {
  filesOwned.add(dirEntry.name);
}
console.info(`\nNeed ${filesNeeded.length} images, already have ${filesOwned.size}.\n`);
for (const i of filesNeeded) {
  if (filesOwned.has(i)) continue;
  console.info(`Download ${i}...`);
  const url = `https://snapjson.untapped.gg/art/render/framebreak/common/512/${i}`;
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const outputPath = new URL(i, imgDir + '/');
  await Deno.writeFile(outputPath, new Uint8Array(buffer));
}
