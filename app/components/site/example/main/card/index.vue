<template>
  <div
    :class="[
      'siteExampleMainCard',
      {
        siteExampleMainCard_backgroundOrange:
          props.backgroundColor === 'orange',
      },
      { siteExampleMainCard_backgroundBlue: props.backgroundColor === 'blue' },
      { siteExampleMainCard_backgroundRed: props.backgroundColor === 'red' },
      {
        siteExampleMainCard_backgroundGreen: props.backgroundColor === 'green',
      },
      { siteExampleMainCard_borderRadius14: props.borderRadius === '14' },
    ]"
  >
    <div class="siteExampleMainCard__top">
      <CardBlockUiIconInCircle
        isExample
        :image="props.cardImage"
        :imageFill="props.cardImageFill"
      />
      <SiteExampleMainCardTitle
        title="Название блока"
        subtitle="Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  borderRadius?: string;
  backgroundColor?: string;
  cardImage?: string;
  cardImageFill?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainCard {
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid $grey-one;
  backdrop-filter: brightness(50%);
  box-shadow: $shadow-card-black-one;
  padding: 20px;

  @media (max-width: 1023px) {
    padding: 10px;
  }

  @media (max-width: 767px) {
    padding: 5px;
  }

  &_backgroundOrange {
    background: $orange-mask-four;
  }

  &_backgroundBlue {
    background: $blue-mask-four;
  }

  &_backgroundRed {
    background: $red-mask-four;
  }

  &_backgroundGreen {
    background: $green-mask-four;
  }

  &_borderRadius14 {
    border-radius: 14px;
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
