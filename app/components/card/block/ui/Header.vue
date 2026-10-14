<template>
  <div class="cardBlockUiHeader">
    <IconStarKidFill class="cardBlockUiHeader__icon" />
    <div class="cardBlockUiHeader__textBlock">
      <div class="cardBlockUiHeader__line" />
      <div class="cardBlockUiHeader__line" />
    </div>
    <div class="cardBlockUiHeader__textBlock">
      <div class="cardBlockUiHeader__line" />
      <div class="cardBlockUiHeader__line" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiHeader {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background: $black-mask-three;
  padding: 8px 10px 8px 30px;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__line {
    width: 100%;
    height: 2px;
    background: $white-one;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-one;
  }
}
</style>
