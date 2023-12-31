import { derived } from 'svelte/store';
import { filter, sort, tooltip } from '../writables/$primary';
import { currentBigCard } from './currentBigCard';

/**
 * should most of the view be dimmed because something is showing in the foreground?
 */
export const shouldDimBackground = derived(
  [sort, filter, tooltip, currentBigCard],
  ([sort, filter, tooltip, currentBigCard]) => {
    if (currentBigCard) return true;
    const aPanelIsOpen = sort.isPanelOpen || filter.isPanelOpen;
    if (aPanelIsOpen) return true;
    const aTooltipIsOpen = Boolean(tooltip);
    if (aTooltipIsOpen) return true;
    return false;
  },
);
