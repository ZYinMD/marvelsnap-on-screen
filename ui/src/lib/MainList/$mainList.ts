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

export type Show = (typeof all)[number];

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

export const sortFn = derived(sortStates, (sortStates) => {
  const { sortDescending: direction, sortBy } = sortStates;
  if (sortBy === 'year') return compareYear(direction);
  else if (sortBy === 'numCards') return compareNumCards(direction);
  else if (sortBy === 'numSeasons') return compareNumSeasons(direction);
  else if (sortBy === 'alphabetical') return compareTitle(direction);
  else throw 'unknown sortBy value';
});

/**
 * The main list containing the data used to render the list on the home page. The list may contains a mixture of "dividers" objects and shows. The divider will be rendered as divider components, displaying some text. The shows are rendered as show components.
 */
export const mainList = derived([sortStates, sortFn], ([sortStates, sortFn]) => {
  const { sortBy, groupByType } = sortStates;
  const result = [];

  if (!groupByType) {
    if (sortBy !== 'numSeasons') {
      // ignore all movies if sort by numSeasons
      result.push(...movies);
    }
    result.push(...liveActionTvSeries);
    result.push(...animatedTvSeries);
    return result.sort(sortFn);
  } else {
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
  }
});

export const openDrawers = writable(new Set<Key>());
