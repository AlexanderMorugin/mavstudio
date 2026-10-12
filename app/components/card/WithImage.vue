<template>
  <div class="cardWithImage">
    <div class="cardWithImage__pictureBlock">
      <img
        :src="props.item.image"
        :alt="props.item.title"
        :title="props.item.title"
        class="cardWithImage__picture"
      />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.cardWithImage {
  display: flex;
  flex-direction: column;
  // gap: 10px;
  border-radius: $br-m;
  border: 1px solid $black-mask-four;
  padding: 3px 3px 10px 3px;

  &__pictureBlock {
    display: block;
    border-top-left-radius: $br-xs;
    border-top-right-radius: $br-xs;
    overflow: hidden;
  }

  &__picture {
    width: 100%;
  }
}
</style>
