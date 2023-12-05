<script lang="ts">
  import { scale } from 'svelte/transition';
  import Checkmark from '../Icons/Checkmark.svelte';
  import InfoIcon from '../Icons/InfoIcon.svelte';
  import { filter } from '../primaryStores/$primaryStores';
</script>

<div
  class="container clickable"
  on:click={() => ($filter.showMinorCharacters = !$filter.showMinorCharacters)}
>
  <div class="skew">Show Minor Characters</div>
  <div class="info-button"><InfoIcon /></div>
  {#if $filter.showMinorCharacters}
    <div transition:scale={{ duration: 100 }} class="checkmark">
      <Checkmark />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    margin: 25px 1px 24px;
  }
  .info-button {
    font-size: 16px;
    margin: 2px 0px 0px 10px;
    color: #555;
    scale: 0.9;
  }
  .checkmark {
    margin-left: 15px;
    color: skyblue;
    position: relative;
    top: 2px;
  }
  .skew {
    transform: skew(-6deg);
  }
</style>
