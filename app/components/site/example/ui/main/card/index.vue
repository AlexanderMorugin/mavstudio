<template>
  <section class="siteExampleMainCard">
    <div class="siteExampleMainCard__top">
      <SiteExampleUiMainCardImage
        :image="props.item.image"
        :title="props.item.title"
      />

      <SiteExampleUiMainCardTitle
        :title="props.item.title"
        :subtitle="props.item.subtitle"
      />
    </div>
    <SiteExampleUiMainCardText
      :textOne="props.item.textOne"
      :textTwo="props.item.textTwo"
    />
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleCard } from "~/types/site";

const props = defineProps<{
  item: ISiteExampleCard;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 14px;
  backdrop-filter: brightness(40%);
  box-shadow: $shadow-card-black-one;
  padding: 20px;

  @media (max-width: 1023px) {
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 767px) {
    padding: 2px;
  }

  &__top {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;

    @media (max-width: 1279px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
