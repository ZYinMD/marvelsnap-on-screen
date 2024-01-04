<script lang="ts">
  import GithubIcon from '../Icons/GithubIcon.svelte';
  import { shouldDimBackground } from '../stores/derived/$shouldDimBackground';
</script>

<footer class="component" class:dim={$shouldDimBackground}>
  <a href="https://github.com/ZYinMD/marvelsnap-on-screen" target="_blank">
    Source code <GithubIcon />
  </a>
</footer>

<style>
  .component {
    position: relative; /* otherwise it's somehow covered by other divs */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 19px 0px 50px;
  }
  a {
    color: #777;
  }
  .component :global(svg) {
    width: 23px;
    height: 23px;
    position: relative;
    top: 5.5px;
    left: 5px;
  }
  .dim {
    filter: brightness(50%) blur(4px);
  }
</style>
