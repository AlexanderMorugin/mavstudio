<template>
  <div class="siteExampleUiMainCarouselCard">
    <img
      :src="props.image"
      :alt="props.title"
      class="siteExampleUiMainCarouselCard__image"
    />
    <span class="siteExampleUiMainCarouselCard__title">{{ props.title }}</span>
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
  position: relative;
  height: 700px;

  @media (max-width: 1023px) {
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
    color: $orange-mask-one;
    text-align: center;

    @media (max-width: 576px) {
      bottom: 5%;
      font-size: 24px;
    }
  }
}
</style>
