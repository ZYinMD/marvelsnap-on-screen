<script lang="ts">
  import { filterStates } from './$filterStates';
</script>

<!-- @component the search and filter panel on the right -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="container container-narrow-viewport"
  on:click={() => {
    $filterStates.isPanelOpen = false;
  }}
>
  <div class="panel"></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    pointer-events: none;
    place-self: end end;
    width: 200px;
    height: 500px;
    background-color: aqua;
  }
</style>
