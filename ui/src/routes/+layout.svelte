<script lang="ts">
  import Background from '../lib/Background/Background.svelte';
  import Filter from '../lib/Filter/Filter.svelte';
  import MainList from '../lib/MainList/MainList.svelte';
  import Sort from '../lib/Sort/Sort.svelte';
  import Tooltip from '../lib/Tooltip/Tooltip.svelte';
  import { tooltip } from '../lib/stores/writables/$primary';
  import './styles.css';
</script>

<Background />
<MainList />
<Sort />
<Filter />
{#if $tooltip}
  <Tooltip />
{/if}
<slot />

<style>
</style>
