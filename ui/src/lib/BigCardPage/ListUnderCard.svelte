<script lang="ts">
  import Entry from '../MainList/Entry/Show.svelte';
  import type { CardId } from '../MainList/buildingBlocks';
  import { computeList } from './computeList';
  export let cardId: CardId;
  $: listUnderCard = computeList(cardId);
</script>

<div class="component">
  {#each listUnderCard as entry (entry.key)}
    {#if entry.type === 'divider'}
      <div class="divider"><div class="text">{entry.title}:</div></div>
    {:else}
      <Entry showData={entry} underBigCard />
    {/if}
  {/each}
</div>

<style>
  .component {
    position: relative;
    padding: 0px 6px;
  }
  .divider {
    height: 60px;
    font-size: 30px;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 0 0 8px;
    transform: skew(-3deg);
  }
  /* make the top stop propagation zone more intuitive, see BigCardPage.svelte */
  .divider:first-child {
    height: 40px;
  }
</style>
