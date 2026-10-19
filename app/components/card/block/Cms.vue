<template>
  <CardBlockContainer>
    <CardBlockUiHeader cms />
    <div class="cardBlockCms">
      <CardBlockUiSidebar />
      <CardBlockUiCmsContent />
    </div>
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockCms {
  display: grid;
  grid-template-columns: 30% 1fr;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockPage {
  padding-left: 6px;
  padding-right: 6px;
}
</style>
