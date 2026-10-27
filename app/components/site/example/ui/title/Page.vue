<template>
  <ContainerPage desktopPadding class="siteExampleUiTitlePage">
    <h2 v-if="props.title" class="siteExampleUiTitlePage__title">
      {{ props.title }}
    </h2>
    <span v-if="props.subtitle" class="siteExampleUiTitlePage__subtitle">{{
      props.subtitle
    }}</span>
  </ContainerPage>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiTitlePage {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 44px;
    text-align: center;
    color: $black-mask-one;

    @media (max-width: 1023px) {
      font-size: 32px;
    }

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }

  &__subtitle {
    text-align: center;
    line-height: 1.2;
    color: $black-mask-one;

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
}
</style>
