<template>
  <img
    :src="props.image"
    :alt="props.title"
    :title="props.title"
    class="siteExampleUiMainAboutImage"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainAboutImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
