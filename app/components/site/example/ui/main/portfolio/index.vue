<template>
  <section :id="props.anchor" class="siteExampleUiMainPortfolio">
    <SiteExampleUiTitleBlock :title="props.title" :subtitle="props.subtitle" />

    <div class="siteExampleUiMainPortfolio__container">
      <div class="siteExampleUiMainPortfolio__grid">
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_one"
        >
          <img
            :src="props.card[0]?.image"
            :alt="props.card[0]?.title"
            :title="props.card[0]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_two"
        >
          <img
            :src="props.card[1]?.image"
            :alt="props.card[1]?.title"
            :title="props.card[1]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_three"
        >
          <img
            :src="props.card[2]?.image"
            :alt="props.card[2]?.title"
            :title="props.card[2]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
      </div>
      <div class="siteExampleUiMainPortfolio__grid">
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_four"
        >
          <img
            :src="props.card[3]?.image"
            :alt="props.card[3]?.title"
            :title="props.card[3]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_five"
        >
          <img
            :src="props.card[4]?.image"
            :alt="props.card[4]?.title"
            :title="props.card[4]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
        <div
          class="siteExampleUiMainPortfolio__element siteExampleUiMainPortfolio__element_six"
        >
          <img
            :src="props.card[5]?.image"
            :alt="props.card[5]?.title"
            :title="props.card[5]?.title"
            class="siteExampleUiMainPortfolio__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExamplePortfolioCard } from "~/types/site";

const props = defineProps<{
  anchor: string;
  title: string;
  subtitle: string;
  card: ISiteExamplePortfolioCard[];
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainPortfolio {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 3vw);
    gap: 5px;

    @media (max-width: 767px) {
      grid-template-rows: repeat(8, 8vw);
    }
  }

  &__element {
    background: $black-one;
    border-radius: $br-xs;
    overflow: hidden;

    &_one {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 8s ease infinite;
    }

    &_two {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 9s ease infinite;
    }

    &_three {
      grid-column-start: 1;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
      animation: opacity-move 10s ease infinite;
    }

    &_four {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 9;
      animation: opacity-move 11s ease infinite;
    }

    &_five {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 12s ease infinite;
    }

    &_six {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
      animation: opacity-move 13s ease infinite;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

@keyframes opacity-move {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
