// See https://kit.svelte.dev/docs/types#app

import type { CardId } from './lib/MainList/buildingBlocks';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface PageState {
      cardId?: CardId;
    }
  }
}

export {};
