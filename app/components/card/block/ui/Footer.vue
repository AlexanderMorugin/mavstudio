<template>
  <div class="cardBlockUiFooter">
    <div class="cardBlockUiFooter__textBlock">
      <div class="cardBlockUiFooter__line" />
      <div class="cardBlockUiFooter__line" />
    </div>
    <div class="cardBlockUiFooter__textBlock">
      <div class="cardBlockUiFooter__line" />
      <div class="cardBlockUiFooter__line" />
    </div>

    <IconStar class="cardBlockUiFooter__icon" />
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background: $black-mask-three;
  padding: 8px 10px 8px 20px;

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
