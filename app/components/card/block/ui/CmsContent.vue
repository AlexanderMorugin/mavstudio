<template>
  <div class="cardBlockUiCmsContent">
    <CardBlockUiCmsContentButton
      image="personImage"
      imageFill="white"
      :isPage="props.isPage"
    />
    <CardBlockUiCmsContentButton
      image="paymentImage"
      imageFill="white"
      :isPage="props.isPage"
    />
    <CardBlockUiCmsContentButton
      image="rubleImage"
      imageFill="white"
      :isPage="props.isPage"
    />
    <CardBlockUiCmsContentButton
      image="settingsImage"
      imageFill="white"
      :isPage="props.isPage"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiCmsContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 10px;
  padding-top: 6px;
  padding-left: 6px;
}
</style>
