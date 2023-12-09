import { derived } from 'svelte/store';
import { animatedTv } from '../stores/derived/subLists/$animated-tv';
import { liveActionTv } from '../stores/derived/subLists/$live-action-tv';
import { mixed } from '../stores/derived/subLists/$mixed';
import { movies } from '../stores/derived/subLists/$movies';

/**
 * The main list containing the data used to render the list on the home page. The list may contains a mixture of "dividers" objects and shows. The divider will be rendered as divider components, displaying some text. The shows are rendered as show components.
 */
export const mainList = derived(
  [movies, liveActionTv, animatedTv, mixed],
  ([movies, liveActionTv, animatedTv, mixed]) => {
    return [...movies, ...liveActionTv, ...animatedTv, ...mixed];
  },
);
