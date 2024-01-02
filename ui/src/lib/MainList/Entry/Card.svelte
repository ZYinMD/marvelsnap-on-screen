<script lang="ts">
  import { pushState } from '$app/navigation';
  import { allCards } from '../../facts/allCards';
  import { drawers, filter, paramNoLongerRelevant } from '../../stores/writables/$primary';
  export let cardName: keyof typeof allCards;
  export let minor = false;
  export let underBigCard = false; // true if rendered under a big card

  $: cardId = allCards[cardName].defId;
  $: href = `/${cardId}`;
  function matchSearch(searching: string) {
    const searchTerms = searching
      .toLowerCase()
      .split(' ')
      .filter((i) => i.length > 1);
    if (searchTerms.length === 0) return false;
    return searchTerms.some((i) => cardName.toLowerCase().includes(i));
  }
  $: shouldHighlight = !underBigCard && matchSearch($filter.searching);
</script>

<!-- @component render a card -->
<div class:highlight={shouldHighlight} class:minor>
  <a
    {href}
    on:click={(e) => {
      e.preventDefault();
      pushState(href, { cardId });
      $paramNoLongerRelevant = true;
      drawers.closeAll('underBigCard');
    }}
  >
    <img src={`/card-images/${cardId}.webp`} alt={cardName} class="clickable" />
  </a>
</div>

<style>
  img {
    width: var(--good-width);
    height: calc(var(--good-width) * 1.3);
    object-fit: cover;
  }
  .highlight {
    background-color: var(--search-highlight);
  }
  .minor {
    opacity: 0.67;
    filter: brightness(0.67);
  }
</style>
