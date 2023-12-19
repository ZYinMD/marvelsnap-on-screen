<script lang="ts">
  import CardRoute from '../../lib/CardRoute/CardRoute.svelte';
  export let data;
</script>

<CardRoute cardId={data.cardId} />
