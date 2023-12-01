import { writable } from 'svelte/store';

export const sortStates = writable({
  isPanelOpen: false,
  sortDescending: true,
  sortBy: 'year' as 'year' | 'numCards' | 'numSeasons' | 'alphabetical',
  separateMoviesAndTv: true,
});
