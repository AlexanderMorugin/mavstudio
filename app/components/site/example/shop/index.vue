<template>
  <SiteExampleUiContainerSection>
    <SiteExampleUiTitlePage
      :title="props.siteData.example.title"
      :subtitle="props.siteData.example.subtitle"
    />
    <SiteExampleUiContainerBody>
      <SiteExampleUiBackgroundLanding />
      <SiteExampleUiHeader :navData="props.siteData.example.nav" />
      <SiteExampleUiMain :siteData="props.siteData" />
      <SiteExampleUiFooter :navData="props.siteData.example.nav" />
    </SiteExampleUiContainerBody>
  </SiteExampleUiContainerSection>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>
