<script lang="ts">
  import { allCards } from '../../facts/allCards';
  export let cardName: keyof typeof allCards;
  export let minor = false;
  const filename = allCards[cardName].defId;
</script>

<!-- @component render a card -->
<img class:minor src={`/card-images/${filename}.webp`} alt={cardName} />

<style>
  img {
    width: var(--good-width);
    height: calc(var(--good-width) * 1.3);
    object-fit: cover;
  }
  img.minor {
    opacity: 0.25;
  }
</style>
