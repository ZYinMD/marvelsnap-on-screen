import { allCards } from '../../ui/src/lib/facts/allCards.ts';
import { sleep } from '../utils/sleep.ts';

/* All the cards images we need are downloaded from untapped.gg, then put into the sveltekit folder. This script check what cards we already in allCards.ts but haven't downloaded the image, and download them  */

const imgDir = new URL('../../ui/static/card-images', import.meta.url);
const filesNeeded = Object.values(allCards).map((card) => card.defId + '.webp');
const filesOwned = new Set<string>();
for await (const dirEntry of Deno.readDir(imgDir)) {
  filesOwned.add(dirEntry.name);
}
console.info(`\nNeed ${filesNeeded.length} images, already have ${filesOwned.size}.\n`);
for (const i of filesNeeded) {
  if (filesOwned.has(i)) continue;
  console.info(`\nDownload ${i}...`);
  const url = `https://snapjson.untapped.gg/art/render/framebreak/common/512/${i}`;
  await sleep(1e3);
  const res = await fetch(url);
  const status = res.status;
  const contentLength = Number(res.headers.get('content-length')); // could be "12345" or "0" or null before converting to number
  if (!res.ok || !contentLength) {
    console.error(`Fetch result not good:`, { status, contentLength });
    continue;
  }
  if (contentLength < 20e3) {
    console.info(`Image size ${contentLength}, too small, probably a placeholder, skip`);
    continue;
  }
  const buffer = await res.arrayBuffer();
  const outputPath = new URL(i, imgDir + '/');
  await Deno.writeFile(outputPath, new Uint8Array(buffer));
}
