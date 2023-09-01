<script lang="ts">
  export let year: string;
  export let title: string;
  export let numSeasons: number;
  export let numEpisodes: number;
</script>

<!-- @component the clickable text of a tv series -->
<div class="container">
  <div class="title">{title}</div>
  <div class="subtitle">
    {year}, {numSeasons}
    {numSeasons > 1 ? 'seasons' : 'season'}, {numEpisodes} episodes
  </div>
</div>

<style>
  .container {
    grid-area: text;
    height: 50px;
    display: grid;
    grid:
      'title' 27px
      'subtitle' 18px
      /
      auto;
    align-items: end;
  }
  .title {
    font-size: 17px;
    transform: skew(-3deg);
  }

  .subtitle {
    font-size: 12px;
    opacity: 0.6;
    transform: skew(-3deg);
  }
</style>
