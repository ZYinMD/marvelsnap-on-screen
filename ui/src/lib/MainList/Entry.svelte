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
    <div class="divider"><div class="text">{title}:</div></div>
  {:else if type === 'movie'}
    <div class="movie"><div class="title">({year}) {title}</div></div>
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
    --divider-height: 70px;
    --movie-height: 40px;
    --tv-series-height: 50px;
    --padding-left: 10px;
    opacity: 0.9;
  }
  .divider {
    height: var(--divider-height);
    font-size: 30px;
    display: flex;
    align-items: end;
    padding-bottom: 10px;
  }
  .divider .text {
    transform: skew(-5deg);
  }
  .movie {
    margin: 10px 0;
    border: 1px grey solid;
    height: var(--movie-height);
    padding-left: var(--padding-left);
    display: grid;
    align-items: center;
    border: 1px Thistle solid;
    box-shadow: inset 0 0 3px Thistle;
  }
  .movie .title {
    transform: skew(-5deg);
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
    border: 1px Thistle solid;
    box-shadow:
      inset 0 0 9px Thistle,
      0 0 7px Thistle,
      0 0 3px Thistle,
      0 0 5px Thistle;
    /* background-image: radial-gradient(#4444, transparent); */
  }
  .tv-series .title {
    font-size: 17px;
    transform: skew(-5deg);
  }

  .tv-series .subtitle {
    font-size: 12px;
    opacity: 0.6;
    transform: skew(-5deg);
  }
</style>
