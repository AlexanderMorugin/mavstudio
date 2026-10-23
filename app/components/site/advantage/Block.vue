<template>
  <div class="siteAdvantageBlock">
    <div class="siteAdvantageBlock__titleBox">
      <h3
        :class="[
          'siteAdvantageBlock__title',
          { siteAdvantageBlock__title_one: props.data.name === 'isBad' },
          { siteAdvantageBlock__title_two: props.data.name === 'isGood' },
        ]"
      >
        {{ props.data.title }}
      </h3>
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
  padding-top: 40px;

  @media (max-width: 767px) {
    padding-top: 30px;
  }

  &__titleBox {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__title {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 44px;
    text-shadow: 0px 5px 60px $blue-one;
    z-index: 5;

    @media (max-width: 767px) {
      font-size: 36px;
      text-shadow: 0px 5px 20px $blue-mask-two;
    }

    &_one {
      color: $black-mask-three;
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
    opacity: 0.7;

    @media (max-width: 767px) {
      top: -15px;
      width: 40px;
      height: 40px;
    }

    &_one {
      right: -15px;

      @media (max-width: 767px) {
        right: -20px;
      }
    }

    &_two {
      right: 15px;

      @media (max-width: 767px) {
        right: 10px;
      }
    }

    &_three {
      right: 45px;

      @media (max-width: 767px) {
        right: 40px;
      }
    }

    &_four {
      right: 75px;

      @media (max-width: 767px) {
        right: 70px;
      }
    }

    &_five {
      right: 105px;

      @media (max-width: 767px) {
        right: 100px;
      }
    }

    &_bad {
      fill: $grey-mask-two;
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
</style>
