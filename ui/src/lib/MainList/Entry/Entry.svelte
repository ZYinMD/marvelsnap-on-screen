<script lang="ts">
  import { openDrawers, type mainList } from '../$listStates';
  import Chevron from './Chevron.svelte';
  type Entry = (typeof $mainList)[number];
  export let entry: Entry;
  // @ts-expect-error: I know what I'm doing'
  const { key, type, title, year, numSeasons, numEpisodes } = entry;
  function handleClick() {
    openDrawers.update((prev) => {
      if (prev.has(key)) prev.delete(key);
      else prev.add(key);
      return prev;
    });
  }
  $: isOpen = $openDrawers.has(key);
</script>

<!-- @component the clickable movie title (or a divider) -->
<div class="container">
  {#if type === 'movie'}
    <Chevron {isOpen} />
    <div class="movie" on:click={handleClick} tabindex="0" role="button" on:keydown={handleClick}>
      <div class="title">({year}) {title}</div>
    </div>
  {:else}
    <div
      class="tv-series"
      on:click={handleClick}
      tabindex="0"
      role="button"
      on:keydown={handleClick}
    >
      <Chevron {isOpen} />
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
    --movie-height: 40px;
    --tv-series-height: 50px;
    --padding-left: 10px;
    margin: 10px 0;
    opacity: 0.9;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  .movie {
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
      inset 0 0 5px Thistle,
      0 0 3px Thistle;
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
