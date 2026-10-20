<template>
  <div class="cardIndicatorForHeader">
    <div class="cardIndicatorForHeader__trapezoid">
      <span class="cardIndicatorForHeader__text">шапка сайта</span>
      <CardIndicatorPoint isHeader />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardIndicatorForHeader {
  position: absolute;
  top: 8px;
  left: 26%;

  &__trapezoid {
    position: relative;
    width: 110px;
    height: 100px;
    transform: skew(-20deg);
    border-top: 1px solid $green-four;
    border-left: 1px solid $green-four;
  }

  &__text {
    position: absolute;
    top: -20px;
    right: 12px;
    transform: skew(20deg);
    font-size: 14px;
    color: $green-four;
  }
}
</style>
