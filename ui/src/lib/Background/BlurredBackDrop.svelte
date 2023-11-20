<script lang="ts">
</script>

<!-- @component a transparent div that covers the whole screen and turns everything underneath it blurred. This is typically used together with a modal.
My sort (bottom left) and filter (bottom right) menus use it.
I didn't add any z-index, but this is usually rendered before the modal, under the same parent. The stacking context will probably make it cover everything else, except the modal. Since z-index only works in the same stacking context, there's no point adding it to the backdrop.
-->
<div class="container"></div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 50%);
    backdrop-filter: blur(3.5px) brightness(80%);
  }
</style>
