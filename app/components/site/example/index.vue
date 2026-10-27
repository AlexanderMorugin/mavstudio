<template>
  <SiteExampleLanding
    v-if="props.siteData.name === 'landing'"
    :siteData="props.siteData"
  />
  <SiteExampleBusiness
    v-if="props.siteData.name === 'business'"
    :siteData="props.siteData"
  />
  <SiteExampleMultipage
    v-if="props.siteData.name === 'multipage'"
    :siteData="props.siteData"
  />
  <SiteExampleInfo
    v-if="props.siteData.name === 'info'"
    :siteData="props.siteData"
  />
  <SiteExampleCommerce
    v-if="props.siteData.name === 'commerce'"
    :siteData="props.siteData"
  />
  <SiteExampleShop
    v-if="props.siteData.name === 'shop'"
    :siteData="props.siteData"
  />
  <SiteExampleCms
    v-if="props.siteData.name === 'cms'"
    :siteData="props.siteData"
  />

  <!-- <div class="siteExample__container">
      <SiteExampleHeader />
      <SiteExampleBackground /> -->
  <!-- <SiteExampleMainBlock :siteData="props.siteData" /> -->
  <!-- <SiteExampleFooter />
    </div> -->
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<!-- <style lang="scss" scoped>
.siteExample {
  // background: $white-one;
  // padding-top: 40px;
  // padding-bottom: 40px;

  // &__container {
  //   position: relative;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  // }
}
</style> -->
