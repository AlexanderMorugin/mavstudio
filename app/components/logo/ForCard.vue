<template>
  <div class="logoForCard">
    <img src="/img/logo/logo.png" alt="MavStudio" class="logoForCard__icon" />
  </div>
</template>

<style lang="scss" scoped>
.logoForCard {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: $br-xs;
  border: 1px solid $white-mask-three;
  background: $white-mask-four;
  padding: 5px;

  @media (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 389px) {
    width: 30px;
    height: 30px;
  }

  &__icon {
    width: 40px;
    transition: 0.2s ease;

    @media (max-width: 1023px) {
      width: 34px;
    }

    @media (max-width: 389px) {
      width: 28px;
    }
  }
}
</style>
