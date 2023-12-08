import { derived } from 'svelte/store';
import { afterSearch } from '../../../MainList/afterSearch';
import type { Entry } from '../../../MainList/buildingBlocks';
import { sortFn } from '../../../MainList/sortFn';
import { filter, sort } from '../../writables/$primary';

/**
 * A derived store that returns all shows to be displayed under the "Live Action TV Series" divider
 * First, on some occasions, no shows should be displayed because everything should be displayed under "mixed", in these cases, return []
 * Then we start with "afterSearch", which is all the shows excluding the ones that aren't a match to the current search terms in the search box. If searchbox is empty, this will be all the shows
 * Then we filter to get all the shows that are live action tv series
 * Then, if there is an active label in the filter panel, we apply the filters.
 * Finally, we sort the result.
 * In the end, we prepend the "live action tv series" divider.
 */
export const liveActionTv = derived(
  [sort, filter, afterSearch, sortFn],
  ([sortStates, filterStates, afterSearch, sortFn]) => {
    const { separateMoviesAndTv } = sortStates;
    const { activeLabel } = filterStates;
    if (
      !separateMoviesAndTv ||
      activeLabel === 'anime' ||
      activeLabel === 'sequel' ||
      activeLabel === 'all-animated'
    ) {
      return [] as Entry[];
    }

    const liveActionTvAfterSearch = afterSearch.filter((i) => i.type === 'live-action-tv-series');
    let result = liveActionTvAfterSearch;
    if (activeLabel === 'netflix') {
      return result.filter((i) => i.label.find((l) => l === 'netflix'));
    } else if (activeLabel === 'mcu') {
      result = result.filter((i) => i.label.find((l) => l === 'mcu'));
    } else if (activeLabel === 'ssu') {
      result = result.filter((i) => i.label.find((l) => l === 'ssu'));
    } else if (activeLabel === 'x-men') {
      result = result.filter((i) => i.label.find((l) => l === 'fox-x-men'));
    } else if (activeLabel === 'all-tv') {
      // do nothing
    }
    result = result.sort(sortFn);
    (result as Entry[]).unshift({
      type: 'divider',
      title: 'Live Action TV Series',
      key: 'Live Action TV Series',
    });
    return result;
  },
);
