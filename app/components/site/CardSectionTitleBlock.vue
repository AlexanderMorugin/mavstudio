<template>
  <section class="siteCardSectionTitleBlock">
    <div class="siteCardSectionTitleBlock__container">
      <TitleBlockThreeColor :siteData="props.siteData" />
      <TitleBlockThreeColorAnimation :siteData="props.siteData" />
    </div>
    <SiteCardDescriptionBlock :siteData="props.siteData" />
  </section>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardSectionTitleBlock {
  display: flex;
  flex-direction: column;
  // gap: 40px;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: fit-content;
    padding-bottom: 50px;
    // border: 1px solid red;

    @media (max-width: 1023px) {
      padding-bottom: 30px;
    }

    @media (max-width: 576px) {
      padding-bottom: 0;
    }
  }
}
</style>
