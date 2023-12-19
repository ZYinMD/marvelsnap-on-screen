<script lang="ts">
  import type { CardId } from '../MainList/buildingBlocks';
  import ListUnderCard from './ListUnderCard.svelte';
  export let cardId: CardId;
</script>

<div class="container-all-viewport">
  <div class="container-narrow">
    <div class="component">
      <div class="card">
        <img src={`/card-images/${cardId}.webp`} alt={cardId} />
      </div>
      <div>
        <ListUnderCard {cardId} />
      </div>
    </div>
  </div>
</div>

<style>
  .container-all-viewport {
    backdrop-filter: blur(5px) brightness(0.8);
  }
  .component {
    display: grid;
    grid:
      'card' 50vh
      'shows' auto
      /
      auto;
    justify-content: center;
  }
  img {
    height: 100%;
  }
</style>
