import { expect, test } from 'vitest';
import { allTitles } from '../../../facts/allTitles';
import { matchAll } from './$afterSearch';

test('match one show', () => {
  {
    const show = allTitles.movie['2005|Fantastic Four'];
    expect(matchAll(show, '2')).toBe(false);
    expect(matchAll(show, '200')).toBe(true);
    expect(matchAll(show, '2005')).toBe(true);
    expect(matchAll(show, '2006')).toBe(false);
    expect(matchAll(show, 'f')).toBe(false);
    expect(matchAll(show, 'f f')).toBe(false);
    expect(matchAll(show, 'fantastic')).toBe(true);
    expect(matchAll(show, 'fantastic four')).toBe(true);
    expect(matchAll(show, 'four thing')).toBe(true);
    expect(matchAll(show, 'five')).toBe(false);
    expect(matchAll(show, 'doom')).toBe(true);
    expect(matchAll(show, 'boom')).toBe(false);
    expect(matchAll(show, 'inv woman')).toBe(true);
    expect(matchAll(show, 'inv women')).toBe(false);
  }
  {
    const show = allTitles['live-action-tv-series']['2021|WandaVision'];
    expect(matchAll(show, '0')).toBe(false);
    expect(matchAll(show, '200')).toBe(false);
    expect(matchAll(show, '201')).toBe(false);
    expect(matchAll(show, '202')).toBe(true);
    expect(matchAll(show, '2021')).toBe(true);
    expect(matchAll(show, 'wanda')).toBe(true);
    expect(matchAll(show, 'vision')).toBe(true);
    expect(matchAll(show, 'w v')).toBe(false);
    expect(matchAll(show, 'scarlet')).toBe(true);
    expect(matchAll(show, 'scar wanda')).toBe(true);
    expect(matchAll(show, 'scar spectrum')).toBe(true);
    expect(matchAll(show, 'widow')).toBe(false);
    expect(matchAll(show, 'scarlet spectrum')).toBe(true); // if user searches for two cards, should match. This design actually leads to undesirable cases e.g. if user search "black wi" and if a movie has both "black bolt" and "scarlet witch", it will match, but that show doesn't have black widow which is probably what the user is looking for. However, I think it's fine.
  }
  {
    const show = allTitles['animated-tv-series']['1994–1998|Spider-Man: The Animated Series'];
    expect(matchAll(show, '199')).toBe(true);
    expect(matchAll(show, '1998')).toBe(true);
    expect(matchAll(show, '1997')).toBe(false);
    expect(matchAll(show, 'spider')).toBe(true);
    expect(matchAll(show, 'spider man')).toBe(true);
    expect(matchAll(show, 'goblin')).toBe(true);
    expect(matchAll(show, 'goblin animated')).toBe(true);
    expect(matchAll(show, 'thor')).toBe(false);
  }
});
