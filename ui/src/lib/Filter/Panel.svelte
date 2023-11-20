<script lang="ts">
  import { fly } from 'svelte/transition';
  import BlurredBackDrop from '../Background/BlurredBackDrop.svelte';
  import { outClickListener } from '../use/outClickListener';
  import { filterStates } from './$filterStates';
  import SearchBox from './SearchBox.svelte';
  import Labels from './Labels.svelte';
</script>

<!-- @component the search and filter panel on the right -->
<BlurredBackDrop />
<div class="container container-narrow-viewport">
  <div
    class="panel"
    in:fly={{ x: 200, duration: 100 }}
    use:outClickListener
    on:outClick={() => ($filterStates.isPanelOpen = false)}
  >
    <div class="h1"><div class="skew">Search & Filters</div></div>
    <SearchBox />
    <div class="h2"><div class="skew">Common Labels</div></div>
    <Labels />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    padding: 30px 18px;
    place-self: end end;
    background-color: #222;
    display: grid;
    align-items: center;
    grid:
      'h1' 26px
      'search-box' 90px
      'h2' 35px
      'labels' auto
      'reset' 50px
      /
      auto;
    border: 3px solid skyblue;
    border-radius: 5px;
  }
  .h1 {
    grid-area: h1;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .h2 {
    grid-area: h2;
    font-size: 18px;
  }
  .skew {
    transform: skew(-6deg);
  }
</style>
