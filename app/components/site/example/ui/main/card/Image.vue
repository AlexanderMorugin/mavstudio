<template>
  <div class="siteExampleMainCardImage">
    <div class="siteExampleMainCardImage__container">
      <picture>
        <source media="(max-width: 767px)" :srcset="props.image768" />
        <source media="(max-width: 3840px)" :srcset="props.image300" />

        <img
          :src="props.image768"
          :alt="props.title"
          class="siteExampleMainCardImage__picture"
        />
      </picture>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image768: string;
  image300: string;
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
    height: 100%;
    object-fit: cover;
  }
}
</style>
