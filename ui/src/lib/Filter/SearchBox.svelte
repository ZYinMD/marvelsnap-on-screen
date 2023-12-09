<script lang="ts">
  import { filter } from '../stores/writables/$primary';
</script>

<!-- @component the search box to put in key words -->
<div class="component">
  <input
    type="search"
    name="search"
    id="search-box"
    placeholder="search"
    bind:value={$filter.searching}
  />
</div>

<style>
  .component {
    border: none;
  }
  input {
    font-size: 15px;
    color: #ccc;
    &::placeholder {
      color: #6666;
    }
    padding: 10px 8px;
    border: 2px solid #8888;
    outline: none;
    border-radius: 2px;
    background-color: #1118;
  }
</style>
