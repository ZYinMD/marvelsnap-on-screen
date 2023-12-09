<script lang="ts">
  import { dimBackground } from '../stores/derived/$dimBackground';
  import { mainList } from './$mainList';
  import Entry from './Entry/Show.svelte';
</script>

<!-- @component the list of all the shows in the home page -->
<div class="container container-narrow" class:dim={$dimBackground}>
  {#each $mainList as entry (entry.key)}
    {#if entry.type === 'divider'}
      <div class="divider"><div class="text">{entry.title}:</div></div>
    {:else}
      <Entry showData={entry} />
    {/if}
  {/each}
</div>

<style>
  .container {
    position: relative;
    padding: 0 5px;
  }
  .dim {
    filter: brightness(60%) blur(5px);
  }
  .divider {
    height: 70px;
    font-size: 30px;
    display: flex;
    align-items: end;
    padding: 0 0 8px 10px;
    transform: skew(-3deg);
  }
</style>
