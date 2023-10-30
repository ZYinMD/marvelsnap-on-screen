<script lang="ts">
  import { filterStates } from './$filterStates';
</script>

<!-- @component the filter bottom on the bottom right -->
<div class="container container-narrow-viewport">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="button"
    on:click={() => {
      $filterStates.isPanelOpen = true;
      console.log('1');
    }}
  ></div>
</div>

<style>
  .container {
    pointer-events: none;
    display: grid;
    grid-template-areas: 'the-only';
  }
  .button {
    pointer-events: auto;
    place-self: end end;
    width: 100px;
    height: 100px;
    background-color: Pink;
  }
</style>
