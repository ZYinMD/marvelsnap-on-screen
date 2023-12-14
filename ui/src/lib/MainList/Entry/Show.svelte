<script lang="ts">
  import Chevron from '../../Icons/Chevron.svelte';
  import { openedDrawers } from '../../stores/writables/$primary';
  import type { Key, Show } from '../buildingBlocks';
  import Drawer from './Drawer.svelte';
  import MovieText from './MovieText.svelte';
  import TvText from './TvText.svelte';
  export let showData; // don't add a type here, because typescript is stupid

  const { type, title, year, numSeasons, numEpisodes, wikipedia } = showData as Show;
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
<div class={`component ${type}`}>
  <div class="clickable-row" on:click={toggleDrawer}>
    <Chevron {isOpen} />
    {#if type === 'movie'}
      <MovieText {year} {title} {wikipedia} {isOpen} />
    {:else}
      <TvText {year} {title} {numSeasons} {numEpisodes} {wikipedia} {isOpen} />
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
  .component {
    margin-bottom: 10px;
  }
  .component.movie {
    border: 1px Thistle solid;
  }
  .component.live-action-tv-series {
    border: 1px SkyBlue solid;
    /* box-shadow:
      inset 0 0 5px Thistle,
      0 0 3px Thistle; */
  }
  .component.animated-tv-series {
    border: 1px PaleGreen solid;
  }
</style>
