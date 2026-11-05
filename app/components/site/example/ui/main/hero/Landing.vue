<template>
  <section class="siteExampleUiMainHeroLanding">
    <SiteExampleUiMainHeroLogo :siteName="props.siteDataExampleHero.name" />
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
.siteExampleUiMainHeroLanding {
  position: relative;
  height: 600px;
  max-width: $screen-xxl;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 576px) {
    height: 400px;
  }
}
</style>
