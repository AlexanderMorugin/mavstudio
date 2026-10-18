<template>
  <div class="titlePage">
    <h1 v-if="props.title" class="titlePage__title">
      {{ props.title }}
    </h1>
    <span v-if="props.subtitle" class="titlePage__subtitle">{{
      props.subtitle
    }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="scss" scoped>
.titlePage {
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-top: 20px;
  padding-bottom: 40px;

  @media (max-width: 576px) {
    padding-bottom: 20px;
  }

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 60px;
    line-height: 1.2;
    letter-spacing: 4px;
    text-align: center;
    background-clip: text;
    background-image: linear-gradient(
      90deg,
      $white-one 40%,
      $white-mask-two 67%
    );
    color: transparent;
    animation: fall-down 1s ease-in-out;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
      letter-spacing: 2px;
    }
  }

  &__subtitle {
    font-size: 13px;
    text-align: center;
    color: $white-mask-two;
    animation: appear 1s ease-in-out;

    @media (max-width: 576px) {
      font-size: 11px;
    }
    @media (max-width: 389px) {
      font-size: 10px;
    }
  }
}

@keyframes fall-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 0.9;
    transform: translateY(0);
  }
  70% {
    opacity: 0.9;
    transform: translateY(-20%);
  }
  80% {
    opacity: 0.9;
    transform: translateY(0);
  }
  90% {
    opacity: 0.9;
    transform: translateY(-10%);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0);
  }
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
