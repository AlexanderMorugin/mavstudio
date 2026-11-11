<template>
  <div class="siteExampleUiMainHeroTitle">
    <h3
      :class="[
        'siteExampleUiMainHeroTitle__text',
        {
          siteExampleUiMainHeroTitle__text_landing:
            props.siteDataExampleHero.name === 'landing',
        },
        {
          siteExampleUiMainHeroTitle__text_business:
            props.siteDataExampleHero.name === 'business',
        },
      ]"
    >
      {{ props.siteDataExampleHero.title }}
    </h3>

    <SiteExampleUiMainHeroSubtitle
      :siteDataExampleHero="props.siteDataExampleHero"
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
    z-index: 3;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
    }

    &_landing {
      color: $white-one;
      padding-top: 100px;

      @media (max-width: 576px) {
        padding-top: 40px;
      }
    }

    &_business {
      color: $blue-two;
      text-shadow:
        0 0 3px $white-one,
        0 0 20px $white-one;
      padding-top: 130px;
    }
  }
}
</style>
