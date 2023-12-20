import {
  allAnimatedTVs,
  allLiveActionTVs,
  allMovies,
  type CardId,
  type Entry,
} from '../MainList/buildingBlocks';
import { allCardIds } from '../facts/allCardIds';
import { map } from '../facts/map';

export function computeList(cardId: CardId) {
  const result: Entry[] = [];
  const cardName = allCardIds[cardId];
  const movies = allMovies.filter((i) => {
    return map[i.key].major.has(cardName) || map[i.key].minor.has(cardName);
  });
  if (movies.length > 0) {
    result.push({ type: 'divider', title: 'Appeared in movies', key: 'movies' });
    result.push(...movies);
  }
  const liveActionTVs = allLiveActionTVs.filter((i) => {
    return map[i.key].major.has(cardName) || map[i.key].minor.has(cardName);
  });
  if (liveActionTVs.length > 0) {
    result.push({
      type: 'divider',
      title: 'In live Action TV series',
      key: 'Live Action TV series',
    });
    result.push(...liveActionTVs);
  }
  const animatedTVs = allAnimatedTVs.filter((i) => {
    return map[i.key].major.has(cardName) || map[i.key].minor.has(cardName);
  });
  if (animatedTVs.length > 0) {
    result.push({ type: 'divider', title: 'In animated TV series', key: 'Animated TV series' });
    result.push(...animatedTVs);
  }
  return result;
}
