<template>
  <div class="siteListCard">
    <TitleCardSubtitle
      :subtitle="props.item.subtitle"
      :description="props.item.description"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.siteListCard {
  padding: 10px;
}
</style>
