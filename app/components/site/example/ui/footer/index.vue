<template>
  <section class="siteExampleUiFooter">
    <ContainerPage desktopPadding class="siteExampleUiFooter__container">
      <LogoForFooterExample title="Логотип компании" />
      <div class="siteExampleUiFooter__block">
        <SiteExampleUiFooterNav :navData="props.navData" />
        <SiteExampleUiFooterAddress />
      </div>
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
  backdrop-filter: blur(15px) brightness(80%);
  border-top: 1px solid $white-mask-three;
  margin-top: 60px;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__block {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
}
</style>
