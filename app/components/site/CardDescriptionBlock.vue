<template>
  <div class="siteCardDescriptionBlock">
    <div class="siteCardDescriptionBlock__textBox">
      <span class="siteCardDescriptionBlock__title">Описание</span>
      <div>
        <div class="siteCardDescriptionBlock__line" />
      </div>
      <ParagraphNormal>
        Описание Описание Описание Описание Описание Описание Описание
      </ParagraphNormal>
    </div>
    <!-- <div class="siteCardDescriptionBlock__textBox">
      <span class="siteCardDescriptionBlock__title">Описание</span>
      <div>
        <div class="siteCardDescriptionBlock__line" />
      </div>
      <ParagraphNormal>
        Описание Описание Описание Описание Описание Описание Описание
      </ParagraphNormal>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardDescriptionBlock {
  display: flex;
  flex-direction: column;
  gap: 40px;

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
