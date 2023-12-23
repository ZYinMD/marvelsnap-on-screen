<script lang="ts">
  import CardRoute from '../../lib/CardPage/CardPage.svelte';
  import type { CardId } from '../../lib/MainList/buildingBlocks';
  export let data: { cardId: CardId };
</script>

<CardRoute cardId={data.cardId} />
