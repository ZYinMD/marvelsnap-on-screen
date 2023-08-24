<script lang="ts">
  import { mainList } from './$mainList';
</script>

<!-- @component the list of all the shows the home page -->
<div class="container">
  {#each $mainList as show (show.key)}
    <div class="show">
      {show.title}
    </div>
  {/each}
</div>

<style>
  .container {
    background-color: Pink;
  }
</style>
