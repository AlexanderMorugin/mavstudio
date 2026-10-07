<template>
  <div class="heroLogoBlock">
    <div class="heroLogoBlock__circle" />
    <img
      src="/img/logo/logo-pencil.svg"
      alt="pencil"
      class="heroLogoBlock__pencil"
    />
    <IconArrowIos class="heroLogoBlock__arrow heroLogoBlock__arrow_prev" />
    <IconArrowIos class="heroLogoBlock__arrow heroLogoBlock__arrow_next" />
  </div>
</template>

<style lang="scss" scoped>
.heroLogoBlock {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-top: 100px;

  // border: 1px solid red;

  &__circle {
    // position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: $white-one;
    animation: circle 1.5s;
  }

  &__pencil {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 100px;
    animation: pencil 2.5s;
  }

  &__arrow {
    position: absolute;
    top: 42%;
    width: 90px;
    height: 90px;
    fill: $orange-one;

    &_prev {
      left: 10%;
      transform: rotate(180deg);
      animation: from-left 2.7s;
    }

    &_next {
      right: 14%;
      animation: from-right 2.9s;
    }
  }
}

@keyframes circle {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
  }
}

@keyframes pencil {
  0% {
    opacity: 0;
    transform: translate(100px, -300px);
  }
  55% {
    opacity: 0;
    transform: translate(100px, -300px) rotate(57deg);
  }
  65% {
    opacity: 1;
    transform: translate(100px, 0px) rotate(47deg);
  }
  85% {
    opacity: 1;
    transform: translate(100px, -300px) rotate(37deg);
  }
  100% {
    opacity: 1;
  }
}
@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  90% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(180deg);
  }
}
@keyframes from-right {
  0% {
    opacity: 0;
    transform: translateX(100%) rotate(-180deg);
  }
  80% {
    opacity: 0;
    transform: translateX(100%) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
