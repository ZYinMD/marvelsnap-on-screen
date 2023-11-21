<script lang="ts">
  import Info from '../Icons/Info.svelte';
  import { filterStates } from './$filterStates';
  const toggle = (label: typeof $filterStates.activeLabel) => () => {
    if ($filterStates.activeLabel === label) {
      $filterStates.activeLabel = '';
    } else $filterStates.activeLabel = label;
  };
</script>

<!-- @component Common labels used for filtering, e.g. MCU, Netflix, Anime, etc -->
<ul class="container">
  <li>
    <div class="label" class:active={$filterStates.activeLabel === 'mcu'} on:click={toggle('mcu')}>
      <div class="skew">Marvel Cinematic Universe</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'x-men'}
      on:click={toggle('x-men')}
    >
      <div class="skew">20th Century Fox X-Men</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div class="label" class:active={$filterStates.activeLabel === 'ssu'} on:click={toggle('ssu')}>
      <div class="skew">Sony's Spider-Man Universe</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'netflix'}
      on:click={toggle('netflix')}
    >
      <div class="skew">Netflix</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'sequel'}
      on:click={toggle('sequel')}
    >
      <div class="skew">Other continuities</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'all-tv'}
      on:click={toggle('all-tv')}
    >
      <div class="skew">All TV Series</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'all-animated'}
      on:click={toggle('all-animated')}
    >
      <div class="skew">All Animated Series</div>
    </div>
    <div class="info-button"><Info /></div>
  </li>
  <li>
    <div
      class="label"
      class:active={$filterStates.activeLabel === 'anime'}
      on:click={toggle('anime')}
    >
      <div class="skew">Anime</div>
    </div>
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
    padding: 4.5px 7px 4px;
    margin: 5px 0px;
  }
  .label.active {
    border-color: skyblue;
    background-color: skyblue;
    color: white;
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
