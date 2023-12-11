import { derived } from 'svelte/store';
import { filter, sort, tooltip } from '../writables/$primary';

export const dimBackground = derived([sort, filter, tooltip], ([sort, filter, tooltip]) => {
  const aPanelIsOpen = sort.isPanelOpen || filter.isPanelOpen;
  const aTooltipIsOpen = Boolean(tooltip);
  return aPanelIsOpen || aTooltipIsOpen;
});
