<script lang="ts">
  import Filter from '../Filter/Filter.svelte';
  import MainList from '../MainList/MainList.svelte';
  import Sort from '../Sort/Sort.svelte';
  import Tooltip from '../Tooltip/Tooltip.svelte';
  import { tooltip } from '../stores/writables/$primary';
</script>

<MainList />
<div class="viewport">
  <div class="full-width-scroll">
    <div class="narrow">
      <Sort />
      <Filter />
    </div>
  </div>
</div>
{#if $tooltip}
  <Tooltip />
{/if}

<style>
  /* .viewport {
    pointer-events: none;
    display: grid;
    grid:
      '. list .' 100%
      /
      minmax(0, 1fr) minmax(0px, 800px) minmax(0, 1fr);
  } */
  .viewport {
    pointer-events: none;
  }
  .narrow {
    pointer-events: none;
    display: grid;
    grid-template-areas: 'list';
    height: 100%;
    overflow: hidden;
  }
</style>
