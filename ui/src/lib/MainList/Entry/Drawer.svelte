<script lang="ts">
  import { allCards } from '../../facts/allCards';
  import { map, type Key, type Card } from '../../facts/map';
  export let key: Key;
  const major = map[key].major;
  const minor = map[key].minor;
</script>

<!-- @component the expandable drawer that contains cards -->
<div class="container">
  {#each major as card (card)}
    {@const filename = allCards[card].defId}
    <img src={`/card-images/${filename}.webp`} alt={card} />
  {/each}
  {#each minor as card (card)}
    {@const filename = allCards[card].defId}
    <img class="minor" src={`/card-images/${filename}.webp`} alt={card} />
  {/each}
</div>

<style>
  .container {
    --good-width: min(30vw, 130px);
    grid-area: drawer;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--good-width));
    justify-content: center;
    padding-bottom: 15px;
  }
  img {
    width: var(--good-width);
    height: calc(var(--good-width) * 1.3);
    object-fit: cover;
  }
  img.minor {
    opacity: 0.25;
  }
</style>
