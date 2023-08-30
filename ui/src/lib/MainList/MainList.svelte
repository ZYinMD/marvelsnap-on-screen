<script lang="ts">
  import { mainList } from './$listStates';
  import Entry from './Entry.svelte';
</script>

<!-- @component the list of all the shows the home page -->
<div class="container">
  {#each $mainList as entry (entry.key)}
    <Entry {entry} />
  {/each}
</div>

<style>
</style>
