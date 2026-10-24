<template>
  <section class="siteCardSectionDescription">
    <div
      v-for="item in props.description"
      :key="item.id"
      class="siteCardSectionDescription__textBox"
    >
      <span class="siteCardSectionDescription__title">{{ item.title }}</span>
      <div class="siteCardSectionDescription__line" />
      <ParagraphNormal v-if="item.textOne">
        {{ item.textOne }}
      </ParagraphNormal>
      <ParagraphNormal
        v-if="item.textTwo"
        class="siteCardSectionDescription__text"
      >
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
.siteCardSectionDescription {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;

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

  &__text {
    padding-top: 30px;
  }
}
</style>
