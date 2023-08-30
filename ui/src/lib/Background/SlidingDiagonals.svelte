<script lang="ts">
</script>

<!-- @component inspired by https://codepen.io/chris22smith/pen/RZogMa -->
<div class="container">
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <div class="bg bg4"></div>
</div>

<style>
  .container {
    grid-area: only;
    --color1: hsl(230, 100%, 8%);
    --color2: hsl(280, 100%, 12%);
    --color3: hsl(250, 100%, 8%);
    --color4: hsl(310, 100%, 12%);
  }
  .bg {
    background-image: linear-gradient(
      -80deg,
      var(--color1) 0%,
      var(--color1) 25%,

      var(--color2) 26%,
      var(--color2) 50%,

      var(--color3) 51%,
      var(--color3) 75%,

      var(--color4) 76%,
      var(--color4) 100%
    );
    bottom: 0;
    left: -50%;
    opacity: 0.6;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
    mix-blend-mode: hue;
    animation: slide 19s ease-in-out infinite alternate;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 23s;
    animation-delay: -10s;
  }

  .bg3 {
    animation-duration: 29s;
    animation-delay: -10s;
  }
  .bg4 {
    animation-direction: alternate-reverse;
    animation-duration: 31s;
    animation-delay: -5s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
</style>
