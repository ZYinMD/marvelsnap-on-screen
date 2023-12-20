<script lang="ts">
  import type { CardId } from '../MainList/buildingBlocks';
  import { computeList } from './computeList';
  import Entry from '../MainList/Entry/Show.svelte';
  export let cardId: CardId;
  $: listUnderCard = computeList(cardId);
</script>

<div class="component">
  {#each listUnderCard as entry (entry.key)}
    {#if entry.type === 'divider'}
      <div class="divider"><div class="text">{entry.title}:</div></div>
    {:else}
      <Entry showData={entry} />
    {/if}
  {/each}
</div>

<style>
  .component {
    position: relative;
    padding: 0px 5px;
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
</style>
