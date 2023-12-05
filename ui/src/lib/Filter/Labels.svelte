<script lang="ts">
  import InfoIcon from '../Icons/InfoIcon.svelte';
  import { filter } from '../primaryStores/$primaryStores';
  const toggle = (label: typeof $filter.activeLabel) => () => {
    if ($filter.activeLabel === label) {
      $filter.activeLabel = '';
    } else $filter.activeLabel = label;
  };
</script>

<!-- @component Common labels used for filtering, e.g. MCU, Netflix, Anime, etc -->
<ul class="container">
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'mcu'}
      on:click={toggle('mcu')}
    >
      <div class="skew">Marvel Cinematic Universe</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'x-men'}
      on:click={toggle('x-men')}
    >
      <div class="skew">20th Century Fox X-Men</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'ssu'}
      on:click={toggle('ssu')}
    >
      <div class="skew">Sony's Spider-Man Universe</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'sequel'}
      on:click={toggle('sequel')}
    >
      <div class="skew">Has a Sequel or Two</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'netflix'}
      on:click={toggle('netflix')}
    >
      <div class="skew">Netflix</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'all-tv'}
      on:click={toggle('all-tv')}
    >
      <div class="skew">All TV Series</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'all-animated'}
      on:click={toggle('all-animated')}
    >
      <div class="skew">All Animated</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
  <li>
    <div
      class="label clickable"
      class:active={$filter.activeLabel === 'anime'}
      on:click={toggle('anime')}
    >
      <div class="skew">Anime</div>
    </div>
    <div class="info-button"><InfoIcon /></div>
  </li>
</ul>

<style>
  ul.container {
    list-style: none;
    padding: 0px;
    margin: 0px;
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
  .label:hover {
    border: 1px solid #666;
  }
  .label.active {
    border-color: var(--blue);
    background-color: var(--blue);
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
