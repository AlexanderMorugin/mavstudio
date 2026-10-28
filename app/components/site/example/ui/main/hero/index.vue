<template>
  <section class="siteExampleUiMainHero">
    <SiteExampleUiMainHeroLogo />
    <SiteExampleUiMainHeroTitle
      :siteDataExampleHero="props.siteDataExampleHero"
    />
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleHero } from "~/types/site";

const props = defineProps<{
  siteDataExampleHero: ISiteExampleHero;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainHero {
  position: relative;
  height: 600px;
  max-width: $screen-xxl;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  // border: 1px solid red;

  @media (max-width: 767px) {
    height: 500px;
  }

  @media (max-width: 389px) {
    height: 400px;
  }
}
</style>
