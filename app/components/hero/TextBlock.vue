<template>
  <div class="heroTextBlock">
    <div class="heroTextBlock__container">
      <span class="heroTextBlock__letter heroTextBlock__letter_m">M</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_a">a</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_v">v</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_s">S</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_t">t</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_u">u</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_d">d</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_i">i</span>
      <span class="heroTextBlock__letter heroTextBlock__letter_o">o</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heroTextBlock {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 360px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  // border: 1px solid red;

  &__container {
    display: flex;
    justify-content: center;
    width: 700px;
    height: 160px;

    // border: 1px solid green;
  }

  &__letter {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 180px;
    line-height: 1;
    letter-spacing: -6%;
    color: $white-mask-two;
    text-shadow: 1px 1px $blue-one;

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
    // opacity: 0;
    transform: translateY(100%);
    color: $white-mask-two;
  }
  50% {
    opacity: 1;
    transform: translateY(-100%);
    color: $white-mask-two;
  }
  60% {
    // opacity: 1;
    transform: translateY(30%);
    color: $white-mask-two;
  }
  65% {
    // opacity: 1;
    transform: translateY(-15%);
    color: $white-mask-two;
  }
  70% {
    color: $orange-one;
  }
  80% {
    // opacity: 1;
    transform: translateY(15%);
    color: $orange-one;
  }
  100% {
    // opacity: 1;
    transform: translateY(0);
    color: $orange-one;
  }
}

@keyframes pop-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  40% {
    // opacity: 0;
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-100%);
  }
  70% {
    // opacity: 1;
    transform: translateY(10%);
  }
  100% {
    // opacity: 1;
    transform: translateY(0);
  }
}
</style>
