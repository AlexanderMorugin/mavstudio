<template>
  <div>
    <div v-if="props.title" class="siteExampleMainCardTitle">
      {{ props.title }}
    </div>
    <div v-if="props.subtitle" class="siteExampleMainCardSubtitle">
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
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 20px;
  }
}
.siteExampleMainCardSubtitle {
  font-size: 14px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  // overflow-wrap: anywhere;
}
</style>
