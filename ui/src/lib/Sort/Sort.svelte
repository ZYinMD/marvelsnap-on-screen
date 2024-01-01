<script lang="ts">
  import { sort } from '../stores/writables/$primary';
  import Button from './Button.svelte';
  import Panel from './Panel.svelte';
</script>

{#if $sort.isPanelOpen}
  <div class="viewport backdrop"></div>
  <Panel />
{:else}
  <Button />
{/if}

<style>
  .backdrop {
    pointer-events: initial; /* this transparent container should block other real components underneath it, especially to capture clicks and hovers */
  }
</style>
