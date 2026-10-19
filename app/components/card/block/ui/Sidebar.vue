<template>
  <div class="cardBlockUiSidebar">
    <CardBlockUiSidebarButton sidebar :isPage="props.isPage" />
    <CardBlockUiSidebarButton sidebar :isPage="props.isPage" />
    <CardBlockUiSidebarButton sidebar :isPage="props.isPage" />
    <CardBlockUiSidebarButton sidebar :isPage="props.isPage" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSidebar {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
}
</style>
