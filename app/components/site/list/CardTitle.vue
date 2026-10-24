<template>
  <div class="siteListCardTitle">
    <h2 class="siteListCardTitle__title">{{ props.title }}</h2>
    <span v-if="props.subtitle" class="siteListCardTitle__subtitle">{{
      props.subtitle
    }}</span>
    <ParagraphNormal v-if="props.description" center black>{{
      props.description
    }}</ParagraphNormal>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
  description?: string;
}>();
</script>

<style lang="scss" scoped>
.siteListCardTitle {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
    text-align: center;
    color: $blue-two;

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 389px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    font-size: 14px;
    letter-spacing: 1.2px;
    text-align: center;
    text-transform: uppercase;
    color: $black-one;
  }
}
</style>
