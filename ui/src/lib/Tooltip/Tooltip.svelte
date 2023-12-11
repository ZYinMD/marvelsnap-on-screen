<script lang="ts">
  import { tooltip } from '../stores/writables/$primary';
  import { outClickListener } from '../use/outClickListener';
  import { handleOutClick } from '../stores/derived/$handleOutClick';
</script>

<!-- @component to render the modal if there's any tooltip that should currently be showing -->
<div class="component" use:outClickListener on:outClick={$handleOutClick}>
  {#if $tooltip === 'mcu'}
    <div>mcu</div>
  {/if}
  {#if $tooltip === 'x-men'}
    <div>mcu x-men</div>
  {/if}
  {#if $tooltip === 'ssu'}
    <div>ssu</div>
  {/if}
  {#if $tooltip === 'sequel'}
    <div>sequel</div>
  {/if}
  {#if $tooltip === 'netflix'}
    <div>sequel</div>
  {/if}
  {#if $tooltip === 'show-minor-chars'}
    <div>show-minor-chars</div>
  {/if}
</div>

<style>
  .component {
    width: 100px;
    height: 100px;
    border: 1px solid silver;
    background-color: #333;

    /* center in viewport */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
