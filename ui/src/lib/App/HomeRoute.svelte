<script lang="ts">
  import Filter from '../Filter/Filter.svelte';
  import Footer from '../Footer/Footer.svelte';
  import MainList from '../MainList/MainList.svelte';
  import Sort from '../Sort/Sort.svelte';
  import Tooltip from '../Tooltip/Tooltip.svelte';
  import { tooltip } from '../stores/writables/$primary';
</script>

<MainList />
<div class="viewport">
  <div class="narrow">
    <Sort />
    <Filter />
  </div>
</div>
{#if $tooltip}
  <Tooltip />
{/if}
<Footer />

<style>
  .viewport {
    pointer-events: none; /* this transparent container shouldn't block other real components */
  }
  .narrow {
    pointer-events: none; /* this transparent container shouldn't block other real components */
    display: grid;
    grid-template-areas: 'list';
    height: 100%;
    overflow: hidden;
  }
</style>
