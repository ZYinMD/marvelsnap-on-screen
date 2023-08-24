import { derived } from 'svelte/store';
import { allTitles } from '../facts/allTitles';

export const mainList = derived([], () => {
  const result = [];
  result.push(...Object.values(allTitles.movies));
  return result;
});
