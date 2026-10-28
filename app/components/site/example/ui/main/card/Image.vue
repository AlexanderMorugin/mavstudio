<template>
  <div class="siteExampleMainCardImage">
    <div class="siteExampleMainCardImage__container">
      <img
        :src="props.image"
        :alt="props.title"
        :title="props.title"
        class="siteExampleMainCardImage__picture"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainCardImage {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border: 1px solid $grey-one;
  padding: 4px;

  @media (max-width: 1023px) {
    height: 200px;
  }

  @media (max-width: 767px) {
    width: inherit;
    height: 300px;
    border: none;
    padding: 0;
  }

  &__container {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;

    @media (max-width: 767px) {
      border-radius: 12px;
    }
  }

  &__picture {
    width: 100%;
    object-fit: cover;

    // @media (max-width: 767px) {
    //   width: 90%;
    // }
  }
}
</style>
