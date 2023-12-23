<script lang="ts">
  import CardPage from '../CardPage/CardPage.svelte';
  import { page } from '$app/stores';
  $: currentCard = $page.state.cardId;
</script>

<!-- @component render the card if a card has been clicked on, when directly hitting the /[cardId] route -->
{#if currentCard}
  <CardPage cardId={currentCard} />
{/if}
