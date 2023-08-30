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
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid:
      'only' auto
      /
      auto;
  }
</style>
