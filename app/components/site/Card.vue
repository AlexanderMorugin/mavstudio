<template>
  <div class="siteCard">
    <SiteCardSectionTitleBlock :siteData="props.siteData" />
    <SiteCardSectionImageBlock :siteData="props.siteData" />
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding-bottom: 30px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
