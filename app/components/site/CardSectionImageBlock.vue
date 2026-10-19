<template>
  <section class="siteCardSectionImageBlock">
    <h2 class="siteCardSectionImageBlock__title">Примерная структура сайта</h2>
    <CardBlockLanding v-if="props.siteName === 'landing'" isPage />
    <CardBlockBusiness v-if="props.siteName === 'business'" isPage />
    <CardBlockMultipage v-if="props.siteName === 'multipage'" isPage />
    <CardBlockInfo v-if="props.siteName === 'info'" isPage />
    <CardBlockCommerce v-if="props.siteName === 'commerce'" isPage />
    <CardBlockShop v-if="props.siteName === 'shop'" isPage />
    <CardBlockCms v-if="props.siteName === 'cms'" isPage />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  siteName: string;
}>();
</script>

<style lang="scss" scoped>
.siteCardSectionImageBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__title {
    font-size: 16px;
    // color: $white-mask-one;
  }
}
</style>
