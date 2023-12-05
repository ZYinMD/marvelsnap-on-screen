<script lang="ts">
</script>

<!-- @component the outer shape of sort and filter button -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop class="color1" offset="0%" />
      <stop class="color2" offset="100%" />
    </linearGradient>
  </defs>
  <polygon class="outer" points="40 0 10 8 0 30 39.5 28" />
  <polygon class="inner" points="38 2 12 10 3 28 37.5 26" />
</svg>

<style>
  svg {
    height: 100%;
    width: 100%;
  }
  .inner {
    stroke: hsl(250, 100%, 68%);
  }
  .outer {
    fill: none;
    stroke-width: 1;
    stroke: hsl(230, 78%, 75%);
  }
  .inner {
    fill: url(#gradient);
  }
  .color1 {
    stop-color: hwb(230 30% 0%);
  }
  .color2 {
    stop-color: hwb(220 0% 50%);
  }
</style>
