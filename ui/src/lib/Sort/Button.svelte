<script lang="ts">
  import CornerButtonShape from '../Icons/CornerButtonShape.svelte';
  import CornerSortIcon from '../Icons/CornerSortIcon.svelte';
  import { sort } from '../primaryStores/$primaryStores';
</script>

<!-- @component the sort button at on the bottom left -->
<div class="container container-narrow-viewport">
  <div class="component" on:click={() => ($sort.isPanelOpen = true)}>
    <div class="button-shape">
      <CornerButtonShape />
    </div>
    <div class="sort-icon">
      <CornerSortIcon />
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
    place-self: end start;
    width: 50px;
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
</style>
