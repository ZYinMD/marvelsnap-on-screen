<script lang="ts">
  import Hexagons from './Hexagons.svelte';
  import SlidingDiagonals from './SlidingDiagonals.svelte';
</script>

<!-- @component The animated background of app -->
<div class="container">
  <!-- <RotatingMix /> -->
  <Hexagons />
  <SlidingDiagonals />
</div>

<style>
  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-areas: 'only';
  }
</style>
