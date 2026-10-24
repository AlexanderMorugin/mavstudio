<template>
  <ContainerPage desktopPadding class="siteExampleTitlePage">
    <h2 v-if="props.title" class="siteExampleTitlePage__title">
      {{ props.title }}
    </h2>
    <span v-if="props.subtitle" class="siteExampleTitlePage__subtitle">{{
      props.subtitle
    }}</span>
  </ContainerPage>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleTitlePage {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  // @media (max-width: 767px) {
  //   padding-bottom: 20px;
  // }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 40px;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
    color: $black-mask-one;

    @media (max-width: 767px) {
      font-size: 28px;
      letter-spacing: 2px;
    }

    @media (max-width: 389px) {
      font-size: 24px;
      letter-spacing: 0;
    }
  }

  &__subtitle {
    text-align: center;
    line-height: 1.5;
    color: $black-mask-one;

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
}
</style>
