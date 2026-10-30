<template>
  <div class="siteExampleUiMainHeroTitle">
    <h3 class="siteExampleUiMainHeroTitle__text">
      {{ props.siteDataExampleHero.title }}
    </h3>

    <SiteExampleUiMainHeroSubtitle
      :subtitle="props.siteDataExampleHero.subtitle"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleHero } from "~/types/site";

const props = defineProps<{
  siteDataExampleHero: ISiteExampleHero;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainHeroTitle {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__text {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: 1px;
    text-align: center;
    padding-top: 100px;
    z-index: 3;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
      padding-top: 40px;
    }
  }
}
</style>
