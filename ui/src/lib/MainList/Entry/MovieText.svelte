<script lang="ts">
  export let year: string;
  export let title: string;
</script>

<!-- @component the text of movie, containing year and title -->
<div class="container">({year}) {title}</div>

<style>
  .container {
    transform: skew(-5deg);
    grid-area: text;
    height: 40px;
    display: grid;
    align-items: center;
  }
</style>
