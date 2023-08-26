<!-- @component the rotating background  -->
<div class="container">
  <div class="background rotate"></div>
</div>

<style>
  .container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
  }
  .background {
    --color1: rgb(0, 72, 56);
    --color2: rgb(67, 31, 0);
    --color3: rgb(69, 0, 64);
    --color4: rgb(7, 0, 73);
    width: max(100vw, 100vh);
    height: max(100vw, 100vh);
    transform-origin: center;
    scale: 1.5;
    background: linear-gradient(to bottom, var(--color1), var(--color2));
  }

  .background::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background: linear-gradient(to bottom, var(--color3), var(--color4));
    -webkit-mask-image: linear-gradient(to left, var(--color4), transparent);
    mask-image: linear-gradient(to left, var(--color4), transparent);
  }
  .rotate {
    animation: rotate 50s linear infinite;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
</style>
