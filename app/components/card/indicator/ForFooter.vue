<template>
  <div class="cardIndicatorForFooter">
    <div class="cardIndicatorForFooter__trapezoid">
      <span class="cardIndicatorForFooter__text">подвал сайта</span>
      <CardIndicatorPoint isFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardIndicatorForFooter {
  position: absolute;
  top: 365px;
  right: 20%;

  &__trapezoid {
    position: relative;
    width: 115px;
    height: 100px;
    transform: skew(-20deg);
    border-bottom: 1px solid $blue-four;
    border-right: 1px solid $blue-four;
  }

  &__text {
    position: absolute;
    bottom: 3px;
    left: 2px;
    transform: skew(20deg);
    font-size: 14px;
    color: $blue-four;
  }
}
</style>
