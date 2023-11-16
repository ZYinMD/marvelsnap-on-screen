<script lang="ts">
  import BlurredBackDrop from '../Background/BlurredBackDrop.svelte';
  import { outClickListener } from '../use/outClickListener';
  import { filterStates } from './$filterStates';
</script>

<!-- @component the search and filter panel on the right -->
<BlurredBackDrop />
<div class="container container-narrow-viewport">
  <div
    class="panel"
    use:outClickListener
    on:outClick={() => ($filterStates.isPanelOpen = false)}
  ></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    place-self: end end;
    width: 200px;
    height: 500px;
    background-color: aqua;
  }
</style>
