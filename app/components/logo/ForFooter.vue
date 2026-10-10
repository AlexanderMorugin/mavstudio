<template>
  <div class="logoForFooter">
    <div class="logoForFooter__bottomLogo">
      <span>Mav</span>
      <span class="logoForFooter__bottomLogoAccent">S</span>
      <span>tudio</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme?: string;
}>();
</script>

<style lang="scss" scoped>
.logoForFooter {
  display: flex;
  justify-content: center;
  height: 125px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 90px;
  }

  @media (max-width: 576px) {
    height: 73px;
  }

  &__bottomLogo {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 140px;
    letter-spacing: -6%;
    color: $black-mask-two;

    @media (max-width: 767px) {
      font-size: 100px;
    }

    @media (max-width: 576px) {
      font-size: 80px;
    }
  }

  &__bottomLogoAccent {
    color: $orange-one;
  }
}
</style>
