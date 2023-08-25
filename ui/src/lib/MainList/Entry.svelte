<script lang="ts">
  import type { mainList } from './$mainList';
  type Entry = (typeof $mainList)[number];
  export let entry: Entry;
</script>

<!-- @component the clickable movie title (or a divider) -->
{#if entry.type === 'divider'}
  <div class="divider">{entry.title}</div>
{:else if entry.type === 'movie'}
  <div class="movie">{entry.title}</div>
{:else}
  <div class="tv-series">{entry.title}</div>
{/if}

<style>
  .divider {
    height: 50px;
    font-size: 20px;
    background-color: #333;
  }
  .movie {
    border: 1px grey solid;
    height: 50px;
  }
  .tv-series {
    border: 1px grey solid;
    height: 50px;
  }
</style>
