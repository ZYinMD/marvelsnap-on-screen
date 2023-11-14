<script lang="ts">
  import { outClickListener } from '../use/outClickListener';
  import { sortStates } from './$sortStates';
</script>

<!-- @component the sort panel on the left -->
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
    background-color: aqua;
  }
</style>
