<template>
  <section
    :id="props.siteDataExampleAbout.anchor"
    class="siteExampleUiMainAboutBusiness"
  >
    <SiteExampleUiMainAboutText
      :title="props.siteDataExampleAbout.title"
      :subtitle="props.siteDataExampleAbout.subtitle"
      :textOne="props.siteDataExampleAbout.textOne"
      :textTwo="props.siteDataExampleAbout.textTwo"
    />
    <SiteExampleUiMainAboutImage
      :image="props.siteDataExampleAbout.image"
      :title="props.siteDataExampleAbout.title"
    />
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleAbout } from "~/types/site";

const props = defineProps<{
  siteDataExampleAbout: ISiteExampleAbout;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainAboutBusiness {
  display: grid;
  grid-template-columns: 60% 40%;
  padding-top: 80px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
