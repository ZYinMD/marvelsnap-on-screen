<script lang="ts">
  import { sort } from '../primaryStores/$primaryStores';
</script>

<!-- @component the sort button at on the bottom left -->
<div class="container container-narrow-viewport">
  <div
    class="button"
    on:click={() => {
      $sort.isPanelOpen = true;
    }}
  ></div>
</div>

<style>
  .container {
    pointer-events: none;
    display: grid;
    grid-template-areas: 'the-only';
  }
  .button {
    pointer-events: auto;
    place-self: end start;
    width: 100px;
    height: 100px;
    background-color: Pink;
  }
</style>
