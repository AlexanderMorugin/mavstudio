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
  gap: 10px;

  @media (max-width: 767px) {
    gap: 5px;
  }

  &__text {
    font-family: "Oswald-Medium", sans-serif;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -4%;
    color: $white-mask-one;

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }

  &__accent {
    color: $orange-one;
  }
}
</style>
