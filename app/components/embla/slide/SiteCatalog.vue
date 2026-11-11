<template>
  <div v-for="item in props.siteCatalog" :key="item.id" class="embla__slide">
    <SiteListCarouselCard :item="item.siteData.listCard" />
  </div>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  siteCatalog: ISiteCatalog[];
}>();
</script>

<style lang="scss" scoped>
.embla__slide {
  flex: 0 0 335px;
  min-width: 0;
  padding-left: 40px;

  @media (max-width: 576px) {
    flex: 0 0 100%;
    padding-left: 20px;
  }
}
</style>
