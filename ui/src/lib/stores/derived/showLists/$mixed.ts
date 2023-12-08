import { derived } from 'svelte/store';
import { afterSearch } from '../../../MainList/afterSearch';
import type { Entry } from '../../../MainList/buildingBlocks';
import { sortFn } from '../../../MainList/sortFn';
import { filter, sort } from '../../writables/$primary';
import { hasSequels } from './$hasSequels';

/**
 * A derived store that returns all shows to be displayed when movies and TVs aren't separated.
 * First, if the active label is "sequel", let the "hasSequels" store take over.
 * We start with "afterSearch", which is all the shows excluding the ones that aren't a match to the current search terms in the search box. If searchbox is empty, this will be all the shows
 * Then if there is an active label in the filter panel, we apply the filters.
 * Finally we sort the result.
 */
export const mixed = derived(
  [sort, filter, afterSearch, sortFn, hasSequels],
  ([sortStates, filterStates, afterSearch, sortFn, hasSequels]) => {
    const { separateMoviesAndTv } = sortStates;
    const { activeLabel } = filterStates;
    if (activeLabel === 'sequel') return hasSequels;
    if (separateMoviesAndTv) return [] as Entry[];
    let result = afterSearch;
    if (activeLabel === 'all-tv') {
      result = result.filter((i) => i.type !== 'movie');
    } else if (activeLabel === 'mcu') {
      result = result.filter((i) => i.label.find((l) => l === 'mcu'));
    } else if (activeLabel === 'ssu') {
      result = result.filter((i) => i.label.find((l) => l === 'ssu'));
    } else if (activeLabel === 'netflix') {
      result = result.filter((i) => i.label.find((l) => l === 'netflix'));
    } else if (activeLabel === 'x-men') {
      result = result.filter((i) => i.label.find((l) => l === 'fox-x-men'));
    } else if (activeLabel === 'anime') {
      result = result.filter((i) => i.label.find((l) => l === 'anime'));
    } else if (activeLabel === 'all-animated') {
      result = result.filter((i) => i.type === 'animated-tv-series');
      result = result.concat(afterSearch.filter((i) => i.label.find((l) => l === 'animated'))); // all animated tv series plus the Spider Verse movies
    }

    result = result.sort(sortFn);
    return result as Entry[];
  },
);
