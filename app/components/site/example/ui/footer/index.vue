<template>
  <section class="siteExampleUiFooter">
    <ContainerPage desktopPadding class="siteExampleUiFooter__container">
      <LogoForFooterExample title="Логотип компании" />
      <SiteExampleUiFooterNav :navData="props.navData" />
    </ContainerPage>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleNav } from "~/types/site";

const props = defineProps<{
  navData: ISiteExampleNav[];
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiFooter {
  // height: 300px;
  backdrop-filter: blur(15px) brightness(80%);
  border-top: 1px solid $white-mask-three;
  margin-top: 100px;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
