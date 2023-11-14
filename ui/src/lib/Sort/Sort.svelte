<script lang="ts">
  import { sortStates } from './$sortStates';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $sortStates.isPanelOpen}
  <Panel />
{:else}
  <Button />
  <span></span>
{/if}

<style>
</style>
