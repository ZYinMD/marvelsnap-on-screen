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

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="direction"
      on:click={() => ($sortStates.sortDescending = !$sortStates.sortDescending)}
    >
      <SortButton flipped={!$sortStates.sortDescending} />
    </div>
    <div class="options">
      <div class="option skew">Year</div>
      <div class="option skew">Number of cards</div>
      <div class="option skew">Number of seasons</div>
      <div class="option skew">Alphabetical</div>
    </div>
    <div class="group-by skew">Group by type</div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
    font-size: 18px;
    --gutter: 18px;
  }
  .panel {
    padding: 36px 5px;
    place-self: end start;
    background-color: #222;
    display: grid;
    align-items: end;
    grid:
      'heading direction' 26px
      'options options' 180px
      'group-by group-by' 45px
      /
      auto 50px;
    border: 3px solid skyblue;
    border-radius: 5px;
    /* box-shadow: 0px 0px 0px 4px skyblue; */
  }
  .heading {
    grid-area: heading;
    margin-left: var(--gutter);
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
  .option {
    padding: 0px var(--gutter);
    margin: 15px 0px;
  }
  .group-by {
    margin-left: var(--gutter);
    grid-area: group-by;
    width: fit-content;
  }
  .skew {
    transform: skew(-4deg);
  }
</style>
