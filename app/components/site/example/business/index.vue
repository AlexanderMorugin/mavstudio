<template>
  <div class="siteExampleUiBusiness">
    <div class="siteExampleUiBusiness__top">
      <SiteExampleUiHeader :navData="props.siteData.example.nav" />
      <SiteExampleUiBackgroundBusiness
        :background="props.siteData.example.background"
      />

      <SiteExampleUiMainHeroBusiness
        :siteDataExampleHero="props.siteData.example.hero"
      />
    </div>

    <ContainerPage desktopPadding>
      <SiteExampleUiMainAboutBusiness
        v-if="props.siteData.example.about"
        :aboutData="props.siteData.example.about"
      />
      <SiteExampleUiMainOffer
        v-if="props.siteData.example.offer"
        :offerData="props.siteData.example.offer"
      />

      <SiteExampleUiMainPortfolio
        v-if="props.siteData.example.portfolio"
        :anchor="props.siteData.example.portfolio.anchor"
        :title="props.siteData.example.portfolio.title"
        :subtitle="props.siteData.example.portfolio.subtitle"
        :card="props.siteData.example.portfolio.card"
      />
    </ContainerPage>
    <ContainerPage mobilePadding>
      <SiteExampleUiMainReview
        v-if="props.siteData.example.review"
        :reviewData="props.siteData.example.review"
      />
    </ContainerPage>

    <SiteExampleUiFooter
      :siteName="props.siteData.name"
      :navData="props.siteData.example.nav"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiBusiness {
  &__top {
    position: relative;
    height: 700px;
    background: $blue-three;
    overflow: hidden;

    @media (max-width: 1279px) {
      height: 500px;
    }

    @media (max-width: 576px) {
      height: 400px;
    }
  }

  // &__container {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 60px;

  //   @media (max-width: 1279px) {
  //     gap: 40px;
  //   }

  //   @media (max-width: 1023px) {
  //     gap: 20px;
  //   }

  //   @media (max-width: 767px) {
  //     grid-template-columns: 1fr;
  //     gap: 0;
  //   }
  // }
}
</style>
