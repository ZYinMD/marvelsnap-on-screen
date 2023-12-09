<script lang="ts">
  import { dimBackground } from '../stores/derived/$dimBackground';
  import Hexagons from './Hexagons.svelte';
  import SlidingDiagonals from './SlidingDiagonals.svelte';
</script>

<!-- @component The animated background of app -->
<div class="container container-all-viewport" class:dim={$dimBackground}>
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
