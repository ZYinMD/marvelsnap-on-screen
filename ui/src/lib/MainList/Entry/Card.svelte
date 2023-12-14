<script lang="ts">
  import { allCards } from '../../facts/allCards';
  import { filter } from '../../stores/writables/$primary';
  export let cardName: keyof typeof allCards;
  export let minor = false;
  const filename = allCards[cardName].defId;
  function matchSearch(searching: string) {
    const searchTerms = searching.toLowerCase().split(' ');
    return searchTerms.every((i) => cardName.toLowerCase().includes(i));
  }
  $: shouldHighlight = matchSearch($filter.searching);
</script>

<!-- @component render a card -->
<img
  class:minor
  class:highlight={shouldHighlight}
  src={`/card-images/${filename}.webp`}
  alt={cardName}
/>

<style>
  img {
    width: var(--good-width);
    height: calc(var(--good-width) * 1.3);
    object-fit: cover;
  }
  img.minor {
    opacity: 0.33;
  }
  img.highlight {
    border: 3px solid yellow;
  }
</style>
