<template>
  <div class="cardBlockUiHeader">
    <IconConstruction
      v-if="props.cms"
      class="cardBlockUiHeader__icon cardBlockUiHeader__icon_cms"
    />
    <IconStarKidFill v-if="!props.cms" class="cardBlockUiHeader__icon" />
    <div class="cardBlockUiHeader__textBlock">
      <CardBlockUiLine />
      <CardBlockUiLine />
    </div>
    <div class="cardBlockUiHeader__textBlock">
      <CardBlockUiLine />
      <CardBlockUiLine />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cms?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiHeader {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background-image: linear-gradient(
    to right,
    $black-mask-three,
    $black-mask-three,
    $white-mask-five,
    $black-mask-three,
    $black-mask-three
  );
  border-radius: $br-xxs;
  padding: 8px 10px 8px 30px;
  overflow: hidden;

  animation: background-fade 20s linear infinite;
  background-size: 800%;
  -webkit-animation: background-fade 20s linear infinite;
  -moz-animation: background-fade 20s linear infinite;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-mask-three;

    &_cms {
      fill: $white-one;
    }
  }
}

@keyframes background-fade {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
