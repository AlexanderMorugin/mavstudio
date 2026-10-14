<template>
  <div class="cardBlockUiCard">
    <div v-if="props.normal" class="cardBlockUiCard__grid">
      <div class="cardBlockUiCard__iconBox cardBlockUiCard__iconBox_shadow">
        <IconLandScapeFill
          v-if="props.landing"
          class="cardBlockUiCard__iconBig"
        />
        <IconBookFill v-if="props.info" class="cardBlockUiCard__iconBigTwo" />
        <IconMegafonFill
          v-if="props.infoTwo"
          class="cardBlockUiCard__iconBigTwo"
        />
        <IconPaymentFill
          v-if="props.payment"
          class="cardBlockUiCard__iconBigTwo"
        />
      </div>

      <div class="cardBlockUiCard__textBlock">
        <CardBlockUiLine animate-one />
        <CardBlockUiLine animate-two />
      </div>
    </div>

    <div
      v-if="props.shop"
      class="cardBlockUiCard__grid cardBlockUiCard__grid_shop"
    >
      <div
        v-if="props.delivery"
        class="cardBlockUiCard__iconBox cardBlockUiCard__iconBox_shadow"
      >
        <IconDeliveryFill class="cardBlockUiCard__iconBigTwo" />
      </div>
      <IconCartFill v-if="props.cart" class="cardBlockUiCard__iconBig" />

      <div class="cardBlockUiCard__textBlock">
        <CardBlockUiLine animate-one />
        <CardBlockUiLine animate-two />
      </div>
    </div>

    <div
      v-if="props.large"
      class="cardBlockUiCard__grid cardBlockUiCard__grid_large"
    >
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconLeafFill
          v-if="props.landing"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_green"
        />
        <IconHeartFill
          v-if="props.commerce"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_orange"
        />

        <CardBlockUiLine animate-one />
        <CardBlockUiLine animate-three />
        <CardBlockUiLine animate-two />
      </div>
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconRocketFill
          v-if="props.landing"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_orange"
        />
        <IconStarKidFill
          v-if="props.commerce"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_orange"
        />
        <CardBlockUiLine animate-three />
        <CardBlockUiLine animate-two />
        <CardBlockUiLine animate-one />
      </div>
      <div class="cardBlockUiCard__textBlock cardBlockUiCard__textBlock_center">
        <IconPlantFill
          v-if="props.landing"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_green"
        />
        <IconHeartFill
          v-if="props.commerce"
          class="cardBlockUiCard__icon cardBlockUiCard__icon_orange"
        />
        <CardBlockUiLine animate-two />
        <CardBlockUiLine animate-three />
        <CardBlockUiLine animate-one />
      </div>
    </div>

    <div class="cardBlockUiCard__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
      <div v-if="props.normal" class="cardBlockUiCard__line" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  normal?: boolean;
  large?: boolean;
  landing?: boolean;
  info?: boolean;
  infoTwo?: boolean;
  shop?: boolean;
  cart?: boolean;
  delivery?: boolean;
  commerce?: boolean;
  payment?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiCard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: $black-mask-two;
  border-radius: $br-xxs;
  padding: 8px;
  overflow: hidden;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &_large {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
    }

    &_shop {
      gap: 10px;
    }
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    &_center {
      align-items: center;
    }
  }

  &__iconBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: $white-mask-three;

    &_shadow {
      box-shadow: $shadow-text-one;
      animation: shine 5s linear infinite;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;

    &_white {
      fill: $white-one;
    }

    &_green {
      fill: $green-one;
    }

    &_orange {
      fill: $orange-one;
    }
  }

  &__iconBig {
    width: 28px;
    height: 28px;
    fill: $orange-one;
  }

  &__iconBigTwo {
    width: 28px;
    height: 28px;
    fill: $white-one;
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
