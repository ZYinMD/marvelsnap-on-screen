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
 * This was implemented before I added a backdrop to blur everything behind all modals. Now I think about it, I could have simply added the click listener onto the backdrop, which would have saved me the effort of making this outClickListener, but the outClickListener still works as intended after the backdrop was added, so I'll keep using it.
 */
export const outClickListener: OutClickListener = function (node) {
  const handleClick = (event: MouseEvent) => {
    if (node === event.target) return; // clicked on itself
    if (node.contains(event.target as Node)) return; // clicked inside
    node.dispatchEvent(new CustomEvent('outClick')); // now must be outside. Both node node.dispatchEvent() and new CustomEvent() are native browser APIs. They can be used to crate an event with a custom name. The "createEventDispatcher" util from svelte actually uses this under the hood
  };
  document.addEventListener('click', handleClick, { capture: true });
  return {
    destroy() {
      document.removeEventListener('click', handleClick, { capture: true });
    },
  };
};
