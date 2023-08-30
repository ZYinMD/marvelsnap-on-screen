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
    --color1: hsl(250, 100%, 8%);
    --color4: hsl(310, 100%, 10%);
    --color3: hsl(230, 100%, 6%);
    --color2: hsl(270, 100%, 10%);
    --color5: hsl(290, 100%, 8%);
    /* perspective: 160vh; */
  }
  .bg {
    background-image: linear-gradient(
      -85deg,
      var(--color1) 0%,
      var(--color1) 20%,

      var(--color2) 21%,
      var(--color2) 40%,

      var(--color3) 41%,
      var(--color3) 60%,

      var(--color4) 61%,
      var(--color4) 80%,

      var(--color5) 81%,
      var(--color5) 100%
    );
    position: fixed;
    top: -20vh;
    bottom: -40vh;
    left: -60%;
    opacity: 0.6;
    right: -60%;
    z-index: -1;
    mix-blend-mode: hue;
    animation: slide 20s ease-in-out infinite alternate;
    /* transform-origin: center; */
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 23s;
    animation-delay: -12s;
    /* rotate: x 5deg; */
  }

  .bg3 {
    animation-duration: 29s;
    animation-delay: -15s;
    transform-origin: bottom;
    /* rotate: x 10deg; */
  }
  .bg4 {
    animation-direction: alternate-reverse;
    animation-duration: 31s;
    animation-delay: -10s;
    /* rotate: x 15deg; */
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%) rotateZ(5deg);
    }
    50% {
      transform: translateX(0) rotateZ(-5deg);
    }
    100% {
      transform: translateX(25%) rotateZ(5deg);
    }
  }
</style>
