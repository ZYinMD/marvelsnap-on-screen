<script lang="ts">
  import { map, type Key, type Card } from '../../facts/map';
  export let key: Key;
  const major = map[key].major;
  // const minor = map[key].minor;
</script>

<!-- @component the expandable drawer that contains cards -->
<div class="container">
  {#each major as card (card)}
    <div>
      {card}
    </div>
  {/each}
</div>

<style>
  .container {
  }
</style>
