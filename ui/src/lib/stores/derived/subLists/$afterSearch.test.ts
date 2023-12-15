import { describe, expect, test } from 'vitest';
import { allTitles } from '../../../facts/allTitles';
import { matchAll } from './$afterSearch';

describe('test a movie', () => {
  const show = allTitles.movie['2005|Fantastic Four'];
  test.each([
    ['2', false],
    ['200', true],
    ['2', false],
    ['200', true],
    ['2005', true],
    ['2006', false],
    ['f', false],
    ['f f', false],
    ['fantastic', true],
    ['fantastic four', true],
    ['four thing', true],
    ['Five', false],
    ['Doom', true],
    ['boom', false],
    ['inv Woman', true],
    ['inv women', false],
  ])(`"2005|Fantastic Four" matches %s: %b)`, (searchString, expected) => {
    expect(matchAll(show, searchString.toLowerCase(), true)).toBe(expected);
  });
});

describe('test a tv show', () => {
  const show = allTitles['live-action-tv-series']['2021|WandaVision'];
  test.each([
    ['0', false],
    ['200', false],
    ['201', false],
    ['202', true],
    ['2021', true],
    ['wanda', true],
    ['vision', true],
    ['w v', false],
    ['scarlet', true],
    ['Scar wanda', true],
    ['scar spectrum', true],
    ['widow', false],
    ['scarlet spectrum', true], // if user searches for two cards, should match. This design actually leads to undesirable cases e.g. if user search "black wi" and if a movie has both "black bolt" and "scarlet witch", it will match, but that show doesn't have black widow which is probably what the user is looking for. However, I think it's fine.
  ])(`"2021|WandaVision" matches %s: %b)`, (searchString, expected) => {
    expect(matchAll(show, searchString.toLowerCase(), true)).toBe(expected);
  });
});

describe('test a tv show', () => {
  const show = allTitles['animated-tv-series']['1994–1998|Spider-Man: The Animated Series'];
  test.each([
    ['199', true],
    ['1998', true],
    ['1997', false],
    ['spider', true],
    ['Spider Man', true],
    ['goblin', true],
    ['goblin Animated', true],
    ['thor', false],
  ])(`"1994–1998|Spider-Man: The Animated Series" matches %s: %b)`, (searchString, expected) => {
    expect(matchAll(show, searchString.toLowerCase(), true)).toBe(expected);
  });
});

test('whether include minor chars', () => {
  const show = allTitles.movie['2017|Spider-Man: Homecoming'];
  expect(matchAll(show, 'rescue'.toLowerCase(), true)).toBe(true);
  expect(matchAll(show, 'rescue'.toLowerCase(), false)).toBe(false);
});
