<script lang="ts">
  import type { mainList } from './$mainList';
  type Entry = (typeof $mainList)[number];
  export let entry: Entry;
  // @ts-expect-error: I know what I'm doing'
  const { type, title, year, numSeasons, numEpisodes } = entry;
</script>

<!-- @component the clickable movie title (or a divider) -->
<div class="container">
  {#if type === 'divider'}
    <div class="divider">{title}</div>
  {:else if type === 'movie'}
    <div class="movie">{title}</div>
  {:else}
    <div class="tv-series">
      <div class="title">{title}</div>
      <div class="subtitle">
        {year}, {numSeasons}
        {numSeasons > 1 ? 'seasons' : 'season'}, {numEpisodes} episodes
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    --divider-height: 50px;
    --movie-height: 40px;
    --tv-series-height: 50px;
    --padding-left: 10px;
  }
  .divider {
    height: var(--divider-height);
    font-size: 20px;
    background-color: #333;
    padding-left: var(--padding-left);
  }
  .movie {
    border: 1px grey solid;
    height: var(--movie-height);
    padding-left: var(--padding-left);
  }
  .tv-series {
    height: var(--tv-series-height);
    margin: 10px 0;
    padding-left: var(--padding-left);
    display: grid;
    grid:
      'title' 27px
      'subtitle' 18px
      /
      auto;
    align-items: end;

    box-shadow: inset 0 0 3px pink;
    background-image: radial-gradient(#4444, transparent);
  }
  .tv-series .title {
    font-size: 17px;
  }
  .tv-series .subtitle {
    font-size: 12px;
    opacity: 0.6;
  }
</style>
