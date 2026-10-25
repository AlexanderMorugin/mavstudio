<template>
  <section class="siteDescription">
    <div
      v-for="item in props.description"
      :key="item.id"
      class="siteDescription__textBox"
    >
      <h2 class="siteDescription__title">{{ item.title }}</h2>
      <div
        v-if="item.id === 1"
        class="siteDescription__line siteDescription__line_one"
      />
      <div
        v-if="item.id === 2"
        class="siteDescription__line siteDescription__line_two"
      />
      <ParagraphNormal v-if="item.textOne">
        {{ item.textOne }}
      </ParagraphNormal>
      <ParagraphNormal v-if="item.textTwo" class="siteDescription__text">
        {{ item.textTwo }}
      </ParagraphNormal>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteDescription } from "~/types/site";

const props = defineProps<{
  description: ISiteDescription[];
}>();
</script>

<style lang="scss" scoped>
.siteDescription {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;
  padding-bottom: 100px;

  &__textBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    color: $orange-three;
  }

  &__line {
    display: flex;
    justify-self: center;
    width: 90%;
    height: 1px;
    background: $white-mask-three;
    animation: move 7s ease-in-out infinite;

    &_one {
      animation-delay: 1s;
    }

    &_two {
      animation-delay: 2s;
    }
  }

  &__text {
    padding-top: 20px;
  }
}
@keyframes move {
  0% {
    width: 0%;
    opacity: 1;
  }
  20% {
    width: 100%;
    opacity: 1;
  }
  80% {
    width: 100%;
    opacity: 1;
  }
  90% {
    width: 100%;
    opacity: 0;
  }
  100% {
    width: 0%;
    opacity: 0;
  }
}
</style>
