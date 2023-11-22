import { allTitles } from '../facts/allTitles';

export type Divider = {
  title: string;
  type: 'divider';
  key: string;
};

export const allMovies = Object.values(allTitles.movie);
export const allLiveActionTvSeries = Object.values(allTitles['live-action-tv-series']);
export const allAnimatedTvSeries = Object.values(allTitles['animated-tv-series']);

export type Movie = (typeof allMovies)[number];
export type LiveActionTvSeries = (typeof allLiveActionTvSeries)[number];
export type AnimatedTvSeries = (typeof allAnimatedTvSeries)[number];
export type TVSeries = LiveActionTvSeries | AnimatedTvSeries;
export type Show = Movie | LiveActionTvSeries | AnimatedTvSeries;
export type Entry = Show | Divider;
