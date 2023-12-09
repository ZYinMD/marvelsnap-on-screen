<!-- @component the rotating background  -->
<div class="component">
  <div class="background rotate"></div>
</div>

<style>
  .component {
    grid-area: the-only;
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  .background {
    --color1: rgb(42, 0, 122);
    --color2: rgb(26, 0, 58);
    --color3: rgb(0, 66, 97);
    --color4: rgb(96, 0, 40);
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
    animation: rotate 25s linear infinite;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
</style>
