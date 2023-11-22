import { derived, writable } from 'svelte/store';
import { sortStates } from '../Sort/$sortStates';
import { allTitles } from '../facts/allTitles';
import type { Key } from '../facts/map';
import { sortFn } from './sortFn';

type Divider = {
  title: string;
  type: 'divider';
  key: string;
};
const dividerMovies = {
  title: 'Movies',
  type: 'divider',
  key: 'heading-movies',
} as const satisfies Divider;
const dividerLiveActionTvSeries = {
  title: 'Live Action TV Series',
  type: 'divider',
  key: 'heading-live-action-tv-series',
} as const satisfies Divider;
const dividerAnimatedTvSeries = {
  title: 'Animated TV Series',
  type: 'divider',
  key: 'heading-animated-tv-series',
} as const satisfies Divider;

const movies = Object.values(allTitles.movie);
const liveActionTvSeries = Object.values(allTitles['live-action-tv-series']);
const animatedTvSeries = Object.values(allTitles['animated-tv-series']);

export type Movie = (typeof movies)[number];
export type LiveActionTvSeries = (typeof liveActionTvSeries)[number];
export type AnimatedTvSeries = (typeof animatedTvSeries)[number];
export type TVSeries = LiveActionTvSeries | AnimatedTvSeries;
export type Show = Movie | LiveActionTvSeries | AnimatedTvSeries;
export type Entry = Show | Divider;

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
    // @ts-expect-error: I know what I'm doing
    return result.sort(sortFn);
  } else {
    if (sortBy !== 'numSeasons') {
      // ignore all movies if sort by numSeasons
      result.push(dividerMovies);
      // @ts-expect-error: I know what I'm doing
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
