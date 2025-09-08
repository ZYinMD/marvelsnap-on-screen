<script lang="ts">
  import CornerButtonShape from '../Icons/CornerButtonShape.svelte';
  import CornerSortIcon from '../Icons/CornerSortIcon.svelte';
  import { shouldDimBackground } from '../stores/derived/$shouldDimBackground';
  import { sort } from '../stores/writables/$primary';
</script>

<!-- @component the sort button at on the bottom left -->
<div class="component" class:dim={$shouldDimBackground} on:click={() => ($sort.isPanelOpen = true)}>
  <div class="button-shape">
    <CornerButtonShape />
  </div>
  <div class="sort-icon">
    <CornerSortIcon />
  </div>
</div>

<style>
  .component {
    grid-area: list;
    pointer-events: auto;
    place-self: end start;
    width: 72px;
    padding: 2px 2px 0px 3px;
    display: grid;
    place-items: center;
    grid-template-areas: 'the-only';
    cursor: pointer;
    filter: brightness(120%);
  }
  .component:hover {
    filter: brightness(135%);
  }
  .component:active {
    filter: brightness(150%);
  }
  .button-shape {
    grid-area: the-only;
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
  }
  .sort-icon {
    transform: scaleX(1.3) skewY(12deg);
    grid-area: the-only;
    color: #eeee;
    width: 41%;
    height: 41%;
    position: relative;
    right: 7.5%;
    top: 5.5%;
  }
  .dim {
    filter: brightness(50%) blur(2px);
  }
</style>
