import { writable } from 'svelte/store';

export const sortStates = writable({
  isPanelOpen: false,
  sortDescending: true,
  groupByType: true,
});
