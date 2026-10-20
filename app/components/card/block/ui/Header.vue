<template>
  <div :class="['cardBlockUiHeader', { cardBlockUiHeader_page: props.isPage }]">
    <IconConstruction
      v-if="props.cms"
      class="cardBlockUiHeader__icon cardBlockUiHeader__icon_cms"
    />
    <IconStarKidFill v-if="!props.cms" class="cardBlockUiHeader__icon" />
    <div v-if="!props.isPage" class="cardBlockUiHeader__textBlock">
      <CardBlockUiLine />
      <CardBlockUiLine />
    </div>
    <div v-if="!props.isPage" class="cardBlockUiHeader__textBlock">
      <CardBlockUiLine />
      <CardBlockUiLine />
    </div>

    <span v-if="props.isPage" class="cardBlockUiHeader__text">{{
      props.cms ? "управление" : "слова навигации"
    }}</span>
    <span v-if="props.isPage" class="cardBlockUiHeader__text">{{
      props.cms ? "" : "контакты"
    }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cms?: boolean;
  isPage?: boolean;
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
    $grey-mask-three,
    $grey-mask-three,
    $white-mask-one,
    $grey-mask-three,
    $grey-mask-three
  );
  border-radius: $br-xxs;
  padding: 8px 10px 8px 30px;
  overflow: hidden;
  animation: background-fade 20s linear infinite;
  background-size: 800%;
  -webkit-animation: background-fade 20s linear infinite;
  -moz-animation: background-fade 20s linear infinite;

  &_page {
    display: flex;
    background: transparent;
    border-top-left-radius: $br-xs;
    border-top-right-radius: $br-xs;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    // border-top: 1px solid $green-four;
    // border-left: 1px solid $green-four;
    // border-right: 1px solid $green-four;
    border: 1px solid $green-four;
    padding: 10px;
    animation: none;
    -webkit-animation: none;
    -moz-animation: none;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__text {
    font-size: 14px;
    color: $white-mask-one;

    @media (max-width: 389px) {
      font-size: 10px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $red-mask-one;

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
