<script lang="ts">
  import { openedDrawers } from '../$mainList';
  import type { Key } from '../../facts/map';
  import Chevron from '../../Icons/Chevron.svelte';
  import type { Show } from '../buildingBlocks';
  import Drawer from './Drawer.svelte';
  import MovieText from './MovieText.svelte';
  import TvText from './TvText.svelte';
  export let showData: Show;
  // @ts-expect-error: I know what I'm doing
  const { type, title, year, numSeasons, numEpisodes } = showData;
  const key = showData.key as Key;
  function toggleDrawer() {
    openedDrawers.update((prev) => {
      if (prev.has(key)) prev.delete(key);
      else prev.add(key);
      return prev;
    });
  }
  $: isOpen = $openedDrawers.has(key);
</script>

<!-- @component one item in the list -->
<div class={`container ${type}`}>
  <div class="clickable-row" on:click={toggleDrawer}>
    <Chevron {isOpen} />
    {#if type === 'movie'}
      <MovieText {year} {title} />
    {:else}
      <TvText {year} {title} {numSeasons} {numEpisodes} />
    {/if}
  </div>
  {#if isOpen}
    <Drawer {key} />
  {/if}
</div>

<style>
  .clickable-row {
    cursor: pointer;
    display: grid;
    grid:
      'chevron text' auto
      /
      30px auto;
  }
  .container {
    margin: 10px 0;
  }
  .container.movie {
    border: 1px Thistle solid;
  }
  .container.live-action-tv-series {
    border: 1px SkyBlue solid;
    /* box-shadow:
      inset 0 0 5px Thistle,
      0 0 3px Thistle; */
  }
  .container.animated-tv-series {
    border: 1px PaleGreen solid;
  }
</style>
