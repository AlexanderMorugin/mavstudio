<template>
  <div class="emblaProductImageThumbs">
    <div
      v-for="item in props.itemList"
      :key="item.id"
      :class="[
        'emblaProductImageThumbs__button',
        {
          emblaProductImageThumbs__button_active: props.activeThumb === item.id,
        },
      ]"
      @click="emits('goToSlide', item)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleCarousel } from "~/types/site";

const props = defineProps<{
  itemList: ISiteExampleCarousel[];
  activeThumb: number;
}>();

const emits = defineEmits<{
  goToSlide: [slide: ISiteExampleCarousel];
}>();
</script>

<style lang="scss" scoped>
.emblaProductImageThumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 10px;

  &__button {
    width: 10px;
    height: 5px;
    border-radius: 4px;
    background: $black-mask-three;
    transition: 0.1s ease-in-out;
    cursor: pointer;

    &_active {
      width: 20px;
      cursor: auto;
      opacity: 0.6;
    }
  }
}
</style>
