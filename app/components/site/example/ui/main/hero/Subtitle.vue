<template>
  <div
    :class="[
      'siteExampleUiMainHeroSubtitle',
      {
        siteExampleUiMainHeroSubtitle_landing:
          props.siteDataExampleHero.name === 'landing',
      },
      {
        siteExampleUiMainHeroSubtitle_business:
          props.siteDataExampleHero.name === 'business',
      },
    ]"
  >
    <span
      :class="[
        'siteExampleUiMainHeroSubtitle__text',
        {
          siteExampleUiMainHeroSubtitle__text_landing:
            props.siteDataExampleHero.name === 'landing',
        },
        {
          siteExampleUiMainHeroSubtitle__text_business:
            props.siteDataExampleHero.name === 'business',
        },
      ]"
    >
      {{ props.siteDataExampleHero.subtitle }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleHero } from "~/types/site";

const props = defineProps<{
  siteDataExampleHero: ISiteExampleHero;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainHeroSubtitle {
  display: flex;
  overflow: hidden;

  &_landing {
    align-items: center;
    height: 200px;
    background: $gradient-blue-three;
    border-left: 2px solid $blue-mask-two;
    animation: fall 15s linear infinite;

    @media (max-width: 1023px) {
      border-left: none;
      animation: fall-two 15s linear infinite;
    }

    @media (max-width: 576px) {
      height: 160px;
    }
  }

  &_business {
    align-items: end;
    background: $gradient-black-one;
    animation: pop-up 15s linear infinite;

    @media (max-width: 576px) {
      background: $gradient-black-two;
    }
  }

  &__text {
    font-family: "CormorantGaramond-SemiBold", sans-serif;
    font-size: 44px;
    line-height: 1.2;
    z-index: 3;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 576px) {
      font-size: 32px;
    }

    &_landing {
      max-width: 650px;
      background-clip: text;
      background-image: linear-gradient(
        -90deg,
        $white-one,
        $white-one,
        $blue-two,
        $blue-two,
        $blue-two,
        $blue-two,
        $white-one,
        $white-one,
        $white-one,
        $white-one,
        $orange-three,
        $orange-three,
        $orange-three,
        $orange-three,
        $white-one,
        $white-one,
        $white-one,
        $white-one
      );
      color: transparent;
      background-size: 500%;
      animation: text 15s linear infinite;
      -webkit-animation: text 15s linear infinite;
      -moz-animation: text 15s linear infinite;
    }

    &_business {
      width: 100%;
      text-align: center;
      background-clip: text;
      background-image: linear-gradient(
        -90deg,
        $white-one,
        $white-one,
        $white-one,
        $orange-four,
        $orange-four,
        $orange-four,
        $white-one,
        $white-one,
        $white-one,
        $white-one,
        $orange-three,
        $orange-three,
        $orange-three,
        $orange-three,
        $white-one,
        $white-one,
        $white-one,
        $white-one
      );
      color: transparent;
      background-size: 500%;
      animation: text-up 15s linear infinite;
      -webkit-animation: text-up 15s linear infinite;
      -moz-animation: text-up 15s linear infinite;
    }
  }
}
@keyframes pop-up {
  0% {
    opacity: 0;
    height: 0;
  }
  3% {
    opacity: 0;
    height: 0;
  }
  8% {
    opacity: 1;
    height: 100%;
    padding-bottom: 20px;
  }
  80% {
    height: 100%;
    padding-bottom: 20px;
  }
  85% {
    opacity: 1;
    height: 0;
    padding-bottom: 0;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}
@keyframes fall {
  0% {
    opacity: 0;
    transform: rotate(90deg);
    transform-origin: bottom right;
    width: 0;
  }
  3% {
    opacity: 1;
    transform: rotate(0);
    width: 0;
  }
  10% {
    width: 100%;
  }
  80% {
    width: 100%;
  }
  85% {
    opacity: 1;
    transform: rotate(0);
    width: 0;
  }
  90% {
    opacity: 0;
    transform: rotate(90deg);
    transform-origin: bottom right;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fall-two {
  0% {
    opacity: 0;
    width: 0;
  }
  3% {
    opacity: 1;
    width: 0;
  }
  10% {
    width: 100%;
  }
  80% {
    width: 100%;
  }
  85% {
    opacity: 1;
    width: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes text {
  0% {
    transform: translateX(-200%);
    background-position: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateX(-200%);
    background-position: 0;
  }
  15% {
    transform: translateX(0);
    background-position: 0;
  }

  70% {
    opacity: 1;
    transform: translateX(0);
  }
  75% {
    opacity: 0;

    background-position: -100%;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes text-up {
  0% {
    transform: translateY(200%);
    background-position: 0;
  }

  6% {
    transform: translateY(200%);
  }
  9% {
    transform: translateY(0);
  }
  75% {
    background-position: -100%;
    transform: translateY(0);
  }
  80% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(200%);
  }
}
</style>
