<script lang="ts">
  import { pushState } from '$app/navigation';
  import { afterUpdate, onMount } from 'svelte';
  import type { CardId } from '../MainList/buildingBlocks';
  import { paramNoLongerRelevant } from '../stores/writables/$primary';
  import ListUnderCard from './ListUnderCard.svelte';
  let scrollBody: HTMLDivElement;
  afterUpdate(() => (scrollBody.scrollTop = 0)); // when a new big card shows, scroll to top
  export let cardId: CardId;

  // when the big card is showing, hide the scrollbar of main list, otherwise there will be two scrollbars.
  onMount(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  });
</script>

<!-- @component Renders a big card and the list under it. Clicking anywhere within this component will bubble to the top wrapper which will close this component and return to the main list, except when clicked inside a stopPropagation area -->
<div
  class="viewport"
  on:click={() => {
    pushState('/', { cardId: undefined });
    $paramNoLongerRelevant = true;
  }}
>
  <div class="full-width-scroll" bind:this={scrollBody}>
    <div class="narrow">
      <div class="content">
        <div class="card-image">
          <img src={`/card-images/${cardId}.webp`} alt={cardId} />
          <div class="stop-propagation-zone" on:click|stopPropagation={null}></div>
        </div>
        <div class="list" on:click|stopPropagation={null}>
          <ListUnderCard {cardId} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .viewport {
    backdrop-filter: brightness(0.5);
  }
  .content {
    width: 100%;
    max-width: var(--content-width-on-desktop);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-image {
    height: 380px;
    display: grid;
    grid-template-areas: 'the-only';
    place-items: center;
  }
  img {
    grid-area: the-only;
    height: 380px;
  }
  .stop-propagation-zone {
    grid-area: the-only;
    height: 380px;
    width: 240px;
    position: relative;
    top: 10px;
    /* border: 1px solid red; */ /* uncomment to see area */
  }
  .list {
    margin-top: 13px;
    width: 100%;
    /* border: 1px solid red; */ /* uncomment to see area */
  }
</style>
