<template>
  <section class="siteCardTextBlock">
    <div class="siteCardTextBlock__textBox">
      <span class="siteCardTextBlock__title">Описание</span>
      <!-- <div> -->
      <div class="siteCardTextBlock__line" />
      <!-- </div> -->
      <ParagraphNormal>
        Описание Описание Описание Описание Описание Описание Описание
      </ParagraphNormal>
    </div>
    <div class="siteCardTextBlock__textBox">
      <span class="siteCardTextBlock__title">Описание</span>
      <!-- <div> -->
      <div class="siteCardTextBlock__line" />
      <!-- </div> -->
      <ParagraphNormal>
        Описание Описание Описание Описание Описание Описание Описание
      </ParagraphNormal>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardTextBlock {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;

  // border: 1px solid red;

  &__textBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    letter-spacing: 2px;
    color: $orange-three;
    // padding-bottom: 8px;
  }

  &__line {
    display: flex;
    justify-self: center;
    width: 90%;
    height: 1px;
    background: $white-mask-three;
  }
}
</style>
