<template>
  <div class="cardBlockUiIconInCircle cardBlockUiIconInCircle_shadow">
    <IconLandScapeFill
      v-if="props.image === 'landingImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconBookFill
      v-if="props.image === 'bookImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconMegafonFill
      v-if="props.image === 'megafonImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconPaymentFill
      v-if="props.image === 'paymentImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconRuble
      v-if="props.image === 'rubleImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconCartFill
      v-if="props.image === 'cartImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconDeliveryFill
      v-if="props.image === 'deliveryImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconSailingFill
      v-if="props.image === 'sailingImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
    <IconFlightFill
      v-if="props.image === 'flightImage'"
      :class="[
        'cardBlockUiIconInCircle__image',
        { cardBlockUiIconInCircle__image_orange: props.imageFill === 'orange' },
        { cardBlockUiIconInCircle__image_white: props.imageFill === 'white' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string;
  imageFill?: string;
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
  background: $blue-one;

  &_shadow {
    box-shadow: $shadow-text-one;
    animation: shine 5s linear infinite;
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
