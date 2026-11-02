<template>
  <div class="siteExampleUiFooterNav">
    <NuxtLink
      v-for="item in props.navData"
      :key="item.id"
      :to="`#${item.anchor}`"
      class="siteExampleUiFooterNav__link"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleNav } from "~/types/site";

const props = defineProps<{
  navData: ISiteExampleNav[];
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiFooterNav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
  height: fit-content;
  padding-top: 20px;

  @media (max-width: 767px) {
    place-items: center;
  }

  &__link {
    width: fit-content;

    line-height: 1.5;
    transition: 0.1s ease;

    @media (max-width: 576px) {
      font-size: 14px;
    }

    &:hover {
      color: $orange-one;
    }
  }
}
</style>
