<template>
  <div class="siteExampleUiHeaderNav">
    <NuxtLink
      v-for="item in props.navData"
      :key="item.id"
      :to="`#${item.anchor}`"
      class="siteExampleUiHeaderNav__link siteExampleUiHeaderNav__link_line"
      @click="$emit('closeModal')"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleNav } from "~/types/site";

const props = defineProps<{
  navData: ISiteExampleNav[];
}>();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.siteExampleUiHeaderNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  &__link {
    position: relative;
    display: inline-block;
    line-height: 1.5;

    &:after {
      content: "";
      display: block;
      position: absolute;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
    }

    &_line:after {
      transform-origin: right;
      transform: scaleX(0);
      bottom: 0;
      height: 1px;
      width: 100%;
      background: $blue-two;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &_line:hover:after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }
  }
}
</style>
