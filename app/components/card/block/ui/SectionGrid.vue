<template>
  <div
    :class="[
      'cardBlockUiSectionGrid',
      { cardBlockUiSectionGrid_two: props.twoGrid },
      { cardBlockUiSectionGrid_three: props.threeGrid },
    ]"
  >
    <div
      :class="[
        'cardBlockUiSectionGrid__box',
        { cardBlockUiSectionGrid__box_page: props.isPage },
      ]"
    >
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgOne"
          :imageFill="props.imgOneFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-one
            :textOrange="props.textOrange"
          />
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-two
            :textOrange="props.textOrange"
          />

          <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
            >текст</span
          >
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine v-if="!props.isPage" animateFooter />
        <CardBlockUiLine v-if="!props.isPage" animateFooter />

        <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
          >описание блока</span
        >
      </div>
    </div>

    <div
      v-if="props.twoGrid || props.threeGrid"
      :class="[
        'cardBlockUiSectionGrid__box',
        { cardBlockUiSectionGrid__box_page: props.isPage },
      ]"
    >
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgTwo"
          :imageFill="props.imgTwoFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-one
            :textOrange="props.textOrange"
          />
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-two
            :textOrange="props.textOrange"
          />

          <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
            >текст</span
          >
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine v-if="!props.isPage" animateFooter />
        <CardBlockUiLine v-if="!props.isPage" animateFooter />

        <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
          >описание блока</span
        >
      </div>
    </div>

    <div
      v-if="props.threeGrid"
      :class="[
        'cardBlockUiSectionGrid__box',
        { cardBlockUiSectionGrid__box_page: props.isPage },
      ]"
    >
      <div class="cardBlockUiSectionGrid__top">
        <CardBlockUiIconInCircle
          :image="props.imgThree"
          :imageFill="props.imgThreeFill"
        />
        <div class="cardBlockUiSectionGrid__text">
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-one
            :textOrange="props.textOrange"
          />
          <CardBlockUiLine
            v-if="!props.isPage"
            animate-two
            :textOrange="props.textOrange"
          />

          <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
            >текст</span
          >
        </div>
      </div>
      <div class="cardBlockUiSectionGrid__text">
        <CardBlockUiLine v-if="!props.isPage" animateFooter />
        <CardBlockUiLine v-if="!props.isPage" animateFooter />

        <span v-if="props.isPage" class="cardBlockUiSectionGrid__word"
          >описание блока</span
        >
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
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSectionGrid {
  display: grid;
  gap: 6px;

  &_two {
    grid-template-columns: 1fr 1fr;
  }

  &_three {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: $grey-mask-three;
    border-radius: $br-xxs;
    padding: 10px;
    overflow: hidden;

    &_page {
      background: none;
      border: 1px solid $green-two;
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

  &__word {
    font-size: 14px;
    color: $white-mask-one;
    text-align: center;

    @media (max-width: 389px) {
      font-size: 10px;
    }
  }
}
</style>
