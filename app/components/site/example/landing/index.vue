<template>
  <div class="siteExampleUiLanding siteExampleUiLanding_top">
    <SiteExampleUiHeader :navData="props.siteData.example.nav" />
    <SiteExampleUiBackgroundLanding
      :background="props.siteData.example?.background"
    />

    <SiteExampleUiMainHeroLanding
      :siteDataExampleHero="props.siteData.example.hero"
    />
    <ContainerPage desktopPadding class="siteExampleUiLanding__container">
      <SiteExampleUiMainCard
        v-for="item in props.siteData.example.cards"
        :key="item.id"
        :item="item"
      />
    </ContainerPage>
  </div>

  <SiteExampleUiMainCarousel
    :siteDataCarousel="props.siteData.example.carousel"
  />

  <div class="siteExampleUiLanding">
    <SiteExampleUiBackgroundLanding
      :background="props.siteData.example.background"
    />
    <SiteExampleUiMainBlock :siteDataBlock="props.siteData.example.block" />
    <SiteExampleUiFooter :navData="props.siteData.example.nav" />
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiLanding {
  position: relative;

  &_top {
    padding-bottom: 80px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    @media (max-width: 1279px) {
      gap: 40px;
    }

    @media (max-width: 1023px) {
      gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
}
</style>
