<script lang="ts">
  import { mainList } from './$listStates';
  import Entry from './Entry/Entry.svelte';
</script>

<!-- @component the list of all the shows the home page -->
<div class="container">
  {#each $mainList as entry (entry.key)}
    {#if entry.type === 'divider'}
      <div class="divider"><div class="text">{entry.title}:</div></div>
    {:else}
      <Entry {entry} />
    {/if}
  {/each}
</div>

<style>
  .divider {
    height: 70px;
    font-size: 30px;
    display: flex;
    align-items: end;
    padding-bottom: 10px;
    transform: skew(-5deg);
  }
</style>
