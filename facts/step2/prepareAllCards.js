import input from '../step1/allCardsFromUntappedGg.json' assert { type: 'json' };

const result = {};
for (const card of input) {
  if (!card.collectible) continue; // not a real card that we card about. (there are all kinds of non real cards, e.g. Tiger Spirit, Evolved Hulk, Squirrel, Ebony Blade, Symbiote, Soul Stone, to name a few)
  if (card.name in result) throw new Error(`Duplicated card id: ${card.name}`);
  ['id', 'artists', 'attributes', 'series', 'collectible'].forEach((field) => {
    delete card[field]; // these are fields provided by untapped.gg that we don't need
  });
  result[card.name] = card;
}

const outputPath = new URL('../../ui/src/lib/facts/allCards.ts', import.meta.url);
const output = `export const allCards = ${JSON.stringify(result)} as const;`;
Deno.writeTextFile(outputPath, output);
