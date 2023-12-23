<script lang="ts">
  import BigCardPage from '../BigCardPage/BigCardPage.svelte';
  import { page } from '$app/stores';
  $: currentCard = $page.state.cardId;
</script>

<!-- @component render the card if a card has been clicked on, when directly hitting the /[cardId] route -->
{#if currentCard}
  <BigCardPage cardId={currentCard} />
{/if}
