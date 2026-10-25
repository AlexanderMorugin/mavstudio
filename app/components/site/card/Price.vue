<template>
  <div class="siteCardPrice">
    <div>
      <span class="siteCardPrice__text">от&nbsp;&nbsp;</span>
      <span class="siteCardPrice__accent">{{
        currencyFormater(props.price)
      }}</span>
    </div>

    <NuxtLink to="/price" class="siteCardPrice__link">цены подробнее</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  price: number;
}>();
</script>

<style lang="scss" scoped>
.siteCardPrice {
  position: absolute;
  bottom: -30px;
  right: -10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 767px) {
    right: 0;
  }

  &__text {
    font-size: 24px;
    color: $red-two;

    @media (max-width: 1023px) {
      font-size: 18px;
    }

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &__accent {
    font-family: "Montserrat-bold", sans-serif;
    font-size: 32px;
    color: $red-one;

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 576px) {
      font-size: 20px;
    }
  }

  &__link {
    font-size: 14px;
    line-height: 1.5;
    color: $grey-one;
    border-bottom: 1px dashed $grey-one;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    &:hover {
      color: $white-one;
    }
  }
}
</style>
