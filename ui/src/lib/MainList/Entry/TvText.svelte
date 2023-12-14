<script lang="ts">
  import ExternalLinkIcon from '../../Icons/ExternalLinkIcon.svelte';

  export let year: string;
  export let title: string;
  export let numSeasons: number;
  export let numEpisodes: number;
  export let wikipedia: string;
  export let isOpen: boolean;
</script>

<!-- @component the clickable text of a tv series -->
<div class="component">
  <div class="title">{title}</div>
  <div class="subtitle">
    {year}, {numSeasons}
    {numSeasons > 1 ? 'seasons' : 'season'}, {numEpisodes} episodes
  </div>
  {#if isOpen}
    <a href={wikipedia} target="_blank" on:click={(e) => e.stopPropagation()}>
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
    align-self: center;
    justify-self: end;
    height: 19px;
    color: currentColor;
    margin: 4px 9px 0px 0px;
    filter: brightness(0.8);
  }
  a:hover {
    filter: brightness(1);
  }
</style>
