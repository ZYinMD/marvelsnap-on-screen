<script lang="ts">
  import RotatingMix from './RotatingMix.svelte';
</script>

<!-- @component The animated background of app -->
<div class="container">
  <RotatingMix />
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
