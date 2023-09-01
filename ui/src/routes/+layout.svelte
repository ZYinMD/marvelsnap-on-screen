<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import Filter from '../lib/Filter/Filter.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>MarvelSnap in Movies</title>
  <meta name="description" content="Watch what movies to see what cards" />
</svelte:head>

<Background />
<!-- the big list, centered on wide screen, can scroll vertically  -->
<div class="main-list">
  <MainList />
</div>

<!-- the layer that's the same width as the big list (centered on wide screen), but height is always the viewport, doesn't scroll  -->
<div class="visible">
  <Filter />
</div>
<slot />

<style>
  .main-list {
    position: relative;
    z-index: 1;
    margin: auto;
    padding: 0 5px;
    width: 100%;
    max-width: 800px;
  }
  .visible {
    pointer-events: none;
    position: fixed;
    z-index: 2;
    width: 100%;
    max-width: 800px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    display: grid;
    grid-template-areas: 'the-only';
  }
</style>
