import { allCards } from './allCards.js';
import { article } from './article.js';
import fs from 'node:fs/promises';

function findSentenceContainingWord(article, word) {
  // Create a regular expression to match sentences containing the word
  const regex = new RegExp(`[^.!?]*\\b${word}\\b[^.!?]*[.!?]`, 'gi');

  // Find all matches in the article
  const matches = article.match(regex);

  // Return the matches
  return matches;
}

let output = '';
allCards.forEach((card) => {
  const sentences = findSentenceContainingWord(article, card);
  if (sentences && sentences.length > 0) {
    output += `\n---------\n${card}:\n`;
    sentences.forEach((sentence) => {
      output += sentence.trim();
    });
  }
});

fs.writeFile('./output.txt', output);
