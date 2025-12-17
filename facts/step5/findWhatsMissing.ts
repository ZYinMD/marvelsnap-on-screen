import { allCards } from '../../ui/src/lib/facts/allCards.ts';
import { map } from '../../ui/src/lib/facts/map.ts';
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
  'Bruce Banner',
  'Caiera',
  'Copycat',
  'Daken',
  'Debrii',
  'Doctor Doom 2099',
  'Emperor Hulkling',
  'Galacta',
  'Xorn',
  'Gwenpool',
  'Hazmat',
  'Hellcow',
  'Infinity Ultron',
  'Strange Supreme',
  'Hydra Bob',
  'Iron Lad',
  'Jeff the Baby Land Shark',
  'Omega Sentinel',
  'Lasher',
  'Luna Snow',
  'Marvel Boy',
  'Misery',
  'Toxie Doxie',
  'Nocturne',
  'Rocket and Groot',
  'Gorgon',
  'Sentry',
  'Sera',
  'Silk',
  'Web Sling',
  'Snowguard',
  'Red Shift',
  'Colonel America',
  'Astral Projection',
  'Viv Vision',
  'Danger',
  'Deafening Chord',
  'The Hunger',
  'Zombie Galacti',
  'Starbrand',
  'Stegron',
  'Sword Master',
  'The Infinaut',
  'The Living Tribunal',
  'Wave',
  'Zero',
  'Firehair',
  'The First Ghost Rider',
  'Kahhori',
  'Fan Fei',
  'Hydra Stomper',
  'Prodigy',
  'Elixir',
  'The Fallen One',
  'Cosmic Ghost Rider',
]);
verbose(indeedNeverAppearedInShows);

console.info(`\nPlease investigate why the following cards are not being shown in the app:`);
const needInvestigation = neverAppearedInApp
  .filter((card) => !indeedNeverAppearedInShows.has(card))
  .map((card) => {
    const releaseTime = allCards[card].seriesStartTimestamps.at(-1);
    // date as yyyy-mm-dd
    const releaseDate = new Date(releaseTime!).toLocaleDateString('en-CA');
    return `${releaseDate} ${card}`;
  })
  .sort();
console.info(needInvestigation);
