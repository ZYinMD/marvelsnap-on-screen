<script lang="ts">
  import highlightWords from 'highlight-words';
  import ExternalLinkIcon from '../../Icons/ExternalLinkIcon.svelte';
  import { filter } from '../../stores/writables/$primary';

  export let year: string;
  export let title: string;
  export let wikipedia: string;
  export let isOpen: boolean;
  $: chunks = highlightWords({
    text: `(${year}) ${title}`,
    query: $filter.searching.trim(),
  });
</script>

<!-- @component the text of movie, containing year and title -->
<div class="component">
  <div>
    {#each chunks as chunk (chunk.key)}
      <span class:highlight={chunk.match}>{chunk.text}</span>
    {/each}
  </div>
  {#if isOpen}
    <a href={wikipedia} title="Wikipedia" target="_blank" on:click={(e) => e.stopPropagation()}>
      <ExternalLinkIcon />
    </a>
  {/if}
</div>

<style>
  .component {
    transform: skew(-3deg);
    grid-area: text;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    align-self: start;
    height: 19px;
    color: currentColor;
    margin: 10px 9px 0px 0px;
    filter: brightness(0.8);
  }
  a:hover {
    filter: brightness(1);
  }
  .highlight {
    background-color: var(--search-highlight);
    color: #222;
  }
</style>
