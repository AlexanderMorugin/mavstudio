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
          v-show="isReviewModalOpen"
          title="Ваш Отзыв"
          @closeModal="closeModal"
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

const closeModal = () => {
  isReviewModalOpen.value = false;
};

watch(isReviewModalOpen, (newValue) => {
  let html = document.documentElement;
  let marginSize = window.innerWidth - html.clientWidth;

  if (newValue) {
    document.body.style.overflow = "hidden";

    if (marginSize) {
      html.style.marginRight = marginSize + "px";
    }
  } else {
    html.style.marginRight = "";
    document.body.style.overflow = "auto";
  }
});

const handleKeyDown = (e: any) => {
  if (e.key === "Escape" && isReviewModalOpen) {
    e.preventDefault();
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style lang="scss" scoped>
.siteExampleUiMainReview {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;
}
</style>
