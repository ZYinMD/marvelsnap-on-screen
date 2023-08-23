import { allCards } from '../../../ui/src/lib/facts/allCards.ts';

const inputDir = new URL('./wiki-pages/', import.meta.url);
const outputDir = new URL('./search-results/', import.meta.url);
for await (const dirEntry of Deno.readDir(inputDir)) {
  console.info(`Reading ${dirEntry.name}...`);
  const inputFile = new URL(dirEntry.name, inputDir);
  const input = await Deno.readTextFile(inputFile);
  const output = findQuotesOfAllCards(input, Object.keys(allCards));
  const outputFile = new URL(dirEntry.name, outputDir);
  Deno.writeTextFile(outputFile, output.trim());
}

function findQuotesOfAllCards(article: string, cards: string[]) {
  let result = '';
  cards.forEach((card) => {
    const sentences = findSentenceContainingWord(article, card);
    if (sentences) {
      result += `\n\n-------------\n${card}\n-------------\n`;
      result += sentences.join('\n');
    }
  });
  return result;
}

/* Find all sentences in article that contains a given word, function copied from ChatGPT.  */
function findSentenceContainingWord(article: string, word: string) {
  const regex = new RegExp(`[^.!?]*\\b${word}\\b[^.!?]*[.!?]`, 'gi');
  return article.match(regex);
}
