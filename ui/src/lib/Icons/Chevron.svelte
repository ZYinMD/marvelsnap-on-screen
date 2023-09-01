<script lang="ts">
  export let isOpen: boolean;
</script>

<!-- @component the indicator of whether the drawer is open -->
<svg class:rotated={isOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 40">
  <polygon points="7 20 0 40 25 20 0 0 7 20" />
</svg>

<style>
  svg {
    grid-area: chevron;
    height: 12px;
    place-self: center;
    fill: currentColor;
    transition: transform 0.1s ease-in-out;
  }
  .rotated {
    transform: rotate(90deg);
  }
</style>
