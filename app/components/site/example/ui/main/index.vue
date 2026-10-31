<template>
  <div class="siteExampleUiMain">
    <SiteExampleUiMainHero :siteDataExampleHero="props.siteData.example.hero" />
    <ContainerPage desktopPadding class="siteExampleUiMain__container">
      <SiteExampleUiMainCard
        v-for="item in props.siteData.example.cards"
        :key="item.id"
        :item="item"
      />
    </ContainerPage>
    <SiteExampleUiMainCarousel
      :siteDataCarousel="props.siteData.example.carousel"
    />
    <SiteExampleUiMainBlock :siteDataBlock="props.siteData.example.block" />
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMain {
  position: relative;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding-top: 60px;

    @media (max-width: 1279px) {
      gap: 40px;
    }

    @media (max-width: 1023px) {
      gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 100px;
    }
  }
}
</style>
