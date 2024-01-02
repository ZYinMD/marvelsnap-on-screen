<script lang="ts">
  import BigCardPage from '../BigCardPage/BigCardPage.svelte';
  import { currentBigCard } from '../stores/derived/$currentBigCard';
</script>

<!-- @component render the card if a card has been clicked on, or when directly hitting the /[cardId] route -->
{#if $currentBigCard}
  <BigCardPage cardId={$currentBigCard} />
{/if}
