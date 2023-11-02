<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import Filter from '../lib/Filter/Filter.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import './styles.css';
</script>

<Background />
<MainList />
<Filter />
<slot />

<style>
</style>
