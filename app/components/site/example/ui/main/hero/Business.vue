<template>
  <section class="siteExampleUiMainHeroBusiness">
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
.siteExampleUiMainHeroBusiness {
  position: relative;
  height: calc(100% - 70px);
  margin: 0 auto;

  @media (max-width: 767px) {
    height: calc(100% - 60px);
  }
}
</style>
