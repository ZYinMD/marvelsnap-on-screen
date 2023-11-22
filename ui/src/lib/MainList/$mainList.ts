import { derived, writable } from 'svelte/store';
import { sortStates } from '../Sort/$sortStates';
import type { Key } from '../facts/map';
import {
  allAnimatedTvSeries,
  allLiveActionTvSeries,
  allMovies,
  type Divider,
} from './buildingBlocks';
import { sortFn } from './sortFn';

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

/**
 * The main list containing the data used to render the list on the home page. The list may contains a mixture of "dividers" objects and shows. The divider will be rendered as divider components, displaying some text. The shows are rendered as show components.
 */
export const mainList = derived([sortStates, sortFn], ([sortStates, sortFn]) => {
  const { sortBy, groupByType } = sortStates;
  const result = [];

  if (!groupByType) {
    if (sortBy !== 'numSeasons') {
      // ignore all movies if sort by numSeasons
      result.push(...allMovies);
    }
    result.push(...allLiveActionTvSeries);
    result.push(...allAnimatedTvSeries);
    // @ts-expect-error: I know what I'm doing
    return result.sort(sortFn);
  } else {
    if (sortBy !== 'numSeasons') {
      // ignore all movies if sort by numSeasons
      result.push(dividerMovies);
      // @ts-expect-error: I know what I'm doing
      result.push(...allMovies.sort(sortFn));
    }
    result.push(dividerLiveActionTvSeries);
    result.push(...allLiveActionTvSeries.sort(sortFn));
    result.push(dividerAnimatedTvSeries);
    result.push(...allAnimatedTvSeries.sort(sortFn));
    return result;
  }
});

export const openDrawers = writable(new Set<Key>());
