<template>
  <div class="siteExampleMainCardTitle">
    <div v-if="props.title" class="siteExampleMainCardTitle__text">
      {{ props.title }}
    </div>
    <div v-if="props.subtitle" class="siteExampleMainCardTitle__subtitle">
      {{ props.subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainCardTitle {
  padding-left: 10px;
  padding-right: 10px;

  &__text {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    font-size: 14px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
