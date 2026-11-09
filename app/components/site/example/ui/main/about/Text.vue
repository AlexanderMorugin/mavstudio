<template>
  <div class="siteExampleUiMainAboutText">
    <!-- <div class="siteExampleUiMainAboutText__titleBox">
      <h3 class="siteExampleUiMainAboutText__title">
        {{ props.title }}
      </h3>
      <ParagraphNormal black class="siteExampleUiMainAboutText__subtitle">
        {{ props.subtitle }}
      </ParagraphNormal>
    </div> -->
    <SiteExampleUiTitleBlock
      :title="props.title"
      :subtitle="props.subtitle"
      isLineBottom
    />

    <div class="siteExampleUiMainAboutText__textBox">
      <ParagraphNormal black>
        {{ props.textOne }}
      </ParagraphNormal>
      <ParagraphNormal black>
        {{ props.textTwo }}
      </ParagraphNormal>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  textOne: string;
  textTwo?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainAboutText {
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
  }

  // &__titleBox {
  //   padding-bottom: 10px;
  //   border-bottom: 1px solid $black-mask-three;
  // }

  // &__title {
  //   font-family: "Montserrat-Bold", sans-serif;
  //   font-size: 44px;
  //   text-align: center;
  //   color: $black-mask-two;

  //   @media (max-width: 1023px) {
  //     font-size: 32px;
  //   }

  //   @media (max-width: 576px) {
  //     font-size: 24px;
  //   }
  // }

  // &__subtitle {
  //   text-align: center;
  //   color: $black-mask-two;
  // }

  &__textBox {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 20px;
  }
}
</style>
