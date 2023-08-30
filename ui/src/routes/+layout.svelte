<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>MarvelSnap in Movies</title>
  <meta name="description" content="Watch what movies to see what cards" />
</svelte:head>

<Background />
<div class="app">
  <MainList />
  <slot />
</div>

<style>
  .app {
    position: relative;
    margin: auto;
    padding: 0 5px;
    width: 100%;
    max-width: 800px;
    overflow-x: hidden;
  }
</style>
