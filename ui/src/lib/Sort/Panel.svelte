<script lang="ts">
  import { scale } from 'svelte/transition';
  import Checkmark from '../Icons/Checkmark.svelte';
  import SortIcon from '../Icons/SortIcon.svelte';
  import { sort } from '../stores/writables/$primary';
  import { outClickListener } from '../use/outClickListener';
</script>

<!-- @component the sort panel on the left -->
<div
  class="panel"
  use:outClickListener
  on:outClick={() => {
    $sort.isPanelOpen = false;
  }}
>
  <div class="heading"><div class="skew">Sort</div></div>

  <div class="direction" on:click={() => ($sort.sortDescending = !$sort.sortDescending)}>
    <SortIcon flipped={!$sort.sortDescending} />
  </div>
  <div class="options">
    <div
      class="option pressable"
      class:active={$sort.sortBy === 'year'}
      on:click={() => ($sort.sortBy = 'year')}
    >
      <div class="skew">Year</div>
    </div>
    <div
      class="option pressable"
      class:active={$sort.sortBy === 'numCards'}
      on:click={() => ($sort.sortBy = 'numCards')}
    >
      <div class="skew">Number of cards</div>
    </div>
    <div
      class="option pressable"
      class:active={$sort.sortBy === 'numSeasons'}
      on:click={() => ($sort.sortBy = 'numSeasons')}
    >
      <div class="skew">Number of seasons</div>
    </div>
    <div
      class="option pressable"
      class:active={$sort.sortBy === 'alphabetical'}
      on:click={() => ($sort.sortBy = 'alphabetical')}
    >
      <div class="skew">Alphabetical</div>
    </div>
  </div>
  <div class="separate-movies-and-tv skew">Separate Movies and TV</div>
  {#if $sort.separateMoviesAndTv}
    <div transition:scale={{ duration: 100 }} class="checkmark">
      <Checkmark />
    </div>
  {/if}
  <div
    class="row-of-separate-movies-and-tv clickable"
    on:click={() => ($sort.separateMoviesAndTv = !$sort.separateMoviesAndTv)}
  ></div>
</div>

<style>
  .panel {
    position: relative; /* make sure it's not covered by the backdrop */
    pointer-events: auto;
    grid-area: list;
    font-size: 18px;
    --gutter: 18px;
    padding: 21px 5px;
    place-self: end start;
    background-color: #222;
    display: grid;
    align-items: center;
    grid:
      'heading direction' 26px
      'options options' 190px
      'separate-movies-and-tv checkmark' 35px
      /
      auto 40px;
    border: 3px solid var(--blue-highlight);
    border-radius: 5px;
  }
  .heading {
    grid-area: heading;
    margin-left: var(--gutter);
    font-size: 26px;
    font-weight: 500;
  }
  .direction {
    grid-area: direction;
    font-size: 32px;
    cursor: pointer;
    position: relative;
    top: 3px;
    right: 3px;
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
    background-color: var(--blue-highlight);
  }
  .option:hover:not(.active) {
    background-color: #aaa1;
    cursor: pointer;
  }
  .separate-movies-and-tv {
    pointer-events: none;
    margin-left: var(--gutter);
    grid-area: separate-movies-and-tv;
    margin-right: 12px;
  }
  .checkmark {
    pointer-events: none;
    grid-area: checkmark;
    color: var(--blue-highlight);
    position: relative;
    top: 1.2px;
  }
  .row-of-separate-movies-and-tv {
    grid-area: 3/1/4/3;
    align-self: stretch;
  }
  .row-of-separate-movies-and-tv:hover {
    background-color: #aaa1;
  }
  .skew {
    transform: skew(-6deg);
  }
</style>
