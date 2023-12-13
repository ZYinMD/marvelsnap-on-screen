<script lang="ts">
  import { allLiveActionTvSeries, allMovies } from '../MainList/buildingBlocks';
  import { handleOutClick } from '../stores/derived/$handleOutClick';
  import { tooltip } from '../stores/writables/$primary';
  import { outClickListener } from '../use/outClickListener';
</script>

<!-- @component to render the modal if there's any tooltip that should currently be showing -->

<div class="container-narrow-viewport">
  <div class="component" use:outClickListener on:outClick={$handleOutClick}>
    {#if $tooltip === 'mcu'}
      <h2>Marvel Cinematic Universe (MCU):</h2>
      <p>
        With
        {allMovies.filter((i) => i.label.find((l) => l === 'mcu')).length}
        movies and
        {allLiveActionTvSeries.filter((i) => i.label.find((l) => l === 'mcu')).length}
        TV series, MCU is the largest continuity of all.
      </p>
      <p>
        In recent movies, the concept of Multiverse was introduced. All the storylines that ever
        happened in any other titles are now in the same canon as MCU, they just happened in
        parallel universes, but characters can travel between universes if plot requires.
      </p>
      <p>Among the multiverse, the MCU is identified as Earth-616.</p>
    {/if}
    {#if $tooltip === 'netflix'}
      <h2>Marvel's Netflix series</h2>
      <p>
        Set in the MCU but rarely cross over to the avenger movies, the Netflix series have a darker
        tone, featuring street-level heros in New York City.
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
        No more new titles will happen in this universe since Disney acquired both Marvel and Fox.
        The X-Men IP will likely continue in the MCU.
      </p>
      <p>The Fantastic Four IP shares the exact same history and future as the X-Men.</p>
    {/if}
    {#if $tooltip === 'ssu'}
      <h2>Sony's Spider-Man Universe</h2>
      <p>
        In 1999 Marvel sold film rights of Spider-Man related characters to SONY, who still own them
        now.
      </p>
      <p>
        Except the Tom Holland collaboration with Marvel Studios, SONY/Columbia mostly created
        standalone franchises with these characters. Recently, however, inspired by the success of
        MCU, SONY is planning this new Spider-Man universe that integrates more characters.
      </p>
      <p>
        Side note: not to be confused with SONY's Spider-Verse series which is a recent trilogy of
        animated feature films.
      </p>
    {/if}
    {#if $tooltip === 'show-minor-chars'}
      <div>show-minor-chars</div>
    {/if}
  </div>
</div>

<style>
  .component {
    width: 80%;
    border: 3px solid var(--blue);
    background-color: #222;
    padding: 5px 17px;

    /* center in viewport */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    margin: 15px 0px;
    font-size: 21px;
    font-weight: 300;
  }
  p {
    margin: 15px 0px;
    line-height: 1.4;
    font-size: 16px;
    font-weight: 300;
  }
</style>
