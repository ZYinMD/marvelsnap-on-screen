<script lang="ts">
  import Chevron from '../../Icons/Chevron.svelte';
  import { drawers } from '../../stores/writables/$primary';
  import type { Key, Show } from '../buildingBlocks';
  import Drawer from './Drawer.svelte';
  import MovieText from './MovieText.svelte';
  import TvText from './TvText.svelte';
  export let showData; // don't add a type here, because typescript is stupid
  export let underBigCard = false; // if the show (and drawer) is rendered under a big card, set it to true
  const { type, title, year, numSeasons, numEpisodes, wikipedia } = showData as Show;
  const key = showData.key as Key;
  $: isOpen = underBigCard ? $drawers.underBigCard.has(key) : $drawers.mainList.has(key);
</script>

<!-- @component one item in the list -->
<div class={`component ${type}`}>
  <div
    class="clickable-row"
    class:isOpen
    on:click={() => {
      drawers.toggle(underBigCard ? 'underBigCard' : 'mainList', key);
    }}
  >
    <Chevron {isOpen} />
    {#if type === 'movie'}
      <MovieText {year} {title} {wikipedia} {isOpen} />
    {:else}
      <TvText {year} {title} {numSeasons} {numEpisodes} {wikipedia} {isOpen} />
    {/if}
  </div>
  {#if isOpen}
    <Drawer {key} {underBigCard} />
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
  .component:hover {
    box-shadow: 0px 0px 3.5px #fff9;
  }
  .component:active {
    box-shadow: none;
  }
  .component {
    margin-bottom: 10px;
  }
  .component.movie {
    border: 1px var(--movie-entry-border) solid;
  }
  .component.live-action-tv-series {
    border: 1px var(--live-action-tv-entry-border) solid;
  }
  .component.animated-tv-series {
    border: 1px var(--animated-tv-entry-border) solid;
  }
</style>
