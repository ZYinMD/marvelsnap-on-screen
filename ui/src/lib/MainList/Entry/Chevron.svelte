<script lang="ts">
  export let isOpen: boolean;
</script>

<!-- @component the indicator of whether the drawer is open -->
{#if isOpen}
  <div>{'>'}</div>
{:else}
  <div>{'^'}</div>
{/if}

<style>
</style>
