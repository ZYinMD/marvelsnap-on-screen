<script lang="ts">
  import { slide } from 'svelte/transition';
  import { map } from '../../facts/map';
  import { filter } from '../../stores/writables/$primary';
  import type { Key } from '../buildingBlocks';
  import Card from './Card.svelte';
  export let key: Key;
  export let underBigCard = false; // true if rendered under a big card
  const major = map[key].major;
  const minor = map[key].minor;
</script>

<!-- @component the expandable drawer that contains cards -->
<div class="component" transition:slide={{ duration: 100 }}>
  <!-- <div class="component" transition:slide={{ duration: 100 }}> -->
  {#each major as cardName (cardName)}
    <Card {cardName} {underBigCard} />
  {/each}
  {#if $filter.showMinorCharacters}
    {#each minor as cardName (cardName)}
      <Card {cardName} minor={true} />
    {/each}
  {/if}
  {#if major.size + minor.size === 0}
    <div class="none"><div>none</div></div>
  {/if}
</div>

<style>
  .component {
    --good-width: min(30vw, 130px);
    grid-area: drawer;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--good-width));
    justify-content: center;
    padding-bottom: 12px;
  }
  .none > div {
    font-size: 25px;
    opacity: 0.45;
    display: grid;
    place-items: center;
    margin-bottom: 10px;
  }
</style>
