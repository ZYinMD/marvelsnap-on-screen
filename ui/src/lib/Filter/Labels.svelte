<script lang="ts">
  import Info from '../Icons/Info.svelte';
</script>

<!-- @component Common labels used for filtering, e.g. MCU, Netflix, Anime, etc -->
<ul class="container">
  <li>
    <div class="label"><div class="skew">Marvel Cinematic Universe</div></div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div class="label"><div class="skew">20th Century Fox X-Men</div></div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div class="label"><div class="skew">Sony's Spider-Man Universe</div></div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div class="label"><div class="skew">Netflix</div></div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div class="label"><div class="skew">Other continuities</div></div>
    <div class="info-button"><Info /></div>
  </li>
</ul>

<style>
  ul.container {
    grid-area: labels;
    list-style: none;
    padding: 0px;
  }
  li {
    display: flex;
    align-items: center;
  }
  .label {
    border: 1px solid #555;
    padding: 4px 6px;
    margin: 5px 0px;
  }
  .info-button {
    font-size: 16px;
    margin: 4.5px 0px 0px 10px;
    color: #555;
    scale: 0.9;
  }
  .skew {
    transform: skew(-6deg);
  }
</style>
