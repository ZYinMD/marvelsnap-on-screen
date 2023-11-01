import { map } from '../../ui/src/lib/facts/map.ts';
import { allCards } from '../../ui/src/lib/facts/allCards.ts';

console.log('The following cards are in the game, but have not appeared anywhere in the app:');

const allShows = Object.values(map);
const neverAppearedInApp = Object.keys(allCards).filter((card) => {
  for (const show of allShows) {
    if (show.major.has(card)) return false;
    if (show.minor.has(card)) return false;
  }
  return true;
});
console.log(neverAppearedInApp);
