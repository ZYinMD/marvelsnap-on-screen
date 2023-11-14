<script lang="ts">
  import BlurredBackDrop from '../Background/BlurredBackDrop.svelte';
  import { outClickListener } from '../use/outClickListener';
  import { sortStates } from './$sortStates';
</script>

<!-- @component the sort panel on the left -->
<BlurredBackDrop />
<div class="container container-narrow-viewport">
  <div
    class="panel"
    use:outClickListener
    on:outClick={() => ($sortStates.isPanelOpen = false)}
  ></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    place-self: end start;
    width: 200px;
    height: 500px;
    background-color: #111;
    /* box-shadow:
      0 10px 10px -10px Thistle inset,
      -10px 0 10px -10px Thistle inset; */
  }
</style>
