<template>
  <div class="cardBlockUiCmsContentButton">
    <CardBlockUiIconInCircle
      :image="props.image"
      :imageFill="props.imageFill"
    />
    <div class="cardBlockUiCmsContentButton__text">
      <CardBlockUiLine animate-one textWhite />
      <CardBlockUiLine animate-two textWhite />
      <CardBlockUiLine animateThree textOrange />
      <CardBlockUiLine animate-two textOrange />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  imageFill: string;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiCmsContentButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  // background: $white-mask-four;
  border-radius: $br-xxs;
  border: 1px solid $white-mask-four;
  min-height: 60px;
  padding: 6px;

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }
}
</style>
