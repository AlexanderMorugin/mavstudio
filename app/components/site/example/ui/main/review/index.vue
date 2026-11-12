<template>
  <section :id="props.reviewData.anchor" class="siteExampleUiMainReview">
    <SiteExampleUiTitleBlock
      :title="props.reviewData.title"
      :subtitle="props.reviewData.subtitle"
    />

    <EmblaListCardCarousel :reviewData="props.reviewData.card" />

    <ButtonWithClick
      title="Оставить отзыв"
      @handleClick="isReviewModalOpen = true"
    />
  </section>

  <ClientOnly>
    <Teleport to="#teleports">
      <Transition name="list">
        <ModalForReview
          v-if="isReviewModalOpen"
          title="Ваш Отзыв"
          @closeModal="isReviewModalOpen = false"
        />
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { ISiteExampleReview } from "~/types/site";

const props = defineProps<{
  reviewData: ISiteExampleReview;
}>();

const isReviewModalOpen = ref(false);

// watch(isReviewModalOpen, (newValue) => {
//   if (newValue) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }
// });
</script>

<style lang="scss" scoped>
.siteExampleUiMainReview {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;
}
</style>
