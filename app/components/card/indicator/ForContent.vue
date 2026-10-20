<template>
  <div class="cardIndicatorForContent">
    <div class="cardIndicatorForContent__trapezoid">
      <span class="cardIndicatorForContent__text">контент сайта</span>
      <CardIndicatorPoint isContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardIndicatorForContent {
  position: absolute;
  // top: 210px;
  // left: -150px;

  // @media (max-width: 767px) {
  // top: 240px;
  top: 300px;
  left: 12%;
  // }

  &__trapezoid {
    position: relative;
    // width: 150px;
    // height: 80px;
    // transform: skew(-30deg);
    // border-bottom: 1px solid $orange-one;
    // border-right: 1px solid $orange-one;

    // @media (max-width: 767px) {
    width: 115px;
    height: 125px;
    transform: skew(20deg);
    border-bottom: 1px solid $orange-one;
    border-left: 1px solid $orange-one;
    border-right: none;
    // }
  }

  &__text {
    position: absolute;
    bottom: 4px;
    // left: 4px;
    // transform: skew(30deg);

    // @media (max-width: 767px) {
    left: 12px;
    transform: skew(-20deg);
    font-size: 14px;
    color: $grey-two;
    // }
  }
}
</style>
