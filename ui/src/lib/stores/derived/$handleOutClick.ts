import { derived, type Readable } from 'svelte/store';
import { filter, sort, tooltip } from '../writables/$primary';

/**
 * a derived store that returns a function that closes the open panel / modal / tooltip (basically anything that uses the outClick listener)
 * Originally I simply instructed the components that have an outClick listener to close itself on outClick, but had an issue that when multiple modal / panel / tooltip are open, they'll all close on one click. I want each click to only close on thing, so I made this function to centralized the logic.
 * Ideally, this shouldn't be a derived store. It should simply be a function, which reads all the current states of different other stores, and decide which component should be closed next. However, there's no easy performant way to read the current state of a store in svelte (how ridiculous is that), so I use the derived store. How in svelte5 this is resolved.
 */
export const handleOutClick: Readable<(e: CustomEvent<any>) => void> = derived(
  [sort, filter, tooltip],
  ([sortStates, filterStates, tooltipState]) => {
    if (tooltipState) {
      return () => tooltip.set('');
    }
    if (sortStates.isPanelOpen) {
      return () => sort.update((prev) => ({ ...prev, isPanelOpen: false }));
    }
    if (filterStates.isPanelOpen) {
      return () => filter.update((prev) => ({ ...prev, isPanelOpen: false }));
    }
  },
);
