import type { CardId, CardName } from '../MainList/buildingBlocks';
import { allCards } from './allCards';

/**
 * When I manually create map.ts, I like to input the full name of cards, e.g. "Adam Warlock", so when rendering the drawers, cards need to be looked up by full names. However, the route value in url needs to be the card Id, e.g. "AdamWarlock", so there also need to be a way to reversely lookup the card's name by its Id.
 */
export const allCardIds = {} as Record<CardId, CardName>;

Object.values(allCards).forEach((i) => {
  const defId = i.defId as CardId;
  allCardIds[defId] = i.name as unknown as CardName;
});
