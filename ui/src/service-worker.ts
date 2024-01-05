/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

import { clientsClaim } from 'workbox-core';
import { googleFontsCache, imageCache } from 'workbox-recipes';

declare const self: ServiceWorkerGlobalScope;

googleFontsCache();
imageCache({ maxEntries: 300 });
clientsClaim(); // take control on the 1st visit, so images can start being cached
self.skipWaiting(); // activate new service worker immediately after install. This is not good if i have precache, but I don't have precache. (however, this is likely not actually useful for me either)
