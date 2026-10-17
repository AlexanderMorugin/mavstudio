<template>
  <div class="cardBlockUiPrice">
    <div class="cardBlockUiPrice__container">
      <span>от</span>
      <span class="cardBlockUiPrice__number"
        >&nbsp;{{ props.price }}&nbsp;</span
      >
      <span>руб</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  price: string;
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
    background: $red-one;
    border-radius: $br-xxs;
    padding: 10px;
  }

  &__number {
    font-family: "Montserrat-Bold", sans-serif;
  }
}
</style>
