<script lang="ts">
  import { filter, tooltip } from '../stores/writables/$primary';
  import Labels from './Labels.svelte';
  import SearchBox from './SearchBox.svelte';
  import ShowMinorChars from './ShowMinorCharacters.svelte';
</script>

<!-- @component the search and filter panel on the right -->
<div class="panel" class:dim={Boolean($tooltip)} on:click|stopPropagation>
  <div class="h1"><div class="skew">Search & Filters</div></div>
  <SearchBox />
  <div class="h2"><div class="skew">Labels</div></div>
  <Labels />
  <ShowMinorChars />
  <div
    class="reset pressable"
    on:click={() => {
      $filter.searching = '';
      $filter.activeLabel = '';
      $filter.showMinorCharacters = true;
    }}
  >
    <div class="skew">Reset</div>
  </div>
</div>

<style>
  .panel {
    position: relative; /* make sure it's not covered by the backdrop */
    grid-area: list;
    pointer-events: auto;
    padding: 30px 18px;
    place-self: end end;
    background-color: #222;
    display: flex;
    flex-direction: column;
    border: 3px solid var(--blue-highlight);
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
  .dim {
    filter: brightness(30%);
  }
</style>
