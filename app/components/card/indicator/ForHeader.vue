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
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__trapezoid {
    position: relative;
    width: 130px;
    height: 100px;
    transform: skew(-20deg);
    border-top: 1px solid $orange-one;
    border-left: 1px solid $orange-one;
  }

  &__text {
    position: absolute;
    top: -20px;
    left: 10px;
    transform: skew(20deg);
  }
}
</style>
