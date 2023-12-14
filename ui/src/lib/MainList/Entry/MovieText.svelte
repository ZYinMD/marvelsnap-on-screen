<script lang="ts">
  import ExternalLinkIcon from '../../Icons/ExternalLinkIcon.svelte';
  export let year: string;
  export let title: string;
  export let url: string;
</script>

<!-- @component the text of movie, containing year and title -->
<div class="component">
  <span>({year}) {title}</span>
  <a href={url} target="_blank" on:click={(e) => e.stopPropagation()}>
    <ExternalLinkIcon />
  </a>
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
    height: 19px;
    color: currentColor;
    margin-right: 8px;
    filter: brightness(0.8);
  }
  a:hover {
    filter: brightness(1);
  }
</style>
