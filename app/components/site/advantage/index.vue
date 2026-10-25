<template>
  <section class="siteCardAdvantage">
    <ContainerPage desktopPadding class="siteCardAdvantage__container">
      <SiteAdvantageBlock
        v-for="item in props.advantage"
        :key="item.id"
        :data="item"
      />
    </ContainerPage>
  </section>
</template>

<script setup lang="ts">
import type { ISiteAdvantage } from "~/types/site";

const props = defineProps<{
  advantage: ISiteAdvantage[];
}>();
</script>

<style lang="scss" scoped>
.siteCardAdvantage {
  background: $gradient-white-one;
  padding-top: 60px;
  padding-bottom: 40px;

  @media (max-width: 1023px) {
    padding-top: 40px;
  }

  @media (max-width: 767px) {
    padding-top: 100px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
