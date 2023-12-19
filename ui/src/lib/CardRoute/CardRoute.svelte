<script lang="ts">
  export let cardId: string;
</script>

<!-- @component  -->
<div class="component"><img src={`/card-images/${cardId}.webp`} alt={cardId} /></div>

<style>
  .component {
    position: fixed;
    top: 100px;
    left: 100px;
    height: 50vh;
    width: 50vw;
  }
</style>
