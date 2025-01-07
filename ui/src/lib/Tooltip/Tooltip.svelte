<script lang="ts">
  import { allLiveActionTVs, allMovies } from '../MainList/buildingBlocks';
  import { tooltip } from '../stores/writables/$primary';
</script>

<!-- @component to render the modal if there's any tooltip that should currently be showing -->
<div
  class="viewport"
  on:click={() => {
    $tooltip = '';
  }}
>
  <div class="narrow">
    <div class="component" on:click|stopPropagation>
      {#if $tooltip === 'mcu'}
        <h2>Marvel Cinematic Universe (MCU):</h2>
        <p>
          With
          {allMovies.filter((i) => i.label.find((l) => l === 'mcu')).length}
          movies and
          {allLiveActionTVs.filter((i) => i.label.find((l) => l === 'mcu')).length}
          TV series, MCU is the largest continuity of all.
        </p>
        <p>
          In recent movies, the concept of Multiverse was introduced - all the storylines that ever
          happened in all other titles are now in the same canon as MCU, they just happen in
          parallel universes, but characters can travel between universes if plot requires.
        </p>
        <p>Among the multiverse, the MCU is identified as Earth-616.</p>
      {/if}
      {#if $tooltip === 'netflix'}
        <h2>Marvel's Netflix series</h2>
        <p>
          Set in the MCU but rarely cross over to the avenger movies, the Netflix series have a
          darker tone, featuring street-level heros in New York City.
        </p>
      {/if}
      {#if $tooltip === 'x-men'}
        <h2>20th Century Fox X-Men universe:</h2>
        <p>
          In 1995 Marvel sold the film rights of X-Men characters to 20th Century Fox, who made {allMovies.filter(
            (i) => i.label.find((l) => l === 'fox-x-men'),
          ).length} movies out of them, in one continuity.
        </p>
        <p>
          New titles will no longer happen in this universe since Disney acquired both Marvel and
          Fox. The X-Men IP will likely continue in the MCU.
        </p>
        <p>The Fantastic Four IP shares the exact same history and future as the X-Men.</p>
      {/if}
      {#if $tooltip === 'ssu'}
        <h2>Sony's Spider-Man Universe</h2>
        <p>
          In 1999 Marvel sold film rights of Spider-Man related characters to SONY, who still own
          them now.
        </p>
        <p>
          Except the Tom Holland collaboration with Marvel Studios, SONY/Columbia mostly created
          standalone franchises with these characters. Recently, however, inspired by the success of
          MCU, SONY is planning this new Spider-Man universe that integrates all marvel characters
          they own.
        </p>
        <p>
          Side note: not to be confused with SONY's Spider-Verse series which is a recent trilogy of
          animated feature films.
        </p>
      {/if}
      {#if $tooltip === 'show-minor-chars'}
        <h2>What's a minor character? <i>(shown as dimmed)</i></h2>
        <p>1. Brief appearance as a cameo or in the post-credit scene</p>
        <p>
          2. The character appeared, but not in a hero form, e.g. Pepper Potts not being "Rescue",
          Ant Man's daughter not being "Stature", Jane Foster not being Mighty Thor.
        </p>
        <p>
          3. In a multi-season TV series, a character is considered minor if they only appear in one
          episode.
        </p>
      {/if}
    </div>
  </div>
</div>

<style>
  .narrow {
    height: 100%;
    display: grid;
    place-items: center;
  }
  .component {
    position: relative; /* make sure it's not covered by the backdrop */
    filter: brightness(0.87);
    width: 80%;
    border: 3px solid var(--blue-highlight);
    border-radius: 5px;
    background-color: #222;
    padding: 5px 17px;
  }
  h2 {
    margin: 15px 0px;
    font-size: 21px;
    font-weight: 300;
  }
  i {
    font-size: 0.8em;
    font-weight: 300;
    filter: brightness(0.7);
  }
  p {
    margin: 15px 0px;
    line-height: 1.4;
    font-size: 16px;
    font-weight: 300;
  }
</style>
