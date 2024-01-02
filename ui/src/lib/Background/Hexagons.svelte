<script lang="ts">
</script>

<!-- @component the background with hexagons  -->
<div class="component"></div>

<style>
  .component {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.12;
    background-image: url('./hexagon.svg');
  }
  /* media query of small screen */
  @media (max-width: 800px) {
    .component {
      opacity: 0.15;
    }
  }
</style>
