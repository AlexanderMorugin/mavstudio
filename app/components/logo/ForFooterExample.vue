<template>
  <div class="logoForFooterExample">
    <LogoForCard icon="mavLogo" :title="props.title" />
    <div class="logoForFooterExample__container">
      <span>Ваша</span>
      <span class="logoForFooterExample__accent">Ф</span>
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
.logoForFooterExample {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 60px;
    letter-spacing: -6%;
    color: $white-mask-two;
    text-align: center;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 32px;
    }
  }

  &__accent {
    color: $orange-one;
  }
}
</style>
