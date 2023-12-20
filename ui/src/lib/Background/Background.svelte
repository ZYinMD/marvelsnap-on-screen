<script lang="ts">
  import { dimBackground } from '../stores/derived/$dimBackground';
  import Hexagons from './Hexagons.svelte';
  import SlidingDiagonals from './SlidingDiagonals.svelte';
</script>

<!-- @component The animated background of app -->
<div class="component" class:dim={$dimBackground}>
  <Hexagons />
  <SlidingDiagonals />
</div>

<style>
  .dim {
    filter: brightness(70%);
  }
</style>
