import { map } from '../../ui/src/lib/facts/map.ts';
import { allCards } from '../../ui/src/lib/facts/allCards.ts';
import { verbose } from '../utils/verbose.js';

verbose(`Get all cards available to be used in the app`);
const availableCards = Object.keys(allCards);
type CardName = keyof typeof allCards;

verbose(`Get all data the app is presenting`);
const allShows = Object.values(map);

verbose(`How many cards are available for render but never appeared in the app?`);
const neverAppearedInApp = availableCards.filter((card) => {
  for (const show of allShows) {
    if (show.major.has(card)) return false;
    if (show.minor.has(card)) return false;
  }
  return true;
}) as CardName[];
verbose('Answer', neverAppearedInApp.length);

verbose(`We have manually confirmed that some of them indeed have never been on any shows:`);
const indeedNeverAppearedInShows = new Set<CardName>([
  'Aero',
  'Black Swan',
  'Blue Marvel',
  'Caiera',
  'Daken',
  'Debrii',
  'Hazmat',
  'Hellcow',
  'Iron Lad',
  'Jeff the Baby Land Shark',
  'Knull',
  'Nocturne',
  'Sentry',
  'Sera',
  'Silk',
  'Snowguard',
  'Stegron',
  'Sword Master',
  'The Infinaut',
  'The Living Tribunal',
  'Wave',
  'Zero',
]);
verbose(indeedNeverAppearedInShows);

console.info(`\nPlease investigate why the following cards are not being shown in the app:`);
const needInvestigation = neverAppearedInApp.filter(
  (card) => !indeedNeverAppearedInShows.has(card),
);
console.info(needInvestigation);
