<template>
  <section class="siteList">
    <SiteListCardLinkBlock
      v-for="item in props.catalog"
      :key="item.id"
      :item="item"
    >
      <SiteListCardTitle
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
      />
    </SiteListCardLinkBlock>
  </section>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  catalog: ISiteCatalog[];
}>();
</script>

<style lang="scss" scoped>
.siteList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
  row-gap: 100px;
  padding-bottom: 30px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
