<template>
  <div class="emblaListCardCarousel">
    <EmblaButtonControl
      isListCarousel
      :canScroll="canScrollPrev"
      direction="prev"
      @scroll="scrollPrev"
    />
    <EmblaButtonControl
      isListCarousel
      :canScroll="canScrollNext"
      direction="next"
      @scroll="scrollNext"
    />

    <div class="embla">
      <div class="embla__viewport" ref="emblaRef">
        <div class="embla__container">
          <EmblaSlideSiteCatalog
            v-if="props.siteCatalog"
            :siteCatalog="props.siteCatalog"
          />

          <EmblaSlideSiteExampleReview
            v-if="props.reviewData"
            :reviewData="props.reviewData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import type { EmblaCarouselType } from "embla-carousel";
import type { ISiteCatalog } from "~/types/site";
import type { IReview } from "~/types/review";

const props = defineProps<{
  siteCatalog?: ISiteCatalog[];
  reviewData?: IReview[];
}>();

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
});

const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const scrollNext = () => emblaApi.value?.scrollNext();
const scrollPrev = () => emblaApi.value?.scrollPrev();

function updateButtonStates(emblaApi: EmblaCarouselType) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);
});
</script>

<style lang="scss" scoped>
.emblaListCardCarousel {
  position: relative;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
}
.embla {
  width: 100%;
  --slide-spacing: 40px;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
</style>
