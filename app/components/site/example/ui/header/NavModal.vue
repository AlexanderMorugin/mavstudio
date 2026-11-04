<template>
  <div class="siteExampleUiHeaderNavModal">
    <div class="siteExampleUiHeaderNavModal__container">
      <div class="siteExampleUiHeaderNavModal__top">
        <span class="siteExampleUiHeaderNavModal__topTitle">
          {{ props.title }}</span
        >
        <ButtonWithIcon
          name="close"
          title="Закрыть"
          @click="$emit('closeModal')"
        />
      </div>
      <SiteExampleUiHeaderNav
        :navData="props.navData"
        @click="$emit('closeModal')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleNav } from "~/types/site";

const props = defineProps<{
  title: string;
  name: string;
  navData: ISiteExampleNav[];
}>();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.siteExampleUiHeaderNavModal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(10px) brightness(0.6);
  z-index: 4;

  &__container {
    padding: 20px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__topTitle {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 12px;
    color: $white-one;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
