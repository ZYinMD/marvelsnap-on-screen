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
 * I got this code from svelte doc, it works, but in reality, it's not that great, because say I have a modal and I want outClicks to close the modal - it works, but if the outClick lands on a button in the background, the button click will register too. This can be solved by adding a stopPropagation() in the end (I already did), but the hover css of background elements still works, e.g. if the button changes color on hover, it still does, even though be click will be stopped by stopPropagation().
 * So, in real world, I still need to add a backdrop to the modal to block the background elements. Therefore I might as well listen for clicks on the backdrop and close the modal. Rather than using this action, which is harder to read.
 * Another issue is when there are multiple modals open, one click will trigger outClick for all of them. Even if I come up with a way to solve this, a click inside one modal (which shouldn't close anything) may count as outClick for another modal (which closes the other modal). It's a mess.
 * The backdrop method and clean and easy. If I have other issues, maybe try a headless modal library for svelte.
 * Eventually, I implemented outClick with the backdrop method for most of my modals, and only left one modal using this action, just in order to keep it a reference for future use. The most valuable thing is this comment section.
 */
export const outClickListener: OutClickListener = function (node) {
  const handleClick = (event: MouseEvent) => {
    if (node === event.target) return; // clicked on itself
    if (node.contains(event.target as Node)) return; // clicked inside
    node.dispatchEvent(new CustomEvent('outClick')); // now must be outside. Both node node.dispatchEvent() and new CustomEvent() are native browser APIs. They can be used to crate an event with a custom name. The "createEventDispatcher" util from svelte actually uses this under the hood
    event.stopPropagation();
  };
  document.addEventListener('click', handleClick, { capture: true });
  return {
    destroy() {
      document.removeEventListener('click', handleClick, { capture: true });
    },
  };
};
