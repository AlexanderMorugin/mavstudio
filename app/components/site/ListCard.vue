<template>
  <div class="siteListCard">
    <TitleCard
      :title="props.item.title"
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
  // border: 1px solid red;
  padding: 10px;
}
</style>
