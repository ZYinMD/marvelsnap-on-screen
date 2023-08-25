import { derived } from 'svelte/store';
import { allTitles } from '../facts/allTitles';

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
