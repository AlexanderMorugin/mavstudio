<template>
  <div :class="['heroSubtitleBlock', { heroSubtitleBlock_modal: props.modal }]">
    <span class="heroSubtitleBlock__one">Мастерская</span>
    <span class="heroSubtitleBlock__two">Авторских</span>
    <span class="heroSubtitleBlock__three">Веб-сайтов</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modal?: boolean;
}>();
</script>

<style lang="scss" scoped>
.heroSubtitleBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  height: 60px;
  font-family: "Geist-Medium", sans-serif;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: $white-one;

  @media (max-width: 767px) {
    gap: 10px;
    font-size: 15px;
    letter-spacing: 1px;
  }

  @media (max-width: 389px) {
    gap: 10px;
    font-size: 13px;
    letter-spacing: 0;
  }

  &_modal {
    flex-direction: column;
  }

  &__one {
    animation: from-left 2.7s;
  }

  &__two {
    animation: scale 3.2s;
  }

  &__three {
    animation: from-right 3.7s;
  }
}

@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  90% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes from-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  80% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
  }
}
</style>
