<template>
  <div
    :class="[
      'cardBlockUiSectionGrid',
      { cardBlockUiSectionGrid_two: props.twoGrid },
      { cardBlockUiSectionGrid_three: props.threeGrid },
    ]"
  >
    <div class="cardBlockUiSectionGrid__box">
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgOne"
          :imageFill="props.imgOneFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine animate-one :textOrange="props.textOrange" />
          <CardBlockUiLine animate-two :textOrange="props.textOrange" />
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine animateFooter />
        <CardBlockUiLine animateFooter />
      </div>
    </div>

    <div
      v-if="props.twoGrid || props.threeGrid"
      class="cardBlockUiSectionGrid__box"
    >
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgTwo"
          :imageFill="props.imgTwoFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine animate-one :textOrange="props.textOrange" />
          <CardBlockUiLine animate-two :textOrange="props.textOrange" />
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine animateFooter />
        <CardBlockUiLine animateFooter />
      </div>
    </div>

    <div v-if="props.threeGrid" class="cardBlockUiSectionGrid__box">
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgThree"
          :imageFill="props.imgThreeFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine animate-one :textOrange="props.textOrange" />
          <CardBlockUiLine animate-two :textOrange="props.textOrange" />
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine animateFooter />
        <CardBlockUiLine animateFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  twoGrid?: boolean;
  threeGrid?: boolean;
  imgOne?: string;
  imgOneFill?: string;
  imgTwo?: string;
  imgTwoFill?: string;
  imgThree?: string;
  imgThreeFill?: string;
  textOrange?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSectionGrid {
  display: grid;

  &_two {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  &_three {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: $black-mask-two;
    border-radius: $br-xxs;
    padding: 10px;
    overflow: hidden;
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
