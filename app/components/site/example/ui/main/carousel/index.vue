<template>
  <div class="siteExampleUiMainCarousel">
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
            v-for="item in props.siteDataCarousel"
            :key="item.id"
            class="embla__slide"
          >
            <SiteExampleUiMainCarouselCard
              :image="item.image"
              :title="item.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import type { ISiteExampleCarousel } from "~/types/site";

const props = defineProps<{
  siteDataCarousel: ISiteExampleCarousel[];
}>();

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
  },
  [Autoplay()],
);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const onSelect = (emblaApi: EmblaCarouselType) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value?.scrollNext();

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value?.scrollPrev();

function updateButtonStates(emblaApi: EmblaCarouselType) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);

  onSelect(emblaApi.value);
});
</script>

<style lang="scss" scoped>
.siteExampleUiMainCarousel {
  position: relative;
  display: flex;
  justify-content: center;
  // height: fit-content;
  margin-top: 60px;
  // border: 1px solid red;
}
.embla {
  // min-width: 100%;
  // max-width: 80vw;
  // max-width: 100vw;
  width: 100%;
  // height: fit-content;
  margin: auto;
  --slide-size: 100%;
  --slide-spacing: 1rem;

  // border: 1px solid red;
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
  // height: 700px;
  font-size: 120px;
  padding-left: var(--slide-spacing);

  // border: 1px solid red;
}
// .embla__image {
//   width: 100%;
//   object-fit: cover;
// }
</style>
