<template>
  <div class="siteListCarouselCard">
    <div class="siteListCarouselCard__text">
      <span class="siteListCarouselCard__title">
        {{ props.item.title }}
      </span>
      <span v-if="props.item.subtitle" class="siteListCarouselCard__subtitle">{{
        props.item.subtitle
      }}</span>
      <ParagraphNormal
        v-if="props.item.description"
        center
        class="siteListCarouselCard__description"
        >{{ props.item.description }}</ParagraphNormal
      >
    </div>
    <NuxtLink :to="props.item.route">
      <SiteListCardPrice :price="props.item.price" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { ISiteListCard } from "~/types/site";

const props = defineProps<{
  item: ISiteListCard;
}>();
</script>

<style lang="scss" scoped>
.siteListCarouselCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background: $gradient-hero-one;
  border-radius: 8px;
  border: 2px solid $white-one;
  padding: 10px;
  cursor: grab;
  user-select: none;

  @media (max-width: 576px) {
    border-radius: 0;
    padding-left: 0;
    border-left: none;
    border-right: none;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
  }

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 26px;
    letter-spacing: 1px;
    color: $white-one;

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 389px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    font-size: 14px;
    letter-spacing: 1.2px;
    text-align: center;
    text-transform: uppercase;
    color: $white-mask-two;
  }

  &__description {
    max-width: 200px;
  }
}
</style>
