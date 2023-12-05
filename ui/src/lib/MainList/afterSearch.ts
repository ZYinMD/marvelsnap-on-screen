import { derived } from 'svelte/store';
import { filter } from '../Filter/$filterStates';
import { map } from '../facts/map';
import { AllShows, type Show } from './buildingBlocks';

/**
 * given the "year|title" of a show, all cards it has, and single search term, determine whether a show is considered a match
 * @param yearAndTitle can just pass in the "key" of a show because the key is "year|title"
 * @param cards all cards a show has
 * @param searchTerm must be already lowercased
 */
export function match(yearAndTitle: string, cards: string[], searchTerm: string) {
  if (yearAndTitle.toLowerCase().includes(searchTerm)) return true;
  // const cards = Array.from(map[show.key].major).concat(Array.from(map[show.key].minor));
  if (cards.some((card) => card.toLowerCase().includes(searchTerm))) return true;
  return false;
}

/**
 * Given a show and an array of search terms, whether the show is considered a match
 * @param searchString as user put into the search box, can include spaces, but must be already lowercased
 */
export function matchAll(show: Show, searchString: string) {
  const searchTerms = searchString.split(' ');
  const yearAndTitle = show.key;
  const cards = Array.from(map[show.key].major).concat(Array.from(map[show.key].minor));
  return searchTerms.every((searchTerm) => match(yearAndTitle, cards, searchTerm));
}

export const afterSearch = derived([filter], ([filterStates]) => {
  if (!filterStates.searching) return AllShows;
  return AllShows.filter((show) => matchAll(show, filterStates.searching.toLowerCase()));
});

afterSearch.subscribe((value) => console.log(value));
