<template>
  <div class="siteAdvantageBlock">
    <div class="siteAdvantageBlock__titleBox">
      <h2
        :class="[
          'siteAdvantageBlock__title',
          { siteAdvantageBlock__title_one: props.data.name === 'isBad' },
          { siteAdvantageBlock__title_two: props.data.name === 'isGood' },
        ]"
      >
        {{ props.data.title }}
      </h2>
      <IconSmartBoyFill
        v-if="props.data.name === 'isBad'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_one siteAdvantageBlock__icon_bad"
      />
      <IconStarFill
        v-if="props.data.name === 'isGood'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_one"
      />
      <IconStarFill
        v-if="props.data.name === 'isGood'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_two"
      />
      <IconStarFill
        v-if="props.data.name === 'isGood'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_three"
      />
      <IconStarFill
        v-if="props.data.name === 'isGood'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_four"
      />
      <IconStarFill
        v-if="props.data.name === 'isGood'"
        class="siteAdvantageBlock__icon siteAdvantageBlock__icon_five"
      />
    </div>
    <ParagraphNormal
      v-if="props.data.name === 'isBad'"
      black
      class="siteAdvantageBlock__text"
      >{{ props.data.text }}</ParagraphNormal
    >

    <ParagraphNormal
      v-if="props.data.name === 'isGood'"
      black
      class="siteAdvantageBlock__text"
      >{{ props.data.text }}</ParagraphNormal
    >
  </div>
</template>

<script setup lang="ts">
import type { ISiteAdvantage } from "~/types/site";

const props = defineProps<{
  data: ISiteAdvantage;
}>();
</script>

<style lang="scss" scoped>
.siteAdvantageBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 80px;

  @media (max-width: 1023px) {
    padding-top: 75px;
  }

  @media (max-width: 767px) {
    padding-top: 36px;
  }

  @media (max-width: 576px) {
    padding-top: 28px;
  }

  &__titleBox {
    position: absolute;
    top: 40px;
    left: 0;

    @media (max-width: 767px) {
      top: 0;
    }
  }

  &__title {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 40px;
    z-index: 2;

    @media (max-width: 1023px) {
      font-size: 32px;
    }

    @media (max-width: 576px) {
      font-size: 24px;
      text-shadow: 0px 0px 20px $black-mask-two;
    }

    &_one {
      color: $black-mask-three;

      @media (max-width: 576px) {
        color: $grey-mask-two;
      }
    }

    &_two {
      color: $green-four;
    }
  }

  &__icon {
    position: absolute;
    top: -15px;
    width: 40px;
    height: 40px;
    fill: $red-one;

    @media (max-width: 576px) {
      top: -15px;
      width: 30px;
      height: 30px;
    }

    &_one {
      right: -15px;
      animation: opacity-up 10s linear infinite;
      animation-delay: 0.5s;
    }

    &_two {
      right: 15px;
      animation: opacity-up 10s linear infinite;
      animation-delay: 0.4s;

      @media (max-width: 576px) {
        right: 8px;
      }
    }

    &_three {
      right: 45px;
      animation: opacity-up 10s linear infinite;
      animation-delay: 0.3s;

      @media (max-width: 576px) {
        right: 31px;
      }
    }

    &_four {
      right: 75px;
      animation: opacity-up 10s linear infinite;
      animation-delay: 0.2s;

      @media (max-width: 576px) {
        right: 54px;
      }
    }

    &_five {
      right: 105px;
      animation: opacity-up 10s linear infinite;
      animation-delay: 0.1s;

      @media (max-width: 576px) {
        right: 77px;
      }
    }

    &_bad {
      fill: $black-mask-three;
      animation: skew 3s linear infinite;

      @media (max-width: 1023px) {
        fill: $grey-mask-two;
      }
    }
  }

  &__text {
    position: relative;
    padding-left: 40px;

    @media (max-width: 767px) {
      padding-left: 30px;
    }
  }
}
@keyframes opacity-up {
  7% {
    opacity: 0;
  }
  10% {
    fill: $white-one;
    transform: scale(0.5);
    opacity: 0.5;
  }
  13% {
    fill: $red-one;
    transform: scale(1.5);
    opacity: 0.5;
  }
  15% {
    opacity: 0;
  }
  20% {
    fill: $white-one;
    transform: scale(1.2);
    opacity: 0.5;
  }
  25% {
    opacity: 0;
  }
  30% {
    fill: $red-one;
    transform: scale(1);
    opacity: 1;
  }
  80% {
    fill: $red-one;
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    fill: $white-one;
    opacity: 0;
    transform: translateY(100%) rotate(-180deg);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}
@keyframes skew {
  80% {
    transform: skew(0);
  }
  90% {
    transform: skew(20deg);
  }
  93% {
    transform: skew(-20deg);
  }
  96% {
    transform: skew(20deg);
  }
  99% {
    transform: skew(-20deg);
  }
  100% {
    transform: skew(0);
  }
}
</style>
