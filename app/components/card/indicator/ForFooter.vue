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
  left: 51%;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__trapezoid {
    position: relative;
    width: 130px;
    height: 100px;
    transform: skew(20deg);
    border-bottom: 1px solid $orange-one;
    border-left: 1px solid $orange-one;
  }

  &__text {
    position: absolute;
    bottom: 3px;
    left: 12px;
    transform: skew(-20deg);
  }
}
</style>
