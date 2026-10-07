<template>
  <div class="heroTitleBlock">
    <div class="heroTitleBlock__container">
      <span class="heroTitleBlock__letter heroTitleBlock__letter_m">M</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_a">a</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_v">v</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_s">S</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_t">t</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_u">u</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_d">d</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_i">i</span>
      <span class="heroTitleBlock__letter heroTitleBlock__letter_o">o</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heroTitleBlock {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 360px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  // border: 1px solid red;

  @media (max-width: 767px) {
    bottom: -24px;
  }

  @media (max-width: 390px) {
    bottom: -36px;
    // height: 170px;
  }

  &__container {
    display: flex;
    justify-content: center;
    width: 700px;
    height: 160px;

    // border: 1px solid green;

    @media (max-width: 767px) {
      height: 96px;
    }

    @media (max-width: 390px) {
      height: 74px;
    }
  }

  &__letter {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 180px;
    line-height: 1;
    letter-spacing: -6%;
    color: $white-mask-two;
    text-shadow: 1px 1px $blue-one;

    @media (max-width: 767px) {
      font-size: 110px;
    }

    @media (max-width: 390px) {
      font-size: 84px;
    }

    &_m {
      animation: pop-up 3.5s;
    }

    &_a {
      animation: pop-up 3.3s;
    }

    &_v {
      animation: pop-up 3.2s;
    }

    &_s {
      animation: pop-up-second 3.6s;
      color: $orange-one;
    }

    &_t {
      animation: pop-up 3.1s;
    }

    &_u {
      animation: pop-up 3.8s;
    }

    &_d {
      animation: pop-up 3.4s;
    }

    &_i {
      animation: pop-up 3s;
    }

    &_o {
      animation: pop-up 3.1s;
    }
  }
}

@keyframes pop-up-second {
  0% {
    opacity: 0;
    transform: translateY(100%);
    color: $white-mask-two;
  }
  30% {
    transform: translateY(100%);
    color: $white-mask-two;
  }
  50% {
    opacity: 1;
    transform: translateY(-100%);
    color: $white-mask-two;
  }
  60% {
    transform: translateY(30%);
    color: $white-mask-two;
  }
  65% {
    transform: translateY(-15%);
    color: $white-mask-two;
  }
  70% {
    color: $orange-one;
  }
  80% {
    transform: translateY(15%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes pop-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  40% {
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-100%);
  }
  70% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
