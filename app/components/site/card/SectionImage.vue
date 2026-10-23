<template>
  <section class="siteCardSectionImage">
    <h2 class="siteCardSectionImage__title">структура сайта</h2>
    <CardBlockLanding v-if="props.siteName === 'landing'" isPage />
    <CardBlockBusiness v-if="props.siteName === 'business'" isPage />
    <CardBlockMultipage v-if="props.siteName === 'multipage'" isPage />
    <CardBlockInfo v-if="props.siteName === 'info'" isPage />
    <CardBlockCommerce v-if="props.siteName === 'commerce'" isPage />
    <CardBlockShop v-if="props.siteName === 'shop'" isPage />
    <CardBlockCms v-if="props.siteName === 'cms'" isPage />

    <CardIndicatorForHeader />
    <CardIndicatorForContent />
    <CardIndicatorForFooter v-if="props.siteName !== 'cms'" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  siteName: string;
}>();
</script>

<style lang="scss" scoped>
.siteCardSectionImage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 60px;

  &__title {
    width: 100%;
    font-size: 16px;
    text-align: right;
    letter-spacing: 0.8px;
  }
}
</style>
