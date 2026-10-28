<template>
  <div class="siteExampleUiMainHeroTitle">
    <h3 class="siteExampleUiMainHeroTitle__text">
      {{ props.siteDataExampleHero.title }}
    </h3>
    <span class="siteExampleUiMainHeroTitle__subtitle">{{
      props.siteDataExampleHero.subtitle
    }}</span>
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
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: 1px;
    text-align: center;
    padding-top: 100px;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }

  &__subtitle {
    max-width: 650px;
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: 1px;
    padding-bottom: 40px;
    background-clip: text;
    background-image: linear-gradient(
      90deg,
      $blue-two,
      $blue-two,
      $blue-two,
      $blue-two,
      $white-one,
      $white-one,
      $white-one,
      $white-one,
      $green-one,
      $green-one,
      $green-one,
      $green-one
    );
    color: transparent;
    animation: background-fade 20s linear infinite;
    background-size: 800%;
    -webkit-animation: background-fade 20s linear infinite;
    -moz-animation: background-fade 20s linear infinite;

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }
}
@keyframes background-fade {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
