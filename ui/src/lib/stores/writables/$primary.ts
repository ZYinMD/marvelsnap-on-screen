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

export const openedDrawers = writable(new Set<Key>());

export const tooltip = writable(
  '' as '' | 'mcu' | 'x-men' | 'ssu' | 'netflix' | 'sequel' | 'show-minor-chars',
);

export const paramNoLongerRelevant = writable(false);
