<template>
  <div
    :class="[
      'cardBlockUiLine',
      { cardBlockUiLine_animateOne: props.animateOne },
      { cardBlockUiLine_animateTwo: props.animateTwo },
      { cardBlockUiLine_animateThree: props.animateThree },
      { cardBlockUiLine_animateFooter: props.animateFooter },
      { cardBlockUiLine_orange: props.textOrange },
      { cardBlockUiLine_green: props.textGreen },
    ]"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  animateOne?: boolean;
  animateTwo?: boolean;
  animateThree?: boolean;
  animateFooter?: boolean;
  textOrange?: boolean;
  textGreen?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiLine {
  height: 2px;
  background: $white-mask-two;

  &_orange {
    background: $orange-mask-one;
  }

  &_green {
    background: $green-mask-one;
  }

  &_animateOne {
    animation: move 5s ease-in-out infinite;
  }

  &_animateTwo {
    animation: move 4s ease-in-out infinite;
  }

  &_animateThree {
    animation: move 6s ease-in-out infinite;
  }

  &_animateFooter {
    background-image: linear-gradient(
      to left,
      transparent,
      transparent,
      $white-mask-five,
      $white-mask-five,
      $black-mask-three,
      $black-mask-three
    );
    animation: background-fade 10s linear infinite;
    background-size: 500%;
    -webkit-animation: background-fade 10s linear infinite;
    -moz-animation: background-fade 10s linear infinite;
  }
}
@keyframes move {
  0% {
    width: 50%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 50%;
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
