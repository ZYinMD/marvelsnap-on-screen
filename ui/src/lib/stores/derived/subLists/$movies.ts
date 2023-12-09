import { derived } from 'svelte/store';
import { sortFn } from '../$sortFn';
import type { Entry, Movie } from '../../../MainList/buildingBlocks';
import { filter, sort } from '../../writables/$primary';
import { afterSearch } from './$afterSearch';

/**
 * A derived store that returns all movies to be displayed under the "Movies" divider
 * First, on some occasions, no movies should be displayed because everything should be displayed under "mixed", in these cases, return []
 * Then we start with "afterSearch", which is all the shows excluding the ones that aren't a match to the current search terms in the search box. If searchbox is empty, this will be all the shows
 * Then we filter to get all the shows that are movies
 * Then if there is an active label in the filter panel, we apply the filters.
 * Finally we sort the result.
 * In the end, we prepend the "Movies" divider.
 */
export const movies = derived(
  [sort, filter, afterSearch, sortFn],
  ([sortStates, filterStates, afterSearch, sortFn]) => {
    const { separateMoviesAndTv } = sortStates;
    const { activeLabel } = filterStates;

    if (
      !separateMoviesAndTv ||
      activeLabel === 'netflix' ||
      activeLabel === 'sequel' ||
      activeLabel === 'all-tv' ||
      activeLabel === 'anime'
    ) {
      return [] as Entry[];
    }

    const moviesAfterSearch = afterSearch.filter((i) => i.type === 'movie') as Movie[];
    let result = moviesAfterSearch;
    if (activeLabel === 'mcu') {
      // movies = afterSearch.filter((i) => i.label.find((l) => l === 'mcu')); // use array.prototype.find(), not array.prototype.includes(), because typescript is stupid. See https://stackoverflow.com/questions/77527133/typescript-as-const-unexpectedly-takes-intersection-of-arrays
      result = result.filter((i) => i.label.find((l) => l === 'mcu')); // use array.prototype.find(), not array.prototype.includes(), because typescript is stupid. See https://stackoverflow.com/questions/77527133/typescript-as-const-unexpectedly-takes-intersection-of-arrays
    } else if (activeLabel === 'ssu') {
      result = result.filter((i) => i.label.find((l) => l === 'ssu'));
    } else if (activeLabel === 'x-men') {
      result = result.filter((i) => i.label.find((l) => l === 'fox-x-men'));
    } else if (activeLabel === 'all-animated') {
      result = result.filter((i) => i.label.find((l) => l === 'animated'));
    }
    result = result.sort(sortFn);
    if (result.length > 0) {
      (result as Entry[]).unshift({
        type: 'divider',
        title: 'Movies',
        key: 'Movies',
      });
    }
    return result;
  },
);
