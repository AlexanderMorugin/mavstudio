<template>
  <div class="siteCardSubtitle">
    <div class="siteCardSubtitle__textBox">
      <span class="siteCardSubtitle__title">Описание</span>
      <div>
        <div class="siteCardSubtitle__line" />
      </div>
      <ParagraphNormal>{{ props.siteData.cardSubtitle }}</ParagraphNormal>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardSubtitle {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__textBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    letter-spacing: 2px;
    color: $orange-three;
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
