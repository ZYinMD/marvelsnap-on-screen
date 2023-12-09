import { derived } from 'svelte/store';
import { sortFn } from '../$sortFn';
import type { Entry } from '../../../MainList/buildingBlocks';
import { filter, sort } from '../../writables/$primary';
import { afterSearch } from './afterSearch';

/**
 * A derived store that returns all shows to be displayed under the "Animated TV Series" divider
 * First, on some occasions, no shows should be displayed because everything should be displayed under "mixed", in these cases, return []
 * Then we start with "afterSearch", which is all the shows excluding the ones that aren't a match to the current search terms in the search box. If searchbox is empty, this will be all the shows
 * Then we filter to get all the shows that are animated tv series
 * Then, if there is an active label in the filter panel, we apply the filters.
 * Finally, we sort the result.
 * In the end, we prepend the "animated tv series" divider.
 */
export const animatedTv = derived(
  [sort, filter, afterSearch, sortFn],
  ([sortStates, filterStates, afterSearch, sortFn]) => {
    const { separateMoviesAndTv } = sortStates;
    const { activeLabel } = filterStates;
    if (
      !separateMoviesAndTv ||
      activeLabel === 'netflix' ||
      activeLabel === 'mcu' ||
      activeLabel === 'ssu' ||
      activeLabel === 'x-men' ||
      activeLabel === 'sequel'
    ) {
      return [] as Entry[];
    }

    const animatedTvAfterSearch = afterSearch.filter((i) => i.type === 'animated-tv-series');
    let result = animatedTvAfterSearch;
    if (activeLabel === 'anime') {
      result = result.filter((i) => i.label.find((l) => l === 'anime'));
    } else if (activeLabel === 'all-tv') {
      // do nothing
    } else if (activeLabel === 'all-animated') {
      // do nothing
    }
    result = result.sort(sortFn);
    if (result.length > 0) {
      (result as Entry[]).unshift({
        type: 'divider',
        title: 'Animated TV Series',
        key: 'Animated TV Series',
      });
    }
    return result;
  },
);
