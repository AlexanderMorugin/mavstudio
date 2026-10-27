<template>
  <div class="logoForHeaderExample">
    <LogoForCard isExample icon="mavLogo" :title="props.title" />
    <div class="logoForHeaderExample__text">
      <span>Ваша</span>
      <span class="logoForHeaderExample__accent">Ф</span>
      <span>ирма</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>

<style lang="scss" scoped>
.logoForHeaderExample {
  display: flex;
  align-items: center;
  // gap: 10px;
  gap: 5px;

  @media (max-width: 389px) {
    flex-direction: column;
    gap: 0;
    // gap: 5px;
  }

  &__text {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -4%;
    color: $white-mask-one;

    // @media (max-width: 767px) {
    //   font-size: 28px;
    // }

    @media (max-width: 1023px) {
      font-size: 28px;
    }

    @media (max-width: 576px) {
      font-size: 20px;
    }

    @media (max-width: 389px) {
      font-size: 18px;
    }
  }

  &__accent {
    color: $orange-one;
  }
}
</style>
