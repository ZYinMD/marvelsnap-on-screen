<script lang="ts">
  export let data;
</script>

<div class="component">
  <img src={`/card-images/${data.cardId}.webp`} alt={data.cardId} />
</div>

<style>
  .component {
    position: fixed;
    top: 100px;
    left: 100px;
    height: 50vh;
    width: 50vw;
  }
</style>
