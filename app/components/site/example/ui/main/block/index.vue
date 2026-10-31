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
      <div class="siteExampleMainBlock__line siteExampleMainBlock__line_one" />
      <div class="siteExampleMainBlock__line siteExampleMainBlock__line_two" />
      <div
        class="siteExampleMainBlock__line siteExampleMainBlock__line_three"
      />
      <div class="siteExampleMainBlock__line siteExampleMainBlock__line_four" />
    </div>

    <!-- <div class="siteExampleMainBlock__line siteExampleMainBlock__line_three" /> -->
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

  @media (max-width: 576px) {
    padding-top: 100px;
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;
    border-radius: 14px;
    backdrop-filter: brightness(70%);
    box-shadow: $shadow-card-black-one;
    overflow: hidden;

    @media (max-width: 1023px) {
      border-radius: 20px;
    }
  }

  &__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;
    z-index: 2;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__line {
    position: absolute;
    height: 1px;
    background: $white-mask-three;

    &_one {
      bottom: 10%;
      left: 10%;
      width: 300px;
      animation: rotate 10s linear infinite;
    }

    &_two {
      top: 15%;
      right: 30%;
      width: 500px;
      animation: rotate 10s reverse linear infinite;
      animation-delay: 1.8s;
    }

    &_three {
      top: 50%;
      left: 60%;
      width: 400px;
      animation: rotate 5s linear infinite;
      animation-delay: 2.5s;
    }

    &_four {
      bottom: 35%;
      right: 15%;
      width: 350px;
      animation: rotate 12s reverse linear infinite;
      animation-delay: 1s;
    }
  }
}
@keyframes rotate {
  0% {
    transform: translateX(-500%) rotate(-137deg);
  }
  100% {
    transform: translateX(500%) rotate(137deg);
  }
}
</style>
