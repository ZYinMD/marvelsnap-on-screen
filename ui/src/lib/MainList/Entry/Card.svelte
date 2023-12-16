<script lang="ts">
  import { allCards } from '../../facts/allCards';
  import { filter } from '../../stores/writables/$primary';
  export let cardName: keyof typeof allCards;
  export let minor = false;
  const filename = allCards[cardName].defId;
  function matchSearch(searching: string) {
    const searchTerms = searching
      .toLowerCase()
      .split(' ')
      .filter((i) => i.length > 1);
    if (searchTerms.length === 0) return false; // this can happen if user ju;
    if (searchTerms.length === 0) return false;
    return searchTerms.every((i) => cardName.toLowerCase().includes(i));
  }
  // $: shouldHighlight = false;
  $: shouldHighlight = matchSearch($filter.searching);
</script>

<!-- @component render a card -->
<div class:highlight={shouldHighlight} class:minor>
  <img src={`/card-images/${filename}.webp`} alt={cardName} />
</div>

<style>
  img {
    width: var(--good-width);
    height: calc(var(--good-width) * 1.3);
    object-fit: cover;
  }
  .highlight {
    background-color: #ff0c;
  }
  .minor {
    opacity: 0.6;
    filter: brightness(0.75);
  }
</style>
