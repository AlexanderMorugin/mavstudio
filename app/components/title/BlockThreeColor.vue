<template>
  <div class="titleBlockThreeColor">
    <h2 class="titleBlockThreeColor__title">
      <span v-if="props.siteData.titleOne">{{ props.siteData.titleOne }}</span>
      <span
        v-if="props.siteData.titleTwo"
        class="titleBlockThreeColor__accent"
        >{{ props.siteData.titleTwo }}</span
      >
      <span v-if="props.siteData.titleThree">{{
        props.siteData.titleThree
      }}</span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.titleBlockThreeColor {
  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 44px;
    line-height: 1.2;
    letter-spacing: 1px;
    color: $white-mask-one;

    @media (max-width: 1023px) {
      font-size: 32px;
    }

    @media (max-width: 389px) {
      font-size: 24px;
    }
  }

  &__accent {
    background-clip: text;
    background-image: linear-gradient(
      90deg,
      $white-mask-one,
      $white-mask-one,
      $green-four,
      $green-four,
      transparent,
      $orange-four,
      $orange-four,
      $green-four,
      $green-four
    );
    color: transparent;
    animation: background-fade 10s linear infinite;
    background-size: 800%;
    -webkit-animation: background-fade 10s linear infinite;
    -moz-animation: background-fade 10s linear infinite;
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
