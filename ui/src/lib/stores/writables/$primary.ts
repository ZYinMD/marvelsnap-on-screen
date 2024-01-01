import { writable } from 'svelte/store';
import type { Key } from '../../MainList/buildingBlocks';

export const sort = writable({
  isPanelOpen: false,
  sortDescending: true,
  sortBy: 'year' as 'year' | 'numCards' | 'numSeasons' | 'alphabetical',
  separateMoviesAndTv: true,
});

export const filter = writable({
  isPanelOpen: false,
  searching: '',
  activeLabel: '' as
    | ''
    | 'mcu'
    | 'x-men'
    | 'ssu'
    | 'netflix'
    | 'sequel'
    | 'all-tv'
    | 'all-animated'
    | 'anime',
  showMinorCharacters: true,
});

export const tooltip = writable(
  '' as '' | 'mcu' | 'x-men' | 'ssu' | 'netflix' | 'sequel' | 'show-minor-chars',
);

export const paramNoLongerRelevant = writable(false);

/**
 * control the open and close of drawers ("drawer" is the container of cards under a show)
 */
export const drawers = (() => {
  const { subscribe, update } = writable({
    mainList: new Set<Key>(),
    underBigCard: new Set<Key>(),
  });
  function toggle(where: 'mainList' | 'underBigCard', key: Key) {
    update((prev) => {
      const opened = prev[where];
      if (opened.has(key)) opened.delete(key);
      else opened.add(key);
      return prev;
    });
  }
  function closeAll(where: 'mainList' | 'underBigCard') {
    update((prev) => {
      prev[where].clear();
      return prev;
    });
  }
  return { subscribe, toggle, closeAll };
})();

// ↓ below are subscriptions to stores that monitor for a change then trigger some side effects. I wanted to put them in a separate file, but that whole file gets tree-shaken off.

const prevs = {
  sortBy: 'year',
  separateMoviesAndTv: true,
};
sort.subscribe((next) => {
  if (next.sortBy !== prevs.sortBy || next.separateMoviesAndTv !== prevs.separateMoviesAndTv) {
    console.log('should close all drawers');
    drawers.closeAll('mainList');
  }
  prevs.sortBy = next.sortBy;
  prevs.separateMoviesAndTv = next.separateMoviesAndTv;
});
