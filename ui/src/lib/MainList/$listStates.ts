import { derived, writable } from 'svelte/store';
import { allTitles } from '../facts/allTitles';
import type { Key } from '../facts/map';
import { sortStates } from '../Sort/$sortStates';

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

const compareYear = (descending: boolean) => (a: { year: string }, b: { year: string }) => {
  let result = a.year > b.year;
  if (descending) result = !result;
  return result ? 1 : -1;
};
/**
 * The main list containing the data used to render the list on the home page. The list contains a mixture of 3 possible "dividers" objects and all the shows. The divider will be rendered as divider components, shows rendered as show components.
 * It's a derived store, will change its values based on the current sort and filter.
 */
export const mainList = derived(sortStates, (sortStates) => {
  const { sortDescending: direction, sortBy, groupByType } = sortStates;
  const result = [];
  {
    result.push(dividerMovies);
    result.push(...movies.sort(compareYear(direction)));
  }
  {
    result.push(dividerLiveActionTvSeries);
    result.push(...liveActionTvSeries.sort(compareYear(direction)));
  }
  {
    result.push(dividerAnimatedTvSeries);
    result.push(...animatedTvSeries.sort(compareYear(direction)));
  }
  return result;
});

export const openDrawers = writable(new Set<Key>());
