import { derived, writable } from 'svelte/store';
import { sortStates } from '../Sort/$sortStates';
import { allTitles } from '../facts/allTitles';
import { map, type Key } from '../facts/map';

const dividerMovies = {
  title: 'Movies',
  type: 'divider',
  key: 'heading-movies',
} as const;
const dividerLiveActionTvSeries = {
  title: 'Live Action TV Series',
  type: 'divider',
  key: 'heading-live-action-tv-series',
} as const;
const dividerAnimatedTvSeries = {
  title: 'Animated TV Series',
  type: 'divider',
  key: 'heading-animated-tv-series',
} as const;

const movies = Object.values(allTitles.movie);
const liveActionTvSeries = Object.values(allTitles['live-action-tv-series']);
const animatedTvSeries = Object.values(allTitles['animated-tv-series']);
const all = [...movies, ...liveActionTvSeries, ...animatedTvSeries];

type Show = (typeof all)[number];

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
  // @ts-expect-error: I know what I'm doing
  const numSeasonsA = a.numSeasons || 0;
  // @ts-expect-error: I know what I'm doing
  const numEpisodesA = a.numEpisodes || 0;
  // @ts-expect-error: I know what I'm doing
  const numSeasonsB = b.numSeasons || 0;
  // @ts-expect-error: I know what I'm doing
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
 * The main list containing the data used to render the list on the home page. The list contains a mixture of 3 possible "dividers" objects and all the shows. The divider will be rendered as divider components, shows rendered as show components.
 * It's a derived store, will change its values based on the current sort and filter.
 */
export const mainList = derived(sortStates, (sortStates) => {
  const { sortDescending: direction, sortBy, groupByType } = sortStates;
  const result = [];
  let sortFn: any;
  if (sortBy === 'year') sortFn = compareYear(direction);
  else if (sortBy === 'numCards') sortFn = compareNumCards(direction);
  else if (sortBy === 'numSeasons') sortFn = compareNumSeasons(direction);
  else if (sortBy === 'alphabetical') sortFn = compareTitle(direction);
  if (sortBy !== 'numSeasons') {
    // ignore all movies if sort by numSeasons
    result.push(dividerMovies);
    result.push(...movies.sort(sortFn));
  }
  result.push(dividerLiveActionTvSeries);
  result.push(...liveActionTvSeries.sort(sortFn));
  result.push(dividerAnimatedTvSeries);
  result.push(...animatedTvSeries.sort(sortFn));
  return result;
});

export const openDrawers = writable(new Set<Key>());
