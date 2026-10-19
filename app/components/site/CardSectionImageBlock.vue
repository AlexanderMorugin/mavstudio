<template>
  <section class="siteCardSectionImageBlock">
    <h2 class="siteCardSectionImageBlock__title">структура сайта</h2>
    <CardBlockLanding v-if="props.siteName === 'landing'" isPage />
    <CardBlockBusiness v-if="props.siteName === 'business'" isPage />
    <CardBlockMultipage v-if="props.siteName === 'multipage'" isPage />
    <CardBlockInfo v-if="props.siteName === 'info'" isPage />
    <CardBlockCommerce v-if="props.siteName === 'commerce'" isPage />
    <CardBlockShop v-if="props.siteName === 'shop'" isPage />
    <CardBlockCms v-if="props.siteName === 'cms'" isPage />

    <CardIndicatorForHeader />
    <CardIndicatorForFooter v-if="props.siteName !== 'cms'" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  siteName: string;
}>();
</script>

<style lang="scss" scoped>
.siteCardSectionImageBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 60px;

  &__title {
    font-size: 16px;
  }
}
</style>
