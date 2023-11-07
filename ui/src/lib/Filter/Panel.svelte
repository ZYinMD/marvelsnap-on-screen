<script lang="ts">
  import { outClickListener } from '../use/outClickListener';
</script>

<!-- @component the search and filter panel on the right -->

<div class="container container-narrow-viewport">
  <div
    class="panel"
    use:outClickListener
    on:outClick={(e) => {
      console.log('e:', e);
    }}
  ></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas: 'the-only';
  }
  .panel {
    place-self: end end;
    width: 200px;
    height: 500px;
    background-color: aqua;
  }
</style>
