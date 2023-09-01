<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import Filter from '../lib/Filter/Filter.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>MarvelSnap in Movies</title>
  <meta name="description" content="Watch what movies to see what cards" />
  <meta name="robots" content="noindex" />
</svelte:head>

<Background />
<MainList />
<Filter />
<slot />

<style>
</style>
