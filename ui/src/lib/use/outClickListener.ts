import type { Action } from 'svelte/action';

type OutClickListener = Action<
  HTMLElement,
  undefined,
  { 'on:outClick'?: (e: CustomEvent) => void }
>;
/**
 * a svelte action to be used with "use:".
 * The node will be passed into this function on mount.
 * On mount, add click listener to the whole document, if any click is captured and is not inside this node, fire custom event "outClick".
 */
export const outClickListener: OutClickListener = function (node) {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
      node.dispatchEvent(new CustomEvent('outClick')); // both node node.dispatchEvent() and new CustomEvent() are native browser APIs. They can be used to crate an event with a custom name. The "createEventDispatcher" util from svelte actually uses this under the hood
    }
  };
  document.addEventListener('click', handleClick, { capture: true });
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
};
