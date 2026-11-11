<template>
  <section :id="props.reviewData.anchor" class="siteExampleUiMainReview">
    <SiteExampleUiTitleBlock
      :title="props.reviewData.title"
      :subtitle="props.reviewData.subtitle"
    />

    <div class="siteExampleUiMainReview__container">
      <EmblaListCardCarousel :reviewData="props.reviewData.card" />
      <!-- <SiteExampleUiMainReviewForm /> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleReview } from "~/types/site";

const props = defineProps<{
  reviewData: ISiteExampleReview;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainReview {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  &__container {
    display: grid;
    grid-template-columns: 70% auto;
    gap: 20px;

    // height: 300px;

    @media (max-width: 1023px) {
      grid-template-columns: 100%;
    }
  }
}
</style>
