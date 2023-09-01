<script lang="ts">
  import { openDrawers, type mainList } from '../$listStates';
  import type { Key } from '../../facts/map';
  import Chevron from '../../Icons/Chevron.svelte';
  import Drawer from './Drawer.svelte';
  import MovieText from './MovieText.svelte';
  import TvText from './TvText.svelte';
  export let entry: (typeof $mainList)[number];
  // @ts-expect-error: I know what I'm doing'
  const { type, title, year, numSeasons, numEpisodes } = entry;
  const key = entry.key as Key;
  function toggleDrawer() {
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
