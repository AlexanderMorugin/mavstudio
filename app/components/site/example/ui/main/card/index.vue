<template>
  <div
    :class="[
      'siteExampleMainCard',
      // {
      //   siteExampleMainCard_backgroundOrange:
      //     props.backgroundColor === 'orange',
      // },
      // { siteExampleMainCard_backgroundBlue: props.backgroundColor === 'blue' },
      // { siteExampleMainCard_backgroundRed: props.backgroundColor === 'red' },
      // {
      //   siteExampleMainCard_backgroundGreen: props.backgroundColor === 'green',
      // },
      // { siteExampleMainCard_borderRadius14: props.borderRadius === '14' },
    ]"
  >
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
  </div>
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
  // border: 1px solid $grey-one;
  border-radius: 14px;
  backdrop-filter: brightness(40%);
  box-shadow: $shadow-card-black-one;
  padding: 20px;

  @media (max-width: 1023px) {
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 767px) {
    padding: 5px;
  }

  // &_backgroundOrange {
  //   background: $orange-mask-four;
  // }

  // &_backgroundBlue {
  //   background: $blue-mask-four;
  // }

  // &_backgroundRed {
  //   background: $red-mask-four;
  // }

  // &_backgroundGreen {
  //   background: $green-mask-four;
  // }

  // &_borderRadius14 {
  //   border-radius: 14px;
  // }

  &__top {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
