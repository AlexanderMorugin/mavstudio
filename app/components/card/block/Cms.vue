<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader cms :isPage="props.isPage" />
    <div :class="['cardBlockCms', { cardBlockCms_page: props.isPage }]">
      <CardBlockUiSidebar :isPage="props.isPage" />
      <CardBlockUiCmsContent :isPage="props.isPage" />
    </div>
  </CardBlockContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockCms {
  display: grid;
  grid-template-columns: 30% 1fr;

  &_page {
    // padding-left: 6px;
    // padding-right: 6px;
    // padding-bottom: 10px;

    // display: flex;
    // flex-direction: column;
    // gap: 10px;
    padding: 10px;
    border: 1px solid $orange-four;
  }
}
</style>
