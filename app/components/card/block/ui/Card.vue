<template>
  <div class="cardBlockUiCard">
    <div v-if="props.normal" class="cardBlockUiCard__grid">
      <IconLandScapeFill
        v-if="props.landing"
        class="cardBlockUiCard__iconBig"
      />
      <div class="cardBlockUiCard__textBlock">
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
      </div>
    </div>

    <div
      v-if="props.large"
      class="cardBlockUiCard__grid cardBlockUiCard__grid_large"
    >
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconLeafFill v-if="props.landing" class="cardBlockUiCard__icon" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
      </div>
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconRocketFill v-if="props.landing" class="cardBlockUiCard__icon" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
      </div>
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconPlantFill v-if="props.landing" class="cardBlockUiCard__icon" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
        <div class="cardBlockUiCard__line" />
      </div>
    </div>

    <div class="cardBlockUiCard__textBlock">
      <div class="cardBlockUiCard__line" />
      <div class="cardBlockUiCard__line" />
      <div v-if="props.normal" class="cardBlockUiCard__line" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  normal?: boolean;
  large?: boolean;
  landing?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiCard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: $black-mask-three;
  padding: 8px;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &_large {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    &_center {
      align-items: center;
    }
  }

  &__line {
    width: 100%;
    height: 2px;
    background: $white-one;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: $white-one;
  }

  &__iconBig {
    width: 28px;
    height: 28px;
    fill: $white-one;
  }
}
</style>
