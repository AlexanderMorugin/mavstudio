<template>
  <section id="carousel" class="emblaOneCardCarousel">
    <EmblaButtonControl
      :canScroll="canScrollPrev"
      direction="prev"
      @scroll="scrollPrev"
    />
    <EmblaButtonControl
      :canScroll="canScrollNext"
      direction="next"
      @scroll="scrollNext"
    />

    <div class="embla">
      <div class="embla__viewport" ref="emblaRef">
        <div class="embla__container">
          <div
            v-for="item in props.listData"
            :key="item.id"
            class="embla__slide"
          >
            <EmblaFullScreenImageCard
              :image3840="item.image3840"
              :image1920="item.image1920"
              :image1280="item.image1280"
              :image1024="item.image1024"
              :image768="item.image768"
              :title="item.title"
            />
          </div>
        </div>
      </div>
    </div>

    <EmblaDots
      v-if="props.listData.length > 1"
      :itemList="props.listData"
      :activeThumb="activeThumb"
      @goToSlide="goToSlide"
    />
  </section>
</template>

<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import type { ISiteExampleCarousel } from "~/types/site";

const props = defineProps<{
  listData: ISiteExampleCarousel[];
}>();

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
  },
  [Autoplay()],
);

const activeThumb = ref(0);
const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const goToSlide = (slide: ISiteExampleCarousel) => {
  if (!emblaApi.value) return;

  activeThumb.value = slide.id;
  emblaApi.value.scrollTo(slide.id);
};

const onSelect = (emblaApi: EmblaCarouselType) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

const scrollNext = () => {
  activeThumb.value = activeThumb.value + 1;
  emblaApi.value?.scrollNext();
};
const scrollPrev = () => {
  activeThumb.value = activeThumb.value - 1;
  emblaApi.value?.scrollPrev();
};

function updateButtonStates(emblaApi: EmblaCarouselType) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);

  emblaApi.value.on("select", () => {
    activeThumb.value = Number(emblaApi.value?.selectedScrollSnap());
  });

  onSelect(emblaApi.value);
});
</script>

<style lang="scss" scoped>
.siteExampleUiMainCarousel {
  position: relative;
  margin-top: 40px;
  margin-bottom: 20px;
}
.embla {
  width: 100%;
  margin: auto;
  --slide-size: 100%;
  --slide-spacing: 1rem;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
</style>
