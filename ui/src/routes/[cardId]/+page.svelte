<script lang="ts">
  import BigCardPage from '../../lib/BigCardPage/BigCardPage.svelte';
  import type { CardId } from '../../lib/MainList/buildingBlocks';
  export let data: { cardId: CardId };
</script>

<BigCardPage cardId={data.cardId} />
