<template>
  <section class="siteListCarousel">
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
          <div
            v-for="item in props.catalog"
            :key="item.id"
            class="embla__slide"
          >
            <SiteListCardLinkBlock :item="item" isListCarousel>
              <SiteListCardTitle
                isListCarousel
                :title="item.siteData.listCard.title"
                :subtitle="item.siteData.listCard.subtitle"
                :description="item.siteData.listCard.description"
              />
            </SiteListCardLinkBlock>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import type { EmblaCarouselType } from "embla-carousel";
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  catalog: ISiteCatalog[];
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
.siteListCarousel {
  position: relative;
  padding-left: 50px;
  padding-right: 50px;

  // border: 1px solid red;

  @media (max-width: 576px) {
    padding-left: 20px;
    padding-right: 0;
  }
}
.embla {
  width: 100%;
  // margin: auto;
  --slide-size: 340px;
  --slide-size-m: 265px;
  // --slide-spacing: 1rem;
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
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);

  @media (max-width: 389px) {
    flex: 0 0 var(--slide-size-m);
  }
}
</style>
