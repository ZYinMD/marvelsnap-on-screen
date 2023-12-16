<script lang="ts">
  import CornerButtonShape from '../Icons/CornerButtonShape.svelte';
  import FilterIcon from '../Icons/FilterIcon.svelte';
  import { dimBackground } from '../stores/derived/$dimBackground';
  import { filter } from '../stores/writables/$primary';
</script>

<!-- @component the filter button at on the bottom right -->
<div class="container container-narrow-viewport">
  <div class="component" class:dim={$dimBackground} on:click={() => ($filter.isPanelOpen = true)}>
    <div class="button-shape">
      <CornerButtonShape />
    </div>
    <div class="filter-icon">
      <FilterIcon />
    </div>
  </div>
</div>

<style>
  .container {
    pointer-events: none;
    display: grid;
  }
  .component {
    pointer-events: auto;
    place-self: end end;
    width: 50px;
    display: grid;
    grid-template-areas: 'the-only';
    place-items: center;
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
    width: 100%;
    height: 100%;
  }
  .filter-icon {
    transform: scaleY(1.07) skewY(-10deg);
    grid-area: the-only;
    color: #eeee;
    width: 43%;
    height: 43%;
    position: relative;
    left: 10%;
    top: 5%;
  }
  .dim {
    filter: brightness(50%) blur(2px);
  }
</style>
