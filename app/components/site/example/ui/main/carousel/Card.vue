<template>
  <div class="siteExampleUiMainCarouselCard">
    <picture>
      <source media="(max-width: 767px)" :srcset="props.image768" />
      <source media="(max-width: 1023px)" :srcset="props.image1024" />
      <source media="(max-width: 1279px)" :srcset="props.image1280" />
      <source media="(max-width: 1919px)" :srcset="props.image1920" />
      <source media="(max-width: 3840px)" :srcset="props.image3840" />

      <img
        :src="props.image768"
        :alt="props.title"
        class="siteExampleUiMainCarouselCard__image"
      />
    </picture>

    <span class="siteExampleUiMainCarouselCard__title">{{ props.title }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image3840: string;
  image1920: string;
  image1280: string;
  image1024: string;
  image768: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainCarouselCard {
  position: relative;
  height: 700px;
  user-select: none;
  cursor: grab;

  @media (max-width: 1279px) {
    height: 500px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 80%;
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 32px;
    // color: $orange-mask-one;
    text-align: center;

    @media (max-width: 576px) {
      bottom: 5%;
      font-size: 24px;
    }
  }
}
</style>
