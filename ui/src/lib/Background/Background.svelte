<script lang="ts">
  import { filter, sort } from '../stores/writables/$primary';
  import Hexagons from './Hexagons.svelte';
  import SlidingDiagonals from './SlidingDiagonals.svelte';
  $: dim = $sort.isPanelOpen || $filter.isPanelOpen;
</script>

<!-- @component The animated background of app -->
<div class="container container-all-viewport" class:dim>
  <!-- <RotatingMix /> -->
  <Hexagons />
  <SlidingDiagonals />
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .dim {
    filter: brightness(70%);
  }
</style>
