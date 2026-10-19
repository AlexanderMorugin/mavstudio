<template>
  <div class="cardIndicatorForHeader">
    <div class="cardIndicatorForHeader__trapezoid">
      <span class="cardIndicatorForHeader__text">шапка сайта</span>
      <CardIndicatorPoint isHeader />
      <!-- <div class="cardIndicatorForHeader__point" /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardIndicatorForHeader {
  position: absolute;
  top: 6px;
  left: 20%;
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

  // &__point {
  //   position: absolute;
  //   bottom: -10px;
  //   left: -10px;
  //   display: flex;
  //   transform: skew(20deg);
  //   width: 20px;
  //   height: 20px;
  //   border-radius: 50%;
  //   background: $orange-one;
  // }
}
</style>
