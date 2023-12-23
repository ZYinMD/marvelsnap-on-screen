import { derived } from 'svelte/store';
import { filter, sort, tooltip } from '../writables/$primary';
import { page } from '$app/stores';

/**
 * should most of the view be dimmed because something is showing in the foreground?
 */
export const dimBackground = derived(
  [sort, filter, tooltip, page],
  ([sort, filter, tooltip, page]) => {
    const aBigCardIsShowing = Boolean(page.state.cardId);
    if (aBigCardIsShowing) return true;
    const aPanelIsOpen = sort.isPanelOpen || filter.isPanelOpen;
    if (aPanelIsOpen) return true;
    const aTooltipIsOpen = Boolean(tooltip);
    if (aTooltipIsOpen) return true;
    return false;
  },
);
