<script lang="ts">
  import BlurredBackDrop from '../Background/BlurredBackDrop.svelte';
  import { filter } from '../primaryStores/$primaryStores';
  import { outClickListener } from '../use/outClickListener';
  import Labels from './Labels.svelte';
  import SearchBox from './SearchBox.svelte';
  import ShowMinorChars from './ShowMinorCharacters.svelte';
</script>

<!-- @component the search and filter panel on the right -->
<BlurredBackDrop />
<div class="container container-narrow-viewport">
  <div class="panel" use:outClickListener on:outClick={() => ($filter.isPanelOpen = false)}>
    <div class="h1"><div class="skew">Search & Filters</div></div>
    <SearchBox />
    <div class="h2"><div class="skew">Labels</div></div>
    <Labels />
    <ShowMinorChars />
    <div
      class="reset clickable"
      on:click={() => {
        $filter.searching = '';
        $filter.activeLabel = '';
        $filter.showMinorCharacters = true;
      }}
    >
      <div class="skew">Reset</div>
    </div>
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
    display: flex;
    flex-direction: column;
    border: 3px solid skyblue;
    border-radius: 5px;
  }
  .h1 {
    font-size: 26px;
    font-weight: 500;
    margin: 0px 1px 17px;
  }
  .h2 {
    margin: 20px 1px 7px;
    font-size: 22px;
  }
  .reset {
    width: fit-content;
    border: 1px solid #555;
    padding: 4.5px 7px 4px;
    margin: 5px 0px;
  }
  .skew {
    transform: skew(-6deg);
  }
</style>
