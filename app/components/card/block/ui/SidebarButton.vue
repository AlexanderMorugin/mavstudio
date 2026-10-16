<template>
  <div class="cardBlockUiSidebarButton">
    <div class="cardBlockUiSidebarButton__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
    </div>

    <IconArrowDouble class="cardBlockUiSidebarButton__icon" />
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiSidebarButton {
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  gap: 6px;
  background: $black-mask-two;
  border-radius: $br-xxs;
  padding: 8px;

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-one;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    // overflow: hidden;
  }
}
</style>
