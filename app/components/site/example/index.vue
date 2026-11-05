<template>
  <SiteExampleUiContainerSection>
    <SiteExampleUiTitlePage
      :title="props.siteData.example.title"
      :subtitle="props.siteData.example.subtitle"
    />

    <SiteExampleLanding
      v-if="props.siteData.name === 'landing'"
      :siteData="props.siteData"
    />

    <SiteExampleBusiness
      v-if="props.siteData.name === 'business'"
      :siteData="props.siteData"
    />

    <SiteExampleUiTitleEnd />
  </SiteExampleUiContainerSection>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>
