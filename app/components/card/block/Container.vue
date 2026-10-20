<template>
  <div
    :class="['cardBlockContainer', { cardBlockContainer_page: props.isPage }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100%;

  @media (max-width: 767px) {
    width: 80%;
  }

  &_page {
    width: 100%;
    height: 300px;
    // gap: 10px;
  }
}
</style>
