<template>
  <div>
    <span
      v-if="props.siteData.titleOneBack"
      class="siteBlockThreeColorAnimationText siteBlockThreeColorAnimationText_one"
      >{{ props.siteData.titleOneBack }}</span
    >
    <span
      v-if="props.siteData.titleTwoBack"
      class="siteBlockThreeColorAnimationText siteBlockThreeColorAnimationText_two"
      >{{ props.siteData.titleTwoBack }}</span
    >
    <span
      v-if="props.siteData.titleTwoDoubleBack"
      class="siteBlockThreeColorAnimationText siteBlockThreeColorAnimationText_three"
      >{{ props.siteData.titleTwoDoubleBack }}</span
    >
    <span
      v-if="props.siteData.titleThreeBack"
      class="siteBlockThreeColorAnimationText siteBlockThreeColorAnimationText_four"
      >{{ props.siteData.titleThreeBack }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteBlockThreeColorAnimationText {
  position: absolute;
  display: block;
  font-family: "Oswald-Bold", sans-serif;
  font-size: 48px;
  user-select: none;

  @media (max-width: 1600px) {
    font-size: 32px;
  }

  @media (max-width: 1023px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }

  &_one {
    top: -17%;
    left: 10%;
    color: $green-mask-five;
    text-shadow: 0 0 15px $green-mask-three;
    animation: pulse 10s infinite;
  }
  &_two {
    top: 0;
    right: 0;
    color: $orange-mask-five;
    text-shadow: 0 0 12px $orange-mask-three;
    animation: pulse 8s infinite;
  }

  &_three {
    bottom: 20%;
    left: 5%;
    color: $white-mask-five;
    text-shadow: 0 0 15px $white-mask-three;
    animation: pulse 15s infinite;
  }

  &_four {
    bottom: 40%;
    right: 15%;
    color: $green-mask-five;
    text-shadow: 0 0 15px $green-mask-three;
    // text-shadow: 0 0 15px $white-mask-five;
    animation: pulse 11s infinite;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    // color: $white-mask-five;
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
}
</style>
