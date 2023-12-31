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
