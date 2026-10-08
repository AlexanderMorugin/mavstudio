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

  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 389px) {
    width: 150px;
    height: 150px;
    margin-top: 70px;
  }

  &__circle {
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

    @media (max-width: 767px) {
      width: 60px;
    }

    @media (max-width: 576px) {
      top: 55%;
      width: 50px;
    }

    @media (max-width: 389px) {
      width: 40px;
    }
  }

  &__arrow {
    position: absolute;
    top: 42%;
    width: 90px;
    height: 90px;
    fill: $orange-one;

    @media (max-width: 767px) {
      top: 43%;
      width: 60px;
      height: 60px;
    }

    @media (max-width: 576px) {
      top: 50%;
      width: 45px;
      height: 45px;
    }

    @media (max-width: 389px) {
      width: 35px;
      height: 35px;
    }

    &_prev {
      left: 10%;
      transform: rotate(180deg);
      animation: from-left 2.7s;

      @media (max-width: 576px) {
        left: 20%;
      }

      @media (max-width: 389px) {
        left: 18%;
      }
    }

    &_next {
      right: 14%;
      animation: from-right 2.9s;

      @media (max-width: 576px) {
        right: 22%;
      }

      @media (max-width: 389px) {
        right: 21%;
      }
    }
  }
}

@keyframes circle {
  0% {
    opacity: 0;
    transform: scale(0);
    background: $orange-one;
  }
  50% {
    opacity: 1;
    background: $orange-one;
  }
  100% {
    background: $white-one;
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
