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
  left: 40%;
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

  // &__point {
  //   position: absolute;
  //   top: -10px;
  //   left: -10px;
  //   display: flex;
  //   transform: skew(-20deg);
  //   width: 20px;
  //   height: 20px;
  //   border-radius: 50%;
  //   background: $orange-one;
  // }
}
</style>
