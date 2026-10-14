<template>
  <section class="siteBlock">
    <CardWithContent v-for="item in props.catalog" :key="item.id" :item="item">
      <SiteListCard :item="item" />
    </CardWithContent>
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
  padding-bottom: 30px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
