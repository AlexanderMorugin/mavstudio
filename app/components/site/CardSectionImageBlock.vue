<template>
  <section>
    <CardWithContent :item="props.siteData.imageBlock">
      <TitleBlockForSiteCard
        :title="props.siteData.imageBlock.title"
        :subtitle="props.siteData.imageBlock.subtitle"
        :description="props.siteData.imageBlock.description"
      />
    </CardWithContent>
  </section>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>
