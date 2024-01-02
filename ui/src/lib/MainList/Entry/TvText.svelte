<script lang="ts">
  import ExternalLinkIcon from '../../Icons/ExternalLinkIcon.svelte';
  import highlightWords from 'highlight-words';
  import { filter } from '../../stores/writables/$primary';

  export let year: string;
  export let title: string;
  export let numSeasons: number;
  export let numEpisodes: number;
  export let wikipedia: string;
  export let isOpen: boolean;
  export let underBigCard = false; // if the show  is rendered under a big card, set it to true
  $: titleChunks = highlightWords({
    text: title,
    query: $filter.searching.trim(),
  });
  $: subtitleChunks = highlightWords({
    text: `${year}, ${numSeasons} season${numSeasons > 1 ? 's' : ''}, ${numEpisodes} episodes`,
    query: $filter.searching.trim(),
  });
</script>

<!-- @component the clickable text of a tv series -->
<div class="component">
  <div class="title">
    {#each titleChunks as chunk (chunk.key)}
      <span class:highlight={!underBigCard && chunk.match}>{chunk.text}</span>
    {/each}
  </div>
  <div class="subtitle">
    {#each subtitleChunks as chunk (chunk.key)}
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
    grid-area: text;
    height: 50px;
    display: grid;
    grid:
      'title wiki-link' 27px
      'subtitle wiki-link' 18px
      /
      auto auto;
    align-items: end;
  }
  .title {
    grid-area: title;
    font-size: 17px;
    transform: skew(-3deg);
  }
  .subtitle {
    grid-area: subtitle;
    font-size: 12px;
    opacity: 0.6;
    transform: skew(-3deg);
  }
  a {
    grid-area: wiki-link;
    align-self: start;
    justify-self: end;
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
