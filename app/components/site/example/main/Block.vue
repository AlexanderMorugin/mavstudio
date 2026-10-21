<template>
  <div class="siteExampleMainBlock">
    <ContainerPage desktopPadding class="siteExampleMainBlock__grid">
      <SiteExampleMainCard
        backgroundColor="green"
        borderRadius="14"
        cardImage="landingImage"
        cardImageFill="orange"
        :textOne="props.siteData.textOne"
        :textTwo="props.siteData.textTwo"
      />
      <SiteExampleMainCard
        backgroundColor="green"
        borderRadius="14"
        cardImage="landingImage"
        cardImageFill="orange"
        :textOne="props.siteData.textOne"
        :textTwo="props.siteData.textTwo"
      />
      <SiteExampleMainCard
        backgroundColor="green"
        borderRadius="14"
        cardImage="landingImage"
        cardImageFill="orange"
        :textOne="props.siteData.textOne"
        :textTwo="props.siteData.textTwo"
      />
      <SiteExampleMainCard
        backgroundColor="green"
        borderRadius="14"
        cardImage="landingImage"
        cardImageFill="orange"
        :textOne="props.siteData.textOne"
        :textTwo="props.siteData.textTwo"
      />
    </ContainerPage>
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainBlock {
  position: relative;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 60px;
    padding-top: 40px;
    padding-bottom: 40px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
