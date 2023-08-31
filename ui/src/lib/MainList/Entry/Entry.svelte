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

<!-- @component one item in the list -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`container ${type}`} on:click={handleClick}>
  <Chevron {isOpen} />
  {#if type === 'movie'}
    <MovieRow {year} {title} />
  {:else}
    <TvText {year} {title} {numSeasons} {numEpisodes} />
  {/if}
</div>

<style>
  .container {
    margin: 10px 0;
    cursor: pointer;
    display: grid;
    align-items: center;
    grid:
      'chevron text' auto
      /
      30px auto;
  }
  .movie {
    height: 40px;
    border: 1px Thistle solid;
    /* box-shadow: inset 0 0 3px Thistle; */
  }
  .live-action-tv-series {
    height: 50px;
    border: 1px SkyBlue solid;
    /* box-shadow:
      inset 0 0 5px Thistle,
      0 0 3px Thistle; */
    /* background-image: radial-gradient(#4444, transparent); */
  }
  .animated-tv-series {
    height: 50px;
    border: 1px PaleGreen solid;
  }
</style>
