<script lang="ts">
  import type { CardId } from '../MainList/buildingBlocks';
  import ListUnderCard from './ListUnderCard.svelte';
  export let cardId: CardId;
</script>

<div class="container-narrow">
  <div class="component">
    <div class="card-image">
      <img src={`/card-images/${cardId}.webp`} alt={cardId} />
    </div>
    <div>
      <ListUnderCard {cardId} />
    </div>
  </div>
</div>

<style>
  .component {
    display: grid;
    grid:
      'card' 50vh
      'shows' auto
      /
      100%;
    justify-content: center;
  }
  .card-image {
    display: flex;
    justify-content: center;
  }
  img {
    height: 100%;
  }
</style>
