import { derived } from 'svelte/store';
import { map } from '../facts/map';
import { sort } from '../stores/writables/$primary';
import type { Show } from './buildingBlocks';

const compareYear = (descending: boolean) => (a: Show, b: Show) => {
  let verdict = a.year > b.year;
  if (descending) verdict = !verdict;
  return verdict ? 1 : -1;
};
function getNumCardsByShow(show: Show) {
  const roster = map[show.key];
  return roster.major.size + roster.minor.size;
}
const compareNumCards = (descending: boolean) => (a: Show, b: Show) => {
  let verdict = getNumCardsByShow(a) > getNumCardsByShow(b);
  if (descending) verdict = !verdict;
  return verdict ? 1 : -1;
};
const compareNumSeasons = (descending: boolean) => (a: Show, b: Show) => {
  const numSeasonsA = a.numSeasons || 0;
  const numEpisodesA = a.numEpisodes || 0;
  const numSeasonsB = b.numSeasons || 0;
  const numEpisodesB = b.numEpisodes || 0;
  let verdict: boolean;
  if (numSeasonsA === numSeasonsB) {
    verdict = numEpisodesA > numEpisodesB;
  } else verdict = numSeasonsA > numSeasonsB;
  if (descending) verdict = !verdict;
  return verdict ? 1 : -1;
};

const compareTitle = (descending: boolean) => (a: Show, b: Show) => {
  let titleA = a.title.toLowerCase();
  let titleB = b.title.toLowerCase();
  if (titleA.startsWith('the ')) titleA = titleA.slice(4);
  if (titleB.startsWith('the ')) titleB = titleB.slice(4);
  let verdict = titleA > titleB;
  if (descending) verdict = !verdict;
  return verdict ? 1 : -1;
};

/**
 * A store that returns a function, which is to be passed into array.prototype.sort(). This store reacts to the sorting options in the bottom left corner.
 */
export const sortFn = derived(sort, (sortStates) => {
  const { sortDescending: direction, sortBy } = sortStates;
  if (sortBy === 'year') return compareYear(direction);
  else if (sortBy === 'numCards') return compareNumCards(direction);
  else if (sortBy === 'numSeasons') return compareNumSeasons(direction);
  else if (sortBy === 'alphabetical') return compareTitle(direction);
  else throw 'unknown sortBy value';
});
