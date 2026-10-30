<template>
  <section class="siteExampleMainBlock">
    <div class="siteExampleMainBlock__container">
      <h3>{{ props.siteDataBlock.title }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleBlock } from "~/types/site";

const props = defineProps<{
  siteDataBlock: ISiteExampleBlock;
}>();

console.log(props.siteDataBlock);
</script>

<style lang="scss" scoped>
.siteExampleMainBlock {
  max-width: $screen-xxl;
  margin: 0 auto;
  height: 400px;
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__container {
    height: 100%;
    padding: 20px;
    border-radius: 14px;
    backdrop-filter: brightness(70%);
    box-shadow: $shadow-card-black-one;
    // border: 1px solid red;

    @media (max-width: 1023px) {
      border-radius: 20px;
    }
  }
}
</style>
