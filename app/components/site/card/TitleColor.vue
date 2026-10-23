<template>
  <div>
    <h2 class="siteCardTitleColor">
      <span v-if="props.siteData.cardTitle.titleOne">{{
        props.siteData.cardTitle.titleOne
      }}</span>
      <span
        v-if="props.siteData.cardTitle.titleTwo"
        class="siteCardTitleColor_accent"
        >{{ props.siteData.cardTitle.titleTwo }}</span
      >
      <span v-if="props.siteData.cardTitle.titleThree">{{
        props.siteData.cardTitle.titleThree
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
.siteCardTitleColor {
  position: relative;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 44px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: $white-mask-two;

  @media (max-width: 1023px) {
    font-size: 32px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }

  &_accent {
    font-family: "Montserrat-Bold", sans-serif;
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
