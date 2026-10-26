<template>
  <div class="siteListCardPrice">
    <div class="siteListCardPrice__container">
      <span>от</span>
      <span class="siteListCardPrice__number"
        >&nbsp;&nbsp;{{ currencyFormater(props.price) }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  price: number;
}>();
</script>

<style lang="scss" scoped>
.siteListCardPrice {
  display: flex;
  justify-content: center;
  padding: 0 6px 6px 6px;

  &__container {
    display: flex;
    justify-content: center;
    width: 70%;
    background: $gradient-red-one;
    border-radius: $br-xxs;
    padding: 10px;

    @media (max-width: 767px) {
      width: 80%;
    }
  }

  &__number {
    font-family: "Montserrat-Bold", sans-serif;
  }
}
</style>
