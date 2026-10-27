<template>
  <SiteExampleUiContainerSection>
    <SiteExampleUiTitlePage
      :title="props.siteData.example.title"
      :subtitle="props.siteData.example.subtitle"
    />
    <SiteExampleUiContainerBody>
      <SiteExampleUiBackgroundLanding />

      <SiteExampleUiHeader />
      <SiteExampleUiMain :siteData="props.siteData" />
      <SiteExampleUiFooter />
    </SiteExampleUiContainerBody>
  </SiteExampleUiContainerSection>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>
