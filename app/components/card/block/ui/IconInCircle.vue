<template>
  <div
    :class="[
      'cardBlockUiIconInCircle cardBlockUiIconInCircle_shadow',
      { cardBlockUiIconInCircle_isExample: props.isExample },
    ]"
  >
    <IconLandScapeFill
      v-if="props.image === 'landingImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconBookFill
      v-if="props.image === 'bookImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconMegafonFill
      v-if="props.image === 'megafonImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconPaymentFill
      v-if="props.image === 'paymentImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconRuble
      v-if="props.image === 'rubleImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconCartFill
      v-if="props.image === 'cartImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconDeliveryFill
      v-if="props.image === 'deliveryImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconSailingFill
      v-if="props.image === 'sailingImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconFlightFill
      v-if="props.image === 'flightImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconSettingsFill
      v-if="props.image === 'settingsImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <IconPersonFill
      v-if="props.image === 'personImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
        { cardBlockUiIconInCircle__image_isExample: props.isExample },
      ]"
    />
    <span
      v-if="props.image === 'numberImage'"
      class="cardBlockUiIconInCircle__number"
      >{{ props.number }}</span
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string;
  imageFill?: string;
  number?: string;
  numberColor?: string;
  isExample?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiIconInCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &_shadow {
    box-shadow: $shadow-text-one;
    animation: shine 5s linear infinite;
  }

  &_isExample {
    width: 150px;
    height: 150px;
    backdrop-filter: brightness(80%);
    border-radius: 10px;
    animation: none;

    @media (max-width: 1023px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__image {
    width: 28px;
    height: 28px;

    &_orange {
      fill: $orange-one;
    }

    &_white {
      fill: $white-one;
    }

    &_isExample {
      width: 100px;
      height: 100px;

      @media (max-width: 1023px) {
        width: 60px;
        height: 60px;
      }
    }
  }

  &__number {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 24px;
    color: $black-one;
  }
}
@keyframes shine {
  0% {
    fill: transparent;
  }
  50% {
    box-shadow: none;
  }
  100% {
    fill: transparent;
  }
}
</style>
