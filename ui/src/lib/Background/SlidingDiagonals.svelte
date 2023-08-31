<script lang="ts">
</script>

<!-- @component inspired by https://codepen.io/chris22smith/pen/RZogMa -->
<div class="container">
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <div class="bg bg4"></div>
  <div class="bg bg5"></div>
  <div class="bg bg6"></div>
</div>

<style>
  .container {
    grid-area: only;
    --color1: hsl(270, 100%, 10%);
    --color2: hsl(250, 100%, 8%);
    --color3: hsl(310, 100%, 8%);
    --color4: hsl(230, 100%, 8%);
    --color5: hsl(290, 100%, 10%);
    /* perspective: 160vh; */
  }
  .bg {
    background-image: linear-gradient(
      90deg,
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
    bottom: -30vh;
    left: -60%;
    opacity: 0.6;
    right: -60%;
    z-index: -1;
    mix-blend-mode: hue;
    animation: slide 17s linear infinite;
    animation-direction: alternate;
  }
  .bg:nth-child(odd) {
    animation-direction: alternate-reverse;
    scale: -1 1;
  }
  .bg2 {
    animation-duration: 20s;
    animation-delay: -12s;
  }
  .bg3 {
    animation-duration: 26s;
    animation-delay: -15s;
  }
  .bg4 {
    animation-duration: 31s;
    animation-delay: -10s;
  }
  .bg5 {
    animation-duration: 35s;
    animation-delay: -14s;
  }
  .bg6 {
    animation-direction: alternate-reverse;
    animation-duration: 17s;
    animation-delay: -6s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%) rotateZ(-6deg);
    }
    100% {
      transform: translateX(25%) rotateZ(6deg);
    }
  }
</style>
