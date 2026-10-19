<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionLarge business textGreen :isPage="props.isPage" />
    </div>
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionLarge building textOrange :isPage="props.isPage" />
    </div>
    <CardBlockUiFooter :isPage="props.isPage" />
  </CardBlockContainer>
</template>

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
