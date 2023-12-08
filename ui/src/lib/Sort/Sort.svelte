<script lang="ts">
  import { sort } from '../stores/writables/$primary';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $sort.isPanelOpen}
  <Panel />
{:else}
  <Button />
{/if}
