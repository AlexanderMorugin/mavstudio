<template>
  <div class="siteExampleUiMainHeroLogo">
    <div class="siteExampleUiMainHeroLogo__square" />
    <img
      src="/img/logo/logo-pencil.svg"
      alt="pencil"
      class="siteExampleUiMainHeroLogo__pencil"
    />
    <IconArrowIos
      class="siteExampleUiMainHeroLogo__arrow siteExampleUiMainHeroLogo__arrow_prev"
    />
    <IconArrowIos
      class="siteExampleUiMainHeroLogo__arrow siteExampleUiMainHeroLogo__arrow_next"
    />
  </div>
</template>

<style lang="scss" scoped>
.siteExampleUiMainHeroLogo {
  // position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  // border: 1px solid red;

  @media (max-width: 389px) {
    width: 150px;
    height: 150px;
    margin-top: 70px;
  }

  &__square {
    width: 200px;
    height: 200px;
    border-radius: 14px;
    backdrop-filter: blur(15px);
    padding: 5px;
    // width: 100%;
    // height: 100%;
    // border-radius: 50%;
    // background: $white-one;
    animation: spin 7s linear infinite;

    @media (max-width: 576px) {
      width: 100px;
      height: 100px;
    }
  }

  &__pencil {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 50px;

    // @media (max-width: 767px) {
    //   width: 60px;
    // }

    @media (max-width: 576px) {
      top: 55%;
      width: 35px;
    }

    // @media (max-width: 389px) {
    //   width: 40px;
    // }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    fill: $orange-one;

    // @media (max-width: 767px) {
    //   top: 43%;
    //   width: 60px;
    //   height: 60px;
    // }

    @media (max-width: 576px) {
      top: 50%;
      width: 25px;
      height: 25px;
    }

    // @media (max-width: 389px) {
    //   width: 35px;
    //   height: 35px;
    // }

    &_prev {
      left: 20%;
      transform: rotate(180deg);
      animation: arrow-left 3s linear infinite;

      @media (max-width: 576px) {
        left: 15%;
      }

      // @media (max-width: 389px) {
      //   left: 18%;
      // }
    }

    &_next {
      right: 24%;
      animation: arrow-right 3s linear infinite;
      animation-delay: 0.8s;

      @media (max-width: 576px) {
        right: 19%;
      }

      // @media (max-width: 389px) {
      //   right: 21%;
      // }
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0);
    border: 1px solid $white-mask-one;
  }
  50% {
    border: 1px solid $orange-mask-two;
  }
  100% {
    transform: rotate(180deg);
    border: 1px solid $white-mask-one;
  }
}
@keyframes arrow-left {
  0% {
    transform: rotate(180deg);
  }
  5% {
    transform: translateX(-20px) rotate(160deg) scale(0.2);
  }
  15% {
    transform: rotate(180deg);
  }
}
@keyframes arrow-right {
  5% {
    transform: translateX(10px) rotate(20deg) scale(0.2);
  }
  15% {
    transform: translateX(0) rotate(0) scale(1);
  }
}
</style>
