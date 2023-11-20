<script lang="ts">
  import Info from '../Icons/Info.svelte';
</script>

<!-- @component Common labels used for filtering, e.g. MCU, Netflix, Anime, etc -->
<ul class="container">
  <li>
    <div class="label">Marvel Cinematic Universe</div>
    <div><Info /></div>
  </li>
  <li>
    <div class="label">20th Century Fox X-Men</div>
    i
  </li>
  <li>
    <div class="label">Sony's Spider-Man Universe</div>
    i
  </li>
  <li>
    <div class="label">Netflix</div>
    i
  </li>
  <li>
    <div class="label">Other continuities</div>
    i
  </li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
</ul>

<style>
  ul.container {
    grid-area: labels;
    list-style: none;
    padding: 0px;
  }
  li {
    display: flex;
  }
</style>
