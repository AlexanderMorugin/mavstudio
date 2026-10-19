<template>
  <div
    :class="[
      'cardBlockUiCmsContentButton',
      { cardBlockUiCmsContentButton_page: props.isPage },
    ]"
  >
    <CardBlockUiIconInCircle
      :image="props.image"
      :imageFill="props.imageFill"
    />
    <div class="cardBlockUiCmsContentButton__text">
      <CardBlockUiLine v-if="!props.isPage" animate-one textWhite />
      <CardBlockUiLine v-if="!props.isPage" animate-two textWhite />
      <CardBlockUiLine v-if="!props.isPage" animateThree textOrange />
      <CardBlockUiLine v-if="!props.isPage" animate-two textOrange />

      <span v-if="props.isPage" class="cardBlockUiCmsContentButton__word"
        >редактировать</span
      >
      <span v-if="props.isPage" class="cardBlockUiCmsContentButton__word"
        >сайт</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  imageFill: string;
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiCmsContentButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: $br-xxs;
  border: 1px solid $white-mask-four;
  min-height: 60px;
  padding: 6px;

  &_page {
    border: 1px solid $orange-two;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__word {
    font-size: 14px;
    text-align: center;
    color: $white-mask-one;

    @media (max-width: 576px) {
      font-size: 12px;
    }

    @media (max-width: 389px) {
      font-size: 10px;
    }
  }
}
</style>
