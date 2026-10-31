<template>
  <div class="siteExampleMainBlockCard">
    <div class="siteExampleMainBlockCard__imageBox">
      <img
        :src="props.item.image"
        :alt="props.item.title"
        class="siteExampleMainBlockCard__image"
      />
    </div>
    <div class="siteExampleMainBlockCard__textBox">
      <h4 class="siteExampleMainBlockCard__title">
        {{ props.item.title }}
      </h4>

      <ParagraphNormal class="siteExampleUiMainCardTitle__subtitle">
        {{ props.item.textOne }}
      </ParagraphNormal>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleCard } from "~/types/site";

const props = defineProps<{
  item: ISiteExampleCard;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainBlockCard {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "image" "text";
  border-radius: 10px;
  border: 1px solid $white-mask-three;
  padding: 3px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 40%;
    grid-template-areas: "text image";

    &:nth-of-type(2) {
      grid-template-columns: 40% 1fr;
      grid-template-areas: "image text";
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-areas: "image" "text";

    &:nth-of-type(2) {
      grid-template-columns: 1fr;
      grid-template-areas: "image" "text";
    }
  }

  &__imageBox {
    grid-area: image;
    height: 250px;
    border-radius: 7px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    object-fit: cover;
  }

  &__textBox {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 24px;
    text-align: center;
    line-height: 1.5;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
}
</style>
