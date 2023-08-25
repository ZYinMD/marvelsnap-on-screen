<script lang="ts">
  export let data;
</script>

<div class="container">{data.card}</div>

<style>
  .container {
    position: fixed;
    top: 100px;
    left: 100px;
    height: 50vh;
    width: 50vw;
  }
</style>
