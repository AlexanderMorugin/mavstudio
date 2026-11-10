<template>
  <section :id="props.aboutData.anchor" class="siteExampleUiMainAboutBusiness">
    <SiteExampleUiMainAboutText
      :title="props.aboutData.title"
      :subtitle="props.aboutData.subtitle"
      :textOne="props.aboutData.textOne"
      :textTwo="props.aboutData.textTwo"
    />
    <SiteExampleUiMainAboutImage
      :image="props.aboutData.image"
      :title="props.aboutData.title"
    />
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleAbout } from "~/types/site";

const props = defineProps<{
  aboutData: ISiteExampleAbout;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainAboutBusiness {
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 80px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
