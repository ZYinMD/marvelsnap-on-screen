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
</style>
