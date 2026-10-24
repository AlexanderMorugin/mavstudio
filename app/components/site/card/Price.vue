<template>
  <div class="siteCardPrice">
    <div>
      <span class="siteCardPrice__text">от&nbsp;</span>
      <span class="siteCardPrice__accent">100 000</span>
      <span class="siteCardPrice__text">&nbsp;₽</span>
    </div>
    <!-- <div> -->
    <NuxtLink to="/price" class="siteCardPrice__link">цены подробнее</NuxtLink>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.siteCardPrice {
  position: absolute;
  bottom: -30px;
  right: -10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // gap: 10px;
  // justify-content: flex-end;

  // border: 1px solid red;

  @media (max-width: 767px) {
    right: 0;
  }

  &__text {
    font-size: 24px;
    color: $red-two;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__accent {
    font-family: "Montserrat-bold", sans-serif;
    font-size: 32px;
    color: $red-one;

    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__link {
    font-size: 14px;
    line-height: 1.5;
    color: $red-four;
    // text-align: right;
    border-bottom: 1px dashed $red-four;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    &:hover {
      color: $white-one;
    }
  }
}
</style>
