<script lang="ts">
  import BlurredBackDrop from '../Background/BlurredBackDrop.svelte';
  import SortButton from '../Icons/SortButton.svelte';
  import { outClickListener } from '../use/outClickListener';
  import { sortStates } from './$sortStates';
</script>

<!-- @component the sort panel on the left -->
<BlurredBackDrop />
<div class="container container-narrow-viewport">
  <div class="panel" use:outClickListener on:outClick={() => ($sortStates.isPanelOpen = false)}>
    <div class="heading"><div class="skew">Sort</div></div>
    <div class="direction"><SortButton flipped={false} /></div>
    <div class="options">options</div>
    <div class="group-by">group-by</div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    place-self: end start;
    /* width: fit-content; */
    background-color: #111;
    display: grid;
    place-items: center;
    grid:
      'heading direction' 50px
      'options options' 200px
      'group-by group-by' 50px
      /
      auto 50px;

    /* box-shadow:
      0 10px 10px -10px Thistle inset,
      -10px 0 10px -10px Thistle inset; */
  }
  .heading {
    grid-area: heading;
    font-size: 26px;
    font-weight: 500;
  }
  .direction {
    grid-area: direction;
    font-size: 24px;
    cursor: pointer;
  }
  .options {
    grid-area: options;
  }
  .group-by {
    grid-area: group-by;
  }
  .skew {
    transform: skew(-4deg);
  }
</style>
