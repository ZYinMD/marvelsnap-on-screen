import { derived, writable } from 'svelte/store';
import { allTitles } from '../facts/allTitles';
import type { Key } from '../facts/map';

/**
 * The main list containing the data used to render the list on the home page. The list contains a mixture of 3 possible "dividers" objects and all the shows. The divider will be rendered as divider components, shows rendered as show components.
 * It's a derived store, will change its values based on the current sort and  filter.
 */
export const mainList = derived([], () => {
  const result = [];
  result.push({
    title: 'Movies',
    type: 'divider',
    key: 'heading-movies',
  } as const);
  result.push(...Object.values(allTitles.movie));

  result.push({
    title: 'Live Action TV Series',
    type: 'divider',
    key: 'heading-live-action-tv-series',
  } as const);
  result.push(...Object.values(allTitles['live-action-tv-series']));

  result.push({
    title: 'Animated TV Series',
    type: 'divider',
    key: 'heading-animated-tv-series',
  } as const);
  result.push(...Object.values(allTitles['animated-tv-series']));
  return result;
});

export const openDrawers = writable(new Set<Key>());
