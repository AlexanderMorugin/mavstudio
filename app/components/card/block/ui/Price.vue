<template>
  <div class="cardBlockUiPrice">
    <div
      :class="[
        'cardBlockUiPrice__container',
        { cardBlockUiPrice__container_blue: props.item.buttonColor === 'blue' },
        { cardBlockUiPrice__container_red: props.item.buttonColor === 'red' },
      ]"
    >
      <span>от</span>
      <span class="cardBlockUiPrice__number"
        >&nbsp;{{ props.item.price }}&nbsp;</span
      >
      <span>руб</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";
const props = defineProps<{
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiPrice {
  display: flex;
  justify-content: center;
  padding: 0 6px 6px 6px;

  &__container {
    display: flex;
    justify-content: center;
    width: 70%;
    // background: $gradient-hero-one;
    border-radius: $br-xxs;
    padding: 10px;

    @media (max-width: 767px) {
      width: 80%;
    }

    &_blue {
      background: $gradient-hero-one;
    }

    &_red {
      background: $gradient-red-one;
    }
  }

  &__number {
    font-family: "Montserrat-Bold", sans-serif;
  }
}
</style>
