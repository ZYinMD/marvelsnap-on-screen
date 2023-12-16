import { derived } from 'svelte/store';
import { animatedTv } from './subLists/$animated-tv';
import { liveActionTv } from './subLists/$live-action-tv';
import { mixed } from './subLists/$mixed';
import { movies } from './subLists/$movies';

/**
 * The main list containing the data used to render the list on the home page. The list may contains a mixture of "dividers" objects and shows. The divider will be rendered as divider components, displaying some text. The shows are rendered as show components.
 */
export const mainList = derived(
  [movies, liveActionTv, animatedTv, mixed],
  ([movies, liveActionTv, animatedTv, mixed]) => {
    return [...movies, ...liveActionTv, ...animatedTv, ...mixed];
  },
);
