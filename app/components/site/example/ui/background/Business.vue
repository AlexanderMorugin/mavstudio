<template>
  <picture>
    <source media="(max-width: 767px)" :srcset="props.background.image768" />
    <source media="(max-width: 1279px)" :srcset="props.background.image1280" />
    <source media="(max-width: 1919px)" :srcset="props.background.image1920" />
    <source media="(max-width: 3840px)" :srcset="props.background.image3840" />

    <img
      :src="props.background.image768"
      :alt="props.background.title"
      class="bg-picture"
    />
  </picture>
</template>

<script lang="ts" setup>
import type { ISiteExampleBackground } from "~/types/site";

const props = defineProps<{
  background: ISiteExampleBackground;
}>();
</script>

<style lang="scss" scoped>
.bg-picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  animation: appear 10s linear infinite;
}

@keyframes appear {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }

  100% {
    transform: scale(1);
  }
}
</style>
