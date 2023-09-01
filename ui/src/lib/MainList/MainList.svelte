<script lang="ts">
  import { mainList } from './$listStates';
  import Entry from './Entry/Entry.svelte';
</script>

<!-- @component the list of all the shows the home page -->
{#each $mainList as entry (entry.key)}
  {#if entry.type === 'divider'}
    <div class="divider"><div class="text">{entry.title}:</div></div>
  {:else}
    <Entry {entry} />
  {/if}
{/each}

<style>
  .divider {
    height: 70px;
    font-size: 30px;
    display: flex;
    align-items: end;
    padding: 0 0 8px 10px;
    transform: skew(-3deg);
  }
</style>
