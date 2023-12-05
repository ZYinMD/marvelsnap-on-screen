<script lang="ts">
  import { filter } from '../primaryStores/$primaryStores';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $filter.isPanelOpen}
  <Panel />
{:else}
  <Button />
  <span></span>
{/if}

<style>
</style>
