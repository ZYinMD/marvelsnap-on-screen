import { derived, writable } from 'svelte/store';
import { animatedTv } from './SubLists/$animated-tv';
import { liveActionTv } from './SubLists/$live-action-tv';
import { mixed } from './SubLists/$mixed';
import { movies } from './SubLists/$movies';
import type { Key } from './buildingBlocks';

/**
 * The main list containing the data used to render the list on the home page. The list may contains a mixture of "dividers" objects and shows. The divider will be rendered as divider components, displaying some text. The shows are rendered as show components.
 */
export const mainList = derived(
  [movies, liveActionTv, animatedTv, mixed],
  ([movies, liveActionTv, animatedTv, mixed]) => {
    return [...movies, ...liveActionTv, ...animatedTv, ...mixed];
  },
);

export const openedDrawers = writable(new Set<Key>());
