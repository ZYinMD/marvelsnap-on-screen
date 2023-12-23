<script lang="ts">
  import { filter } from '../stores/writables/$primary';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $filter.isPanelOpen}
  <Panel />
{:else}
  <Button />
{/if}

<style>
</style>
