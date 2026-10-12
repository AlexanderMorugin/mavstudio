<template>
  <NuxtLink :to="props.item.route" class="cardLinkWithImage">
    <div class="cardLinkWithImage__pictureBlock">
      <img
        :src="props.item.image"
        :alt="props.item.title"
        :title="props.item.title"
        class="cardLinkWithImage__picture"
      />
    </div>
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.cardLinkWithImage {
  display: flex;
  flex-direction: column;
  border-radius: $br-m;
  border: 1px solid $black-mask-four;
  box-shadow: $shadow-card-one;
  padding: 3px 3px 10px 3px;
  transition: 0.2s ease;

  &:hover {
    box-shadow: $shadow-card-two;
    transform: translateY(-1%);
  }

  &__pictureBlock {
    display: block;
    border-top-left-radius: $br-xs;
    border-top-right-radius: $br-xs;
    overflow: hidden;
    padding-bottom: 20px;
  }

  &__picture {
    width: 100%;
    transition: 0.2s ease;
  }
}
.cardLinkWithImage:hover .cardLinkWithImage__picture {
  box-shadow: $shadow-card-two;
}
</style>
