<script lang="ts">
  import { shouldDimBackground } from '../stores/derived/$shouldDimBackground';
  import { mainList } from '../stores/derived/$mainList';
  import { filter } from '../stores/writables/$primary';
  import Entry from './Entry/Show.svelte';
</script>

<!-- @component the list of all the shows in the home page -->
<div class="viewport">
  <div class="full-width-scroll">
    <div class="content narrow" class:dim={$shouldDimBackground}>
      {#if $filter.searching.trim()}
        <div class="heading">
          {#if $mainList.length === 0}
            <div class="text">0 search result for "{$filter.searching.trim()}"</div>
          {:else}
            <div class="text">Search results for "{$filter.searching.trim()}":</div>
          {/if}
        </div>
      {/if}

      {#each $mainList as entry (entry.key)}
        {#if entry.type === 'divider'}
          <div class="divider"><div class="text">{entry.title}:</div></div>
        {:else}
          <Entry showData={entry} />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .content {
    position: relative;
    padding: 10px 6px;
  }
  .dim {
    filter: brightness(60%) blur(4px);
  }
  .divider {
    height: 70px;
    font-size: 30px;
    display: flex;
    align-items: end;
    padding: 0 0 8px 10px;
    transform: skew(-3deg);
  }
  .heading {
    font-size: 20px;
    font-weight: 100;
    margin: 20px 4px 0px;
    color: var(--search-highlight);
    transform: skew(-3deg);
  }
</style>
