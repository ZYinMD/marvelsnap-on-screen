import { writable } from 'svelte/store';

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
