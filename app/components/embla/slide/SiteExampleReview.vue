<template>
  <CardWithStripe
    v-for="item in props.reviewData"
    :key="item.id"
    orange
    isExample
    class="embla__slide"
  >
    <ReviewListCard :review="item" />
  </CardWithStripe>
</template>

<script setup lang="ts">
import type { IReview } from "~/types/review";

const props = defineProps<{
  reviewData: IReview[];
}>();
</script>

<style lang="scss" scoped>
.embla__slide {
  flex: 0 0 450px;
  min-width: 0;
  padding-left: 40px;

  @media (max-width: 576px) {
    flex: 0 0 100%;
    padding-left: 20px;
  }
}
</style>
