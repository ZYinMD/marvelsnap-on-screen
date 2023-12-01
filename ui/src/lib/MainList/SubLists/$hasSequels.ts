import { derived } from 'svelte/store';
import { AllShows, type Entry } from '../buildingBlocks';
import { sortFn } from '../sortFn';

/**
 * A derived store that returns all shows to be displayed when the label "has sequels" is selected.
 * It's a very special filter. 1. it has many hardcoded dividers, 2. we don't care about the search box, all dividers and all sequels should be shown, even if they don't match the search term.
 */
export const hasSequels = derived([sortFn], ([sortFn]) => {
  const result: Entry[] = [];
  result.push({
    type: 'divider',
    title: 'Spider-Verse',
    key: 'Spider-Verse',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'spider-verse')).sort(sortFn));
  result.push({
    type: 'divider',
    title: 'Venom',
    key: 'Venom',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'venom')).sort(sortFn));
  result.push({
    type: 'divider',
    title: 'Deadpool',
    key: 'Deadpool',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'deadpool')).sort(sortFn));
  result.push({
    type: 'divider',
    title: 'Amazing Spiderman',
    key: 'Amazing Spiderman',
  });
  result.push(
    ...AllShows.filter((i) => i.label.find((l) => l === 'amazing-spiderman')).sort(sortFn),
  );

  result.push({
    type: 'divider',
    title: 'Sony Ghost Rider',
    key: 'Sony Ghost Rider',
  });
  result.push(
    ...AllShows.filter((i) => i.label.find((l) => l === 'sony-ghost-rider')).sort(sortFn),
  );

  result.push({
    type: 'divider',
    title: 'Fox Fantastic Four',
    key: 'Fox Fantastic Four',
  });
  result.push(
    ...AllShows.filter((i) => i.label.find((l) => l === 'fox-fantastic-four')).sort(sortFn),
  );

  result.push({
    type: 'divider',
    title: 'Fox Daredevil',
    key: 'Fox Daredevil',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'fox-daredevil')).sort(sortFn));

  result.push({
    type: 'divider',
    title: 'Tobey Spiderman',
    key: 'Tobey Spiderman',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'tobey-spiderman')).sort(sortFn));

  result.push({
    type: 'divider',
    title: 'Blade',
    key: 'Blade',
  });
  result.push(...AllShows.filter((i) => i.label.find((l) => l === 'blade')).sort(sortFn));

  return result;
});
