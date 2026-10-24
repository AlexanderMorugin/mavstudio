<template>
  <section class="siteExample">
    <SiteExampleTitlePage
      :title="props.example.title"
      :subtitle="props.example.subtitle"
    />
    <div class="siteExample__container">
      <SiteExampleHeader />
      <SiteExampleBackground />
      <!-- <SiteExampleMainBlock :siteData="props.siteData" /> -->
      <SiteExampleFooter />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExample } from "~/types/site";

const props = defineProps<{
  example: ISiteExample;
}>();
</script>

<style lang="scss" scoped>
.siteExample {
  background: $white-one;
  padding-top: 40px;
  padding-bottom: 40px;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
