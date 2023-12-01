import { allTitles } from '../facts/allTitles';

export const allMovies = Object.values(allTitles.movie);
export const allLiveActionTvSeries = Object.values(allTitles['live-action-tv-series']);
export const allAnimatedTvSeries = Object.values(allTitles['animated-tv-series']);
export const AllShows = [...allMovies, ...allLiveActionTvSeries, ...allAnimatedTvSeries];

export type Movie = (typeof allMovies)[number];
export type LiveActionTvSeries = (typeof allLiveActionTvSeries)[number];
export type AnimatedTvSeries = (typeof allAnimatedTvSeries)[number];
export type TVSeries = LiveActionTvSeries | AnimatedTvSeries;
export type Show = Movie | LiveActionTvSeries | AnimatedTvSeries;

export type Divider = {
  title: string;
  type: 'divider';
  key: string;
};
export type Entry = Show | Divider;

/**
 * The keys of the big object called "map" from map.ts, which is the main data source of this app. The key looks like a year|title of a show, e.g.: "2011|Captain America: The First Avenger"
 */
export type Key =
  | keyof (typeof allTitles)['movie']
  | keyof (typeof allTitles)['live-action-tv-series']
  | keyof (typeof allTitles)['animated-tv-series'];

// type Common = {
//   year: string;
//   title: string;
//   wikipedia: string;
//   label: readonly string[];
//   key: string;
// };

// export type Movie = Common & {
//   type: 'movie';
// };
// export type LiveActionTvSeries = Common & {
//   type: 'live-action-tv-series';
//   numSeasons: number;
//   numEpisodes: number;
// };
// export type AnimatedTvSeries = Common & {
//   type: 'animated-tv-series';
//   numSeasons: number;
//   numEpisodes: number;
// };
