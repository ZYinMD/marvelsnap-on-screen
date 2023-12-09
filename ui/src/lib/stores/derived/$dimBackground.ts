import { derived } from 'svelte/store';
import { filter, sort } from '../writables/$primary';

export const dimBackground = derived([sort, filter], ([sort, filter]) => {
  const aPanelIsOpen = sort.isPanelOpen || filter.isPanelOpen;
  return aPanelIsOpen;
});
