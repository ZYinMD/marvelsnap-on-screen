import { page } from '$app/stores';
import { derived } from 'svelte/store';
import type { CardId } from '../../MainList/buildingBlocks';
import { paramNoLongerRelevant } from '../writables/$primary';

/**
 * The current big card to be shown in the foreground.
 * First read comments in [cardId]/+page.svelte to understand the architect.
 * The value in page.state.cardId is set by pushState, which is called on click a small card, or when clicking the background behind a big hard to return to the main list.
 * The value in page.params.cardId is set by the param when user visits a /[cardId] route directly. It never changes afterwards, even after pushState(href). Since it doesn't change, the only time it's useful is on the first page load. After that, it's stale data.
 * I use a primary store called paramNoLongerRelevant to signal that the param data is already stale. After that, the currentBigCard is only determined by page.state.cardId, if it's empty, then no big card is shown.
 * I actually have tried to combine the two - in the onMount of /[cardId], I tried to pushState to make page.state.cardId match page.params.cardId, the goal is to only rely on page.state.cardId. But it doesn't work, got some error that I couldn't understand.
 */
export const currentBigCard = derived(
  [page, paramNoLongerRelevant],
  ([page, paramNoLongerRelevant]) => {
    if (paramNoLongerRelevant) return (page.state.cardId || '') as CardId;
    return (page.state.cardId || page.params.cardId || '') as CardId;
  },
);
