<script lang="ts">
  import Hexagons from './Hexagons.svelte';
  import SlidingDiagonals from './SlidingDiagonals.svelte';
</script>

<!-- @component The animated background of app -->
<div class="container container-all-viewport">
  <!-- <RotatingMix /> -->
  <Hexagons />
  <SlidingDiagonals />
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
</style>
