import { writable } from 'svelte/store';

export const filterStates = writable({
  isPanelOpen: false,
  searching: '',
});
