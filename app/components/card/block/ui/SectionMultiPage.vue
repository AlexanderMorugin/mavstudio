<template>
  <div class="cardBlockUiSectionMultiPage">
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_orange"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="1"
        numberColor="orange"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine animate-one textBlue />
        <CardBlockUiLine animate-two textBlue />
        <CardBlockUiLine animate-three textBlue />
      </div>

      <CardBlockUiSidebarButton multipage />
    </div>
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_white"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="2"
        numberColor="white"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine animate-one textBlue />
        <CardBlockUiLine animate-two textBlue />
        <CardBlockUiLine animate-three textBlue />
      </div>
      <CardBlockUiSidebarButton multipage />
    </div>
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_green"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="3"
        numberColor="green"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine animate-one textBlue />
        <CardBlockUiLine animate-two textBlue />
        <CardBlockUiLine animate-three textBlue />
      </div>
      <CardBlockUiSidebarButton multipage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiSectionMultiPage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  height: 63%;
  padding-top: 6px;
  padding-bottom: 6px;

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: $br-xxs;
    padding: 10px;

    &_orange {
      background: $orange-mask-two;
    }
    &_green {
      background: $green-mask-two;
    }
    &_white {
      background: $white-mask-two;
    }
  }

  &__top {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 10px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }
}
</style>
