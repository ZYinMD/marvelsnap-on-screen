<script lang="ts">
  import { openDrawers, type mainList } from '../$listStates';
  import Chevron from './Chevron.svelte';
  import MovieRow from './MovieText.svelte';
  import TvText from './TvText.svelte';
  export let entry: (typeof $mainList)[number];
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
      <MovieRow {year} {title} />
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
      <TvText {year} {title} {numSeasons} {numEpisodes} />
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
  .tv-series {
    height: var(--tv-series-height);
    padding-left: var(--padding-left);
    border: 1px Thistle solid;
    box-shadow:
      inset 0 0 5px Thistle,
      0 0 3px Thistle;
    /* background-image: radial-gradient(#4444, transparent); */
  }
</style>
