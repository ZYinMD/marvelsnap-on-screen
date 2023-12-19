<script lang="ts">
  export let data;
</script>

<div class="component">{data.cardId}</div>

<style>
  .component {
    position: fixed;
    top: 100px;
    left: 100px;
    height: 50vh;
    width: 50vw;
  }
</style>
