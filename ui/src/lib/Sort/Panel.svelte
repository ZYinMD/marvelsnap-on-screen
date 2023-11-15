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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="option"
        class:active={$sortStates.sortBy === 'year'}
        on:click={() => ($sortStates.sortBy = 'year')}
      >
        <div class="skew">Year</div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="option"
        class:active={$sortStates.sortBy === 'numCards'}
        on:click={() => ($sortStates.sortBy = 'numCards')}
      >
        <div class="skew">Number of cards</div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="option"
        class:active={$sortStates.sortBy === 'numSeasons'}
        on:click={() => ($sortStates.sortBy = 'numSeasons')}
      >
        <div class="skew">Number of seasons</div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="option"
        class:active={$sortStates.sortBy === 'alphabetical'}
        on:click={() => ($sortStates.sortBy = 'alphabetical')}
      >
        <div class="skew">Alphabetical</div>
      </div>
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
    margin: 5px 0px;
    padding: 6px var(--gutter) 5px;
  }
  .option.active {
    color: white;
    background-color: SkyBlue;
    /* border: 3px solid SkyBlue; */
  }
  .option:hover:not(.active) {
    background-color: #333;
    cursor: pointer;
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
