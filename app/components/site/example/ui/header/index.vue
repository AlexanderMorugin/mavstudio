<template>
  <section class="siteExampleUiHeader">
    <ContainerPage desktopPadding class="siteExampleUiHeader__container">
      <LogoForHeaderExample title="Логотип компании" />
      <SiteExampleUiHeaderNav v-if="!isScreenTablet" :navData="props.navData" />
      <SiteExampleUiHeaderNavButton
        v-if="isScreenTablet"
        title="меню"
        @click="isExampleHeaderNavModalOpen = true"
      />
    </ContainerPage>

    <Transition name="right">
      <SiteExampleUiHeaderNavModal
        v-if="isExampleHeaderNavModalOpen"
        title="Меню"
        name="menu"
        @closeModal="isExampleHeaderNavModalOpen = false"
      />
    </Transition>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleNav } from "~/types/site";

const props = defineProps<{
  navData: ISiteExampleNav[];
}>();

const { isScreenTablet } = useResizeTablet();

const isExampleHeaderNavModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.siteExampleUiHeader {
  position: relative;
  backdrop-filter: blur(15px) brightness(80%);
  border-bottom: 1px solid $white-mask-three;
  z-index: 2;
  overflow: hidden;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 70px;
    // border: 1px solid red;

    @media (max-width: 767px) {
      height: 60px;
    }
  }
}
</style>
