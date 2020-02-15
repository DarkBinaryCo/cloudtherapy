<style>
  /* Loader borrowed from : https://codepen.io/uchardon/pen/VEBbdw */
  .loader {
    width: 8rem;

    transform-origin: 50% 50%;
    overflow: visible;
  }
  .loader .ci1 {
    fill: var(--loaderColor);
    animation: toBig 3s infinite -1.5s;
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }
  .loader .ciw {
    transform-box: fill-box;
    transform-origin: 50% 50%;
    animation: breath 3s infinite;
  }
  .loader .ci2 {
    fill: var(--loaderColor);
    animation: toBig2 3s infinite;
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }
  .points {
    animation: rot 3s infinite;
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(360deg);
    }
    50% {
      transform: rotate(360deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes toBig {
    0% {
      transform: scale(1) translateX(0px);
    }
    30% {
      transform: scale(1) translateX(0px);
    }
    50% {
      transform: scale(10) translateX(-4.5px);
    }
    80% {
      transform: scale(10) translateX(-4.5px);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @keyframes toBig2 {
    0% {
      transform: scale(1) translateX(0px);
    }
    30% {
      transform: scale(1) translateX(0px);
    }
    50% {
      transform: scale(10) translateX(4.5px);
    }
    80% {
      transform: scale(10) translateX(4.5px);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @keyframes breath {
    15% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.1);
    }
    65% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.1);
    }
  }
  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: local("Roboto Italic"), local("Roboto-Italic"),
      url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzc.ttf)
        format("truetype");
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: local("Roboto"), local("Roboto-Regular"),
      url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf)
        format("truetype");
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: local("Roboto Bold"), local("Roboto-Bold"),
      url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc9.ttf)
        format("truetype");
  }

  *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
    --loaderColor: #fff;
  }
</style>

<svg class="loader" viewBox="0 0 100 100">
  <g class="points">
    <circle class="ciw" cx="50" cy="50" r="50" fill="#1A2A3A" />
    <circle class="ci2" cx="5" cy="50" r="4" />
    <circle class="ci1" cx="95" cy="50" r="4" />
  </g>
</svg>
