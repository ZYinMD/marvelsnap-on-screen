/// <reference types="@sveltejs/kit" />
import { googleFontsCache, imageCache } from 'workbox-recipes';

googleFontsCache();

imageCache({ maxEntries: 300 });
