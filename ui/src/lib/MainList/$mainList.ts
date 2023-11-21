import { derived, writable } from 'svelte/store';
import { sortStates } from '../Sort/$sortStates';
import { allTitles } from '../facts/allTitles';
import type { Key } from '../facts/map';
import { sortFn } from './sortFn';

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
const allShows = [...movies, ...liveActionTvSeries, ...animatedTvSeries];

export type Show = (typeof allShows)[number];

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
