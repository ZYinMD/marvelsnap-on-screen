<script lang="ts">
  import { filterStates } from './$filterStates';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $filterStates.isPanelOpen}
  <Panel />
{:else}
  <Button />
  <span></span>
{/if}

<style>
</style>
