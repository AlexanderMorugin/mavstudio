<template>
  <div class="siteCard">
    <SiteCardSectionText :siteData="props.siteData" />
    <SiteCardSectionImage />
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
  row-gap: 100px;
  padding-bottom: 30px;

  // border: 1px solid red;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
