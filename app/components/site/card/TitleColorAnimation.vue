<template>
  <div>
    <span
      v-if="props.siteData.cardTitle.titleOneBack"
      class="siteCardTitleColorAnimation siteCardTitleColorAnimation_one"
      >{{ props.siteData.cardTitle.titleOneBack }}</span
    >
    <span
      v-if="props.siteData.cardTitle.titleTwoBack"
      class="siteCardTitleColorAnimation siteCardTitleColorAnimation_two"
      >{{ props.siteData.cardTitle.titleTwoBack }}</span
    >
    <span
      v-if="props.siteData.cardTitle.titleTwoDoubleBack"
      class="siteCardTitleColorAnimation siteCardTitleColorAnimation_three"
      >{{ props.siteData.cardTitle.titleTwoDoubleBack }}</span
    >
    <span
      v-if="props.siteData.cardTitle.titleThreeBack"
      class="siteCardTitleColorAnimation siteCardTitleColorAnimation_four"
      >{{ props.siteData.cardTitle.titleThreeBack }}</span
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
.siteCardTitleColorAnimation {
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
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
}
</style>
