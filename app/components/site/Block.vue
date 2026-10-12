<template>
  <section class="siteBlock">
    <CardWithImage v-for="item in props.catalog" :key="item.id" :item="item">
      <SiteListCard :item="item" />
    </CardWithImage>
  </section>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  catalog: ISiteCatalog[];
}>();
</script>

<style lang="scss" scoped>
.siteBlock {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 40px;

  // border: 1px solid red;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
