<template>
  <section class="siteExampleMainBlock">
    <div class="siteExampleMainBlock__container">
      <SiteExampleUiMainBlockTitle
        :title="props.siteDataBlock.title"
        :subtitle="props.siteDataBlock.subtitle"
      />
      <div class="siteExampleMainBlock__grid">
        <SiteExampleUiMainBlockCard
          v-for="item in props.siteDataBlock.cards"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleBlock } from "~/types/site";

const props = defineProps<{
  siteDataBlock: ISiteExampleBlock;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainBlock {
  max-width: $screen-xxl;
  margin: 0 auto;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;
    border-radius: 14px;
    backdrop-filter: brightness(70%);
    box-shadow: $shadow-card-black-one;

    @media (max-width: 1023px) {
      border-radius: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
