<template>
  <div class="siteExampleUiMainHeroSubtitle">
    <span class="siteExampleUiMainHeroSubtitle__text">
      {{ props.subtitle }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  subtitle: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainHeroSubtitle {
  display: flex;
  align-items: center;
  height: 200px;
  background: $gradient-blue-three;
  border-left: 2px solid $blue-mask-two;
  // padding-top: 20px;
  // padding-bottom: 20px;
  overflow: hidden;
  animation: fall 15s linear infinite;

  @media (max-width: 1023px) {
    border-left: none;
  }

  @media (max-width: 576px) {
    height: 160px;
  }

  &__text {
    max-width: 650px;
    font-family: "CormorantGaramond-SemiBold", sans-serif;
    font-size: 44px;
    line-height: 1.2;
    z-index: 3;
    padding-left: 20px;
    padding-right: 20px;
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

    @media (max-width: 576px) {
      font-size: 32px;
    }
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
</style>
