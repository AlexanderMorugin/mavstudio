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
  top: 300px;
  left: 12%;

  &__trapezoid {
    position: relative;
    width: 115px;
    height: 125px;
    transform: skew(20deg);
    border-bottom: 1px solid $orange-four;
    border-left: 1px solid $orange-four;
    border-right: none;
  }

  &__text {
    position: absolute;
    bottom: 4px;
    left: 12px;
    transform: skew(-20deg);
    font-size: 14px;
    color: $orange-four;
  }
}
</style>
