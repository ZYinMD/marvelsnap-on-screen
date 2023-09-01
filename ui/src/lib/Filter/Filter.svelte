<script lang="ts">
  import Button from './Button.svelte';
</script>

<div class="container container-narrow-viewport">
  <Button />
</div>

<style>
  .container {
    pointer-events: none;
    display: grid;
    grid-template-areas: 'the-only';
  }
</style>
