<template>
  <NuxtLink to="/" title="На главную" class="logoForHeader">
    <div class="logoForHeader__circle">
      <img src="/img/logo/logo.png" alt="Лого" class="logoForHeader__icon" />
    </div>
    <div class="logoForHeader__text">
      <span>Mav</span>
      <span class="logoForHeader__accent">S</span>
      <span>tudio</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logoForHeader {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 5px;
  }

  &__circle {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: $white-one;

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }

  &__icon {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 28px;

    @media (max-width: 767px) {
      width: 24px;
    }
  }

  &__text {
    font-family: "Oswald-Medium", sans-serif;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -4%;
    color: $white-mask-one;

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }

  &__accent {
    color: $orange-one;
  }
}
</style>
