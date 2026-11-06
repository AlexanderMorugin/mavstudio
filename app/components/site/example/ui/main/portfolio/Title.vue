<template>
  <div class="siteExampleUiMainPortfolioTitle">
    <h3 class="siteExampleUiMainPortfolioTitle__text">
      {{ props.title }}
    </h3>
    <ParagraphNormal black class="siteExampleUiMainPortfolioTitle__subtitle">
      {{ props.subtitle }}
    </ParagraphNormal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainPortfolioTitle {
  // padding-left: 20px;
  // padding-right: 20px;

  // @media (max-width: 1023px) {
  //   padding-left: 0;
  //   padding-right: 0;
  // }

  // &__titleBox {
  //   padding-bottom: 10px;
  //   border-bottom: 1px solid $black-mask-three;
  // }

  &__text {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 44px;
    text-align: center;
    color: $black-mask-two;

    @media (max-width: 1023px) {
      font-size: 32px;
    }

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }

  &__subtitle {
    text-align: center;
    color: $black-mask-two;
  }
}
</style>
