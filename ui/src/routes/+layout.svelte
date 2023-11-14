<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import Filter from '../lib/Filter/Filter.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import Sort from '../lib/Sort/Sort.svelte';
  import './styles.css';
</script>

<Background />
<MainList />
<Sort />
<Filter />
<slot />

<style>
</style>
