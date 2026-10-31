<template>
  <div class="siteExampleUiMainCarouselCard">
    <img
      :src="props.image"
      :alt="props.title"
      class="siteExampleUiMainCarouselCard__image"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainCarouselCard {
  height: 700px;

  @media (max-width: 1023px) {
    height: 500px;
  }

  @media (max-width: 576px) {
    height: 400px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
